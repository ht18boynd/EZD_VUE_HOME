<template>
  <div>
    <startHeader></startHeader>
    <div class="cs-height_90 cs-height_lg_80"></div>
    <!-- Start Page Head -->
    <section class="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
      <div class="container">
        <div class="text-center">
          <h1 class="cs-page_title">Login</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item active">Login</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Page Head -->

    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
          <form
            @submit="login"
            class="cs-form_card cs-style1 cs-box_shadow cs-white_bg"
          >
            <div class="cs-form_card_in">
              <h2 class="cs-form_title text-center">Sign In</h2>
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
              <div class="cs-form_field_wrap">
                <input
                  type="email"
                  class="cs-form_field"
                  placeholder="Your Email"
                  v-model="userData.email"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="password"
                  class="cs-form_field"
                  placeholder="Your password"
                  v-model="userData.password"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <!-- <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="notify"
               
                />
                <label class="form-check-label" for="notify">Remember Me</label>
              </div> -->
              <div class="cs-height_15 cs-height_lg_15"></div>
              <button class="cs-btn cs-style1 cs-btn_lg w-100" type="submit">
                <span>Sign In</span>
              </button>
              <div class="cs-height_30 cs-height_lg_30"></div>
              <div class="cs-form_footer text-center">
                No Account?
                <router-link to="/register">Register Now</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footerHome></footerHome>
  </div>
</template>

<script>
import { user, authInfo } from "@/store";

import useValidate from '@vuelidate/core'
// import { required } from '@vuelidate/validators'


import { jwtDecode } from "jwt-decode";
import footerHome from "@/pages/footer.vue";
import startHeader from "@/pages/startHeader.vue";
import RegisterService from "@/service/RegisterService";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      v$: useValidate(),
    };
  },
  methods: {
    async login(event) {
      try {
        event.preventDefault();

        const response = await RegisterService.login(this.userData);
        const token = response.data.token;
        const decoded = jwtDecode(token);
        console.log(decoded);
        // Gán giá trị sub vào biến user
        user.value = decoded.sub;
        console.log("globle :" + user.value);
        // Fetch the complete Auth information
        const authInfoResponse = await RegisterService.findByEmail(user.value);
        authInfo.value = authInfoResponse;
        console.log(authInfoResponse);
        console.log("authen globle ID: " + authInfo.value.id);
        console.log("authen globle Name: " + authInfo.value.name);
        this.$router.push("/");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          text: "Login successfully",
        });
      } catch {
        console.log("Error");
      }
    },
  },
  components: {
    startHeader,
    footerHome,
  },
  validations() {
    return {}
  },
};
</script>
