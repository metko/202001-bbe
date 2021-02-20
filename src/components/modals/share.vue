<template>
   <div class="fixed z-50 top-0 left-0 bottom-0 right-0" style="background-color:rgba(255,255,255, .6)">
        <div class="absolute h-12 w-12 bg-orange-100 right-0 top-0 mt-10 mr-10 rounded-full hover:cursor-pointer" @click="$parent.shareModalOpen = false">
         <svg  x="0px" y="0px" viewBox="0 0 52 52"  xml:space="preserve" class="fill-current text-white">
               <path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0
                  s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36
                  s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293
                  c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"/>
            </svg> 
         </div>


         <div class="container mx-auto flex flex-wrap lg:mt-0 items-center h-full">
                <div class="w-full  lg:w-1/2 lg:mx-auto  bg-orange-100 rounded p-10">
                     <div class="title text-white text-3xl text-center">Contactez-nous !</div>
                     <div class="flex mt-4">
                           <div class="w-1/3 flex justify-center">
                              <a href="whatsapp://send?text=Bonjour,%0D%0ACe%20site%20pourrait%20t’intéresser.%0D%0Ahttps://bourbonelagage.re%0D%0A%0D%0ABonne%20journée," data-action="share/whatsapp/share" class="inline-block bg-green-500 rounded flex justify-center items-center px-2">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="mr-2" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                                    <g>
                                       <path d="m25 21.7q0.3 0 2.2 1t2 1.2q0 0.1 0 0.3 0 0.8-0.4 1.7-0.3 0.9-1.6 1.5t-2.2 0.6q-1.3 0-4.3-1.4-2.2-1-3.8-2.6t-3.3-4.2q-1.6-2.3-1.6-4.3v-0.2q0.1-2 1.7-3.5 0.5-0.5 1.2-0.5 0.1 0 0.4 0t0.4 0.1q0.4 0 0.6 0.1t0.3 0.6q0.2 0.5 0.8 2t0.5 1.7q0 0.5-0.8 1.3t-0.7 1q0 0.2 0.1 0.3 0.7 1.7 2.3 3.1 1.2 1.2 3.3 2.2 0.3 0.2 0.5 0.2 0.4 0 1.2-1.1t1.2-1.1z m-4.5 11.9q2.8 0 5.4-1.1t4.5-3 3-4.5 1.1-5.4-1.1-5.5-3-4.5-4.5-2.9-5.4-1.2-5.5 1.2-4.5 2.9-2.9 4.5-1.2 5.5q0 4.5 2.7 8.2l-1.7 5.2 5.4-1.8q3.5 2.4 7.7 2.4z m0-30.9q3.4 0 6.5 1.4t5.4 3.6 3.5 5.3 1.4 6.6-1.4 6.5-3.5 5.3-5.4 3.6-6.5 1.4q-4.4 0-8.2-2.1l-9.3 3 3-9.1q-2.4-3.9-2.4-8.6 0-3.5 1.4-6.6t3.6-5.3 5.3-3.6 6.6-1.4z"/>
                                    </g>
                                 </svg>
                                 <div class="s text-white text-sm">Partager</div>
                                 </a>
                           </div>

                           <div class="w-1/3 flex justify-center">
                              <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbourbonelagage.re&layout=button&size=large&appId=198285534020558&width=89&height=28" width="89" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                           </div>

                           <div class="w-1/3 flex justify-center">
                              <a href="mailto:?subject=Site%20Bourbon%20élagage%20à%20La%20Réunion&body=Bonjour,%0D%0ACe%20site%20pourrait%20t’intéresser.%0D%0Ahttps://bourbonelagage.re%0D%0A%0D%0ABonne journée," class="inline-block bg-gray-500 rounded flex justify-center items-center px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="mr-2" preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                                       <g>
                                          <path d="m33.4 13.4v-3.4l-13.4 8.4-13.4-8.4v3.4l13.4 8.2z m0-6.8q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h26.8z"/>
                                       </g>
                                    </svg>
                                 <div class="s text-white text-sm">Partager</div>
                              </a>
                           </div>
                     </div>
                </div>
         </div>
         
   </div>
</template>

<script>
   export default {
      
      

     
   }
</script>

<style scoped>

</style>