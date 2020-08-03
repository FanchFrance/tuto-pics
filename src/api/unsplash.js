import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID F8Qanb9pneobOes8KzYWFEdAmzkI65VtcIRUQ8Jw-j8",
  },
});
