  const wrapper = document.getElementById("tiles");
  const size = document.body.clientWidth > 800 ? 100 : 100;
  let columns = Math.floor(document.body.clientWidth / size),
      rows = Math.floor(document.body.clientHeight / size);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = () => handleStagger(index);
    return tile;
  }

  const handleStagger = index => {
    anime({
      targets: '.tile',
      opacity: [
        {value: .8, easing: 'cubicBezier(1.000, 0.010, 0.000, 1.005)', duration: 500},
        {value: 1, easing: 'cubicBezier(1.000, 0.010, 0.000, 1.005)', duration: 1000}
      ],
      delay: anime.stagger(100, {grid: [columns, rows], from: index}),
    });
  }

  const createTiles = quantity => {
    Array.from(Array(quantity)).map((_, index) => {
      wrapper.appendChild(createTile(index));
    })
  }

  createTiles(columns * rows);

  const createGrid = () => {
      wrapper.innerHTML = "";
      columns = Math.floor(document.body.clientWidth / 100);
      rows = Math.floor(document.body.clientHeight / 100);
      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);
      createTiles(columns * rows);
  }

  window.onresize = () => createGrid();

