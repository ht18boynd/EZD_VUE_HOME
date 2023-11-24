<template>
  <div>
    <header class="cs-site_header cs-style1 cs-sticky-header">
      <div class="cs-main_header">
        <div class="container-fluid">
          <div class="cs-main_header_in">
            <div class="cs-main_header_left">
              <div class="cs-nav_wrap">
                <div class="cs-nav_out">
                  <div class="cs-nav_in">
                    <div class="cs-nav">
                      <router-link to="/">
                        <img
                          :src="BASE_URL + 'assets/gif/ezRemove.gif'"
                          style="
                            width: 100px;
                            margin-right: 45px;
                            height: inherit;
                          "
                        />
                      </router-link>

                    
                      <ul
                        class="cs-nav_list"
                        style="font-weight: 800; font-size: large"
                      >
                      <li>
                        <router-link to="/" :key="$route.fullPath"
                          >Home</router-link
                        >
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

                        <li>
                          <router-link to="/faq">FAQ</router-link>
                        </li>
                        <li class="menu-item-has-children cs-mega-menu">
                          <router-link to="/" :key="$route.fullPath">All Service</router-link>
                          <ul class="cs-mega-wrapper">
                           
                            <li class="menu-item-has-children">                          
                              <div class="row scrollable-container">
                                <div
                                  class="col-xl-3 col-lg-2 col-sm-4"
                                  v-for="game in gamelist" :key="game.id" 
                                >
                                  <div class="cs-card cs-style4 cs-box_shadow cs-white_bg">                                
                                    <router-link  :to="'/product/skill/' + game.id">
                                      <img
                                      :src="game.imageName"
                                        alt="Image"
                                        class="cs-zoom_item"
                                      />
                                    </router-link>
                                    <div class="cs-card_info">
                                     
                                      <h3 class="cs-card_title">
                                        <a href="explore-details.html">{{
                                          game.nameGame
                                        }}</a>
                                      </h3>

                                   
                                     
                                    </div>
                                  </div>
                                  <div class="cs-height_30 cs-height_lg_30"></div>
                                </div>
                    
                                <!-- .col -->
                              </div>
                            </li>
                          </ul>
                          
                        </li>
                      </ul>
             
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cs-main_header_right">
              <div class="cs-nav_wrap">
                <div class="cs-nav_out">
                  <div class="cs-nav_in">
                    <div class="cs-nav">
                      <ul
                        class="cs-nav_list"
                        style="font-weight: 800; font-size: large ; margin-right : 50px "
                      >
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
                              <a href="#">
                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/diamond.png"
                                  alt="diamond"
                                />
                                {{
                                  user.balance.toLocaleString("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  })
                                }}
                              </a>
                            </li>
                            <li>
                              <router-link to="/person/lucky">
                                <img
                                  width="25"
                                  height="25"
                                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/roulette.png"
                                  alt="roulette"
                                />
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
                        <li>
                          <router-link to="/coin"
                            ><span>Buy Coin</span></router-link
                          >
                        </li>
                      </ul>
                    </div>
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
import { mapState } from "vuex";
import { userInfo } from "@/store";
import GameService from "@/service/GameService";

export default {
  name: "startHeader",

  data() {
    return {
      isProfileVisible: false,
      BASE_URL: process.env.BASE_URL,
      user: userInfo.value,
      gamelist: [],
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
      this.user = null;
      userInfo.value = null;
      // Điều hướng người dùng đến trang đăng nhập sau khi đăng xuất
      this.$router.push("/login");
      // Hiển thị thông báo đăng xuất thành công bằng SweetAlert2 hoặc bất kỳ cách nào bạn mong muốn
      Swal.fire("Log Out Success!", "Log Out Success!", "success");
    },

    async getAllGames() {
      try {
        const response = await GameService.getAllGames();
        this.gamelist = response.data.sort((a, b) => b.id - a.id);
        console.log(this.gamelist);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
  },

  async created() {
    this.getAllGames();
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style scoped>

  .scrollable-container {
    max-height: 600px; /* Set the desired max height */
    overflow-y: auto;  /* Add a vertical scrollbar when needed */
  }
</style>

