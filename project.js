var gl;
var canvas;
var program;

var vertices;
var vertexColors;

var translateOffsets;
var expandThetaOffset;
var colorOffsets;

var xScale;
var yScale;

var xTranslate;
var yTranslate;
var translateSpeed;
var translateSpeedOffset;
var translateXYOffset;

var xExpand;
var yExpand;
var xExpandSpeed;
var yExpandSpeed;
var expandXYOffset;

var gTranslate;
var bTranslate;
var colorSpeed;
var bColorSpeedOffset;

var xTranslateLoc;
var yTranslateLoc;
var translateSpeedLoc;
var translateSpeedOffsetLoc;
var translateXYOffsetLoc;

var xExpandLoc;
var yExpandLoc;
var xExpandSpeedLoc;
var yExpandSpeedLoc;
var expandXYOffsetLoc;

var gTranslateLoc;
var bTranslateLoc;
var colorSpeedLoc;
var bColorSpeedOffsetLoc;

var translateThetaOffset;
var expandThetaOffset;
var colorThetaOffset;

var theta = 0.0;
var thetaSpeed;
var thetaLoc;

var running = false;

const moveArray = (arr, xOffset, yOffset) => {
    var movedArr = [];
    arr.forEach((element) => {
        var movedVec = [];
        movedVec.push(element[0] + xOffset);
        movedVec.push(element[1] + yOffset);
        movedArr.push(movedVec);
    });
    return movedArr;
};

const scaleArray = (arr, xScale, yScale) => {
    var scaledArr = [];
    arr.forEach((element) => {
        var scaledVec = [];
        scaledVec.push(element[0] * xScale);
        scaledVec.push(element[1] * yScale);
        scaledArr.push(scaledVec);
    });
    return scaledArr;
};

const getColors = (arr) => {
    var colorArray = [];
    arr.forEach((element) => {
        color = new vec4(
            0.0,
            0.4 + Math.random() * 0.2,
            0.4 + Math.random() * 0.2,
            1.0
        )
        colorArray.push(color);
    });
    return colorArray;
};

const getThetas = (arr, angle) => {
    var thetaArray = [];
    var offset = 0.0
    arr.forEach((element) => {
        thetaArray.push(offset);
        offset += angle;
    });
    return thetaArray;
};

const getArray = (input) => {
    var arr = [];
    var lineOffset = 0;
    var xOffset = 0;
    var yOffset = 1;

    for (var i = 0; i < input.length; ++i) {
        if (lineOffset == 0) { yOffset -= 7; }

        var char = input[i];
        var letter = [];

        switch (char) {
            case ' ':
                letter = SPACE;
                break;
            case 'a':
                letter = A;
                break;
            case 'A':
                letter = A;
                break;
            case 's':
                letter = S;
                break;
            case 'S':
                letter = S;
                break;
            case 'd':
                letter = D;
                break;
            case 'D':
                letter = D;
                break;
            case 'f':
                letter = F;
                break;
            case 'F':
                letter = F;
                break;
            default:
                letter = D;
                console.log("default");
        }

        letter = moveArray(letter, lineOffset, yOffset);
        arr.push(...letter);

        lineOffset += 5;
        if (lineOffset >= 45) {
            xOffset = lineOffset;
            lineOffset = 0;
        }
    }

    if (xOffset < lineOffset) { xOffset = lineOffset; }
    xOffset -= 1;

    arr = moveArray(arr, -xOffset / 2, -yOffset / 2)
    if (xOffset > 19) {
        xScale = 1.9 / xOffset;
        if (yOffset < -xOffset) {
            yScale = -1.9 / yOffset;
        } else {
            yScale = 1.9 / xOffset;
        }
    } else {
        xScale = 0.1;
        yScale = 0.1;
    }
    arr = scaleArray(arr, xScale, yScale);
    return arr;
}


function handleXTranslate(e) {
    xTranslate = parseFloat(e.target.value);
    gl.uniform1f(xTranslateLoc, xTranslate);
}

function handleYTranslate(e) {
    yTranslate = parseFloat(e.target.value);
    gl.uniform1f(yTranslateLoc, yTranslate);
}

function handleTranslateSpeed(e) {
    translateSpeed = parseFloat(e.target.value);
    gl.uniform1f(translateSpeedLoc, translateSpeed);
}

function handleTranslateSpeedOffset(e) {
    translateSpeedOffset = parseFloat(e.target.value);
    gl.uniform1f(translateSpeedOffsetLoc, translateSpeedOffset);
}

function handleTranslateXYOffset(e) {
    translateXYOffset = parseFloat(e.target.value);
    gl.uniform1f(translateXYOffsetLoc, translateXYOffset);
}


function handleXExpand(e) {
    xExpand = parseFloat(e.target.value);
    gl.uniform1f(xExpandLoc, xExpand);
}

function handleYExpand(e) {
    yExpand = parseFloat(e.target.value);
    gl.uniform1f(yExpandLoc, yExpand);
}

