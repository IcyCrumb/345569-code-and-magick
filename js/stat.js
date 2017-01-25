'use strict';

function getMax(times) {
  var max = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
}

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random()*(max - min + 1);
  rand = Math.round(rand);
  return rand;
}

function getRandomColor() {
  var r = 0;
  var g = 0;
  var b = randomInteger(0, 255);
  var a = Math.random();
  return 'rgba('+r+', '+g+', '+b+', '+a+')';
}

function setShadowParameters(ctx, newParameters) {
	ctx.shadowOffsetX = newParameters.offsetX;
	ctx.shadowOffsetY = newParameters.offsetY;
	ctx.shadowBlur = newParameters.shadowBlur;
}

function drawCloud(ctx) {
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(310, 0);
  ctx.lineTo(520, 10);
  ctx.lineTo(530, 145);
  ctx.lineTo(520, 280);
  ctx.lineTo(310, 290);
  ctx.lineTo(100, 280);
  ctx.lineTo(90, 145);
  ctx.lineTo(100, 10);
  ctx.fillStyle = 'white';
  ctx.fill();
}

function fillTextInformation(ctx, times, names, gistoHeight) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ееее победа !', 150, 30);
  ctx.fillText('Список результатов:', 150, 50);

  for (var j = 0; j < times.length; j++) {
      ctx.fillText(parseInt(times[j]), 150 + 90*j, 220 - gistoHeight[j]);
      ctx.fillText(names[j], 150 + 90*j, 260);
  }
}

function drawGistogram(ctx, times, names, gistoHeight) {
  for (var j = 0; j < times.length; j++) {
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(150 + 90*j , 230 - gistoHeight[j], 40, gistoHeight[j]);
  }
}


function renderStatistics(ctx, names, times) {
  var oldShadowParameters = {offsetX : ctx.shadowOffsetX,
  					   	             offsetY : ctx.shadowOffsetY,
  						               shadowBlur : ctx.shadowBlur};

  setShadowParameters(ctx, {offsetX : 10,
  						              offsetY : 10,
  						              shadowBlur : 2});

  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';

  drawCloud(ctx);
  setShadowParameters(ctx, oldShadowParameters);

  var gistoHeight = [];
    for (var j = 0; j < times.length; j++) {
      gistoHeight[j] = (150*times[j])/getMax(times);
    }
  fillTextInformation(ctx, times, names, gistoHeight);
  drawGistogram(ctx, times, names, gistoHeight);
}
