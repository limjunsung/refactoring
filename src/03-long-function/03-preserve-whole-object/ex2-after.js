// 난방 계획 클래스
class HeatingPlan {
  constructor(min, max) {
    this._temperatureRange = { low: min, high: max };
  }

  withinRange(aNumberRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}

// 호출
if (!AnimationPlaybackEvent.withinRange(aRoom.daysTempRange))
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");
