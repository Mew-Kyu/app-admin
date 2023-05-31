const data = [
  {
    key: "1",
    name: "John Brown",
    username: "johnau",
    email: "johnau@gmail.com",
    phone: "0" + 969789654,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    username: "jimxanh",
    email: "jimxanh@gmail.com",
    phone: "0" + 869789651,
    address: "London No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "3",
    name: "Joe Black",
    username: "joeden",
    email: "joeden@gmail.com",
    phone: "0" + 769786652,
    address: "Sydney No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "4",
    name: "Jim Red",
    username: "jimdo",
    email: "jimdo@gmail.com",
    phone: "0" + 769781552,
    address: "London No. 2 Lake Park",
    tags: ["loser"],
  },
];

export const users = {
  state: {
    listUser: data,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setListUser(state, listUser) {
      return {
        ...state,
        listUser,
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
