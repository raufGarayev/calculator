const numbers = document.querySelectorAll('#nums')
const equal = document.getElementById('result')
const clear = document.getElementById('clear')
const input = document.getElementById('input')
let resulted = false
const warning = "<div><span>Rəqəm hanı?!</span></div>"


numbers.forEach(btns => {
    btns.addEventListener('click', clickNumbers)
});

equal.addEventListener('click', giveResult)
clear.addEventListener('click', clearInput)

function clickNumbers(e) {
    const ops = e.target.innerText

    if(resulted && !(ops === "+" || ops === "-" || ops === "*" || ops === "÷")) {
        input.innerHTML = ""
    }
    resulted = false
    
    
    if(ops === "+" || ops === "-" || ops === "*" || ops === "÷") {
        if(input.innerText === "" || input.innerHTML=== warning) {
            input.innerHTML = warning
            return
        }
    }

    if(input.innerHTML == warning)
        input.innerHTML = ""

    const currentstring = input.innerText

    const lastStr = currentstring[currentstring.length-1]

    if((lastStr === "+" || lastStr === "-" || lastStr === "*" || lastStr === "÷") && (ops === "+" || ops === "-" || ops === "*" || ops === "÷")) {
        let newOp = lastStr.replace(lastStr, ops)
        input.innerText = input.innerText.charAt(input.innerText.length-2) + newOp
    } else {
        input.innerText += e.target.innerText
    }
    
    if(ops === "+" || ops === "-" || ops === "*" || ops === "÷") {
        const getNums = input.innerText.match(/[\d\.]+|\D+/g)
        if(getNums.length < 3) 
            return;
        else {
            if(getNums[0] !== "-") {
                switch(getNums[1]) {
                    case "+":
                        input.innerText = Number(getNums[0]) + Number(getNums[2]) + ops
                        break
                    case "-":
                        input.innerText = Number(getNums[0]) - Number(getNums[2]) + ops
                        break
                    case "*":
                        input.innerText = Number(getNums[0]) * Number(getNums[2]) + ops
                        break
                    case "÷":
                        input.innerText = Number(getNums[0]) / Number(getNums[2]) + ops
                        break
                }
            }
            else {
                switch(getNums[2]) {
                    case "+":
                        input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3]) + ops
                        break
                    case "-":
                        input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3]) + ops
                        break
                    case "*":
                        input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3]) + ops
                        break
                    case "÷":
                        input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3]) + ops
                        break
                }
            }
        }
    }
}

function giveResult() {
    const getNums = input.innerText.match(/[\d\.]+|\D+/g)

    if(getNums.length < 3) 
        return;
    else {
        if(getNums[0] !== "-") {
            switch(getNums[1]) {
                case "+":
                    input.innerText = Number(getNums[0]) + Number(getNums[2])
                    break
                case "-":
                    input.innerText = Number(getNums[0]) - Number(getNums[2])
                    break
                case "*":
                    input.innerText = Number(getNums[0]) * Number(getNums[2])
                    break
                case "÷":
                    input.innerText = Number(getNums[0]) / Number(getNums[2])
                    break
            }
        }
        else {
            switch(getNums[2]) {
                case "+":
                    input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3])
                    break
                case "-":
                    input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3])
                    break
                case "*":
                    input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3])
                    break
                case "÷":
                    input.innerText = Number(getNums[0] + getNums[1]) + Number(getNums[3])
                    break
            }
        }
    }
    resulted = true
}

function clearInput() {
    input.innerText = ""
}