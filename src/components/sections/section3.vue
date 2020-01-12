<template>
          <section :ref="section.name" :id="section.name" data-spy 
          class="lg:h-screen w-full  relative">

            <div class="hidden bg-image absolute top-0 left-0 right-0 bottom-0 lg:flex items-center justify-center z-1"
               v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/bg-3.jpg') + ')' }"> </div>

              <div class="h-full customContainer lg:pt-20 pt-10 mx-auto relative" >
                 <div class="flex flex-wrap h-full ">
                        <div class="hidden lg:block w-full  lg:w-1/2"> 
                        </div>                     
                        <div class=" w-full lg:w-1/2 lg:flex lg:flex-col">
                           <h2 class="title text-green-100 text-4xl text-center w-full mb-10 italic ">Notre équipe</h2>
                           <div class="w-full   lg:hidden">
                                 <img src="@/assets/images/bg-3.jpg" alt="">
                           </div>
                           <div class="lg:flex-grow   px-6 py-16 text-white flex flex-col lg:justify-between" style="background: rgba(240, 125, 0, .6)">
                                  <div class="para mb-10 lg:mb-0">
                                       <div class="title italic text-xl text-center lg:text-right"><span class="text-orange-100">25 ans</span> d'éxpérience</div>
                                       <div class="text-white text-center lg:text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti qui libero assumenda fugit, voluptatum rerum aliquid enim nostrum ea repellendus sunt voluptates totam, exercitationem possimus amet accusamus laborum eaque hic.</div>
                                  </div>
                                  <div class="para mb-10 lg:mb-0">
                                       <div class="title italic text-xl text-center lg:text-right">Une équipe de professionnels <span class="text-orange-100">cértifiés</span></div>
                                       <div class="text-white text-center lg:text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti qui libero assumenda fugit, voluptatum rerum aliquid enim nostrum ea repellendus sunt voluptates totam, exercitationem possimus amet accusamus laborum eaque hic.</div>
                                  </div>
                                  <div class="para mb-10 lg:mb-0">
                                       <div class="title italic text-xl text-center lg:text-right">Notre métier c'est <span class="text-orange-100">vos arbres</span></div>
                                       <div class="text-white text-center lg:text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti qui libero assumenda fugit, voluptatum rerum aliquid enim nostrum ea repellendus sunt voluptates totam, exercitationem possimus amet accusamus laborum eaque hic.</div>
                                  </div>
                           </div>
                        </div>                     
                 </div>
              </div>
          </section>
</template>

<script>
export default {
   name: "section3",
   props: {section: Object},
   data() {
      return {
        
      }
   },
   components: {
      
  },
  methods: {

  }
}
</script>

<style scoped>

.bg-image{
   background-size: cover;
}



.customContainer {
    width: 100%;
  }

@media screen and (min-width: 1024px) {
  .customContainer {
      max-width: 1024px;
  }
}

</style>