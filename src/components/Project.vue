<template>
  <div class="project roboto-thin">
    <div class="main">
      <div class="text-wrapper">
        <div class="project-title playfairdisplay-semibold">
          {{ project.projectTitle }}
        </div>
        <div class="project-subtitle">{{ project.subtext }}</div>
        <ul>
          <li v-for="technique of project.techniques" :key="technique">
            {{ technique }}
          </li>
        </ul>
        <div class="project-text">{{ project.bodyText }}</div>
      </div>
      <div class="image-wrapper">
        <img
          class="main-image"
          v-for="bigImage of project.bigImages"
          :key="bigImage"
          :alt="bigImage"
          :src="bigImage"
        />
      </div>
    </div>
    <div class="gallery">
      <img
        class="preview"
        v-for="smallImage of project.smallImages"
        :key="smallImage"
        :alt="smallImage"
        :src="smallImage"
      />
    </div>
  </div>
</template>

<script>
var projectDataMap = {
  "Oh Art": {
    projectTitle: "Oh Art",
    subtext: "Book project",
    techniques: [
      "Photography",
      "Digital printing",
      "Book Binding",
      "Letterpress",
      "Handmade glue binding",
    ],
    bodyText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    bigImages: [
      "main/OhArt1.jpg",
      "main/OhArt2.jpg",
      "main/OhArt3.jpg",
      "main/OhArt4.jpg",
    ],
    smallImages: [
      "preview/OhArtSmallPreview1.jpg",
      "preview/OhArtSmallPreview2.jpg",
      "preview/OhArtSmallPreview3.jpg",
      "preview/OhArtSmallPreview4.jpg",
      "preview/OhArtSmallPreview5.jpg",
      "preview/OhArtSmallPreview6.jpg",
      "preview/OhArtSmallPreview7.jpg",
      "preview/OhArtSmallPreview8.jpg",
      "preview/OhArtSmallPreview9.jpg",
    ],
  },
  "Decision=Limits": {
    projectTitle: "Decision=Limits",
    subtext: "Experimental Poster- Printing Workshop",
    techniques: [
      "Silkscreen printing",
      "Poster Design",
      "Analogue Design",
      "Handmade production",
    ],
    bodyText: "……",
    bigImages: [
      "main/Decision1.jpg",
      "main/Decision2.jpg",
      "main/Decision3.jpg",
    ],
    smallImages: [
      "preview/DecisionSmallPreview_1.jpg",
      "preview/DecisionSmallPreview_2.jpg",
      "preview/DecisionSmallPreview_3.jpg",
      "preview/DecisionSmallPreview_4.jpg",
      "preview/DecisionSmallPreview_5.jpg",
      "preview/DecisionSmallPreview_6.jpg",
      "preview/DecisionSmallPreview_7.jpg",
      "preview/DecisionSmallPreview_8.jpg",
      "preview/DecisionSmallPreview_9.jpg",
    ],
  },
  "Intergenerational Self": {
    projectTitle: "Intergenerational Self",
    subtext: "Thesis project",
    techniques: [
      "Book Design",
      "Experimental Design",
      "Editorial Design",
      "Mixed Media",
      "Collage",
      "Scanning",
    ],
    bodyText: "……",
    bigImages: ["IntergenerationalSelf1.png", "OhArt2.png"],
    smallImages: [
      "IntergenerationalSelfSmall1.png",
      "IntergenerationalSelfSmall2.png",
    ],
  },
  "Symbols & Signs": {
    projectTitle: "Symbols & Signs",
    subtext: "Book Project",
    techniques: [
      "Book Binding",
      "Letterpress",
      "Editorial Design",
      "Experimental Design",
      "Typography",
    ],
    bodyText: "……",
    bigImages: ["SS1.png", "SS2.png"],
    smallImages: ["SSSmall1.png", "SSSmall2.png"],
  },
  Terrain: {
    projectTitle: "Terrain",
    subtext: "Forms follow Experiment Project",
    techniques: ["Experimental Design", "Poster Design", "Tessellation"],
    bodyText: "……",
    bigImages: ["Terrain1.png", "Terrain2.png"],
    smallImages: ["TerrainSmall1.png", "TerrainSmall2.png"],
  },
  "Say Hi To Design": {
    projectTitle: "Say Hi To Design",
    subtext: "Design Exhibition Organisation",
    techniques: [
      "Exhibition Design & Organisation",
      "Visual Identity Design",
      "Silkscreen printing",
      "Logo Design",
    ],
    bodyText: "……",
    bigImages: ["SHTD1.png", "SHTD2.png"],
    smallImages: ["SHTDSmall1.png", "SHTDSmall2.png"],
  },
  "Don’t pressure me": {
    projectTitle: "Don’t pressure me",
    subtext: "Experimental Poster-Printing Workshop",
    techniques: [
      "Silkscreen printing",
      "Poster Design",
      "Analogue Design",
      "Handmade production",
    ],
    bodyText: "……",
    bigImages: ["main/Pressure1.jpg", "main/Pressure2.jpg"],
    smallImages: [
      "preview/PressureSmallPreview1.jpg",
      "preview/PressureSmallPreview2.jpg",
      "preview/PressureSmallPreview3.jpg",
      "preview/PressureSmallPreview4.jpg",
      "preview/PressureSmallPreview5.jpg",
      "preview/PressureSmallPreview6.jpg",
      "preview/PressureSmallPreview7.jpg",
      "preview/PressureSmallPreview8.jpg",
      "preview/PressureSmallPreview9.jpg",
    ],
  },
  "See It": {
    projectTitle: "See It",
    subtext: "Interactive Book",
    techniques: [
      "Soft-prototyping",
      "Electronics",
      "Laser Cutting",
      "Embroidery",
      "Printing",
      "Debossing",
      "Drilling",
    ],
    bodyText: "……",
    bigImages: ["SeeIt1.png", "SeeIt2.png"],
    smallImages: ["SeeItSmall1.png", "SeeItSmall2.png"],
  },

  Caslon: {
    projectTitle: "Caslon",
    subtext: "Typography Book",
    techniques: ["Typography", "Book Binding", "Laser Cutting"],
    bodyText: "……",
    bigImages: ["Caslon1.png", "Caslon2.png"],
    smallImages: ["CaslonSmall1.png", "CaslonSmall2.png"],
  },
  Type: {
    projectTitle: "Type",
    subtext: "Magazine cover project",
    techniques: ["Cover Design", "Experimental design"],
    bodyText: "……",
    bigImages: ["Type1.png", "Type2.png"],
    smallImages: ["TypeSmall1.png", "TypeSmall2.png"],
  },
  "Pharmacy Website": {
    projectTitle: "Pharmacy Website",
    subtext: "Website",
    techniques: ["Web Design", "UX & UI design"],
    bodyText: "……",
    bigImages: ["PharmacyWebsite1.png", "PharmacyWebsite2.png"],
    smallImages: ["PharmacyWebsiteSmall1.png", "PharmacyWebsiteSmall2.png"],
  },
  Solaris: {
    projectTitle: "Solaris",
    subtext: "Book Cover",
    techniques: ["Cover Design"],
    bodyText: "……",
    bigImages: ["Solaris1.png", "Solaris2.png"],
    smallImages: ["SolarisSmall1.png", "SolarisSmall2.png"],
  },
  "Duisburg Signal Tower": {
    projectTitle: "Duisburg Signal Tower",
    subtext: "Signage system",
    techniques: ["Wayfinding design", "Font Design", "3D", "Laser Cutting"],
    bodyText: "……",
    bigImages: ["SignalTower1.png", "SignalTower2.png"],
    smallImages: ["SignalTowerSmall1.png", "SignalTowerSmall2.png"],
  },
  Posters: {
    projectTitle: "Posters",
    subtext: "Selection of posters for different projects",
    techniques: ["Photography", "Illustration", "Typography"],
    bodyText: "……",
    bigImages: ["Posters1.png", "Posters2.png"],
    smallImages: ["PostersSmall1.png", "PostersSmall2.png"],
  },
  "Modular Scarf": {
    projectTitle: "Modular Scarf",
    subtext: "Soft Prototyping Project",
    techniques: ["Pattern making", "Laser Cutting", "Typography"],
    bodyText:
      "The idea for this scarf was inspired by personal experience. As a tall person, I have always experienced discomfort when wearing scarves, as they never cover the entire neck. That's why I wanted to create a scarf that can be adjusted in different dimensions (width, length) according to the individual parameters and desires of the person. To achieve this goal, I used a modular design creating a scarf of two shapes. It can be joined in a flexible pattern that can be changed to any width and length by exploring the interlocking patters. The shape of each unique module is an abstraction of figures of circles that emulates in the scarf a three-dimensional effect. Furthermore, its elements create a beautiful flower - shaped design.The pattern can also be configured in parts of diverse garments, e.g.sleeves.",
    bigImages: ["ModularScarf1.png", "Modular Scarf2.png"],
    smallImages: ["Modular ScarfSmall1.png", "Modular ScarfSmall2.png"],
  },
  "Natural Medication Magazine Website": {
    projectTitle: "Natural Medication Magazine Website",
    subtext: "Website",
    techniques: ["Web Design", "UX & UI design"],
    bodyText: "……",
    bigImages: ["NUGWebsite1.png", "NUGWebsite2.png"],
    smallImages: ["NUGWebsiteSmall1.png", "NUGWebsiteSmall2.png"],
  },
  "Two parallel lines": {
    projectTitle: "Two parallel lines",
    subtext: "Poster for 33. Plakatwettbewerb",
    techniques: ["Poster Design", "Typography"],
    bodyText: "……",
    bigImages: ["Lines1.png", "Lines2.png"],
    smallImages: ["LinesSmall1.png", "LinesSmall2.png"],
  },
  "Lelu books": {
    projectTitle: "Lelu books",
    subtext: "Handmade notebooks",
    techniques: ["Logo Design", "Digital printing", "Binding", "Laser Cutting"],
    bodyText: "……",
    bigImages: ["LeluBooks1.png", "LeluBooks2.png"],
    smallImages: ["LeluBooksSmall1.png", "LeluBooksSmall2.png"],
  },
};

import { useRoute } from "vue-router";

export default {
  name: "Project",
  setup() {
    const route = useRoute();

    const id = route.params.id;

    const project = projectDataMap[id];
    console.log(project);
    return {
      id,
      project,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  font-size: 18px;
}

.main {
  display: block;
}

.text-wrapper {
  color: #383838;
  margin: 10px;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 10px;
}

.project-title {
  font-size: 24px;
  color: black;
  font-weight: bold;
}

.project-text {
  padding-right: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.main-image {
  width: 100%;
  margin-bottom: 10px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.preview {
  width: 300px;
  height: 285px;
}

@media (min-width: 500px) {
  .preview {
    width: 400px;
    height: 380px;
  }

  .main {
    display: flex;
  }

  .text-wrapper {
    flex: 50%;
  }

  .image-wrapper {
    flex: 50%;
  }
}
</style>
