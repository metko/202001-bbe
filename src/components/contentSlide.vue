<template>
   <div class="px-10 flex flex-col h-full">
      <h3 v-html="slide.title" class=" text-3xl title text-green-100 tracking-wider"></h3>
      <div v-html="slide.content" class="mt-5 mb-10 text-gray-200 leading-relaxed"></div>
   </div>
</template>

<script>
export default {
   props : { slide: Object},
   name : 'contentSlide'
   
}
</script>

<style scoped>

</style>