// STEP1: airSpeedVolocity()와 plumage()를 Bird 클래스로 묶는다.
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  getPlumage() {
    switch (this.type) {
      case "유럽 제비":
        return "보통이다";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알 수 없다";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}
function plumages(birds) {
  return new Map(birds.map(birds.map((b) => [b.name, plumage(b)])));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity;
}

// STEP2: 종별 서브클래스를 만든다. 적합한 서브클래스의 인스턴스를 만들어줄 팩터리 함수를 만든다.
function createBird(bird) {
  switch (this.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {}
class AfricanSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  getPlumage() {
    switch (this.type) {
      case "유럽 제비":
        return "보통이다";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알 수 없다";
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}
function plumages(birds) {
  return new Map(birds.map(birds.map((b) => [b.name, plumage(b)])));
}

function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

// STEP3: 각 서브클래스에서 airSpeedVolocity()와 plumage() 메서드를 오버라이드한다.
function createBird(bird) {
  switch (this.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "보통이다";
  }

  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  getPlumage() {
    return "알 수 없다";
  }

  get airSpeedVelocity() {
    return null;
  }
}

function plumages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
}

// 추가: 슈퍼클래스인 Bird는 없어도 괜찮다. 자바스크립트에서는 타입 계층 구조 없이도 다형성을 표현할 수 있다. 객체가 적절한 이름의 메서드만 구현하고 있다면 아무 문제없이 같은 타입으로 취급하기 때문이다(이를 덕 타이핑(duck typing)이라 한다). 하지만 이 예에서는 슈퍼클래스가 클래스들의 관계를 잘 설명해주기 때문에 그대로 두는 것이 낫다.
function createBird(bird) {
  switch (this.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return null;
  }
}

class EuropeanSwallow {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return "보통이다";
  }

  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

function plumages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
}
