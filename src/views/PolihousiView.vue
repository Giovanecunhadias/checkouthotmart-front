<script setup lang="ts">

import { ref, watch, defineProps, defineEmits } from "vue";

const continuar = ref(1);


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


const isOpen = ref(false);


</script>

<template>

    <div class="fixed bottom-0 w-screen z-20">
      <!-- Botão para abrir o dropdown -->
      <button
        @click="isOpen = !isOpen"
        class=" lg:hidden bg-black text-center  text-white px-4 py-2 rounded-md w-full fixed bottom-3 right-0 z-30"
        :class="isOpen ?   'hidden' : ''"
        >
        Abrir Resumo
      </button>

      <!-- Conteúdo do dropdown -->
      <div
        class="fixed bottom-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'translate-y-0' : 'translate-y-full'"
      >
        <div class="p-4 flex flex-col text-black h-[40vh] overflow-y-auto">
          <button @click="isOpen = false" class="self-end text-lg font-bold">✕</button>

          <h1 class="font-bold text-xl">Resumo</h1>

          <div class="flex flex-row gap-4 p-2">
            <img src="../assets/Polihousi/user.svg" class="w-28 h-28" alt="Produto" />

            <div class="w-4/6">
              <p class="font-bold">Decoração de Mesa Resina Estátua Peças de xadrez</p>
              <p class="text-gray-500">Cor: Cavalo Preto</p>
              <p class="text-green-500 font-bold">R$ 319,90</p>
            </div>
          </div>

          <div class="p-2">
            <hr />
            <p class="text-black font-bold pt-5">Adicione seu cupom aqui</p>
            <div class="flex mt-2">
              <input type="text" class="p-2 border-2 rounded-md w-2/4" />
              <button class="bg-black text-white py-2 px-4 rounded-md ml-2">
                Adicionar
              </button>
            </div>
          </div>

          <div class="p-2">
            <hr />
            <div class="flex justify-between py-2">
              <p class="text-gray-500">Subtotal</p>
              <p class="text-black font-bold">R$ 319,90</p>
            </div>

            <div class="flex justify-between py-2">
              <p class="text-black font-bold text-xl">Total</p>
              <div class="text-right">
                <p class="text-green-600 font-bold">12x R$ 32,12</p>
                <p class="text-xs text-gray-500">(ou R$ 385,44 à vista)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex lg:hidden min-w-screen min-h-screen h-screen w-screen bg-black/30 fixed z-10"
      :class="{ hidden: !isOpen }"
    ></div>
    <div class="flex w-full py-8 px-4 lg:px-56">
      <div class="flex lg:justify-between w-full gap-5">
        <!--Div do fomulário-->
        <div
          class="flex text-black justify-center items-center flex-col border rounded-md bg-white p-4 w-full"
        >
          <form class="p-4 w-full flex flex-col" action="">
            <div class="flex flex-col gap-4" v-if="continuar == 1">
              <h1 class="font-bold">SEUS DADOS</h1>
              <div
                class="relative border-2 rounded-lg px-4 py-5 flex items-center transition duration-150 ease-in-out"
              >
                <label class="text-black font-bold flex absolute left-14 text-sm top-2"
                  >NOME COMPLETO</label
                >
                <input
                  type="text"
                  autocomplete="name"
                  required
                  placeholder="Maria mendes silva"
                  class="w-full h-full text-black pl-10 outline-none pt-1"
                />
                <div
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center"
                >
                  <img
                    src="../assets/Polihousi/user.svg"
                    alt="Ícone do usuário"
                    class="w-6 h-6"
                  />
                </div>
              </div>
              <div
                class="relative border-2 rounded-lg px-4 py-5 flex items-center transition duration-150 ease-in-out"
              >
                <label class="text-black font-bold flex absolute left-14 text-sm bottom-8"
                  >EMAIL</label
                >
                <input
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="email@exemplo.com"
                  class="w-full h-full text-black pl-10 outline-none"
                />
                <div
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center"
                >
                  <img
                    src="../assets/Polihousi/mail.svg"
                    alt="Ícone do usuário"
                    class="w-6 h-6"
                  />
                </div>
              </div>
              <div
                class="relative border-2 rounded-lg px-4 py-5 flex items-center transition duration-150 ease-in-out"
              >
                <label class="text-black font-bold flex absolute left-14 text-sm bottom-8"
                  >Telefone</label
                >
                <input
                  type="tel"
                  placeholder="(00)000-0000"
                  required
                  autocomplete="tel"
                  class="w-full h-full text-black pl-10 outline-none"
                />
                <div
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center"
                >
                  <img
                    src="../assets/Polihousi/phone.svg"
                    alt="Ícone do usuário"
                    class="w-6 h-6"
                  />
                </div>
              </div>
              <div
                class="relative border-2 rounded-lg px-4 py-5 flex items-center transition duration-150 ease-in-out"
              >
                <label class="text-black font-bold flex absolute left-14 text-sm bottom-8"
                  >CPF</label
                >
                <input
                  type="text"
                  required
                  placeholder="000.000.000-00"
                  class="w-full h-full text-black pl-10 outline-none"
                />
                <div
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 flex items-center"
                >
                  <img
                    src="../assets/Polihousi/cpf.svg"
                    alt="Ícone do usuário"
                    class="w-6 h-6"
                  />
                </div>
              </div>
              <button
                type="button"
                @click="continuar = 2"
                class="text-white w-1/3 self-end bg-[#02b939] py-2 rounded-xl"
              >
                CONTINUAR
              </button>
            </div>
            <div class="flex flex-col gap-4" :class="{ hidden: continuar != 2 }">
              <h1 class="font-bold">ENTREGA</h1>
              <label for="">CEP</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Rua</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Bairro</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Número</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Complemento</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Estado</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Cidade</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <div class="flex flex-row justify-between items-center">
                <button
                  @click="continuar = 1"
                  class="text-white w-1/3 bg-[#6d7e72] py-2 rounded-xl"
                >
                  VOLTAR
                </button>
                <button
                  @click="continuar = 3"
                  type="button"
                  class="text-white w-1/3 bg-[#02b939] py-2 rounded-xl"
                >
                  CONTINUAR
                </button>
              </div>
            </div>
            <div class="flex flex-col gap-4" v-if="continuar == 3">
              <h1 class="font-bold">Pagamento no Cartão</h1>
              <label for="">Nome completo</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Número do Cartão</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Data de expiração</label>
              <input type="month" class="p-2 border-2 rounded-md" />
              <label for="">CVV</label>
              <input type="text" maxlength="3" class="p-2 border-2 rounded-md" />
              <label for="">Complemento</label>
              <input type="text" class="p-2 border-2 rounded-md" />
              <label for="">Número de parcelas</label>
              <select
                name=""
                id=""
                class="border-2 rounded-md focus:outline-none p-2 hover:cursor-pointer"
              >
                <option value="">1x Exemplo</option>
              </select>
              <div class="flex flex-row justify-between items-center">
                <button
                  @click="continuar = 2"
                  class="text-white w-1/3 bg-[#6d7e72] py-2 rounded-xl"
                >
                  VOLTAR
                </button>
                <button
                  type="submit"
                  class="text-white w-1/3 bg-[#02b939] py-2 rounded-xl"
                >
                  Pagar
                </button>
              </div>
            </div>
          </form>
        </div>
        <!--Final da Div-->
        <!--Div do Resumo-->
        <div class="hidden lg:flex flex-col text-black w-3/6">
          <div class="flex flex-col border-2 rounded-md bg-white gap-4 p-8">
            <h1 class="font-bold text-xl">Resumo</h1>
            <div class="flex flex-col p-2 w-full">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col gap-2">
                  <img src="../assets/Polihousi/user.svg" class="w-28 h-28" alt="" />
                </div>
                <div class="flex flex-col w-4/6 text-xl">
                  <p class="font-bold">
                    Decoração de Mesa Resina Estátua Pesças de xadrez Polihousi
                  </p>
                  <p class="text-gray-500">Cor: Cavalo Preto</p>
                  <p class="text-sm">QUANTIDADE</p>
                  <div class="flex justify-start items-center">
                    <div class="flex items-center">
                      <button
                        @click="decrementQuantity"
                        class="px-3 py-1 relative right-3 text-gray-600 border-1 rounded-md bg-gray-200 hover:bg-gray-100 curso"
                        :disabled="quantity <= 1"
                      >
                        -
                      </button>
                      <div class="flex justify-center items-center">
                        <input
                          type="number"
                          v-model="quantity"
                          class="w-8 border-2 border-black rounded-md text-center focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          min="1"
                          @input="updateQuantity"
                        />
                      </div>

                      <button
                        @click="incrementQuantity"
                        class="rounded-md px-3 relative left-2 py-1 text-gray-600 bg-black hover:bg-gray-100 border-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p class="text-green-500 font-bold">R$ 319,90</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col pl-6 pr-6">
              <hr />
              <p class="text-black font-bold tetx-lg pt-5">Adicione seu cupom aqui</p>
              <div class="flex flex-row">
                <input type="text" class="p-2 rounded-md border-2 w-2/4" />
                <button
                  type="submit"
                  class="text-white w-1/3 bg-black py-2 rounded-md relative left-2"
                >
                  Adicionar
                </button>
              </div>
              <div class="flex flex-row pb-2w-4/5 pb-2 pt-2 justify-between">
                <p class="text-gray-500">Subtotal</p>
                <p class="text-black font-bold">R$ 319,90</p>
              </div>
              <hr />
              <div class="flex flex-row justify-between items-center pt-2">
                <p class="text-black font-bold text-xl">Total</p>
                <div class="flex flex-col">
                  <p class="text-lg font-bold text-green-600">12x R$ 32,12</p>
                  <p class="text-xs text-gray-500">(ou R$ 385,44 à vista )</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Final da Div-->
      </div>
    </div>

</template>
