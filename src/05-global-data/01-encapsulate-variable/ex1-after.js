import { defaultOwner, setDefaultOwner } from "./defaultOwner";
spaceship.owner = defaultOwner();

// 갱신 코드
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
