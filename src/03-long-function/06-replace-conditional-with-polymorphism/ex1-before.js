// 다양한 새를 키우는 친구가 있는데, 새의 종에 따른 비행 속도와 깃털 상태를 알고 싶어 한다.

// 깃털 종류를 알려주는 함수
function plumages(birds) {
  return new Map(birds.map(birds.map((b) => [b.name, plumage(b)])));
}

// 비행 속도를 알려주는 함수
function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return "보통이다";
    case "아프리카 제비":
      return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
    case "노르웨이 파랑 앵무":
      return bird.voltage > 100 ? "그을렸다" : "예쁘다";
    default:
      return "알 수 없다";
  }
}

function airSpeedVelocity(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return 35;
    case "아프리카 제비":
      return 40 - 2 * bird.numberOfCoconuts;
    case "노르웨이 파랑 앵무":
      return bird.isNailed ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
  }
}