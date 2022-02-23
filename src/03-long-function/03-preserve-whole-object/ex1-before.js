// 난방 계획 클래스
class HeatingPlan {
  constructor(min, max) {
    this._temperatureRange = { low: min, high: max };
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}

// 호출
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (!AnimationPlaybackEvent.withinRange(low, high))
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");
