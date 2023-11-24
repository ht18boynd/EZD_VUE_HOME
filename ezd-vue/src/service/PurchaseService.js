import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/plain;charset=ISO-8859-1',
  },
});

const PURCHASE_API_BASE_URL = 'http://localhost:8081/api/purchase/';

class PurchaseService{

    async getPurchase(){
        return await axiosInstance.get(PURCHASE_API_BASE_URL)
    }
    async getPurchaseById(id){
        try {
            const FIND_USER = `${PURCHASE_API_BASE_URL}byUser/${id}`;
            return await axiosInstance.get(FIND_USER).then((resonse) =>{
                return resonse.data
            })
        } catch (error) {
            console.error('Error fetching products by user:', error);
            throw error;
        }
    }
    async purchaseItem(userIds,itemIds,quantitys){
        const formData = new FormData();
        formData.append('userId',userIds);
        formData.append('itemId',itemIds);
        formData.append('quantity', quantitys);

        try {
            const response = await axiosInstance.post(`${PURCHASE_API_BASE_URL}buyItem`,formData);
            return response.data;
        } catch (error) {
            console.error('Error purchase item: ',error);
            throw error;
        }
    }
}

export default new PurchaseService();
