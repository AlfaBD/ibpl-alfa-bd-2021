import axios from "axios";

const HOST = "http://localhost:8000";
// const HOST = "http://alfabd.ddns.net";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: `${HOST}/api/alfabd`,

});

export async function get(url, params) {
  api.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem("token")
  return (await api.get(url, { params })).data;
}

export async function post(url, body) {
  api.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem("token")
  body = body || {};
  return (await api.post(url, body)).data;
}

export async function update(url, params) {

}

export async function uploadFile(url, body, file) {
  api.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem("token")
  body = body || {};
  body.file = file
  return (await api.post(url, body)).data
}
