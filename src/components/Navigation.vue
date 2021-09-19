<template>
  <div class="navigation">
    <router-link class="link-logo" to="/">
      <img class="logo" src="../assets/OK.svg" alt="Logo" />
    </router-link>
    
    <div class="desktop-menu youngserif-regular " v-if="!isMobileWidth">
        <router-link to="/" @click="menuClicked">Work</router-link>
        <router-link to="/About" @click="menuClicked">About</router-link>
        <router-link to="/Contact" @click="menuClicked">Contact</router-link>
    </div>

  <div v-if="isMobileWidth">
    <img
      v-if="!menuVisible"
      class="hamburger"
      src="../assets/HamburgerMenu.svg"
      alt="Menu"
      @click="menuClicked"
    />
    <img
      v-if="menuVisible"
      class="close"
      src="../assets/close.svg"
      alt="Menu"
      @click="menuClicked"
    />
    </div>
  </div>

  <transition name="fade">
    <div class="mobile-menu youngserif-regular" v-if="menuVisible && isMobileWidth">
      <div class="mobile-menu-links">
        <router-link to="/" @click="menuClicked">Work</router-link>
        <router-link to="/About" @click="menuClicked">About</router-link>
        <router-link to="/Contact" @click="menuClicked">Contact</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue"

export default {
  name: "Navigation",
  setup() {
        const windowWidth = ref(window.innerWidth)

        const onWidthChange = () => windowWidth.value = window.innerWidth
        onMounted(() => window.addEventListener('resize', onWidthChange))
        onUnmounted(() => window.removeEventListener('resize', onWidthChange))

        const isMobileWidth = computed(() => {
          if (windowWidth.value < 500) return true
          else return false
        })

        return {
          isMobileWidth
        }

  },
  
  methods: {
    menuClicked() {
      this.menuVisible = !this.menuVisible;
      this.toggleScrollLock(this.menuVisible);
    },
    toggleScrollLock(enabled) {
      if (enabled) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
      } else {
        document.body.style.overflow = "";
        document.body.style.height = "";
      }
    }
  },
  data() {
    return {
      menuVisible: false,
    };
  },
  mounted() {
    watchEffect(() => {
      if(!this.isMobileWidth) {
        this.menuVisible = false;
        this.toggleScrollLock(this.menuVisible)
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
    --var-header-height: 70px;
}

.navigation {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 10px;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  height: var(--var-header-height)
}

.link-logo {
  text-decoration: none;
}

.logo {
  width: 50px;
  height: 50px;
}

.hamburger,
.close {
  width: 30px;
  height: 30px;
}

.mobile-menu {
  height: calc(100vh - var(--var-header-height));
  width: 100vw;
  position: fixed;
  z-index: 100;
  background: white;
  top: var(--var-header-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

.desktop-menu {
  display: flex;
}

.desktop-menu a {
  display: block;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #404040;
  font-size: 16px;
  padding: 5px;
  letter-spacing: 0.5px;
  padding: 0;
  border-bottom: 2px solid transparent;

}

.desktop-menu a:hover,
.desktop-menu a.router-link-active {
  border-bottom: 2px solid #404040;
  cursor: pointer;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY( calc(var(--var-header-height) * -1));
}

.mobile-menu-links a {
  display: block;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #404040;
  opacity: .57;
  font-size: 30px;
  padding: 5px;
}

.mobile-menu-links a:hover {
  opacity: 1;
}

.mobile-menu-links a.router-link-active {
  opacity:1;
  cursor: default;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
