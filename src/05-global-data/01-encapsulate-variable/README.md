# 변수 캡슐화하기(Encapsulate Variable)

- 함수는 데이터보다 다루기가 수월하다.
- 반대로 데이터는 함수보다 다루기가 까다롭다. 짧은 함수 안의 임시 변수처럼 유효범위가 아주 좁은 데이터는 어려울 게 없지만, 유효범위가 넓어질수록 다루기 어려워진다. 전역 데이터가 골칫거리인 이유도 바로 여기에 있다.
- 접근할 수 있는 범위가 넓은 데이터를 옮길 때는 먼저 그 데이터로의 접근을 독접하는 함수를 만드는 식으로 캡슐화하는 것이 가장 좋은 방법일 때가 많다.
- 나는 유효범위가 함수 하나보다 넓은 가변 데이터는 모두 이런 식으로 캡슐화해서 그 함수를 통해서만 접근하게 만드는 습관이 있다.
- 불변 데이터는 가변 데이터보다 캡슐화할 이유가 적다. 불변성은 강력한 방부제이다.