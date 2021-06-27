import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  listCocktailsSelected: [],
  cocktailInfo: '',
  isLoading: true,
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
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
    getInputValue(state, action) {
      state.inputValue = action.payload;
    },
    resetStoreRedux(state, action) {
      return initialState;
    },
  },
});

const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };
