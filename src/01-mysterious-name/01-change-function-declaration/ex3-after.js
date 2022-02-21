function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}

let someCustomers = [
  {
    address: {
      state: "MA",
    },
  },
];

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);
