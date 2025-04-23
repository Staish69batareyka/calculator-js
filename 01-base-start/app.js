const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const submit = document.getElementById('submit')
let result = document.getElementById('result')
let action = '+'

btnPlus.onclick = () =>{
    action = '+'
}
btnMinus.onclick = () => {
    action = '-'
}
submit.onclick = () =>{
    if(action === '+'){
        result.textContent = Number(input1.value) + Number(input2.value)
    } else if (action === "-"){
        result.textContent = Number(input1.value) - Number(input2.value)
    }
}



