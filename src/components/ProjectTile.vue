<template>
  <router-link
    :to="{ name: 'project', params: { id: Title } }"
    class="tile"
  >
    <img v-bind:src="'tiles/' + ImgName" />
    <div class="titlebar">
      <h3 class="title playfairdisplay-semibold">{{ Title }}</h3>
      <h4 class="subtext roboto-thin">{{ SubText }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProjectTile",
  props: {
    Title: String,
    SubText: String,
    ImgName: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  display: flex;
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: auto;
}

@media (min-width: 500px) {
  .tile {
    width: 49%;
    margin: 0.5%;
    max-width: 500px;
  }
}

.title,
.subtext {
  padding: 0 20px;
  margin: 0;
}

.titlebar {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-start;
  bottom:0; 
  min-height: 60px;
  justify-content: center;
  width: 100%;
  background-color: rgba(56, 56, 56, 70%);
  padding: 10px 0;
}


.title {
  color: #fcfcfc;
}

.subtext {
  color: #858585;
}
</style>
