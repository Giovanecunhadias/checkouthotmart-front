
<script lang="ts">
export default {
  props: {
    option: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      localOption: this.option
    }
  },
  watch: {
    localOption(newValue) {
      this.$emit('update:option', newValue)
    }
  }
}
</script>
<template>
    <div class="flex flex-col gap-4">
      <div class="w-full text-black flex flex-col border border-1  shadow-sm mt-2">
        <div class="flex flex-col w-full p-4">
            <input type="text" placeholder="Digite o número do seu CPF ou CNPJ" class="w-full border rounded-md border-[#707780] p-1">
            <p class="text-xs">Por exigência do Banco Central, o boleto precisa ter seu CPF/CNPJ.</p>
        </div>
        <div class="w-full flex flex-col items-center justify-center px-5">
            <hr class="border-[#707780/20]  w-full border-full">
        </div> 
        
        <div class="grid grid-cols-3 text-black p-4 gap-3 w-full ">
            <div class="p-4 rounded-md border border-[#707780]">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-calendar-day _mb-2 _d-block" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calendar-day" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: var(--gray-500); font-size: 16px;" width="23" height="23"><path class="" fill="#707780" d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zm40 160h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V264c0-4.4 3.6-8 8-8zm-40 8v80c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V264c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40z"></path></svg>
                <h1 class="font-bold text-1 ">Pague até a data de vencimento</h1>
                <p class="w-3/4 text-[0.7rem]">Faça o pagamento até a data de vencimento e garanta seu acesso ao produto.</p>
            </div> 
            <div class="p-4 rounded-md border border-[#707780]">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-alarm-clock _mb-2 _d-block" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="alarm-clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="color: var(--gray-500); font-size: 16px;" width="23" height="23"><path class="" fill="#707780" d="M92.2 0C41.3 0 0 41.3 0 92.2c0 18.2 5.3 35.2 14.4 49.5c4.7 7.5 14.6 9.6 22.1 4.9s9.6-14.6 4.9-22.1c-5.9-9.3-9.4-20.4-9.4-32.3C32 58.9 58.9 32 92.2 32c15.8 0 30.2 6.1 40.9 16.1c6.5 6 16.6 5.6 22.6-.8s5.6-16.6-.8-22.6C138.4 9.3 116.4 0 92.2 0zM357.1 24.6c-6.5 6-6.9 16.1-.8 22.6s16.1 6.9 22.6 .8C389.6 38.1 404 32 419.8 32C453 32 480 58.9 480 92.2c0 11.9-3.4 23-9.4 32.3c-4.7 7.5-2.6 17.3 4.9 22.1s17.3 2.6 22.1-4.9c9.1-14.3 14.4-31.3 14.4-49.5C512 41.3 470.7 0 419.8 0c-24.2 0-46.3 9.3-62.7 24.6zM59.3 507.3l50-50C148.6 491.4 199.9 512 256 512s107.4-20.6 146.7-54.7l50 50c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-50-50C459.4 395.4 480 344.1 480 288C480 164.3 379.7 64 256 64S32 164.3 32 288c0 56.1 20.6 107.4 54.7 146.7l-50 50c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM256 96a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16V304c0 5 2.4 9.8 6.4 12.8l64 48c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4L272 296V176z"></path></svg>
                <h1 class="font-bold text-1">Aguarde a aprovação do pagamento</h1>
                
                <p class="w-3/4 text-[0.8rem]">Pagamentos com boleto levam <span class="font-bold">até 3 dias úteis</span> para serem compensados.</p>
              
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" data-v-26332ef8="" class="_mb-2 _d-block" width="23" height="23" viewBox="0 0 22 23" fill="var(--blue)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><!----><path d="M5.19223 5.24323C6.06969 5.24323 6.89487 5.58498 7.51525 6.20516L10.8818 9.57225C11.1243 9.8147 11.5202 9.81575 11.7633 9.57193L15.1175 6.21736C15.738 5.59718 16.5632 5.25554 17.4407 5.25554H17.8447L13.5842 0.995107C12.2574 -0.331702 10.1063 -0.331702 8.77948 0.995107L4.53135 5.24323H5.19223ZM17.4406 17.108C16.5632 17.108 15.738 16.7664 15.1176 16.1462L11.7632 12.792C11.5278 12.5558 11.1173 12.5565 10.8819 12.792L7.51531 16.1585C6.89482 16.7786 6.06964 17.1202 5.19219 17.1202H4.5312L8.77943 21.3686C10.1062 22.6953 12.2574 22.6953 13.5842 21.3686L17.8447 17.108H17.4406ZM18.794 6.20484L21.3686 8.77947C22.6954 10.1062 22.6954 12.2573 21.3686 13.5842L18.7941 16.1587C18.7373 16.1359 18.6761 16.1218 18.6112 16.1218H17.4407C16.8354 16.1218 16.243 15.8764 15.8154 15.4484L12.4611 12.0945C11.8532 11.4859 10.7925 11.4862 10.184 12.0942L6.81744 15.4607C6.38976 15.8886 5.79746 16.134 5.19222 16.134H3.75286C3.69154 16.134 3.634 16.1486 3.57983 16.169L0.995108 13.5842C-0.331703 12.2573 -0.331703 10.1062 0.995108 8.77947L3.57994 6.19464C3.63411 6.21504 3.69154 6.22956 3.75286 6.22956H5.19222C5.79746 6.22956 6.38976 6.47496 6.81744 6.90285L10.1843 10.2697C10.4982 10.5833 10.9103 10.7404 11.3227 10.7404C11.7349 10.7404 12.1473 10.5833 12.4611 10.2694L15.8154 6.91505C16.243 6.48716 16.8354 6.24176 17.4407 6.24176H18.6112C18.676 6.24176 18.7373 6.22756 18.794 6.20484Z" fill-rule="evenodd" clip-rule="evenodd" fill="#5981E3"></path></svg>
                <h1 class="text-[#5981e3] font-bold">Pague com Pix e tenha acesso imediato ao produto</h1>
                <p>O pagamento leva apenas alguns segundos para ser processado. Pague com Pix <button class="text-[#5981e3] underline" type="button" @click="$emit('update:option', 2)">clicando aqui.</button></p>
            </div>
            
           
        </div>
        
        
        
    </div>
    <div class="flex flex-col gap-3">
        
          <hr class="border-[#707780/20]  w-full border-full">
       
          <div class="flex text-xs w-full p-4 justify-between text-black">
            <p class="font-bold ">Reiki Estelar - PRATICANTE</p>
            <p>R$ 497,00</p>
        </div>
        <button
        type="submit"
        class="bg-[#009d43] w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
        Comprar Agora
      </button>
    </div>
    </div>
    
    <div class="flex flex-col"></div>
</template>