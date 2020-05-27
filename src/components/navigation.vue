<template>
  <nav class="w-full fixed z-50" >
    <div class="hidden md:block w-full " style="background:rgba(255,255,255,.8)">
      <div class=" customContainer mx-auto py-6  flex  justify-center relative">
        <div class="absolute left-0 ">
          <a href="#accueil" class="absolute top-0 left-0 w-32 h-32 lg:w-48 lg:h-48 -mt-4 ml-1 px-4">
              <img src="@/assets/images/logo-fond-blanc.png" alt="Logo Bourbon Elagage" title="logo bourbon élagage blanc">
          </a>
            
        </div>
        <ul class="flex ">
          <li>
            <a href="#accueil"  class="link-nav  px-2 lg:px-5 uppercase  text-orange-100 italic"
              v-bind:class="{'is-active text-orange-300' : isActiveClass('accueil')}"
            >Accueil</a></li>
             <li><a href="#services" class="link-nav  px-2 lg:px-5 uppercase  text-orange-100 italic"
              v-bind:class="{'is-active text-orange-300' : isActiveClass('services')}"
            >Nos services</a></li>
             <li><a href="#entreprise" class="link-nav  px-2 lg:px-5 uppercase  text-orange-100  italic"
              v-bind:class="{'is-active text-orange-300' : isActiveClass('entreprise')}"
            >Notre entreprise</a></li>
            <li> <a href="#materiels" class="link-nav  px-2 lg:px-5 uppercase  text-orange-100 italic"
              v-bind:class="{'is-active text-orange-300' : isActiveClass('materiels')}"
            >Notre matériels</a></li>
            <li> <a href="#contact" class="link-nav  px-2 lg:px-5 uppercase  text-orange-100 italic"
              v-bind:class="{'is-active text-orange-300' : isActiveClass('contact')}"
            >Contact</a></li>
        </ul>
        <a href="tel:0692 67 76 85" class="absolute right-0 flex items-center -mt-1 mr-2">
              <div class="mr-2">
                 <svg class="fill-current text-orange-100  inline-block h-8 w-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
