const func = (x) => (x*x)-7;
let xn=1,xnext=2,xnew,error,i=2;
do {
    xnew = xnext-((func(xnext)*(xnext-xn))/(func(xnext)-func(xn)))
    error = Math.abs((xnew-xnext)/xnew);
    console.log("X"+i+":" +xnew+" X"+(i-1)+":" +xnext+" Error:"+(error*100).toFixed(4)+"%");
    xn = xnext;
    xnext = xnew;
    i++;

} while (error>=0.000001)
