import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export default {
  namespaced: true,
  state: () => ({
    show: {
      data: {},
      loading: false,
      success: false,
      error: false,
    },
    create: {
      loading: false,
      success: false,
      error: false,
    },
  }),
  mutations: {
    SET_LOADING(state, payload) {
      state[payload.type].loading = payload.loading;
    },
    SET_DATA(state, payload) {
      state[payload.type].data = payload.data;
    },
    SET_SUCCESS(state, payload) {
      state[payload.type].success = payload.success;
    },
    SET_ERROR(state, payload) {
      state[payload.type].error = payload.error;
    },
  },
  actions: {
    async setLogin({ commit }, data) {
      commit("SET_LOADING", { type: "show", loading: true });
      commit("SET_ERROR", { type: "show", error: false});
      try {
        const res = await axios.post("login", data);
        commit("SET_LOADING", { type: "show", loading: false });
        console.log("res", res.data);
        localStorage.setItem('token',res.data.token)
        return true;
      } catch (error) {
        commit("SET_LOADING", { type: "show", loading: false });
        commit("SET_ERROR", { type: "show", error: error.response.data.errors});
        console.log(error.response.data);
        return false;
      }
    },
    async setLogout() {
      try {
        const res = await axios.post(
          "logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        
        localStorage.removeItem('token')
        console.log("res", res);
        return true;
      } catch (error) {
        console.log(error.response.data);
        return false;
      }
    },
    async createAccount({ commit }, data) {
      commit("SET_LOADING", { type: "create", loading: true });
      commit("SET_ERROR", { type: "create", error: false});
      try {
        const res = await axios.post("create-account", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
        commit("SET_LOADING", { type: "create", loading: false });
        console.log("res", res);
        return true;
      } catch (error) {
        commit("SET_LOADING", { type: "create", loading: false });
        commit("SET_ERROR", { type: "create", error: error.response.data.errors });
        console.log(error.response.data.errors);
        return false;
      }
    },
    async show({commit}) {
      try {
        const res = await axios.get("user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        commit("SET_DATA", { type: "show", data: res.data });
        console.log("res", res);
        return true;
      } catch (error) {
        console.log(error.response.data);
        return false;
      }
    },
  },
};
