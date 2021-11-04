<template>
  <div class="header ">
    <div class="m-auto">
      <button @click="myMethod">Call method</button>
    </div>
  </div>
</template>
<script>
import eventBus from "./../assets/js/eventBus";
export default {
  name: "CompHeader",
  methods: {
    myMethod() {
      var data = {
        title:'push data event bus'
      }
      eventBus.$emit("my-event",data);
    }
  }
};
</script>

<style scoped>
.header ul {
  display: flex;
  list-style: none;
}
.header ul li {
  padding: 8px 16px;
}
</style>
