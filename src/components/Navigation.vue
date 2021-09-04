<template>
  <div class="navigation playfairdisplay-medium">
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
    <div class="menu" v-if="menuVisible">
      <div class="menu-links">
        <router-link to="/">Work</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
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
    },
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
.navigation {
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 10px;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
}

.logo {
  width: 70px;
  height: 70px;
}

.hamburger,
.close {
  width: 40px;
  height: 40px;
}

.menu {
  height: calc(100vh - 110px);
  width: 100vw;
  position: fixed;
  z-index: 100;
  background: white;
  top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-55px);
}

a {
  display: block;
  margin: 0 10px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  color: black;
}

a:hover {
  border-bottom: 1px solid black;
}

a.router-link-active {
  border-bottom: 1px solid black;
  cursor: default;
}

@media (min-width: 500px) {
  .navigation {
    flex-direction: row;
  }

  img {
    width: 100px;
    height: 100px;
  }

  nav {
    flex: 1 0 auto;
    justify-content: flex-end;
  }

  a {
    margin: 0 20px;
  }
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
