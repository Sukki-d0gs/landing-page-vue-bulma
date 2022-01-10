<template>
  <div 
    class="body" 
    :class="{ 'blue' : this.$route.name === 'Tshirt', 'orange' : this.$route.name === 'Gloves'}"
  >
    <Navbar />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  .body {
    background: #a6a6a6;
  }

  .blue {
    background: #00A99F;
  }

  .orange {
    background: #FFAA7A;
  }
</style>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>