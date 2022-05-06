const facesEL = document.querySelectorAll('.face-emojis');
const starsEL = document.querySelectorAll('.fa-star');
const alertBtn = document.getElementById('alert-close');
const alertBox = document.getElementById('alertBox')
const addColors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];
updatingRating(0)

starsEL.forEach((stars, index) => {
    stars.addEventListener('click', () => {
        updatingRating(index)
        alertboxPopup(index)
    })
})


function updatingRating(index) {
    starsEL.forEach((star, idx) => {
        if(idx < index + 1) {
            star.classList.add('active');
        } else {
            star.classList.remove('active')
        }

    })

    facesEL.forEach((faces) => {
        faces.style.transform = `translateX(-${index * 50}px)`;
        faces.style.color = addColors[index]
    });
}

function alertboxPopup(index) {
    if(index === 4) {
        alertBox.style.display = "flex";
    }
}


alertBtn.addEventListener('click', () => {
    alertBox.style.display = "none";
    location.reload()
})