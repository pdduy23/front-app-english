let word = []

const getWord = async () => {
    await fetch('https://server-app-english.onrender.com/api/getword', {
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

const addWord = async () => {
    const textDefine = document.getElementById("textDefine")
    const textWord = document.getElementById("textWord")

    const body = {
        "define": textDefine.value.toString(),
        "word": textWord.value.toString(),
    }

    await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(res => {
        if (res.success == true) {
            textDefine.value = ""
            textWord.value = ""
        }
    })
        .catch(err => console.log(err))
}