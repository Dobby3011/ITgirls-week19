function post() {
    const title = document.getElementById('title').value;
    const text = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: text,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((data) => {
            const resultTitle = document.getElementById('resultTitle');
            const resultBody = document.getElementById('resultBody');
            if ((title === '') || (text === '')) {
                alert('Заполните поля!');
            }
            else {
                resultTitle.textContent = data.title;
                resultBody.textContent = data.body;
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error);
        });

    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}

document.querySelector('.btn').addEventListener('click', post);



