
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return [];
  }
  let arr = [];
  for(let i = 0; i < matrix.length; i++){
    for(let f = 0; f < matrix[i].length; f++){
      if(i % 2 !== 0 && f === 0){
        matrix[i] = matrix[i].reverse();
        console.log("reversed");
      }
      arr.push(matrix[i][f]);
    }
  }
  console.log(arr);
  return arr;
}
