<template>
   <div class="fixed z-50   top-0 left-0 bottom-0 right-0" style="background-color:#030303">
      <div class="relative w-full h-full py-12 pb-0">
            <div class="absolute top-0 right-0 mr-10 mt-12 h-10 w-10 bg-white z-50 rounded-full hover:cursor-pointer" @click="$parent.galleryOpen = false">
               <svg  x="0px" y="0px" viewBox="0 0 52 52"  xml:space="preserve" class="fill-current text-orange-100">
                  <path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0
                     s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36
                     s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293
                     c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"/>
               </svg> 
            </div>
            <div class="container mx-auto h-full flex flex-col justify-between relative">
             
               <h3 class="title text-orange-100 text-center text-4xl " >Galerie</h3>
               
               <div class="flex flex-col justify-center items-center w-full relative h-full mt-4 mb-0"  style="max-height: 65%;">

                    <div @click="prevSelected" class="hidden md:block absolute h-10 w-10 top-0 left-0  hover:cursor-pointer" style="top:50%; z-index: 200; transform:rotate(180deg)" >
                       <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
                           <polygon class="cls-1 fill-current text-orange-100" points="10.17 8.56 17.68 8.56 28.83 19.81 17.68 30.44 10.17 30.44 20.79 19.81 10.17 8.56"/>
                        </svg>
                    </div>

                    <div @click="nextSelected" class="hidden md:block absolute h-10 w-10  top-0 right-0  hover:cursor-pointer" style=" z-index: 200; top:50%;">
                      <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
                        <polygon class="cls-1 fill-current text-orange-100" points="10.17 8.56 17.68 8.56 28.83 19.81 17.68 30.44 10.17 30.44 20.79 19.81 10.17 8.56"/>
                     </svg>
                    </div>

                     <v-touch v-on:swipeleft="nextSelected" v-on:swiperight="prevSelected"  v-bind:swipe-options="{ direction: 'horizontal', threshold: 2, velocity: .001}" class="w-full h-full  overflow-hidden ">

                        <div class="absolute h-full w-full z-50" :class="{hidden: isVideo}"></div>
                        <img v-if="getSelected.file_type == 'jpg' || getSelected.file_type == 'png' || getSelected.file_type == 'gif'" :src="srcMediaSelected" class="image-selected rounded border border-white" :alt="getSelected.file_alt" :title="getSelected.title" >
                        <div v-else class="h-full w-full">
                           <iframe id="ytplayer" type="text/html" width="100%" height="100%" :src="srcMediaSelected" frameborder="0" allowfullscreen></iframe>
                        </div>
                       
                     
                     </v-touch>

                     <div class="mt-3 italic" style="color: #525252">
                        {{getSelected.file_description}}
                     </div>
               </div>

              
               <div class="main-carousel-modal py-5">
                  <div v-for="(media, index) in medias" :key="index" 
                  class="carousel-cell w-1/4 md:w-1/6 lg:w-1/8" 
                  v-bind:class="{'active-cell': selected == index}"
                  @click='selectSlide(index)'
                  >
                     <div class=" flex h-full w-full items-center justify-around" >
                        <div class="h-full w-full flex justify-center items-center" :style="'background-image:url(' + require('@/assets/images/gallery/thumbs/'+media.file_src_cover) + '); background-size:cover'" >
                           <div v-if="media.file_type == 'mp4'" class="w-1/4 icon-video">
                                 <img :src="require('@/assets/images/video.svg')" :alt="media.file_alt" :title="media.title" class="max-w-1/3">
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
              

            </div>
      </div>
   </div>
</template>

<script>
import Flickity from 'flickity'

   export default {
      name:'galleryModal',
      props: {medias: Array, selected: Intl},
      data() {
         return {
            flickity : null
         }
      },
      methods: {
         nextSelected() {
               this.$emit('nextSelected')
               this.flickity.next( true, false)
         },
         prevSelected() {
               this.$emit('previousSelected')
               this.flickity.previous( true, false)
         },
         selectSlide(index) {
               this.$emit('selectSlide', index)
               this.flickity.selectCell( index, true, false ) 
         },
      },
      computed: {
         srcMediaSelected(){
            if(this.getSelected.file_type == "mp4"){
               return this.getSelected.file_src
            }else{
               return require('@/assets/images/gallery/'+this.getSelected.file_src)
            }
         },

         isVideo() {
            if(this.getSelected.file_type == "mp4") return true
            return false
         },
         
         getSelected(){
            return this.medias[this.selected]
         }
      },
      mounted() {
         
         var elem = document.querySelector('.main-carousel-modal');
         this.flickity = new Flickity( elem, {
          freeScroll: true,
            contain: true,
            // disable previous & next buttons and dots
            prevNextButtons: false,
            pageDots:    false,
            wrapAround: true,
            draggable: true,
           
         });

         if(this.selected){
            this.selectSlide(this.selected)
         }
      }
   }
</script>

<style scoped>
@import url('https://unpkg.com/flickity@2/dist/flickity.min.css');

.main-carousel {
  background: #EEE;
}
#ytplayer{
   max-width: 100%;
}

.carousel-cell {
  height: 120px;
  border: 1px solid transparent;
}
.active-cell{
  border: 4px solid #ff6600;
}

.image-selected{
   @apply h-full w-auto relative;
   left: 50%;
   transform: translateX(-50%);
}
</style>