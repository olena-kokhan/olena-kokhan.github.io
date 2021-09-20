<template>
  <div class="wrapper">
      <img class="img" src="/About/about.png"/>
      <div class="text"> 
            <h1 class="youngserif-regular">Hi, nice to meet you! </h1>
            <h2 class="youngserif-regular">My name is Olena and I am a Graphic Designer. </h2>
            <p class="worksans-light" > I am passionate about editorial design, books and all types of printed matters. 
              In my work I like to experiment and to try find interesting solutions for the projects.
              Also, I am fond of mixing analog and digital tools to get the best out of both.</p>
            <p class="worksans-light"> If you want to find out more about my experience, please check my CV here. 
                To get in touch with me, please find my contact detail on the CV or through the contact page.</p>
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
    padding: 10px 30px;
}

.img {
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 200px;
    border-radius: 999px;
}

.text {
    text-align: center;
}

h1 {
    color: #404040;
    margin-block-end: 0;
}

h2 {
    color: #383838;
    opacity: .64;
    margin-block-start: 0;
}

p {
    font-size: black;
}

@media (min-width: 700px) {
  .wrapper {
    flex-direction: row;
    height: 100%;
    margin-top: 30px;
  }

  h1,h2,p {
      text-align: left;
  }

  .img {
      flex: 0 0 auto;
      width: 300px;
      height: 300px;
  }

  .text {
      padding-left: 40px;
  }
}

@media (min-width: 1200px) {
  .wrapper {
    padding: 10px 0;
  }
}


@media (max-height: 500px) {
  .wrapper {
    margin-top: 0;
    padding-top: 0;
  }
}

</style>
