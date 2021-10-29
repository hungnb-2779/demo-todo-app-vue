<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <button v-on:click="changeTitleHeader">Thay đổi title từ header</button>
  </div>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    title: String,
  },
  data() {},
  methods:{
    changeTitleHeader(e){
      //không được phép thay đổi props từ componet cha phải kích hoạt sự kiện changeTitle trong component header
      // this.titlePage='Title page is changed.'
      var data = {
        title:'Tiêu đề bị thay đổi'
      }
      this.$emit('changeTitleEvent',data);
    }
  }
};
</script>

<style scoped>
.header{
  margin: 16px;
}</style>
