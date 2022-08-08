const imageContainerEl = document.querySelector('.image-container')
const loadBtn = document.querySelector('.btn')


loadBtn.addEventListener('click', () => {
    addNewImages()
})

const addNewImages = () => {
    let imageNum = 6
    for (let i = 0; i < imageNum; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/300?random=${Math.ceil(Math.random()*2000)}`
        imageContainerEl.appendChild(img)
    }
}

addNewImages()