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

const filteredCustomers = someCustomers.filter((customer) =>
  inNewEngland(customer.address.state)
);
