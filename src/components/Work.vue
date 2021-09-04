<template>
  <div class="tiles">
    <ProjectTile
      v-for="(tile, index) in panelData"
      :key="index"
      :Title="tile.projectTitle"
      :SubText="tile.subText"
      :ImgName="tile.fileName"
    />
  </div>
</template>

<script>
import ProjectTile from './ProjectTile.vue'

var panelData = [
  {
    fileName: "Intergenerational-Self.jpg",
    projectTitle: "Intergenerational Self",
    subText: "Thesis project / Book / Collage",
  },
  {
    fileName: "Oh-Art.png",
    projectTitle: "Oh Art",
    subText: "Book project / Letterpress",
  },
  {
    fileName: "Decision-Limits.png",
    projectTitle: "Decision=Limits",
    subText: "Experimental poster workshop / Silkscreen printing",
  },
  {
    fileName: "Symbols-Signes.png",
    projectTitle: "Symbols & Signs",
    subText: "Book project / Letterpress",
  },
  {
    fileName: "Terrain.png",
    projectTitle: "Terrain",
    subText: "Experimental project / Tessellation",
  },
  {
    fileName: "SHTD.png",
    projectTitle: "Say Hi To Design",
    subText: "Casual Design Exhibition",
  },
  {
    fileName: "Pressure.png",
    projectTitle: "Don’t pressure me",
    subText: "Experimental Poster - Printing Workshop",
  },
  {
    fileName: "SeeIt.png",
    projectTitle: "See It",
    subText: "Interactive Book / Soft - prototyping project",
  },
  {
    fileName: "Caslon.png",
    projectTitle: "Caslon",
    subText: "One font book / Typography",
  },
  {
    fileName: "Type.png",
    projectTitle: "Type",
    subText: "Magazine cover project",
  },
  {
    fileName: "PharmacyWebsite.png",
    projectTitle: "Pharmacy Website",
    subText: "Web Design",
  },
  {
    fileName: "Solaris.png",
    projectTitle: "Solaris",
    subText: "Book Cover",
  },
  {
    fileName: "Signal-Tower.png",
    projectTitle: "Duisburg Signal Tower",
    subText: "Signage System for Deutsche Bahn  Signal Tower",
  },
  {
    fileName: "Posters.png",
    projectTitle: "Posters",
    subText: "Selection of posters for different projects",
  },
  {
    fileName: "Modular-Scarf.png",
    projectTitle: "Modular Scarf",
    subText: "Soft Prototyping project",
  },
  {
    fileName: "NUG-Website.png",
    projectTitle: "Natural Medication Magazine Website",
    subText: "Web Design",
  },
  {
    fileName: "Posters.png",
    projectTitle: "Two parallel lines",
    subText: "Poster for 33. Plakatwettbewerb",
  },
  {
    fileName: "LeluBooks.png",
    projectTitle: "Lelu books",
    subText: "Handmade notebooks",
  },
];

export default {
  name: "Work",
  created() {},
  data: function () {
    return { panelData: panelData };
  },
  components: {
     ProjectTile
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.tiles {
  display: flex;
  flex-wrap: wrap;
}
</style>

