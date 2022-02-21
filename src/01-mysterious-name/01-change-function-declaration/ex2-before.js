/*
매개변수 추가하기

도서 관리 프로그램의 Book 클래스가 있다. 예약 시 우선순위 큐를 지원하라는 새로운 요구 사항이 추가되었다. addReservation()을 호출할 때 예약 정보를 일반 큐에 넣을지 우선순위 큐에 넣을지를 지정하는 매개변수를 추가하라.
*/

class Book {
  constructor() {
    this._reservations = [];
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
