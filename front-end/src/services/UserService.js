import { get } from "./ApiService";

export async function index(id) {
  return get(`/authenticate/${id}`);
}
