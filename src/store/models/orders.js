const data = [
  {
    id: "1",
    billid: "XYZ",
    email: "johnbrown@gmail.com",
    status: ["success"],
  },
  {
    id: "2",
    billid: "MNZ",
    email: "tanya@gmail.com",
    status: ["pending"],
  },
  {
    id: "3",
    billid: "DFD",
    email: "onichichi@gmail.com",
    status: ["pending"],
  },
  {
    id: "4",
    billid: "FSD",
    email: "songoky.com",
    status: ["cancelled"],
  },
  {
    id: "5",
    billid: "DSA",
    email: "bladeshark@gmail.com",
    status: ["success"],
  },
  {
    id: "6",
    billid: "VCX",
    email: "enterboi@gmail.com",
    status: ["success"],
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