<path class="cls-1" d="M35.47,23.81h-.16a1,1,0,0,1-.79-1.1,7.34,7.34,0,0,0-.22-3.22,7.65,7.65,0,0,0-1.91-3.21,5.67,5.67,0,0,0-3.1-1.65,4.41,4.41,0,0,0-2,.12,1,1,0,1,1-.55-1.84,6.44,6.44,0,0,1,2.83-.18,7.66,7.66,0,0,1,4.16,2.19,9.49,9.49,0,0,1,2.39,4A9.16,9.16,0,0,1,36.41,23,1,1,0,0,1,35.47,23.81Z"/>
<path class="cls-1" d="M41.37,26.7a1,1,0,0,1-.29-.05,1,1,0,0,1-.62-1.21,13.29,13.29,0,0,0,0-8.34,13.88,13.88,0,0,0-3.12-5.27,12.37,12.37,0,0,0-5-3.24,10.89,10.89,0,0,0-6.75,0A1,1,0,1,1,25,6.78a12.75,12.75,0,0,1,7.94,0,14.39,14.39,0,0,1,5.82,3.73,16,16,0,0,1,3.56,6,15.29,15.29,0,0,1,0,9.53A1,1,0,0,1,41.37,26.7Z"/>
<path class="cls-1" d="M25.18,34c-2.5,0-5.49-1.72-7.74-4.65-3-3.93-3.56-8.57-1.29-10.78a1,1,0,0,1,1.36,0,1,1,0,0,1,0,1.35C16,21.44,16.62,25.14,19,28.19s5.74,4.65,7.57,3.56a1,1,0,1,1,1,1.65A4.5,4.5,0,0,1,25.18,34Z"/>
<path class="cls-1" d="M29.05,43.85c-4.11,0-10.24-4.33-15.66-11.4-6.66-8.7-9-17.45-5.51-20.36,2-1.64,2.28-1.79,2.69-1.83a1,1,0,0,1,1,.87,1,1,0,0,1-.67,1A23.18,23.18,0,0,0,9.1,13.57c-2.29,1.9-.5,9.46,5.82,17.72s13.19,12,15.58,10.23c1.35-1,1.78-1.35,1.9-1.47A1,1,0,0,1,34,41.1c-.15.26-.33.46-2.36,2A4.27,4.27,0,0,1,29.05,43.85Z"/>
<path class="cls-1" d="M34.64,40.81h-.26A2,2,0,0,1,33.07,40h0l-5.94-7.75a2,2,0,0,1,.37-2.77l2.69-2.06a2,2,0,0,1,2.77.36l5.94,7.75a2,2,0,0,1-.37,2.78l-2.69,2.06A2,2,0,0,1,34.64,40.81Zm0-1.94s0,0,0,0l2.73-2.08L31.44,29,28.66,31Z"/>
<path class="cls-1" d="M18.68,20l-.26,0a2,2,0,0,1-1.31-.76l-5.94-7.74a2,2,0,0,1,.37-2.78l2.69-2.06A2,2,0,0,1,17,7l5.94,7.75a2,2,0,0,1-.37,2.77l-2.69,2.06A1.94,1.94,0,0,1,18.68,20ZM15.48,8.17l-2.77,2.05,5.92,7.83h0l0,0L21.4,16Z"/>
                     </svg>  </div> 
              <div class="text-orange-100 font-bold hidden lg:block">0692 67 76 85</div> 
        </a>
            
        </div> 
    </div>

    <div class="nav-close md:hidden fixed relative">
         <a href="#accueil" class="logo-mobile absolute w-full mt-3"  v-bind:class="{'z-50' : !navOpen }">
            <img :src="require('@/assets/images/logo-mobile.svg')" alt="Logo Bourbon Elagage"  title="logo bourbon élagage mobile">
        </a>
      <div class="nav-close relative">
        
          <div class="menu burger relative z-10 ml-2 pt-2 w-20" >
              <button @click.prevent="toggleNav()"  class="nav-close hamburger hamburger--elastic focus:outline-none " v-bind:class="{'is-active' : navOpen }" type="button">
                  <span class="nav-close hamburger-box">
                    <span class="nav-close hamburger-inner"></span>
                  </span>
              </button>
          </div>
          <div class="nav-close nav-mobile absolute top-0 w-full z-2 py-6 " v-bind:class="{'is-active' : navOpen }">
              <ul class="nav-close text-center">
                <li><a href="#accueil"  @click="toggleNav()" class="nav-close uppercase px-8 inline-block py-3 text-orange-100" v-bind:class="{'text-orange-300' : isActiveClass('acceuil')}">Accueil</a></li>
                <li><a href="#services"  @click="toggleNav()" class="nav-close uppercase px-8 inline-block py-3 text-orange-100" v-bind:class="{'text-orange-300' : isActiveClass('services')}">Nos services</a></li>
                <li><a href="#entreprise"  @click="toggleNav()" class="nav-close uppercase px-8 inline-block py-3 text-orange-100" v-bind:class="{'text-orange-300' : isActiveClass('entreprise')}">Notre entreprise</a></li>
                <li><a href="#materiels"  @click="toggleNav()" class="nav-close uppercase px-8 inline-block py-3 text-orange-100" v-bind:class="{'text-orange-300' : isActiveClass('materiels')}">Notre materiel</a></li>
                <li><a href="#contact"  @click="toggleNav()" class="nav-close uppercase px-8 inline-block py-3 text-orange-100" v-bind:class="{'text-orange-300' : isActiveClass('contact')}">Contact</a></li>
              </ul>
          </div>
      </div>
        
    </div>
   
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    activeClass: String,
  
  },
  data() {
    return {
        navOpen: false
    }
  },
  methods: {
    isActiveClass(section){
        if(this.activeClass == section){
          return true
        }
        return false
    },
    toggleNav(){
      this.navOpen = !this.navOpen
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.customContainer{
  width: 100%;
  max-width: 1280px;
}
.link-nav{
  position: relative;
  z-index: 10;
  
}
.link-nav::before{
  content:"";
  display: block;
  position: absolute;
  height: 1px; width: 100%;
  top:-30px;
  z-index: -1;
  -ms-transform: skewX(-15deg); /* IE 9 */
  -webkit-transform: skewX(-15deg); /* Safari */
  transform: skewX(-15deg);
  transition: height .4s ease;
  @apply bg-orange-100;

}
.link-nav.is-active::before{
    height:60px;
}


.nav-mobile{
  background: rgba(255,255,255,.9);
  transform: translateY(-100%);
  opacity: 0;
  transition: transform .4s ease, opacity .2s ease;
}
.nav-mobile.is-active{
  transform: translateY(0%);
  opacity: 1;
}

.logo-mobile{
  max-width: 50%;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
}

.hamburger {
  padding:  12px 12px;
  display: inline-block;
  
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
 @apply bg-orange-100;
  border-radius: 50%;
  border: 0;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 1; }
  .hamburger.is-active:hover {
    opacity: 1; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: white; }

.hamburger-box {
  width: 30px;
  height: 21px;
  margin-top:4px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
   }
  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 30px;
    height: 2px;
    background-color: white;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }

/*
   * Elastic
   */
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic .hamburger-inner::before {
    top: 7px;
    transition: opacity 0.125s 0.275s ease; }
  .hamburger--elastic .hamburger-inner::after {
    top: 14px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 7px, 0) rotate(135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0; }
  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -14px, 0) rotate(-270deg);
    transition-delay: 0.075s; }

</style>
