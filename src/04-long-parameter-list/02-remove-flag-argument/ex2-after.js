// 래핑 함수를 제공한다.
function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true);
}

function regularDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false);
}

// 기존의 deliveryDate 함수를 다른 곳에서는 사용하지 않도록 함수의 가시 범위를 제한하거나, 함수 이름을 예컨대 deliveryDateHelperOnly로 바꿔서 직접 호출하지 말라는 뜻을 명시한다.
