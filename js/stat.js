'use strict'; //нужно эту директиву также завершать точкой с запятой

function textInfa(ctx) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ееее победа !', 150, 30); //подвинул текст правее
  ctx.fillText('Список результатов:', 150, 50);
}


function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random()*(max - min + 1);
  rand = Math.round(rand);
  return rand;
}

function getRandomColor() {
  var r = randomInteger(0, 255);
  var g = randomInteger(0, 255);
  var b = randomInteger(0, 255);
  return 'rgba('+r+', '+g+', '+b+', 1)';
}

function setShadowParameters(ctx, newParameters) {
	ctx.shadowOffsetX = newParameters.offsetX;
	ctx.shadowOffsetY = newParameters.offsetY;
	ctx.shadowBlur = newParameters.shadowBlur;
}

function renderStatistics(ctx, names, times) {

var oldShadowParameters = {offsetX : ctx.shadowOffsetX,
					   	   offsetY : ctx.shadowOffsetY,
						   shadowBlur : ctx.shadowBlur};

setShadowParameters(ctx, {offsetX : 10,
						  offsetY : 10,
						  shadowBlur : 2});

ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';


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

setShadowParameters(ctx, oldShadowParameters);

//ctx.font = '16px PT Mono';
//ctx.fillStyle = 'black';
/*ctx.fillText('Ееее победа !', 150, 30); //подвинул текст правее
ctx.fillText('Список результатов:', 150, 50);
*/

 textInfa(ctx);
var max = -1;
for (var i = 0; i < times.length; i++) {
  if (times[i] > max) {
    max = times[i];
  }
}

var gistoHeight = [];
for (var j = 0; j < times.length; j++) {
	gistoHeight[j] = (150*times[j])/max;
    ctx.fillText(Math.round(times[j]), 150 + 90*j, 220 - gistoHeight[j]);   //добавил math.round
    ctx.fillText(names[j], 150 + 90*j, 260);

}

for (var j = 0; j < times.length; j++) {
  if (names[j] == 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }
  else {
    ctx.fillStyle = getRandomColor();
  }
  ctx.fillRect(150 + 90*j , 230 - gistoHeight[j], 40, gistoHeight[j]);
  }
}
