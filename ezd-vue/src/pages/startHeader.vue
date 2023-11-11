<template>
  <div>
    <header class="cs-site_header cs-style1 cs-sticky-header">
      <div class="cs-main_header">
        <div class="container-fluid">
          <div class="cs-main_header_in">
            <div class="cs-main_header_left">
              <router-link to="/" class="cs-site_branding"
                ><img :src="BASE_URL + 'assets/img/logo.svg'" alt="Logo"
              /></router-link>
            </div>
            <div class="cs-main_header_right">
              
              <div class="cs-nav_wrap">
                <div class="cs-nav_out">
                  <div class="cs-nav_in">
                    <div class="cs-nav">
                      <ul class="cs-nav_list" style="font-weight:600;font-size:medium">
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
                          <router-link to="/person/profile">
                            <img
                              width="35"
                              height="35"
                              src="https://img.icons8.com/plasticine/100/brawl-stars.png"
                              alt="brawl-stars"
                          /></router-link>

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
                                >Balance : {{ user.balance.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }) }}

                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/diamond.png"
                                  alt="diamond"
                                />
                              </a>
                            </li>
                            <li>
                              <router-link to="/person/lucky" >
                                <img width="25" height="25" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/roulette.png" alt="roulette"/>
                                Lucky Spin
                              </router-link>
                            </li>
                            <li>
                              <router-link to="/person/setting">
                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/settings--v1.png"
                                  alt="settings--v1"
                                />
                                Setting</router-link
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
                  <div><router-link to="/faq">FAQ</router-link>
                </div>
              
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
import { userInfo  } from "@/store";


export default {
  name: "startHeader",
  data() {
    return {
      isProfileVisible: false,
      BASE_URL: process.env.BASE_URL,
      user:userInfo.value

    };
  },
 
  methods: {
    toggleProfile() {
      this.isProfileVisible = !this.isProfileVisible;
    },
    Logout() {
      // Thực hiện đăng xuất bằng cách đặt lại giá trị của authInfo thành null
      localStorage.removeItem("token");
      localStorage.removeItem("nextSpinTime");

     
      console.log("logout oke");
      this.user=null;  
      userInfo.value=null; 
      // Điều hướng người dùng đến trang đăng nhập sau khi đăng xuất
      this.$router.push("/login");
      // Hiển thị thông báo đăng xuất thành công bằng SweetAlert2 hoặc bất kỳ cách nào bạn mong muốn
      Swal.fire("Log Out Success!", "Log Out Success!", "success")
    },
  },
  
};
</script>
