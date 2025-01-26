<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductForm",
  setup() {
    const isChecked = ref(false);
    const ifile = ref<HTMLInputElement | null>(null);

    const triggerFileInput = () => {
      if (ifile.value) {
        ifile.value.click();
      }
    };

    return {
      isChecked,
      ifile,
      triggerFileInput,
    };
  },
});
</script>

<template>
  <div class="flex flex-col bg-slate-100/90 text-black gap-4 p-4 md:p-8">
    <div class="flex flex-col gap-2">
      <h1 class="text-black font-bold text-2xl md:text-3xl">Produto</h1>
      <p class="text-sm md:text-base">Edite um produto em sua loja.</p>
    </div>
    <div class="w-full px-2 md:p-8">
      <div class="flex flex-col lg:flex-row gap-4 p-2 md:p-4">
        <div class="flex flex-col gap-2 w-full lg:w-[60%]">
          <form class="flex flex-col gap-2">
            <div class="bg-white flex flex-col border rounded-md p-4 md:p-8">
              <label class="font-bold">Título *</label>
              <input type="text" class="w-full md:w-[50%] p-2 border rounded-md" />
              <label class="font-bold mt-4">Descrição</label>
              <div
                class="mb-4 w-full md:w-[50%] bg-gray-50 rounded-lg border border-gray-200"
              >
                <div class="flex justify-between items-center py-2 px-3 border">
                  <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                    <div class="flex items-center space-x-1 sm:pr-4">
                      <button
                        type="button"
                        class="p-2 border border-black text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                      >
                        <img
                          src="../assets/AdoreiiView/code.svg"
                          class="w-4 h-4"
                          alt=""
                        />
                      </button>
                      <!-- Other toolbar buttons remain the same -->
                    </div>
                  </div>
                </div>
                <div class="py-2 px-4 bg-white rounded-b-lg">
                  <textarea
                    rows="8"
                    class="block px-0 w-full text-sm text-gray-800 bg-white border-0 focus:outline-none"
                    placeholder=""
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="bg-white flex flex-col border rounded-md p-4 md:p-8">
              <div class="flex flex-col sm:flex-row justify-between items-center">
                <label class="font-bold mb-2 sm:mb-0">Imagens *</label>
                <button @click="triggerFileInput" class="underline text-sm sm:text-base">
                  Adicionar Imagem
                </button>
                <input type="file" class="hidden" ref="ifile" />
              </div>
              <div class="flex flex-col mt-4">
                <img
                  src="../assets/AdoreiiView/code.svg"
                  class="w-full md:w-52 h-auto md:h-52 object-cover"
                />
              </div>
            </div>

            <div class="flex flex-col gap-4 border bg-white rounded-md p-4 md:p-8">
              <p class="font-bold">Variantes</p>
              <div
                class="flex flex-col sm:flex-row items-center justify-between w-full sm:w-[30%]"
              >
                <span class="text-sm sm:text-base">Esse produto possui variações?</span>
                <label
                  class="relative inline-flex items-center cursor-pointer mt-2 sm:mt-0"
                >
                  <input type="checkbox" v-model="isChecked" class="peer hidden" />
                  <div
                    class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#ff0052]"
                  ></div>
                  <div
                    class="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"
                  ></div>
                </label>
              </div>

              <div v-if="isChecked" class="flex flex-col gap-4">
                <p>Nome da opção *</p>
                <input
                  type="text"
                  placeholder="ex: Tamanho"
                  class="border-2 rounded-md p-2 focus:outline-none w-full sm:w-[60%]"
                />
                <p>Valores *</p>
                <input
                  type="text"
                  class="border-2 rounded-md p-2 focus:outline-none w-full sm:w-[60%]"
                  placeholder="ex: P, M, G"
                />
                <button
                  class="border rounded-md w-full sm:w-1/3 border-[#ff0052] text-[#ff0052] p-2 bg-none"
                >
                  + Adicionar Opção
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-4 border bg-white rounded-md p-4 md:p-8">
              <div class="flex flex-col sm:flex-row justify-between">
                <p class="font-bold mb-2 sm:mb-0">Coleções</p>
                <button class="underline text-sm sm:text-base">Adicionar Coleções</button>
              </div>
              <select class="w-full sm:w-[80%] p-2 focus:outline-none border rounded-md">
                <option value="Escolher coleções">Escolher Coleções</option>
              </select>
            </div>

            <div class="flex flex-col">
              <div class="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  class="p-3 w-full sm:w-3/12 border border-[#ff0052] rounded-md text-[#ff0052] mb-2 sm:mb-0"
                >
                  Cancelar
                </button>
                <button class="p-3 w-full sm:w-3/12 rounded-md bg-[#ff0052] text-white">
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="flex flex-col gap-4 w-full lg:w-[40%]">
          <div
            class="flex flex-col gap-4 border bg-white rounded-xl p-4 md:p-8 w-full md:w-1/2"
          >
            <p class="font-bold">Status *</p>
            <div class="w-full flex flex-row border rounded-xl p-3 text-start text-lg">
              <select class="w-full">
                <option value="">Ativo</option>
                <option value="">Inativo</option>
              </select>
            </div>

            <div class="flex flex-row gap-4 md:gap-6 w-full items-center">
              <div class="flex flex-col">
                <img
                  src="../assets/AdoreiiView/code.svg"
                  class="w-16 h-16 md:w-20 md:h-20"
                />
              </div>

              <div class="flex flex-col">
                <p>Produto</p>
                <p>R$ 1,32</p>
                <a href="" class="underline text-right">Link de compra</a>
              </div>
            </div>
          </div>

          <div class="border rounded-md w-full md:w-[60%] flex p-4 items-center gap-3">
            <img src="../assets/AdoreiiView/help.svg" class="w-5 h-5" />
            <p class="text-[#ff0052] font-bold">
              Está com dúvidas?
              <span class="text-black font-normal underline"
                >Aprenda como criar seus produtos.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
