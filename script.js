function triangle(trSide1, trSide2, trSide3) {
    const side1 = Number(trSide1)
    const side2 = Number(trSide2)
    const side3 = Number(trSide3)
    let s = (side1 + side2 + side3)/2
    let val = s * (s - side1) * (s - side2) * (s - side3)
    let result= Math.sqrt(val)
    triResult.innerHTML = `Area of the Triangle is ${result.toFixed(2)} cm<sup>2</sup>`
}

function circle(crRadius) {
    let result = Math.PI * Number(crRadius) * Number(crRadius)
    cirResult.innerHTML = `Area of the Circle is ${result.toFixed(2)} cm<sup>2<sup>`
}

function square(sqSide) {
    let result =  Number(sqSide) * Number(sqSide)
    squResult.innerHTML = `Area of the Square is ${result.toFixed(2)} cm<sup>2</sup>`
}

function rectangle(rcSide1, rcSide2) {
    let result =  Number(rcSide1) * Number(rcSide2)
    recResult.innerHTML = `Area of the Rectangle is ${result.toFixed(2)} cm<sup>2</sup>`
}

function showTriangle() {
    document.getElementById('traiangle-calculator').style.display='block';
    document.getElementById('circle-calculator').style.display='none';
    document.getElementById('square-calculator').style.display='none';
    document.getElementById('rectangle-calculator').style.display='none';
}

function showCircle() {
    document.getElementById('traiangle-calculator').style.display='none';
    document.getElementById('circle-calculator').style.display='block';
    document.getElementById('square-calculator').style.display='none';
    document.getElementById('rectangle-calculator').style.display='none';
}

function showSquare() {
    document.getElementById('traiangle-calculator').style.display='none';
    document.getElementById('circle-calculator').style.display='none';
    document.getElementById('square-calculator').style.display='block';
    document.getElementById('rectangle-calculator').style.display='none';
}

function showRectangle() {
    document.getElementById('traiangle-calculator').style.display='none';
    document.getElementById('circle-calculator').style.display='none';
    document.getElementById('square-calculator').style.display='none';
    document.getElementById('rectangle-calculator').style.display='block';
}