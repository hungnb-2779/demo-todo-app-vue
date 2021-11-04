<template>
  <div class="hello">
    <ComponentA />
    <ComponentA />
    <ComponentA />
    <hr />
    <Header />

    <button @click="countComputed++">
      Computed Count {{ countComputed }} times
    </button>
    <button @click="countMethod++">Method Count {{ countMethod }} times</button>
    <p>{{ computedFunc }}</p>
    <p>{{ methodFunc() }}</p>
  </div>
</template>

<script>
import Header from "./Header.vue";
import eventBus from "./../assets/js/eventBus";
var ComponentA = {
  /* ... */
  template: "<li>Đây là ComponentA</li>"
};
export default {
  name: "HelloWorld",
  components: {
    Header,
    ComponentA
  },
  data() {
    return {
      countComputed: 0,
      countMethod: 0
    };
  },
  computed: {
    computedFunc() {
      console.log("computed count: " + this.countComputed);
    }
  },
  created() {
    eventBus.$on("my-event", (data) => {
      console.log("my-event called on global event bus "+data.title);
    });
  },
  methods: {
    methodFunc() {
      console.log("method count: " + this.countMethod);
    }
  },
  watch: {
    countMethod: function(newValue, oldValue) {
      console.log("watch countMethod new value" + newValue);
      console.log("watch countMethod new value" + newValue);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
