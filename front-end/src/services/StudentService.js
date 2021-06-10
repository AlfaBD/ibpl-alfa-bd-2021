import { get, post, update } from "./ApiService";

export async function index() {
  return get("/student");
}
export async function store(data) {
  return post("/student", data);
}
export async function show() {
  return get("/student");
}
export async function destroy() {
  return update("/student");
}
