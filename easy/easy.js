function generateHourGlass(num) {
  var result = [];
  var space = ' ';
  var hashtag = '#';

  for (let j = 1; j <= num+2; j++) {
    var hourGlass = ''; 
    var arrHourGlass = [];
    for(let i = 0; i < num+2; i++) {
      if(j === 1 || j === num+2) {
        hourGlass += '#';
      } else {
        if(i === 0 || i === num+1) {
          hourGlass += ' ';
        } else {
          hourGlass += '#'
        }
      }
    }
    arrHourGlass.push(hourGlass);
    console.log(arrHourGlass)
  }
}

console.log(generateHourGlass(3))