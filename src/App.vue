<template>
  <div id="app" @click="clickBody">
      <navigation ref="navigation" :activeClass="activeClass"></navigation>
      
      <actions></actions>
      <component v-for="(section, index) in sections" :key="index" 
        v-bind:is="section.name"
        :section="section"
        v-on:set-active-class="setActiveClass" ></component>

        <transition name='modal'>
          <contactModal ref="contactModal" v-if="contactModalOpen"></contactModal>
        </transition>
        <transition name='sharemodal'>
          <shareModal ref="shareModal" v-if="shareModalOpen"></shareModal>
        </transition>
        
  </div>
</template>

<script>
import navigation from "./components/navigation.vue"
import actions from "./components/actions.vue"

import contactModal from "./components/modals/contact.vue"
import shareModal from "./components/modals/share.vue"

import accueil from "./components/sections/accueil.vue"
import services from "./components/sections/services.vue"
import equipe from "./components/sections/equipe.vue"
import materiels from "./components/sections/materiels.vue"
import contact from "./components/sections/contact.vue"

import data from './data.js'

export default {
  name: 'app',
  components: {
    navigation, actions, accueil, services, equipe, materiels, contact, contactModal, shareModal
  },
  data(){
    return {
      activeClass: "",
      sections : data.sections, 
      spies : [],
      contactModalOpen: false,
      shareModalOpen: false
    }
  },
  mounted() {
    this.spies = document.querySelectorAll('[data-spy]')
    this.handleScroll()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    clickBody(event) {
        if(! event.target.classList.contains('nav-close') ){
            if(this.$refs.navigation.navOpen){
              this.$refs.navigation.navOpen = false
            }
        }
    },
    setActiveClass(sectionName) {
      this.activeClass = sectionName  
    },
    // eslint-disable-next-line
    handleScroll(event) {
      const vm = this
      const windowHeight = window.innerHeight * .15
      this.spies.forEach(function(spy) { 
          let pos = spy.getBoundingClientRect()
          if(pos.top < windowHeight){
              vm.setActiveClass(spy.id)
          }
      })
    },

    openContactModal() {
      this.contactModalOpen = true
    },
    openShareModal() {
      this.shareModalOpen = true
    }
  }
}
</script>

<style lang="scss">

html, body {
   scroll-behavior: smooth;
   font-family: "PT sans", 'sans-serif', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"';
}

.title{
   font-family: "Merriweather", 'Georgia','Cambria','"Times New Roman"','Times';
}

.button {
    -ms-transform: skewX(-15deg); /* IE 9 */
    -webkit-transform: skewX(-15deg); /* Safari */
    transform: skewX(-15deg);
}
.btn-text {
    -ms-transform: skewX(15deg); /* IE 9 */
    -webkit-transform: skewX(15deg); /* Safari */
    transform: skewX(15deg);
   
}

.modal-enter-active {
  transition: all .4s ease;
}
.modal-leave-active {
  transition: all .4s ease;
}
.modal-enter, .modal-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px) scale(.8);
  opacity: 0;
}

.sharemodal-enter-active {
  transition: all .4s ease;
}
.sharemodal-leave-active {
  transition: all .4s ease;
}
.sharemodal-enter, .sharemodal-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
