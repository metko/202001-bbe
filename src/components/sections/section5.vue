<template>
      <section :ref="section.name" :id="section.name" data-spy 
      class="  w-full bg-orange-100 pb-20 lg:pb-0">
         <div class=" h-full overflow-hidden pt-24 mx-auto flex flex-col" >
            <h2 class="title-section title text-4xl text-center text-white flex-grow-0">Gallerie</h2>
            <div class="content-section flex flex-col h-full">
               <div class="main-carousel mt-6 bg-orange-300">
                     <div v-for="(media, index) in medias" :key="index" class="carousel-cell w-1/2 md:w-1/3 lg:w-1/4  " >
                        <div class="flex h-full w-full items-center justify-around" 
                        @click='openGallery(index)'>
                           <div class="h-full w-full flex items-center justify-center " style="background-image:url('https://loremflickr.com/200/200'); background-size:cover" >
                              <div v-if="media.file_type == 'mp4'" class="w-1/4 icon-video">
                                 <img :src="require('@/assets/images/video.svg')" alt="" class="max-w-1/3">
                              </div>
                           </div>
                        </div>
                     </div>
               </div>

               <div class=" mt-20 mx-auto container flex flex-grow h-full mb-10 flex flex-wrap px-10">
                     <div class="w-full lg:w-2/5 ">
                           <h2 class="title text-white text-4xl italic leading-none">Contact</h2>
                           <div class="" style="color:#f7c690">Prendre un rendez-vous, demande de devis etc ...</div>
                           <form action="#" method="POST" class="flex flex-col mt-6 " v-on:submit.prevent="submitForm">
                                 <input type="text" name="name" class="w-3/4 mb-3 py-2 px-2 focus:outline-none" placeholder="Nom/prénom">
                                 <input type="text"  name="object" class="w-full mb-3 py-2 px-2 focus:outline-none" placeholder="Objet">
                                 <input type="email"  name="email" class="w-full mb-3 py-2 px-2 focus:outline-none" placeholder="Email">
                                 <textarea   name="message" class="w-full mb-3 py-2 px-2 focus:outline-none" placeholder="Votre message" rows="5"></textarea>
                                 <div class="flex justify-end">
                                    <button class="px-3 py-2 text-white relative flex items-center" style="background: #cc6600;">
                                       Envoyer
                                       <svg class="fill-current text-white  inline-block h-8 w-8 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                          <path class="cls-1" d="M16.74,44.33a1,1,0,0,1-.46-.12.94.94,0,0,1-.49-1L17.67,29l.45-2.19A.9.9,0,0,1,18,26.5L16.65,25,8.06,14.42a1,1,0,0,1,.81-1.56L47.3,15.58a1,1,0,0,1,.84.66,1,1,0,0,1-.28,1L17.37,44.09A.94.94,0,0,1,16.74,44.33ZM20,27.07l-.47,2.27L18,41,42.9,19.07ZM10.94,14.93l7.15,8.85,1.38,1.45,23.05-8.06Z"/>
                                       </svg>  
                                    </button>
                                 </div>
                           </form>
                     </div>
                     <div class="w-full lg:w-1/5 hidden lg:flex lg:items-center">
                         <img :src="require('@/assets/images/logo-be-1.svg')" alt="" title="" class="w-full -mt-10"/>
                     </div>
                     <div  class="w-full lg:w-2/5  mt-16 lg:mt-0">
                        <h3 class="title text-white text-xl italic lg:text-right">Nous intervenons dans la région <span class="text-orange-300">ouest et sud</span>. Pour toute demande d’informations nous contacter !</h3>
                        <div class="flex lg:justify-end my-6">
                           <div class="mr-3 mt-1">
                              <svg class="fill-current text-white  inline-block h-8 w-8 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                  <path class="cls-1" d="M16.74,44.33a1,1,0,0,1-.46-.12.94.94,0,0,1-.49-1L17.67,29l.45-2.19A.9.9,0,0,1,18,26.5L16.65,25,8.06,14.42a1,1,0,0,1,.81-1.56L47.3,15.58a1,1,0,0,1,.84.66,1,1,0,0,1-.28,1L17.37,44.09A.94.94,0,0,1,16.74,44.33ZM20,27.07l-.47,2.27L18,41,42.9,19.07ZM10.94,14.93l7.15,8.85,1.38,1.45,23.05-8.06Z"/>
                              </svg>  
                           </div>
                           <div><a href="contact@bourbonelagage.re" class="text-white underline text-xl">contact@bourbonelagage.re</a></div>
                        </div>
                        <div class="flex lg:justify-end my-6">
                           <div class="mr-3 ">
                              <svg class="fill-current text-white inline-block h-10 w-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                 <path class="cls-1" d="M35.47,23.81h-.16a1,1,0,0,1-.79-1.1,7.34,7.34,0,0,0-.22-3.22,7.65,7.65,0,0,0-1.91-3.21,5.67,5.67,0,0,0-3.1-1.65,4.41,4.41,0,0,0-2,.12,1,1,0,1,1-.55-1.84,6.44,6.44,0,0,1,2.83-.18,7.66,7.66,0,0,1,4.16,2.19,9.49,9.49,0,0,1,2.39,4A9.16,9.16,0,0,1,36.41,23,1,1,0,0,1,35.47,23.81Z"/>
                                 <path class="cls-1" d="M41.37,26.7a1,1,0,0,1-.29-.05,1,1,0,0,1-.62-1.21,13.29,13.29,0,0,0,0-8.34,13.88,13.88,0,0,0-3.12-5.27,12.37,12.37,0,0,0-5-3.24,10.89,10.89,0,0,0-6.75,0A1,1,0,1,1,25,6.78a12.75,12.75,0,0,1,7.94,0,14.39,14.39,0,0,1,5.82,3.73,16,16,0,0,1,3.56,6,15.29,15.29,0,0,1,0,9.53A1,1,0,0,1,41.37,26.7Z"/>
                                 <path class="cls-1" d="M25.18,34c-2.5,0-5.49-1.72-7.74-4.65-3-3.93-3.56-8.57-1.29-10.78a1,1,0,0,1,1.36,0,1,1,0,0,1,0,1.35C16,21.44,16.62,25.14,19,28.19s5.74,4.65,7.57,3.56a1,1,0,1,1,1,1.65A4.5,4.5,0,0,1,25.18,34Z"/>
                                 <path class="cls-1" d="M29.05,43.85c-4.11,0-10.24-4.33-15.66-11.4-6.66-8.7-9-17.45-5.51-20.36,2-1.64,2.28-1.79,2.69-1.83a1,1,0,0,1,1,.87,1,1,0,0,1-.67,1A23.18,23.18,0,0,0,9.1,13.57c-2.29,1.9-.5,9.46,5.82,17.72s13.19,12,15.58,10.23c1.35-1,1.78-1.35,1.9-1.47A1,1,0,0,1,34,41.1c-.15.26-.33.46-2.36,2A4.27,4.27,0,0,1,29.05,43.85Z"/>
                                 <path class="cls-1" d="M34.64,40.81h-.26A2,2,0,0,1,33.07,40h0l-5.94-7.75a2,2,0,0,1,.37-2.77l2.69-2.06a2,2,0,0,1,2.77.36l5.94,7.75a2,2,0,0,1-.37,2.78l-2.69,2.06A2,2,0,0,1,34.64,40.81Zm0-1.94s0,0,0,0l2.73-2.08L31.44,29,28.66,31Z"/>
                                 <path class="cls-1" d="M18.68,20l-.26,0a2,2,0,0,1-1.31-.76l-5.94-7.74a2,2,0,0,1,.37-2.78l2.69-2.06A2,2,0,0,1,17,7l5.94,7.75a2,2,0,0,1-.37,2.77l-2.69,2.06A1.94,1.94,0,0,1,18.68,20ZM15.48,8.17l-2.77,2.05,5.92,7.83h0l0,0L21.4,16Z"/>
                              </svg>    
                           </div>
                           <div><a href="tel:0692677685" class="text-white underline text-xl">06 92 67 76 85 </a></div>
                        </div>
                        <div class="flex lg:justify-end my-6">
                           <div class="mr-2 ">
                              <svg class="fill-current text-white  inline-block h-12 w-12 -mt-2" xmlns="http://www.w3.org/2000/svg" >
                                  <path class="cls-1" d="M26.73,41.82a1,1,0,0,1-.68-.28c-3-3-9.62-10.65-11.29-14a13.2,13.2,0,0,1-1.41-6,13.39,13.39,0,1,1,25.36,6c-1.68,3.34-8.27,11-11.3,14A1,1,0,0,1,26.73,41.82Zm0-31.72A11.48,11.48,0,0,0,16.47,26.69c1.45,2.9,7.15,9.55,10.26,12.8,3.11-3.25,8.81-9.9,10.26-12.8A11.47,11.47,0,0,0,26.73,10.1Z"/>
                                 <path class="cls-1" d="M30.86,28.19a.92.92,0,0,1-.42-.1l-3.71-1.8L23,28.09A.94.94,0,0,1,22,28a1,1,0,0,1-.39-.91L22.22,23l-2.86-3a1,1,0,0,1,.52-1.61l4.06-.72,1.94-3.64a1,1,0,0,1,1.7,0l1.94,3.64,4.06.72a1,1,0,0,1,.75.65,1,1,0,0,1-.22,1l-2.86,3,.56,4.09a1,1,0,0,1-.38.91A1,1,0,0,1,30.86,28.19Zm-4.13-3.92a1,1,0,0,1,.42.09l2.51,1.22-.38-2.77a1,1,0,0,1,.26-.79l1.94-2-2.75-.49a1,1,0,0,1-.68-.49l-1.32-2.46L25.42,19a1,1,0,0,1-.68.49L22,20l1.93,2a.93.93,0,0,1,.26.79l-.38,2.77,2.51-1.22A1,1,0,0,1,26.73,24.27Z"/>
                              </svg>
                           </div>
                           <div class=" text-left lg:text-right">
                              <div class="text-white underline text-xl">Bourbon Elagage</div>
                              <div class="text-white  text-xl">46 rue du lycée</div>
                              <div class="text-white  text-xl">97422 la Saline</div>
                           </div>
                           
                        </div>
                     </div>
               </div>
            </div>
         </div>
      
         <transition name='modal'>
            <galleryModal v-if="galleryOpen" :medias="medias" :selected="selected" ref='galleryModal'
            v-on:previousSelected='previousSelected'  v-on:nextSelected='nextSelected' v-on:selectSlide='selectSlide' 
            
            ></galleryModal>
         </transition>
         
        
      </section>
