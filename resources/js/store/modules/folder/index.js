import router from "../../../router";
import {getLocalUser} from '../../../helpers'
import axios from "axios";

const user = getLocalUser();
const state = {
  folderContent:null,
};

const getters = {
    getFolderItem(state) {
      return state.folderContent;
    },
};

const actions = {
  async fetchFolderItem(context, payload) {
    await axios
    .get(context.getters.getAuth.api_url + "/folder/"+payload)
    .then(response => {
      context.commit("setFolderContent", response.data.data);
    })
    .catch(error => {
        context.commit("setFolderContent", null);
      if (error.response) {
        if (error.response.status == 401) {
          localStorage.removeItem("user");
          context.commit("setCurrentUser", null);
          router.push({ path: "/login" });
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
  async createNewFolder(context,payload){
    await axios
        .post(context.getters.getAuth.api_url + "/folder",payload)
        .then(response => {
        context.dispatch("fetchFolderItem", payload.native_folder_hashed_id);
        })
        .catch(error => {
            context.commit("setFolderContent", null);
        if (error.response) {
            if (error.response.status == 401) {
              localStorage.removeItem("user");
              context.commit("setCurrentUser", null);
              router.push({ path: "/login" })
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
};

const mutations = {
    setFolderContent(state, payload) {
      state.folderContent = payload;
    },
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
