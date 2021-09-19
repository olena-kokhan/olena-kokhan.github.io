<template>
  <router-link
    :to="{ name: 'work', params: { id: Title } }"
    class="tile"
  >
    <img v-bind:src="'MainPage/' + ImgName" />
    <div class="titlebar">
      <h3 class="title youngserif-regular">{{ Title }}</h3>
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
  margin-bottom: 15px;
  max-width: 414px;
}

img {
  width: 100%;
  height: 100%;
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
  font-size: 18px;
}

.subtext {
  color: #ddd;
  font-size: 14px;
}

@media (min-width: 500px) and (hover: hover) {
  .tile {
    width: 49%;
    margin: 0.5%;
    max-width: 500px;
  }

  .titlebar {
    display: none;
  }

  .tile:hover .titlebar {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 70%);
  }
}
</style>
