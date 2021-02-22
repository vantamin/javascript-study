'use strict';

var canvas = document.getElementById('canvas');
if (canvas.getContext) {
  var ctx = canvas.getContext('2d');

  ctx.fillRect(25, 25, 100, 100); // 색칠된 직사각형
  ctx.clearRect(45, 45, 60, 60); // 특정 부분을 지우는 직사각형
  ctx.strokeRect(50, 50, 50, 50); // 직사각형 윤곽선
}
