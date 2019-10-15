<template>
  <div id="app" @click="clickBody">
      <navigation ref="navigation" :activeClass="activeClass"></navigation>
      <actions></actions>
      <component v-for="(section, index) in sections" :key="index" 
        v-bind:is="section.name"
        :section="section"
        v-on:set-active-class="setActiveClass" ></component>

        <transition name='modal'>
          <contactModal v-if="contactModalOpen"></contactModal>
        </transition>
        
  </div>
</template>

<script>
import navigation from "./components/navigation.vue"
import actions from "./components/actions.vue"
import contactModal from "./components/contactModal.vue"
import section1 from "./components/sections/section1.vue"
import section2 from "./components/sections/section2.vue"
import section3 from "./components/sections/section3.vue"
import section4 from "./components/sections/section4.vue"
import section5 from "./components/sections/section5.vue"
import data from './data.js'

export default {
  name: 'app',
  components: {
    navigation, actions, section1, section2, section3, section4, section5, contactModal
  },
  data(){
    return {
      activeClass: "",
      sections : data.sections, 
      spies : [],
      contactModalOpen: false
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
    }    
  }
}
</script>

<style lang="scss">
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


</style>
