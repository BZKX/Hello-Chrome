import {onlineRequest} from '../../api/request'
import ca from 'element-ui/src/locale/lang/ca';

// 初始状态
const state = {

};

//数据提交
const mutations = {

};

//逻辑相应
const actions = {
  async getWeekImg({ commit }, payload) {
    try {
      const res = await onlineRequest.getBingWeekImg();
      return res.data
    } catch (e) {
      console.log('err', e);
    }
  },
}

export default {
  state,
  actions,
  mutations
}
