const data = [
  {
    id: "1",
    email: "John Brown",
    status: "Success",
  },
  {
    id: "2",
    email: "Tanya",
    status: "Pending",
  },
  {
    id: "3",
    email: "Oni Chichi",
    status: "Pending",
  },
  {
    id: "4",
    email: "Son Goky",
    status: "Cancelled",
  },
  {
    id: "5",
    email: "Blade Shark",
    status: "Success",
  },
  {
    id: "6",
    email: "Enter Boi",
    status: "Success",
  },
];

export const orders = {
  state: {
    listOrder: data,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListOrder(state, listOrder) {
      return {
        ...state,
        listOrder,
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
