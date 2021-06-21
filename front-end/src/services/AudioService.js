import { uploadFile } from "./ApiService";

export async function uploadAudio(audioFile, props) {
    return uploadFile(`/student/audio/${props.userId}`, {taskId: props.taskId}, audioFile);
}