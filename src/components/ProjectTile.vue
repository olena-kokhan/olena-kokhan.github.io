<template>
  <router-link
    :to="{ name: 'project', params: { id: Title } }"
    class="tile"
    v-bind:class="{ intersecting: isIntersecting }"
  >
    <img v-bind:src="'tiles/' + ImgName" />
    <div class="mask" @touchStart="onTouchStart">
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
    ImgName: String,
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: `${-window.innerHeight / 15}px 0px ${-window.innerHeight / 4}px 0px`,
      threshold: 1.0,
    };

    let toObserve = this.$el;
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isIntersecting = entry.isIntersecting;
      });
    }, options);

    observer.observe(toObserve);
  },
  data() {
    return {
      isIntersecting: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  position: relative;
  cursor: pointer;
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
  text-align: center;
  margin: 0;
}

.mask {
  display: none;
  top: 0;
}

.intersecting .mask {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 70%);
}

@media (hover: hover) {
  .tile:hover .mask {
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 70%);
  }
}

.title {
  color: #fcfcfc;
}

.subtext {
  color: #858585;
}
</style>
