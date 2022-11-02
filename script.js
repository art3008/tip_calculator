const sel = document.getElementById('service')
const amount = document.getElementById('amount')
const guests = document.getElementById('guests') 
const blkResult = document.getElementById('result')

function getResult() {
    
    let serPercent = parseFloat(parseFloat(amount.value / guests.value) * sel.value)
    console.log(serPercent);
    blkResult.style.visibility = 'visible'
    blkResult.innerHTML = serPercent
}