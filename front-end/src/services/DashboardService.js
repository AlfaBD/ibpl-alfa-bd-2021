import { get } from "./ApiService";

export async function countMetrics(schoolId) {
  return get("/dashboard/countmetrics", {
    schoolId,
  });
}

export async function dateMetrics(schoolId) {
  return get("/dashboard/datemetrics", { schoolId });
}

export async function fluencyMetrics() {
  return get("/dashboard/fluencymetrics");
}
