<template>
  <div class="wrapper">
      <div class="img"> image goes here </div>
      <div class="text"> 
            <h1 class="youngserif-regular">Hi, nice to meet you! </h1>
            <h2 class="youngserif-regular">My name is Olena and I am a Graphic Designer. </h2>
            <p class="worksans-regular" > I am passionate about editorial design, books and all types of printed matters. 
              In my work I like to experiment and to try find interesting solutions for the projects.
              Also, I am fond of mixing analog and digital tools to get the best out of both.</p>
            <p class="worksans-regular"> If you want to find out more about my experience, please check my CV here. 
                To get in touch with me, write me at olena.wrk@gmail.com</p>
      </div>

  </div>

</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.img {
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: red;
    width: 100px;
    height: 100px;
    border-radius: 999px;
}

.text {
    text-align: center;
}

h1 {
    color: #404040;
}

h2 {
    color: #383838;
    opacity: .64;
}

p {
    font-size: black;
}


</style>
