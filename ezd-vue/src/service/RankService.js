import axios from "axios";

const axiosInstance = axios.create({
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  const RANK_API_BASE_URL = 'http://localhost:8081/api/items/';

  class RankService{
    async getRankByUserId(userId){
        try {

            const FIND_BY_USER_API_URL = `${RANK_API_BASE_URL}${userId}`;
    
            return await axiosInstance.get(FIND_BY_USER_API_URL).then((response) => {
              return response.data;
            });
          } catch (error) {
            console.error('Error fetching products by user:', error);
            throw error;
          }
    }
  };

  export default new RankService();