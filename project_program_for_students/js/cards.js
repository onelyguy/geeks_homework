const cards = document.querySelectorAll('.card');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=25');
        const data = await response.json();

        cards.forEach((card, index) => {
            card.innerHTML = `
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg8keaWuTWemET3-1mWqZae05N8W6SLGgGg&usqp=CAU" alt="User icon">
                <h5>${data[index].title}</h5>
                <p>${data[index].body}</p>
            `;
        });
    } catch (e) {
        console.log(e);
    }
});
