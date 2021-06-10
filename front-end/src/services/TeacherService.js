import { get, post, update } from "./ApiService";

export async function index() {
  return get("/teacher");
}
export async function store(data) {
  return post("/teacher", data);
}
export async function show() {
  return get("/teacher");
}
export async function destroy() {
  return update("/teacher");
}
