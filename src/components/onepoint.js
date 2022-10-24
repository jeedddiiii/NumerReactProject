const fx = (x) => {
  return -x+0.5+x;
};
const onepoint = (x) => {
  do {
    xnew = fx(x);
    error = Math.abs(((xnew - x) / xnew));
    if (isNaN(error)) {
      console.log("Zero division error");
      return;
    }
    console.log("X"  +i+ ":" + xnew.toFixed(6) + " error:" + error.toFixed(6));
    i++;
    x = xnew;
    err = Math.abs(error);
  } while (err >= 0.000001);
}
let x = 0, i = 0;
let xnew, error, err;
onepoint(x);
