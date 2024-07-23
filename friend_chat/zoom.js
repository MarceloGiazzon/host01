// Define the zoom factor and maximum/minimum scale
const zoomFactor = 0.1;
const maxScale = 2;
const minScale = 0.5;

// Get the SVG element
const svg = document.querySelector('svg');

// Initialize the default zoom
svg.style.transform = 'scale(1)';

let isPanning = false;
let panStartX = 0;
let panStartY = 0;
let panTranslateX = 0;
let panTranslateY = 0;

// Add event listeners for mouse down, mouse move, and mouse up events
svg.addEventListener('mousedown', handleMouseDown);
svg.addEventListener('mousemove', handleMouseMove);
svg.addEventListener('mouseup', handleMouseUp);

// Add event listener for the 'wheel' event
svg.addEventListener('wheel', handleMouseWheel);

function handleMouseDown(event) {
  if (event.button === 0) {
    isPanning = true;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panTranslateX = panTranslateY = 0;
  }
}

function handleMouseMove(event) {
  if (isPanning) {
    const dx = event.clientX - panStartX;
    const dy = event.clientY - panStartY;
    panTranslateX += dx;
    panTranslateY += dy;
    svg.style.transform = `scale(${getCurrentScale()}) translate(${panTranslateX}px, ${panTranslateY}px)`;
    panStartX = event.clientX;
    panStartY = event.clientY;
  }
}

function handleMouseUp(event) {
  if (event.button === 0) {
    isPanning = false;
  }
}

function handleMouseWheel(event) {
  event.preventDefault();
  const scaleDelta = event.deltaY > 0 ? -zoomFactor : zoomFactor;
  const currentScale = getCurrentScale();
  const newScale = currentScale + scaleDelta;
  if (newScale >= minScale && newScale <= maxScale) {
    svg.style.transform = `scale(${newScale}) translate(${panTranslateX}px, ${panTranslateY}px)`;
  }
}

function getCurrentScale() {
  const currentTransform = svg.style.transform;
  const scaleRegex = /scale\((.+?)\)/;
  const match = scaleRegex.exec(currentTransform);
  return match ? parseFloat(match[1]) : 1;
}



function Calculo() {
    var Count = 0;
    var Fator = 0.01;
    var FatorDia = 1.01;
  
    var ValTotCalc = 0;
    var ValConcedido = 100000;
  
    var Col_valpre = [];
    var Col_NumeroDias = [100, 200, 300, 400, 500];
  
    // Cálculo do valor para cada elemento da coleção
    var valorInicial = (ValConcedido * 1.5) / Col_NumeroDias.length;
    for (var i = 0; i < Col_NumeroDias.length; i++) {
      Col_valpre.push(valorInicial);
    }
  
    while (Count < 100000) {
      var ValCalAnt = ValTotCalc;
      var ValDifAnt = ValTotCalc - ValConcedido;
      var X = 1;
      var SubTot = 0;
  
      for (var i = 0; i < Col_valpre.length; i++) {
        var AuxValor = Col_valpre[i];
        var Desc = Math.round(AuxValor - AuxValor / (Math.pow(FatorDia, Col_NumeroDias[X])), 8);
        SubTot += Math.round(AuxValor - Desc, 8);
        X += 1;
      }
  
      ValTotCalc = Math.round(SubTot, 8);
  
      if (ValTotCalc === ValConcedido) {
        ValTotCalc = ValConcedido;
        break;
      } else {
        if (ValTotCalc > ValConcedido) {
          FatorDia += Fator;
        } else {
          if (Fator !== 0.0000000001) {
            FatorDia = FatorDia - Fator;
            Fator = Fator / 10;
            FatorDia = FatorDia + Fator;
          } else {
            ValDif = ValTotCalc - ValConcedido;
            break;
          }
        }
      }
      Count += 1;
    }
  
    ValTotCalc = Math.round(ValTotCalc, 2);
    var Tir = Math.round(((Math.pow(FatorDia, 30) - 1) * 100), 8);
    var TirAno = Math.round(((Math.pow(FatorDia, 365) - 1) * 100), 8);
  
    console.log("ValTotCalc:", ValTotCalc);
    console.log("Tir:", Tir);
    console.log("TirAno:", TirAno);
  }
  
  // Chamada da função para testar
  Calculo();