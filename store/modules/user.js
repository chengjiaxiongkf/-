import {getUserInfo} from '../../api/user'

const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    menus: [],
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, {name}) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 获取用户信息
    async GetInfo({commit}) {
      let data = (await getUserInfo()).data;
      let user = data.userData;
      commit('SET_NAME', user.fullName)
      commit('SET_INFO', user)
      commit('SET_ROLES', user.roles)
      commit('SET_MENUS', data.menus)
      commit('SET_AVATAR', user.avatar)
      return data;
    },
  }
}

export default user
