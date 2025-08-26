const spans = document.querySelectorAll('.text-container span');
const colorInputs = document.querySelectorAll('.color-box');
const colorOutput = document.getElementById('color-output');

function updateColors() {
    let output = '';
    
    // BACKGROUND
    let colorBackground = colorInputs[0].value;
    document.getElementsByClassName('text-container')[0].style.backgroundColor = colorBackground;
    for (let item of document.getElementsByClassName('colorH1')) {
        item.style.color = colorBackground;
    }
    for (let item of document.getElementsByClassName('colorH2')) {
        item.style.color = colorBackground;
    }
    output += `<BACKGROUND value = "${colorBackground.slice(1).toUpperCase()}" />\n`;

    // FOREGROUND
    let colorForeground = colorInputs[1].value;
    document.getElementsByClassName('text-container')[0].style.color = colorForeground;
    output += `<FOREGROUND value = "${colorForeground.slice(1).toUpperCase()}" />\n`;

    // BORDER
    let colorBorder = colorInputs[2].value;
    document.getElementsByClassName('colorBorder')[0].style.borderColor = colorBorder;
    output += `<BORDER value = "${colorBorder.slice(1).toUpperCase()}" />\n`;

    // HICOLOR1
    let colorH1 = colorInputs[3].value;
    for (let item of document.getElementsByClassName('colorH1')) {
        item.style.backgroundColor = colorH1
    }
    output += `<HICOLOR1 value = "${colorH1.slice(1).toUpperCase()}" />\n`;

    // HICOLOR2
    let colorH2 = colorInputs[4].value;
    for (let item of document.getElementsByClassName('colorH2')) {
        item.style.backgroundColor = colorH2
    }
    output += `<HICOLOR2 value = "${colorH2.slice(1).toUpperCase()}" />\n`;

    // CURSOR
    let colorCursor = colorInputs[5].value;
    for (let item of document.getElementsByClassName('colorCursor')) {
        item.style.color = colorCursor
    }
    output += `<CURSORCOLOR value = "${colorCursor.slice(1).toUpperCase()}" />\n`;

    // PLAYCOLOR
    let colorPlay = colorInputs[6].value;
    for (let item of document.getElementsByClassName('colorPlay')) {
        item.style.color = colorPlay
    }
    output += `<PLAYCOLOR value = "${colorPlay.slice(1).toUpperCase()}" />\n`;

    // MUTECOLOR
    let colorMute = colorInputs[7].value;
    for (let item of document.getElementsByClassName('colorMute')) {
        item.style.color = colorPlay
    }
    output += `<MUTECOLOR value = "${colorMute.slice(1).toUpperCase()}" />\n`;

    // SONGVIEW_FE
    let colorSVFE = colorInputs[8].value;
    for (let item of document.getElementsByClassName('colorSVFE')) {
        item.style.color = colorSVFE
    }
    output += `<SONGVIEW_FE value = "${colorSVFE.slice(1).toUpperCase()}" />\n`;

    // SONGVIEW_00
    let colorSV00 = colorInputs[9].value;
    for (let item of document.getElementsByClassName('colorSV00')) {
        item.style.color = colorSV00
    }
    output += `<SONGVIEW_00 value = "${colorSV00.slice(1).toUpperCase()}" />\n`;

    // ROWCOLOR1
    let colorRow1 = colorInputs[10].value;
    for (let item of document.getElementsByClassName('colorRow1')) {
        item.style.color = colorRow1
    }
    output += `<ROWCOLOR1 value = "${colorRow1.slice(1).toUpperCase()}" />\n`;
    // ROWCOLOR2
    let colorRow2 = colorInputs[11].value;
    for (let item of document.getElementsByClassName('colorRow2')) {
        item.style.color = colorRow2
    }
    output += `<ROWCOLOR2 value = "${colorRow2.slice(1).toUpperCase()}" />\n`;

    colorOutput.value = output;
}

colorInputs.forEach(input => {
    input.addEventListener('input', updateColors);
});

// Initial update
updateColors();