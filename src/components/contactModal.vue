<template>
   <div class="fixed z-50 top-0 left-0 right-0 bottom-0 bg-orange-100 lg:flex lg:items-center overflow-y-auto lg:overflow-hidden">
      <div class="absolute h-12 w-12 bg-white right-0 top-0 mt-10 mr-10 rounded-full hover:cursor-pointer" @click="$parent.contactModalOpen = !$parent.contactModalOpen">
        <svg  x="0px" y="0px" viewBox="0 0 52 52"  xml:space="preserve" class="fill-current text-orange-100">
            <path d="M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0
               s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36
               s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293
               c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"/>
         </svg> 
      </div>
      <div class="container mx-auto flex flex-wrap mt-10 lg:mt-0 ">
         <div class=" w-full lg:w-1/2 px-10 ">
            <div class="title text-white text-3xl">Contactez nous!</div>
            <div class="title text-orange-300 italic text-xl mb-6">Devis gratuit sur rendez vous</div>
            <div class="title text-white italic mb-6">Prenez rendez vous pour <span class="text-orange-300">connaitre notre expertise</span>  et répondre au mieux a votre demande. Nous intervenons dans la région <span class="text-orange-300">ouest et sud</span>. <br>
            Pour toute demande d'informations nous connaître!
            </div>
            <div class=" w-full">
               <form action="#" method='POST'>
                  <input type="text" name="name" placeholder="Nom, Prénom" class="w-2/3 block  mb-3 py-2 px-2 focus:outline-none">
                  <input type="email" name="email" placeholder="Email" class="w-full block  mb-3 py-2 px-2 focus:outline-none">
                  <input type="text" name="object" placeholder="Objet de la demande" class="w-full block  mb-3 py-2 px-2 focus:outline-none">
                  <textarea type="text" name="body" placeholder="Message" rows="5" class="w-full block  mb-3 py-2 px-2 focus:outline-none"></textarea>
                 <div class="flex justify-end">
                     <button class="bg-red-100 px-3 py-2 text-white relative flex items-center" style="background: #cc6600;">
                        Envoyer
                        <svg class="fill-current text-white  inline-block h-8 w-8 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                           <path class="cls-1" d="M16.74,44.33a1,1,0,0,1-.46-.12.94.94,0,0,1-.49-1L17.67,29l.45-2.19A.9.9,0,0,1,18,26.5L16.65,25,8.06,14.42a1,1,0,0,1,.81-1.56L47.3,15.58a1,1,0,0,1,.84.66,1,1,0,0,1-.28,1L17.37,44.09A.94.94,0,0,1,16.74,44.33ZM20,27.07l-.47,2.27L18,41,42.9,19.07ZM10.94,14.93l7.15,8.85,1.38,1.45,23.05-8.06Z"/>
                        </svg>  
                     </button>
                  </div>
               </form>
            </div>
         </div>
         <div class="w-full lg:w-1/2 px-10 mt-16 lg:mt-0 mb-16 lg:mb-0">
            <div class="title text-white text-3xl text-center">Zone d'intervention</div>
            <div class="title text-orange-300 italic text-xl mb-6 text-center">La Possession > Le Tampon</div>
            <div class="w-full h-64 bg-red-200">

            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name:'contactModal'
   }
</script>

<style scoped>

</style>