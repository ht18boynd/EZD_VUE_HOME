import axios  from 'axios'

const GAME_API_BASE_URL = 'http://localhost:8081/api/games/';
class GameService {
    async getAllGames(){
        return await axios.get(GAME_API_BASE_URL);
    } 
}
export default new GameService()