// STEP1: 함수를 클래스로 옮긴다.
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
  execute(candidate, medicalExam, scoringGuide) {
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
}

// SETP2: 함수 인수들을 생성자로 옮겨 execute() 메서드는 매개변수를 받지 않도록 한다.
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFalg = false;

    if (this._medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFalg = true;
    }

    let certificationGrade = "regular";
    if (
      this._scoringGuide.startWithLowCertification(this._candidate.originState)
    ) {
      certificationGrade = "low";
      result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}

// 추가적인 리팩터링: 함수 추출하기
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFalg = false;

    this.scoreSmoking();

    this._certificationGrade = "regular";
    if (
      this._scoringGuide.startWithLowCertification(this._candidate.originState)
    ) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFalg = true;
    }
  }
}
