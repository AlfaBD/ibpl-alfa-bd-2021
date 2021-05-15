import { get, post, update } from "./ApiService";



export default {
  index() {
    return get("/school");
  },
  store() {
    return post("/school");
  },
  show() {
    return get("/school");
  },
  updateStudent() {
    return update("/student");
  },
  updateTeacher() {
    return update("/teacher");
  },
  updateClass() {
    return update("/class");
  },
  
  // Endpoints Dahsboard
  get_classes() {
    return get("/classes");
  },
  get_tasks() {
    return get("/tasks");
  },
  get_evaluations(classes) {
    return get("/evaluations");
  }
}


