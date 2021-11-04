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
            <tr v-for="(user, index) in userPublic" v-bind:key="index">
              <th scope="row">{{ ++index }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address }}</td>
              <td>
                <button @click="editUser(user.id)" class="btn btn-warning btn-sm">
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
import { v4 as uuidv4 } from "uuid";

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
          id:1,
          name: "User 1",
          email: "user2@gmail.com",
          phone: "0972218xxx",
          address: "210 quang trung hà đông hà nội",
          publish: 1
        },
        {
          id:2,
          name: "User 2",
          email: "user2@gmail.com",
          phone: "0972218xxx",
          address: "210 quang trung hà đông hà nội",
          publish: 1
        },
        {
          id:3,
          name: "User 3",
          email: "user3@gmail.com",
          phone: "0972218xxx",
          address: "210 quang trung hà đông hà nội",
          publish: 0
        }
      ]
    };
  },
  computed: {
    userPublic() {
      return this.users.filter(function(u) {
        return u.publish;
      });
    }
  },

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
    editUser(userId) {
      this.indexUser = userId
      this.action = "edit";
      this.users.filter((user) => {
        if (user.id === userId) {
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
      if ((this.action = "add")) {
        this.name = "";
        this.phone = "";
        this.email = "";
        this.address = "";
      }
      $("#exampleModal").modal("show");
    },
    saveUser() {
      console.log(this.action);
      if (this.action == "add") {
        if (this.name && this.phone && this.email && this.address) {
          console.log(1);
          let newUser = {
            id: uuidv4(),
            name: this.name,
            phone: this.phone,
            email: this.email,
            address: this.address,
            publish:true
          };
          console.log(newUser);
          this.users.unshift(newUser);
          $("#exampleModal").modal("hide");
        }
      } else {
        this.users.filter((user) => {
          if (this.indexUser === user.id) {
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
