const colorInput = document.getElementById("color-input")
const modeInput = document.getElementById("mode")


const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${modeInput.value.toLowerCase()}`)
    .then(res => res.json())
    .then(data=>{
        let colorHtml = ""
        for (let i=0; i<data.count; i++){
            document.getElementById(`color-${i+1}`).style.background = data.colors[i].hex.value
            colorHtml += `<p>${data.colors[i].hex.value}</p>`    
        }
        document.getElementById("color-names").innerHTML = colorHtml
    }) 
    
    modeInput.value = "" 

})
