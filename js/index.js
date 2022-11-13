let word = []

const getWord = async () => {
    await fetch('http://localhost:3000/api/getword', {
        method: 'GET'
    }).then(res => res = res.json()).then(res =>
        word = res.vocab
    )
        .catch((error) => {
            console.error('Error:', error);
        })

    let text = ""

    for (let i = 0; i < word.length; i++) {
        text = text + `<td>${word[i].word}</td><br/>`
    }
    document.getElementById("word").innerHTML = text
    document.getElementById("define").innerHTML = ""
}

const getDefine = () => {
    let text = ""

    for (let i = 0; i < word.length; i++) {
        text = text + `<td>${word[i].define}</td><br/>`
    }
    document.getElementById("define").innerHTML = text
}