<template>
  <div class="wrapper">
      <img class="img" src="/About/about.png"/>
      <div class="text"> 
            <h1 class="youngserif-regular">Hi, nice to meet you! </h1>
            <h2 class="youngserif-regular">My name is Olena and I am a Graphic Designer. </h2>
            <p class="worksans-light" > I am passionate about graphic design and enjoy working on different creative projects from editorial design, books, magazines,and any other printed materials to web design, presentations and social media content. In my work, I like to experiment and try to find interesting solutions for projects. Also, I am fond of mixing analog and digital tools to get the best out of both.</p>
            <p class="worksans-light"> I have 4+ years of work experience as a Graphic Designer and two degrees: Bachelor in Communication Design (Germany) and Master in Marketing (Ukraine). Now I am based in Manchester, England. If you want to find out more about my experience, please check my <a href="About/CV_Olena_Kokhan_2021.pdf">CV here</a>. To get in touch with me, please find contact details in my CV or through the contact page.</p>
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
