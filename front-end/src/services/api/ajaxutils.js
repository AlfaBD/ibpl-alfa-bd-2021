import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.196.179.100:3000/api/'
});

export async function get (url, params) {
  return (await api.get(url, {params})).data
}

export async function post (url, params) {
  const fd = new FormData()
  params = params || {}
  Object.keys(params).map((k) => {
    fd.append(k, params[k])
  })
  return (await api.post(url, fd)).data
}