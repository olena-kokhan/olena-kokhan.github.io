<template>
  <Navigation />

  <div class="content-wrapper">
    <router-view></router-view>
  </div>

  <footer class="roboto-thin">
    <div class="copyright">&#169; Olena Kokhan</div>
    <img class="go-up" onclick="window.scrollTo({top: 0, behavior: 'smooth'});" src="@/assets/arrowup.svg"/>
  </footer>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};


</script>

<style>
*,
:after,
:before {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  margin: 0;
}

#app {
}

@font-face {
  font-family: "WorkSans Regular";
  src: url("./assets/fonts/WorkSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "YoungSerif Regular";
  src: url("./assets/fonts/YoungSerif-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "PlayfairDisplay Medium";
  src: url("./assets/fonts/PlayfairDisplay-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "PlayfairDisplay-SemiBold";
  src: url("./assets/fonts/PlayfairDisplay-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto Thin";
  src: url("./assets/fonts/Roboto-Thin.ttf") format("truetype");
}

.youngserif-regular {
  font-family: "YoungSerif Regular";
}

.worksans-regular {
  font-family: "WorkSans Regular";
}

.playfairdisplay-medium {
  font-family: "PlayFairDisplay Medium";
}

.playfairdisplay-semibold {
  font-family: "PlayFairDisplay SemiBold";
}

.roboto-thin {
  font-family: "Roboto Thin";
}
</style>

<style scoped>
footer {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
}

.go-up {
  width: 70px;
  height: 70px;
  padding: 20px;
  cursor: pointer;
}
</style>
