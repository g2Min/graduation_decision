import axios from 'axios';

// ebook 데이터 받기
export const getEbook = async () => {
  try {
    const response = await axios.post('http://localhost:3000/data', {}, {
      params: {
        major: '컴퓨터 심화'
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching ebook data:", error);
  }
};
