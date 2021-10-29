<template>
  <div>
    <h1>ListUser</h1>
    <div class="card">
      <div class="card-header text-right">
        <button type="button" class="btn btn-primary" @click="formUser">
          Thêm User
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Thông tin User
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group text-left">
                  <label for="">Tên</label>
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    v-model="name"
                    placeholder="Tên"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="">SDT</label>
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    v-model="phone"
                    placeholder="SDT"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="">Email</label>
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group text-left">
                  <label for="">Địa chỉ</label>
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    v-model="address"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button @click="saveUser" type="button" class="btn btn-primary">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">SĐT</th>
              <th scope="col">Email</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <th scope="row">1</th>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address }}</td>
              <td>
                <button @click="editUser(index)" class="btn btn-warning btn-sm">
                  Sửa
                </button>
                <button
                  @click="deleteUser(index)"
                  class="btn btn-danger btn-sm"
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listUser",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
      action: "add",
      indexUser: 0,
      user: {
        name: "",
        email: "",
        phone: "",
        address: ""
      },
      users: [
        {
          name: "Bá Hùng",
          email: "bahung2108@gmail.com",
          phone: "0972218408",
          address: "210 quang trung hà đông hà nội"
        },
        {
          name: "Nguyễn Bá Hùng",
          email: "nguyenbahung2108@gmail.com",
          phone: "0972218408",
          address: "210 quang trung hà đông hà nội"
        }
      ]
    };
  },
  computed: {},
  methods: {
    deleteUser: function(idx) {
      var indexDelete = -1;
      console.log(idx);
      this.users.forEach((user, index) => {
        if (index === idx) {
          indexDelete = index;
        }
      });
      if (indexDelete != -1) this.users.splice(indexDelete, 1);
    },
    editUser(index) {
      this.indexUser = index;
      this.action = "edit";
      this.users.forEach((user, idx) => {
        if (index === idx) {
          this.name = user.name;
          this.phone = user.phone;
          this.email = user.email;
          this.address = user.address;
        }
      });

      console.log(this.name);
      $("#exampleModal").modal("show");
    },
    formUser() {
      (this.action = "add"), (this.name = "");
      this.phone = "";
      this.email = "";
      this.address = "";
      $("#exampleModal").modal("show");
    },
    saveUser() {
      if (this.action == "add") {
        if (this.name && this.phone && this.email && this.address) {
          this.users.push({
            name: this.name,
            phone: this.phone,
            email: this.email,
            address: this.address
          });
          $("#exampleModal").modal("hide");
        }
      } else {
        this.users.forEach((user, idx) => {
          if (this.indexUser === idx) {
            user.name = this.name;
            user.phone = this.phone;
            user.email = this.email;
            user.address = this.address;
          }
        });
        $("#exampleModal").modal("hide");
      }
    }
  }
};
</script>

<style scoped></style>
