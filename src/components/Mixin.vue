<template>
  <div class="mixin">
    <h1>Mixin</h1>
    <ClickCounter></ClickCounter>
    <HoverCounter />
  </div>
</template>

<script>
import ClickCounter from "./ClickCounter.vue";
import HoverCounter from "./HoverCounter.vue";
export default {
  name: "mixin",
  components: {
    ClickCounter,
    HoverCounter
  },
  data() {
    return {
      title: "Tiêu đề trang web"
    };
  },

};
</script>

<style scoped></style>
