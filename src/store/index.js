import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: 'f28bcad4-fea2-4e7c-b50e-0088e8f9779c',
          authority:
            'https://login.microsoftonline.com/5380f688-e16d-48e5-86dc-698bfaa8b0fd',
        },
        cache: {
          cacheLocation: 'localStorage',
        },
      },
      accessToken: ''
    };
  },
  mutations :{
    setAccessToken(state, token){
      state.accessToken = token;
    }
  }
});

export default store;