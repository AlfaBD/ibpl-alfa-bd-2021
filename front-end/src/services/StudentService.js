import { get, post, update } from "./apiService";

export async function index() {
  return get("/student");
}
export async function store() {
  return post("/student");
}
export async function show() {
  return get("/student");
}
export async function update() {
  return update("/student");
}
export async function destroy() {
  return update("/student");
}
