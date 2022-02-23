// STEP1: 반복문 쪼깨기
let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;

for (const p of people) {
  if (p.age < youngest) youngest = p.age;
}

for (const p of people) {
  totalSalary += p.salary;
}

return `최연소: ${youngest}, 총 급여: ${totalSalary}`;

// SETP2: 문장 슬라이드하기
let youngest = people[0] ? people[0].age : Infinity;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
}

let totalSalary = 0;
for (const p of people) {
  totalSalary += p.salary;
}

return `최연소: ${youngest}, 총 급여: ${totalSalary}`;

// SETP3: 반복문을 함수로 추출하기
return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;

function totalSalary() {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}
