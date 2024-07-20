//https://api.themoviedb.org/3/movie/now_playing?api_key=c7a9d9e232dd75cfd0a3f862ca0b8e51

import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});