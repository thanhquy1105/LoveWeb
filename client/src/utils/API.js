import axios from "axios";

// const URL = "http://localhost:5000";
// const URL = "https://quyyeungoc.herokuapp.com"

export default {
  // Gets all books
  async getShowDays() {
    return await axios.get("/api/getShowDays");
  },
  // Gets the book with the given id
  async getShowFull() {
    return await axios.get("/api/getShowFull");
  },
  // Deletes the book with the given id
  async getAvatar() {
    return await axios.get("/api/getAvatar");
  },
  // Saves a book to the database
  async putShowDays(id, change) {
    return await axios.put(`/api/updateShowDays/${id}`, change);
  },
  async putShowFull(id, change) {
    return await axios.put(`/api/updateShowFull/${id}`, change);
  },
  async putAvatar(id, change) {
    return await axios.put(`/api/updateAvatar/${id}`, change);
  },
};
