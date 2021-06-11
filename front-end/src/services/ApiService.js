import axios from "axios";

const DEV_HOST = "http://localhost:8000";
const PROD_HOST = "";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: `${DEV_HOST}/api/alfabd`,
  headers: {
    authorization: "Bearer " + token,
  },
});

export async function get(url, params) {
  return (await api.get(url, { params })).data;
}

export async function post(url, body, config) {
  body = body || {};
  return (await api.post(url, body)).data;
}

export async function update(url, params) {}
