<script setup lang="ts">
import { ref } from "vue";
const products = ref([
  { id: 1, name: "Produto A", unitValue: 10.5, subTotal: 10.5, qtd: 1 },
  { id: 2, name: "Produto B", unitValue: 10.5, subTotal: 10.5, qtd: 1 },
  { id: 3, name: "Produto C", unitValue: 10.5, subTotal: 10.5, qtd: 1 },
  { id: 4, name: "Produto D", unitValue: 10.5, subTotal: 10.5, qtd: 1 },
]);
</script>

<template>
  <div></div>
  <div class="hidden lg:flex text-black w-full p-8">
    <div class="w-full flex justify-center">
      <div class="flex flex-col rounded-md justify-center shadow-lg bg-white w-[50vw]">
        <div class="flex flex-col p-4 gap-4">
          <h1 class="text-3xl font-bold text-gray-500">Pedido Confirmado</h1>
          <div
            class="text-green-700 bg-green-500/10 border-green-500 rounded-md borer-1 border p-2"
          >
            <h1 class="font-bold text-xl">Seu pedido foi realizado com sucesso.</h1>
            <p>
              Em breve você recebera um e-mail no endereço
              <span class="text-green-800 font-bold">exmaple@sla.com</span> com todos os
              detalhes do pedido
            </p>
            <p>
              Aguardamos a
              <span class="font-bold text-green-800">confirmação do pagamento</span>
            </p>
          </div>
          <div class="gap-0 flex flex-col">
            <p class="text-xl text-gray-800">Pedido PB1231234</p>
            <p class="text-gray-500">Data de março de 2017</p>
          </div>
          <div class="grid grid-cols-3 w-full gap-2">
            <div class="flex flex-col p-4 text-black border-2 rounded-md border-gray-200">
              <h1 class="font-bold">ENDEREÇO</h1>
              <p>Praia ex</p>
              <p>Rio de janeiro</p>
              <p>Brasilia</p>
              <p>numero de telefone</p>
            </div>
            <div class="flex flex-col p-4 border-2 text-black rounded-md border-gray-200">
              <h1 class="font-bold">FORMA DE PAGAMENTO</h1>
              <p class="text-[0.9rem]">VISA cartão de crédito</p>
              <div class="flex justify-between text-[0.9rem]">
                <p>**** **** **** 1111</p>
                <p>R$ 49,60 (2x)</p>
              </div>
            </div>
            <div class="flex flex-col p-4 border-2 text-black rounded-md border-gray-200">
              <h1 class="font-bold">RESUMO</h1>
              <div class="flex justify-between">
                <p>Subtotal</p>
                <p>R$ 89,99</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p>Entrega</p>
                <p>R$ 89,99</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p>ICMG-ST</p>
                <p>R$ 89,99</p>
              </div>
              <hr />
              <div class="flex justify-between">
                <p class="font-bold">Total</p>
                <p>R$ 89,99</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col p-4 box-border gap-4">
          <h1 class="text-3xl text-gray-900 font-bold">Pacotes</h1>
          <table class="w-full border-collapse text-center">
            <thead class="">
              <tr>
                <th class="font-bold py-2 px-4">Produto</th>
                <th class="font-bold py-2 px-4">Preço</th>
                <th class="font-bold py-2 px-4">Qtd.</th>
                <th class="font-bold py-2 px-4">Subtotal</th>
              </tr>
            </thead>

            <!-- Linha separadora -->
            <tr>
              <td colspan="4">
                <hr class="border-t-1 border-black my-2" />
              </td>
            </tr>

            <tbody>
              <tr v-for="product in products" :key="product.id" class="border-b">
                <td class="py-2 px-4">{{ product.name }}</td>
                <td class="py-2 px-4">R$ {{ product.unitValue.toFixed(2) }}</td>
                <td class="py-2 px-4">{{ product.qtd }}</td>
                <td class="py-2 px-4">R$ {{ product.subTotal.toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-end gap-2 p-4">
          <button
            class="border borer-2 border-gray-900 bg-gray-500/40 rounded-sm text-gray-800 p-2"
          >
            Realizar nova comrpa
          </button>
          <button
            class="border borer-2 border-gray-900 bg-gray-500/40 rounded-sm text-gray-800 p-2"
          >
            Alterar Data
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--Para celular-->
  <div class="lg:hidden flex justify-center items-center w-full text-black pt-4">
    <div class="flex flex-col p-4 gap-4 rounded-md border bg-white">
      <h1 class="text-3xl font-bold text-gray-700">Pedido Confirmado</h1>
      <!--Div Verde-->
      <div
        class="text-green-700 bg-green-500/10 border-green-500 rounded-md borer-1 w-[90vw] border p-2"
      >
        <h1 class="font-bold text-xl">Seu pedido foi realizado com sucesso.</h1>
        <p>
          Em breve você recebera um e-mail no endereço
          <span class="text-green-800 font-bold">exmaple@sla.com</span> com todos os
          detalhes do pedido
        </p>
        <p>
          Aguardamos a
          <span class="font-bold text-green-800">confirmação do pagamento</span>
        </p>
      </div>
      <!--final da div-->
      <h1 class="text-2xl">Pedido PB1231234</h1>
      <p class="text-gray-500">17 de março de 2017</p>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col border-1 rounded-md border p-4">
          <h1 class="font-bold">ENDEREÇO</h1>
          <p>Praia ex</p>
          <p>Rio de janeiro</p>
          <p>Brasilia</p>
          <p>numero de telefone</p>
        </div>
        <div class="flex flex-col border-1 rounded-md border p-4">
          <h1 class="font-bold">FORMA DE PAGAMENTO</h1>
          <div class="flex justify-between text-[0.9rem]">
            <p>**** **** **** 1111</p>
            <p>R$ 49,60 (2x)</p>
          </div>
          <p>Rio de janeiro</p>
          <p>Brasilia</p>
          <p>numero de telefone</p>
        </div>
        <div class="flex flex-col border-1 rounded-md border p-4">
          <h1 class="font-bold">RESUMO</h1>
          <div class="flex justify-between">
            <p>Subtotal</p>
            <p>R$ 89,99</p>
          </div>
          <hr />
          <div class="flex justify-between">
            <p>Entrega</p>
            <p>R$ 89,99</p>
          </div>
          <hr />
          <div class="flex justify-between">
            <p>ICMG-ST</p>
            <p>R$ 89,99</p>
          </div>
          <hr />
          <div class="flex justify-between">
            <p class="font-bold">Total</p>
            <p>R$ 89,99</p>
          </div>
        </div>
      </div>
      <h1 class="text-2xl font-bold text-gray-800">Pacote</h1>
      <p>Entrega estimada para 8 dias</p>
      <div v-for="product in products" :key="product.id">
        <div class="border flex flex-col gap-2 rounded-md border-1 p-4">
          <div class="flex justify-between">
            <p class="font-bold">Produto:</p>
            <p>{{ product.name }}</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold">Preço:</p>
            <p>{{ product.unitValue }} R$</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold">Qtd.</p>
            <p>{{ product.qtd }} un</p>
          </div>
          <div class="flex justify-between">
            <p class="font-bold">Subtotal:</p>
            <p>{{ product.subTotal }} R$</p>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-2">
        <button
          class="border borer-2 border-gray-900 bg-gray-500/40 rounded-sm text-gray-800 p-2"
        >
          Realizar nova comrpa
        </button>
        <button
          class="border borer-2 border-gray-900 bg-gray-500/40 rounded-sm text-gray-800 p-2"
        >
          Alterar Data
        </button>
      </div>
    </div>
  </div>
</template>
