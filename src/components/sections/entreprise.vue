<template>
          <section :ref="section.name" :id="section.name" data-spy 
          class="lg:h-screen w-full  relative">
             <div class="container h-full overflow-hidden pt-20 mx-auto flex flex-col" >
               <h2 class="title-section title text-4xl text-center text-green-100 flex-grow-0 italic">Notre entreprise</h2>
               <div class="content-section flex flex-grow mt-6 flex-wrap">

                    <!-- BLOC 1 -->
                     <div class="p-2 flex w-full lg:w-1/3 h-full">
                        <div class="flex items-center w-full px-2 w-full  ">
                           <div class="w-full flex flex-col items-center">
                              <svg class="icon-1">
                                 <path class="cls-1" d="M68.79,57.53a3.23,3.23,0,0,0,2.63-4.07c-.46-1.36-2.13-2-2.06-2.26.3-1.05-.57-2.18-.57-2.57s2.95,2.51,3.22,2c.92-1.52-2.26-3.79-2.92-4.05a2.81,2.81,0,0,0-2.3.83c-.27.39,1.52-4.62,3.65-6.4a11.79,11.79,0,0,0,3.93-11.46c-.29-1-2.18-2.22-3-2.88s-.09-.57-.09-1A5.19,5.19,0,0,1,71.23,24a1.41,1.41,0,0,1,.6-.88A8.7,8.7,0,0,0,73,22.61c1-.69.7-1.12.78-1.7s.27-4.09-2.61-5.75A4.43,4.43,0,0,0,67,14.63c-2,.6-2.62,2.75-3.14,2.88a1.35,1.35,0,0,0-1,1.19c0,.56.87,1,.87,1a4.18,4.18,0,0,1-.35,1.87c-.25.4.48.61.48.61a3,3,0,0,1,.35,1.59c-.74,3.09,1,2.09.87,2.25-.35.4-1.7,1.39-1.44,2s-1.26.26-2.35,1.21c-.31.27-.8.43-1.07.17-.09-.1,0-.44-1.28-1.57a7.94,7.94,0,0,0-1.37-1.35c-.66-.4-.31-2-.31-2,.13-1.17.31-1.39.31-2,0-.78-1.42-1.33-2.2-1.33a8.82,8.82,0,0,0-2.81.81,1.71,1.71,0,0,1-1.7-.13c-.13-.13,0-.78-.42-1.14s-.89,0-.89-.41v-.2l.17-.07-.17-.26v0l.19-.08-.17-.26.17-.08-.17-.27L49.7,19l-.17-.27.17-.07-.18-.28h0l.19-.08-.18-.27.18-.08-.18-.28.18-.07-.18-.28.17-.07L49.53,17l.18-.07-.18-.27.18-.08-.17-.28.17-.08L49.53,16h0l.18-.08-.16-.26.16-.07-.18-.28h0l.18-.08-.18-.28h0l.18-.08-.18-.27.18-.08-.18-.27.17-.08-.18-.27v0l.18-.08-.18-.28v0l.17-.07-.17-.28v0l.17-.08-.18-.28h0l.17-.07-.17-.26v0l.19-.09L49.5,12v0l.18-.09-.18-.25v0l.17-.09-.18-.25v0l.18-.1-.19-.26h0l.18-.09-.2-.26.17-.09-.18-.24.17-.09-.18-.25.14-.07-.18-.25.13-.07-.19-.25.15-.16-.26-.17.14-.14-.27-.18.09-.16-.29-.1L49,8.1l-.28,0,0-.17h-.31v-.2h0v0l-.3.06,0-.17-.27.13h0l-.05-.19-.28.13-.07-.16-.27.17-.18-.07,0,.29h-.18v0h0l.08.31-.17,0,.11.29-.17,0,.13.31-.19,0,.12.3-.15,0,.13.31-.17,0,.11.29-.13,0,.12.31-.16,0,.13.32-.17.07.17.26v0l-.19.08.17.26v0l-.21.09.19.29v0l-.21.09.18.27-.17.07.17.27h0l-.19.08.17.26h0l-.19.08.18.28-.19.08.17.28-.18.08.18.27v0l-.19.08.18.27-.18.07.17.27h0l-.2.09.16.26-.16.07.17.28-.18.08.18.28v0l-.19.08.18.27-.18.08.17.28-.19.08.18.27-.19.08.18.29-.18.08.17.27h0l-.19.08.18.28v0l-.18.08.17.27v0l-.18.08.17.26v0l-.2.09.18.27L46,19l.18.29h0l-.19.09.17.26v0l-.19.08.16.25v.07l-.16.07.13.21c0,.26-.08.42-.13.45-.53.26-.87-.11-1,.41s-1.48,7.19-1.22,7.71.66.57.64,1c-.11,1.7,2,1.24,2,1.76s-.16,2.57.5,3.36.93.3,1.46.43,2.07,2.64,3.35,3.73,3.13,2,2.49,2.42c-.44.27-3.32.32-5,.52-.23,0-5.84.69-6.45.39-.13-.07,1-2.68.94-3.2a5.6,5.6,0,0,0-2-4.08c-.78-.52-.57-4.43-.7-5.47s-.35-9.08-.39-9.91c-.09-1.67-1.65-10.63-1.92-12.06s-3.36-2.68-6.12-3c-5.49-.61-4,.12-7.26.38s-4.28,1.52-4.44,4.05c-.08,1.18,1.28,21.62,1,25-.37,5.14-.2,7.35-.38,8.18-.06.33-2-3.13-2.81-2.81-1,.43-3.19,4-3.21,4.43-.07,1.44,5.94,11.57,6.14,11.77.52.52,2.09,30.58,2.09,30.58l23.06.27s0-7.19,0-7.72-1.3-5.26-.78-4.87,1.52.91,1.92,1.17.65,3,1.13,4a2.65,2.65,0,0,0,2.57,1.31c1.18-.13,1.57-4.1,1.7-4.62s.63-2.75,1.09-2.92c1.39-.52,2.83-4.23,2.83-4.23s.57-5.75.57-5.36,1.16-5.2,1.78-5.75c4.57-4,5.61-4.86,6-4.53s-.21,10.76,0,12.68c.08.65.32,3.62,1.27,4.14s4.24,2.87,6-2.1C73.49,65.79,68.36,57.64,68.79,57.53ZM46.45,10.6Zm1.82,23.69c-.22,0-.39-.39-.39-.87s.17-.87.39-.87.39.39.39.87S48.49,34.29,48.27,34.29ZM54,21.92a3.29,3.29,0,0,1,2.82.38c.26.35.11,1.51-.64,1.25-.21-.08-.26-1.05-1.66-1-.79,0-1.71.73-1.83.67C52.39,23,52.26,22.42,54,21.92Zm-3.15,43c-.08,1.74-1.51,5.16-1.83,4.71a1.94,1.94,0,0,0-2.62-1c-.34.15-1,.39-1,0s-.46-1-.13-1.38S48,66,49.17,63.46c.31-.66,1.92-6.65,2.09-6.14S50.93,63.33,50.87,64.9ZM50,46.58c-2,1.5-3.46,5.45-3.78,6S43.81,56.86,43.87,56c0-.39-.52-6.07-.72-6.79-.07-.27-.17-1.07-.27-2l9.28-2.63C51.08,45.49,50.37,46.31,50,46.58Zm4.14-3.39c-3.06.86-9.38,2.7-11.35,3.29-.14-1.33-.26-2.7-.3-3l12.09-1.18A1.85,1.85,0,0,1,54.15,43.19ZM55.68,36c-.7.43-.91-.41-2-1.83-.87-1.14-2.79-2.53-.26-2.71,1.05-.07-.52-4.87-.17-4.79s1,4.62,4,7.23C57.64,34.3,56.37,35.6,55.68,36ZM68.61,46.93c.21-.07,3.45,2.22,3,3.18-.2.5-2-1.44-2.09-1.57S67.57,47.28,68.61,46.93Zm-1.61,2a.9.9,0,0,1,.87-.83c.44,0,1.37,3.09.85,3.11C67.19,51.21,67,49.45,67,48.89Zm-.3,1.83c.17-.09,1,1,1.17,1.13a.88.88,0,0,0,.83.22,1.07,1.07,0,0,0,.41-.44s1.72,1.24,1.86,1.83a3,3,0,0,1-2.14,3.71c-.43.06-.78-1.53-1-2.14s-1.14-2.92-1.27-3.14S66.52,50.8,66.7,50.72Zm-.39,1.91a33.82,33.82,0,0,1,1.52,4.06c0,.14.11.31.19.52a8.66,8.66,0,0,1-1.71-.5v-.33C66.26,55.47,66,52.72,66.31,52.63Zm5.88,14.73a3.45,3.45,0,0,1-1,2.22c-1.31,1.4-3.33.45-3.75.09-1-.83-1.17-2.92-1.26-4-.06-.75.14-6.41.18-8.57.33.08,1.54.37,1.85.42C69.28,60.21,72.34,66.32,72.19,67.36Z"/>
                              </svg>                              
                              <div class="text-2xl text-center title text-green-100 tracking-wider italic">L'équipe</div>
                              <div class="description text-center my-5 h">L'effectif se compose aujourd'hui de cinq personnes, soit <span class="font-bold">deux équipes de deux grimpeurs</span> et <span class="font-bold">un gérant</span> ! Comme tout élagueur en action doit pouvoir être secouru très rapidement ( Syndrome du harnais <a class="text-orange-100" target="_blank" href="https://www.dailymotion.com/video/xanl1e">voir ici</a>), <span class="font-bold">il ne doit jamais travailler seul</span>.  C’est pourquoi il n’y a que des grimpeurs au sein de l’entreprise.</div>
                              <div class="img relative"><img :src="require('@/assets/images/equipe/equipe_1.jpg')" alt="photo equipe Bourbon elagage" title="Photo de l'équipe de Bourbon Elagage"></div>
                           </div>
                        </div>
                     </div>
                     <!-- ! BLOC 1 -->

                     <!--  BLOC 2 -->
                     <div class="p-2 flex w-full lg:w-1/3 h-full">
                        <div class="flex items-center w-full px-2 w-full  ">
                           <div class="w-full flex flex-col items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon-2">
                                 <path class="cls-1" d="M38.36,36.65s-10.22-16-23.53-15C8,36.2,23.12,46.23,23.12,46.23l16.27,3.18Z"/>
                                 <path class="cls-2" d="M28.82,26.48l-2.21,8.11-11.46-13-.32,0-.08.17,6.14,6.94-7.81,0v.42l8.18,0L31.49,40.74l-13.71.47.34.41,13.73-.47,7.27,8.21.27,0,0-.41L26.94,35l2.24-8.21Z"/>
                                 <path class="cls-3" d="M35.52,45.26s-14.68-5.93-22,1.82c5.62,21,32.69,15.31,32.69,15.31Z"/>
                                 <path class="cls-4" d="M13.56,47.08c0,.08,0,.16.07.24L34.07,53.8l-9.7,6.49.44.21L34.58,54l8,2.53L42.22,56,26.67,51l-4.12-7.86-.45,0,4,7.64L13.72,46.91l-.16.17Z"/>
                                 <path class="cls-3" d="M47.62,84A65.15,65.15,0,0,1,29.49,81.7c-4.94-1.51-7.66-3.55-7.66-5.75s2.72-4.25,7.66-5.75a64.78,64.78,0,0,1,18.13-2.29A64.73,64.73,0,0,1,65.75,70.2c4.94,1.5,7.67,3.55,7.67,5.75s-2.73,4.24-7.67,5.75A65.1,65.1,0,0,1,47.62,84Zm0-15.54a64.4,64.4,0,0,0-18,2.26C25,72.12,22.36,74,22.36,76s2.66,3.83,7.29,5.24a64.4,64.4,0,0,0,18,2.26,64.35,64.35,0,0,0,18-2.26c4.64-1.41,7.29-3.32,7.29-5.24s-2.65-3.83-7.29-5.24A64.35,64.35,0,0,0,47.62,68.45Z"/>
                                 <path class="cls-3" d="M47.62,80.6C40.41,80.6,33,78.86,33,76s7.45-4.65,14.66-4.65S62.29,73,62.29,76,54.83,80.6,47.62,80.6Zm0-8.77C39.17,71.83,33.49,74,33.49,76s5.68,4.11,14.13,4.11S61.75,77.94,61.75,76,56.07,71.83,47.62,71.83Z"/>
                                 <path class="cls-5" d="M66.63,31.77c0,10.81-19,46-19,46s-19-35.16-19-46,8.51-19.57,19-19.57S66.63,21,66.63,31.77Z"/>
                                 <circle class="cls-6" cx="47.62" cy="30.9" r="7.21"/>
                                 <path class="cls-2" d="M47.62,38.19a7.3,7.3,0,1,1,7.3-7.29A7.3,7.3,0,0,1,47.62,38.19Zm0-14.41a7.12,7.12,0,1,0,7.12,7.12A7.13,7.13,0,0,0,47.62,23.78Z"/>
                              </svg>                              
                              <div class="text-2xl text-center title text-green-100 tracking-wider italic">Le siège social</div>
                              <div class="description text-center my-5">Notre atelier est situé dans la zone artisanale <a href="https://goo.gl/maps/7umgERgYxMFzZVzX6" _target="blank" class="font-bold">Vue Belle à la Saline Les Hauts</a>. Nous y sommes depuis son ouverture en 2007. Nous y entreposons le matériel, effectuons les réparations, l’entretiens de nos machines et la préparation de nos chantiers. C’est aussi notre siège social.</div>
                              <div class="img relative"><img :src="require('@/assets/images/equipe/equipe_2.jpg')" alt="photo siege social" title="Siége siocial de Bourbon Elagage"></div>
                           </div>
                        </div>
                     </div>
                     <!-- ! BLOC 2 -->

                     <!-- BLOC 3 -->
                     <div class="p-2 flex w-full lg:w-1/3 h-full">
                        <div class="flex items-center w-full px-2 w-full  ">
                           <div class="w-full flex flex-col items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon-3">
                                 <path class="cls-1" d="M32.32,49.73s-11.5-18-26.46-16.86c-7.64,16.36,9.31,27.64,9.31,27.64l18.31,3.58Z"/>
                                 <path class="cls-2" d="M21.59,38.3,19.1,47.42,6.21,32.85l-.35,0-.09.19,6.9,7.81-8.78,0a2.09,2.09,0,0,1,0,.25v.22l9.2,0,11.51,13-15.43.53.38.46L25,54.8,33.17,64l.31.06,0-.46-14-15.79L22,38.61Z"/>
                                 <path class="cls-3" d="M29.12,59.43s-16.5-6.67-24.69,2c6.32,23.59,36.76,17.21,36.76,17.21Z"/>
                                 <path class="cls-4" d="M4.43,61.47c0,.09.05.18.07.27l23,7.29-10.91,7.3.5.23,11-7.35,9,2.85-.39-.62L19.17,65.9l-4.64-8.84-.5,0,4.51,8.59L4.61,61.28l-.18.19Z"/>
                                 <path class="cls-3" d="M65.44,29.77s6.43-17,20.25-18.19C93.77,24,81.27,35.14,81.27,35.14l-14.49,5Z"/>
                                 <path class="cls-2" d="M73.5,17.79l3.07,7.14L85.4,11.6l.29,0,.09.14-4.72,7.14,7.15-1,0,.2,0,.18-7.49,1-7.88,11.9L85.5,29.86l-.25.42L72.62,31.61,67,40.06l-.24.08,0-.38,9.57-14.44-3.11-7.23Z"/>
                                 <path class="cls-5" d="M69.79,35.85,58.33,41C62,43.09,65,46.66,65.11,51c0,.28,0,.56,0,.83a23.25,23.25,0,0,0,11.8-1.16C83,48.4,89,43.82,90.12,34.69,82.46,28.53,69.79,35.85,69.79,35.85Z"/>
                                 <path class="cls-2" d="M90.12,34.69h0L90,34.56,79.12,39.74l2.69-7.5-.42,0L78.62,40,64,46.66l.23.48,7.55-3.46,9.78,4.73.38-.25-9.71-4.69,17.87-8.55Z"/>
                                 <path class="cls-6" d="M15.27,12.47v5h7.31v6.9h-.23V74.91a7.2,7.2,0,0,0,7.19,7.19h0l38.81,0V24A11.57,11.57,0,0,0,56.78,12.47Z"/>
                                 <path class="cls-5" d="M10.29,22.09V17.46a5.26,5.26,0,0,1,5.24-5.24,7.19,7.19,0,0,1,7.2,7.13v2.74Z"/>
                                 <rect class="cls-3" x="34.38" y="25.34" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="29.51" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="34.2" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="38.37" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="42.18" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="46.35" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="51.04" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="34.38" y="55.21" width="24.83" height="1.04"/>
                                 <rect class="cls-3" x="49.17" y="62.37" width="10.05" height="1.04"/>
                                 <path class="cls-5" d="M70.2,82.14H31.64s7.79-1.6,5.2-11.21H77.89S80.48,82.14,70.2,82.14Z"/>
                              </svg>                             
                              <div class="text-2xl text-center title text-green-100 tracking-wider italic">L'historique</div>
                              <div class="description text-center my-5"><span class="font-bold">A votre service depuis 1994</span>, sous le statut d'artisan, Bourbon Elagage est l'<span class="font-bold">entreprise spécialisée la plus ancienne</span> de l’île de La Réunion.  En 2006, elle devient la SARL Bourbon Élagage Océan Indien (BEOI). En 2016, lors de son dernier changement de statut en SASU, retour à son nom originel : <span class="font-bold">Bourbon Élagage</span>.</div>
                              <div class="img  relative"><img :src="require('@/assets/images/equipe/equipe_3.jpg')" alt="historique BBE" title="Photo historique de BBE"></div>
                           </div>
                        </div>
                     </div>
                     <!-- ! BLOC 3 -->
                    
               </div>
              </div>
          </section>
