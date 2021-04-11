import { exoesqueleto } from './db_exoesqueleto.js'
import { persons } from './db_persons'
import { emergencies } from './db_emergencies'
import { mockasync } from './mockutils'
  

export default {
  get_exoesqueleto (persons) {
    return mockasync(exoesqueleto, persons);
  },

  get_emergencies (persons) {
    return mockasync(emergencies, persons)
  },

  get_persons () {
    return mockasync(persons)
  },
}