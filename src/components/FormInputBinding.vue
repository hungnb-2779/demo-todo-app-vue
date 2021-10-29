<template>
  <div>
    <h1>Form Input Binding</h1>
    <div class="card">
      <div class="card-body">
        <p style="white-space: pre-line;">{{ message }}</p>
        <div class="form-group border p-2">
          <label for="">Input</label>
          <input v-model="message" class="form-control" placeholder="edit me" />
        </div>
        <div class="form-group border p-2">
          <span>Multiline message is:</span>
          <br />
          <textarea
            class="form-control"
            v-model="message"
            placeholder="add multiple lines"
          ></textarea>
        </div>
        <div class="form-group border p-2">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">{{ checked }}</label>
        </div>
        <div class="form-group border p-2">
          <span>Checked names: {{ checkedNames }}</span>

          <div id="v-model-multiple-checkboxes">
            <input
              type="checkbox"
              id="jack"
              value="Jack"
              v-model="checkedNames"
            />
            <label for="jack">Jack</label>
            <input
              type="checkbox"
              id="john"
              value="John"
              v-model="checkedNames"
            />
            <label for="john">John</label>
            <input
              type="checkbox"
              id="mike"
              value="Mike"
              v-model="checkedNames"
            />
            <label for="mike">Mike</label>
            <br />
          </div>
        </div>
        <div class="form-group border p-2">
          <span>Picked: {{ picked }}</span>

          <div id="v-model-radiobutton">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>
            <br />
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label>
            <br />
          </div>
        </div>
        <div class="form-control border p-2">
          <div id="v-model-select" class="demo ">
            <select v-model="selected" class="form-control">
              <option disabled value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
          </div>
        </div>
        <div class="form-group border p-2">
          <select v-model="selected"  class="form-control">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br />
          <span>Selected: {{ selected }}</span>
        </div>
        <div class="form-group border p-2">
          <div id="v-model-select-dynamic" class="demo">
            <select v-model="selected" class="form-control">
              <option
                v-for="(option, index) in options"
                :key="index"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
            <span>Selected: {{ selected }}</span>
          </div>
        </div>
        <div class="form-group border p-2">
          <!-- `picked` is a string "a" when checked -->
          <input type="radio" v-model="picked" value="" />

          <!-- `toggle` is either true or false -->
          <input type="checkbox" v-model="toggle" />

          <!-- `selected` is a string "abc" when the first option is selected -->
          <select v-model="selected" class="form-control">
            <option value="Jack">Jack</option>
          </select>
        </div>
        <div class="form-group">
          <!-- // when checked:
          vm.toggle === 'yes'
          // when unchecked:
          vm.toggle === 'no' -->
          <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
          />
          <!-- // when checked:
          vm.pick === vm.a -->
          <input type="radio" v-model="picked" v-bind:value="a" />

          <!-- // when selected:
          typeof vm.selected // => 'object'
          vm.selected.number // => 123 -->
          <select v-model="selected">
            <!-- inline object literal -->
            <option :value="{ number: 123 }">123</option>
          </select>
        </div>
        <!-- Modifiers -->
        <div class="form-group">
          <!-- synced after "change" instead of "input" -->
          <!-- <input v-model.lazy="msg" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-input-binding",
  data() {
    return {
      message: "",
      checked: true,
      checkedNames: [],
      picked: "",
      a:'a',
      toggle:'yes',
      selected: "",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  }
};
</script>

<style scoped></style>
