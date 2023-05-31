export const customers = {
  state: {
    listCustomer: [],
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListCustomer(state, listCustomer) {
      return {
        ...state,
        listCustomer,
      };
    },
    setCount(state, count) {
      return {
        ...state,
        count,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async fetchCustomers() {
      const data = await fetch('https://dummyjson.com/users')
      .then((response) => response.json());
      this.setListCustomer(data);
    },
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice((state) => state.count);
    },
  }),
};
