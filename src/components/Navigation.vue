<template>
  <div class="navigation playfairdisplay-medium">
    <img src="../assets/OK.svg" alt="Logo" />

    <nav>
       <router-link to="/">Work</router-link>
       <router-link to="/About">About</router-link>
       <router-link to="/Contact">Contact</router-link>

    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  padding-bottom: 10px;
}

img {
  width: 70px;
  height: 70px;
}

nav {
  display: flex;
  padding: 0;
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
</style>
