export function mockasync (data, filter) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data_filter = [];
        if (filter !== undefined) {
          data_filter = data.filter((value) => {
            return filter.indexOf(value.hos_per_id) >= 0;
          })
        }
        else {
          data_filter = data;
        }
        resolve(data_filter)
      }, 1000)
    })
  }
  
  export function mockasyncerror () {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Something deu ruim')), 600)
    })
  }