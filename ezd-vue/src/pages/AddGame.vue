<template>
  <div>
    <input type="text" v-model="game.nameGame" placeholder="Name" />
    <input type="file" @change="onFileChange" />
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      game: {
        nameGame: '', // Tạo trường nameGame trong đối tượng game
      },
      image: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    uploadImage() {
      const formData = new FormData();
      formData.append('imageFile', this.image);
      // Đưa đối tượng game vào FormData
      formData.append('nameGame', this.game.nameGame);
      
      axios.post('http://localhost:8081/api/games/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log(response);
          // Clear the image data and name after successful upload
          this.image = null;
          this.game.nameGame = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
