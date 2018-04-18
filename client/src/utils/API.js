import axios from "axios";

export default {
  // Gets all books
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets the book with the given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // Deletes the book with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Saves a book to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },

    // Gets all books
    getMountains: function() {
      return axios.get("/api/mountains");
    },
    // Gets the book with the given id
    getMountain: function(id) {
      return axios.get("/api/mountains/" + id);
    },
    // Deletes the book with the given id
    deleteMountain: function(id) {
      return axios.delete("/api/mountains/" + id);
    },
    // Saves a book to the database
    saveMountain: function(mountainData) {
      return axios.post("/api/mountains", mountainData);
    }
};
