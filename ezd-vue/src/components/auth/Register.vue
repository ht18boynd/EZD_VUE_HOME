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

    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
          <FormKit
            type="form"
            @submit="login"
            style="
              background-image: url(&quot;assets/img/jinx.jpg&quot;);
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
            "
            @submit.prevent="registerUser"
          >
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
                style="color: #a8e0d8"
                v-model="userData.name"
                :classes="{
                  outer: 'mb-5',
                  label: 'block mb-1 font-bold text-sm',
                  input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                }"
              />
              <!-- Account Name -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                type="text"
                label="Account Name :"
                prefix-icon="caretRight"
                style="color: #a8e0d8"
                validation="required"
                v-model="userData.accountName"
                :classes="{
                  outer: 'mb-5',
                  label: 'block mb-1 font-bold text-sm',
                  input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
                }"
              />
              <!-- Email Address -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                type="email"
                label="Email address"
                validation="required|email"
                style="width: 650px; color: #a8e0d8"
                v-model="userData.email"
                prefix-icon="email"
              />
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                type="password"
                label="Password"
                validation="required"
                style="color: #a8e0d8"
                v-model="userData.password"
                prefix-icon="password"
              />

              <!-- Country -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                name="text"
                prefix-icon="cardano"

                label="Country :"
                validation="required"
                style="color: #a8e0d8"
                v-model="userData.country"
              />
              <!-- Password -->

              <!-- Address -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                type="text"
                prefix-icon="cardano"
                label="Address :"
                style="color: #a8e0d8"
                validation="required"
                v-model="userData.address"
              />
              <!-- Birthday -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                type="datetime-local"
                label="Birthday"
                prefix-icon="month"
                help="Enter your birth day"
                validation="required|date_before:2007-01-01"
                validation-visibility="live"
                v-model="userData.birthday"
              />

              <!-- Gender -->
              <div class="cs-height_20 cs-height_lg_20"></div>
              <FormKit
                v-model="userData.gender"
                type="radio"
                prefix-icon="snapchat"
                label="Giới Tính"
                :options="['Nam', 'Nữ']"
              
              />
              <!-- Phone Number -->
              <div class="cs-height_20 cs-height_lg_20"></div>
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
                v-model="userData.phonenumber"
              />
              <FormKit
                type="checkbox"
                label="Terms and Conditions"
                help="Do you agree to our terms of service?"
                name="terms"
                :value="true"
                validation="accepted"
                validation-visibility="dirty"
              />
              <div class="cs-height_10 cs-height_lg_10"></div>

              <div class="cs-height_20 cs-height_lg_20"></div>

              <div class="cs-height_30 cs-height_lg_30"></div>
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
        phonenumber: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await AuthService.register(this.userData);
        if (response.id) {
          this.$router.push("/login");
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
            text: "Register  Successfully",
          });
        }
      } catch {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Register error !",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
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