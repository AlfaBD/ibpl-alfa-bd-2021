import { get, post, update } from "./apiService";

export async function index() {
  return get("/school");
}
export async function store() {
  return post("/school");
}
export async function show() {
  return get("/school");
}
export async function update() {
  return update("/school");
}
export async function destroy() {
  return update("/school");
}
