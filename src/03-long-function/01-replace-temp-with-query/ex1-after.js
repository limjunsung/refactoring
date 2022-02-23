// STEP 1: 임시 변수인 basePrice 변수를 읽기 전용으로 만들고, 우변을 게터로 추출한다.
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const basePrice = this.basePrice;
    var discountFactor = 0.98;

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }
}

// STEP 2: basePrice 변수를 인라인한다.
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    var discountFactor = 0.98;

    if (this.basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }
}

// STEP 3: 임시 변수인 discountFactor도 마찬가지로 진행한다.
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    var discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}
