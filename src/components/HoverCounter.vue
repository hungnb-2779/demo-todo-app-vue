<template>
  <div>
    <button @mouseover="incrementCount">Hover {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from "../mixins/counter";

export default {
  name: "HoverCounter",
  data() {
    return {
      count: 10
    };
  },
  mixins: [CounterMixin]
};
</script>

<style scoped></style>
