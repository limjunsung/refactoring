// 여름철이면 할인율이 달라지는 어떤 서비스의 요금을 계산
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
  charge = quantity * plan.summerRate;
else charge = quantity * plan.summerRate + plan.reqularServiceCharge;
