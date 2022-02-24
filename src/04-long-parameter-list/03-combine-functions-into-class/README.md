# 여러 함수를 클래스로 묶기(Combine Functions into Class)

- 나는 (흔히 함수 호출 시 인수로 전달되는) 공통 데이터를 중심으로 긴밀하게 엮여 작동하는 함수 무리를 발견하면 클래스 하나로 묶어 싶어진다.
- 클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고, 각 함수에 전달되는 인수를 줄여서 객체 안에서의 함수 호출을 간결하게 만들 수 있다.