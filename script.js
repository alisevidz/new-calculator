const input1 = document.querySelector('.js-teksts');
const plusButton = document.querySelector('.js-plus')

const Add = (skaitlis1, skaitlis2) => {
    return skaitlis1 + skatlis2
}

const Subtract = () => {
    return skaitlis1 - skaitlis2
}

const Multiply = (skaitlis1,skaitlis2) => {
    return skaitlis1 * skaitlis2
}


const Divide = (skaitlis1, skaitlis2) => {
    return skaitlis1 / skaitlis2
}

plusButton.addEventListener('click', () => {
    console.log("Mani nospieda")
})
console.log(input1)

console.log(Add(22,13))