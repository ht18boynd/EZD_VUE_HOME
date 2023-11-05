<template lang="">
  <div>
    <startHeader> </startHeader>
    <div class="cs-height_90 cs-height_lg_80"></div>
    <!-- Start Page Head -->
    <section class="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
      <div class="container">
        <div class="text-center">
          <h1 class="cs-page_title">Register</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>

            <li class="breadcrumb-item active">Register</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Head -->
    <div
      class="container"
      style="
        background-color: #93b8f5;
        background-image: url(&quot;assets/img/ji.png&quot;);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      "
    >
      <div class="row">
        <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
          <FormKit type="form" @submit="registerUser">
            <div class="cs-form_card_in">
              <h2 class="cs-form_title text-center">Create Account</h2>
              <div class="cs-form_btns">
                <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                  <span><i class="fab fa-google"></i>Google</span>
                </a>
                <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                  <span><i class="fab fa-facebook-f"></i>Facebook</span>
                </a>
                <a href="#" class="cs-btn cs-style2 cs-btn_lg">
                  <span><i class="fab fa-linkedin-in"></i>Linkedin</span>
                </a>
              </div>
              <div class="cs-height_30 cs-height_lg_30"></div>
              <FormKit
                type="text"
                label="Full Name :"
                prefix-icon="caretRight"
                validation="required"
                v-model="userData.name"
              />
              <!-- Email Address -->
              <FormKit
                type="email"
                label="Email address"
                validation="required|email"
                v-model="userData.email"
                prefix-icon="email"
              />

              <!--Password-->
              <FormKit
                type="password"
                label="Password"
                validation="required"
                v-model="userData.password"
                prefix-icon="password"
              />
              <!-- Country -->
              <FormKit
                name="text"
                prefix-icon="cardano"
                label="Country :"
                validation="required"
                v-model="userData.country"
              />
              <!-- Address-->
              <FormKit
                type="text"
                prefix-icon="cardano"
                label="Address :"
                validation="required"
                v-model="userData.address"
              />
              <!-- Birthday -->
              <FormKit
                type="datetime-local"
                label="Birthday"
                prefix-icon="month"
                validation="required|date_before:2007-01-01"
                validation-visibility="live"
                v-model="userData.birthDay"
              />
              <!-- Gender -->
              <FormKit
                v-model="userData.gender"
                type="radio"
                prefix-icon="snapchat"
                label="Giới Tính"
                :options="['Nam', 'Nữ']"
              />
              <!-- Phone Number -->
              <FormKit
                type="tel"
                label="Phone number"
                prefix-icon="telephone"
                placeholder="xxx-xxx-xxxx"
                validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{
                  matches: 'Phone number must be in the format xxx-xxx-xxxx',
                }"
                validation-visibility="dirty"
                v-model="userData.phoneNumber"
              />

              <div class="cs-height_20 cs-height_lg_20"></div>

              <div class="cs-form_footer text-center">
                Have an account? <router-link to="/login">Log In</router-link>
              </div>
            </div>
          </FormKit>
        </div>
      </div>
    </div>
    <div class="cs-height_100 cs-height_lg_70"></div>

    <footerHome></footerHome>
  </div>
</template>
<script>
import footerHome from "@/pages/footer.vue";
import startHeader from "@/pages/startHeader.vue";
import AuthService from "@/service/RegisterService";
// import { useRouter } from "vue-router"; // Sử dụng useRouter thay vì useRoute
import Swal from "sweetalert2";
import { FormKit } from "@formkit/vue";

import "@formkit/themes/genesis";
export default {
  name: "RegisterPage",

  components: {
    startHeader,
    footerHome,
    FormKit,
  },
  data() {
    return {
      userData: {
        name: "",
        accountName: "",
        email: "",
        password: "",
        avatar: null,
        address: "",
        country: "",
        birthday: "",
        gender: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await AuthService.register(this.userData);
        if (response.id) {
          this.$router.push("/login");
          Swal.fire("Sign Up Success!", "Sign Up Success!!", "success");

        }
      } catch (error) {
        if (
          error.response &&
          error.response.status === 400 &&
          error.response.data.message === "Email đã tồn tại"
        ) {
          // Xử lý trường hợp Email đã tồn tại
          Swal.fire("Sign Up Error!", "Email Đã Tồn Tại !", "error");
        } else {
          // Xử lý các lỗi khác
          Swal.fire("Sign Up Error!", "Sign Up Error !", "error");

        }
      }
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Agbalumo&family=Odibee+Sans&family=Playpen+Sans:wght@503&display=swap");
.formkit-inner {
  width: 100%;
  font-weight: 300;
  font-family: "Agbalumo";
}
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
}
</style>
