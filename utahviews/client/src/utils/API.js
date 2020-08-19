import Axios from "axios";

export default {
  //getTrails: async () => (await Axios.get("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200857114-bb6b66798e5094dcd9c231249bb926ba")).data
  //getTrails: async () => (await Axios.get("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200859460-576087e18134672e73d3cea837e3f0ca")).data
  //getTrails: async () => (await Axios.get("/api/trails", { params: {} })).data

  //gets all trails
  getTrails: function (options) {
    return Axios.get("/api/trails", { params: options });
  },

  //gets all cities
  getCities: function (citiesOptions) {
    return Axios.get("/api/cities", citiesOptions);
  }
}

export const UserService = {
  createUser: (userData) => Axios.post('/api/auth/', userData),

  loginUser: async (userData) => (await Axios.post('/api/auth/login', userData)).data,

  saveFavorite: (userId, trailId) => Axios.put(`/api/auth/${userId}`, trailId),

  fetchUser: () => Axios.get('/api/auth/'),

  populateFavorites: async (userId) => {
    return (await Axios.get(`/api/auth/${userId}`)).data
  }
}

export const trailService = {
  create: (trail) => Axios.post('/api/trails', trail)
}
