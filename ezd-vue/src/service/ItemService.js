import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
});

const ITEM_API_BASE_URL = 'http://localhost:8081/api/items/';

class ItemService{
  async getItem(){
    return await axiosInstance.get(ITEM_API_BASE_URL)
}
  async getItemById(id){
    try {
      const FIND_BY_USER_API_URL = `${ITEM_API_BASE_URL}${id}`;
      return await axiosInstance.get(FIND_BY_USER_API_URL).then((response) => {
        return response.data
      })
    } catch (error) {
      console.error('Error fetching products by user:', error);
      throw error;
    }

  }
}

export default new ItemService();
