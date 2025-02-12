<template>
  <div class="min-h-screen bg-gray-200 flex flex-col">
    

    <!-- Main Content -->
    <main class="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 class="text-2xl font-bold text-center text-green-700 mb-6">Pagamento via PIX</h1>

        <!-- Order Details -->
        <div class="bg-green-50 p-4 rounded-lg mb-6">
          <h2 class="text-xl font-semibold text-green-700 mb-2">Detalhes do Pedido</h2>
          <p class="text-gray-700">Total a Pagar: <span class="font-bold">R$ {{ orderTotal }}</span></p>
          <p class="text-gray-700">Número do Pedido: #{{ orderNumber }}</p>
        </div>

        <!-- QR Code -->
        <div class="text-center mb-6">
          <h3 class="text-lg font-semibold text-green-700 mb-4">Escaneie o QR Code para pagar</h3>
          <img :src="qrCodeUrl" alt="QR Code" class="w-48 h-48 mx-auto mb-4" />
        </div>

        <!-- Copy PIX Code Button -->
        <div class="text-center mb-6">
          <p class="text-gray-600 mb-2">Ou copie o código PIX abaixo:</p>
          <button @click="copyPixCode" class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
            {{ copyButtonText }}
          </button>
        </div>

        <!-- Timer -->
        <div class="text-center">
          <p class="text-gray-600">
            Tempo restante para finalizar o pagamento:
            <span class="font-bold text-green-600">{{ remainingTime }}</span>
          </p>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const orderTotal = ref('157,99');
const orderNumber = ref('123456');
const remainingTime = ref('14:59');
const qrCodeUrl = ref('/placeholder.svg?height=192&width=192');
const copyButtonText = ref('Copiar Código PIX');

const pixCode = 'seu-codigo-pix-aqui';

let timer;

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearInterval(timer);
});

function startTimer() {
  const endTime = new Date().getTime() + 15 * 60 * 1000; // 15 minutes from now

  timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    remainingTime.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (distance < 0) {
      clearInterval(timer);
      remainingTime.value = '00:00';
    }
  }, 1000);
}

function copyPixCode() {
  navigator.clipboard.writeText(pixCode).then(() => {
    copyButtonText.value = 'Código Copiado!';
    setTimeout(() => {
      copyButtonText.value = 'Copiar Código PIX';
    }, 2000);
  });
}
</script>

