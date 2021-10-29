<template>
  <div>
    <h1>Filter</h1>
    <input type="text" v-model="name" />
    <p>{{ name | afterChange() }}</p>
    <p>{{ price | multiTwo | multiFive }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "nguyễn bá hùng",
      price: 1000
    };
  },
  filters: {
    afterChange: function(value) {
      return value.toUpperCase();
    },
    multiTwo: function(data) {
      return data * 2;
    },
    multiFive: function(data) {
      return data * 5;
    }
  }
};
</script>

<style scoped></style>
