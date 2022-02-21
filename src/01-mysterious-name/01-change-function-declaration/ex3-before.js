/*
매개변수를 속성으로 바꾸기

고객이 뉴일글랜드에 살고 있는지 확인하는 함수가 있다. inNewEngland() 함수는 고객이 거주하는 주 이름을 보고 뉴잉글랜드에 사는지 판단한다. 이 함수를 고객에 대한 의존성을 제거되어 더 넓은 문맥에 활용될 수 있도록, 주(state) 식별 코드를 매개변수로 받도록 리팩토링하라.

* 뉴잉글랜드: 미국 북동부 지역으로 메인주(MA), 코네티컷주(CT), 메사추세츠주(ME), 버몬트주(VT), 뉴햄프셔주(NH), 로드아일랜드주(RI)의 총 6개 주로 이루어져 있다.
*/

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

let someCustomers = [
  {
    address: {
      state: "MA",
    },
  },
];

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