</template>

<script>
export default {
   name: "section3",
   props: {section: Object},
   data() {
      return {
        
      }
   },
   components: {
      
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

.bg-image{
   background-size: cover;
}



.customContainer {
    width: 100%;
  }

@media screen and (min-width: 1024px) {
  .customContainer {
      max-width: 1024px;
  }
}

.icon-1{
   width: 80px;
   height: 100px;
   .cls-1{fill:#ed8724;}
}
.icon-2{
    width: 90px;
    height: 100px;
   .cls-1{fill:#ec954c;}.cls-2{fill:#fff;}.cls-3{fill:#ed8724;}.cls-4{fill:#f5f3f3;}.cls-5{fill:#ff9945;}.cls-6{fill:#e9c8aa;}
}
.icon-3{
    width: 92px;
    height: 100px;
   .cls-1{fill:#ec954c;}.cls-2{fill:#fff;}.cls-3{fill:#ed8724;}.cls-4{fill:#f5f3f3;}.cls-5{fill:#ff9945;}.cls-6{fill:#e9c8aa;}
}

.img {
   height: 220px;
   width: 100%;
   overflow: hidden;
   img{
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 100%;
      transform: translateX(-50%) translateY(-50%);
   }
}

.description {
   @media screen and (min-width: 1024px) {
      min-height: 220px;
   }
   @media screen and (min-width: 1280px) {
      min-height: 170px;
   }

   
}

</style>