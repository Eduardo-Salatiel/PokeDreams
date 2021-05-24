import axios from "axios";

export const pokeApiInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
