var moreDropdown = document.querySelector('.more-dropdown')
var iconDropdown = document.querySelectorAll('.icon-plus')


iconDropdown.forEach(button => {
    button.addEventListener('click', () => {
        if (moreDropdown.style.display == "none") {
            console.log('test')
        }
    })
})
// for each iconDropdown    


// iconDropdown.forEach(button => {
//     button.addEventListener('click', () => {
//         moreDropdown.forEach(div => {
//             if (div.style.display === "none") {
//                 div.style.display = "block"} 
//             else div.style.display = "none"})
//     })    
// })
// Toggle display on click on plus icon
// if div is hidden, then set display to block (show it), otherwise hide it  

