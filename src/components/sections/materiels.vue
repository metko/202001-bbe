<template>
          <section :ref="section.name" :id="section.name" data-spy 
          class="lg:h-screen lg:max-h-screen w-full bg-white pb-20 lg:pb-0">
              <div class="container h-full overflow-hidden pt-20 mx-auto flex flex-col" >
                 <h2 class="title-section title text-4xl text-center text-green-100 flex-grow-0 italic">Notre matériel</h2>
                 <div class="content-section flex flex-grow">
                     <slider :slides="materiels"></slider>
                 </div>
              </div>
          </section>
</template>

<script>
import slider from '@/components/slider'
import data from '@/data.js'
export default {
   name: "section4",
   props: {section: Object},
   components: {
      slider
  },
  computed: {
      materiels() {
        return data.materiels
      }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>