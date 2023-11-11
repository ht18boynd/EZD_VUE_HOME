import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
});

const PRODUCT_API_BASE_URL = 'http://localhost:8081/api/products/';

class ProductService {

  // For Products
  async saveProduct(userGameId, gameId, price, images,decription,roleId,levelId,genderId) {
    const formData = new FormData();
    formData.append('userGameId', userGameId);
    formData.append('gameId', gameId);
    formData.append('price', price);   
     formData.append('decription', decription);
      formData.append('roleId', roleId);
      formData.append('levelId', levelId);
      formData.append('genderId', genderId);

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      const response = await axiosInstance.post(`${PRODUCT_API_BASE_URL}saveProduct`, formData);
      return response.data;
    } catch (error) {
      console.error('Error saving product:', error);
      throw error;
    }
  }

  // Add more methods as needed based on your ProductController.java

}

export default new ProductService();
