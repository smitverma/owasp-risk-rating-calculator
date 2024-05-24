function updateRes() {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1; i <= 8; i++) {
    leftSum += parseInt(document.getElementById("left" + i).value);
    rightSum += parseInt(document.getElementById("right" + i).value);
  }
  
  document.getElementById("leftProgText").textContent = (leftSum/8).toFixed(2).toString();
  document.getElementById("rightProgText").textContent = (rightSum/8).toFixed(2).toString();
  document.getElementById("riskProgText").textContent = (Math.round(((leftSum+rightSum)/16).toFixed(2) * 20) / 20).toString();

  const valueToColor = value => `rgb(${value * 2.83},${255 - value * 2.83 * 1.2},0)`;
  
  document.getElementById("leftProgCircle").style.stroke = valueToColor(leftSum);
  document.getElementById("rightProgCircle").style.stroke = valueToColor(rightSum);
  document.getElementById("riskProgCircle").style.stroke = valueToColor((leftSum+rightSum)/2);
  
  setProgress(((leftSum/8)*10), ((rightSum/8)*10));
}

const progressLeft = document.getElementById("leftProgCircle")
const progressRight = document.getElementById("rightProgCircle")
const progressRisk = document.getElementById("riskProgCircle")

function setProgress(percentLeft, percentRight) {
  
  const max = 90;
  const percentRisk = (percentLeft + percentRight) / 2
  
  const percentFinalLeft = (percentLeft/max) * 100;
  const circumferenceLeft = 2 * Math.PI * 65;
  const dashOffsetLeft = circumferenceLeft - (percentFinalLeft / 100) * circumferenceLeft;
  progressLeft.style.strokeDasharray = circumferenceLeft;
  progressLeft.style.strokeDashoffset = dashOffsetLeft;
  
  const percentFinalRight = (percentRight/max) * 100;
  const circumferenceRight = 2 * Math.PI * 65;
  const dashOffsetRight = circumferenceRight - (percentFinalRight / 100) * circumferenceRight;
  progressRight.style.strokeDasharray = circumferenceRight;
  progressRight.style.strokeDashoffset = dashOffsetRight;
  
  const percentFinalRisk = (percentRisk/max) * 100;
  const circumferenceRisk = 2 * Math.PI * 65;
  const dashOffsetRisk = circumferenceRisk - (percentFinalRisk / 100) * circumferenceRisk;
  progressRisk.style.strokeDasharray = circumferenceRisk;
  progressRisk.style.strokeDashoffset = dashOffsetRisk;
}

function resetLeft(){
  for (let i = 1; i <= 8; i++) {
    document.getElementById("left" + i).selectedIndex = 0;
    updateRes();
  }
}
function resetRight(){
  for (let i = 1; i <= 8; i++) {
    document.getElementById("right" + i).selectedIndex = 0;
    updateRes();
  }
}

updateRes();
