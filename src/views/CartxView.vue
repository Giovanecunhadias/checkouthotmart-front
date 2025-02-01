<template>
  <div class="flex  h-full w-full justify-center items-center text-black">
    <div class="flex flex-col py-6 w-[30vw]">
      <form class="flex flex-col gap-2">
        <label class="font-bold" for="">INFORMAÇÕES PESSOAIS</label>
        <input type="text" placeholder="E-mail *" class="w-full border-2 border-[#707780]/10 rounded-lg p-2">
        <input class="w-full border-2 border-[#707780]/10 rounded-lg p-2" placeholder="Nome Completo *" type="text">
        <div class="flex flex-row justify-between">
          <input type="text" placeholder="Celular*" class="border-2 border-[#707780]/10 rounded-lg p-2">
          <input type="text" placeholder="CPF*" class="border-2 border-[#707780]/10 rounded-lg p-2">
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
