<template>
  <div class="item-header">
    <li class="nav-item active" v-for="(item,index) in headers" :key="index">
      <a class="nav-link" href="#">{{ item.title }} </a>
    </li>
  </div>
</template>

<script>
export default {
  name: "item-header",
  props: {
    headers: {
      type: Array,
      default: null
    }
  }
};
</script>

<style scoped></style>