</template>

<script>
import Flickity from 'flickity'
import gallery from '@/gallery.js'
import galleryModal from '@/components/galleryModal.vue'

export default {
   name: "section5",
   props: {section:Object},
   components: {
      galleryModal
  },
  mounted() {
         var elem = document.querySelector('.main-carousel');
         new Flickity( elem, {
          freeScroll: true,
            contain: true,
            // disable previous & next buttons and dots
            prevNextButtons: true,
            pageDots: true,
            wrapAround: true,
            draggable: false,
            groupCells: 2,
            lazyLoad: 2
 
         });

         
  },
  data() {
     return {
        galleryOpen: false,
        selected : 0
     }
  },
  computed: {
     medias() {
        return gallery.medias
     }
  },
  methods: {
      openGallery(index) {
         this.selected = index
         this.galleryOpen = true
      },
      nextSelected() {
         if(this.selected == this.medias.length - 1) {
            this.selected = 0
         }else{
            this.selected++
         }
      },
      previousSelected() {
         if(this.selected == 0) {
            this.selected = this.medias.length - 1
         }else{
            this.selected = this.selected-1
         }
      },
      selectSlide(index) {    
            this.selected = index    
      },
      submitForm() {
         let httpRequest = new XMLHttpRequest();
         httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
               if (httpRequest.status === 200) {
                  var response = JSON.parse(httpRequest.responseText);
                  alert(response.computedString);
               } else {
                  alert('Un problème est survenu avec la requête.');
               }
            }
         };
          httpRequest.open('POST', "https://formcarry.com/s/LuLoMxbAggQ");
          httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          httpRequest.setRequestHeader('Accept', 'application/json');
         httpRequest.send('userName=toto');
      }
  }
}
</script>

<style >
@import url('https://unpkg.com/flickity@2/dist/flickity.min.css');

.main-carousel {
  /* background: #EEE; */
}

.carousel-cell {
  /* width: 25%; */
  height: 200px;
  /* margin-right: 10px; */

}
.carousel-cell:hover {
 cursor:pointer;
 
}
.carousel-cell .icon-video {
   transition: transform .1s ease;

}
.carousel-cell:hover .icon-video {
 transform: scale(1.1)
}

/* cell number */

</style>