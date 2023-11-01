<script >
import { FormKit } from '@formkit/vue';
import '@formkit/themes/genesis'
export default {
  name: "RegisterPage",
  components:{
    FormKit
  }
}
</script>


<template>
    <div style="background-color: aliceblue;">
      <FormKit
      type="form"
      submit-label="Login"
      action="https://enpae7aofyxlml7.m.pipedream.net"
      method="post"
    >
      <FormKit
        name="email"
        label="Email address"
        validation="required|email"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
    </FormKit>
</div>
  </template>
  
  <style>
  [data-invalid] .formkit-inner {
    border-color: red;
    box-shadow: 0 0 0 1px red;
  }
  
  [data-complete] .formkit-inner {
    border-color: red;
    box-shadow: 0 0 0 1px green;
  }
  [data-complete] .formkit-inner::after {
    content: '✅';
    display: block;
    padding: 0.5em;
  }
  </style>