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
          <div class="cs-form_card_in">
            <h2 class="cs-form_title text-center">Sign In</h2>

            <FormKit
            type="form"
            @submit="login"
            style="
              background-image: url(&quot;assets/img/naruto.png&quot;);
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
            "
          >
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
                name="email"
                prefix-icon="email"
                label="Email address"
                validation="required|email"
                style="width: 650px; color: #a8e0d8"
                v-model="userData.email"
              />
              <div class="cs-height_20 cs-height_lg_20"></div>

              <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required"
                :validation-messages="{
                  length: 'Try to make your password longer!',
                }"
                class="cs-btn cs-style2 cs-btn_lg"
                v-model="userData.password"
              />
              <FormKit
                type="password"
                label="Confirm password"
                name="password_confirm"
                validation="required|confirm"
              />

              <div class="cs-height_20 cs-height_lg_20"></div>
             
            </FormKit>
          </div>

          <div class="cs-height_30 cs-height_lg_30"></div>
          <div class="cs-form_footer text-center">
            No Account?
            <router-link to="/register">Register Now</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="cs-height_100 cs-height_lg_70"></div>
    <footerHome></footerHome>
  </div>
</template>

<script>



import { jwtDecode } from "jwt-decode";
import footerHome from "@/pages/footer.vue";
import startHeader from "@/pages/startHeader.vue";
import RegisterService from "@/service/RegisterService";
import Swal from "sweetalert2";
import { FormKit } from "@formkit/vue";
import "@formkit/themes/genesis";

export default {
  name: "LoginPage",
  data() {
    return {
      userData: {
        email: null,
        password: "",
      },
    
    };
  },
  methods: {
    async login() {
      try {
        

        const response = await RegisterService.login(this.userData);
        const token = response.data.token;
        const decoded = jwtDecode(token);
        console.log(decoded);
        // Gán giá trị sub vào biến user
       
        const userGmail =decoded.sub;
        console.log("email :" + userGmail);
        // Fetch the complete Auth information
        const authInfoResponse = await RegisterService.findByEmail(userGmail);
        const authInfoResponseJson = JSON.stringify(authInfoResponse);
        localStorage.setItem("userLocal",authInfoResponseJson);

        console.log(authInfoResponse);
        console.log("authen globle ID: " + authInfoResponse.id);
        console.log("authInfoResponseJson"+authInfoResponseJson);
    
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
    FormKit,
  },
 
};
</script>
<style>
.formkit-inner {
  width: 100%;
  color: white;
}
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
}
</style>
