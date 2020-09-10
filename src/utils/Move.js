let width = 0;
let turns = 0;

function move() {
  let bar = document.getElementById('Loader-bar');

  const id = setInterval(() => {
    bar.style.marginLeft = width + 'px';
    width++;
    console.log(turns);
    if (width + 69.156 >= 345.812 + 69) {
      width = -70;
      turns++;
    }

    if (turns === 5) {
      console.log('hi');
      turns = 0;
      clearInterval(id);
    }
  }, 5);
  //   for (let i = 0; i <= 100; i++) {
  //     console.log('get');
  //     bar.style.width = width + '%';
  //   }
  //   if (i == 0) {
  //     i = 1;
  //     var elem = document.getElementById('Loader-bar');
  //     var width = 1;
  //     var id = setInterval(frame, 10);
  //     function frame() {
  //       if (width >= 100) {
  //         clearInterval(id);
  //         i = 0;
  //       } else {
  //         width++;
  //         elem.style.width = width + '%';
  //       }
  //     }
  //   }
}

export default move;
