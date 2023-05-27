let  ReviewComments = document.getElementById("stars-1") 
let ReveiwSection = document.getElementById("reveiws-list-1")
let Cart_btn = document.getElementById("cart")
let ReveiwBtn = document.getElementById("reveiw-btn")

ReveiwBtn.onclick = () => {
    ReveiwSection.style.display = "block"
    ReviewComments.style.width = "100%"
    Cart_btn.style.display = "none"

}

ReviewComments.onmouseleave = () => {
    ReveiwSection.style.display = "none"
    ReviewComments.style.width = "200px"
}




