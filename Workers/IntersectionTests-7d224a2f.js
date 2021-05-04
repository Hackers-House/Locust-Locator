define(["exports","./Cartesian2-8417ca3d","./when-208fe5b0","./Check-d18af7c4","./Transforms-a73b3b3b","./Math-4e53b694"],function(a,O,d,t,x,y){"use strict";var P={};function i(a,t,e){var r=a+t;return y.CesiumMath.sign(a)!==y.CesiumMath.sign(t)&&Math.abs(r/Math.max(Math.abs(a),Math.abs(t)))<e?0:r}P.computeDiscriminant=function(a,t,e){return t*t-4*a*e},P.computeRealRoots=function(a,t,e){if(0===a)return 0===t?[]:[-e/t];if(0===t){if(0===e)return[0,0];var r=Math.abs(e),n=Math.abs(a);if(r<n&&r/n<y.CesiumMath.EPSILON14)return[0,0];if(n<r&&n/r<y.CesiumMath.EPSILON14)return[];if((n=-e/a)<0)return[];r=Math.sqrt(n);return[-r,r]}if(0===e)return(n=-t/a)<0?[n,0]:[0,n];n=i(t*t,-(4*a*e),y.CesiumMath.EPSILON14);if(n<0)return[];n=-.5*i(t,y.CesiumMath.sign(t)*Math.sqrt(n),y.CesiumMath.EPSILON14);return 0<t?[n/a,e/n]:[e/n,n/a]};var g={};function s(a,t,e,r){var n=a,i=t/3,s=e/3,o=r,u=n*s,C=i*o,c=i*i,l=s*s,h=n*s-c,a=n*o-i*s,t=i*o-l,e=4*h*t-a*a;if(e<0){var r=u*l<=c*C?-2*i*(m=h)+(f=n)*a:-(f=o)*a+2*s*(m=t),M=-(r<0?-1:1)*Math.abs(f)*Math.sqrt(-e),f=(d=M-r)/2,f=f<0?-Math.pow(-f,1/3):Math.pow(f,1/3),M=d===M?-f:-m/f,M=m<=0?f+M:-r/(f*f+M*M+m);return u*l<=c*C?[(M-i)/n]:[-o/(M+s)]}var m=h,u=-2*i*h+n*a,l=t,c=-o*a+2*s*t,C=Math.sqrt(e),h=Math.sqrt(3)/2,a=Math.abs(Math.atan2(n*C,-u)/3);M=2*Math.sqrt(-m);t=Math.cos(a);d=M*t;var e=M*(-t/2-h*Math.sin(a)),u=2*i<d+e?d-i:e-i,m=n,n=u/m,a=Math.abs(Math.atan2(o*C,-c)/3),o=-o,a=(d=(M=2*Math.sqrt(-l))*(t=Math.cos(a)))+(e=M*(-t/2-h*Math.sin(a)))<2*s?d+s:e+s,d=o/a,e=-u*a-m*o,a=(s*e-i*(u*o))/(-i*e+s*(m*a));return n<=a?n<=d?a<=d?[n,a,d]:[n,d,a]:[d,n,a]:n<=d?[a,n,d]:a<=d?[a,d,n]:[d,a,n]}g.computeDiscriminant=function(a,t,e,r){var n=t*t,i=e*e;return 18*a*t*e*r+n*i-27*(a*a)*(r*r)-4*(a*i*e+n*t*r)},g.computeRealRoots=function(a,t,e,r){var n;if(0===a)return P.computeRealRoots(t,e,r);if(0!==t)return 0===e?0===r?(i=-t/a)<0?[i,0,0]:[0,0,i]:s(a,t,0,r):0===r?0===(n=P.computeRealRoots(a,t,e)).length?[0]:n[1]<=0?[n[0],n[1],0]:0<=n[0]?[0,n[0],n[1]]:[n[0],0,n[1]]:s(a,t,e,r);if(0!==e)return 0===r?0===(n=P.computeRealRoots(a,0,e)).Length?[0]:[n[0],0,n[1]]:s(a,0,e,r);if(0===r)return[0,0,0];var i=(i=-r/a)<0?-Math.pow(-i,1/3):Math.pow(i,1/3);return[i,i,i]};var b={};function C(a,t,e,r){var n=a*a,i=t-3*n/8,s=e-t*a/2+n*a/8,r=r-e*a/4+t*n/16-3*n*n/256,e=g.computeRealRoots(1,2*i,i*i-4*r,-s*s);if(0<e.length){t=-a/4,n=e[e.length-1];if(Math.abs(n)<y.CesiumMath.EPSILON14){a=P.computeRealRoots(1,i,r);if(2===a.length){var e=a[0],o=a[1];if(0<=e&&0<=o){r=Math.sqrt(e),a=Math.sqrt(o);return[t-a,t-r,t+r,t+a]}if(0<=e&&o<0)return[t-(u=Math.sqrt(e)),t+u];if(e<0&&0<=o)return[t-(u=Math.sqrt(o)),t+u]}return[]}if(0<n){var o=Math.sqrt(n),u=(i+n-s/o)/2,s=(i+n+s/o)/2,u=P.computeRealRoots(1,o,u),s=P.computeRealRoots(1,-o,s);return 0!==u.length?(u[0]+=t,u[1]+=t,0!==s.length?(s[0]+=t,s[1]+=t,u[1]<=s[0]?[u[0],u[1],s[0],s[1]]:s[1]<=u[0]?[s[0],s[1],u[0],u[1]]:u[0]>=s[0]&&u[1]<=s[1]?[s[0],u[0],u[1],s[1]]:s[0]>=u[0]&&s[1]<=u[1]?[u[0],s[0],s[1],u[1]]:u[0]>s[0]&&u[0]<s[1]?[s[0],u[0],s[1],u[1]]:[u[0],s[0],u[1],s[1]]):u):0!==s.length?(s[0]+=t,s[1]+=t,s):[]}}return[]}function c(a,t,e,r){var n=a*a,i=-2*t,s=e*a+t*t-4*r,o=n*r-e*t*a+e*e,u=g.computeRealRoots(1,i,s,o);if(0<u.length){var C,c,l,h,M=u[0],i=t-M,s=i*i,o=a/2,u=i/2,t=s-4*r,i=s+4*Math.abs(r),s=n-4*M,n=n+4*Math.abs(M);c=M<0||t*n<s*i?(C=(s=Math.sqrt(s))/2,0===s?0:(a*u-e)/s):(C=0===(c=Math.sqrt(t))?0:(a*u-e)/c,c/2),0==o&&0===C?h=l=0:y.CesiumMath.sign(o)===y.CesiumMath.sign(C)?h=M/(l=o+C):l=M/(h=o-C),0==u&&0===c?m=f=0:y.CesiumMath.sign(u)===y.CesiumMath.sign(c)?m=r/(f=u+c):f=r/(m=u-c);var f=P.computeRealRoots(1,l,f),m=P.computeRealRoots(1,h,m);if(0!==f.length)return 0!==m.length?f[1]<=m[0]?[f[0],f[1],m[0],m[1]]:m[1]<=f[0]?[m[0],m[1],f[0],f[1]]:f[0]>=m[0]&&f[1]<=m[1]?[m[0],f[0],f[1],m[1]]:m[0]>=f[0]&&m[1]<=f[1]?[f[0],m[0],m[1],f[1]]:f[0]>m[0]&&f[0]<m[1]?[m[0],f[0],m[1],f[1]]:[f[0],m[0],f[1],m[1]]:f;if(0!==m.length)return m}return[]}function e(a,t){t=O.Cartesian3.clone(d.defaultValue(t,O.Cartesian3.ZERO)),O.Cartesian3.equals(t,O.Cartesian3.ZERO)||O.Cartesian3.normalize(t,t),this.origin=O.Cartesian3.clone(d.defaultValue(a,O.Cartesian3.ZERO)),this.direction=t}b.computeDiscriminant=function(a,t,e,r,n){var i=a*a,s=t*t,o=s*t,u=e*e,C=u*e,c=r*r,l=c*r,h=n*n;return s*u*c-4*o*l-4*a*C*c+18*a*t*e*l-27*i*c*c+256*(i*a)*(h*n)+n*(18*o*e*r-4*s*C+16*a*u*u-80*a*t*u*r-6*a*s*c+144*i*e*c)+h*(144*a*s*e-27*s*s-128*i*u-192*i*t*r)},b.computeRealRoots=function(a,t,e,r,n){if(Math.abs(a)<y.CesiumMath.EPSILON15)return g.computeRealRoots(t,e,r,n);var i=t/a,s=e/a,o=r/a,u=n/a,a=i<0?1:0;switch(a+=s<0?a+1:a,a+=o<0?a+1:a,a+=u<0?a+1:a){case 0:return C(i,s,o,u);case 1:case 2:return c(i,s,o,u);case 3:case 4:return C(i,s,o,u);case 5:return c(i,s,o,u);case 6:case 7:return C(i,s,o,u);case 8:return c(i,s,o,u);case 9:case 10:return C(i,s,o,u);case 11:return c(i,s,o,u);case 12:case 13:case 14:case 15:return C(i,s,o,u);default:return}},e.clone=function(a,t){if(d.defined(a))return d.defined(t)?(t.origin=O.Cartesian3.clone(a.origin),t.direction=O.Cartesian3.clone(a.direction),t):new e(a.origin,a.direction)},e.getPoint=function(a,t,e){return d.defined(e)||(e=new O.Cartesian3),e=O.Cartesian3.multiplyByScalar(a.direction,t,e),O.Cartesian3.add(a.origin,e,e)};var l={rayPlane:function(a,t,e){d.defined(e)||(e=new O.Cartesian3);var r=a.origin,n=a.direction,i=t.normal,a=O.Cartesian3.dot(i,n);if(!(Math.abs(a)<y.CesiumMath.EPSILON15)){a=(-t.distance-O.Cartesian3.dot(i,r))/a;if(!(a<0))return e=O.Cartesian3.multiplyByScalar(n,a,e),O.Cartesian3.add(r,e,e)}}},M=new O.Cartesian3,f=new O.Cartesian3,m=new O.Cartesian3,p=new O.Cartesian3,v=new O.Cartesian3;l.rayTriangleParametric=function(a,t,e,r,n){n=d.defaultValue(n,!1);var i,s,o,u=a.origin,C=a.direction,c=O.Cartesian3.subtract(e,t,M),a=O.Cartesian3.subtract(r,t,f),e=O.Cartesian3.cross(C,a,m),r=O.Cartesian3.dot(c,e);if(n){if(r<y.CesiumMath.EPSILON6)return;if(h=O.Cartesian3.subtract(u,t,p),(l=O.Cartesian3.dot(h,e))<0||r<l)return;if(i=O.Cartesian3.cross(h,c,v),(s=O.Cartesian3.dot(C,i))<0||r<l+s)return;o=O.Cartesian3.dot(a,i)/r}else{if(Math.abs(r)<y.CesiumMath.EPSILON6)return;var l,r=1/r,h=O.Cartesian3.subtract(u,t,p);if((l=O.Cartesian3.dot(h,e)*r)<0||1<l)return;if(i=O.Cartesian3.cross(h,c,v),(s=O.Cartesian3.dot(C,i)*r)<0||1<l+s)return;o=O.Cartesian3.dot(a,i)*r}return o},l.rayTriangle=function(a,t,e,r,n,i){n=l.rayTriangleParametric(a,t,e,r,n);if(d.defined(n)&&!(n<0))return d.defined(i)||(i=new O.Cartesian3),O.Cartesian3.multiplyByScalar(a.direction,n,i),O.Cartesian3.add(a.origin,i,i)};var u=new e;l.lineSegmentTriangle=function(a,t,e,r,n,i,s){var o=u;O.Cartesian3.clone(a,o.origin),O.Cartesian3.subtract(t,a,o.direction),O.Cartesian3.normalize(o.direction,o.direction);i=l.rayTriangleParametric(o,e,r,n,i);if(!(!d.defined(i)||i<0||i>O.Cartesian3.distance(a,t)))return d.defined(s)||(s=new O.Cartesian3),O.Cartesian3.multiplyByScalar(o.direction,i,s),O.Cartesian3.add(o.origin,s,s)};var o={root0:0,root1:0};function h(a,t,e){d.defined(e)||(e=new x.Interval);var r=a.origin,n=a.direction,a=t.center,t=t.radius*t.radius,a=O.Cartesian3.subtract(r,a,m),t=function(a,t,e,r){if(!((i=t*t-4*a*e)<0)){if(0<i){var n=1/(2*a),e=Math.sqrt(i),i=(-t+e)*n,n=(-t-e)*n;return i<n?(r.root0=i,r.root1=n):(r.root0=n,r.root1=i),r}a=-t/(2*a);if(0!=a)return r.root0=r.root1=a,r}}(O.Cartesian3.dot(n,n),2*O.Cartesian3.dot(n,a),O.Cartesian3.magnitudeSquared(a)-t,o);if(d.defined(t))return e.start=t.root0,e.stop=t.root1,e}l.raySphere=function(a,t,e){if(e=h(a,t,e),d.defined(e)&&!(e.stop<0))return e.start=Math.max(e.start,0),e};var w=new e;l.lineSegmentSphere=function(a,t,e,r){var n=w;O.Cartesian3.clone(a,n.origin);t=O.Cartesian3.subtract(t,a,n.direction),a=O.Cartesian3.magnitude(t);if(O.Cartesian3.normalize(t,t),r=h(n,e,r),!(!d.defined(r)||r.stop<0||r.start>a))return r.start=Math.max(r.start,0),r.stop=Math.min(r.stop,a),r};var R=new O.Cartesian3,S=new O.Cartesian3;function N(a,t,e){var r=a+t;return y.CesiumMath.sign(a)!==y.CesiumMath.sign(t)&&Math.abs(r/Math.max(Math.abs(a),Math.abs(t)))<e?0:r}l.rayEllipsoid=function(a,t){var e=t.oneOverRadii,r=O.Cartesian3.multiplyComponents(e,a.origin,R),t=O.Cartesian3.multiplyComponents(e,a.direction,S),e=O.Cartesian3.magnitudeSquared(r),a=O.Cartesian3.dot(r,t);if(1<e){if(0<=a)return;var n,i,r=a*a,s=e-1;if(r<(i=(n=O.Cartesian3.magnitudeSquared(t))*s))return;if(i<r){var o,u=a*a-i,C=(o=-a+Math.sqrt(u))/n,r=s/o;return C<r?new x.Interval(C,r):{start:r,stop:C}}C=Math.sqrt(s/n);return new x.Interval(C,C)}return e<1?(s=e-1,u=a*a-(i=(n=O.Cartesian3.magnitudeSquared(t))*s),o=-a+Math.sqrt(u),new x.Interval(0,o/n)):a<0?(n=O.Cartesian3.magnitudeSquared(t),new x.Interval(0,-a/n)):void 0};var q=new O.Cartesian3,L=new O.Cartesian3,I=new O.Cartesian3,E=new O.Cartesian3,z=new O.Cartesian3,T=new x.Matrix3,U=new x.Matrix3,W=new x.Matrix3,B=new x.Matrix3,V=new x.Matrix3,Z=new x.Matrix3,A=new x.Matrix3,D=new O.Cartesian3,k=new O.Cartesian3,F=new O.Cartographic;l.grazingAltitudeLocation=function(a,t){var e=a.origin,r=a.direction;if(!O.Cartesian3.equals(e,O.Cartesian3.ZERO)){var n=t.geodeticSurfaceNormal(e,q);if(0<=O.Cartesian3.dot(r,n))return e}var i=d.defined(this.rayEllipsoid(a,t)),s=t.transformPositionToScaledSpace(r,q),n=O.Cartesian3.normalize(s,s),a=O.Cartesian3.mostOrthogonalAxis(s,E),s=O.Cartesian3.normalize(O.Cartesian3.cross(a,n,L),L),a=O.Cartesian3.normalize(O.Cartesian3.cross(n,s,I),I),o=T;o[0]=n.x,o[1]=n.y,o[2]=n.z,o[3]=s.x,o[4]=s.y,o[5]=s.z,o[6]=a.x,o[7]=a.y,o[8]=a.z;var n=x.Matrix3.transpose(o,U),u=x.Matrix3.fromScale(t.radii,W),s=x.Matrix3.fromScale(t.oneOverRadii,B),a=V;a[0]=0,a[1]=-r.z,a[2]=r.y,a[3]=r.z,a[4]=0,a[5]=-r.x,a[6]=-r.y,a[7]=r.x,a[8]=0;var s=x.Matrix3.multiply(x.Matrix3.multiply(n,s,Z),a,Z),a=x.Matrix3.multiply(x.Matrix3.multiply(s,u,A),o,A),s=x.Matrix3.multiplyByVector(s,e,z),C=function(a,t,e,r,n){var i=r*r,s=n*n,o=(a[x.Matrix3.COLUMN1ROW1]-a[x.Matrix3.COLUMN2ROW2])*s,u=n*(r*N(a[x.Matrix3.COLUMN1ROW0],a[x.Matrix3.COLUMN0ROW1],y.CesiumMath.EPSILON15)+t.y),C=a[x.Matrix3.COLUMN0ROW0]*i+a[x.Matrix3.COLUMN2ROW2]*s+r*t.x+e,c=s*N(a[x.Matrix3.COLUMN2ROW1],a[x.Matrix3.COLUMN1ROW2],y.CesiumMath.EPSILON15),l=n*(r*N(a[x.Matrix3.COLUMN2ROW0],a[x.Matrix3.COLUMN0ROW2])+t.z),h=[];if(0==l&&0==c){if(0===(g=P.computeRealRoots(o,u,C)).length)return h;var M=g[0],f=Math.sqrt(Math.max(1-M*M,0));return h.push(new O.Cartesian3(r,n*M,n*-f)),h.push(new O.Cartesian3(r,n*M,n*f)),2===g.length&&(m=g[1],d=Math.sqrt(Math.max(1-m*m,0)),h.push(new O.Cartesian3(r,n*m,n*-d)),h.push(new O.Cartesian3(r,n*m,n*d))),h}var m=o*o+(M=c*c),d=2*(u*o+(f=l*c)),M=2*C*o+u*u-M+(t=l*l),f=2*(C*u-f),t=C*C-t;if(0==m&&0==d&&0==M&&0==f)return h;var g,p=(g=b.computeRealRoots(m,d,M,f,t)).length;if(0===p)return h;for(var v=0;v<p;++v){var w=g[v],R=w*w,S=Math.max(1-R,0),S=Math.sqrt(S),R=y.CesiumMath.sign(o)===y.CesiumMath.sign(C)?N(o*R+C,u*w,y.CesiumMath.EPSILON12):y.CesiumMath.sign(C)===y.CesiumMath.sign(u*w)?N(o*R,u*w+C,y.CesiumMath.EPSILON12):N(o*R+u*w,C,y.CesiumMath.EPSILON12),R=R*N(c*w,l,y.CesiumMath.EPSILON15);R<0?h.push(new O.Cartesian3(r,n*w,n*S)):0<R?h.push(new O.Cartesian3(r,n*w,n*-S)):0!==S?(h.push(new O.Cartesian3(r,n*w,n*-S)),h.push(new O.Cartesian3(r,n*w,n*S)),++v):h.push(new O.Cartesian3(r,n*w,n*S))}return h}(a,O.Cartesian3.negate(s,q),0,0,1),c=C.length;if(0<c){for(var l=O.Cartesian3.clone(O.Cartesian3.ZERO,k),h=Number.NEGATIVE_INFINITY,M=0;M<c;++M){var f=x.Matrix3.multiplyByVector(u,x.Matrix3.multiplyByVector(o,C[M],D),D),m=O.Cartesian3.normalize(O.Cartesian3.subtract(f,e,E),E),m=O.Cartesian3.dot(m,r);h<m&&(h=m,l=O.Cartesian3.clone(f,l))}a=t.cartesianToCartographic(l,F),h=y.CesiumMath.clamp(h,0,1),s=O.Cartesian3.magnitude(O.Cartesian3.subtract(l,e,E))*Math.sqrt(1-h*h);return s=i?-s:s,a.height=s,t.cartographicToCartesian(a,new O.Cartesian3)}};var G=new O.Cartesian3;l.lineSegmentPlane=function(a,t,e,r){d.defined(r)||(r=new O.Cartesian3);var n=O.Cartesian3.subtract(t,a,G),i=e.normal,t=O.Cartesian3.dot(i,n);if(!(Math.abs(t)<y.CesiumMath.EPSILON6)){i=O.Cartesian3.dot(i,a),t=-(e.distance+i)/t;if(!(t<0||1<t))return O.Cartesian3.multiplyByScalar(n,t,r),O.Cartesian3.add(a,r,r),r}},l.trianglePlaneIntersection=function(a,t,e,r){var n,i,s=r.normal,o=r.distance,u=O.Cartesian3.dot(s,a)+o<0,C=O.Cartesian3.dot(s,t)+o<0,s=O.Cartesian3.dot(s,e)+o<0,o=0;if(o+=u?1:0,o+=C?1:0,1!=(o+=s?1:0)&&2!=o||(n=new O.Cartesian3,i=new O.Cartesian3),1==o){if(u)return l.lineSegmentPlane(a,t,r,n),l.lineSegmentPlane(a,e,r,i),{positions:[a,t,e,n,i],indices:[0,3,4,1,2,4,1,4,3]};if(C)return l.lineSegmentPlane(t,e,r,n),l.lineSegmentPlane(t,a,r,i),{positions:[a,t,e,n,i],indices:[1,3,4,2,0,4,2,4,3]};if(s)return l.lineSegmentPlane(e,a,r,n),l.lineSegmentPlane(e,t,r,i),{positions:[a,t,e,n,i],indices:[2,3,4,0,1,4,0,4,3]}}else if(2==o){if(!u)return l.lineSegmentPlane(t,a,r,n),l.lineSegmentPlane(e,a,r,i),{positions:[a,t,e,n,i],indices:[1,2,4,1,4,3,0,3,4]};if(!C)return l.lineSegmentPlane(e,t,r,n),l.lineSegmentPlane(a,t,r,i),{positions:[a,t,e,n,i],indices:[2,0,4,2,4,3,1,3,4]};if(!s)return l.lineSegmentPlane(a,e,r,n),l.lineSegmentPlane(t,e,r,i),{positions:[a,t,e,n,i],indices:[0,1,4,0,4,3,2,3,4]}}},a.IntersectionTests=l,a.Ray=e});
