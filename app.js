
let cart = JSON.parse(localStorage.getItem("cart")) || []

let buy = document.querySelectorAll(".container>div")

document.getElementById("cart-value").innerText= cart.length

buy.forEach((ele)=>{

        let addButton = ele.querySelector(".button.flex")
        addButton.addEventListener("click",()=>{

            let price = ele.querySelector("p")
            let name =ele.querySelector("h3")

            let isPresent =false

            for(let i=0;i<cart.length;i++){
               if(cart[i].name === name.innerText){
                  isPresent = true
                  cart[i].quantity = cart[i].quantity+1
                  break;
               }
               
            }

             if(!isPresent){
                let x = price.innerText.split(".")
                let dollar =x[0].slice(1)
                let cent =x[1] || 0

                cart.push({
                    name:name.innerText,
                    quantity:1,
                    dollar:parseInt(dollar),
                    cent:+cent
              
                  })

             }
             localStorage.setItem("cart",JSON.stringify(cart))
             
             document.getElementById("cart-value").innerText= cart.length
             
        })

})


let cartdiv =document.getElementById("cart")

cartdiv.addEventListener("click",()=>{
     
    for(let i=0;i<cart.length;i++){

        let price =cart[i].quantity*parseFloat(`${cart[i].dollar}.${cart[i].cent}`)

        console.log(`NAME : ${cart[i].name}, PRICE:${cart[i].dollar}dollar ${cart[i].cent}cent ,TOTALPRICE:${price}`)

    }
})
