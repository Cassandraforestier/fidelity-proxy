import axios from "axios";

//exporter un objet axios avec une base url réutilisable dans tout le projet
export default axios.create({
  baseURL: "https://192.168.1.134:4000",
});

