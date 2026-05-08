const textContainer = document.getElementById('text')

let text = `Welcome to Type Writer Project :))`
let index = 0

const typeWriter = () => {

    if (index < text.length) {

        textContainer.innerHTML += text[index]
        index++

    }

    setTimeout(() => {
        typeWriter()
    }, 100);

}

typeWriter()