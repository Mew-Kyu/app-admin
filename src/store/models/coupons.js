const data = [
  {
    code: "DIS50",
    description: "Discount 50% for smartphone",
  },
  {
    code: "DIS70",
    description: "Discount 70% for clothes",
  },
  {
    code: "DIS30",
    description: "Discount 30% for all product",
  },
];

export const coupons = {
  state: {
    listCoupon: data,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListCoupon(state, listCoupon) {
      return {
        ...state,
        listCoupon,
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
    // async incrementAsync(payload, rootState) {
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   dispatch.count.increment(payload);
    // },
  }),
  selectors: (slice, createSelector) => ({
    selectCount() {
      return slice((state) => state.count);
    },
  }),
};
