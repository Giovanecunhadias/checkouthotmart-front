<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Logo -->
    <div class="text-gray-700 uppercase p-4 text-start">LOGO</div>

    <!-- Main Content -->
    <div class="w-4/6 mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-24 h-screen items-center justify-center">
        <!-- Left Column -->
        <div class="col-span-2">
          <!-- Title -->
          <h1 class="text-2xl text-center text-black mb-4">Seu pedido está quase garantido...</h1>

          <!-- Subtitle -->
          <p class="text-gray-700 text-center mb-6">
            Reservamos seu pedido, mas é por pouco tempo. <span class="font-semibold">14:39</span>
          </p>
          <p></p>

          <!-- Status -->
          <div class="bg-yellow-50 text-yellow-700 py-2 text-center mb-8">
            Aguardando Pagamento ...
          </div>
        </div>

        <!-- Right Column -->
        <div class="bg-white rounded-lg p-6 items shadow-sm pl-22">
          <p class="text-gray-700 text-center mb-4">
            Leia o QRCode abaixo para efetuar seu pagamento
          </p>

          <!-- QR Code Image -->
          <div class="flex justify-center mb-4">
            <img src="" alt="QR Code" class="w-48 h-48" />
          </div>

          <!-- Price -->
          <div class="text-center mb-6">
            <p class="text-gray-700">Valor do Pix: <span class="font-semibold">1,19</span></p>
          </div>

          <!-- Alternative Payment Info -->
          <div class="text-gray-600 text-sm mb-4">
            Você também pode pagar escolhendo a opção Pix Copia e Cola no seu aplicativo de
            pagamento ou Internet Banking (banco online). Neste caso, copie o código clicando no
            botão abaixo:
          </div>

          <!-- Copy Button -->
          <button
            class="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path
                d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
              />
            </svg>
            COPIAR CÓDIGO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
