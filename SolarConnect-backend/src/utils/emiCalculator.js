export function calculateEMI(p,r,y){const n=y*12,m=r/12/100;if(!p||!n)return 0;if(m===0)return Number((p/n).toFixed(2));return Number((p*m*Math.pow(1+m,n)/(Math.pow(1+m,n)-1)).toFixed(2));}
