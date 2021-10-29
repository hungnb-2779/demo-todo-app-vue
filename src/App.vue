<template>
  <div id="app">
    <!-- <CompHeader
      v-bind:title="title"
      v-on:changeTitleEvent="handleChangeTitle"
    ></CompHeader> -->
    <div class="container">
      <comp-header></comp-header>
      <router-view />
    </div>
  </div>
</template>

<script>
// import CompHeader from "./components/CompHeader.vue";
import CompHeader from "./components/layouts/CompHeader.vue";
export default {
  name: "App",
  components: {
    CompHeader
  },
  data() {
    return {
      title: "Tiêu đề trang web"
    };
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
    }
  },
  beforeCreate() {
    console.log("BeforeCreate title: " + this.title);
  },
  created() {
    console.log("created title: " + this.title);
  },
  beforeMount() {
    console.log(
      "beforeMount title: " + this.title,
      document.querySelector(".container")
    );
  },
  mounted() {
    console.log(
      "mounted title: " + this.title,
      document.querySelector(".container").classList
    );
  },
  beforeUpdate() {
    console.log("beforeUpdate title: " + this.title);
    // alert(this.title);
  },
  updated() {
    console.log("updated title: " + this.title);
    // alert(this.title);
  },
  beforeDestroy() {
    console.log("beforeDestroy title: " + this.title);
  },
  destroyed() {
    console.log("beforeDestroy title: " + this.title);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li.active {
  color: #fff;
  background: orange;
}
</style>
