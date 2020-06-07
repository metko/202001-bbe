<template>
   <div class="mx-10 flex lg:h-full relative overflow-hidden" style="height:500px">

      <transition-group name="fade" tag="div" class="w-full h-full">
         <div v-for="i in [currentIndex]" :key="i" class=" rounded w-full shrink-0 relative h-full w-full" >
            <img :src="currentImg" :title="currentTitleAttr" :alt='currentAltAttr' class="img-transform"  style="max-width: none;"/>
            <div class="bottom-box">
                  <div class="dots">
                     <div class="dot" :class="[currentIndex == index ? 'active' : '']"  v-for="(dot, index) in slide.images" :key="index" @click.prevent="goImage(index)" @click="resetInterval"> </div>
                  </div>
                  <div class="legend">{{currentLegend}}</div>
            </div>
         </div>
      </transition-group>

      <a class="prev" @click.prevent="prev" href="#">
         <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
            <polygon class="cls-1 fill-current text-orange-100" points="10.17 8.56 17.68 8.56 28.83 19.81 17.68 30.44 10.17 30.44 20.79 19.81 10.17 8.56"/>
         </svg>
      </a>
      <a class="next" @click.prevent="next" href="#">
          <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
            <polygon class="cls-1 fill-current text-orange-100" points="10.17 8.56 17.68 8.56 28.83 19.81 17.68 30.44 10.17 30.44 20.79 19.81 10.17 8.56"/>
         </svg>
      </a>

   </div>
</template>

<script>
   export default {
      props: {slide: Object},
      name: "imageSlide",
      data () {
         return {
            timer: null,
            currentIndex: 0
         };
      },
      mounted: function() {
         this.startSlide();
         //console.log(this.slide)
      },

      methods: {
         goImage: function(index) {
            this.currentIndex = index
         },
         startSlide: function() {
            this.timer = setInterval(this.next, 7000);
         },
         resetInterval: function() {
            clearInterval(this.timer);
            this.startSlide()
         },
         next: function() {
             if(this.currentIndex+1 == this.slide.images.length) {
               this.currentIndex = 0;
            }else {
               this.currentIndex += 1;
            }
         },
         prev: function() {
            if(this.currentIndex == 0) {
               this.currentIndex = this.slide.images.length-1;
            }else {
               this.currentIndex -= 1;
            }
            
         }
      },

      computed: {
         currentImg: function() {
            return this.slide.images[Math.abs(this.currentIndex) % this.slide.images.length].img_url;
         },
         currentTitleAttr: function() {
            return this.slide.images[Math.abs(this.currentIndex) % this.slide.images.length].title;
         },
         currentAltAttr: function() {
            return this.slide.images[Math.abs(this.currentIndex) % this.slide.images.length].alt;
         },
         currentLegend: function() {
            return this.slide.images[Math.abs(this.currentIndex) % this.slide.images.length].legend;
         }
      }
   }
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  display: block;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.img-transform {
   height: 100%;
   width:auto;
   position: absolute;
   left:50%;
   transform: translateX(-50%);
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
.prev, .next {
   svg {
      height: 32px;
      width: 32px;
   }
}
.prev{
   transform: rotate(180deg);
}
.prev:hover, .next:hover {
   cursor: pointer;
}

.bottom-box{
   position: absolute;
   bottom: 0;
   width: 100%;
   background: rgba(255,255,255, .7);
}
.dots{
   display: flex;
   justify-content: center;
   margin-top: 5px;
}
.dot {
   margin:3px;
   width: 10px;
   height: 10px;
   border-radius:50%;
   background: #669966;
   &.active {
      background: #f07d00;
   }
   &:hover {
      cursor: pointer;
   }
}

.legend{
   padding: 5px 8px;
   color: #000;
   text-align: center;
   font-size: 13px;
   font-style: italic;
}
</style>