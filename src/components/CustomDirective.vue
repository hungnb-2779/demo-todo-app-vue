<template>
  <div>
    <h1>Custome Directive</h1>
    <h1 style="color: red;">Hello World!</h1>
    <span v-once>This will never change: {{ name }}</span>

    <button @click="changeName">Change Name</button>
    <div v-text="name"></div>

    <!-- Example with inline expressions -->
    <div v-text="'hello ' + user.firstName + ' ' + user.lastName"></div>
    <div v-html="html"></div>
    <!-- Example with an argument -->
    <!-- <div v-on="click : clickHandler"></div> -->
    <div v-if="choose == 1">Hùng đẹp trai</div>
    <div v-else-if="choose == 0">Hùng siêu đẹp trai</div>

    <div v-show="choose == 1">Hùng đẹp trai</div>
    <div v-show="choose == 0">Hùng siêu đẹp trai</div>
    <!-- method handler -->
    <!-- <button v-on:click="doThis"></button>
    <button v-on:[event]="doThis"></button>
    <button v-on:click="doThat('hello', $event)"></button>
    <button @click="doThis"></button>
    <button @[event]="doThis"></button>
    <button @click.stop="doThis"></button>
    <button @click.prevent="doThis"></button>
    <form @submit.prevent></form>
    <button @click.stop.prevent="doThis"></button>
    <input @keyup.enter="onEnter" />
    <input @keyup.13="onEnter" />
    <button v-on:click.once="doThis"></button>
    <button v-on="{ mousedown: doThis, mouseup: doThat }"></button> -->
  </div>
</template>

<script>
export default {
  name: "CustomDirective",
  data() {
    return {
      choose: 0,
      name: "Nguyễn Bá Hùng",
      user: {
        firstName: "nguyễn ",
        lastName: "Hùng S"
      },
      html: "<ul><li>Hello word</li></ul>"
    };
  },
  methods: {
    changeName(){
      this.name = 'abc'
    }
    // clickHandler() {},
    // onEnter(){
    //   console.log(1);
    // }
  }
};
</script>

<style scoped></style>
