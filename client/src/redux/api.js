import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

export const createPerson = (personData) => API.post("/person", personData);
// export const getPersons = () => API.get("/person");
export const getPersons = (page) => API.get(`/person?page=${page}`);
export const getPerson = (id) => API.get(`/person/${id}`);
export const deletePerson = (id) => API.delete(`/person/${id}`);
export const updatePerson = (updatedPersonData, id) =>
  API.patch(`/person/${id}`, updatedPersonData);
export const getPersonsByUser = (userId) =>
  API.get(`/person/userPersons/${userId}`);

export const getPersonsBySearch = (searchQuery) =>
  API.get(`/person/search?searchQuery=${searchQuery}`);
