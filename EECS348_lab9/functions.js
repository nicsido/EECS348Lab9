function alter_paragraph_color() {
    var redBorder = document.getElementById("redBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
    var border_width = document.getElementById("border_width").value;
    var redBackg = document.getElementById("redBackg").value;
    var greenBackg = document.getElementById("greenBackg").value;
    var blueBackg = document.getElementById("blueBackg").value;

    var para = document.getElementById("paragraph");
    para.style.borderColor = `rgb(${redBorder},${greenBorder},${blueBorder})`;
    para.style.borderWidth = border_width
    para.style.backgroundColor = `rgb(${redBackg},${greenBackg},${blueBackg})`;
}

function validate() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (password2.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (password1 != password2) {
        alert("Two passwords don't match!")
    } else {
        alert("The two passwords are matched.")
    }
}