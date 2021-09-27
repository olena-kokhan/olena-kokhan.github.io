<template>
  <div class="tiles">
    <ProjectTile
      v-for="(tile, index) in mainPageContent"
      :key="index"
      :Title="tile.projectTitle"
      :SubText="tile.subText"
      :ImgName="tile.fileName"
    />
  </div>
</template>

<script>
import ProjectTile from "./ProjectTile.vue";

var mainPageContent = [
  {
    fileName: "IntergenerationalSelf.jpg",
    projectTitle: "Intergenerational Self",
    subText: "Thesis project / Book / Collage",
  },
  {
    fileName: "OhArt.jpg",
    projectTitle: "Oh Art",
    subText: "Book project / Letterpress",
  },
  {
    fileName: "NUGMagazine.jpg",
    projectTitle: "Natural Medicine Magazine",
    subText: "Editorial Design / Magazine",
  },
  {
    fileName: "Decision=Limits.jpg",
    projectTitle: "Decision=Limits",
    subText: "Experimental poster workshop / Silkscreen printing",
  },
  {
    fileName: "Symbols.jpg",
    projectTitle: "Symbols & Signs",
    subText: "Book project / Letterpress",
  },
  {
    fileName: "NUGNewSeries.jpg",
    projectTitle: "Special Series of Articles",
    subText: "Editorial Design / Magazine",
  },
  {
    fileName: "SUDWebsite.jpg",
    projectTitle: "Company Website",
    subText: "Web Design",
  },
  {
    fileName: "Terrain.jpg",
    projectTitle: "Terrain",
    subText: "Experimental project / Tessellation",
  },
  {
    fileName: "SHTD.jpg",
    projectTitle: "Say Hi To Design",
    subText: "Casual Design Exhibition",
  },
  {
    fileName: "Caslon.jpg",
    projectTitle: "Caslon",
    subText: "One font book / Typography",
  },
  {
    fileName: "SeeIt.jpg",
    projectTitle: "See It",
    subText: "Interactive Book / Soft - prototyping project",
  },
  {
    fileName: "Pressure.jpg",
    projectTitle: "Don’t pressure me",
    subText: "Experimental Poster - Printing Workshop",
  },
  {
    fileName: "SMPosters.jpg",
    projectTitle: "Social Media",
    subText: "Posters",
  },
  {
    fileName: "NUGWebsite.jpg",
    projectTitle: "Natural Medication Magazine Website",
    subText: "Web Design",
  },
];

export default {
  name: "Home",
  created() {},
  data: function () {
    return { mainPageContent: mainPageContent };
  },
  components: {
    ProjectTile,
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.tiles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

