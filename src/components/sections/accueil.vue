<template>
          <section :ref="section.name" :id="section.name" data-spy  class="h-screen w-full relative overflow-hidden">

                <div class=" md:container h-full  mx-auto one z-4 relative flex justify-center md:justify-end w-full md:-mt-10 flex-col" >
                   <h1 class="w-full text-center text-green-900 py-3 title  text-lg md:text-3xl px-10 italic font-base" style="background: rgba(255,255,255,.5)">
                        Créée 1994, la 1ère entreprise spécialisé de l’île.<br>
                        <span class='text-orange-100'>Notre unique métier c’est vos arbres.</span>
                   </h1>
                   <div class="flex justify-around mt-3">
                      <a href="#"  class="button text-white bg-orange-100 text-center py-2 px-4 md:px-16"
                      @click.prevent="$parent.openContactModal()">
                         <span class="btn-text italic inline-block title  text-lg md:text-3xl uppercase">
                         Devis gratuit 
                         </span>
                          <span class="text-orange-800 uppercase text-xs -mt-1 block">sur rendez-vous</span>
                      </a>
                   </div>
              </div>

          </section>
</template>

<script>

export default {
   name: "section1",
   props: {section: Object},
   components: {
      
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped>
#accueil {
  background-image: url('~@/assets/images/acceuil/bourbon_elagage-ile-de-la-reunion.jpg');
  background-size: cover;
  background-position: center;
}
</style>