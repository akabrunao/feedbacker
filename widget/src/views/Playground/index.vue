<template>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main">
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">Página para testar o widget</p>
  </div>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray">
    <h1 class="text-6xl font-black text-brand-graydark">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-graydark">Página para testar o widget</p>
  </div>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-main">
    <h1 class="text-6xl font-black text-brand-gray">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-gray">Página para testar o widget</p>
  </div>
  <div class="w-full h-3/4 flex flex-col justify-center items-center bg-brand-gray">
    <h1 class="text-6xl font-black text-brand-graydark">Playground</h1>
    <p class="text-2xl mt-3 font-regular text-brand-graydark">Página para testar o widget</p>
  </div>
  <widget/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Widget from '../widget/index.vue'
export default defineComponent({
  components: { Widget }
})
</script>
