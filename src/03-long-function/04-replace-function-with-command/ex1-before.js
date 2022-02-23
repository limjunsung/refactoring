// 건강보험 애플리케이션에서 사용하는 점수 계산 함수
function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFalg = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFalg = true;
  }

  let certificationGrade = "regular";
  if (scoringGuide.startWithLowCertification(candidate.originState)) {
    certificationGrade = "low";
    result -= 5;
  }
  // 비슷한 코드가 한참 이어짐
  result -= Math.max(healthLevel - 5, 0);
  return result;
}
