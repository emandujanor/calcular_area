//obtener área de un círculo
const circleArea = (radio) => Math.PI * Math.pow(radio, 2);

//obtener área de un cuadrado
const squareArea = (lado) => Math.pow(lado, 2);

//obtener área de un rectángulo
const rectangleArea = (alto,base) => alto * base;

//obtener área de un triángulo
const triangleArea = (baseTriangle, altoTriangle) => baseTriangle * altoTriangle / 2


/*circleArea(8);// 201.06192982974676
rectangleArea(4,8);// 32
squareArea(6);// 36
triangleArea(3, 9); //13.5*/
export{
  circleArea,
  squareArea,
  rectangleArea,
  triangleArea
}
