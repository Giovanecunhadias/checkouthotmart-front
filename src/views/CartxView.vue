<script setup lang="ts">
import { ref, watch } from "vue";

const option = ref(1);

watch(option, (nValue) => {
  if (nValue == 2) {
    console.log(nValue);
  }
  if (nValue == 1) {
    console.log(nValue);
  }
});
</script>

<template>
  <div class="flex flex-col md:flex-row py-6 min-h-screen w-full justify-center md:gap-10 text-black p-4">
    <div class="w-full md:w-[35vw] mb-6 md:mb-0">
      <form class="flex flex-col gap-4">
        <label class="font-bold text-lg" for="">INFORMAÇÕES PESSOAIS</label>
        <input
          type="text"
          placeholder="E-mail *"
          class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Nome Completo *"
          type="text"
        />
        <div class="flex flex-col sm:flex-row justify-between gap-4">
          <input
            type="text"
            placeholder="Celular*"
            class="w-full sm:w-1/2 border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="CPF*"
            class="w-full sm:w-1/2 border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <label for="" class="font-bold text-lg">INFORMAÇÕES DE ENTREGA</label>
        <p class="text-gray-500">Para onde devemos entregar seu pedido?</p>
        <input
          type="text"
          placeholder="CEP *"
          class="w-full sm:w-3/6 border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <span for="" class="font-bold">MÉTODO DE PAGAMENTO</span>
        <div class="border bg-white rounded-xl">
          <div class="flex flex-col gap-2">
            <label class="px-2 py-4 pb-0 flex items-center gap-2 font-bold">
              <input v-model="option" type="radio" :value="1" name="payment" class="mr-2 ml-4" />
              MERCADO PAGO
            </label>
            <hr />
            <div class="flex flex-col gap-2" v-if="option == 1">
              <div class="flex flex-col gap-2 px-4 sm:px-8">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Nome impresso no cartão"
                  class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div class="flex flex-col sm:flex-row justify-between gap-4">
                  <input
                    type="text"
                    class="w-full sm:w-1/2 border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Validade MM/AA"
                  />
                  <input
                    type="text"
                    class="w-full sm:w-1/2 border-2 border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Codigo de Seg."
                  />
                </div>
              </div>
              <hr />
            </div>

            <label class="px-2 py-2 font-bold flex items-center gap-2">
              <input v-model="option" type="radio" :value="2" name="payment" class="mr-2 ml-4" />
              STRIPE
            </label>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="font-bold bg-blue-500 hover:bg-blue-600 p-3 w-full sm:w-2/4 rounded-3xl text-white transition-colors duration-300">
            FINALIZAR COMPRA
          </button>
        </div>
      </form>
    </div>
    <div class="w-full md:w-[30vw] md:h-fit bg-white rounded-3xl p-6 shadow-md">
      <div class="flex flex-col gap-4">
        <hr />
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <input
            class="p-3 w-full sm:w-2/4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Cupom de Desconto"
          />
          <button
            class="text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-3xl p-3 w-full sm:w-2/6 text-md transition-colors duration-300"
            type="button"
          >
            APLICAR
          </button>
        </div>
        <hr />

        <div class="flex flex-col gap-4">
          <div class="flex justify-between">
            <p>Subtotal:</p>
            <p class="font-bold text-black">0,00 R$</p>
          </div>
          <div class="flex justify-between">
            <p>Entrega:</p>
            <p class="font-bold text-black">---</p>
          </div>
          <div class="flex justify-between">
            <p>Desconto:</p>
            <p class="font-bold text-black">---</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-md">Total:</p>
            <p class="font-bold text-lg text-black">0,00 R$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #e2e8f0;
}
</style>
