<template>
          <section :ref="section.name" :id="section.name" data-spy 
          class="h-screen w-full bg-blue-100  relative overflow-hidden">

                  <div class="video-background">
                     <div class="video-foreground">
                       <video autoplay loop muted>
                           <source  src="@/assets/videos/header-video.mp4" type="video/mp4">
                        </video>
                     </div>
                  </div>
             
                <div class="md:pt-20 md:container h-full  mx-auto one z-4 relative flex justify-center w-full md:mt-20 flex-col" >
                   <h1 class="w-full text-center text-green-900 py-3 title  text-3xl md:text-4xl px-10" style="background: rgba(255,255,255,.5)">
                        <span class='text-orange-100'>Depuis 1994, </span><br>
                        Notre unique métier c'est vos arbres
                   </h1>
                   <div class="flex justify-around mt-3">
                      <a href="#"  class="button text-white bg-orange-100 text-center py-2 px-10 md:px-16"
                      @click.prevent="$parent.contactModalOpen = !$parent.contactModalOpen">
                         <span class="btn-text italic inline-block title  text-2xl md:text-3xl">
                         Prendre un devis 
                       
                         </span><br>
                           <span class="text-orange-800 uppercase font-base ">sur rendez vous</span>
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
.video-background {
  background: #000;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;
}
.video-foreground,
.video-background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: scale(1.1);
}

@media (min-aspect-ratio: 16/9) {
  .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground { width: 300%; left: -100%; }
}

</style>