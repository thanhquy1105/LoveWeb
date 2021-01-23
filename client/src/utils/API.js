import axios from "axios";

// const URL = "http://localhost:5000";
// const URL = "https://quyyeungoc.herokuapp.com"

export default {
  async getShowDays() {
    return await axios.get("/api/getShowDays");
  },
  async getShowFull() {
    return await axios.get("/api/getShowFull");
  },
  async getAvatar() {
    return await axios.get("/api/getAvatar");
  },
  async putShowDays(change) {
    return await axios.post(`/api/updateShowDays`, change);
  },
  async putShowFull(change) {
    return await axios.post(`/api/updateShowFull`, change);
  },
  async putAvatar(change) {
    return await axios.post(`/api/updateAvatar`, change);
  },
};
