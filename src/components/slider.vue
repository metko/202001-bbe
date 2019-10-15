<template>
   <div class="h-full w-full flex flex-col ">
         <div class="flex justify-around  ">
            <ul class="flex">
               <li 
               @click="setActiveSlide(index)"
               :class="{'is-active' : activeSlide == index}"
               v-for="(slide, index) in slides" :key="index" class="nav-tab hover:cursor-pointer">{{slide.tab_name}}</li>
            </ul>
         </div>
         <div class="flex  h-full flex-grow mt-4 relative ">
          
               <div @click="prevSlide" class="control_right  w-12 h-12 hover:pointer hidden md:block">
                   <svg  class="fill-current text-orange-100" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" >
                     <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                        "/>
                  </svg>
               </div>

               <div class=" h-full flex flex-wrap w-full">
                  <div class="w-full lg:w-1/2 flex flex-col flex-grow">          
                     <transition :name="animationName" mode="out-in">
                        <component v-bind:is="'contentSlide'" :slide="getSlide(0)" :key="getSlide(0).title"></component>
                     </transition>
                    
                  </div>

                  <div class="w-full lg:w-1/2">
                     <transition :name="animationName" mode="out-in">
                        <component v-bind:is="'imageSlide'" :slide="getSlide(0)" :key="getSlide(0).title"></component>
                     </transition>
                  </div>
               </div>

               <div @click="nextSlide" class=" arrow-right control_left  ml-auto w-12 h-12 pointer  hidden md:block">
                  <svg  class="fill-current text-orange-100" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" >
                     <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                        "/>
                  </svg>
               </div>

            </div>
         
       
   </div>
</template>

<script>
import contentSlide from "./contentSlide.vue"
import imageSlide from "./imageSlide.vue"

export default {
   name:'slider',
   components: {contentSlide, imageSlide},
   props: {slides: Array},
   methods: {
      setActiveSlide(index) {
         if(index > this.activeSlide){
            this.animationName = "slide-fade-next"
         }else{
            this.animationName = "slide-fade-previous"
         }
         this.activeSlide = index
      },
      getSlide(index) {
         if(index){
             return this.slides[index]
         }
         return this.slides[this.activeSlide]
      },
      prevSlide() {
         if(this.activeSlide == 0){
            this.setActiveSlide(this.totalSlide)
         }else{
             this.setActiveSlide(this.activeSlide - 1)
         }
      },
      nextSlide() {
         if(this.activeSlide == this.totalSlide){
           this.setActiveSlide(0)
         }else{
            this.setActiveSlide(this.activeSlide + 1)
         }

      }
   },
   mounted() {
      this.totalSlide = this.slides.length
   },
   data() {
      return {
            activeSlide : 0,
            animationName : "",
            totalSlide : "",
      }
   } 
}
</script>

<style scoped>
.control_right{
   transform: rotate(180deg);
}
.control_right:hover, .control_left:hover {
   cursor: pointer;
}
.nav-tab{
   @apply mx-4 px-0 my-3 uppercase text-orange-100 tracking-wider italic relative;
}

.nav-tab.is-active{
   @apply  text-orange-300;
}

.nav-tab:before{
   content: "";
   @apply block bg-orange-100 w-full   absolute bottom-0 left-0;
   height: 2px;
   transform: scaleX(0);
   transition: all .5s ease;
}

.nav-tab.is-active::before{
   transform: scaleX(1);
}

.slide-fade-next-leave-active, .slide-fade-next-enter-active,
.slide-fade-previous-leave-active, .slide-fade-previous-enter-active{
  transition: all .3s ease;
  transform: translateX(0px);
}

.slide-fade-next-enter,
.slide-fade-previous-leave-to{
   transform: translateX(10px);
  opacity: 0;
}

.slide-fade-next-leave-to,
.slide-fade-previous-enter{
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-previous-enter{
   transform: translateX(-10px);
  opacity: 0;
}
</style>