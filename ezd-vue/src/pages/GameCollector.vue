<template>
  <div>
    <h1>Service List</h1>
    <ul>
      <li v-for="service in services" :key="service.id">
        <h2>{{ service.name }}</h2>
        <img :src="service.imageName" alt="Service Image" width="200">
      </li>
    </ul>
  </div>
</template>

<script>
 import axios from 'axios';
export default {
  name:'gameCollection',
  data() {
    return {
      services: [],
    };
  },
  created() {
   
    axios.get('http://localhost:8081/api/services/')
      .then(response => {
        this.services = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>
