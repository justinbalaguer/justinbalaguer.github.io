var animation = bodymovin.loadAnimation({
    container: document.getElementById('charAnimation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
});