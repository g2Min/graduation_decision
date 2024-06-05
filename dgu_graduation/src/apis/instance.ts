import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

// ebook 데이터 받기
export const ebookInstance = axios.create(instance.defaults);
ebookInstance.defaults.baseURL += `/data`;