let margin = 0;
let turns = 0;

function move() {
  let bar = document.getElementById('Loader-bar');

  const id = setInterval(() => {
    bar.style.marginLeft = margin + 'px';
    margin++;
    if (margin + 69.156 >= 345.812 + 69) {
      margin = -70;
      turns++;
    }

    if (turns === 5) {
      turns = 0;
      clearInterval(id);
    }
  }, 5);
}

export default move;
