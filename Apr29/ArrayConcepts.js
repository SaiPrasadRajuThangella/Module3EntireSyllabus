// Array flat method

let arr = [1, 2,[ 3, 4], 5, [6, 7, [8, 9]]];

function myFlat(array, depth = 1) {
  const result = [];


  array.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      const insidearray = myFlat(element, depth - 1);

      result.push(...insidearray);
    } else {
      result.push(element);
    }
  });

  return result;
}

console.log(myFlat(arr));







 