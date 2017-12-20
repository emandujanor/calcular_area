const expect = require("chai").expect
const calcular = require("..")

describe('calcular', function (){
  it ('Para un círculo de radio 8 devuelve 201.06192982974676', function (){
    const area = calcular.circleArea(8)
    expect(area).to.equal(201.06192982974676)
  })
  it ('Para un rectángulo con altura 4 y base 8 devuelve 32', function (){
    const area = calcular.rectangleArea(4,8)
    expect(area).to.equal(32)
  })
  it ('Para un cuadrado cuyos lados miden 6 devuelve 36', function (){
    const area = calcular.squareArea(6)
    expect(area).to.equal(36)
  })
  it ('Para un triangulo con base 3 y altuta 9 devuelve 13.5', function (){
    const area = calcular.triangleArea(3, 9)
    expect(area).to.equal(13.5)
  })

})
