import axios  from 'axios'
const axiosInstance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
    },
});

const GAME_API_BASE_URL = 'http://localhost:8081/api/games/';
class GameService {


   // For Games
   async getAllGames() {
    return await axiosInstance.get(GAME_API_BASE_URL);
}
}
export default new GameService()