<script setup lang="ts">
import { ref, watch } from 'vue'
const option = ref(1)

watch(option, (nValue)=>{
  if(nValue == 2){
    console.
    log(nValue)
  }
  if(nValue ==1) {
    console.log(nValue)
  }
})
</script>


<template>
  <div class="flex  h-full w-full justify-center items-center text-black">
    <div class="flex flex-col py-6 w-[35vw]">
      <form class="flex flex-col gap-2">
        <label class="font-bold" for="">INFORMAÇÕES PESSOAIS</label>
        <input type="text" placeholder="E-mail *" class="w-full border-2 border-[#707780]/10 rounded-lg p-4">
        <input class="w-full border-2 border-[#707780]/10 rounded-lg p-4" placeholder="Nome Completo *" type="text">
        <div class="flex flex-row justify-between">
          <input type="text" placeholder="Celular*" class="border-2 border-[#707780]/10 rounded-lg p-2">
          <input type="text" placeholder="CPF*" class="border-2 border-[#707780]/10 rounded-lg p-4">
        </div>
        <label class="font-bold">QUER ALGO DE ESPECIAL NO SEU PEDIDO?</label>
        <textarea name="" placeholder="Se você precisar de algo é só nos falar estamos aqui para atender" class="w-full border-2 border-[#707780]/10 rounded-lg p-4" id="" cols="40" rows="1"></textarea>
        <label for="" class="font-bold">INFORMAÇÕES DE ENTREGA</label>
        <p class="text-gray-500">Para onde dvemos entregar seu pedido?</p>
        <input type="text" placeholder="CEP *" class="w-3/6 border-2 border-[#707780]/10 rounded-lg p-4">


        <!--METODO DE PAGAMENTO-->
        <div class="flex flex-col border rounded-xl">
          <div>
            <div class="flex flex-col border rounded-xl p-4">
          <label class="flex items-center gap-2">
            <input v-model="option" type="radio" :value="1" name="payment"> Opção 1
          </label>
          <label class="flex items-center gap-2">
            <input v-model="option" type="radio" :value="2" name="payment"> Opção 2
          </label>
        </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style>
body{
  background:#e2e8f0;
}
</style>
