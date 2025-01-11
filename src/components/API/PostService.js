import axios from "axios";

export default class PostService  {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://67320e867aaf2a9aff134756.mockapi.io/api/1/places/' + id) 
        return response;
    }
}