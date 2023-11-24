<template>
  <div>
    <start-header></start-header>
    <div class="cs-height_90 cs-height_lg_80"></div>
  <!-- Start Page Head -->
  <section class="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
    <div class="container">
      <div class="text-center">
        <h1 class="cs-page_title">{{nameGame}}</h1>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">{{nameGame}}</li>
        </ol>
      </div>
    </div>
  </section>

    <!-- End Page Head -->
    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
      <div class="cs-sidebar_frame cs-style1">
        <div class="cs-sidebar_frame_left">
          <div class="cs-filter_sidebar">
            <div class="cs-search_widget">
              <form action="#" class="cs-search">
                <input type="text" class="cs-search_input" placeholder="Search">
                <button class="cs-search_btn">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 18L13.875 14.375" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                </button>
              </form>
            </div>
            <div class="cs-filter_widget">
              <h2 class="cs-filter_toggle_btn">
                Gender
                <span class="cs-arrow_icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                </span>
              </h2>
              <div class="cs-filter_toggle_body">
                <ul>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Art" checked>
                      <label class="form-check-label" for="Art">All</label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Fashion">
                      <label class="form-check-label" for="Fashion">
                        Girl
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Music">
                      <label class="form-check-label" for="Music">
                 Boy
                      </label>
                    </div>
 </li>
                </ul>
              </div>
            </div> <!-- .cs-filter_widget -->
            <div class="cs-filter_widget">
              <h2 class="cs-filter_toggle_btn">
                Level
                <span class="cs-arrow_icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                </span>
              </h2>
              <div class="cs-filter_toggle_body">
                <ul>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Art" checked>
                      <label class="form-check-label" for="Art">Art</label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Fashion">
                      <label class="form-check-label" for="Fashion">
                        Fashion
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Music">
                      <label class="form-check-label" for="Music">
                        Music
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Video">
                      <label class="form-check-label" for="Video">
                        Video
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Games">
                      <label class="form-check-label" for="Games">
                        Games
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Sports">
                      <label class="form-check-label" for="Sports">
                        Sports
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Collectibles">
                      <label class="form-check-label" for="Collectibles">
                        Collectibles
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="cs-filter_widget">
              <h2 class="cs-filter_toggle_btn">
                Preferred Roles
                <span class="cs-arrow_icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.679688 0.96582L4.67969 4.96582L8.67969 0.96582" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                  
                </span>
              </h2>
              <div class="cs-filter_toggle_body">
                <ul>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Art" checked>
                      <label class="form-check-label" for="Art">Art</label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Fashion">
                      <label class="form-check-label" for="Fashion">
                        Fashion
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Music">
                      <label class="form-check-label" for="Music">
                        Music
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Video">
                      <label class="form-check-label" for="Video">
                        Video
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Games">
                      <label class="form-check-label" for="Games">
                        Games
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Sports">
                      <label class="form-check-label" for="Sports">
                        Sports
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="category" id="Collectibles">
                      <label class="form-check-label" for="Collectibles">
                        Collectibles
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
      </div>
        </div>
        <div class="cs-sidebar_frame_right">
          <div class="cs-filter_head">
            <div class="cs-filter_head_left">
              <span class="cs-search_result cs-medium cs-ternary_color">{{ totle }} Results</span>
              <div class="cs-form_field_wrap">
                <input type="text" class="cs-form_field cs-field_sm" placeholder="In Auction">
              </div>
              <a href="#" class="cs-clear_btn">Clear All</a>
            </div>
            <div class="cs-filter_head_right">
              <div class="cs-form_field_wrap cs-select_arrow">
                <select class="cs-form_field cs-field_sm">
                  <option value="11">Sort By</option>
                  <option value="22">--Man--</option>
                  <option value="33">--Female--</option>
                  <option value="44">--All--</option>
                </select>
              </div>
              <div class="cs-form_field_wrap cs-select_arrow">
                <select class="cs-form_field cs-field_sm">
                  
                  <option value="2">Most popular New</option>
                  <option value="3">By price</option>
                </select>
              </div>
            </div>
          </div>
          <div class="cs-height_30 cs-height_lg_30"></div>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-sm-6" v-for="item in listProduct" :key="item.id" >
              <div class="cs-card cs-style4 cs-box_shadow cs-white_bg">
                <span class="cs-card_like cs-primary_color" style="background-color:rgba(22,214,181); color:white">
                  ✿ {{ item.status }} ✿
                 </span>
                 <router-link class="cs-card_thumb cs-zoom_effect"
                 :to="'/product/productDetails/' + item.user_product.id">
                  <img
                   :src="item.img_product"
                    alt="Image"
                    class="cs-zoom_item"
                  />
                 </router-link>
                <div class="cs-card_info">
                  
                  <router-link   :to="'/product/productDetails/' + item.user_product.id" class="cs-avatar cs-white_bg">
                    <img :src="item.user_product.avatars[0]" alt="Image" />
                  
                      <span>{{item.user_product.name}}</span>
                    </router-link> 
                  
                  <h3 class="cs-card_title">
                    <a href="explore-details.html">{{item.game_product.nameGame}}</a>
                  </h3>
                  <div class="cs-card_price">
                    Price: <b class="cs-primary_color">{{ item.price }} vnĐ / {{item.hour}}.h</b>
                  </div>
                  <hr />
                  <div class="cs-card_footer">
                      <span class="cs-card_btn_2" data-modal="#bid_1"
                      ><span>Donate</span></span
                    >
                    <span class="cs-card_btn_2" data-modal="#bid_1"
                      ><span>Place Rent</span></span
                    >
                  </div>
                </div>
              </div>
              <div class="cs-height_30 cs-height_lg_30"></div>
            </div>
  
          </div>
          <div class="cs-height_10 cs-height_lg_10"></div>
          <div class="text-center">
            <a href="#" class="cs-btn cs-style1 cs-btn_lg"><span>Load More</span></a>
          </div>
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
// import Swal from "sweetalert2";
import ProductService from "@/service/ProductService";

export default {
name:'skillPage',
props: ["id"], // Nhận tham số id từ URL

components: { 
    startHeader,
    footerHome,
  },
  data() {
    return {
      BASE_URL: process.env.BASE_URL,
      listProduct: [],
      nameGame: "",
      totle:null
     
    };
  },
  methods: {
    async getAllProductById(id) {
    try {
      console.log(id);
      const response = await ProductService.getProductsByGame(id);
      this.listProduct = response.sort((a, b) => b.id - a.id); // giảm dần
      this.nameGame = this.listProduct[0].game_product.nameGame;
      this.totle = this.listProduct.length;
    } catch (error) {
      console.error("Error fetching products by Game:", error);
    }
  },
  },
  async created() {
    await this.getAllProductById(this.id);
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.amount);
    },
  },
}
</script>

<style>

</style>