"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//obtener área de un círculo
var circleArea = exports.circleArea = function circleArea(radio) {
  return Math.PI * Math.pow(radio, 2);
};

//obtener área de un cuadrado
var squareArea = exports.squareArea = function squareArea(lado) {
  return Math.pow(lado, 2);
};

//obtener área de un rectángulo
var rectangleArea = exports.rectangleArea = function rectangleArea(alto, base) {
  return alto * base;
};

//obtener área de un triángulo
var triangleArea = exports.triangleArea = function triangleArea(baseTriangle, altoTriangle) {
  return baseTriangle * altoTriangle / 2;
};

circleArea(8); // 100.53
rectangleArea(4, 8); // 32
squareArea(6); // 36
triangleArea(3, 9); //13.5