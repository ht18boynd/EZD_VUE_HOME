<template>
  <div>
    <startHeader></startHeader>
    <div class="cs-height_90 cs-height_lg_80"></div>

    <div class="cs-height_100 cs-height_lg_70"></div>
    <div class="container">
      <div class="cs-section_heading cs-style4">
        <h2 class="cs-section_title">Buy Coin</h2>
        <p class="cs-section_subtitle">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div class="cs-height_45 cs-height_lg_45"></div>
      <div class="row">
        <div class="col-lg-4 col-sm-4">
          <div
            class="cs-iconbox cs-style3 cs-box_shadow cs-white_bg"
            style="text-align: center"
          >
            <div
              class="cs-iconbox_img"
              style="
                font-size: medium;
                font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana,
                  sans-serif;
              "
            >
              <h3>
                Nạp
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/nolan/64/diamond.png"
                  alt="diamond"
                />
                Qua PayPal
              </h3>
            </div>
            <hr />
            <div class="cs-iconbox_text">
              <form @submit.prevent="CheckOut">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Nhập số Tiền bạn muốn Nạp"
                    v-model="amount"
                    @input="checkAmountRange"
                  />

                  <div v-if="isAmountInvalid" style="color: red">
                    Số tiền phải từ 1 đến 1000 USD
                  </div>
                </div>
                <div class="cs-height_30 cs-height_lg_30"></div>

                <div for="">Số Tiền :{{ formattedPrice }}</div>
                <div class="cs-height_30 cs-height_lg_30"></div>

                <div id="your-container-element" :disabled="amount === 0"></div>
                <button
                  type="submit"
                  class="btn btn-warning"
                  :disabled="amount === 0"
                >
                  Thanh Toán
                </button>
              </form>
            </div>
          </div>
          <div class="cs-height_30 cs-height_lg_30"></div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div
            class="cs-iconbox cs-style3 cs-box_shadow cs-white_bg"
            style="text-align: center"
          >
            <div
              class="cs-iconbox_img"
              style="
                font-size: medium;
                font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana,
                  sans-serif;
              "
            >
              <h3>
                Nạp
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/nolan/64/diamond.png"
                  alt="diamond"
                />
                Qua Ngân Hàng
              </h3>
            </div>
            <hr />
            <div class="cs-iconbox_text">30,000 VND</div>
            <a href="#" class="cs-iconbox_btn cs-primary_font">
              Thanh Toán
              <svg
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5303 6.75396C16.8232 6.46107 16.8232 5.9862 16.5303 5.6933L11.7574 0.920332C11.4645 0.627439 10.9896 0.627439 10.6967 0.920332C10.4038 1.21323 10.4038 1.6881 10.6967 1.98099L14.9393 6.22363L10.6967 10.4663C10.4038 10.7592 10.4038 11.234 10.6967 11.5269C10.9896 11.8198 11.4645 11.8198 11.7574 11.5269L16.5303 6.75396ZM0 6.97363H16V5.47363H0V6.97363Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div class="cs-height_30 cs-height_lg_30"></div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div
            class="cs-iconbox cs-style3 cs-box_shadow cs-white_bg"
            style="text-align: center"
          >
            <div
              class="cs-iconbox_img"
              style="
                font-size: medium;
                font-family: &quot;Segoe UI&quot;, Tahoma, Geneva, Verdana,
                  sans-serif;
              "
            >
              <h3>
                Nhập Mã Coupon
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/nolan/64/diamond.png"
                  alt="diamond"
                />
              </h3>
            </div>
            <hr />
            <div class="cs-iconbox_text">50,000 VND</div>
            <a href="#" class="cs-iconbox_btn cs-primary_font">
              Thanh Toán
              <svg
                width="17"
                height="12"
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5303 6.75396C16.8232 6.46107 16.8232 5.9862 16.5303 5.6933L11.7574 0.920332C11.4645 0.627439 10.9896 0.627439 10.6967 0.920332C10.4038 1.21323 10.4038 1.6881 10.6967 1.98099L14.9393 6.22363L10.6967 10.4663C10.4038 10.7592 10.4038 11.234 10.6967 11.5269C10.9896 11.8198 11.4645 11.8198 11.7574 11.5269L16.5303 6.75396ZM0 6.97363H16V5.47363H0V6.97363Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div class="cs-height_30 cs-height_lg_30"></div>
        </div>
      </div>
    </div>
    <div class="cs-height_70 cs-height_lg_40"></div>

    <footerHome></footerHome>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { amountPayPal } from "@/store"; // Import trạng thái toàn cục

import { loadScript } from "@paypal/paypal-js";

import TransactiomService from "@/service/TransactionService";
import Swal from "sweetalert2";
import footerHome from "@/pages/footer.vue";
import startHeader from "@/pages/startHeader.vue";
export default {
  name: "coinPage",
  components: {
    startHeader,
    footerHome,
  },
  data() {
    return {
      user: null,
      isAmountInvalid: false,
      amount: 0,
      isbutton: false,
    };
  },
  methods: {
    async CheckOut() {
      try {
        console.log("price  ,Id: " + this.amount + "ID : " + this.user.id);
        const price = this.amount * 24582.5;
        console.log(price);
        if (this.amount >= 1 && 1000 >= this.amount) {
          await TransactiomService.saveTransaction(this.user.id, price);
          console.log("ok");
          this.amount = 0;
          Swal.fire("", "Đơn Của Bạn Đang Đợi Duyệt", "success");
        } else {
          Swal.fire("", "Giá Trị Không Hợp Lệ", "error");
        }
      } catch (error) {
        Swal.fire("", "Lỗi Thanh Toán", "error");
      }
    },
    checkAmountRange() {
      amountPayPal.value = this.amount;
      const minAmount = 1;
      const maxAmount = 1000;

      if (this.amount < minAmount || this.amount > maxAmount) {
        this.isAmountInvalid = true;
      } else {
        this.isAmountInvalid = false;
      }
    },
  },

  // Trong phần setup của Vue component của bạn
  setup() {
    onMounted(async () => {
      let paypal;

      try {
        paypal = await loadScript({
          clientId:
            "AbLBGB3RVnQp5QZ6hEGgXxNAu1v0VKydgPZD2_uOqQ_ti-ZQQrRoUXJWUCHW9OFg51fm9goR6dEHB87b",
        });
      } catch (error) {
        console.error("Failed to load the PayPal JS SDK script", error);
      }

      if (paypal) {
        try {
          await paypal
            .Buttons({
              createOrder: (data, actions) => {
                if (amountPayPal.value != 0) {
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: amountPayPal.value,
                        },
                      },
                    ],
                  });
                } else {
                 console.log("In Valid:");
                }
              },
              onApprove: (data, actions) => {
                return actions.order.capture().then(() => {
                  // Thực hiện xử lý sau khi thanh toán thành công

                  Swal.fire("", "Thanh Toán Thành Công", "success");
                  console.log("Payment successful!");
                });
              },
             
              // ...
            })
            .render("#your-container-element");
        } catch (error) {
          console.error("Failed to render the PayPal Buttons", error);
        }
      }
    });

    // ...
  },
  computed: {
    formattedPrice() {
      // Sử dụng Intl.NumberFormat để định dạng price thành đơn vị tiền tệ
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(this.amount * 24582.5);
    },
  },
  created() {
    // Lấy dữ liệu người dùng từ localStorage khi component được tạo ra
    let userJSON = localStorage.getItem("userLocal");
    this.user = JSON.parse(userJSON);
  },
};
</script>
