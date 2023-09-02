fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => data.forEach((album) => {
        document.body.insertAdjacentHTML('beforeEnd', `
<h1>Заголовок: ${album.title}</h1>
<p>Статья: ${album.body}</p>
`)
    }))
    .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
    });