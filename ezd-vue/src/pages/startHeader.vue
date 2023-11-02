<template>
  <div>
    <header class="cs-site_header cs-style1 cs-sticky-header">
      <div class="cs-main_header">
        <div class="container-fluid">
          <div class="cs-main_header_in">
            <div class="cs-main_header_left">
              <router-link to="/" class="cs-site_branding"
                ><img src="assets/img/logo.svg" alt="Logo"
              /></router-link>
            </div>
            <div class="cs-main_header_right">
              <div class="cs-search_wrap">
                <form action="#" class="cs-search">
                  <input
                    type="text"
                    class="cs-search_input"
                    placeholder="Search"
                  />
                  <button class="cs-search_btn">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                        stroke="currentColor"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 18L13.875 14.375"
                        stroke="currentColor"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
              <div class="cs-nav_wrap">
                <div class="cs-nav_out">
                  <div class="cs-nav_in">
                    <div class="cs-nav">
                      <ul class="cs-nav_list">
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/become" :key="$route.fullPath"
                            >Become The Idols</router-link
                          >
                        </li>

                        <li><router-link to="/game">Mini Game</router-link></li>

                        <li><router-link to="/blog">Blog</router-link></li>
                        <li>
                          <router-link to="/contact">Contact</router-link>
                        </li>
                        <li v-if="user == null">
                          <router-link to="/login">Login</router-link>
                        </li>
                        <li v-if="user != null">
                          <a href="#">
                            <img
                              width="35"
                              height="35"
                              src="https://img.icons8.com/plasticine/100/brawl-stars.png"
                              alt="brawl-stars"
                          /></a>

                          <ul
                            style="
                              font-family: &quot;Gill Sans&quot;,
                                &quot;Gill Sans MT&quot;, Calibri,
                                &quot;Trebuchet MS&quot;, sans-serif;
                              font-weight: bold;
                            "
                          >
                            <li>
                              <a href="#">Name : {{ user.name }} </a>
                            </li>
                            <li>
                              <a href="#"
                                >Balance : {{ user.balance }}

                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/diamond.png"
                                  alt="diamond"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/settings--v1.png"
                                  alt="settings--v1"
                                />
                                Setting</a
                              >
                            </li>
                            <li>
                              <router-link to="/login" @click="Logout">
                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/dusk/64/open-pane.png"
                                  alt="open-pane"
                                />
                                Log Out
                              </router-link>
                            </li>
                          </ul>
                        </li>
                        <li><router-link to="/faq">FAQ</router-link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cs-header_btns_wrap">
                <div class="cs-header_btns">
                  <router-link to="/coin" class="cs-btn cs-style1"
                    ><span>Buy Coin</span></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "startHeader",
  data() {
    return {
      isProfileVisible: false,
      user:null,
    };
  },
  methods: {
    toggleProfile() {
      this.isProfileVisible = !this.isProfileVisible;
    },
    Logout() {
      // Thực hiện đăng xuất bằng cách đặt lại giá trị của authInfo thành null
      localStorage.removeItem("userLocal");

      // Điều hướng người dùng đến trang đăng nhập sau khi đăng xuất
      this.$router.push("/login");

      // Hiển thị thông báo đăng xuất thành công bằng SweetAlert2 hoặc bất kỳ cách nào bạn mong muốn
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged out successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  created() {
    // Lấy dữ liệu người dùng từ localStorage khi component được tạo ra
    let userJSON = localStorage.getItem("userLocal");
    this.user = JSON.parse(userJSON);
  },
};
</script>
