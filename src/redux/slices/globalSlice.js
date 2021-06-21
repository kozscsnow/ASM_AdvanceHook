import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listCocktails: [],
  listCocktailsSelected: [],
  cocktailInfo: '',
  isLoading: true,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    increaseCounter(state, action) {
      state.count = state.count + state.step;
    },
    decreaseCounter(state, action) {
      state.count = state.count - state.step;
    },
    changeStep(state, action) {
      state.step = action.payload;
    },
    getListCocktailAPI(state, action) {
      state.listCocktails = action.payload;
      state.count = state.count + state.step;
    },
    pushCocktailsSelected(state, action) {
      state.listCocktailsSelected.push(action.payload);
    },
    removeCocktailsSelected(state, action) {
      state.listCocktailsSelected.splice(action.payload, 1);
    },
    getCocktailInfo(state, action) {
      state.cocktailInfo = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    resetStoreRedux(state, action) {
      state.listCocktailsSelected = [];
      state.listCocktails = [];
      // state = initialState;
    },
  },
});

const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };
