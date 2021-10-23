import router from "../../../router";
import {getLocalUser} from '../../../helpers'
import axios from "axios";

const user = getLocalUser();
const state = {
  mode: "dev",
  dev_api_url: "/api",
  prod_api_url: "https://api.asatine.store/api/seller",
  currentUser: user,
  isLoggedIn: !!user
};

const getters = {
  getAuth(state) {
    let api_url;
    let user;
    let headers;
    if (state.mode == "dev") {
      api_url = state.dev_api_url;
    } else if (state.mode == "prod") {
      api_url = state.prod_api_url;
    }
    if (!state.currentUser) {
      user=null;
      headers=null;
    }else{
      user=state.currentUser;
      headers={
        headers:{
          'Authorization': 'Bearer '+state.currentUser.token,
        }
      }
    }
    return {
      api_url: api_url,
      user: user,
      headers:headers,
    };
  },
  getCurrentUser(state) {
    return state.currentUser;
  },
  getApiUrl(state) {
    let api_url;
    if (state.mode == "dev") {
      api_url = state.dev_api_url;
    } else if (state.mode == "prod") {
      api_url = state.prod_api_url;
    }
    return api_url;
  }
};

const actions = {
  async userLogin(context, payload) {
    context.commit("loading", true);
    await axios
      .post(context.getters.getAuth.api_url + "/login", payload)
      .then(response => {
        let currentUser = Object.assign({}, response.data.user, {
          token: response.data.access_token
        });
        localStorage.setItem("user", JSON.stringify(currentUser));
        context.commit("setCurrentUser", currentUser);
        context.dispatch("setLoading", false);
        context.dispatch("setSuccessMessage", "Login successfully");
        context.commit("loginSuccess");
        router.push({ path: "/" });
      })
      .catch(error => {
        console.log(error.response)
        if (error.response) {
          if (error.response.status == 401) {
            context.dispatch("setErrorMessage", error.response.data.message);
            console.log(error.response);
            context.commit("loginFailed");
          } else {
            context.dispatch(
              "setErrorMessage",
              error.response.status + " " + error.response.statusText
            );
            context.commit("loginFailed");
          }
        }
        context.dispatch("setLoading", false);
      });
  },
  async userLogout(context) {
    context.commit("loading", true);
    await axios
      .post(
        context.getters.getAuth.api_url + "/logout")
      .then(response => {
        localStorage.removeItem("user");
        context.commit("setCurrentUser", null);
        context.dispatch("setLoading", false);
        context.dispatch("setSuccessMessage", response.data.message);
        context.commit("userLogout");
        router.push({ path: "/login" });
      })
      .catch(error => {
        console.log(error.response)
        if (error.response) {
          if (error.response.status == 401) {
            context.dispatch("setErrorMessage", error.response.data.message);
            context.commit("loginFailed");
          } else {
            context.dispatch(
              "setErrorMessage",
              error.response.status + " " + error.response.statusText
            );
            context.commit("loginFailed");
          }
        }
        context.dispatch("setLoading", false);
      });
  },
  async userRegistration(context, payload) {
    context.commit("loading", true);
    await axios
      .post(context.getters.getAuth.api_url + "/register", payload)
      .then(response => {
        let currentUser = Object.assign({}, response.data.user, {
          token: response.data.access_token
        });
        localStorage.setItem("user", JSON.stringify(currentUser));
        context.commit("setCurrentUser", currentUser);
        context.dispatch("setLoading", false);
        context.dispatch("setSuccessMessage", "Registration successfully");
        context.commit("loginSuccess");
        router.push({ path: "/" });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status == 401) {
            context.dispatch("setErrorMessage", error.response.data.message);
            context.commit("loginFailed");
          } else {
            context.dispatch(
              "setErrorMessage",
              error.response.status + " " + error.response.statusText
            );
            context.commit("loginFailed");
          }
        }
        context.dispatch("setLoading", false);
      });
  },
  async setCurrentUser(context,payload){
    context.commit("setCurrentUser",payload);
  }
};

const mutations = {
  setCurrentUser(state, payload) {
    state.currentUser = payload;
  },
  loginSuccess(state) {
    state.isLoggedIn = true;
  },
  loginFailed(state) {
    state.isLoggedIn = false;
  },
  userLogout(state) {
    state.isLoggedIn = false;
  }
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
