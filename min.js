function A(){return R()-.5}function z(a,b,c){return X=a[0]+b,Y=a[1]+c,X*X+Y*Y+a[2]*a[2]<1}for(w=120,W=5*w,c.width=c.height=W,M=Math,R=M.random,T=a.createImageData(W,W),D=T.data,f=[],q=m=0;3*w*w>q;)f[q++]=0;B=function(){for(L=0;L++<20*w;){for(x=q%w/w,y=(q-q%w)/w/w,p=[0,0,-3.5],v=[.03*(.5-(x+R()/w)),.03*(.5-(y+R()/w)),.03],d=1,r=g=b=I=0;I++<200;){for(i=0;3>i;)p[i]+=v[i++];if(R()<.004)for(;i;)v[--i]+=.01*A();if(x=.7*p[0],y=.7*(p[2]-1),i=.7*(p[1]+.3),j=x*x+9/4*y*y+i*i-1,j*=j*j,j-=x*x*i*i*i+9/80*y*y*i*i*i,0>j&&(v=[A()/10,A()/10,A()/10],d=.5),z(p,2.5,1)){g=2,b=r=3;break}if(z(p,-2.5,1)){r=3;break}if(z(p,0,-2.5)||z(p,0,3)){g=b=2,r=3;break}}j=M.max(0,27*v[1]),f[Q=3*q]+=r+1.5*j,f[++Q]+=d*g+j,f[++Q]+=d*b+j,q=++m%(w*w)}for(I=M.ceil(m/w/w)/255,x=0;W>x;x++)for(y=0;W>y&&(i=~~(x/5)+~~(y/5)*w,j=4*(x+ +y++*W),!(i>q&&q));){for(L=0;3>L;)D[j+L]=f[3*i+L++]/I;D[j+3]=255}a.putImageData(T,0,0),setTimeout(B)},B();