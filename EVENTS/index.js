function changeText(event) {
    console.log(event);
    let firstElement = document.getElementById('fPara');

    firstElement.textContent = "Hello... Do it..."
}

let firstElement = document.getElementById('fPara');
firstElement.addEventListener('click', changeText);