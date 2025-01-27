<script setup lang="ts">
import { computed, ref } from "vue";

// Array de objetos representando os produtos
const products = ref([
  { id: 1, name: "Produto A", unitValue: 10.5, subTotal: 10.5, qtd: 1 },
  { id: 2, name: "Produto B", unitValue: 25.0,subTotal: 10.5, qtd: 1 },
  { id: 3, name: "Produto C", unitValue: 15.75, subTotal: 10.5, qtd: 1 },
  { id: 4, name: "Produto D", unitValue: 30.2, subTotal: 10.5, qtd: 1 },
]);
const totalValue = computed(() => {
  return products.value.reduce((acc, product) => acc + product.unitValue, 0);
});

const subTotalValue = computed(() => {
  return products.value.reduce((acc, product) => acc + product.unitValue, 0);
});

</script>

<template>
  <!--Div Pai -->
  <div class="w-full p-6 bg-slate-100 text-black">
    <div class="flex flex-col p-4 justify-center bg-white border rounded-md">
      <!--Div com justify-between CPF EMAIL CELULAR-->
      <div class="flex flex-col w-full">
        <div class="flex w-full justify-between p-4">
          <!--Div apresentando os dados-->
          <div class="flex flex-col gap-2">
            <p class="font-bold">Nome SLA</p>
            <p>CPF: 000.000.000-00</p>
            <p>Email: email@example.com</p>
            <p>Celular: (00) 00000-0000</p>
            <p>IP: 000.000.000.000</p>
          </div>
          <div class="flex items-center flex-col gap-2">
            <div
              class="flex justify-center items-center w-[50%] bg-green-400/20 text-green-700 text-sm font-bold p-2 rounded-md"
            >
              Aprovado
            </div>
            <select
              class="text-gray-300/90 focus:outline-none border rounded-md p-2"
              name=""
              id=""
            >
              <option disabled selected hidden>Aletrar Status Do Pedido</option>
              <option class="text-black text-center" value="">Ativo</option>
              <option class="text-black text-center" value="">Inativo</option>
            </select>
          </div>
        </div>
      </div>
      <!--Final da Div-->
      <!--Div Detalhes do pedido Forma de Pagamento Endereço de Entrega-->
      <div class="flex flex-col p-4">
        <div class="grid grid-cols-3">
          <!--Detalhes do pedido-->
          <div class="flex flex-col gap-2">
            <p class="font-bold">Detalhes do pedido</p>
            <p class="font-light">Data do pedido</p>
            <p class="text-gray-500">22/01/2025; 01:07:48</p>
            <p>Data da última mudança de status</p>
            <p class="text-gray-500">22/01/2025; 01:08:10</p>
          </div>
          <!--Forma de Pagemento-->
          <div class="flex flex-col gap-2">
            <p class="font-bold">Forma de Pagamento</p>
            <a href="" class=""></a>
            <button
              class="border rounded-md w-1/3 text-green-500 border-green-500 p-2 flex flex-row items-center gap-2"
            >
              <img
                src="../assets/DetalhesDoPedidoView/wp.svg"
                color="#22c55e"
                class="h-5 w-5"
                alt=""
              />
              Enviar Menagem
            </button>
            <p>PIX</p>
            <p>Processado por summit</p>
          </div>
          <!--Endereço de Entrega-->
          <div class="flex flex-col gap-2">
            <p class="font-bold gap-2">Endereço de Entrega</p>
            <p>sdlkhfkjshfkjhskjfhskjdfh 123</p>
            <p>CEP: 00000-000</p>
            <p class="flex flex-row items-center font-bold">
              <img
                src="../assets/DetalhesDoPedidoView/truck.gif"
                class="w-8 h-8"
                alt=""
              />
              Código de rastreio
            </p>
            <p>Aguardando envio</p>
          </div>
        </div>
      </div>
      <!--Final da Div-->
      <!--Div Produtos-->
      <div class="flex flex-col p-4 bg-white">
        <h1 class="font-bold">Produtos</h1>
        <div class="p-8">
          <div>
            <table class="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th class="text-left">Nome</th>
                  <th>Valor Total</th>
                  <th>UNIT.</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <!-- Linha do produto -->
                <tr class="border-b" v-for="product in products" :key="product.id">
                  <td class="py-2 px-4 text-sm text-gray-700">
                    <div class="flex items-start space-x-3">
                      <img src="" alt="Produto" class="w-10 h-10 rounded" />
                      <div>
                        <p class="text-sm font-medium text-gray-800">
                          {{ product.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="py-2 px-4 text-sm text-gray-700 text-center">
                    {{ product.qtd }}
                  </td>
                  <td class="py-2 px-4 text-sm text-gray-700 text-center">
                    R$
                    {{
                      product.unitValue.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }}
                  </td>
                  <td class="py-2 px-4 text-sm text-gray-700 text-center">
                    R$ {{product.subTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}}
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Resumo de valores -->
            <div class="mt-4">
              <div class="flex justify-end space-x-8">
                <div class="text-right">
                  <p class="text-sm text-gray-600">Subtotal</p>
                  <p class="text-sm text-gray-600">Frete</p>
                  <p class="text-sm text-gray-600">Descontos</p>
                  <p class="font-bold text-gray-800">Total</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-700">R$ {{ totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                  <p class="text-sm text-gray-700">R$ 0,00</p>
                  <p class="text-sm text-gray-700">R$ 0,00</p>
                  <p class="font-bold text-gray-900">R$  {{ totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Final da Div-->
    </div>
  </div>
</template>

<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}
</style>
