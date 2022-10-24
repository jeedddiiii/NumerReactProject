const func = (x) => (x*x)-7;
const dfunc = (x) => 2*x;
let x=0,xn=2,fx,dfx,absx,i=0,error;
do{
    fx = func(xn);
    dfx = dfunc(xn);
    absx = (fx*(-1))/dfx;
    
    x = xn+absx;
    error = Math.abs(absx/x);
    console.log("X"+i+":"+xn.toFixed(6)+" X"+i+":"+x.toFixed(6)+ " Error:"+(error*100).toFixed(4)+"%");
    xn = x;
    i++;

}
while(error>=0.000001)