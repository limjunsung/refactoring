# 플래그 인수 제거하기(Remove Flag Argument)

- 플래그 인수(flag argument)란 호출되는 함수가 그 인수를 가지고 **함수 내부에서 제어 흐름을 결정하는 데 사용**되는 인수이다.
- 플래그 인수가 있으면 함수의 기능 차이가 잘 드러나지 않는다.
- 원하는 기능을 수행하기 위해 함수에 플래그 인수로 어떤 값을 넘겨야 하는지를 알아내야 한다.
- 하나의 함수에서 플래그 인수를 두 개 이상 사용한다면 함수 하나가 너무 많은 일을 처리하고 있다는 신호이기도 하다. 같은 로직을 조합해내는 더 간단한 함수를 만들 방법을 고민해봐야 한다.

플래그 인수 사용 예시

```javascript
function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    // 프리미엄 예약용 로직
  } else {
    // 일반 예약용 로직
  }
}

// 호출
bookConcert(aCustomer, true); // 플래그 인수가 Bool 인 경우
bookConcert(aCustomer, CustomerType.PREMIUM); // 플래그 인수가 열거형인 경우
bookConcert(aCustomer, "premium"); // 플래그 인수가 String인 경우
```

플래그 인수를 제거

```javascript
function bookConcert(aCustomer) {}
function premiumBookConcert(aCustomer) {}

bookConsert(aCustomer);
premiumBookConsert(aCustomer);
```
