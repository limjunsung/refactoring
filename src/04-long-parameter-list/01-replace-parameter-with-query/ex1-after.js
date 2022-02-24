// STEP1: 임시 변수인 discountLevel을 질의 함수로 바꾸기('임시변수를 질의 함수로 바꾸기'리팩토링)
class Order {
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice, this.discountLebel);
  }

  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }

  get discountLebel() {
    return this.quantity > 100 ? 2 : 1;
  }
}

// SETP2: STEP1 결과 discountLevel을 discountedPrice에 전달할 필요가 사라진다.
class Order {
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
    }
  }

  get discountLebel() {
    return this.quantity > 100 ? 2 : 1;
  }
}
