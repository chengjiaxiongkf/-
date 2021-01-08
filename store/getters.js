const getters = {
  lang: state => state.app.lang,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  roles: state => state.user.roles,
  menus: state => state.user.menus,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
}

export default getters
