import { get, post, update } from "./ApiService";


export async function index() {
  return get("/school");
}
export async function store(data) {
  return post("/school", data);
}
export async function show() {
  return get("/school");
}
export async function updateStudent() {
  return update("/student");
}
export async function updateTeacher() {
  return update("/teacher");
}
export async function updateClass() {
  return update("/class");
}

// Endpoints Dahsboard
export async function get_classes() {
  return get("/classes");
}
export async function get_tasks() {
  return get("/tasks");
}
export async function get_evaluations(classes) {
  return get("/evaluations");
}
