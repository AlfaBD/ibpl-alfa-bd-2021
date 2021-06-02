
import {classes, tasks, evaluations} from './Data'

const mockasync = (data, filter) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data_filter = [];
            if (filter !== undefined && filter[0] !== 'escola') {
                data_filter = data.filter((value) => {
                    return filter.indexOf(value.class) >= 0;
                })
            }
            else {
                data_filter = data;
            }

            resolve(data_filter)
        }, 1000)
    })
}

export default {
    get_classes() {
        return mockasync(classes);
    },
    get_tasks() {
        return mockasync(tasks);
    },
    get_evaluations(classes) {
        return mockasync(evaluations, classes);
    },
}