function handleExpandSpeed(e) {
    expandSpeed = parseFloat(e.target.value);
    gl.uniform1f(expandSpeedLoc, expandSpeed);
}

function handleExpandSpeedOffset(e) {
    expandSpeedOffset = parseFloat(e.target.value);
    gl.uniform1f(expandSpeedOffsetLoc, expandSpeedOffset);
}

function handleExpandXYOffset(e) {
    expandXYOffset = parseFloat(e.target.value);
    gl.uniform1f(expandXYOffsetLoc, expandXYOffset);
}


function handleGTranslate(e) {
    gTranslate = parseFloat(e.target.value);
    gl.uniform1f(gTranslateLoc, gTranslate);
}

function handleBTranslate(e) {
    bTranslate = parseFloat(e.target.value);
    gl.uniform1f(bTranslateLoc, bTranslate);
}

function handleColorSpeed(e) {
    colorSpeed = parseFloat(e.target.value);
    gl.uniform1f(colorSpeedLoc, colorSpeed);
}

function handleBColorSpeedOffset(e) {
    bColorSpeedOffset = parseFloat(e.target.value);
    gl.uniform1f(bColorSpeedOffsetLoc, bColorSpeedOffset);
}


function handleTranslateThetaOffset(e) {
    translateThetaOffset = parseFloat(e.target.value);
    handleInput();
}

function handleExpandThetaOffset(e) {
    expandThetaOffset = parseFloat(e.target.value);
    handleInput();
}

function handleColorThetaOffset(e) {
    colorThetaOffset = parseFloat(e.target.value);
    handleInput();
}


function handleThetaSpeed(e) {
    thetaSpeed = parseFloat(e.target.value);
}


function handleText(e) {
    vertices = getArray(e.target.value);
    handleInput();
}


function handleInput() {
    vertexColors = getColors(vertices);

    translateOffsets = getThetas(vertices, translateThetaOffset);
    expandOffsets = getThetas(vertices, expandThetaOffset);
    colorOffsets = getThetas(vertices, colorThetaOffset);

    gl.uniform1f(xScaleLoc, xScale);
    gl.uniform1f(yScaleLoc, yScale);

    // Colors
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);
    var vColor = gl.getAttribLocation(program, 'vColor');
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    // Vertices
    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    // Translate theta offsets
    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(translateOffsets), gl.STATIC_DRAW);
    var vTranslateOffset = gl.getAttribLocation(program, 'vTranslateOffset');
    gl.vertexAttribPointer(vTranslateOffset, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vTranslateOffset);

    // Expand theta offsets
    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(expandOffsets), gl.STATIC_DRAW);
    var vExpandOffset = gl.getAttribLocation(program, 'vExpandOffset');
    gl.vertexAttribPointer(vExpandOffset, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vExpandOffset);

    // Color theta offsets
    var bufferID = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(colorOffsets), gl.STATIC_DRAW);
    var vColorOffset = gl.getAttribLocation(program, 'vColorOffset');
    gl.vertexAttribPointer(vColorOffset, 1, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColorOffset);

    // Render
    if (!running) {
        running = true;
        render();
    }
}

function setup() {
    canvas = document.getElementById('gl-canvas');
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert('WebGL unavailable'); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    program = initShaders(gl, 'vertex-shader', 'fragment-shader');
    gl.useProgram(program);

    xScaleLoc = gl.getUniformLocation(program, "xScale");
    yScaleLoc = gl.getUniformLocation(program, "yScale");

    xTranslateLoc = gl.getUniformLocation(program, "xTranslate");
    yTranslateLoc = gl.getUniformLocation(program, "yTranslate");
    translateSpeedLoc = gl.getUniformLocation(program, "translateSpeed");
    translateSpeedOffsetLoc = gl.getUniformLocation(program, "translateSpeedOffset");
    translateXYOffsetLoc = gl.getUniformLocation(program, "translateXYOffset");

    xExpandLoc = gl.getUniformLocation(program, "xExpand");
    yExpandLoc = gl.getUniformLocation(program, "yExpand");
    expandSpeedLoc = gl.getUniformLocation(program, "expandSpeed");
    expandSpeedOffsetLoc = gl.getUniformLocation(program, "expandSpeedOffset");
    expandXYOffsetLoc = gl.getUniformLocation(program, "expandXYOffset");

    gTranslateLoc = gl.getUniformLocation(program, "gTranslate");
    bTranslateLoc = gl.getUniformLocation(program, "bTranslate");
    colorSpeedLoc = gl.getUniformLocation(program, "colorSpeed");
    bColorSpeedOffsetLoc = gl.getUniformLocation(program, "bColorSpeedOffset");

    thetaLoc = gl.getUniformLocation(program, "theta");

    gl.uniform1f(xTranslateLoc, xTranslate);
    gl.uniform1f(yTranslateLoc, yTranslate);
    gl.uniform1f(translateSpeedLoc, translateSpeed);
    gl.uniform1f(translateSpeedOffsetLoc, translateSpeedOffset);
    gl.uniform1f(translateXYOffsetLoc, translateXYOffset);

    gl.uniform1f(xExpandLoc, xExpand);
    gl.uniform1f(yExpandLoc, yExpand);
    gl.uniform1f(expandSpeedLoc, expandSpeed);
    gl.uniform1f(expandSpeedOffsetLoc, expandSpeedOffset);
    gl.uniform1f(expandXYOffsetLoc, expandXYOffset);

    gl.uniform1f(gTranslateLoc, gTranslate);
    gl.uniform1f(bTranslateLoc, bTranslate);
    gl.uniform1f(colorSpeedLoc, colorSpeed);
    gl.uniform1f(bColorSpeedOffsetLoc, bColorSpeedOffset);
}

