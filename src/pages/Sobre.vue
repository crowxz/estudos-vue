<template>
  <main>
    <section class="container">
      <h1>Sobre</h1>
      <div class="about" v-html="about">
      </div>
          </section>
  </main>
</template>

<script>
import api from "@/services/api.js";
export default {
  name: "Sobre",
  data() {
    return {
      about: ' '
    };
  },
  mounted() {
    api.get("/about.json").then((response) => {
      this.about = response.data.about;
    });
  },
};
</script>
<style scoped>
main {
  align-items: center;
}

.videos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video {
  width: 80%;
  margin-bottom: 30px;
}

.video img {
  width: 100%;
}

.video a { color:var (--color-text-dark); 
font-weight: 600;
text-align: center

}

@media (min-width: 700px) {
  .videos {
 flex-direction: row;
 align-items: flex-start;
 flex-wrap: wrap;
}
}

.video {
  margin-right: 30px;
  width: 300px;

}

.about {
  margin-bottom: 40px;
  color: var(--color-text-dark)
}
</style>