<template>
    <div class="mx-auto max-w-7xl p-4 flex gap-4">
        <div class="flex flex-col w-[100%]">
            <div class="w-full flex flex-row gap-2 items-center">
                <div>
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-check _d-block" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: var(--gray-700); font-size: 20px;" width="20" height="22.86"><path class="" fill="#32363B" d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"></path></svg>
                </div>
                <div class="flex flex-col w-[100%]">
                    <p class="text-black text-xs">Após o pagamento, você receberá por email as informações de acesso à sua compra</p>
                </div>
                
            </div>
            
            
                
            <button class="bg-[#009d43] rounded-md text-white p-4 flex flex-row justify-center items-center gap-2 mt-2"><svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-qrcode" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="qrcode" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: inherit; font-size: 20px;" width="20" height="22.86"><path class="" fill="#FFFFFF" d="M144 64H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80C0 53.5 21.5 32 48 32zm96 288H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16zM48 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H304zM256 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm0 224c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v68h64V304c0-8.8 7.2-16 16-16s16 7.2 16 16v84c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V320H288V472c0 8.8-7.2 16-16 16s-16-7.2-16-16V304zM88 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V376zM344 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H344c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V448zm96-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H416c-8.8 0-16-7.2-16-16V448c0-8.8 7.2-16 16-16z"></path></svg>Gerar código PIX</button>
            <button class="border border-[#009d43] rounded-md p-3 mt-2 text-[#009d43] focus:outline-none focus:ring-2 focus:ring-[#009d43] focus:border-[#009d43] duration-1000">Copiar código PIX</button>
            
        </div>
        <div class="flex flex-col w-[50%] justify-center">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-inline--fa fa-qrcode " aria-hidden="true" focusable="false" data-prefix="fal" data-icon="qrcode" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: var(--gray-300); " width="200" height="200.71"><path class="" fill="#C9CED4" d="M144 64H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80C0 53.5 21.5 32 48 32zm96 288H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16zM48 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H304zM256 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80zm0 224c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v68h64V304c0-8.8 7.2-16 16-16s16 7.2 16 16v84c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V320H288V472c0 8.8-7.2 16-16 16s-16-7.2-16-16V304zM88 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H88c-8.8 0-16-7.2-16-16V376zM344 104h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H344c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V448zm96-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H416c-8.8 0-16-7.2-16-16V448c0-8.8 7.2-16 16-16z"></path></svg>
        </div>
        
       
    </div>
    <div class="w-full flex flex-col text-black">
            <hr class="w-[100%] border-[#707780/20]">
            <p class="text-[#707780] p-4">Detalhes da compra </p>
            <hr class="w-[100%] border-[#707780/20]">
            <div class="flex text-xs w-full p-4 justify-between">
                <p class="font-bold">Reiki Estelar - PRATICANTE</p>
                <p>R$ 497,00</p>
            </div>
            

    </div>
</template>


