
import {get, post} from './ajaxutils'

export default {
    get_students () {
        return get('/api/get_exoesqueleto')
  },

  get_schools () {
    return get('/api/get_schools')
  },

  get_teachers () {
    return get('/api/get_teachers')
  },
}