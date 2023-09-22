import axios from ".";

export const getCategoryList = async () => {
    try {
      const response = await axios.get("/hackathon/categories-list");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const register = async (message) => {
    try {
      const response = await axios.post(
        "/hackathon/registration",
        message
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

