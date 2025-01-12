/* Fetching header and footer templates*/

function fetchHeader(){
    console.log("Header Template fetch initiated")
    let headerContent
    fetch("/Templates/header.html")
        .then ( response => response.text())
        .then ( data => {
            headerContent = data
            document.querySelector("header").innerHTML = headerContent;
            menuToggle()  
        }) 
        
        
}

function fetchFooter(){
    console.log("Footer Template fetch initiated")
    let footerContent
    fetch("/Templates/footer.html")
        .then ( response => response.text())
        .then ( data => {
            footerContent = data
            document.querySelector("footer").innerHTML = footerContent;
        }) 
}

function menuToggle() {
        document.getElementById("nav-btn").addEventListener('click',() =>  {
        document.getElementById('nav-list').classList.toggle('nav-list--active')
    }
    )


}