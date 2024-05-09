console.log("from script file");

// Selecionar os elementos HTML do stick man
var head = document.getElementById("head");
var body = document.getElementById("body");
var leftArm = document.getElementById("left-arm");
var rightArm = document.getElementById("right-arm");
var leftLeg = document.getElementById("left-leg");
var rightLeg = document.getElementById("right-leg");

// Definir as variáveis de movimento
var angle = 0; // ângulo de rotação dos braços e pernas
var speed = 0.1; // velocidade de rotação dos braços e pernas
var direction = 1; // direção do movimento horizontal
var step = 5; // passo do movimento horizontal

// Definir a função de animação
function animate() {
    // Atualizar o ângulo de rotação dos braços e pernas
    angle += speed;

    // Rotacionar os braços e pernas de acordo com o ângulo
    leftArm.style.transform = "rotate(" + (45 + Math.sin(angle) * 30) + "deg)";
    rightArm.style.transform = "rotate(" + (-45 - Math.sin(angle) * 30) + "deg)";
    leftLeg.style.transform = "rotate(" + (-15 + Math.sin(angle) * 15) + "deg)";
    rightLeg.style.transform = "rotate(" + (15 - Math.sin(angle) * 15) + "deg)";

    // Mover o stick man horizontalmente de acordo com a direção e o passo
    head.style.left = parseInt(head.style.left) + direction * step + "px";
    body.style.left = parseInt(body.style.left) + direction * step + "px";
    leftArm.style.left = parseInt(leftArm.style.left) + direction * step + "px";
    rightArm.style.left = parseInt(rightArm.style.left) + direction * step + "px";
    leftLeg.style.left = parseInt(leftLeg.style.left) + direction * step + "px";
    rightLeg.style.left = parseInt(rightLeg.style.left) + direction * step + "px";

    // Verificar se o stick man chegou na borda da tela e mudar a direção
    if (parseInt(head.style.left) < 0 || parseInt(head.style.left) > 300) {
        direction *= -1;
    }

    // Repetir a animação a cada 100 milissegundos
    setTimeout(animate, 100);
}

// Iniciar a animação
animate();