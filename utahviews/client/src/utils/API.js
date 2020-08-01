import Axios from "axios";

export default {
  getTrails: async () => (await Axios.get("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200857114-bb6b66798e5094dcd9c231249bb926ba")).data
}