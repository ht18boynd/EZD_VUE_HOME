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
          <form
            class="cs-form_card cs-style1 cs-box_shadow cs-white_bg"
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
              <div class="cs-form_field_wrap">
                <input
                  type="text"
                  class="cs-form_field"
                  placeholder="Username"
                  v-model="userData.name"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="text"
                  class="cs-form_field"
                  placeholder="Account Name"
                  v-model="userData.accountName"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
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
                  placeholder="Set your password"
                  v-model="userData.password"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="Text"
                  class="cs-form_field"
                  placeholder="Set your Address"
                  v-model="userData.address"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="date"
                  class="cs-form_field"
                  placeholder="Set your Birthday"
                  v-model="userData.birthday"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="text"
                  class="cs-form_field"
                  placeholder="Set your Contry"
                  v-model="userData.country"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="text"
                  class="cs-form_field"
                  placeholder="Set your Gender"
                  v-model="userData.gender"
                />
              </div>
              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="cs-form_field_wrap">
                <input
                  type="phone"
                  class="cs-form_field"
                  placeholder="Set your Phone Number"
                  v-model="userData.phonenumber"
                />
              </div>

              <div class="cs-height_20 cs-height_lg_20"></div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="notify" />
                <label class="form-check-label" for="notify"
                  >I'm attracted in receiving marketing emails for updates on
                  upcoming promotions, events and new features</label
                >
              </div>
              <div class="cs-height_10 cs-height_lg_10"></div>

              <div class="cs-height_20 cs-height_lg_20"></div>
              <button class="cs-btn cs-style1 cs-btn_lg w-100" type="submit">
                <span>Register Now</span>
              </button>
              <div class="cs-height_30 cs-height_lg_30"></div>
              <div class="cs-form_footer text-center">
                Have an account? <router-link to="/login">Log In</router-link>
              </div>
            </div>
          </form>
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

export default {
  name: "RegisterPage",

  components: {
    startHeader,
    footerHome,
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
