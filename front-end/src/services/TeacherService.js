import { get, post, update } from "./apiService";

export async function index() {
  return get("/teacher");
}
export async function store() {
  return post("/teacher");
}
export async function show() {
  return get("/teacher");
}
export async function update() {
  return update("/teacher");
}
export async function destroy() {
  return update("/teacher");
}
