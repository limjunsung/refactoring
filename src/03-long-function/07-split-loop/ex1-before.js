// 전체 급여와 가장 어른 나이를 계산
let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
  totalSalary += p.salary;
}

return `최연소: ${youngest}, 총 급여: ${totalSalary}`;