<template>
  <div class="credit-card-container mx-auto w-full p-4 flex flex-wrap lg:flex-nowrap gap-8">
    <form @submit.prevent="handleSubmit" class="card-form w-full space-y-4">
      <div class="form-group">
        <label class="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          v-model="cardNumber"
          @input="formatCardNumber"
          maxlength="16"
          placeholder="1234 5678 9012 3456"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
        />
      </div>

      <div class="form-group">
        <label class="block text-sm font-medium text-gray-700">Card Holder Name</label>
        <input
          type="text"
          v-model="cardName"
          placeholder="Nome Completo"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
        />
      </div>

      <div class="form-row flex gap-4">
        <div class="form-group expiry flex-1">
          <label class="block text-sm font-medium text-gray-700">Expiry Date</label>
          <div class="flex items-center gap-2">
            <input
              type="text"
              v-model="month"
              @input="formatMonth"
              placeholder="MM"
              maxlength="2"
              class="w-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            />
            <span>/</span>
            <input
              type="text"
              v-model="year"
              @input="formatYear"
              placeholder="YY"
              maxlength="2"
              class="w-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
            />
          </div>
        </div>
        

        <div class="form-group cvv flex-1">
          <label class="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            v-model="cvv"
            @focus="isCardFlipped = true"
            @blur="isCardFlipped = false"
            maxlength="3"
            placeholder="123"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
          />
        </div>
      </div>
      <div class="w-6/6">
        <div class="card-preview relative w-full lg:w-3/5 aspect-video perspective">
          <div
            class="card-front absolute w-full h-full rounded-lg p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white transition-transform duration-500"
            :class="{ 'rotate-y-180': isCardFlipped }"
          >
            <div class="card-type">
              <img :src="cardTypeImage" alt="Card Type" v-if="cardTypeImage" />
            </div>
            <div class="card-number text-xl tracking-widest mb-6">
              {{ formattedCardNumber || '•••• •••• •••• ••••' }}
            </div>
            <div class="card-info flex justify-between">
              <div class="card-holder">
                <div class="label text-xs uppercase text-gray-400">Card Holder</div>
                <div class="value font-medium">{{ cardName || 'Nome Completo' }}</div>
              </div>
              <div class="card-expiry">
                <div class="label text-xs uppercase text-gray-400">Expires</div>
                <div class="value font-medium">{{ formattedExpiry || 'MM/YY' }}</div>
              </div>
            </div>
          </div>
          <div
            class="card-back absolute w-full h-full rounded-lg p-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white rotate-y-180 backface-hidden"
            :class="{ 'rotate-y-0': isCardFlipped }"
          >
            <div class="card-stripe bg-gray-600 h-8 my-4"></div>
            <div class="card-cvv bg-white text-black p-2 rounded w-20 text-center">
              <div class="cvv-label text-xs text-gray-600">CVV</div>
              <div class="cvv-value text-base font-medium">{{ cvv || '•••' }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col text-black">
        <select>
          <option value="">Opções de parcelas aqui</option>
        </select>
      </div>
      <div class="w-full flex flex-col text-black">
            <hr class="w-[100%] border-[#707780/20]">
            <p class="text-[#707780] p-4">Detalhes da compra </p>
            <hr class="w-[100%] border-[#707780/20]">
            <div class="flex text-xs w-full p-4 justify-between">
                <p class="font-bold">Reiki Estelar - PRATICANTE</p>
                <p>12 x R$ 49,60</p>
            </div>
    </div>
      <button
        type="submit"
        class="bg-[#009d43] w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Comprar Agora
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Mesma lógica do script anterior
const cardNumber = ref<string>('')
const cardName = ref<string>('')
const month = ref<string>('')
const year = ref<string>('')
const cvv = ref<string>('')
const isCardFlipped = ref<boolean>(false)

const formattedCardNumber = computed<string>(() => {
  if (!cardNumber.value) return ''
  return cardNumber.value
    .replace(/\s/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()
})

const formattedExpiry = computed<string>(() => {
  if (!month.value && !year.value) return ''
  return `${month.value}/${year.value}`
})

const cardTypeImage = computed<string>(() => '')
const formatCardNumber = (event: Event): void => {
  /* Mesma lógica */
}
const formatMonth = (event: Event): void => {
  /* Mesma lógica */
}
const formatYear = (event: Event): void => {
  /* Mesma lógica */
}
const handleSubmit = (): void => {
  /* Mesma lógica */
}
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
.card-front,
.card-back {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.rotate-y-0 {
  transform: rotateY(0);
}
</style>
