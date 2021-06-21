import { get, post, update } from "./ApiService";

export async function index() {
  return get("/class");
}
export async function store(data) {
  return post("/class", data);
}
export async function show() {
  return get("/class");
}
export async function updateStudent() {
  return update("/class");
}
export async function updateTeacher() {
  return update("/class");
}
export async function updateClass() {
  return update("/class");
}

export async function find(id) {
  return get("/class", {
    school: id,
  });
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
