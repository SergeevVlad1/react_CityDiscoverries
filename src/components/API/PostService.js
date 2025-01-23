import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://6790a307af8442fd73770bf0.mockapi.io/attractions",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      "https://6790a307af8442fd73770bf0.mockapi.io/attractions/" + id,
    );
    return response;
  }
}
