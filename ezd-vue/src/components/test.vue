<template>
    <div>
      <div id="your-container-element">PayPal</div>
    </div>
  </template>
  
  <script>
  import { onMounted } from "vue";
  import { loadScript } from "@paypal/paypal-js";
  
  export default {
    name: "PayPal",
    setup() {
      onMounted(async () => {
        let paypal;
  
        try {
          paypal = await loadScript({ clientId: "AbLBGB3RVnQp5QZ6hEGgXxNAu1v0VKydgPZD2_uOqQ_ti-ZQQrRoUXJWUCHW9OFg51fm9goR6dEHB87b" });
        } catch (error) {
          console.error("Failed to load the PayPal JS SDK script", error);
        }
  
        if (paypal) {
          try {
            await paypal.Buttons().render("#your-container-element");
          } catch (error) {
            console.error("Failed to render the PayPal Buttons", error);
          }
        }
      });
    },
  };
  </script>
  
  <style>
  </style>
  