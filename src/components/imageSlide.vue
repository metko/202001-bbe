<template>
   <div class="mx-10 flex lg:h-full relative overflow-hidden" style="height:500px">

      <transition-group name="fade" tag="div" class="w-full h-full">
         <div v-for="i in [currentIndex]" :key="i" class=" rounded w-full shrink-0 relative h-full w-full" >
            <img :src="currentImg" class="img-transform"  style="max-width: none;"/>
         </div>
      </transition-group>

      <a class="prev" @click.prevent="prev" href="#">&#10094; Previous</a>
      <a class="next" @click.prevent="next" href="#">&#10095; Next</a>

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
         console.log(this.slide)
      },

      methods: {
         startSlide: function() {
            this.timer = setInterval(this.next, 4000);
         },

         next: function() {
            this.currentIndex += 1;
         },
         prev: function() {
            this.currentIndex -= 1;
         }
      },

      computed: {
         currentImg: function() {
            return this.slide.images[Math.abs(this.currentIndex) % this.slide.images.length].img_url;
         }
      }
   }
</script>

<style scoped>
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

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>