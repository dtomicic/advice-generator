const apiUrl = "https://api.adviceslip.com/advice";
const advNum = document.getElementById('advNum');
const advText = document.getElementById('advText');
const res = document.getElementById('advRes');

res.addEventListener('click', () => {
    getAdv();
})

window.onload = () => {
    getAdv();
}



function getAdv() {
    fetch(apiUrl).then(response => {
        return response.json();
    }).then(advData => {
        const advObj = advData.slip;
        advNum.innerHTML = `${advObj.id}`;
        advText.innerHTML = `${advObj.advice}`;
    }).catch(error => {
        console.log(error);
    });
}
