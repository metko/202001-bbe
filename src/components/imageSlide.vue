<template>
   <div class=" mx-10 flex  lg:h-full ">
      <div class="img-wrapper rounded w-full" style="height:500px;
         background-image:url('https://loremflickr.com/300/600'); background-size: cover; background-position: center;">  
      </div>
     
   </div>
</template>

<script>
   export default {
      props: {slide: Object},
      name: "imageSlide"
   }
</script>

<style scoped>
/* .img-wrapper{
   position: relative;
}
.img-wrapper img{
   position: absolute;
   top: 0; 
} */
</style>