window.onload = function init() {
    const text = document.getElementById('input-text');
    text.oninput = handleText;

    const xTranslateRange = document.getElementById('xTranslateRange');
    xTranslateRange.oninput = handleXTranslate;
    const yTranslateRange = document.getElementById('yTranslateRange');
    yTranslateRange.oninput = handleYTranslate;
    const translateSpeedRange = document.getElementById('translateSpeedRange');
    translateSpeedRange.oninput = handleTranslateSpeed;
    const translateSpeedOffsetRange = document.getElementById('translateSpeedOffsetRange');
    translateSpeedOffsetRange.oninput = handleTranslateSpeedOffset;
    const translateXYOffsetRange = document.getElementById('translateXYOffsetRange');
    translateXYOffsetRange.oninput = handleTranslateXYOffset;
    const translateThetaOffsetRange = document.getElementById('translateThetaOffsetRange');
    translateThetaOffsetRange.oninput = handleTranslateThetaOffset;

    const xExpandRange = document.getElementById('xExpandRange');
    xExpandRange.oninput = handleXExpand;
    const yExpandRange = document.getElementById('yExpandRange');
    yExpandRange.oninput = handleYExpand;
    const expandSpeedRange = document.getElementById('expandSpeedRange');
    expandSpeedRange.oninput = handleExpandSpeed;
    const expandSpeedOffsetRange = document.getElementById('expandSpeedOffsetRange');
    expandSpeedOffsetRange.oninput = handleExpandSpeedOffset;
    const expandOffsetXYRange = document.getElementById('expandXYOffsetRange');
    expandOffsetXYRange.oninput = handleExpandXYOffset;
    const expandThetaOffsetRange = document.getElementById('expandThetaOffsetRange');
    expandThetaOffsetRange.oninput = handleExpandThetaOffset;

    const gTranslateRange = document.getElementById('gTranslateRange');
    gTranslateRange.oninput = handleGTranslate;
    const bTranslateRange = document.getElementById('bTranslateRange');
    bTranslateRange.oninput = handleBTranslate;
    const colorSpeedRange = document.getElementById('colorSpeedRange');
    colorSpeedRange.oninput = handleColorSpeed;
    const bColorSpeedOffsetRange = document.getElementById('bColorSpeedOffsetRange');
    bColorSpeedOffsetRange.oninput = handleBColorSpeedOffset;
    const colorThetaOffsetRange = document.getElementById('colorThetaOffsetRange');
    colorThetaOffsetRange.oninput = handleColorThetaOffset;

    const thetaSpeedRange = document.getElementById('thetaSpeedRange');
    thetaSpeedRange.oninput = handleThetaSpeed;

    xTranslate = parseFloat(xTranslateRange.value);
    yTranslate = parseFloat(yTranslateRange.value);
    translateSpeed = parseFloat(translateSpeedRange.value);
    translateSpeedOffset = parseFloat(translateSpeedOffsetRange.value);
    translateXYOffset = parseFloat(translateXYOffsetRange.value);
    translateThetaOffset = parseFloat(translateThetaOffsetRange.value);

    xExpand = parseFloat(xExpandRange.value);
    yExpand = parseFloat(yExpandRange.value);
    expandSpeed = parseFloat(expandSpeedRange.value);
    expandSpeedOffset = parseFloat(expandSpeedOffsetRange.value);
    expandXYOffset = parseFloat(expandOffsetXYRange.value);
    expandThetaOffset = parseFloat(expandThetaOffsetRange.value);

    gTranslate = parseFloat(gTranslateRange.value);
    bTranslate = parseFloat(bTranslateRange.value);
    colorSpeed = parseFloat(colorSpeedRange.value);
    bColorSpeedOffset = parseFloat(bColorSpeedOffsetRange.value);
    colorThetaOffset = parseFloat(colorThetaOffsetRange.value);

    thetaSpeed = parseFloat(thetaSpeedRange.value);

    setup();
};

function render() {
    theta += thetaSpeed;
    gl.uniform1f(thetaLoc, theta);

    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length);
    requestAnimFrame(render);
}