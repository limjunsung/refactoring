# 문장 슬라이드하기(Slide Statements)

- 관련된 코드들이 가까이 모여 있으면 이해하기가 더 쉽다.
- 코드 조각을 슬라이드할 때는 두 가지를 확인해야 한다.
  - 무엇을 슬라이드할 것인가?
    - 요소를 선언하는 곳과 사용하는 곳이 떨어져 있을 때이다(예. 변수를 처음 사용하는 곳 바로 위에 변수 선언을 한다).
    - 다른 리팩토링(예. 함수 추출하기)하기 전 관련 코드를 모을 때이다.
  - 슬라이드할 수 있는가?
    - 코드의 순서가 바뀌면 결과가 달라지는 지 확인한다.
    - 부수효과가 없는 코드(예. 변수 선언)는 마음 대로 재배치할 수 있지만, 부수효과가 있는 코드는 신중히 확인해봐야 한다.
    - 명령-질의 분리(Command-Query Separation) 원칙을 지키면 값을 반환하는 함수는 모두 부수효과가 없다.
