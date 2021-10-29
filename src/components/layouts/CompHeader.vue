<template>
  <div class="comp-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">TodoApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!-- <item-header v-bind:headers="headers"></item-header> -->
          <li
            @click="handleTab(index)"
            class="nav-item"
            v-bind:class="{ active: activeTabHeader == index }"
            v-for="(item, index) in headers"
            :key="index"
          >
            <router-link class="nav-link" :to="item.name">{{
              item.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import ItemHeader from "./ItemHeader.vue";
export default {
  name: "comp-header",
  components: {
    ItemHeader
  },
  data() {
    return {
      activeTabHeader: 0,
      headers: [
        {
          id: 1,
          name: "TodoApp",
          title: "Trang chủ"
        },
        {
          id: 1,
          name: "ListUser",
          title: "Người dùng"
        }
      ]
    };
  },
  methods: {
    handleTab(index) {
      this.activeTabHeader = index;
    }
  }
};
</script>

<style scoped></style>
