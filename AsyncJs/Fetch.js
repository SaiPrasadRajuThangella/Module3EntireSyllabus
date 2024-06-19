function intro(name) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi im ${name}`);
      }, 1000);
    } else {
      reject(`1`);
    }
  });
}
function workplace(name) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi i work at ${name}`);
      }, 1000);
    } else {
      reject(`2`);
    }
  });
}
function city(name) {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(`Hi iam from at ${name}`);
      }, 1000);
    } else {
      reject(`3`);
    }
  });
}

intro("prasad")
  .then((tetx) => {
    console.log(tetx);
    return workplace("accio");
  })
  .then((etxt) => {
    console.log(etxt);
    return city("proro");
  })
  .then((sdfdsf) => {
    console.log(sdfdsf);
  })
  .catch((etxt) => {
    console.log(etxt);
  })