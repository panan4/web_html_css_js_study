const weatherAll = {
    wearther:'맑음',
    precipitation:'20%',
    wind:'3.4m/s',
    humidity:'15%'
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')

console.log(btn, result)

btn[0].addEventListener('click', function(){
    result.innerHTML = weatherAll.wearther
    
})
btn[1].addEventListener('click', function(){
    result.innerHTML = weatherAll.precipitation
})
btn[2].addEventListener('click', function(){
    result.innerHTML = weatherAll.wind
})
btn[3].addEventListener('click', function(){
    result.innerHTML = weatherAll.humidity
})





