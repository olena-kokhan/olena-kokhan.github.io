<template>
  <div class="navigation">
    <img class="logo" src="../assets/OK.svg" alt="Logo" />
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

  <transition name="fade">
    <div class="menu youngserif-regular" v-if="menuVisible">
      <div class="menu-links">
        <router-link to="/" @click="menuClicked">Work</router-link>
        <router-link to="/About" @click="menuClicked">About</router-link>
        <router-link to="/Contact" @click="menuClicked">Contact</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    menuClicked() {
      this.menuVisible = !this.menuVisible;
      if (this.menuVisible) {
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

.logo {
  width: 50px;
  height: 50px;
}

.hamburger,
.close {
  width: 30px;
  height: 30px;
}

.menu {
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

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY( calc(var(--var-header-height) * -1));
}

a {
  display: block;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: #404040;
  opacity: .57;
  font-size: 30px;
  padding: 5px;
}

a:hover {
  opacity: 1;
}

a.router-link-active {
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
