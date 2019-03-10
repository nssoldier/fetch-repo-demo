import axios from "axios";

const fetch = axios.create({
  baseURL: "https://api.github.com",
  params: {
    access_token: "de9ab4b14ebf8dc509dd42273da68e1f70d11506"
  }
});

export default fetch;
