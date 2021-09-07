var modalbox = document.createElement('div')
modalbox.id = "modalbox"
document.body.appendChild(modalbox)

var images = document.querySelectorAll('.img-gallery')

images.forEach(img => {
    img.addEventListener('click', function () {
        console.log('test')
        modalbox.className = 'active'
        
        var modalImg = document.createElement('img') 
        modalImg.className = 'modalimg'
        modalImg.src = img.src
        while (modalbox.firstChild) {
            modalbox.removeChild(modalbox.firstChild)
        }
        modalbox.appendChild(modalImg)
    })
});

modalbox.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget) return
    modalbox.classList.remove('active')
    
})