<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";

const option = ref(1);
interface Props {
  modelValue: number;
  min?: number;
  max?: number;
}

const props = defineProps<Props>();
const quantity = ref<number>(props.modelValue ?? 1);
const min = props.min ?? 1;
const max = props.max ?? 99;

const updateQuantity = () => {
  if (quantity.value < min) quantity.value = min;
  if (quantity.value > max) quantity.value = max;
  const emit = defineEmits<{
    (e: "update:modelValue", value: number): void;
  }>();
};

const incrementQuantity = () => {
  if (quantity.value < max) {
    quantity.value++;
    updateQuantity();
  }
};

const decrementQuantity = () => {
  if (quantity.value > min) {
    quantity.value--;
    updateQuantity();
  }
};

watch(
  () => props.modelValue,
  (newVal) => {
    quantity.value = newVal;
  }
);
</script>

<template>
  <div class="bg-slate-100 text-black min-h-screen px-32">
    <div class="container mx-auto px-4 py-6">
      <div class="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
        <!-- Left Column -->
        <div class="flex flex-col gap-4 w-full lg:w-2/3">
          <!-- Identification Section -->
          <div class="flex flex-col justify-center border rounded-xl bg-white">
            <div class="flex flex-col justify-items-center">
              <p class="font-bold text-lg p-4">Identificação</p>
              <div class="flex flex-col md:flex-row w-full">
                <div class="p-4 flex flex-col gap-1 w-full md:w-1/2">
                  <label>E-mail</label>
                  <input type="email" class="p-2 border-2 border-[#707780]/10 rounded-lg w-full" />
                  <label>Nome Completo</label>
                  <input type="text" class="p-2 border-2 border-[#707780]/10 rounded-lg w-full" />
                </div>
                <div class="p-4 flex flex-col gap-1 w-full md:w-1/2">
                  <label>Telefone</label>
                  <input type="tel" class="p-2 border-2 border-[#707780]/10 rounded-lg w-full" />
                  <label>CPF/CNPJ</label>
                  <input type="tel" class="p-2 border-2 border-[#707780]/10 rounded-lg w-full" />
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Section -->
          <div class="flex flex-col border rounded-xl bg-white">
            <div class="flex gap-2 flex-col p-4 ">
              <p class="text-lg font-bold">Pagamento</p>
              <div class="flex flex-row items-center gap-2 py-4">
                <button
                  type="button"
                  class="border-blue-300 rounded-md p-2 w-full sm:w-1/6 flex justify-center items-center"
                  @click="option = 1"
                  :class="{ border: option == 2, 'border-2': option == 1 }"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93c5fd"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-credit-card w-6 h-6 sm:w-8 sm:h-8"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="border border-blue-300 rounded-md p-2 w-full sm:w-1/6 flex justify-center items-center"
                  @click="option = 2"
                  :class="{ 'border-2': option == 2, border: option == 1 }"
                >
                  <img src="../assets/VegaView/pix.svg" class="w-6 h-6 sm:w-8 sm:h-8" alt="Pix" />
                </button>
              </div>

              <!-- Credit Card Form -->
              <div class="flex flex-col w-full" v-if="option == 1">
                <div class="box-border border-2 border-gray-300 bg-gray-500/20 rounded-md">
                  <div class="px-2 py-2">
                    <p class="text-gray-500">
                      Parcele em<span class="font-bold"> até 2x</span> nos cartões
                    </p>
                  </div>

                  <div class="border-t border-gray-500 bg-white">
                    <form class="flex flex-col px-4 py-2 gap-4">
                      <label class="font-bold">Número do Cartão</label>
                      <input
                        type="text"
                        class="p-2 focus:outline-none border-2 rounded-md w-full"
                        placeholder="4444 5555 6666 7777"
                      />
                      <label class="font-bold">Nome impresso no cartão</label>
                      <input
                        type="text"
                        class="p-2 focus:outline-none border-2 rounded-md w-full"
                        placeholder="Nome e Sobrenome"
                      />
                      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full">
                        <div class="flex flex-col w-full sm:w-1/4">
                          <h1 class="font-bold">Validade</h1>
                          <input
                            type="text"
                            class="p-2 focus:outline-none border-2 rounded-md w-full"
                            placeholder="12/23"
                          />
                        </div>
                        <div class="flex flex-col w-full sm:w-1/4">
                          <h1 class="font-bold">CVV</h1>
                          <input
                            type="text"
                            placeholder="CVV"
                            class="p-2 focus:outline-none border-2 rounded-md w-full"
                          />
                        </div>
                        <div class="w-full sm:w-2/4">
                          <h1 class="font-bold">Parcelamento</h1>
                          <select
                            class="border-2 rounded-md focus:outline-none p-2 w-full"
                          >
                            <option value="">1 x R$ 29,73</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="py-4 flex justify-end">
                  <button class="w-full sm:w-2/4 bg-green-500 p-2 rounded-md text-white">
                    FINALIZAR COMPRA
                  </button>
                </div>
              </div>

              <!-- Pix Section -->
              <div v-if="option == 2" class="flex flex-col">
                <div class="flex justify-end py-4">
                  <button class="w-full sm:w-2/4 bg-green-500 p-2 rounded-md text-white">
                    FINALIZAR COMPRA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Cart -->
        <div class="flex flex-col items-center gap-2 w-full lg:w-1/3">
          <div class="flex flex-col border rounded-xl p-2 bg-white w-full">
            <div class="flex flex-row items-center justify-between px-2">
              <p class="font-bold text-lg px-2 py-2">Seu Carrinho</p>
              <div class="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-white">
                1
              </div>
            </div>
            <div class="flex flex-col px-2">
              <div class="flex flex-row gap-4 pb-2 items-center">
                <img
                  src="../assets/VegaView/card.svg"
                  class="rotate-90 w-12 h-12"
                  alt="Product"
                />
                <div class="flex flex-col flex-grow">
                  <p class="font-bold text-md">Product Name</p>
                  <p class="text-gray-500 text-sm">Product Description</p>
                </div>
                <div class="flex items-center border rounded-2xl h-8">
                  <button
                    @click="decrementQuantity"
                    class="px-3 text-red-500 cursor-pointer"
                    :disabled="quantity <= 1"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    v-model="quantity"
                    class="w-8 text-center focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    min="1"
                    @input="updateQuantity"
                  />
                  <button @click="incrementQuantity" class="px-3 text-green-500">
                    +
                  </button>
                </div>
              </div>

              <div class="border-t border-b flex flex-col px-2">
                <div class="flex justify-between py-2">
                  <p>Subtotal</p>
                  <p>R$ 29,73</p>
                </div>
              </div>
              <div class="py-2 flex justify-between">
                <p class="font-light text-lg">Total</p>
                <p class="font-bold text-lg">R$ 29,73</p>
              </div>
            </div>
          </div>

          <div class="flex border rounded-3xl bg-white w-full sm:w-3/6 lg:w-3/6">
            <div class="w-full py-2">
              <div class="flex justify-center items-center font-bold text-sm sm:text-md gap-2">
                <img src="../assets/VegaView/shield.png" alt="Security" class="h-4 w-4" />
                Ambiente seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
