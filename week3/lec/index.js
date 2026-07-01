// Mehroj Tursunov
// 123839243
// mtursunov2
// WEB322NFF
const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
	.then(response => response.json())
	.then(posts => {
		posts.forEach(post => {
			console.log('The user id is', post.id);
		});
	})
	.catch(error => console.log(error));

