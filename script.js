const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const subtitleInput = document.getElementById('subtitle');
const button = document.getElementById('btn');
const output = document.getElementById('output');

const preExistingData = [
    { url: "https://staticg.sportskeeda.com/editor/2023/07/8cce4-16886395731100-1920.jpg?w=640", title: "Classroom of the Elite", subtitle: "Yōkoso Jitsuryoku Shijōshugi no Kyōshitsu e" },
    { url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/m/d/m/small-yaa-suzume-anime-series-poster-02-18inchx12inch-suzume-02-original-imagq79dakvghyty.jpeg?q=90&crop=false", title: "Suzume", subtitle: "Suzume no tojimari" },
    { url: "https://m.media-amazon.com/images/M/MV5BNWVjMTk1Y2UtZTQyOC00ZmZhLTk0Y2EtYzljNTRiMGVlODM2XkEyXkFqcGdeQXVyMjIzMTQzNDE@._V1_.jpg", title: "Can i eat your pancreas", subtitle: " Kimi no Suizo o Tabetai" }
];

function createCard(url, title, subtitle) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('card');

    const image = document.createElement('img');
    image.src = url;
    image.alt = title;

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const subtitleElement = document.createElement('h3');
    subtitleElement.textContent = subtitle;

    myDiv.append(image, titleElement, subtitleElement);
    output.appendChild(myDiv);
}

// Create pre-existing divs
preExistingData.forEach(data => createCard(data.url, data.title, data.subtitle));

button.addEventListener('click', () => {
    const urlValue = urlInput.value.trim();
    const titleValue = titleInput.value.trim();
    const subtitleValue = subtitleInput.value.trim();

    if (urlValue && titleValue && subtitleValue) {
        createCard(urlValue, titleValue, subtitleValue);

        // Clear the input fields
        urlInput.value = "";
        titleInput.value = "";
        subtitleInput.value = "";
    } else {
        alert('Please enter Image URL, Title, and Subtitle.');
    }
});
