const state = {
    snackbar: {
        value : false,
        color : null,
        data : null
    },
    loading: false,
    success_message: '',
    error_message: '',
    isLoggedIn:false
};
  
  const getters = {
    snackbar(state){
        return state.snackbar;
    },
    loading(state) {
        return state.loading;
    },
    successMessage(state) {
        return state.success_message;
    },
    errorMessage(state) {
        return state.error_message;
    },
    isLoggedIn(state){
      return state.isLoggedIn;
    }
  };
  
  const actions = {
    setSnackbar(context,payload){
      context.commit("snackbar",payload);
    },
    setLoading(context,payload){
      context.commit("loading",payload);
    },
    setSuccessMessage(context,payload){
      context.commit("successMessage",payload);
    },
    setErrorMessage(context,payload){
      context.commit("errorMessage",payload);
    },
  };
  
  const mutations = {
    snackbar(state,payload){
        state.snackbar = payload;
    },
    loading(state,payload){
        state.loading = payload;
    },
    successMessage(state,payload) {
        state.success_message = payload;
        state.snackbar={data:payload,color:'success',value:'true'};
    },
    errorMessage(state,payload) {
        state.error_message = payload;
        state.snackbar={data:payload,color:'red',value:'true'};
    },
    isLoggedIn(state,payload){
      state.isLoggedIn=payload;
    }
  };
  
  export default {
    // namespace:true,
    state,
    getters,
    actions,
    mutations,
  };
  