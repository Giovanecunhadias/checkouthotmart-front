<script setup lang="ts">
import BoletoComponent from '@/components/BoletoComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import PixComponent from '@/components/PixComponent.vue';
import { ref } from 'vue';

const option = ref(1)
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full pt-4 sm:pt-8 px-4 sm:px-0">
    <form class="bg-white w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[45%] border border-1 rounded-md px-4 sm:px-8 pt-6 pb-8 mb-4">
      <div class="flex flex-col sm:flex-row mb-6">
        <div class="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <img src="../assets/logotipo.jpg" width="100" height="100" alt="ggg" class="mb-4 sm:mb-0">
        </div>
        <div class="flex flex-col ml-0 sm:ml-4 text-center sm:text-left">
          <h1 class="text-black font-bold text-xl sm:text-2xl">Reiki Estelar - PRATICANTE</h1>
          <p class="text-[#464b52] text-sm sm:text-base">Autor: Alryon</p>
          <p class="text-[#355cc0] font-bold text-xl sm:text-2xl" v-if="option == 2 || option == 3">R$ 497,00</p>
          <p class="text-[#355cc0] font-bold text-xl sm:text-2xl" v-if="option == 1">12 x de R$ 49,60 *</p>
          <p class="text-[#355cc0] text-[0.7rem] sm:text-xs" v-if="option == 2 || option ==3 ">ou em 12 x de R$ 49,60 * no cartão</p>
          <p class="text-[#355cc0] text-[0.7rem] sm:text-xs" v-if="option ==1">Ou R$ 497,00 à vista</p>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-[#32363b] text-sm mb-2" for="username"> Seu email </label>
        <input
          class="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight border-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8] placeholder-gray-500 transition duration-500 border border-1"
          id="username"
          type="email"
          placeholder="Digite seu email para receber a compra"
          required
          oninvalid="this.setCustomValidity('Por favor, preencha o campo Email.')"
          oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="mb-6">
        <label class="block text-[#32363b] text-sm mb-2" for="password"> Confirme seu email </label>
        <input
            class="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight border-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8] placeholder-gray-500 transition duration-500 border border-1"
            id=""
            type="email"
            placeholder="Digite novamente seu email"
            required
            oninvalid="this.setCustomValidity('Por favor, preencha o campo de Confirmação do Email.')"
            oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="mb-6">
        <label for="" class="block text-[#32363b] text-sm mb-2">Nome Completo</label>
        <input
            class="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight border-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8] placeholder-gray-500 transition duration-500 border border-1"
            id=""
            type="text"
            placeholder="Digite seu nome completo"
            required
            oninvalid="this.setCustomValidity('Por favor, preencha o campo Nome.')"
            oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="mb-6">
        <label for="" class="block text-[#32363b] text-sm mb-2">Celular</label>
        <input
            class="shadow appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight border-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8] placeholder-gray-500 transition duration-500 border border-1"
            id=""
            pattern="$$\d{2}$$ \d{4,5}-\d{4}" 
            maxlength="115"
            type="tel"
            placeholder="(11) 96123-4567"
            required
            oninvalid="this.setCustomValidity('Por favor, preencha o campo Celular.')"
            oninput="this.setCustomValidity('')"
        />
      </div>
      <div class="w-full px-0 sm:px-4 gap-2 sm:gap-4 flex flex-wrap justify-center sm:justify-start">
        <!--CARTÃO-->
        <button type="button" class="border border-1 border-[#89a8f8] p-2 sm:p-4 w-[30%] sm:w-[24%] flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-start rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8]" :class="{'bg-blue-500/20': option == 1}" @click="option =1">
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="" width="22" height="16" viewBox="0 0 22 16" fill="var(--blue-darker)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-764c4cf7=""><!----><!--[--><path d="M3 12.5C3 12.2239 3.22386 12 3.5 12H7.5C7.77614 12 8 12.2239 8 12.5C8 12.7761 7.77614 13 7.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H17.5C18.8807 0 20 1.11929 20 2.5V13.5C20 14.8807 18.8807 16 17.5 16H2.5C1.11929 16 0 14.8807 0 13.5V2.5ZM1 7V13.5C1 14.3284 1.67157 15 2.5 15H17.5C18.3284 15 19 14.3284 19 13.5V7H1ZM19 4H1V2.5C1 1.67157 1.67157 1 2.5 1H17.5C18.3284 1 19 1.67157 19 2.5V4Z" fill-rule="evenodd" clip-rule="evenodd" fill="#253F82" ></path><!--]--></svg>
            </div>
            <p class="text-black w-full sm:w-[60%] text-xs">Cartão</p>
        </button>

        <!--PIX-->
        <button type="button" class="border border-1 border-[#89a8f8] p-2 sm:p-4 w-[30%] sm:w-[24%] flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-start rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8]" :class="{'bg-blue-500/20': option == 2}" @click="option =2">
            <svg class="" width="23px" height="22px" viewBox="0 0 22 23"   xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-v-764c4cf7=""><!----><!--[--><path d="M5.19223 5.24323C6.06969 5.24323 6.89487 5.58498 7.51525 6.20516L10.8818 9.57225C11.1243 9.8147 11.5202 9.81575 11.7633 9.57193L15.1175 6.21736C15.738 5.59718 16.5632 5.25554 17.4407 5.25554H17.8447L13.5842 0.995107C12.2574 -0.331702 10.1063 -0.331702 8.77948 0.995107L4.53135 5.24323H5.19223ZM17.4406 17.108C16.5632 17.108 15.738 16.7664 15.1176 16.1462L11.7632 12.792C11.5278 12.5558 11.1173 12.5565 10.8819 12.792L7.51531 16.1585C6.89482 16.7786 6.06964 17.1202 5.19219 17.1202H4.5312L8.77943 21.3686C10.1062 22.6953 12.2574 22.6953 13.5842 21.3686L17.8447 17.108H17.4406ZM18.794 6.20484L21.3686 8.77947C22.6954 10.1062 22.6954 12.2573 21.3686 13.5842L18.7941 16.1587C18.7373 16.1359 18.6761 16.1218 18.6112 16.1218H17.4407C16.8354 16.1218 16.243 15.8764 15.8154 15.4484L12.4611 12.0945C11.8532 11.4859 10.7925 11.4862 10.184 12.0942L6.81744 15.4607C6.38976 15.8886 5.79746 16.134 5.19222 16.134H3.75286C3.69154 16.134 3.634 16.1486 3.57983 16.169L0.995108 13.5842C-0.331703 12.2573 -0.331703 10.1062 0.995108 8.77947L3.57994 6.19464C3.63411 6.21504 3.69154 6.22956 3.75286 6.22956H5.19222C5.79746 6.22956 6.38976 6.47496 6.81744 6.90285L10.1843 10.2697C10.4982 10.5833 10.9103 10.7404 11.3227 10.7404C11.7349 10.7404 12.1473 10.5833 12.4611 10.2694L15.8154 6.91505C16.243 6.48716 16.8354 6.24176 17.4407 6.24176H18.6112C18.676 6.24176 18.7373 6.22756 18.794 6.20484Z" fill-rule="evenodd" clip-rule="evenodd" :fill="option == 2 ? '#32BCAD': '#707780'"/></svg>
            <p class="text-black">PIX</p>
        </button>

        <!--BOLETO-->
        <button  type="button" class="border border-1 border-[#89a8f8] p-2 sm:p-4 w-[30%] sm:w-[24%] flex items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-start rounded focus:outline-none focus:ring-2 focus:ring-[#89a8f8] focus:border-[#89a8f8]" :class="{'bg-blue-500/20': option == 3}" @click="option=3">
            <svg data-v-764c4cf7="" class="" width="22px" height="16px" viewBox="0 0 22 16" :fill="option == 3 ? '#355cc0': '#707780'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><!----><path d="M1.5 1C1.22386 1 1 1.22386 1 1.5V4.5C1 4.77614 0.776142 5 0.5 5C0.223858 5 0 4.77614 0 4.5V1.5C0 0.671573 0.671573 0 1.5 0H4.5C4.77614 0 5 0.223858 5 0.5C5 0.776142 4.77614 1 4.5 1H1.5ZM17 0.5C17 0.223858 17.2239 0 17.5 0H20.5C21.3284 0 22 0.671573 22 1.5V4.5C22 4.77614 21.7761 5 21.5 5C21.2239 5 21 4.77614 21 4.5V1.5C21 1.22386 20.7761 1 20.5 1H17.5C17.2239 1 17 0.776142 17 0.5ZM3.5 3C3.77614 3 4 3.22386 4 3.5V12.5C4 12.7761 3.77614 13 3.5 13C3.22386 13 3 12.7761 3 12.5V3.5C3 3.22386 3.22386 3 3.5 3ZM6.5 3C6.77614 3 7 3.22386 7 3.5V12.5C7 12.7761 6.77614 13 6.5 13C6.22386 13 6 12.7761 6 12.5V3.5C6 3.22386 6.22386 3 6.5 3ZM9.5 3C9.77614 3 10 3.22386 10 3.5V12.5C10 12.7761 9.77614 13 9.5 13C9.22386 13 9 12.7761 9 12.5V3.5C9 3.22386 9.22386 3 9.5 3ZM12.5 3C12.7761 3 13 3.22386 13 3.5V12.5C13 12.7761 12.7761 13 12.5 13C12.2239 13 12 12.7761 12 12.5V3.5C12 3.22386 12.2239 3 12.5 3ZM15.5 3C15.7761 3 16 3.22386 16 3.5V12.5C16 12.7761 15.7761 13 15.5 13C15.2239 13 15 12.7761 15 12.5V3.5C15 3.22386 15.2239 3 15.5 3ZM0.5 11C0.776142 11 1 11.2239 1 11.5V14.5C1 14.7761 1.22386 15 1.5 15H4.5C4.77614 15 5 15.2239 5 15.5C5 15.7761 4.77614 16 4.5 16H1.5C0.671573 16 0 15.3284 0 14.5V11.5C0 11.2239 0.223858 11 0.5 11ZM21.5 11C21.7761 11 22 11.2239 22 11.5V14.5C22 15.3284 21.3284 16 20.5 16H17.5C17.2239 16 17 15.7761 17 15.5C17 15.2239 17.2239 15 17.5 15H20.5C20.7761 15 21 14.7761 21 14.5V11.5C21 11.2239 21.2239 11 21.5 11Z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M18.5 3C18.7761 3 19 3.22386 19 3.5V12.5C19 12.7761 18.7761 13 18.5 13C18.2239 13 18 12.7761 18 12.5V3.5C18 3.22386 18.2239 3 18.5 3Z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
            <p class="text-black">Boleto</p>
        </button>
      </div>
      <div class="flex flex-col mt-6" v-if="option==1">
        <CardComponent/>
      </div>
      <div class="w-full mt-6"  v-if="option==2">
        <PixComponent/>
      </div>
      <div class="w-full mt-6" v-if="option==3">
        <BoletoComponent :option="option" @update:option="option = $event"/>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2025 Ameii. Todos os direitos reservados.</p>
  </div>
</template>