import axios from ".";

export const Contact = async (message) => {
    try {
      const response = await axios.post(
        "/hackathon/contact-form",
        message
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };