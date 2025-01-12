/* Fetching header and footer templates*/

function fetchHeader(){
    console.log("Header Template fetch initiated")
    let headerContent
    fetch("Templates/header.html")
        .then ( response => response.text())
        .then ( data => {
            headerContent = data
            document.querySelector("header").innerHTML = headerContent;
        }) 
}

function fetchHeader(){
    console.log("Footer Template fetch initiated")
    let headerContent
    fetch("Templates/footer.html")
        .then ( response => response.text())
        .then ( data => {
            headerContent = data
            document.querySelector("footer").innerHTML = headerContent;
        }) 
}