function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
// definindo variáveis globais
 let jardineiro;
 let plantas = []
 let temperatura = 10;
 let totalArvores = 0;
  function setup() {
    createCanvas(600, 400);
   jardineiro = new Jardineiro(width / 2, height - 50);
  }
