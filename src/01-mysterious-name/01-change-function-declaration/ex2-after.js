class Book {
  constructor() {
    this._reservations = [];
    this._priorityReservations = [];
  }

  addReservation(customer, isPriority) {
    let reservations = isPriority
      ? this._reservations
      : this._priorityReservations;
    this.reservations.push(customer);
  }
}
