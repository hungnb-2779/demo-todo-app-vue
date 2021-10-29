<template>
  <div>
    <h1>Trang Chủ</h1>
    <div class="card">
      <div class="card-header text-right d-flex justify-content-between">

        <input type="text" class="w-50 form-control" v-model="title" placeholder="Nhập tên bài viết">
        <button @click="addPost" class="btn btn-success btn-sm">Thêm mới</button>
      </div>
      <div class="card-body">
        <div class="row">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="col-2 m-2 box-post p-2 border"
          >
            <div class="image">
              <img
                src="./../../assets/image-default.jpg"
                class="w-100"
                alt="image"
              />
            </div>
            <p v-text="post.title">
              <!-- {{ post.title }} -->
            </p>
            <button
              @click="deletePost(index)"
              class="btn btn-danger btn-sm delete"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoApp",
  data() {
    return {
      title:'',
      posts: [
        {
          title: "Bài viết số 1"
        },
        {
          title: "Bài viết số 2"
        }
      ]
    };
  },
  methods: {
    deletePost: function(idx) {
      var indexDelete = -1;
      console.log(idx);
      this.posts.forEach((post, index) => {
        if (index === idx) {
          indexDelete = index;
        }
      });
      if (indexDelete != -1) this.posts.splice(indexDelete, 1);
    },
    addPost(){
      var newPost={
        title:this.title
      };
      this.posts.push(newPost);
      this.title=null;
      console.log(newPost);
    }
  }
};
</script>

<style scoped>
.box-post {
  position: relative;
}
.delete {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
