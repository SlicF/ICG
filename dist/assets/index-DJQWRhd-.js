(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="162",Bp=0,al=1,Gp=2,sh=1,Hp=2,Si=3,Ki=0,Sn=1,Ai=2,$i=0,Ks=1,cl=2,ll=3,ul=4,kp=5,ms=100,Wp=101,Xp=102,hl=103,dl=104,qp=200,Yp=201,$p=202,jp=203,Qa=204,ec=205,Zp=206,Kp=207,Jp=208,Qp=209,em=210,tm=211,nm=212,im=213,sm=214,rm=0,om=1,am=2,yo=3,cm=4,lm=5,um=6,hm=7,zo=0,dm=1,fm=2,ei=0,rh=1,oh=2,ah=3,ch=4,pm=5,lh=6,mm=7,uh=300,ir=301,sr=302,tc=303,nc=304,Bo=306,ic=1e3,Kn=1001,sc=1002,Ht=1003,fl=1004,yr=1005,_n=1006,aa=1007,Xi=1008,ji=1009,gm=1010,_m=1011,Tc=1012,hh=1013,qi=1014,ci=1015,rr=1016,dh=1017,fh=1018,_s=1020,xm=1021,Jn=1023,vm=1024,ym=1025,xs=1026,or=1027,Mm=1028,ph=1029,Sm=1030,mh=1031,gh=1033,ca=33776,la=33777,ua=33778,ha=33779,pl=35840,ml=35841,gl=35842,_l=35843,_h=36196,xl=37492,vl=37496,yl=37808,Ml=37809,Sl=37810,Tl=37811,El=37812,Al=37813,Nl=37814,bl=37815,wl=37816,Rl=37817,Cl=37818,Ll=37819,Pl=37820,Il=37821,da=36492,Dl=36494,Ul=36495,Tm=36283,Ol=36284,Fl=36285,Vl=36286,Em=3200,Am=3201,vs=0,xh=1,Ni="",Zn="srgb",Hn="srgb-linear",Ec="display-p3",Go="display-p3-linear",Mo="linear",Mt="srgb",So="rec709",To="p3",ws=7680,zl=519,Nm=512,vh=513,bm=514,yh=515,wm=516,Rm=517,Cm=518,Lm=519,Eo=35044,Mh=35048,Bl="300 es",rc=1035,bi=2e3,ar=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const wr=Math.PI/180,cr=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Ac(i,e){return(i%e+e)%e}function Pm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Im(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function Dm(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function Um(i,e=1){return e-Math.abs(Ac(i,e*2)-e)}function Om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zm(i,e){return i+Math.random()*(e-i)}function Bm(i){return i*(.5-Math.random())}function Gm(i){i!==void 0&&(Gl=i);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(i){return i*wr}function km(i){return i*cr}function oc(i){return(i&i-1)===0&&i!==0}function Wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ao(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sh={DEG2RAD:wr,RAD2DEG:cr,generateUUID:Ri,clamp:ln,euclideanModulo:Ac,mapLinear:Pm,inverseLerp:Im,lerp:Rr,damp:Dm,pingpong:Um,smoothstep:Om,smootherstep:Fm,randInt:Vm,randFloat:zm,randFloatSpread:Bm,seededRandom:Gm,degToRad:Hm,radToDeg:km,isPowerOfTwo:oc,ceilPowerOfTwo:Wm,floorPowerOfTwo:Ao,setQuaternionFromProperEuler:Xm,normalize:ft,denormalize:Qn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,s,r,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],S=s[1],y=s[4],E=s[7],D=s[2],w=s[5],A=s[8];return r[0]=a*_+o*S+c*D,r[3]=a*p+o*y+c*w,r[6]=a*f+o*E+c*A,r[1]=l*_+u*S+h*D,r[4]=l*p+u*y+h*w,r[7]=l*f+u*E+h*A,r[2]=d*_+m*S+g*D,r[5]=d*p+m*y+g*w,r[8]=d*f+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ze;function Th(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function No(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qm(){const i=No("canvas");return i.style.display="block",i}const Hl={};function Eh(i){i in Hl||(Hl[i]=!0,console.warn(i))}const kl=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wl=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[Hn]:{transfer:Mo,primaries:So,toReference:i=>i,fromReference:i=>i},[Zn]:{transfer:Mt,primaries:So,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:Mo,primaries:To,toReference:i=>i.applyMatrix3(Wl),fromReference:i=>i.applyMatrix3(kl)},[Ec]:{transfer:Mt,primaries:To,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wl),fromReference:i=>i.applyMatrix3(kl).convertLinearToSRGB()}},Ym=new Set([Hn,Go]),mt={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ym.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=jr[e].toReference,s=jr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return jr[i].primaries},getTransfer:function(i){return i===Ni?Mo:jr[i].transfer}};function Js(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Rs;class Ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=No("canvas")),Rs.width=e.width,Rs.height=e.height;const n=Rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=No("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Js(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $m=0;class Nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ma(s[a].image)):r.push(ma(s[a]))}else r=ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jm=0;class mn extends Ui{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Kn,s=Kn,r=_n,a=Xi,o=Jn,c=ji,l=mn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Ri(),this.name="",this.source=new Nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=uh;mn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(m+1)/2,D=(f+1)/2,w=(u+d)/4,A=(h+_)/4,V=(g+p)/4;return y>E&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):E>D?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=V/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=V/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends Ji{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nc extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zm extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-o;const f=c*d+l*m+u*g+h*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),w=Math.atan2(D,f*S);p=Math.sin(p*w)/D,o=Math.sin(o*w)/D}const E=o*S;if(c=c*p+d*E,l=l*p+m*E,u=u*p+g*E,h=h*p+_*E,p===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-o*m,e[t+2]=l*g+u*m+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new U,Xl=new zr;class wi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mr),Kr.subVectors(this.max,Mr),Cs.subVectors(e.a,Mr),Ls.subVectors(e.b,Mr),Ps.subVectors(e.c,Mr),Oi.subVectors(Ls,Cs),Fi.subVectors(Ps,Ls),rs.subVectors(Cs,Ps);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-rs.z,rs.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,rs.z,0,-rs.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-rs.y,rs.x,0];return!_a(t,Cs,Ls,Ps,Kr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Cs,Ls,Ps,Kr))?!1:(Jr.crossVectors(Oi,Fi),t=[Jr.x,Jr.y,Jr.z],_a(t,Cs,Ls,Ps,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new U,new U,new U,new U,new U,new U,new U,new U],Yn=new U,Zr=new wi,Cs=new U,Ls=new U,Ps=new U,Oi=new U,Fi=new U,rs=new U,Mr=new U,Kr=new U,Jr=new U,os=new U;function _a(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);const o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Km=new wi,Sr=new U,xa=new U;class bc{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Km.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(xa)),this.expandByPoint(Sr.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new U,va=new U,Qr=new U,Vi=new U,ya=new U,eo=new U,Ma=new U;class Jm{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=Vi.dot(this.direction),c=-Vi.dot(Qr),l=Vi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(va).addScaledVector(Qr,d),m}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){ya.subVectors(t,e),eo.subVectors(n,e),Ma.crossVectors(ya,eo);let a=this.direction.dot(Ma),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vi.subVectors(this.origin,e);const c=o*this.direction.dot(eo.crossVectors(Vi,eo));if(c<0)return null;const l=o*this.direction.dot(ya.cross(Vi));if(l<0||c+l>a)return null;const u=-o*Vi.dot(Ma);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,r,a,o,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qm,e,eg)}lookAt(e,t,n){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(n,wn),zi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(n,wn)),zi.normalize(),to.crossVectors(wn,zi),s[0]=zi.x,s[4]=to.x,s[8]=wn.x,s[1]=zi.y,s[5]=to.y,s[9]=wn.y,s[2]=zi.z,s[6]=to.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],S=n[3],y=n[7],E=n[11],D=n[15],w=s[0],A=s[4],V=s[8],K=s[12],v=s[1],N=s[5],ue=s[9],le=s[13],P=s[2],Q=s[6],j=s[10],ie=s[14],q=s[3],J=s[7],se=s[11],he=s[15];return r[0]=a*w+o*v+c*P+l*q,r[4]=a*A+o*N+c*Q+l*J,r[8]=a*V+o*ue+c*j+l*se,r[12]=a*K+o*le+c*ie+l*he,r[1]=u*w+h*v+d*P+m*q,r[5]=u*A+h*N+d*Q+m*J,r[9]=u*V+h*ue+d*j+m*se,r[13]=u*K+h*le+d*ie+m*he,r[2]=g*w+_*v+p*P+f*q,r[6]=g*A+_*N+p*Q+f*J,r[10]=g*V+_*ue+p*j+f*se,r[14]=g*K+_*le+p*ie+f*he,r[3]=S*w+y*v+E*P+D*q,r[7]=S*A+y*N+E*Q+D*J,r[11]=S*V+y*ue+E*j+D*se,r[15]=S*K+y*le+E*ie+D*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*m-n*c*m)+_*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+p*(+t*l*h-t*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],S=h*p*l-_*d*l+_*c*m-o*p*m-h*c*f+o*d*f,y=g*d*l-u*p*l-g*c*m+a*p*m+u*c*f-a*d*f,E=u*_*l-g*h*l+g*o*m-a*_*m-u*o*f+a*h*f,D=g*h*c-u*_*c-g*o*d+a*_*d+u*o*p-a*h*p,w=t*S+n*y+s*E+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=S*A,e[1]=(_*d*r-h*p*r-_*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*f+n*c*f)*A,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*m-n*c*m)*A,e[4]=y*A,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*f+t*d*f)*A,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*m+t*c*m)*A,e[8]=E*A,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*f-t*h*f)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*m-t*o*m)*A,e[12]=D*A,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,_=a*u,p=a*h,f=o*h,S=c*l,y=c*u,E=c*h,D=n.x,w=n.y,A=n.z;return s[0]=(1-(_+f))*D,s[1]=(m+E)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(d+f))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(p-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const a=Is.set(s[4],s[5],s[6]).length(),o=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);const l=1/r,u=1/a,h=1/o;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=bi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(o===bi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ar)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*l,m=(n+s)*u;let g,_;if(o===bi)g=(a+r)*h,_=-2*h;else if(o===ar)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new U,$n=new Nt,Qm=new U(0,0,0),eg=new U(1,1,1),zi=new U,to=new U,wn=new U,ql=new Nt,Yl=new zr;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tg=0;const $l=new U,Ds=new zr,vi=new Nt,no=new U,Tr=new U,ng=new U,ig=new zr,jl=new U(1,0,0),Zl=new U(0,1,0),Kl=new U(0,0,1),sg={type:"added"},rg={type:"removed"},Sa={type:"childadded",child:null},Ta={type:"childremoved",child:null};class qt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,t=new Pn,n=new zr,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ze}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Kl,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Tr,no,this.up):vi.lookAt(no,Tr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(vi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sg),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new U,yi=new U,Ea=new U,Mi=new U,Us=new U,Os=new U,Jl=new U,Aa=new U,Na=new U,ba=new U;class li{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),yi.subVectors(n,t),Ea.subVectors(e,t);const a=jn.dot(jn),o=jn.dot(yi),c=jn.dot(Ea),l=yi.dot(yi),u=yi.dot(Ea),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),yi.subVectors(e,t),jn.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return li.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Us.subVectors(s,n),Os.subVectors(r,n),Aa.subVectors(e,n);const c=Us.dot(Aa),l=Os.dot(Aa);if(c<=0&&l<=0)return t.copy(n);Na.subVectors(e,s);const u=Us.dot(Na),h=Os.dot(Na);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Us,a);ba.subVectors(e,r);const m=Us.dot(ba),g=Os.dot(ba);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Os,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Jl.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Jl,o);const f=1/(p+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(Us,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},io={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Ac(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wa(a,r,e+1/3),this.g=wa(a,r,e),this.b=wa(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return mt.fromWorkingColorSpace(cn.copy(this),e),Math.round(ln(cn.r*255,0,255))*65536+Math.round(ln(cn.g*255,0,255))*256+Math.round(ln(cn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Zn){mt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(io);const n=Rr(Bi.h,io.h,t),s=Rr(Bi.s,io.s,t),r=Rr(Bi.l,io.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new He;He.NAMES=wh;let og=0;class kn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ks,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=ec,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ec&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wc extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new U,so=new Fe;class ti{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Eh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)so.fromBufferAttribute(this,t),so.applyMatrix3(e),this.setXY(t,so.x,so.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eo&&(e.usage=this.usage),e}}class Rh extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ch extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ci extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ag=0;const Fn=new Nt,Ra=new qt,Fs=new U,Rn=new wi,Er=new wi,Zt=new U;class ts extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Th(e)?Ch:Rh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Rn.min,Er.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,Er.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(Er.min),Rn.expandByPoint(Er.max))}Rn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),Zt.add(Fs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let V=0;V<n.count;V++)o[V]=new U,c[V]=new U;const l=new U,u=new U,h=new U,d=new Fe,m=new Fe,g=new Fe,_=new U,p=new U;function f(V,K,v){l.fromBufferAttribute(n,V),u.fromBufferAttribute(n,K),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,V),m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,v),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(N),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(N),o[V].add(_),o[K].add(_),o[v].add(_),c[V].add(p),c[K].add(p),c[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let V=0,K=S.length;V<K;++V){const v=S[V],N=v.start,ue=v.count;for(let le=N,P=N+ue;le<P;le+=3)f(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const y=new U,E=new U,D=new U,w=new U;function A(V){D.fromBufferAttribute(s,V),w.copy(D);const K=o[V];y.copy(K),y.sub(D.multiplyScalar(D.dot(K))).normalize(),E.crossVectors(w,K);const N=E.dot(c[V])<0?-1:1;a.setXYZW(V,y.x,y.y,y.z,N)}for(let V=0,K=S.length;V<K;++V){const v=S[V],N=v.start,ue=v.count;for(let le=N,P=N+ue;le<P;le+=3)A(e.getX(le+0)),A(e.getX(le+1)),A(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new ti(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ts,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Nt,as=new Jm,ro=new bc,eu=new U,Vs=new U,zs=new U,Bs=new U,Ca=new U,oo=new U,ao=new Fe,co=new Fe,lo=new Fe,tu=new U,nu=new U,iu=new U,uo=new U,ho=new U;class un extends qt{constructor(e=new ts,t=new wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ca.fromBufferAttribute(h,e),a?oo.addScaledVector(Ca,u):oo.addScaledVector(Ca.sub(t),u))}t.add(oo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ro.containsPoint(as.origin)===!1&&(as.intersectSphere(ro,eu)===null||as.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Ql.copy(r).invert(),as.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,D=y;E<D;E+=3){const w=o.getX(E),A=o.getX(E+1),V=o.getX(E+2);s=fo(this,f,e,n,l,u,h,w,A,V),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);s=fo(this,a,e,n,l,u,h,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,D=y;E<D;E+=3){const w=E,A=E+1,V=E+2;s=fo(this,f,e,n,l,u,h,w,A,V),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=p,y=p+1,E=p+2;s=fo(this,a,e,n,l,u,h,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function cg(i,e,t,n,s,r,a,o){let c;if(e.side===Sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ki,o),c===null)return null;ho.copy(o),ho.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Vs),i.getVertexPosition(c,zs),i.getVertexPosition(l,Bs);const u=cg(i,e,t,n,Vs,zs,Bs,uo);if(u){s&&(ao.fromBufferAttribute(s,o),co.fromBufferAttribute(s,c),lo.fromBufferAttribute(s,l),u.uv=li.getInterpolation(uo,Vs,zs,Bs,ao,co,lo,new Fe)),r&&(ao.fromBufferAttribute(r,o),co.fromBufferAttribute(r,c),lo.fromBufferAttribute(r,l),u.uv1=li.getInterpolation(uo,Vs,zs,Bs,ao,co,lo,new Fe)),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,c),iu.fromBufferAttribute(a,l),u.normal=li.getInterpolation(uo,Vs,zs,Bs,tu,nu,iu,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};li.getNormal(Vs,zs,Bs,h.normal),u.face=h}return u}class Ms extends ts{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ci(l,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(h,2));function g(_,p,f,S,y,E,D,w,A,V,K){const v=E/A,N=D/V,ue=E/2,le=D/2,P=w/2,Q=A+1,j=V+1;let ie=0,q=0;const J=new U;for(let se=0;se<j;se++){const he=se*N-le;for(let Ee=0;Ee<Q;Ee++){const Xe=Ee*v-ue;J[_]=Xe*S,J[p]=he*y,J[f]=P,l.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[f]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ee/A),h.push(1-se/V),ie+=1}}for(let se=0;se<V;se++)for(let he=0;he<A;he++){const Ee=d+he+Q*se,Xe=d+he+Q*(se+1),L=d+(he+1)+Q*(se+1),Z=d+(he+1)+Q*se;c.push(Ee,Xe,Z),c.push(Xe,L,Z),q+=6}o.addGroup(m,q,K),m+=q,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=lr(i[t]);for(const s in n)e[s]=n[s]}return e}function lg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lh(i){return i.getRenderTarget()===null?i.outputColorSpace:mt.workingColorSpace}const ug={clone:lr,merge:fn};var hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ph extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new U,su=new Fe,ru=new Fe;class vn extends Ph{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Hs=1;class fg extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Gs,Hs,e,t);s.layers=this.layers,this.add(s);const r=new vn(Gs,Hs,e,t);r.layers=this.layers,this.add(r);const a=new vn(Gs,Hs,e,t);a.layers=this.layers,this.add(a);const o=new vn(Gs,Hs,e,t);o.layers=this.layers,this.add(o);const c=new vn(Gs,Hs,e,t);c.layers=this.layers,this.add(c);const l=new vn(Gs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ih extends mn{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ih(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:$i});r.uniforms.tEquirect.value=t;const a=new un(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=_n),new fg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const La=new U,mg=new U,gg=new Ze;class ki{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=La.subVectors(n,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gg.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new bc,po=new U;class Rc{constructor(e=new ki,t=new ki,n=new ki,s=new ki,r=new ki,a=new ki){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],S=s[13],y=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,p-m,E-f).normalize(),n[1].setComponents(c+r,d+l,p+m,E+f).normalize(),n[2].setComponents(c+a,d+u,p+g,E+S).normalize(),n[3].setComponents(c-a,d-u,p-g,E-S).normalize(),n[4].setComponents(c-o,d-h,p-_,E-y).normalize(),t===bi)n[5].setComponents(c+o,d+h,p+_,E+y).normalize();else if(t===ar)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(po.x=s.normal.x>0?e.max.x:e.min.x,po.y=s.normal.y>0?e.max.y:e.min.y,po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _g(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class Ho extends ts{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const S=f*d-a;for(let y=0;y<l;y++){const E=y*h-r;g.push(E,-S,0),_.push(0,0,1),p.push(y/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const y=S+l*f,E=S+l*(f+1),D=S+1+l*(f+1),w=S+1+l*f;m.push(y,E,w),m.push(E,D,w)}this.setIndex(m),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ng=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,__=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:xg,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Tg,aomap_fragment:Eg,aomap_pars_fragment:Ag,batching_pars_vertex:Ng,batching_vertex:bg,begin_vertex:wg,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Lg,bumpmap_pars_fragment:Pg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Og,color_fragment:Fg,color_pars_fragment:Vg,color_pars_vertex:zg,color_vertex:Bg,common:Gg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:kg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:$g,colorspace_pars_fragment:jg,envmap_fragment:Zg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_fragment:o_,lightmap_pars_fragment:a_,lights_lambert_fragment:c_,lights_lambert_pars_fragment:l_,lights_pars_begin:u_,lights_toon_fragment:d_,lights_toon_pars_fragment:f_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:__,lights_fragment_begin:x_,lights_fragment_maps:v_,lights_fragment_end:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:E_,map_fragment:A_,map_pars_fragment:N_,map_particle_fragment:b_,map_particle_pars_fragment:w_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:C_,morphinstance_vertex:L_,morphcolor_vertex:P_,morphnormal_vertex:I_,morphtarget_pars_vertex:D_,morphtarget_vertex:U_,normal_fragment_begin:O_,normal_fragment_maps:F_,normal_pars_fragment:V_,normal_pars_vertex:z_,normal_vertex:B_,normalmap_pars_fragment:G_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:$_,project_vertex:j_,dithering_fragment:Z_,dithering_pars_fragment:K_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:cx,specularmap_pars_fragment:lx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:xx,background_frag:vx,backgroundCube_vert:yx,backgroundCube_frag:Mx,cube_vert:Sx,cube_frag:Tx,depth_vert:Ex,depth_frag:Ax,distanceRGBA_vert:Nx,distanceRGBA_frag:bx,equirect_vert:wx,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Lx,meshbasic_vert:Px,meshbasic_frag:Ix,meshlambert_vert:Dx,meshlambert_frag:Ux,meshmatcap_vert:Ox,meshmatcap_frag:Fx,meshnormal_vert:Vx,meshnormal_frag:zx,meshphong_vert:Bx,meshphong_frag:Gx,meshphysical_vert:Hx,meshphysical_frag:kx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:$x,shadow_frag:jx,sprite_vert:Zx,sprite_frag:Kx},pe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},oi={basic:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new He(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:fn([pe.points,pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:fn([pe.common,pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:fn([pe.sprite,pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:fn([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:fn([pe.lights,pe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const mo={r:0,b:0,g:0},ls=new Pn,Jx=new Nt;function Qx(i,e,t,n,s,r,a){const o=new He(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let S=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,c):y&&y.isColor&&(_(y,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Bo)?(u===void 0&&(u=new un(new Ms(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:lr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(f.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(ls)),u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Mt,(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new un(new Ho(2,2),new Pi({name:"BackgroundMaterial",uniforms:lr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(mo,Lh(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function ev(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(P,Q,j,ie,q){let J=!1;if(a){const se=_(ie,j,Q);l!==se&&(l=se,m(l.object)),J=f(P,ie,j,q),J&&S(P,ie,j,q)}else{const se=Q.wireframe===!0;(l.geometry!==ie.id||l.program!==j.id||l.wireframe!==se)&&(l.geometry=ie.id,l.program=j.id,l.wireframe=se,J=!0)}q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,V(P,Q,j,ie),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,Q,j){const ie=j.wireframe===!0;let q=o[P.id];q===void 0&&(q={},o[P.id]=q);let J=q[Q.id];J===void 0&&(J={},q[Q.id]=J);let se=J[ie];return se===void 0&&(se=p(d()),J[ie]=se),se}function p(P){const Q=[],j=[],ie=[];for(let q=0;q<s;q++)Q[q]=0,j[q]=0,ie[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:j,attributeDivisors:ie,object:P,attributes:{},index:null}}function f(P,Q,j,ie){const q=l.attributes,J=Q.attributes;let se=0;const he=j.getAttributes();for(const Ee in he)if(he[Ee].location>=0){const L=q[Ee];let Z=J[Ee];if(Z===void 0&&(Ee==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Ee==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;se++}return l.attributesNum!==se||l.index!==ie}function S(P,Q,j,ie){const q={},J=Q.attributes;let se=0;const he=j.getAttributes();for(const Ee in he)if(he[Ee].location>=0){let L=J[Ee];L===void 0&&(Ee==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),Ee==="instanceColor"&&P.instanceColor&&(L=P.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),q[Ee]=Z,se++}l.attributes=q,l.attributesNum=se,l.index=ie}function y(){const P=l.newAttributes;for(let Q=0,j=P.length;Q<j;Q++)P[Q]=0}function E(P){D(P,0)}function D(P,Q){const j=l.newAttributes,ie=l.enabledAttributes,q=l.attributeDivisors;j[P]=1,ie[P]===0&&(i.enableVertexAttribArray(P),ie[P]=1),q[P]!==Q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,Q),q[P]=Q)}function w(){const P=l.newAttributes,Q=l.enabledAttributes;for(let j=0,ie=Q.length;j<ie;j++)Q[j]!==P[j]&&(i.disableVertexAttribArray(j),Q[j]=0)}function A(P,Q,j,ie,q,J,se){se===!0?i.vertexAttribIPointer(P,Q,j,q,J):i.vertexAttribPointer(P,Q,j,ie,q,J)}function V(P,Q,j,ie){if(n.isWebGL2===!1&&(P.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const q=ie.attributes,J=j.getAttributes(),se=Q.defaultAttributeValues;for(const he in J){const Ee=J[he];if(Ee.location>=0){let Xe=q[he];if(Xe===void 0&&(he==="instanceMatrix"&&P.instanceMatrix&&(Xe=P.instanceMatrix),he==="instanceColor"&&P.instanceColor&&(Xe=P.instanceColor)),Xe!==void 0){const L=Xe.normalized,Z=Xe.itemSize,Ne=t.get(Xe);if(Ne===void 0)continue;const Pe=Ne.buffer,be=Ne.type,Me=Ne.bytesPerElement,at=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||Xe.gpuType===hh);if(Xe.isInterleavedBufferAttribute){const ze=Xe.data,O=ze.stride,Gt=Xe.offset;if(ze.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Ee.locationSize;Ue++)D(Ee.location+Ue,ze.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let Ue=0;Ue<Ee.locationSize;Ue++)E(Ee.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ue=0;Ue<Ee.locationSize;Ue++)A(Ee.location+Ue,Z/Ee.locationSize,be,L,O*Me,(Gt+Z/Ee.locationSize*Ue)*Me,at)}else{if(Xe.isInstancedBufferAttribute){for(let ze=0;ze<Ee.locationSize;ze++)D(Ee.location+ze,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ze=0;ze<Ee.locationSize;ze++)E(Ee.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ze=0;ze<Ee.locationSize;ze++)A(Ee.location+ze,Z/Ee.locationSize,be,L,Z*Me,Z/Ee.locationSize*ze*Me,at)}}else if(se!==void 0){const L=se[he];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(Ee.location,L);break;case 3:i.vertexAttrib3fv(Ee.location,L);break;case 4:i.vertexAttrib4fv(Ee.location,L);break;default:i.vertexAttrib1fv(Ee.location,L)}}}}w()}function K(){ue();for(const P in o){const Q=o[P];for(const j in Q){const ie=Q[j];for(const q in ie)g(ie[q].object),delete ie[q];delete Q[j]}delete o[P]}}function v(P){if(o[P.id]===void 0)return;const Q=o[P.id];for(const j in Q){const ie=Q[j];for(const q in ie)g(ie[q].object),delete ie[q];delete Q[j]}delete o[P.id]}function N(P){for(const Q in o){const j=o[Q];if(j[P.id]===void 0)continue;const ie=j[P.id];for(const q in ie)g(ie[q].object),delete ie[q];delete j[P.id]}}function ue(){le(),u=!0,l!==c&&(l=c,m(l.object))}function le(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ue,resetDefaultState:le,dispose:K,releaseStatesOfGeometry:v,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:E,disableUnusedAttributes:w}}function tv(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function nv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=a||e.has("OES_texture_float"),D=y&&E,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:D,maxSamples:w}}function iv(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ki,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,y=S*4;let E=f.clippingState||null;c.value=E,E=u(g,d,y,m);for(let D=0;D!==y;++D)E[D]=t[D];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,E=m;y!==_;++y,E+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function sv(i){let e=new WeakMap;function t(a,o){return o===tc?a.mapping=ir:o===nc&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===tc||o===nc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Cc extends Ph{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qs=4,ou=[.125,.215,.35,.446,.526,.582],gs=20,Pa=new Cc,au=new He;let Ia=null,Da=0,Ua=0;const fs=(1+Math.sqrt(5))/2,ks=1/fs,cu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,fs,ks),new U(0,fs,-ks),new U(ks,0,fs),new U(-ks,0,fs),new U(fs,ks,0),new U(-fs,ks,0)];class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Da,Ua),e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:rr,format:Jn,colorSpace:Hn,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(r)),this._blurMaterial=ov(r,e,t)}return s}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,s){const o=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(au),u.toneMapping=ei,u.autoClear=!1;const m=new wc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new un(new Ms,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(au),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const y=this._cubeSize;go(s,S*y,f>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new un(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cu[(s-1)%cu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new un(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):gs;p>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const f=[];let S=0;for(let A=0;A<gs;++A){const V=A/_,K=Math.exp(-V*V/2);f.push(K),A===0?S+=K:A<p&&(S+=2*K)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const E=this._sizeLods[s],D=3*E*(s>y-qs?s-y+qs:0),w=4*(this._cubeSize-E);go(t,D,w,3*E,2*E),c.setRenderTarget(t),c.render(h,Pa)}}function rv(i){const e=[],t=[],n=[];let s=i;const r=i-qs+1+ou.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-qs?c=ou[a-i+qs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),y=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,V=w>2?0:-1,K=[A,V,0,A+2/3,V,0,A+2/3,V+1,0,A,V,0,A+2/3,V+1,0,A,V+1,0];S.set(K,_*g*w),y.set(d,p*g*w);const v=[w,w,w,w,w,w];E.set(v,f*g*w)}const D=new ts;D.setAttribute("position",new ti(S,_)),D.setAttribute("uv",new ti(y,p)),D.setAttribute("faceIndex",new ti(E,f)),e.push(D),s>qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){const n=new ys(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ov(i,e,t){const n=new Float32Array(gs),s=new U(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function hu(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function du(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function av(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===tc||c===nc,u=c===ir||c===sr;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new lu(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new lu(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function cv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lv(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let y=0,E=S.length;y<E;y+=3){const D=S[y+0],w=S[y+1],A=S[y+2];d.push(D,w,w,A,A,D)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const D=y+0,w=y+1,A=y+2;d.push(D,w,w,A,A,D)}}else return;const p=new(Th(d)?Ch:Rh)(d,1);p.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function uv(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*c),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*c,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];t.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function hv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function dv(i,e){return i[0]-e[0]}function fv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function pv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let le=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",le)};var m=le;p!==void 0&&p.texture.dispose();const f=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;f===!0&&(A=1),S===!0&&(A=2),y===!0&&(A=3);let V=u.attributes.position.count*A,K=1;V>e.maxTextureSize&&(K=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const v=new Float32Array(V*K*4*_),N=new Nc(v,V,K,_);N.type=ci,N.needsUpdate=!0;const ue=A*4;for(let P=0;P<_;P++){const Q=E[P],j=D[P],ie=w[P],q=V*K*4*P;for(let J=0;J<Q.count;J++){const se=J*ue;f===!0&&(a.fromBufferAttribute(Q,J),v[q+se+0]=a.x,v[q+se+1]=a.y,v[q+se+2]=a.z,v[q+se+3]=0),S===!0&&(a.fromBufferAttribute(j,J),v[q+se+4]=a.x,v[q+se+5]=a.y,v[q+se+6]=a.z,v[q+se+7]=0),y===!0&&(a.fromBufferAttribute(ie,J),v[q+se+8]=a.x,v[q+se+9]=a.y,v[q+se+10]=a.z,v[q+se+11]=ie.itemSize===4?a.w:1)}}p={count:_,texture:N,size:new Fe(V,K)},r.set(u,p),u.addEventListener("dispose",le)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];const S=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];n[u.id]=_}for(let E=0;E<g;E++){const D=_[E];D[0]=E,D[1]=d[E]}_.sort(fv);for(let E=0;E<8;E++)E<g&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(dv);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const D=o[E],w=D[0],A=D[1];w!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+E)!==p[w]&&u.setAttribute("morphTarget"+E,p[w]),f&&u.getAttribute("morphNormal"+E)!==f[w]&&u.setAttribute("morphNormal"+E,f[w]),s[E]=A,S+=A):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),f&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function mv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Br extends mn{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:xs,u!==xs&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=qi),n===void 0&&u===or&&(n=_s),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Uh=new mn,Oh=new Br(1,1);Oh.compareFunction=yh;const Fh=new Nc,Vh=new Zm,zh=new Ih,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),$t(t,n)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),$t(t,n)}}function Sv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),$t(t,n)}}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Oh:Uh;t.setTexture2D(e||r,s)}function Pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vh,s)}function Iv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zh,s)}function Dv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fh,s)}function Uv(i){switch(i){case 5126:return gv;case 35664:return _v;case 35665:return xv;case 35666:return vv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Nv;case 5125:return bv;case 36294:return wv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Dv}}function Ov(i,e){i.uniform1fv(this.addr,e)}function Fv(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function zv(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Bv(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gv(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hv(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function Xv(i,e){i.uniform3iv(this.addr,e)}function qv(i,e){i.uniform4iv(this.addr,e)}function Yv(i,e){i.uniform1uiv(this.addr,e)}function $v(i,e){i.uniform2uiv(this.addr,e)}function jv(i,e){i.uniform3uiv(this.addr,e)}function Zv(i,e){i.uniform4uiv(this.addr,e)}function Kv(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Uh,r[a])}function Jv(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vh,r[a])}function Qv(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||zh,r[a])}function e0(i,e,t){const n=this.cache,s=e.length,r=ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Fh,r[a])}function t0(i){switch(i){case 5126:return Ov;case 35664:return Fv;case 35665:return Vv;case 35666:return zv;case 35674:return Bv;case 35675:return Gv;case 35676:return Hv;case 5124:case 35670:return kv;case 35667:case 35671:return Wv;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return $v;case 36295:return jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return e0}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uv(t.type)}}class i0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}}class s0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function xu(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),a=Oa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){xu(t,l===void 0?new n0(o,i,e):new i0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new s0(o),xu(t,h)),t=h}}}class xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);r0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function vu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const o0=37297;let a0=0;function c0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function l0(i){const e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i);let n;switch(e===t?n="":e===To&&t===So?n="LinearDisplayP3ToLinearSRGB":e===So&&t===To&&(n="LinearSRGBToLinearDisplayP3"),i){case Hn:case Go:return[n,"LinearTransferOETF"];case Zn:case Ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function yu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+c0(i.getShaderSource(e),a)}else return s}function u0(i,e){const t=l0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function h0(i,e){let t;switch(e){case rh:t="Linear";break;case oh:t="Reinhard";break;case ah:t="OptimizedCineon";break;case ch:t="ACESFilmic";break;case lh:t="AgX";break;case mm:t="Neutral";break;case pm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function d0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function p0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function Mu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(g0,x0)}const _0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function x0(i,e){let t=tt[e];if(t===void 0){const n=_0.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(v0,y0)}function y0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zo:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case fm:e="ENVMAP_BLENDING_ADD";break}return e}function A0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=M0(t),l=S0(t),u=T0(t),h=E0(t),d=A0(t),m=t.isWebGL2?"":d0(t),g=f0(t),_=p0(r),p=s.createProgram();let f,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ys).join(`
`),S.length>0&&(S+=`
`)):(f=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),S=[m,Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?tt.tonemapping_pars_fragment:"",t.toneMapping!==ei?h0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=ac(a),a=Mu(a,t),a=Su(a,t),o=ac(o),o=Mu(o,t),o=Su(o,t),a=Tu(a),o=Tu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=y+f+a,D=y+S+o,w=vu(s,s.VERTEX_SHADER,E),A=vu(s,s.FRAGMENT_SHADER,D);s.attachShader(p,w),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function V(ue){if(i.debug.checkShaderErrors){const le=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(w).trim(),Q=s.getShaderInfoLog(A).trim();let j=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,w,A);else{const q=yu(s,w,"vertex"),J=yu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+ue.name+`
Material Type: `+ue.type+`

Program Info Log: `+le+`
`+q+`
`+J)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(P===""||Q==="")&&(ie=!1);ie&&(ue.diagnostics={runnable:j,programLog:le,vertexShader:{log:P,prefix:f},fragmentShader:{log:Q,prefix:S}})}s.deleteShader(w),s.deleteShader(A),K=new xo(s,p),v=m0(s,p)}let K;this.getUniforms=function(){return K===void 0&&V(this),K};let v;this.getAttributes=function(){return v===void 0&&V(this),v};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,o0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=A,this}let b0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new R0(e),t.set(e,n)),n}}class R0{constructor(e){this.id=b0++,this.code=e,this.usedTimes=0}}function C0(i,e,t,n,s,r,a){const o=new bh,c=new w0,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,N,ue,le,P){const Q=le.fog,j=P.geometry,ie=v.isMeshStandardMaterial?le.environment:null,q=(v.isMeshStandardMaterial?t:e).get(v.envMap||ie),J=q&&q.mapping===Bo?q.image.height:null,se=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=he!==void 0?he.length:0;let Xe=0;j.morphAttributes.position!==void 0&&(Xe=1),j.morphAttributes.normal!==void 0&&(Xe=2),j.morphAttributes.color!==void 0&&(Xe=3);let L,Z,Ne,Pe;if(se){const _t=oi[se];L=_t.vertexShader,Z=_t.fragmentShader}else L=v.vertexShader,Z=v.fragmentShader,c.update(v),Ne=c.getVertexShaderID(v),Pe=c.getFragmentShaderID(v);const be=i.getRenderTarget(),Me=P.isInstancedMesh===!0,at=P.isBatchedMesh===!0,ze=!!v.map,O=!!v.matcap,Gt=!!q,Ue=!!v.aoMap,Ke=!!v.lightMap,ce=!!v.bumpMap,_e=!!v.normalMap,xe=!!v.displacementMap,we=!!v.emissiveMap,rt=!!v.metalnessMap,T=!!v.roughnessMap,x=v.anisotropy>0,Y=v.clearcoat>0,$=v.iridescence>0,re=v.sheen>0,ee=v.transmission>0,Je=x&&!!v.anisotropyMap,Ge=Y&&!!v.clearcoatMap,me=Y&&!!v.clearcoatNormalMap,Se=Y&&!!v.clearcoatRoughnessMap,Qe=$&&!!v.iridescenceMap,de=$&&!!v.iridescenceThicknessMap,Ot=re&&!!v.sheenColorMap,it=re&&!!v.sheenRoughnessMap,Oe=!!v.specularMap,Ce=!!v.specularColorMap,Ie=!!v.specularIntensityMap,ot=ee&&!!v.transmissionMap,$e=ee&&!!v.thicknessMap,Et=!!v.gradientMap,C=!!v.alphaMap,ve=v.alphaTest>0,k=!!v.alphaHash,fe=!!v.extensions;let Te=ei;v.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Te=i.toneMapping);const st={isWebGL2:h,shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:L,fragmentShader:Z,defines:v.defines,customVertexShaderID:Ne,customFragmentShaderID:Pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:at,instancing:Me,instancingColor:Me&&P.instanceColor!==null,instancingMorph:Me&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Hn,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:O,envMap:Gt,envMapMode:Gt&&q.mapping,envMapCubeUVHeight:J,aoMap:Ue,lightMap:Ke,bumpMap:ce,normalMap:_e,displacementMap:m&&xe,emissiveMap:we,normalMapObjectSpace:_e&&v.normalMapType===xh,normalMapTangentSpace:_e&&v.normalMapType===vs,metalnessMap:rt,roughnessMap:T,anisotropy:x,anisotropyMap:Je,clearcoat:Y,clearcoatMap:Ge,clearcoatNormalMap:me,clearcoatRoughnessMap:Se,iridescence:$,iridescenceMap:Qe,iridescenceThicknessMap:de,sheen:re,sheenColorMap:Ot,sheenRoughnessMap:it,specularMap:Oe,specularColorMap:Ce,specularIntensityMap:Ie,transmission:ee,transmissionMap:ot,thicknessMap:$e,gradientMap:Et,opaque:v.transparent===!1&&v.blending===Ks&&v.alphaToCoverage===!1,alphaMap:C,alphaTest:ve,alphaHash:k,combine:v.combine,mapUv:ze&&p(v.map.channel),aoMapUv:Ue&&p(v.aoMap.channel),lightMapUv:Ke&&p(v.lightMap.channel),bumpMapUv:ce&&p(v.bumpMap.channel),normalMapUv:_e&&p(v.normalMap.channel),displacementMapUv:xe&&p(v.displacementMap.channel),emissiveMapUv:we&&p(v.emissiveMap.channel),metalnessMapUv:rt&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:Je&&p(v.anisotropyMap.channel),clearcoatMapUv:Ge&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&p(v.sheenRoughnessMap.channel),specularMapUv:Oe&&p(v.specularMap.channel),specularColorMapUv:Ce&&p(v.specularColorMap.channel),specularIntensityMapUv:Ie&&p(v.specularIntensityMap.channel),transmissionMapUv:ot&&p(v.transmissionMap.channel),thicknessMapUv:$e&&p(v.thicknessMap.channel),alphaMapUv:C&&p(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(_e||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!j.attributes.uv&&(ze||C),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Xe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&ue.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&mt.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===Sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:fe&&v.extensions.derivatives===!0,extensionFragDepth:fe&&v.extensions.fragDepth===!0,extensionDrawBuffers:fe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:fe&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function S(v){const N=[];if(v.shaderID?N.push(v.shaderID):(N.push(v.customVertexShaderID),N.push(v.customFragmentShaderID)),v.defines!==void 0)for(const ue in v.defines)N.push(ue),N.push(v.defines[ue]);return v.isRawShaderMaterial===!1&&(y(N,v),E(N,v),N.push(i.outputColorSpace)),N.push(v.customProgramCacheKey),N.join()}function y(v,N){v.push(N.precision),v.push(N.outputColorSpace),v.push(N.envMapMode),v.push(N.envMapCubeUVHeight),v.push(N.mapUv),v.push(N.alphaMapUv),v.push(N.lightMapUv),v.push(N.aoMapUv),v.push(N.bumpMapUv),v.push(N.normalMapUv),v.push(N.displacementMapUv),v.push(N.emissiveMapUv),v.push(N.metalnessMapUv),v.push(N.roughnessMapUv),v.push(N.anisotropyMapUv),v.push(N.clearcoatMapUv),v.push(N.clearcoatNormalMapUv),v.push(N.clearcoatRoughnessMapUv),v.push(N.iridescenceMapUv),v.push(N.iridescenceThicknessMapUv),v.push(N.sheenColorMapUv),v.push(N.sheenRoughnessMapUv),v.push(N.specularMapUv),v.push(N.specularColorMapUv),v.push(N.specularIntensityMapUv),v.push(N.transmissionMapUv),v.push(N.thicknessMapUv),v.push(N.combine),v.push(N.fogExp2),v.push(N.sizeAttenuation),v.push(N.morphTargetsCount),v.push(N.morphAttributeCount),v.push(N.numDirLights),v.push(N.numPointLights),v.push(N.numSpotLights),v.push(N.numSpotLightMaps),v.push(N.numHemiLights),v.push(N.numRectAreaLights),v.push(N.numDirLightShadows),v.push(N.numPointLightShadows),v.push(N.numSpotLightShadows),v.push(N.numSpotLightShadowsWithMaps),v.push(N.numLightProbes),v.push(N.shadowMapType),v.push(N.toneMapping),v.push(N.numClippingPlanes),v.push(N.numClipIntersection),v.push(N.depthPacking)}function E(v,N){o.disableAll(),N.isWebGL2&&o.enable(0),N.supportsVertexTextures&&o.enable(1),N.instancing&&o.enable(2),N.instancingColor&&o.enable(3),N.instancingMorph&&o.enable(4),N.matcap&&o.enable(5),N.envMap&&o.enable(6),N.normalMapObjectSpace&&o.enable(7),N.normalMapTangentSpace&&o.enable(8),N.clearcoat&&o.enable(9),N.iridescence&&o.enable(10),N.alphaTest&&o.enable(11),N.vertexColors&&o.enable(12),N.vertexAlphas&&o.enable(13),N.vertexUv1s&&o.enable(14),N.vertexUv2s&&o.enable(15),N.vertexUv3s&&o.enable(16),N.vertexTangents&&o.enable(17),N.anisotropy&&o.enable(18),N.alphaHash&&o.enable(19),N.batching&&o.enable(20),v.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.skinning&&o.enable(4),N.morphTargets&&o.enable(5),N.morphNormals&&o.enable(6),N.morphColors&&o.enable(7),N.premultipliedAlpha&&o.enable(8),N.shadowMapEnabled&&o.enable(9),N.useLegacyLights&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const N=_[v.type];let ue;if(N){const le=oi[N];ue=ug.clone(le.uniforms)}else ue=v.uniforms;return ue}function w(v,N){let ue;for(let le=0,P=u.length;le<P;le++){const Q=u[le];if(Q.cacheKey===N){ue=Q,++ue.usedTimes;break}}return ue===void 0&&(ue=new N0(i,N,v,r),u.push(ue)),ue}function A(v){if(--v.usedTimes===0){const N=u.indexOf(v);u[N]=u[u.length-1],u.pop(),v.destroy()}}function V(v){c.remove(v)}function K(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:D,acquireProgram:w,releaseProgram:A,releaseShaderCache:V,programs:u,dispose:K}}function L0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function P0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||P0),n.length>1&&n.sort(d||Au),s.length>1&&s.sort(d||Au)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function I0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nu,i.set(n,[a])):s>=r.length?(a=new Nu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function U0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let O0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V0(i,e){const t=new D0,n=U0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);const r=new U,a=new Nt,o=new Nt;function c(u,h){let d=0,m=0,g=0;for(let ue=0;ue<9;ue++)s.probe[ue].set(0,0,0);let _=0,p=0,f=0,S=0,y=0,E=0,D=0,w=0,A=0,V=0,K=0;u.sort(F0);const v=h===!0?Math.PI:1;for(let ue=0,le=u.length;ue<le;ue++){const P=u[ue],Q=P.color,j=P.intensity,ie=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=Q.r*j*v,m+=Q.g*j*v,g+=Q.b*j*v;else if(P.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(P.sh.coefficients[J],j);K++}else if(P.isDirectionalLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*v),P.castShadow){const se=P.shadow,he=n.get(P);he.shadowBias=se.bias,he.shadowNormalBias=se.normalBias,he.shadowRadius=se.radius,he.shadowMapSize=se.mapSize,s.directionalShadow[_]=he,s.directionalShadowMap[_]=q,s.directionalShadowMatrix[_]=P.shadow.matrix,E++}s.directional[_]=J,_++}else if(P.isSpotLight){const J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(Q).multiplyScalar(j*v),J.distance=ie,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,s.spot[f]=J;const se=P.shadow;if(P.map&&(s.spotLightMap[A]=P.map,A++,se.updateMatrices(P),P.castShadow&&V++),s.spotLightMatrix[f]=se.matrix,P.castShadow){const he=n.get(P);he.shadowBias=se.bias,he.shadowNormalBias=se.normalBias,he.shadowRadius=se.radius,he.shadowMapSize=se.mapSize,s.spotShadow[f]=he,s.spotShadowMap[f]=q,w++}f++}else if(P.isRectAreaLight){const J=t.get(P);J.color.copy(Q).multiplyScalar(j),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),s.rectArea[S]=J,S++}else if(P.isPointLight){const J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity*v),J.distance=P.distance,J.decay=P.decay,P.castShadow){const se=P.shadow,he=n.get(P);he.shadowBias=se.bias,he.shadowNormalBias=se.normalBias,he.shadowRadius=se.radius,he.shadowMapSize=se.mapSize,he.shadowCameraNear=se.camera.near,he.shadowCameraFar=se.camera.far,s.pointShadow[p]=he,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=P.shadow.matrix,D++}s.point[p]=J,p++}else if(P.isHemisphereLight){const J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(j*v),J.groundColor.copy(P.groundColor).multiplyScalar(j*v),s.hemi[y]=J,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const N=s.hash;(N.directionalLength!==_||N.pointLength!==p||N.spotLength!==f||N.rectAreaLength!==S||N.hemiLength!==y||N.numDirectionalShadows!==E||N.numPointShadows!==D||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==K)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=w+A-V,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=K,N.directionalLength=_,N.pointLength=p,N.spotLength=f,N.rectAreaLength=S,N.hemiLength=y,N.numDirectionalShadows=E,N.numPointShadows=D,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=K,s.version=O0++)}function l(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const E=u[S];if(E.isDirectionalLight){const D=s.directional[d];D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),d++}else if(E.isSpotLight){const D=s.spot[g];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const D=s.rectArea[_];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const D=s.point[m];D.position.setFromMatrixPosition(E.matrixWorld),D.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const D=s.hemi[p];D.direction.setFromMatrixPosition(E.matrixWorld),D.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function bu(i,e){const t=new V0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function z0(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new bu(i,e),t.set(r,[c])):a>=o.length?(c=new bu(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class B0 extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W0(i,e,t){let n=new Rc;const s=new Fe,r=new Fe,a=new lt,o=new B0({depthPacking:Am}),c=new G0,l={},u=t.maxTextureSize,h={[Ki]:Sn,[Sn]:Ki,[Ai]:Ai},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:H0,fragmentShader:k0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ts;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new un(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sh;let f=this.type;this.render=function(w,A,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const K=i.getRenderTarget(),v=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),ue=i.state;ue.setBlending($i),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const le=f!==Si&&this.type===Si,P=f===Si&&this.type!==Si;for(let Q=0,j=w.length;Q<j;Q++){const ie=w[Q],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const J=q.getFrameExtents();if(s.multiply(J),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,q.mapSize.y=r.y)),q.map===null||le===!0||P===!0){const he=this.type!==Si?{minFilter:Ht,magFilter:Ht}:{};q.map!==null&&q.map.dispose(),q.map=new ys(s.x,s.y,he),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const se=q.getViewportCount();for(let he=0;he<se;he++){const Ee=q.getViewport(he);a.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),ue.viewport(a),q.updateMatrices(ie,he),n=q.getFrustum(),E(A,V,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&S(q,V),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(K,v,N)};function S(w,A){const V=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ys(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,V,d,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,V,m,_,null)}function y(w,A,V,K){let v=null;const N=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)v=N;else if(v=V.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const ue=v.uuid,le=A.uuid;let P=l[ue];P===void 0&&(P={},l[ue]=P);let Q=P[le];Q===void 0&&(Q=v.clone(),P[le]=Q,A.addEventListener("dispose",D)),v=Q}if(v.visible=A.visible,v.wireframe=A.wireframe,K===Si?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:h[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,V.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const ue=i.properties.get(v);ue.light=V}return v}function E(w,A,V,K,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Si)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);const le=e.update(w),P=w.material;if(Array.isArray(P)){const Q=le.groups;for(let j=0,ie=Q.length;j<ie;j++){const q=Q[j],J=P[q.materialIndex];if(J&&J.visible){const se=y(w,J,K,v);w.onBeforeShadow(i,w,A,V,le,se,q),i.renderBufferDirect(V,null,le,se,w,q),w.onAfterShadow(i,w,A,V,le,se,q)}}}else if(P.visible){const Q=y(w,P,K,v);w.onBeforeShadow(i,w,A,V,le,Q,null),i.renderBufferDirect(V,null,le,Q,w,null),w.onAfterShadow(i,w,A,V,le,Q,null)}}const ue=w.children;for(let le=0,P=ue.length;le<P;le++)E(ue[le],A,V,K,v)}function D(w){w.target.removeEventListener("dispose",D);for(const V in l){const K=l[V],v=w.target.uuid;v in K&&(K[v].dispose(),delete K[v])}}}function X0(i,e,t){const n=t.isWebGL2;function s(){let C=!1;const ve=new lt;let k=null;const fe=new lt(0,0,0,0);return{setMask:function(Te){k!==Te&&!C&&(i.colorMask(Te,Te,Te,Te),k=Te)},setLocked:function(Te){C=Te},setClear:function(Te,st,_t,en,Un){Un===!0&&(Te*=en,st*=en,_t*=en),ve.set(Te,st,_t,en),fe.equals(ve)===!1&&(i.clearColor(Te,st,_t,en),fe.copy(ve))},reset:function(){C=!1,k=null,fe.set(-1,0,0,0)}}}function r(){let C=!1,ve=null,k=null,fe=null;return{setTest:function(Te){Te?Me(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Te){ve!==Te&&!C&&(i.depthMask(Te),ve=Te)},setFunc:function(Te){if(k!==Te){switch(Te){case rm:i.depthFunc(i.NEVER);break;case om:i.depthFunc(i.ALWAYS);break;case am:i.depthFunc(i.LESS);break;case yo:i.depthFunc(i.LEQUAL);break;case cm:i.depthFunc(i.EQUAL);break;case lm:i.depthFunc(i.GEQUAL);break;case um:i.depthFunc(i.GREATER);break;case hm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=Te}},setLocked:function(Te){C=Te},setClear:function(Te){fe!==Te&&(i.clearDepth(Te),fe=Te)},reset:function(){C=!1,ve=null,k=null,fe=null}}}function a(){let C=!1,ve=null,k=null,fe=null,Te=null,st=null,_t=null,en=null,Un=null;return{setTest:function(xt){C||(xt?Me(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(xt){ve!==xt&&!C&&(i.stencilMask(xt),ve=xt)},setFunc:function(xt,hn,ri){(k!==xt||fe!==hn||Te!==ri)&&(i.stencilFunc(xt,hn,ri),k=xt,fe=hn,Te=ri)},setOp:function(xt,hn,ri){(st!==xt||_t!==hn||en!==ri)&&(i.stencilOp(xt,hn,ri),st=xt,_t=hn,en=ri)},setLocked:function(xt){C=xt},setClear:function(xt){Un!==xt&&(i.clearStencil(xt),Un=xt)},reset:function(){C=!1,ve=null,k=null,fe=null,Te=null,st=null,_t=null,en=null,Un=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,y=null,E=null,D=null,w=null,A=null,V=null,K=new He(0,0,0),v=0,N=!1,ue=null,le=null,P=null,Q=null,j=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(se)[1]),q=J>=1):se.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),q=J>=2);let he=null,Ee={};const Xe=i.getParameter(i.SCISSOR_BOX),L=i.getParameter(i.VIEWPORT),Z=new lt().fromArray(Xe),Ne=new lt().fromArray(L);function Pe(C,ve,k,fe){const Te=new Uint8Array(4),st=i.createTexture();i.bindTexture(C,st),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<k;_t++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return st}const be={};be[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Me(i.DEPTH_TEST),c.setFunc(yo),xe(!1),we(al),Me(i.CULL_FACE),ce($i);function Me(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function at(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function ze(C,ve){return m[C]!==ve?(i.bindFramebuffer(C,ve),m[C]=ve,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ve),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function O(C,ve){let k=_,fe=!1;if(C){k=g.get(ve),k===void 0&&(k=[],g.set(ve,k));const Te=C.textures;if(k.length!==Te.length||k[0]!==i.COLOR_ATTACHMENT0){for(let st=0,_t=Te.length;st<_t;st++)k[st]=i.COLOR_ATTACHMENT0+st;k.length=Te.length,fe=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,fe=!0);if(fe)if(t.isWebGL2)i.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Gt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const Ue={[ms]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};if(n)Ue[hl]=i.MIN,Ue[dl]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ue[hl]=C.MIN_EXT,Ue[dl]=C.MAX_EXT)}const Ke={[qp]:i.ZERO,[Yp]:i.ONE,[$p]:i.SRC_COLOR,[Qa]:i.SRC_ALPHA,[em]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[Qp]:i.ONE_MINUS_DST_COLOR,[Kp]:i.ONE_MINUS_DST_ALPHA,[tm]:i.CONSTANT_COLOR,[nm]:i.ONE_MINUS_CONSTANT_COLOR,[im]:i.CONSTANT_ALPHA,[sm]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(C,ve,k,fe,Te,st,_t,en,Un,xt){if(C===$i){f===!0&&(at(i.BLEND),f=!1);return}if(f===!1&&(Me(i.BLEND),f=!0),C!==kp){if(C!==S||xt!==N){if((y!==ms||w!==ms)&&(i.blendEquation(i.FUNC_ADD),y=ms,w=ms),xt)switch(C){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,D=null,A=null,V=null,K.set(0,0,0),v=0,S=C,N=xt}return}Te=Te||ve,st=st||k,_t=_t||fe,(ve!==y||Te!==w)&&(i.blendEquationSeparate(Ue[ve],Ue[Te]),y=ve,w=Te),(k!==E||fe!==D||st!==A||_t!==V)&&(i.blendFuncSeparate(Ke[k],Ke[fe],Ke[st],Ke[_t]),E=k,D=fe,A=st,V=_t),(en.equals(K)===!1||Un!==v)&&(i.blendColor(en.r,en.g,en.b,Un),K.copy(en),v=Un),S=C,N=!1}function _e(C,ve){C.side===Ai?at(i.CULL_FACE):Me(i.CULL_FACE);let k=C.side===Sn;ve&&(k=!k),xe(k),C.blending===Ks&&C.transparent===!1?ce($i):ce(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);const fe=C.stencilWrite;l.setTest(fe),fe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),T(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(C){ue!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),ue=C)}function we(C){C!==Bp?(Me(i.CULL_FACE),C!==le&&(C===al?i.cullFace(i.BACK):C===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),le=C}function rt(C){C!==P&&(q&&i.lineWidth(C),P=C)}function T(C,ve,k){C?(Me(i.POLYGON_OFFSET_FILL),(Q!==ve||j!==k)&&(i.polygonOffset(ve,k),Q=ve,j=k)):at(i.POLYGON_OFFSET_FILL)}function x(C){C?Me(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Y(C){C===void 0&&(C=i.TEXTURE0+ie-1),he!==C&&(i.activeTexture(C),he=C)}function $(C,ve,k){k===void 0&&(he===null?k=i.TEXTURE0+ie-1:k=he);let fe=Ee[k];fe===void 0&&(fe={type:void 0,texture:void 0},Ee[k]=fe),(fe.type!==C||fe.texture!==ve)&&(he!==k&&(i.activeTexture(k),he=k),i.bindTexture(C,ve||be[C]),fe.type=C,fe.texture=ve)}function re(){const C=Ee[he];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Je(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(C){Z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function Ie(C){Ne.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ne.copy(C))}function ot(C,ve){let k=h.get(ve);k===void 0&&(k=new WeakMap,h.set(ve,k));let fe=k.get(C);fe===void 0&&(fe=i.getUniformBlockIndex(ve,C.name),k.set(C,fe))}function $e(C,ve){const fe=h.get(ve).get(C);u.get(ve)!==fe&&(i.uniformBlockBinding(ve,fe,C.__bindingPointIndex),u.set(ve,fe))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,Ee={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,y=null,E=null,D=null,w=null,A=null,V=null,K=new He(0,0,0),v=0,N=!1,ue=null,le=null,P=null,Q=null,j=null,Z.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Me,disable:at,bindFramebuffer:ze,drawBuffers:O,useProgram:Gt,setBlending:ce,setMaterial:_e,setFlipSided:xe,setCullFace:we,setLineWidth:rt,setPolygonOffset:T,setScissorTest:x,activeTexture:Y,bindTexture:$,unbindTexture:re,compressedTexImage2D:ee,compressedTexImage3D:Je,texImage2D:it,texImage3D:Oe,updateUBOMapping:ot,uniformBlockBinding:$e,texStorage2D:de,texStorage3D:Ot,texSubImage2D:Ge,texSubImage3D:me,compressedTexSubImage2D:Se,compressedTexSubImage3D:Qe,scissor:Ce,viewport:Ie,reset:Et}}function q0(i,e,t,n,s,r,a){const o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,h=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return g?new OffscreenCanvas(T,x):No("canvas")}function p(T,x,Y,$){let re=1;const ee=rt(T);if((ee.width>$||ee.height>$)&&(re=$/Math.max(ee.width,ee.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Je=x?Ao:Math.floor,Ge=Je(re*ee.width),me=Je(re*ee.height);d===void 0&&(d=_(Ge,me));const Se=Y?_(Ge,me):d;return Se.width=Ge,Se.height=me,Se.getContext("2d").drawImage(T,0,0,Ge,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Ge+"x"+me+")."),Se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function f(T){const x=rt(T);return oc(x.width)&&oc(x.height)}function S(T){return o?!1:T.wrapS!==Kn||T.wrapT!==Kn||T.minFilter!==Ht&&T.minFilter!==_n}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==Ht&&T.minFilter!==_n}function E(T){i.generateMipmap(T)}function D(T,x,Y,$,re=!1){if(o===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=x;if(x===i.RED&&(Y===i.FLOAT&&(ee=i.R32F),Y===i.HALF_FLOAT&&(ee=i.R16F),Y===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.R8UI),Y===i.UNSIGNED_SHORT&&(ee=i.R16UI),Y===i.UNSIGNED_INT&&(ee=i.R32UI),Y===i.BYTE&&(ee=i.R8I),Y===i.SHORT&&(ee=i.R16I),Y===i.INT&&(ee=i.R32I)),x===i.RG&&(Y===i.FLOAT&&(ee=i.RG32F),Y===i.HALF_FLOAT&&(ee=i.RG16F),Y===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Y===i.UNSIGNED_INT&&(ee=i.RG32UI),Y===i.BYTE&&(ee=i.RG8I),Y===i.SHORT&&(ee=i.RG16I),Y===i.INT&&(ee=i.RG32I)),x===i.RGBA){const Je=re?Mo:mt.getTransfer($);Y===i.FLOAT&&(ee=i.RGBA32F),Y===i.HALF_FLOAT&&(ee=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ee=Je===Mt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(T,x,Y){return y(T,Y)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===Ht||T===fl||T===yr?i.NEAREST:i.LINEAR}function V(T){const x=T.target;x.removeEventListener("dispose",V),v(x),x.isVideoTexture&&h.delete(x)}function K(T){const x=T.target;x.removeEventListener("dispose",K),ue(x)}function v(T){const x=n.get(T);if(x.__webglInit===void 0)return;const Y=T.source,$=m.get(Y);if($){const re=$[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(T),Object.keys($).length===0&&m.delete(Y)}n.remove(T)}function N(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const Y=T.source,$=m.get(Y);delete $[x.__cacheKey],a.memory.textures--}function ue(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let re=0;re<x.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[$][re]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const Y=T.textures;for(let $=0,re=Y.length;$<re;$++){const ee=n.get(Y[$]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(Y[$])}n.remove(T)}let le=0;function P(){le=0}function Q(){const T=le;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),le+=1,T}function j(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ie(T,x){const Y=n.get(T);if(T.isVideoTexture&&xe(T),T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Y,T,x);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+x)}function q(T,x){const Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Ne(Y,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+x)}function J(T,x){const Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Ne(Y,T,x);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+x)}function se(T,x){const Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Pe(Y,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+x)}const he={[ic]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},Ee={[Ht]:i.NEAREST,[fl]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},Xe={[Nm]:i.NEVER,[Lm]:i.ALWAYS,[vh]:i.LESS,[yh]:i.LEQUAL,[bm]:i.EQUAL,[Cm]:i.GEQUAL,[wm]:i.GREATER,[Rm]:i.NOTEQUAL};function L(T,x,Y){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===aa||x.magFilter===yr||x.magFilter===Xi||x.minFilter===_n||x.minFilter===aa||x.minFilter===yr||x.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(T,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ee[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ee[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Kn||x.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Ht&&x.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ht||x.minFilter!==yr&&x.minFilter!==Xi||x.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===rr&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Z(T,x){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",V));const $=x.source;let re=m.get($);re===void 0&&(re={},m.set($,re));const ee=j(x);if(ee!==T.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[ee].usedTimes++;const Je=re[T.__cacheKey];Je!==void 0&&(re[T.__cacheKey].usedTimes--,Je.usedTimes===0&&N(x)),T.__cacheKey=ee,T.__webglTexture=re[ee].texture}return Y}function Ne(T,x,Y){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const re=Z(T,x),ee=x.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+Y);const Je=n.get(ee);if(ee.version!==Je.__version||re===!0){t.activeTexture(i.TEXTURE0+Y);const Ge=mt.getPrimaries(mt.workingColorSpace),me=x.colorSpace===Ni?null:mt.getPrimaries(x.colorSpace),Se=x.colorSpace===Ni||Ge===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Qe=S(x)&&f(x.image)===!1;let de=p(x.image,Qe,!1,s.maxTextureSize);de=we(x,de);const Ot=f(de)||o,it=r.convert(x.format,x.colorSpace);let Oe=r.convert(x.type),Ce=D(x.internalFormat,it,Oe,x.colorSpace,x.isVideoTexture);L($,x,Ot);let Ie;const ot=x.mipmaps,$e=o&&x.isVideoTexture!==!0&&Ce!==_h,Et=Je.__version===void 0||re===!0,C=ee.dataReady,ve=w(x,de,Ot);if(x.isDepthTexture)Ce=i.DEPTH_COMPONENT,o?x.type===ci?Ce=i.DEPTH_COMPONENT32F:x.type===qi?Ce=i.DEPTH_COMPONENT24:x.type===_s?Ce=i.DEPTH24_STENCIL8:Ce=i.DEPTH_COMPONENT16:x.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===xs&&Ce===i.DEPTH_COMPONENT&&x.type!==Tc&&x.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=qi,Oe=r.convert(x.type)),x.format===or&&Ce===i.DEPTH_COMPONENT&&(Ce=i.DEPTH_STENCIL,x.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=_s,Oe=r.convert(x.type))),Et&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,it,Oe,null));else if(x.isDataTexture)if(ot.length>0&&Ot){$e&&Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,ot[0].width,ot[0].height);for(let k=0,fe=ot.length;k<fe;k++)Ie=ot[k],$e?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Ie.width,Ie.height,it,Oe,Ie.data):t.texImage2D(i.TEXTURE_2D,k,Ce,Ie.width,Ie.height,0,it,Oe,Ie.data);x.generateMipmaps=!1}else $e?(Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,de.width,de.height),C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,it,Oe,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,de.width,de.height,0,it,Oe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,ot[0].width,ot[0].height,de.depth);for(let k=0,fe=ot.length;k<fe;k++)Ie=ot[k],x.format!==Jn?it!==null?$e?C&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Ie.width,Ie.height,de.depth,it,Ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Ce,Ie.width,Ie.height,de.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Ie.width,Ie.height,de.depth,it,Oe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,Ce,Ie.width,Ie.height,de.depth,0,it,Oe,Ie.data)}else{$e&&Et&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,ot[0].width,ot[0].height);for(let k=0,fe=ot.length;k<fe;k++)Ie=ot[k],x.format!==Jn?it!==null?$e?C&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Ie.width,Ie.height,it,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,k,Ce,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,Ie.width,Ie.height,it,Oe,Ie.data):t.texImage2D(i.TEXTURE_2D,k,Ce,Ie.width,Ie.height,0,it,Oe,Ie.data)}else if(x.isDataArrayTexture)$e?(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,de.width,de.height,de.depth),C&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,it,Oe,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,it,Oe,de.data);else if(x.isData3DTexture)$e?(Et&&t.texStorage3D(i.TEXTURE_3D,ve,Ce,de.width,de.height,de.depth),C&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,it,Oe,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,it,Oe,de.data);else if(x.isFramebufferTexture){if(Et)if($e)t.texStorage2D(i.TEXTURE_2D,ve,Ce,de.width,de.height);else{let k=de.width,fe=de.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ce,k,fe,0,it,Oe,null),k>>=1,fe>>=1}}else if(ot.length>0&&Ot){if($e&&Et){const k=rt(ot[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ce,k.width,k.height)}for(let k=0,fe=ot.length;k<fe;k++)Ie=ot[k],$e?C&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,it,Oe,Ie):t.texImage2D(i.TEXTURE_2D,k,Ce,it,Oe,Ie);x.generateMipmaps=!1}else if($e){if(Et){const k=rt(de);t.texStorage2D(i.TEXTURE_2D,ve,Ce,k.width,k.height)}C&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,it,Oe,de)}else t.texImage2D(i.TEXTURE_2D,0,Ce,it,Oe,de);y(x,Ot)&&E($),Je.__version=ee.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Pe(T,x,Y){if(x.image.length!==6)return;const $=Z(T,x),re=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);const ee=n.get(re);if(re.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+Y);const Je=mt.getPrimaries(mt.workingColorSpace),Ge=x.colorSpace===Ni?null:mt.getPrimaries(x.colorSpace),me=x.colorSpace===Ni||Je===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,Qe=x.image[0]&&x.image[0].isDataTexture,de=[];for(let k=0;k<6;k++)!Se&&!Qe?de[k]=p(x.image[k],!1,!0,s.maxCubemapSize):de[k]=Qe?x.image[k].image:x.image[k],de[k]=we(x,de[k]);const Ot=de[0],it=f(Ot)||o,Oe=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type),Ie=D(x.internalFormat,Oe,Ce,x.colorSpace),ot=o&&x.isVideoTexture!==!0,$e=ee.__version===void 0||$===!0,Et=re.dataReady;let C=w(x,Ot,it);L(i.TEXTURE_CUBE_MAP,x,it);let ve;if(Se){ot&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,Ie,Ot.width,Ot.height);for(let k=0;k<6;k++){ve=de[k].mipmaps;for(let fe=0;fe<ve.length;fe++){const Te=ve[fe];x.format!==Jn?Oe!==null?ot?Et&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?Et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe,0,0,Te.width,Te.height,Oe,Ce,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe,Ie,Te.width,Te.height,0,Oe,Ce,Te.data)}}}else{if(ve=x.mipmaps,ot&&$e){ve.length>0&&C++;const k=rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,C,Ie,k.width,k.height)}for(let k=0;k<6;k++)if(Qe){ot?Et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,de[k].width,de[k].height,Oe,Ce,de[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ie,de[k].width,de[k].height,0,Oe,Ce,de[k].data);for(let fe=0;fe<ve.length;fe++){const st=ve[fe].image[k].image;ot?Et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe+1,0,0,st.width,st.height,Oe,Ce,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe+1,Ie,st.width,st.height,0,Oe,Ce,st.data)}}else{ot?Et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Oe,Ce,de[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ie,Oe,Ce,de[k]);for(let fe=0;fe<ve.length;fe++){const Te=ve[fe];ot?Et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe+1,0,0,Oe,Ce,Te.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe+1,Ie,Oe,Ce,Te.image[k])}}}y(x,it)&&E(i.TEXTURE_CUBE_MAP),ee.__version=re.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function be(T,x,Y,$,re,ee){const Je=r.convert(Y.format,Y.colorSpace),Ge=r.convert(Y.type),me=D(Y.internalFormat,Je,Ge,Y.colorSpace);if(!n.get(x).__hasExternalTextures){const Qe=Math.max(1,x.width>>ee),de=Math.max(1,x.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,me,Qe,de,x.depth,0,Je,Ge,null):t.texImage2D(re,ee,me,Qe,de,0,Je,Ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,re,n.get(Y).__webglTexture,0,ce(x)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,re,n.get(Y).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(T,x,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let $=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||_e(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===ci?$=i.DEPTH_COMPONENT32F:re.type===qi&&($=i.DEPTH_COMPONENT24));const ee=ce(x);_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,$,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,$,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const $=ce(x);Y&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,x.width,x.height):_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const $=x.textures;for(let re=0;re<$.length;re++){const ee=$[re],Je=r.convert(ee.format,ee.colorSpace),Ge=r.convert(ee.type),me=D(ee.internalFormat,Je,Ge,ee.colorSpace),Se=ce(x);Y&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,me,x.width,x.height):_e(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,re=ce(x);if(x.depthTexture.format===xs)_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===or)_e(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(T){const x=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");at(x.__webglFramebuffer,T)}else if(Y){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=i.createRenderbuffer(),Me(x.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Me(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(T,x,Y){const $=n.get(T);x!==void 0&&be($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ze(T)}function Gt(T){const x=T.texture,Y=n.get(T),$=n.get(x);T.addEventListener("dispose",K);const re=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Je=re.length>1,Ge=f(T)||o;if(Je||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),ee){Y.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer[me]=[];for(let Se=0;Se<x.mipmaps.length;Se++)Y.__webglFramebuffer[me][Se]=i.createFramebuffer()}else Y.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){Y.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)Y.__webglFramebuffer[me]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Je)if(s.drawBuffers)for(let me=0,Se=re.length;me<Se;me++){const Qe=n.get(re[me]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&_e(T)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<re.length;me++){const Se=re[me];Y.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);const Qe=r.convert(Se.format,Se.colorSpace),de=r.convert(Se.type),Ot=D(Se.internalFormat,Qe,de,Se.colorSpace,T.isXRRenderTarget===!0),it=ce(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ot,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),L(i.TEXTURE_CUBE_MAP,x,Ge);for(let me=0;me<6;me++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)be(Y.__webglFramebuffer[me][Se],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else be(Y.__webglFramebuffer[me],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(x,Ge)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let me=0,Se=re.length;me<Se;me++){const Qe=re[me],de=n.get(Qe);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),L(i.TEXTURE_2D,Qe,Ge),be(Y.__webglFramebuffer,T,Qe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),y(Qe,Ge)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,$.__webglTexture),L(me,x,Ge),o&&x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)be(Y.__webglFramebuffer[Se],T,x,i.COLOR_ATTACHMENT0,me,Se);else be(Y.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,me,0);y(x,Ge)&&E(me),t.unbindTexture()}T.depthBuffer&&ze(T)}function Ue(T){const x=f(T)||o,Y=T.textures;for(let $=0,re=Y.length;$<re;$++){const ee=Y[$];if(y(ee,x)){const Je=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ge=n.get(ee).__webglTexture;t.bindTexture(Je,Ge),E(Je),t.unbindTexture()}}}function Ke(T){if(o&&T.samples>0&&_e(T)===!1){const x=T.textures,Y=T.width,$=T.height;let re=i.COLOR_BUFFER_BIT;const ee=[],Je=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(T),me=x.length>1;if(me)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){ee.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&ee.push(Je);const Qe=Ge.__ignoreDepthValues!==void 0?Ge.__ignoreDepthValues:!1;if(Qe===!1&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Se]),Qe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Je])),me){const de=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,Y,$,0,0,Y,$,re,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[Se]);const Qe=n.get(x[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}}function ce(T){return Math.min(s.maxSamples,T.samples)}function _e(T){const x=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xe(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function we(T,x){const Y=T.colorSpace,$=T.format,re=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===rc||Y!==Hn&&Y!==Ni&&(mt.getTransfer(Y)===Mt?o===!1?e.has("EXT_sRGB")===!0&&$===Jn?(T.format=rc,T.minFilter=_n,T.generateMipmaps=!1):x=Ah.sRGBToLinear(x):($!==Jn||re!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),x}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=P,this.setTexture2D=ie,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=se,this.rebindTextures=O,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=be,this.useMultisampledRTT=_e}function Y0(i,e,t){const n=t.isWebGL2;function s(r,a=Ni){let o;const c=mt.getTransfer(a);if(r===ji)return i.UNSIGNED_BYTE;if(r===dh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===fh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gm)return i.BYTE;if(r===_m)return i.SHORT;if(r===Tc)return i.UNSIGNED_SHORT;if(r===hh)return i.INT;if(r===qi)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===rr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xm)return i.ALPHA;if(r===Jn)return i.RGBA;if(r===vm)return i.LUMINANCE;if(r===ym)return i.LUMINANCE_ALPHA;if(r===xs)return i.DEPTH_COMPONENT;if(r===or)return i.DEPTH_STENCIL;if(r===rc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Mm)return i.RED;if(r===ph)return i.RED_INTEGER;if(r===Sm)return i.RG;if(r===mh)return i.RG_INTEGER;if(r===gh)return i.RGBA_INTEGER;if(r===ca||r===la||r===ua||r===ha)if(c===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ua)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pl||r===ml||r===gl||r===_l)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_h)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===xl||r===vl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===xl)return c===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yl||r===Ml||r===Sl||r===Tl||r===El||r===Al||r===Nl||r===bl||r===wl||r===Rl||r===Cl||r===Ll||r===Pl||r===Il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===yl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ml)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===El)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Al)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ll)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Il)return c===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===da||r===Dl||r===Ul)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===da)return c===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tm||r===Ol||r===Fl||r===Vl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===da)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ol)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_s?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class $0 extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _o extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _o;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Pi({extensions:{fragDepth:!0},vertexShader:Z0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new Ho(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Q0 extends Ui{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new J0,p=t.getContextAttributes();let f=null,S=null;const y=[],E=[],D=new Fe;let w=null;const A=new vn;A.layers.enable(1),A.viewport=new lt;const V=new vn;V.layers.enable(2),V.viewport=new lt;const K=[A,V],v=new $0;v.layers.enable(1),v.layers.enable(2);let N=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let Z=y[L];return Z===void 0&&(Z=new Fa,y[L]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(L){let Z=y[L];return Z===void 0&&(Z=new Fa,y[L]=Z),Z.getGripSpace()},this.getHand=function(L){let Z=y[L];return Z===void 0&&(Z=new Fa,y[L]=Z),Z.getHandSpace()};function le(L){const Z=E.indexOf(L.inputSource);if(Z===-1)return;const Ne=y[Z];Ne!==void 0&&(Ne.update(L.inputSource,L.frame,l||a),Ne.dispatchEvent({type:L.type,data:L.inputSource}))}function P(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",Q);for(let L=0;L<y.length;L++){const Z=E[L];Z!==null&&(E[L]=null,y[L].disconnect(Z))}N=null,ue=null,_.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,S=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",P),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ys(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,Ne=null,Pe=null;p.depth&&(Pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?or:xs,Ne=p.stencil?_s:qi);const be={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ys(d.textureWidth,d.textureHeight,{format:Jn,type:ji,depthTexture:new Br(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Me=e.properties.get(S);Me.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Q(L){for(let Z=0;Z<L.removed.length;Z++){const Ne=L.removed[Z],Pe=E.indexOf(Ne);Pe>=0&&(E[Pe]=null,y[Pe].disconnect(Ne))}for(let Z=0;Z<L.added.length;Z++){const Ne=L.added[Z];let Pe=E.indexOf(Ne);if(Pe===-1){for(let Me=0;Me<y.length;Me++)if(Me>=E.length){E.push(Ne),Pe=Me;break}else if(E[Me]===null){E[Me]=Ne,Pe=Me;break}if(Pe===-1)break}const be=y[Pe];be&&be.connect(Ne)}}const j=new U,ie=new U;function q(L,Z,Ne){j.setFromMatrixPosition(Z.matrixWorld),ie.setFromMatrixPosition(Ne.matrixWorld);const Pe=j.distanceTo(ie),be=Z.projectionMatrix.elements,Me=Ne.projectionMatrix.elements,at=be[14]/(be[10]-1),ze=be[14]/(be[10]+1),O=(be[9]+1)/be[5],Gt=(be[9]-1)/be[5],Ue=(be[8]-1)/be[0],Ke=(Me[8]+1)/Me[0],ce=at*Ue,_e=at*Ke,xe=Pe/(-Ue+Ke),we=xe*-Ue;Z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(we),L.translateZ(xe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const rt=at+xe,T=ze+xe,x=ce-we,Y=_e+(Pe-we),$=O*ze/T*rt,re=Gt*ze/T*rt;L.projectionMatrix.makePerspective(x,Y,$,re,rt,T),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function J(L,Z){Z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(Z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;_.texture!==null&&(L.near=_.depthNear,L.far=_.depthFar),v.near=V.near=A.near=L.near,v.far=V.far=A.far=L.far,(N!==v.near||ue!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),N=v.near,ue=v.far,A.near=N,A.far=ue,V.near=N,V.far=ue,A.updateProjectionMatrix(),V.updateProjectionMatrix(),L.updateProjectionMatrix());const Z=L.parent,Ne=v.cameras;J(v,Z);for(let Pe=0;Pe<Ne.length;Pe++)J(Ne[Pe],Z);Ne.length===2?q(v,A,V):v.projectionMatrix.copy(A.projectionMatrix),se(L,v,Z)};function se(L,Z,Ne){Ne===null?L.matrix.copy(Z.matrixWorld):(L.matrix.copy(Ne.matrixWorld),L.matrix.invert(),L.matrix.multiply(Z.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(Z.projectionMatrix),L.projectionMatrixInverse.copy(Z.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=cr*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(L){c=L,d!==null&&(d.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null};let he=null;function Ee(L,Z){if(u=Z.getViewerPose(l||a),g=Z,u!==null){const Ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Pe=!1;Ne.length!==v.cameras.length&&(v.cameras.length=0,Pe=!0);for(let Me=0;Me<Ne.length;Me++){const at=Ne[Me];let ze=null;if(m!==null)ze=m.getViewport(at);else{const Gt=h.getViewSubImage(d,at);ze=Gt.viewport,Me===0&&(e.setRenderTargetTextures(S,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(S))}let O=K[Me];O===void 0&&(O=new vn,O.layers.enable(Me),O.viewport=new lt,K[Me]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(ze.x,ze.y,ze.width,ze.height),Me===0&&(v.matrix.copy(O.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Pe===!0&&v.cameras.push(O)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Me=h.getDepthInformation(Ne[0]);Me&&Me.isValid&&Me.texture&&_.init(e,Me,s.renderState)}}for(let Ne=0;Ne<y.length;Ne++){const Pe=E[Ne],be=y[Ne];Pe!==null&&be!==void 0&&be.update(Pe,Z,l||a)}_.render(e,v),he&&he(L,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Xe=new Dh;Xe.setAnimationLoop(Ee),this.setAnimationLoop=function(L){he=L},this.dispose=function(){}}}const us=new Pn,ey=new Nt;function ty(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Lh(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,S,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=e.get(f),y=S.envMap,E=S.envMapRotation;if(y&&(p.envMap.value=y,us.copy(E),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(us)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*D,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,y){const E=y.program;n.uniformBlockBinding(S,E)}function l(S,y){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(S,D);const w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const E=i.createBuffer(),D=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],E=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=E.length;w<A;w++){const V=Array.isArray(E[w])?E[w]:[E[w]];for(let K=0,v=V.length;K<v;K++){const N=V[K];if(m(N,w,K,D)===!0){const ue=N.__offset,le=Array.isArray(N.value)?N.value:[N.value];let P=0;for(let Q=0;Q<le.length;Q++){const j=le[Q],ie=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,ue+P,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,P),P+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ue,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,E,D){const w=S.value,A=y+"_"+E;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const V=D[A];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return D[A]=w,!0}else if(V.equals(w)===!1)return V.copy(w),!0}return!1}function g(S){const y=S.uniforms;let E=0;const D=16;for(let A=0,V=y.length;A<V;A++){const K=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,N=K.length;v<N;v++){const ue=K[v],le=Array.isArray(ue.value)?ue.value:[ue.value];for(let P=0,Q=le.length;P<Q;P++){const j=le[P],ie=_(j),q=E%D;q!==0&&D-q<ie.boundary&&(E+=D-q),ue.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=E,E+=ie.storage}}}const w=E%D;return w>0&&(E+=D-w),S.__size=E,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Bh{constructor(e={}){const{canvas:t=qm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const y=this;let E=!1,D=0,w=0,A=null,V=-1,K=null;const v=new lt,N=new lt;let ue=null;const le=new He(0);let P=0,Q=t.width,j=t.height,ie=1,q=null,J=null;const se=new lt(0,0,Q,j),he=new lt(0,0,Q,j);let Ee=!1;const Xe=new Rc;let L=!1,Z=!1,Ne=null;const Pe=new Nt,be=new Fe,Me=new U,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return A===null?ie:1}let O=n;function Gt(M,z){for(let W=0;W<M.length;W++){const X=M[W],H=t.getContext(X,z);if(H!==null)return H}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&z.shift(),O=Gt(z,M),O===null)throw Gt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Ke,ce,_e,xe,we,rt,T,x,Y,$,re,ee,Je,Ge,me,Se,Qe,de,Ot,it,Oe,Ce,Ie;function ot(){Ue=new cv(O),Ke=new nv(O,Ue,e),Ue.init(Ke),Oe=new Y0(O,Ue,Ke),ce=new X0(O,Ue,Ke),_e=new hv(O),xe=new L0,we=new q0(O,Ue,ce,xe,Ke,Oe,_e),rt=new sv(y),T=new av(y),x=new _g(O,Ke),Ce=new ev(O,Ue,x,Ke),Y=new lv(O,x,_e,Ce),$=new mv(O,Y,x,_e),de=new pv(O,Ke,we),me=new iv(xe),re=new C0(y,rt,T,Ue,Ke,Ce,me),ee=new ty(y,xe),Je=new I0,Ge=new z0(Ue,Ke),Qe=new Qx(y,rt,T,ce,$,d,c),Se=new W0(y,$,Ke),Ie=new ny(O,_e,Ke,ce),Ot=new tv(O,Ue,_e,Ke),it=new uv(O,Ue,_e,Ke),_e.programs=re.programs,y.capabilities=Ke,y.extensions=Ue,y.properties=xe,y.renderLists=Je,y.shadowMap=Se,y.state=ce,y.info=_e}ot();const $e=new Q0(y,O);this.xr=$e,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(Q,j,!1))},this.getSize=function(M){return M.set(Q,j)},this.setSize=function(M,z,W=!0){if($e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,j=z,t.width=Math.floor(M*ie),t.height=Math.floor(z*ie),W===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(Q*ie,j*ie).floor()},this.setDrawingBufferSize=function(M,z,W){Q=M,j=z,ie=W,t.width=Math.floor(M*W),t.height=Math.floor(z*W),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(se)},this.setViewport=function(M,z,W,X){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,z,W,X),ce.viewport(v.copy(se).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(he)},this.setScissor=function(M,z,W,X){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,z,W,X),ce.scissor(N.copy(he).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){ce.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){q=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(M=!0,z=!0,W=!0){let X=0;if(M){let H=!1;if(A!==null){const Ae=A.texture.format;H=Ae===gh||Ae===mh||Ae===ph}if(H){const Ae=A.texture.type,De=Ae===ji||Ae===qi||Ae===Tc||Ae===_s||Ae===dh||Ae===fh,Ve=Qe.getClearColor(),ke=Qe.getClearAlpha(),nt=Ve.r,qe=Ve.g,je=Ve.b;De?(m[0]=nt,m[1]=qe,m[2]=je,m[3]=ke,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=nt,g[1]=qe,g[2]=je,g[3]=ke,O.clearBufferiv(O.COLOR,0,g))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Je.dispose(),Ge.dispose(),xe.dispose(),rt.dispose(),T.dispose(),$.dispose(),Ce.dispose(),Ie.dispose(),re.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Un),$e.removeEventListener("sessionend",xt),Ne&&(Ne.dispose(),Ne=null),hn.stop()};function Et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=_e.autoReset,z=Se.enabled,W=Se.autoUpdate,X=Se.needsUpdate,H=Se.type;ot(),_e.autoReset=M,Se.enabled=z,Se.autoUpdate=W,Se.needsUpdate=X,Se.type=H}function ve(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function k(M){const z=M.target;z.removeEventListener("dispose",k),fe(z)}function fe(M){Te(M),xe.remove(M)}function Te(M){const z=xe.get(M).programs;z!==void 0&&(z.forEach(function(W){re.releaseProgram(W)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,W,X,H,Ae){z===null&&(z=at);const De=H.isMesh&&H.matrixWorld.determinant()<0,Ve=Op(M,z,W,X,H);ce.setMaterial(X,De);let ke=W.index,nt=1;if(X.wireframe===!0){if(ke=Y.getWireframeAttribute(W),ke===void 0)return;nt=2}const qe=W.drawRange,je=W.attributes.position;let It=qe.start*nt,bn=(qe.start+qe.count)*nt;Ae!==null&&(It=Math.max(It,Ae.start*nt),bn=Math.min(bn,(Ae.start+Ae.count)*nt)),ke!==null?(It=Math.max(It,0),bn=Math.min(bn,ke.count)):je!=null&&(It=Math.max(It,0),bn=Math.min(bn,je.count));const jt=bn-It;if(jt<0||jt===1/0)return;Ce.setup(H,X,Ve,W,ke);let gi,wt=Ot;if(ke!==null&&(gi=x.get(ke),wt=it,wt.setIndex(gi)),H.isMesh)X.wireframe===!0?(ce.setLineWidth(X.wireframeLinewidth*ze()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(H.isLine){let et=X.linewidth;et===void 0&&(et=1),ce.setLineWidth(et*ze()),H.isLineSegments?wt.setMode(O.LINES):H.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else H.isPoints?wt.setMode(O.POINTS):H.isSprite&&wt.setMode(O.TRIANGLES);if(H.isBatchedMesh)wt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)wt.renderInstances(It,jt,H.count);else if(W.isInstancedBufferGeometry){const et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ia=Math.min(W.instanceCount,et);wt.renderInstances(It,jt,ia)}else wt.render(It,jt)};function st(M,z,W){M.transparent===!0&&M.side===Ai&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,$r(M,z,W),M.side=Ki,M.needsUpdate=!0,$r(M,z,W),M.side=Ai):$r(M,z,W)}this.compile=function(M,z,W=null){W===null&&(W=M),p=Ge.get(W),p.init(),S.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==W&&M.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(y._useLegacyLights);const X=new Set;return M.traverse(function(H){const Ae=H.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const Ve=Ae[De];st(Ve,W,H),X.add(Ve)}else st(Ae,W,H),X.add(Ae)}),S.pop(),p=null,X},this.compileAsync=function(M,z,W=null){const X=this.compile(M,z,W);return new Promise(H=>{function Ae(){if(X.forEach(function(De){xe.get(De).currentProgram.isReady()&&X.delete(De)}),X.size===0){H(M);return}setTimeout(Ae,10)}Ue.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let _t=null;function en(M){_t&&_t(M)}function Un(){hn.stop()}function xt(){hn.start()}const hn=new Dh;hn.setAnimationLoop(en),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(M){_t=M,$e.setAnimationLoop(M),M===null?hn.stop():hn.start()},$e.addEventListener("sessionstart",Un),$e.addEventListener("sessionend",xt),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(z),z=$e.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,z,A),p=Ge.get(M,S.length),p.init(),S.push(p),Pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(Pe),Z=this.localClippingEnabled,L=me.init(this.clippingPlanes,Z),_=Je.get(M,f.length),_.init(),f.push(_),ri(M,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,J),this.info.render.frame++,L===!0&&me.beginShadows();const W=p.state.shadowsArray;if(Se.render(W,M,z),L===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),($e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1)&&Qe.render(_,M),p.setupLights(y._useLegacyLights),z.isArrayCamera){const X=z.cameras;for(let H=0,Ae=X.length;H<Ae;H++){const De=X[H];tl(_,M,De,De.viewport)}}else tl(_,M,z);A!==null&&(we.updateMultisampleRenderTarget(A),we.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,z),Ce.resetDefaultState(),V=-1,K=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ri(M,z,W,X){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Xe.intersectsSprite(M)){X&&Me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pe);const De=$.update(M),Ve=M.material;Ve.visible&&_.push(M,De,Ve,W,Me.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Xe.intersectsObject(M))){const De=$.update(M),Ve=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Me.copy(M.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Me.copy(De.boundingSphere.center)),Me.applyMatrix4(M.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ve)){const ke=De.groups;for(let nt=0,qe=ke.length;nt<qe;nt++){const je=ke[nt],It=Ve[je.materialIndex];It&&It.visible&&_.push(M,De,It,W,Me.z,je)}}else Ve.visible&&_.push(M,De,Ve,W,Me.z,null)}}const Ae=M.children;for(let De=0,Ve=Ae.length;De<Ve;De++)ri(Ae[De],z,W,X)}function tl(M,z,W,X){const H=M.opaque,Ae=M.transmissive,De=M.transparent;p.setupLightsView(W),L===!0&&me.setGlobalState(y.clippingPlanes,W),Ae.length>0&&Up(H,Ae,z,W),X&&ce.viewport(v.copy(X)),H.length>0&&Yr(H,z,W),Ae.length>0&&Yr(Ae,z,W),De.length>0&&Yr(De,z,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Up(M,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const Ae=Ke.isWebGL2;Ne===null&&(Ne=new ys(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?rr:ji,minFilter:Xi,samples:Ae?4:0})),y.getDrawingBufferSize(be),Ae?Ne.setSize(be.x,be.y):Ne.setSize(Ao(be.x),Ao(be.y));const De=y.getRenderTarget();y.setRenderTarget(Ne),y.getClearColor(le),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const Ve=y.toneMapping;y.toneMapping=ei,Yr(M,W,X),we.updateMultisampleRenderTarget(Ne),we.updateRenderTargetMipmap(Ne);let ke=!1;for(let nt=0,qe=z.length;nt<qe;nt++){const je=z[nt],It=je.object,bn=je.geometry,jt=je.material,gi=je.group;if(jt.side===Ai&&It.layers.test(X.layers)){const wt=jt.side;jt.side=Sn,jt.needsUpdate=!0,nl(It,W,X,bn,jt,gi),jt.side=wt,jt.needsUpdate=!0,ke=!0}}ke===!0&&(we.updateMultisampleRenderTarget(Ne),we.updateRenderTargetMipmap(Ne)),y.setRenderTarget(De),y.setClearColor(le,P),y.toneMapping=Ve}function Yr(M,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Ae=M.length;H<Ae;H++){const De=M[H],Ve=De.object,ke=De.geometry,nt=X===null?De.material:X,qe=De.group;Ve.layers.test(W.layers)&&nl(Ve,z,W,ke,nt,qe)}}function nl(M,z,W,X,H,Ae){M.onBeforeRender(y,z,W,X,H,Ae),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(y,z,W,X,M,Ae),H.transparent===!0&&H.side===Ai&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,y.renderBufferDirect(W,z,X,H,M,Ae),H.side=Ki,H.needsUpdate=!0,y.renderBufferDirect(W,z,X,H,M,Ae),H.side=Ai):y.renderBufferDirect(W,z,X,H,M,Ae),M.onAfterRender(y,z,W,X,H,Ae)}function $r(M,z,W){z.isScene!==!0&&(z=at);const X=xe.get(M),H=p.state.lights,Ae=p.state.shadowsArray,De=H.state.version,Ve=re.getParameters(M,H.state,Ae,z,W),ke=re.getProgramCacheKey(Ve);let nt=X.programs;X.environment=M.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(M.isMeshStandardMaterial?T:rt).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,nt===void 0&&(M.addEventListener("dispose",k),nt=new Map,X.programs=nt);let qe=nt.get(ke);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===De)return sl(M,Ve),qe}else Ve.uniforms=re.getUniforms(M),M.onBuild(W,Ve,y),M.onBeforeCompile(Ve,y),qe=re.acquireProgram(Ve,ke),nt.set(ke,qe),X.uniforms=Ve.uniforms;const je=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(je.clippingPlanes=me.uniform),sl(M,Ve),X.needsLights=Vp(M),X.lightsStateVersion=De,X.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function il(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=xo.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function sl(M,z){const W=xe.get(M);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Op(M,z,W,X,H){z.isScene!==!0&&(z=at),we.resetTextureUnits();const Ae=z.fog,De=X.isMeshStandardMaterial?z.environment:null,Ve=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hn,ke=(X.isMeshStandardMaterial?T:rt).get(X.envMap||De),nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!W.morphAttributes.position,It=!!W.morphAttributes.normal,bn=!!W.morphAttributes.color;let jt=ei;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(jt=y.toneMapping);const gi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,wt=gi!==void 0?gi.length:0,et=xe.get(X),ia=p.state.lights;if(L===!0&&(Z===!0||M!==K)){const On=M===K&&X.id===V;me.setState(X,M,On)}let At=!1;X.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ia.state.version||et.outputColorSpace!==Ve||H.isBatchedMesh&&et.batching===!1||!H.isBatchedMesh&&et.batching===!0||H.isInstancedMesh&&et.instancing===!1||!H.isInstancedMesh&&et.instancing===!0||H.isSkinnedMesh&&et.skinning===!1||!H.isSkinnedMesh&&et.skinning===!0||H.isInstancedMesh&&et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&et.instancingMorph===!1&&H.morphTexture!==null||et.envMap!==ke||X.fog===!0&&et.fog!==Ae||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==me.numPlanes||et.numIntersection!==me.numIntersection)||et.vertexAlphas!==nt||et.vertexTangents!==qe||et.morphTargets!==je||et.morphNormals!==It||et.morphColors!==bn||et.toneMapping!==jt||Ke.isWebGL2===!0&&et.morphTargetsCount!==wt)&&(At=!0):(At=!0,et.__version=X.version);let is=et.currentProgram;At===!0&&(is=$r(X,z,H));let rl=!1,vr=!1,sa=!1;const on=is.getUniforms(),ss=et.uniforms;if(ce.useProgram(is.program)&&(rl=!0,vr=!0,sa=!0),X.id!==V&&(V=X.id,vr=!0),rl||K!==M){on.setValue(O,"projectionMatrix",M.projectionMatrix),on.setValue(O,"viewMatrix",M.matrixWorldInverse);const On=on.map.cameraPosition;On!==void 0&&On.setValue(O,Me.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&on.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&on.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,vr=!0,sa=!0)}if(H.isSkinnedMesh){on.setOptional(O,H,"bindMatrix"),on.setOptional(O,H,"bindMatrixInverse");const On=H.skeleton;On&&(Ke.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),on.setValue(O,"boneTexture",On.boneTexture,we)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(on.setOptional(O,H,"batchingTexture"),on.setValue(O,"batchingTexture",H._matricesTexture,we));const ra=W.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0&&Ke.isWebGL2===!0)&&de.update(H,W,is),(vr||et.receiveShadow!==H.receiveShadow)&&(et.receiveShadow=H.receiveShadow,on.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ss.envMap.value=ke,ss.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),vr&&(on.setValue(O,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&Fp(ss,sa),Ae&&X.fog===!0&&ee.refreshFogUniforms(ss,Ae),ee.refreshMaterialUniforms(ss,X,ie,j,Ne),xo.upload(O,il(et),ss,we)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xo.upload(O,il(et),ss,we),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&on.setValue(O,"center",H.center),on.setValue(O,"modelViewMatrix",H.modelViewMatrix),on.setValue(O,"normalMatrix",H.normalMatrix),on.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const On=X.uniformsGroups;for(let oa=0,zp=On.length;oa<zp;oa++)if(Ke.isWebGL2){const ol=On[oa];Ie.update(ol,is),Ie.bind(ol,is)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return is}function Fp(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Vp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,z,W){xe.get(M.texture).__webglTexture=z,xe.get(M.depthTexture).__webglTexture=W;const X=xe.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,z){const W=xe.get(M);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,W=0){A=M,D=z,w=W;let X=!0,H=null,Ae=!1,De=!1;if(M){const ke=xe.get(M);ke.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):ke.__webglFramebuffer===void 0?we.setupRenderTarget(M):ke.__hasExternalTextures&&we.rebindTextures(M,xe.get(M.texture).__webglTexture,xe.get(M.depthTexture).__webglTexture);const nt=M.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(De=!0);const qe=xe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?H=qe[z][W]:H=qe[z],Ae=!0):Ke.isWebGL2&&M.samples>0&&we.useMultisampledRTT(M)===!1?H=xe.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[W]:H=qe,v.copy(M.viewport),N.copy(M.scissor),ue=M.scissorTest}else v.copy(se).multiplyScalar(ie).floor(),N.copy(he).multiplyScalar(ie).floor(),ue=Ee;if(ce.bindFramebuffer(O.FRAMEBUFFER,H)&&Ke.drawBuffers&&X&&ce.drawBuffers(M,H),ce.viewport(v),ce.scissor(N),ce.setScissorTest(ue),Ae){const ke=xe.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,ke.__webglTexture,W)}else if(De){const ke=xe.get(M.texture),nt=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,nt)}V=-1},this.readRenderTargetPixels=function(M,z,W,X,H,Ae,De){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=xe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ve=Ve[De]),Ve){ce.bindFramebuffer(O.FRAMEBUFFER,Ve);try{const ke=M.texture,nt=ke.format,qe=ke.type;if(nt!==Jn&&Oe.convert(nt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=qe===rr&&(Ue.has("EXT_color_buffer_half_float")||Ke.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(qe!==ji&&Oe.convert(qe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ci&&(Ke.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-X&&W>=0&&W<=M.height-H&&O.readPixels(z,W,X,H,Oe.convert(nt),Oe.convert(qe),Ae)}finally{const ke=A!==null?xe.get(A).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(M,z,W=0){const X=Math.pow(2,-W),H=Math.floor(z.image.width*X),Ae=Math.floor(z.image.height*X);we.setTexture2D(z,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,M.x,M.y,H,Ae),ce.unbindTexture()},this.copyTextureToTexture=function(M,z,W,X=0){const H=z.image.width,Ae=z.image.height,De=Oe.convert(W.format),Ve=Oe.convert(W.type);we.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,M.x,M.y,H,Ae,De,Ve,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,M.x,M.y,z.mipmaps[0].width,z.mipmaps[0].height,De,z.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,M.x,M.y,De,Ve,z.image),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(M,z,W,X,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=Math.round(M.max.x-M.min.x),De=Math.round(M.max.y-M.min.y),Ve=M.max.z-M.min.z+1,ke=Oe.convert(X.format),nt=Oe.convert(X.type);let qe;if(X.isData3DTexture)we.setTexture3D(X,0),qe=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)we.setTexture2DArray(X,0),qe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),It=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bn=O.getParameter(O.UNPACK_SKIP_PIXELS),jt=O.getParameter(O.UNPACK_SKIP_ROWS),gi=O.getParameter(O.UNPACK_SKIP_IMAGES),wt=W.isCompressedTexture?W.mipmaps[H]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,M.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,M.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,M.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(qe,H,z.x,z.y,z.z,Ae,De,Ve,ke,nt,wt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(qe,H,z.x,z.y,z.z,Ae,De,Ve,ke,wt.data):O.texSubImage3D(qe,H,z.x,z.y,z.z,Ae,De,Ve,ke,nt,wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,It),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bn),O.pixelStorei(O.UNPACK_SKIP_ROWS,jt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,gi),H===0&&X.generateMipmaps&&O.generateMipmap(qe),ce.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?we.setTextureCube(M,0):M.isData3DTexture?we.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?we.setTexture2DArray(M,0):we.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){D=0,w=0,A=null,ce.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===Go?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iy extends Bh{}iy.prototype.isWebGL1Renderer=!0;class sy extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Eh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new U;class Pc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ti(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ry extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Hh extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class kh extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Wh extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ht,this.minFilter=Ht,this.generateMipmaps=!1,this.needsUpdate=!0}}class Xh extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends Xh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ln(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ay extends kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cy extends kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class cc extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qh extends Hh{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Gr extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Yh extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Va=new Nt,wu=new U,Ru=new U;class Ic{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ly extends Ic{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $h extends Gr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ly}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cu=new Nt,Ar=new U,za=new U;class uy extends Ic{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),za.copy(n.position),za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(za),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu)}}class jh extends Gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hy extends Ic{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fy extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class py extends Gh{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Ws=new Pn(0,0,0,"YXZ"),Xs=new U,my={type:"change"},gy={type:"lock"},_y={type:"unlock"},Lu=Math.PI/2;class xy extends Ui{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=vy.bind(this),this._onPointerlockChange=yy.bind(this),this._onPointerlockError=My.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;Xs.setFromMatrixColumn(t.matrix,0),Xs.crossVectors(t.up,Xs),t.position.addScaledVector(Xs,e)}moveRight(e){const t=this.camera;Xs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Xs,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function vy(i){if(this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.camera;Ws.setFromQuaternion(n.quaternion),Ws.y-=e*.002*this.pointerSpeed,Ws.x-=t*.002*this.pointerSpeed,Ws.x=Math.max(Lu-this.maxPolarAngle,Math.min(Lu-this.minPolarAngle,Ws.x)),n.quaternion.setFromEuler(Ws),this.dispatchEvent(my)}function yy(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(gy),this.isLocked=!0):(this.dispatchEvent(_y),this.isLocked=!1)}function My(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function Sy(i,e){let t=new xy(i,e);return document.addEventListener("click",function(){t.lock()},!1),t}const Pu={VERTEX:"vertex",FRAGMENT:"fragment"},Ct={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Wo=["x","y","z","w"];function Zh(i){let e="{";i.isNode===!0&&(e+=i.id);for(const{property:t,childNode:n}of bo(i))e+=","+t.slice(0,-4)+":"+n.getCacheKey();return e+="}",e}function*bo(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function Yi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Kh(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new He(...e):t==="vec2"?new Fe(...e):t==="vec3"?new U(...e):t==="vec4"?new lt(...e):t==="mat3"?new Ze(...e):t==="mat4"?new Nt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Qh(e[0]):null}function Jh(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Qh(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Iu=new Map;let Ty=0;class Le extends Ui{constructor(e=null){super(),this.nodeType=e,this.updateType=Ct.NONE,this.updateBeforeType=Ct.NONE,this.uuid=Sh.generateUUID(),this.isNode=!0,Object.defineProperty(this,"id",{value:Ty++})}get type(){return this.constructor.type}getSelf(){return this.self||this}setReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of bo(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(){return Zh(this)}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.setReference(e);const a=e.getNodeProperties(this);if(a.initialized!==!0||e.context.tempRead===!1){const o=e.stack.nodes.length;a.initialized=!0,a.outputNode=this.setup(e),a.outputNode!==null&&e.stack.nodes.length!==o&&(a.outputNode=e.stack);for(const c of Object.values(a))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const o=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,o,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return bo(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:a}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=a.toJSON(e.meta).uuid):n[s]=a.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const a=e.inputNodes[n][r];s[r]=t[a]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}if(s){const o=a(e.textures),c=a(e.images),l=a(e.nodes);o.length>0&&(r.textures=o),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function te(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Iu.has(i)){console.warn(`Redefinition of node class ${i}`);return}Iu.set(i,e),e.type=i}class yt extends Le{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const a=super.build(e,s),o=e.getVarFromNode(this,null,s),c=e.getPropertyName(o);return e.addLineFlowCode(`${c} = ${a}`),r.snippet=a,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}te("TempNode",yt);class fr extends Le{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}te("ArrayElementNode",fr);class Dc extends Le{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}te("ConvertNode",Dc);class ed extends yt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),a=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),a.push(l)}const o=`${e.getType(n)}( ${a.join(", ")} )`;return e.format(o,n,t)}}te("JoinNode",ed);const Ey=Wo.join("");class lc extends Le{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Wo.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let a=null;this.getVectorLength()>=s&&(a=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,a);this.components.length===s&&this.components===Ey.slice(0,this.components.length)?r=e.format(c,a,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}te("SplitNode",lc);class td extends yt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),a=e.getTypeFromLength(n.length),o=s.build(e,a),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=Wo[h];d===n[0]?(u.push(o),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}te("SetNode",td);class Xo extends Le{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Yi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Yi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Jh(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Kh(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}te("InputNode",Xo);class Wn extends Xo{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}te("ConstNode",Wn);let ur=null;const $s=new Map;function F(i,e){if($s.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);$s.set(i,e)}const Du=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),nd={setup(i,e){const t=e.shift();return i($o(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(ur.assign(t,...n),t);if($s.has(e)){const n=$s.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&$s.has(e.slice(0,e.length-6))){const n=$s.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Du(e),ye(new lc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Du(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>ye(new td(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),ye(new lc(i,e));if(/^\d+$/.test(e)===!0)return ye(new fr(t,new Wn(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Ba=new WeakMap,Uu=new WeakMap,Ay=function(i,e=null){const t=Yi(i);if(t==="node"){let n=Ba.get(i);return n===void 0&&(n=new Proxy(i,nd),Ba.set(i,n),Ba.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return ye(uc(i,e));if(t==="shader")return ne(i)}return i},Ny=function(i,e=null){for(const t in i)i[t]=ye(i[t],e);return i},by=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=ye(i[n],e);return i},wy=function(i,e=null,t=null,n=null){const s=r=>ye(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...Qs(r))):t!==null?(t=ye(t),(...r)=>s(new i(e,...Qs(r),t))):(...r)=>s(new i(e,...Qs(r)))},Ry=function(i,...e){return ye(new i(...Qs(e)))};class Cy extends Le{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let a=Uu.get(e.constructor);a===void 0&&(a=new WeakMap,Uu.set(e.constructor,a));let o=a.get(t);return o===void 0&&(o=ye(e.buildFunctionNode(t)),a.set(t,o)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(o),ye(o.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return ye(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class Ly extends Le{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return $o(e),ye(new Cy(this,e))}setup(){return this.call()}}const Py=[!1,!0],Iy=[0,1,2,3],Dy=[-1,-2],id=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Uc=new Map;for(const i of Py)Uc.set(i,new Wn(i));const Oc=new Map;for(const i of Iy)Oc.set(i,new Wn(i,"uint"));const Fc=new Map([...Oc].map(i=>new Wn(i.value,"int")));for(const i of Dy)Fc.set(i,new Wn(i,"int"));const qo=new Map([...Fc].map(i=>new Wn(i.value)));for(const i of id)qo.set(i,new Wn(i));for(const i of id)qo.set(-i,new Wn(-i));const Yo={bool:Uc,uint:Oc,ints:Fc,float:qo},Ou=new Map([...Uc,...qo]),uc=(i,e)=>Ou.has(i)?Ou.get(i):i.isNode===!0?i:new Wn(i,e),Uy=i=>{try{return i.getNodeType()}catch{return}},pt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Kh(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return ye(e.get(t[0]));if(t.length===1){const s=uc(t[0],i);return Uy(s)===i?ye(s):ye(new Dc(s,i))}const n=t.map(s=>uc(s));return ye(new ed(n,i))}},Oy=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Cr(i){return new Proxy(new Ly(i),nd)}const ye=(i,e=null)=>Ay(i,e),$o=(i,e=null)=>new Ny(i,e),Qs=(i,e=null)=>new by(i,e),G=(...i)=>new wy(...i),oe=(...i)=>new Ry(...i),ne=i=>{const e=new Cr(i),t=(...n)=>{let s;return $o(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};te("ShaderNode",Cr);const Fu=i=>{ur=i},Fy=()=>ur,vt=(...i)=>ur.if(...i);function Vy(i){return ur&&ur.add(i),i}F("append",Vy);const zy=new pt("color"),b=new pt("float",Yo.float),R=new pt("int",Yo.int),ge=new pt("uint",Yo.uint),Ss=new pt("bool",Yo.bool),We=new pt("vec2"),sd=new pt("ivec2"),By=new pt("uvec2"),Gy=new pt("bvec2"),B=new pt("vec3"),Hy=new pt("ivec3"),Hr=new pt("uvec3"),rd=new pt("bvec3"),Re=new pt("vec4"),ky=new pt("ivec4"),Wy=new pt("uvec4"),Xy=new pt("bvec4"),od=new pt("mat2"),qy=new pt("imat2"),Yy=new pt("umat2"),$y=new pt("bmat2"),hi=new pt("mat3"),jy=new pt("imat3"),Zy=new pt("umat3"),Ky=new pt("bmat3"),Lr=new pt("mat4"),Jy=new pt("imat4"),Qy=new pt("umat4"),eM=new pt("bmat4"),tM=(i="")=>ye(new Wn(i,"string")),nM=i=>ye(new Wn(i,"ArrayBuffer"));F("color",zy);F("float",b);F("int",R);F("uint",ge);F("bool",Ss);F("vec2",We);F("ivec2",sd);F("uvec2",By);F("bvec2",Gy);F("vec3",B);F("ivec3",Hy);F("uvec3",Hr);F("bvec3",rd);F("vec4",Re);F("ivec4",ky);F("uvec4",Wy);F("bvec4",Xy);F("mat2",od);F("imat2",qy);F("umat2",Yy);F("bmat2",$y);F("mat3",hi);F("imat3",jy);F("umat3",Zy);F("bmat3",Ky);F("mat4",Lr);F("imat4",Jy);F("umat4",Qy);F("bmat4",eM);F("string",tM);F("arrayBuffer",nM);const iM=G(fr),sM=(i,e)=>ye(new Dc(ye(i),e));F("element",iM);F("convert",sM);class ad extends yt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Wo.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),a=n.getNodeType(e),o=n.context({assign:!0}).build(e),c=s.build(e,a),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=o);else if(r){const d=e.getVarFromNode(this,null,a),m=e.getPropertyName(d);e.addLineFlowCode(`${m} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const p=n.components[_];e.addLineFlowCode(`${g}.${p} = ${m}[ ${_} ]`)}t!=="void"&&(h=o)}else h=`${o} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=o));return u.initialized=!0,e.format(h,a,t)}}const rM=G(ad);te("AssignNode",ad);F("assign",rM);class cd extends Le{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),r=e.getVaryingFromNode(this,t,s);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const a=e.getPropertyName(r,Pu.VERTEX);return e.flowNodeFromShaderStage(Pu.VERTEX,n,s,a),e.getPropertyName(r)}}const Lt=G(cd);F("varying",Lt);te("VaryingNode",cd);class jo extends Le{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),a=e.getTypeFromAttribute(r),o=e.getAttribute(t,a);return e.shaderStage==="vertex"?e.format(o.name,a,n):Lt(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const pn=(i,e)=>ye(new jo(i,e));te("AttributeNode",jo);class ld extends Le{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const ud=G(ld);F("bypass",ud);te("BypassNode",ld);let oM=0;class aM{constructor(){this.id=oM++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class hd extends Le{constructor(e,t=new aM){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const wo=G(hd),cM=i=>wo(i,null);F("cache",wo);F("globalCache",cM);te("CacheNode",hd);class Vc extends Le{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Li=G(Vc),lM=(i,e)=>Li(i,{label:e});F("context",Li);F("label",lM);te("ContextNode",Vc);class di extends Le{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===di.VERTEX)s=e.getVertexIndex();else if(n===di.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Lt(this).build(e,t),r}}di.VERTEX="vertex";di.INSTANCE="instance";const uM=oe(di,di.VERTEX),hM=oe(di,di.INSTANCE);te("IndexNode",di);class dd{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class fd extends Le{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),a=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${a}`),r}}const Ir=G(fd);F("temp",Ir);F("toVar",(...i)=>Ir(...i).append());te("VarNode",fd);class Bt extends Le{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const tn=(i,e)=>ye(new Bt(i,e)),Hi=(i,e)=>ye(new Bt(i,e,!0)),Jt=oe(Bt,"vec4","DiffuseColor"),Pr=oe(Bt,"float","Roughness"),dM=oe(Bt,"float","Metalness"),hc=oe(Bt,"float","Clearcoat"),Ro=oe(Bt,"float","ClearcoatRoughness"),js=oe(Bt,"vec3","Sheen"),zc=oe(Bt,"float","SheenRoughness"),Bc=oe(Bt,"float","Iridescence"),pd=oe(Bt,"float","IridescenceIOR"),md=oe(Bt,"float","IridescenceThickness"),Ti=oe(Bt,"color","SpecularColor"),dc=oe(Bt,"float","Shininess"),fM=oe(Bt,"vec4","Output"),er=oe(Bt,"float","dashSize"),Co=oe(Bt,"float","gapSize");oe(Bt,"float","pointWidth");te("PropertyNode",Bt);class pM extends Bt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}te("ParameterNode",pM);class Gc extends Le{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}G(Gc);te("CodeNode",Gc);class mM extends Gc{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,a=e.getCodeFromNode(this,r);s!==""&&(a.name=s);const o=e.getPropertyName(a);let c=this.getNodeFunction(e).getCode(o);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),m=l[h].build(e,"property");c=c.replace(d,m)}return a.code=c+`
`,t==="property"?o:e.format(`${o}()`,r,t)}}te("FunctionNode",mM);class Hc extends Le{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const gM=i=>new Hc(i),gd=i=>new Hc(i,!0);gd("frame");gd("render");const _M=gM("object");te("UniformGroupNode",Hc);class As extends Xo{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=_M}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const a=r.getInputType(e),o=e.getUniformFromNode(r,a,e.shaderStage,e.context.label),c=e.getPropertyName(o);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const Rt=(i,e)=>{const t=Oy(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return ye(new As(n,t))};te("UniformNode",As);class _d extends jo{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const mi=(...i)=>ye(new _d(...i));te("UVNode",_d);class xd extends Le{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const vd=G(xd);F("textureSize",vd);te("TextureSizeNode",xd);class bt extends yt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let r=n;for(let a=0;a<s.length;a++)r=new bt(e,r,s[a]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,a=s.getNodeType(e),o=typeof r<"u"?r.getNodeType(e):null;if(a==="void"||o==="void")return"void";if(n==="%")return a;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(a);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(a),e.getTypeLength(o));return c>1?`bvec${c}`:"bool"}else return a==="float"&&e.isMatrix(o)?o:e.isMatrix(a)&&e.isVector(o)?e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(o)?e.getVectorFromMatrix(o):e.getTypeLength(o)>e.getTypeLength(a)?o:a}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,a=this.getNodeType(e,t);let o=null,c=null;a!=="void"?(o=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(o)?c=o:o=c="float":n===">>"||n==="<<"?(o=a,c=e.changeComponentType(c,"uint")):e.isMatrix(o)&&e.isVector(c)?c=e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(c)?o=e.getVectorFromMatrix(c):o=c=a):o=c=a;const l=s.build(e,o),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,a,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,a,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,a,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,a,t):n==="!"||n==="~"?e.format(`(${n}${l})`,o,t):d?e.format(`${d}( ${l}, ${u} )`,a,t):e.format(`( ${l} ${n} ${u} )`,a,t);if(o!=="void")return d?e.format(`${d}( ${l}, ${u} )`,a,t):e.format(`${l} ${n} ${u}`,a,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const In=G(bt,"+"),Ut=G(bt,"-"),dt=G(bt,"*"),hr=G(bt,"/"),xM=G(bt,"%"),vM=G(bt,"=="),yM=G(bt,"!="),MM=G(bt,"<"),yd=G(bt,">"),SM=G(bt,"<="),TM=G(bt,">="),EM=G(bt,"&&"),AM=G(bt,"||"),NM=G(bt,"!"),bM=G(bt,"^^"),wM=G(bt,"&"),RM=G(bt,"~"),CM=G(bt,"|"),LM=G(bt,"^"),PM=G(bt,"<<"),IM=G(bt,">>");F("add",In);F("sub",Ut);F("mul",dt);F("div",hr);F("remainder",xM);F("equal",vM);F("notEqual",yM);F("lessThan",MM);F("greaterThan",yd);F("lessThanEqual",SM);F("greaterThanEqual",TM);F("and",EM);F("or",AM);F("not",NM);F("xor",bM);F("bitAnd",wM);F("bitNot",RM);F("bitOr",CM);F("bitXor",LM);F("shiftLeft",PM);F("shiftRight",IM);te("OperatorNode",bt);class I extends yt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),a=e.isMatrix(n)?0:e.getTypeLength(n),o=e.isMatrix(s)?0:e.getTypeLength(s);return r>a&&r>o?t:a>o?n:o>r?s:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":t===I.ALL?"bool":t===I.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===I.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),a=this.aNode,o=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=a,h=o;e.isMatrix(u.getNodeType(e))?h=Re(B(h),0):u=Re(B(u),0);const d=dt(u,h).xyz;return Gn(d).build(e,t)}else{if(n===I.NEGATE)return e.format("( - "+a.build(e,r)+" )",s,t);if(n===I.ONE_MINUS)return Ut(1,a).build(e,t);if(n===I.RECIPROCAL)return hr(1,a).build(e,t);if(n===I.DIFFERENCE)return Ln(Ut(a,o)).build(e,t);{const u=[];return n===I.CROSS||n===I.MOD?u.push(a.build(e,s),o.build(e,s)):n===I.STEP?u.push(a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r),o.build(e,r)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(a.build(e,r),o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r)):n===I.REFRACT?u.push(a.build(e,r),o.build(e,r),c.build(e,"float")):n===I.MIX?u.push(a.build(e,r),o.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(a.build(e,r)),o!==null&&u.push(o.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.ALL="all";I.ANY="any";I.EQUALS="equals";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.BITCAST="bitcast";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const Md=b(1e-6);b(1e6);const Vu=b(Math.PI);b(Math.PI*2);const DM=G(I,I.ALL),UM=G(I,I.ANY),OM=G(I,I.EQUALS),FM=G(I,I.RADIANS),VM=G(I,I.DEGREES),zM=G(I,I.EXP),BM=G(I,I.EXP2),GM=G(I,I.LOG),Sd=G(I,I.LOG2),Ns=G(I,I.SQRT),HM=G(I,I.INVERSE_SQRT),kr=G(I,I.FLOOR),Td=G(I,I.CEIL),Gn=G(I,I.NORMALIZE),kc=G(I,I.FRACT),Wi=G(I,I.SIN),ps=G(I,I.COS),kM=G(I,I.TAN),WM=G(I,I.ASIN),XM=G(I,I.ACOS),qM=G(I,I.ATAN),Ln=G(I,I.ABS),Wc=G(I,I.SIGN),YM=G(I,I.LENGTH),$M=G(I,I.NEGATE),jM=G(I,I.ONE_MINUS),ZM=G(I,I.DFDX),KM=G(I,I.DFDY),JM=G(I,I.ROUND),QM=G(I,I.RECIPROCAL),Ed=G(I,I.TRUNC),eS=G(I,I.FWIDTH);G(I,I.BITCAST);const tS=G(I,I.ATAN2),Dr=G(I,I.MIN),si=G(I,I.MAX),nS=G(I,I.MOD),iS=G(I,I.STEP),sS=G(I,I.REFLECT),rS=G(I,I.DISTANCE),oS=G(I,I.DIFFERENCE),pr=G(I,I.DOT),aS=G(I,I.CROSS),ui=G(I,I.POW),cS=G(I,I.POW,2),lS=G(I,I.POW,3),uS=G(I,I.POW,4),hS=G(I,I.TRANSFORM_DIRECTION),dS=i=>dt(Wc(i),ui(Ln(i),1/3)),fS=i=>pr(i,i),Dn=G(I,I.MIX),Lo=(i,e=0,t=1)=>ye(new I(I.CLAMP,ye(i),ye(e),ye(t))),pS=i=>Lo(i),mS=G(I,I.REFRACT),Ii=G(I,I.SMOOTHSTEP),gS=G(I,I.FACEFORWARD),_S=(i,e,t)=>Dn(e,t,i),xS=(i,e,t)=>Ii(e,t,i);F("all",DM);F("any",UM);F("equals",OM);F("radians",FM);F("degrees",VM);F("exp",zM);F("exp2",BM);F("log",GM);F("log2",Sd);F("sqrt",Ns);F("inverseSqrt",HM);F("floor",kr);F("ceil",Td);F("normalize",Gn);F("fract",kc);F("sin",Wi);F("cos",ps);F("tan",kM);F("asin",WM);F("acos",XM);F("atan",qM);F("abs",Ln);F("sign",Wc);F("length",YM);F("lengthSq",fS);F("negate",$M);F("oneMinus",jM);F("dFdx",ZM);F("dFdy",KM);F("round",JM);F("reciprocal",QM);F("trunc",Ed);F("fwidth",eS);F("atan2",tS);F("min",Dr);F("max",si);F("mod",nS);F("step",iS);F("reflect",sS);F("distance",rS);F("dot",pr);F("cross",aS);F("pow",ui);F("pow2",cS);F("pow3",lS);F("pow4",uS);F("transformDirection",hS);F("mix",_S);F("clamp",Lo);F("refract",mS);F("smoothstep",xS);F("faceForward",gS);F("difference",oS);F("saturate",pS);F("cbrt",dS);te("MathNode",I);const vS=ne(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),a=Dn(n,s,r);return Re(a,e.a)}),yS=ne(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),a=Dn(n,s,r);return Re(a,e.a)}),zu=i=>{let e=null;return i===Hn?e="Linear":i===Zn&&(e="sRGB"),e},Ad=(i,e)=>zu(i)+"To"+zu(e);class An extends yt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===An.LINEAR_TO_LINEAR?t:MS[e]({value:t})}}An.LINEAR_TO_LINEAR="LinearToLinear";An.LINEAR_TO_sRGB="LinearTosRGB";An.sRGB_TO_LINEAR="sRGBToLinear";const MS={[An.LINEAR_TO_sRGB]:yS,[An.sRGB_TO_LINEAR]:vS},SS=(i,e)=>ye(new An(Ad(Hn,e),ye(i))),Nd=(i,e)=>ye(new An(Ad(e,Hn),ye(i))),TS=G(An,An.LINEAR_TO_sRGB),ES=G(An,An.sRGB_TO_LINEAR);F("linearTosRGB",TS);F("sRGBToLinear",ES);F("linearToColorSpace",SS);F("colorSpaceToLinear",Nd);te("ColorSpaceNode",An);class bd extends Le{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Xc=G(bd);te("ExpressionNode",bd);class wd extends As{constructor(e){super(0),this.textureNode=e,this.updateType=Ct.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const qc=G(wd);te("MaxMipLevelNode",wd);class mr extends As{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Ct.NONE,this.setUpdateMatrix(t===null)}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return mi(this.value.channel)}setReference(){return this.value}getTransformedUV(e){const t=this.value;return Rt(t.matrix).mul(B(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Ct.FRAME:Ct.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),s!==null&&e.context.getTextureLevelAlgorithm!==void 0&&(s=e.context.getTextureLevelAlgorithm(this,s)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,a){const o=this.value;let c;return s?c=e.generateTextureLevel(o,t,n,s,r):a?c=e.generateTextureCompare(o,t,n,a,r):this.sampler===!1?c=e.generateTextureLoad(o,t,n,r):c=e.generateTexture(o,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const a=e.getDataFromNode(this);let o=a.propertyName;if(o===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:m}=n,g=this.generateUV(e,u),_=h?h.build(e,"float"):null,p=m?m.build(e,"int"):null,f=d?d.build(e,"float"):null,S=e.getVarFromNode(this);o=e.getPropertyName(S);const y=this.generateSnippet(e,r,g,_,p,f);e.addLineFlowCode(`${o} = ${y}`),e.context.tempWrite!==!1&&(a.snippet=y,a.propertyName=o)}let c=o;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=Nd(Xc(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,ye(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(qc(t)),ye(t)}level(e){const t=this.clone();return t.levelNode=e,t}size(e){return vd(this,e)}compare(e){const t=this.clone();return t.compareNode=ye(e),ye(t)}depth(e){const t=this.clone();return t.depthNode=ye(e),ye(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Bn=G(mr),AS=(...i)=>Bn(...i).setSampler(!1);F("texture",Bn);te("TextureNode",mr);class Zo extends As{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Yc=(i,e,t)=>ye(new Zo(i,e,t));te("BufferNode",Zo);class NS extends fr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Rd extends Zo{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=Ct.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const a=r*4;t[a]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const a=r*4,o=e[r];t[a]=o.r,t[a+1]=o.g,t[a+2]=o.b||0}else for(let r=0;r<e.length;r++){const a=r*4,o=e[r];t[a]=o.x,t[a+1]=o.y,t[a+2]=o.z||0,t[a+3]=o.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?Yi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return ye(new NS(this,ye(e)))}}const fc=(i,e)=>ye(new Rd(i,e));te("UniformsNode",Rd);class bS extends fr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class Wr extends Le{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=Ct.OBJECT}element(e){return ye(new bS(this,ye(e)))}setNodeType(e){let t=null;this.count!==null?t=Yc(null,e,this.count):Array.isArray(this.getValueFromReference())?t=fc(null,e):e==="texture"?t=Bn(null):t=Rt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}setReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const fi=(i,e,t)=>ye(new Wr(i,e,t)),wS=(i,e,t,n)=>ye(new Wr(i,e,n,t));te("ReferenceNode",Wr);class Cd extends Wr{constructor(e,t,n=null){super(e,t,n),this.material=n}setReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const RS=(i,e,t)=>ye(new Cd(i,e,t));te("MaterialReferenceNode",Cd);class Be extends Le{constructor(e=Be.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Ct.OBJECT,this._uniformNode=new As(null)}getNodeType(){const e=this.scope;if(e===Be.WORLD_MATRIX||e===Be.VIEW_MATRIX)return"mat4";if(e===Be.NORMAL_MATRIX)return"mat3";if(e===Be.POSITION||e===Be.VIEW_POSITION||e===Be.DIRECTION||e===Be.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Be.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Be.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Be.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Be.POSITION)n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Be.SCALE)n.value=n.value||new U,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Be.DIRECTION)n.value=n.value||new U,t.getWorldDirection(n.value);else if(s===Be.VIEW_POSITION){const r=e.camera;n.value=n.value||new U,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Be.WORLD_MATRIX||t===Be.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Be.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Be.POSITION||t===Be.VIEW_POSITION||t===Be.DIRECTION||t===Be.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Be.VIEW_MATRIX="viewMatrix";Be.NORMAL_MATRIX="normalMatrix";Be.WORLD_MATRIX="worldMatrix";Be.POSITION="position";Be.SCALE="scale";Be.VIEW_POSITION="viewPosition";Be.DIRECTION="direction";G(Be,Be.DIRECTION);G(Be,Be.VIEW_MATRIX);G(Be,Be.NORMAL_MATRIX);G(Be,Be.WORLD_MATRIX);const pc=G(Be,Be.POSITION);G(Be,Be.SCALE);const Ld=G(Be,Be.VIEW_POSITION);te("Object3DNode",Be);class Ye extends Be{constructor(e=Ye.POSITION){super(e),this.updateType=Ct.RENDER}getNodeType(e){const t=this.scope;return t===Ye.PROJECTION_MATRIX||t===Ye.PROJECTION_MATRIX_INVERSE?"mat4":t===Ye.NEAR||t===Ye.FAR||t===Ye.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===Ye.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===Ye.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===Ye.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===Ye.NEAR?n.value=t.near:s===Ye.FAR?n.value=t.far:s===Ye.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===Ye.PROJECTION_MATRIX||t===Ye.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===Ye.NEAR||t===Ye.FAR||t===Ye.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}Ye.PROJECTION_MATRIX="projectionMatrix";Ye.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";Ye.NEAR="near";Ye.FAR="far";Ye.LOG_DEPTH="logDepth";const Ei=oe(Ye,Ye.PROJECTION_MATRIX);oe(Ye,Ye.PROJECTION_MATRIX_INVERSE);const Ga=oe(Ye,Ye.NEAR),Ha=oe(Ye,Ye.FAR),CS=oe(Ye,Ye.LOG_DEPTH),ns=oe(Ye,Ye.VIEW_MATRIX);oe(Ye,Ye.NORMAL_MATRIX);oe(Ye,Ye.WORLD_MATRIX);oe(Ye,Ye.POSITION);te("CameraNode",Ye);class rn extends Be{constructor(e=rn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}oe(rn,rn.DIRECTION);const Ts=oe(rn,rn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),Pd=oe(rn,rn.NORMAL_MATRIX),Po=oe(rn,rn.WORLD_MATRIX);oe(rn,rn.POSITION);oe(rn,rn.SCALE);oe(rn,rn.VIEW_POSITION);te("ModelNode",rn);class kt extends Le{constructor(e=kt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===kt.GEOMETRY)n=pn("normal","vec3");else if(t===kt.LOCAL)n=Lt(Io);else if(t===kt.VIEW){const s=Pd.mul(Di);n=Gn(Lt(s))}else if(t===kt.WORLD){const s=Qi.transformDirection(ns);n=Gn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}kt.GEOMETRY="geometry";kt.LOCAL="local";kt.VIEW="view";kt.WORLD="world";const Io=oe(kt,kt.GEOMETRY),Di=oe(kt,kt.LOCAL).temp("Normal"),Qi=oe(kt,kt.VIEW),Id=oe(kt,kt.WORLD),Dt=tn("vec3","TransformedNormalView"),LS=Dt.transformDirection(ns).normalize(),Zs=tn("vec3","TransformedClearcoatNormalView");te("NormalNode",kt);const Bu=new Map;class ae extends Le{constructor(e){super(),this.scope=e}getCache(e,t){let n=Bu.get(e);return n===void 0&&(n=RS(e,t),Bu.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===ae.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===ae.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===ae.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture(n).r:s=b(1);else if(n===ae.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===ae.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===ae.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===ae.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=Qi;else if(n===ae.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===ae.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===ae.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=Qi;else if(n===ae.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===ae.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===ae.IRIDESCENCE_THICKNESS){const r=fi("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const a=fi("0","float",t.iridescenceThicknessRange);s=r.sub(a).mul(this.getTexture(n).g).add(a)}else s=r}else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}ae.ALPHA_TEST="alphaTest";ae.COLOR="color";ae.OPACITY="opacity";ae.SHININESS="shininess";ae.SPECULAR_COLOR="specular";ae.SPECULAR_STRENGTH="specularStrength";ae.REFLECTIVITY="reflectivity";ae.ROUGHNESS="roughness";ae.METALNESS="metalness";ae.NORMAL="normal";ae.CLEARCOAT="clearcoat";ae.CLEARCOAT_ROUGHNESS="clearcoatRoughness";ae.CLEARCOAT_NORMAL="clearcoatNormal";ae.EMISSIVE="emissive";ae.ROTATION="rotation";ae.SHEEN="sheen";ae.SHEEN_ROUGHNESS="sheenRoughness";ae.IRIDESCENCE="iridescence";ae.IRIDESCENCE_IOR="iridescenceIOR";ae.IRIDESCENCE_THICKNESS="iridescenceThickness";ae.LINE_SCALE="scale";ae.LINE_DASH_SIZE="dashSize";ae.LINE_GAP_SIZE="gapSize";ae.LINE_WIDTH="linewidth";ae.LINE_DASH_OFFSET="dashOffset";ae.POINT_WIDTH="pointWidth";const PS=oe(ae,ae.ALPHA_TEST),Ur=oe(ae,ae.COLOR),IS=oe(ae,ae.SHININESS),DS=oe(ae,ae.EMISSIVE),Dd=oe(ae,ae.OPACITY),US=oe(ae,ae.SPECULAR_COLOR),OS=oe(ae,ae.SPECULAR_STRENGTH);oe(ae,ae.REFLECTIVITY);const FS=oe(ae,ae.ROUGHNESS),VS=oe(ae,ae.METALNESS),zS=oe(ae,ae.NORMAL),BS=oe(ae,ae.CLEARCOAT),GS=oe(ae,ae.CLEARCOAT_ROUGHNESS),HS=oe(ae,ae.CLEARCOAT_NORMAL),kS=oe(ae,ae.ROTATION),WS=oe(ae,ae.SHEEN),XS=oe(ae,ae.SHEEN_ROUGHNESS),qS=oe(ae,ae.IRIDESCENCE),YS=oe(ae,ae.IRIDESCENCE_IOR),$S=oe(ae,ae.IRIDESCENCE_THICKNESS),mc=oe(ae,ae.LINE_SCALE),Ud=oe(ae,ae.LINE_DASH_SIZE),Od=oe(ae,ae.LINE_GAP_SIZE),ka=oe(ae,ae.LINE_WIDTH),Gu=oe(ae,ae.LINE_DASH_OFFSET),jS=oe(ae,ae.POINT_WIDTH);te("MaterialNode",ae);class gt extends Le{constructor(e=gt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===gt.GEOMETRY)n=pn("position","vec3");else if(t===gt.LOCAL)n=Lt(gn);else if(t===gt.WORLD){const s=Po.mul(Tn);n=Lt(s)}else if(t===gt.VIEW){const s=Ts.mul(Tn);n=Lt(s)}else if(t===gt.VIEW_DIRECTION){const s=yn.negate();n=Gn(Lt(s))}else if(t===gt.WORLD_DIRECTION){const s=Tn.transformDirection(Po);n=Gn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}gt.GEOMETRY="geometry";gt.LOCAL="local";gt.WORLD="world";gt.WORLD_DIRECTION="worldDirection";gt.VIEW="view";gt.VIEW_DIRECTION="viewDirection";const gn=oe(gt,gt.GEOMETRY),Tn=oe(gt,gt.LOCAL).temp("Position"),ZS=oe(gt,gt.WORLD),KS=oe(gt,gt.WORLD_DIRECTION),yn=oe(gt,gt.VIEW),Vt=oe(gt,gt.VIEW_DIRECTION);te("PositionNode",gt);class Fd extends yt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Lt(e.context.mvp);const t=this.positionNode||Tn;return Ei.mul(Ts).mul(t)}}const Hu=G(Fd);te("ModelViewProjectionNode",Fd);class Vd extends Xo{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Eo,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,a=this.bufferOffset,o=n.isInterleavedBuffer===!0?n:new Gh(n,r),c=new Pc(o,s,a);o.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Lt(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Ko=(i,e,t,n)=>ye(new Vd(i,e,t,n)),JS=(i,e,t,n)=>Ko(i,e,t,n).setUsage(Mh),QS=(i,e,t,n)=>Ko(i,e,t,n).setInstanced(!0),eT=(i,e,t,n)=>JS(i,e,t,n).setInstanced(!0);F("toAttribute",i=>Ko(i.value));te("BufferAttributeNode",Vd);class zd extends Le{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null}setup(){let e=this.instanceMatrixNode;if(e===null){const o=this.instanceMesh.instanceMatrix,c=new py(o.array,16,1),l=o.usage===Mh?eT:QS,u=[l(c,"vec4",16,0),l(c,"vec4",16,4),l(c,"vec4",16,8),l(c,"vec4",16,12)];e=Lr(...u),this.instanceMatrixNode=e}const t=e.mul(Tn).xyz,n=hi(e[0].xyz,e[1].xyz,e[2].xyz),s=Di.div(B(n[0].dot(n[0]),n[1].dot(n[1]),n[2].dot(n[2]))),r=n.mul(s).xyz;Tn.assign(t),Di.assign(r)}}const tT=G(zd);te("InstanceNode",zd);class zt extends Le{constructor(e=zt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===zt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===zt.GEOMETRY)n=pn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===zt.LOCAL)n=Lt(Do.xyz);else if(t===zt.VIEW){const s=Ts.mul(Re($c,0)).xyz;n=Gn(Lt(s))}else if(t===zt.WORLD){const s=Jo.transformDirection(ns);n=Gn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}zt.GEOMETRY="geometry";zt.LOCAL="local";zt.VIEW="view";zt.WORLD="world";const Do=oe(zt,zt.GEOMETRY),$c=oe(zt,zt.LOCAL),Jo=oe(zt,zt.VIEW),nT=oe(zt,zt.WORLD),Bd=Ir(Jo,"TransformedTangentView");Gn(Bd.transformDirection(ns));te("TangentNode",zt);class Gd extends Le{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=Ct.OBJECT,this.skinIndexNode=pn("skinIndex","uvec4"),this.skinWeightNode=pn("skinWeight","vec4");let n,s,r;t?(n=fi("bindMatrix","mat4"),s=fi("bindMatrixInverse","mat4"),r=wS("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Rt(e.bindMatrix,"mat4"),s=Rt(e.bindMatrixInverse,"mat4"),r=Yc(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:a}=this,o=a.element(t.x),c=a.element(t.y),l=a.element(t.z),u=a.element(t.w),h=s.mul(Tn),d=In(o.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),m=r.mul(d).xyz;let g=In(n.x.mul(o),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Di).xyz;Tn.assign(m),Di.assign(_),e.hasGeometryAttribute("tangent")&&$c.assign(_)}generate(e,t){if(t!=="void")return Tn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const iT=i=>ye(new Gd(i,!0));te("SkinningNode",Gd);class Hd extends Le{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,r=this.params.length-1;s<r;s++){const a=this.params[s],o=a.isNode!==!0&&a.name||this.getVarName(s),c=a.isNode!==!0&&a.type||"int";n[o]=Xc(o,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,r=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,m=null,g=null,_=null,p=null;u.isNode?(g="int",m=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",m=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const f={start:h,end:d,condition:_},S=f.start,y=f.end;let E="",D="",w="";p||(g==="int"||g==="uint"?_.includes("<")?p="++":p="--":_.includes("<")?p="+= 1.":p="-= 1."),E+=e.getVar(g,m)+" = "+S,D+=m+" "+_+" "+y,w+=m+" "+p;const A=`for ( ${E}; ${D}; ${w} )`;e.addFlowCode((c===0?`
`:"")+e.tab+A+` {

`).addFlowTab()}const a=Li(r,n).build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+a);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const St=(...i)=>ye(new Hd(Qs(i,"int"))).append();F("loop",(i,...e)=>ud(i,St(...e)));te("LoopNode",Hd);const Wa=new WeakMap,Cn=new lt,ku=ne(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const a=R(uM).mul(t).add(r),o=a.div(n),c=a.sub(o.mul(n));return AS(i,sd(c,o)).depth(s).mul(e)});function sT(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let a=Wa.get(i);if(a===void 0||a.count!==r){let S=function(){p.dispose(),Wa.delete(i),i.removeEventListener("dispose",S)};var o=S;a!==void 0&&a.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,m=1;const g=4096;d>g&&(m=Math.ceil(d/g),d=g);const _=new Float32Array(d*m*4*r),p=new Nc(_,d,m,r);p.type=ci,p.needsUpdate=!0;const f=h*4;for(let y=0;y<r;y++){const E=c[y],D=l[y],w=u[y],A=d*m*4*y;for(let V=0;V<E.count;V++){const K=V*f;e===!0&&(Cn.fromBufferAttribute(E,V),_[A+K+0]=Cn.x,_[A+K+1]=Cn.y,_[A+K+2]=Cn.z,_[A+K+3]=0),t===!0&&(Cn.fromBufferAttribute(D,V),_[A+K+4]=Cn.x,_[A+K+5]=Cn.y,_[A+K+6]=Cn.z,_[A+K+7]=0),n===!0&&(Cn.fromBufferAttribute(w,V),_[A+K+8]=Cn.x,_[A+K+9]=Cn.y,_[A+K+10]=Cn.z,_[A+K+11]=w.itemSize===4?Cn.w:1)}}a={count:r,texture:p,stride:h,size:new Fe(d,m)},Wa.set(i,a),i.addEventListener("dispose",S)}return a}class kd extends Le{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Rt(1),this.updateType=Ct.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,a=r!==void 0?r.length:0,{texture:o,stride:c,size:l}=sT(t);n===!0&&Tn.mulAssign(this.morphBaseInfluence),s===!0&&Di.mulAssign(this.morphBaseInfluence);const u=R(l.width);St(a,({i:h})=>{const d=fi("morphTargetInfluences","float").element(h);n===!0&&Tn.addAssign(ku({bufferMap:o,influence:d,stride:c,width:u,depth:h,offset:R(0)})),s===!0&&Di.addAssign(ku({bufferMap:o,influence:d,stride:c,width:u,depth:h,offset:R(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const rT=G(kd);te("MorphNode",kd);class Wd extends Le{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Vt.negate().reflect(Dt).transformDirection(ns)}}const oT=oe(Wd);te("ReflectVectorNode",Wd);class Xd extends mr{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return oT}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===ar||!n.isRenderTargetTexture?B(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const jc=G(Xd);F("cubeTexture",jc);te("CubeTextureNode",Xd);class Qo extends Le{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}te("LightingNode",Qo);let Nr=null;class bs extends Qo{constructor(e=null){super(),this.updateType=Ct.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new He,this._defaultColorNode=Rt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){Nr===null&&(Nr=e.createNodeMaterial(),Nr.fragmentNode=Re(0,0,0,1),Nr.isShadowNodeMaterial=!0);const n=this.light.shadow,s=e.getRenderTarget(n.mapSize.width,n.mapSize.height),r=new Br;r.minFilter=Ht,r.magFilter=Ht,r.image.width=n.mapSize.width,r.image.height=n.mapSize.height,r.compareFunction=vh,s.depthTexture=r,n.camera.updateProjectionMatrix();const a=fi("bias","float",n),o=fi("normalBias","float",n);let c=Rt(n.matrix).mul(ZS.add(Id.mul(o)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(a);e.renderer.coordinateSystem===ar&&(u=u.mul(2).sub(1)),c=B(c.x,c.y.oneMinus(),u),t=((m,g,_)=>Bn(m,g).compare(_))(r,c.xy,c.z);const d=Bn(s.texture,c);this.rtt=s,this.colorNode=this.colorNode.mul(l.mix(1,t.mix(d.a.mix(1,d),1))),this.shadowNode=t,this.updateBeforeType=Ct.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r}=e,a=r.overrideMaterial;r.overrideMaterial=Nr,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const o=s.getRenderTarget(),c=s.getRenderObjectFunction();s.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&s.renderObject(l,...u)}),s.setRenderTarget(t),s.render(r,n.shadow.camera),s.setRenderTarget(o),s.setRenderObjectFunction(c),r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}te("AnalyticLightNode",bs);const Uo=new WeakMap,aT=i=>i.sort((e,t)=>e.id-t.id);class cT extends Le{constructor(e=[]){super("vec3"),this.totalDiffuseNode=B().temp("totalDiffuse"),this.totalSpecularNode=B().temp("totalSpecular"),this.outgoingLightNode=B().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:a,totalSpecularNode:o}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const p of r)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:m,indirectSpecular:g}=t.reflectedLight;let _=h.add(m);l!==null&&(_=B(u!==null?u.mix(_,l):l)),a.assign(_),o.assign(d.add(g)),s.assign(a.add(o)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=aT(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,a=Uo.has(r)?Uo.get(r):bs;s=ye(new a(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const lT=G(cT);function gr(i,e){if(Uo.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Uo.set(i,e)}class qd extends Qo{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}te("AONode",qd);class Yd extends Vc{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=B().temp("directDiffuse"),s=B().temp("directSpecular"),r=B().temp("indirectDiffuse"),a=B().temp("indirectSpecular"),o={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:a};return{radiance:B().temp("radiance"),irradiance:B().temp("irradiance"),iblIrradiance:B().temp("iblIrradiance"),ambientOcclusion:b(1).temp("ambientOcclusion"),reflectedLight:o,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const $d=G(Yd);F("lightingContext",$d);te("LightingContextNode",Yd);class jd extends yt{constructor(e=KS){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.negate().clamp(-1,1).asin().mul(1/Math.PI).add(.5);return We(t,n)}}const Zd=G(jd);te("EquirectUVNode",jd);class Kd extends Le{constructor(e,t=null){super("float"),this.textureNode=e,this.roughnessNode=t}setup(){const{textureNode:e,roughnessNode:t}=this,n=qc(e),s=t.mul(t).mul(Math.PI).div(t.add(1));return n.add(s.log2()).clamp(0,n)}}const uT=G(Kd);te("SpecularMIPLevelNode",Kd);const Wu=new WeakMap;class Jd extends Qo{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode&&t.value.isCubeTexture!==!0){let c=Wu.get(t.value);if(c===void 0){const l=t.value,u=e.renderer,h=e.getCubeRenderTarget(512).fromEquirectangularTexture(u,l);c=jc(h.texture),Wu.set(t.value,c)}t=c}const n=fi("envMapIntensity","float",e.material),s=Li(t,Xu(Pr,Dt)).mul(n),r=Li(t,hT(LS)).mul(Math.PI).mul(n),a=wo(s);e.context.radiance.addAssign(a),e.context.iblIrradiance.addAssign(r);const o=e.context.lightingModel.clearcoatRadiance;if(o){const c=Li(t,Xu(Ro,Zs)).mul(n),l=wo(c);o.addAssign(l)}}}const Xu=(i,e)=>{let t=null,n=null;return{getUV:s=>{let r=null;return t===null&&(t=Vt.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(ns)),s.isCubeTextureNode?r=t:s.isTextureNode&&(n===null&&(n=Zd(t)),r=n),r},getTextureLevel:()=>i,getTextureLevelAlgorithm:(s,r)=>uT(s,r)}},hT=i=>{let e=null;return{getUV:t=>{let n=null;return t.isCubeTextureNode?n=i:t.isTextureNode&&(e===null&&(e=Zd(i),e=We(e.x,e.y.oneMinus())),n=e),n},getTextureLevel:t=>qc(t)}};te("EnvironmentNode",Jd);let Xa,qa;class ht extends Le{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ht.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=Ct.NONE;return(this.scope===ht.RESOLUTION||this.scope===ht.VIEWPORT)&&(e=Ct.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ht.VIEWPORT?e.getViewport(qa):e.getDrawingBufferSize(Xa)}setup(){const e=this.scope;let t=null;if(e===ht.RESOLUTION)t=Rt(Xa||(Xa=new Fe));else if(e===ht.VIEWPORT)t=Rt(qa||(qa=new lt));else{t=dT.div(qu);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=We(n,s)}return t}generate(e){if(this.scope===ht.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(qu).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}ht.COORDINATE="coordinate";ht.RESOLUTION="resolution";ht.VIEWPORT="viewport";ht.TOP_LEFT="topLeft";ht.BOTTOM_LEFT="bottomLeft";ht.TOP_RIGHT="topRight";ht.BOTTOM_RIGHT="bottomRight";const dT=oe(ht,ht.COORDINATE),qu=oe(ht,ht.RESOLUTION),tr=oe(ht,ht.VIEWPORT),Or=oe(ht,ht.TOP_LEFT);oe(ht,ht.BOTTOM_LEFT);oe(ht,ht.TOP_RIGHT);oe(ht,ht.BOTTOM_RIGHT);te("ViewportNode",ht);const br=new Fe;class Xr extends mr{constructor(e=Or,t=null,n=null){n===null&&(n=new Wh,n.minFilter=Xi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Ct.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(br);const n=this.value;(n.image.width!==br.width||n.image.height!==br.height)&&(n.image.width=br.width,n.image.height=br.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const fT=G(Xr),pT=G(Xr,null,null,{generateMipmaps:!0});F("viewportTexture",fT);F("viewportMipTexture",pT);te("ViewportTextureNode",Xr);let Ya=null;class Qd extends Xr{constructor(e=Or,t=null){Ya===null&&(Ya=new Br),super(e,t,Ya)}}const ef=G(Qd);F("viewportDepthTexture",ef);te("ViewportDepthTextureNode",Qd);class nn extends Le{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===nn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===nn.DEPTH)t=gc(yn.z,Ga,Ha);else if(e===nn.DEPTH_TEXTURE){const n=this.valueNode||ef(),s=tf(n,Ga,Ha);t=gc(s,Ga,Ha)}else e===nn.DEPTH_PIXEL&&this.valueNode!==null&&(t=nf().assign(this.valueNode));return t}}const gc=(i,e,t)=>i.add(e).div(e.sub(t)),tf=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));nn.DEPTH="depth";nn.DEPTH_TEXTURE="depthTexture";nn.DEPTH_PIXEL="depthPixel";const nf=G(nn,nn.DEPTH_PIXEL);oe(nn,nn.DEPTH);G(nn,nn.DEPTH_TEXTURE);const sf=oe(nn,nn.DEPTH_PIXEL);sf.assign=i=>nf(i);te("ViewportDepthNode",nn);class es extends Le{constructor(e=es.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,a=r+s,o=n?a-s:a;return this.scope===es.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,a,o):this.setupDefault(t.planes,a,o)}setupAlphaToCoverage(e,t,n){return ne(()=>{const s=fc(e),r=tn("float","distanceToPlane"),a=tn("float","distanceToGradient"),o=tn("float","clipOpacity");o.assign(1);let c;if(St(n,({i:l})=>{c=s.element(l),r.assign(yn.dot(c.xyz).negate().add(c.w)),a.assign(r.fwidth().div(2)),o.mulAssign(Ii(a.negate(),a,r)),o.equal(0).discard()}),n<t){const l=tn("float","unionclipOpacity");l.assign(1),St({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(yn.dot(c.xyz).negate().add(c.w)),a.assign(r.fwidth().div(2)),l.mulAssign(Ii(a.negate(),a,r).oneMinus())}),o.mulAssign(l.oneMinus())}Jt.a.mulAssign(o),Jt.a.equal(0).discard()})()}setupDefault(e,t,n){return ne(()=>{const s=fc(e);let r;if(St(n,({i:a})=>{r=s.element(a),yn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const a=tn("bool","clipped");a.assign(!0),St({start:n,end:t},({i:o})=>{r=s.element(o),a.assign(yn.dot(r.xyz).greaterThan(r.w).and(a))}),a.discard()}})()}}es.ALPHA_TO_COVERAGE="alphaToCoverage";es.DEFAULT="default";const mT=()=>ye(new es),gT=()=>ye(new es(es.ALPHA_TO_COVERAGE));class rf extends Le{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const _T=oe(rf),Oo=b(_T).mul(2).sub(1);te("FrontFacingNode",rf);const _c=new Map;class Xn extends Pi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Zh(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n),t=this.setupOutput(e,Re(s,Jt.a)),fM.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=gT():e.stack.add(mT())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Hu().w.add(1).log2().mul(CS).mul(.5)),n!==null&&sf.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&rT(t).append(),t.isSkinnedMesh===!0&&iT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&tT(t).append(),this.positionNode!==null&&Tn.assign(this.positionNode);const s=Hu();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({geometry:e}){let t=this.colorNode?Re(this.colorNode):Ur;this.vertexColors===!0&&e.hasAttribute("color")&&(t=Re(t.xyz.mul(pn("color","vec3")),t.a)),Jt.assign(t);const n=this.opacityNode?b(this.opacityNode):Dd;if(Jt.a.assign(Jt.a.mul(n)),this.alphaTestNode!==null||this.alphaTest>0){const s=this.alphaTestNode!==null?b(this.alphaTestNode):PS;Jt.a.lessThanEqual(s).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=yn.dFdx().cross(yn.dFdy()).normalize();Dt.assign(e.mul(Oo))}else{const e=this.normalNode?B(this.normalNode):zS;Dt.assign(e.mul(Oo))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?jc(this.envMap):Bn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new Jd(t)),e.material.aoMap&&n.push(new qd(Bn(e.material.aoMap)));let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=lT([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,o=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Jt.rgb;if(o&&o.hasLight!==!1){const l=this.setupLightingModel(e);c=$d(o,l,n,s)}else n!==null&&(c=B(s!==null?Dn(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(B(r||DS))),c}setupOutput(e,t){const n=e.renderer,s=e.toneMappingNode;if(this.toneMapped===!0&&s&&(t=Re(s.context({color:t.rgb}),t.a)),this.fog===!0){const r=e.fogNode;r&&(t=Re(r.mixAssign(t.rgb),t.a))}if(this.colorSpaced===!0){const r=n.currentColorSpace;r!==Hn&&r!==Ni&&(t=t.linearToColorSpace(r))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=kn.prototype.toJSON.call(this,e),s=bo(this);n.inputNodes={};for(const{property:a,childNode:o}of s)n.inputNodes[a]=o.toJSON(e).uuid;function r(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images),c=r(e.nodes);a.length>0&&(n.textures=a),o.length>0&&(n.images=o),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=xT(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Nn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(_c.has(i)){console.warn(`Redefinition of node material ${i}`);return}_c.set(i,e),e.type=i}function xT(i){const e=_c.get(i);if(e!==void 0)return new e}Nn("NodeMaterial",Xn);class Zc extends Le{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:a,elseNode:o}=this,c=t!=="void",l=c?tn(n).build(e):"";r.nodeProperty=l;const u=Li(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Li(a,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),o!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Li(o,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Zi=G(Zc);F("cond",Zi);te("CondNode",Zc);class of extends Le{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Cr(t);return this._currentCond=Zi(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Cr(t),s=Zi(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Cr(e),this}build(e,...t){const n=Fy();Fu(this);for(const s of this.nodes)s.build(e,"void");return Fu(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}G(of);te("StackNode",of);class af extends Le{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}te("StructTypeNode",af);class cf extends Le{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new af(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),r=this.members,a=s!==""?s+".":"";for(let o=0;o<r.length;o++){const c=r[o].build(e,t);e.addLineFlowCode(`${a}m${o} = ${c}`)}return s}}G(cf);te("OutputStructNode",cf);class lf extends Le{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const vT=G(lf);F("hash",vT);te("HashNode",lf);const xc=(i,e)=>ui(dt(4,i.mul(Ut(1,i))),e),yT=(i,e)=>i.lessThan(.5)?xc(i.mul(2),e).div(2):Ut(1,xc(dt(Ut(1,i),2),e).div(2)),MT=(i,e,t)=>ui(hr(ui(i,e),In(ui(i,e),ui(Ut(1,i),t))),1/e),ST=(i,e)=>Wi(Vu.mul(e.mul(i).sub(1))).div(Vu.mul(e.mul(i).sub(1)));F("parabola",xc);F("gain",yT);F("pcurve",MT);F("sinc",ST);const ai=ne(([i])=>i.fract().sub(.5).abs()),uf=ne(([i])=>B(ai(i.z.add(ai(i.y.mul(1)))),ai(i.z.add(ai(i.x.mul(1)))),ai(i.y.add(ai(i.x.mul(1)))))),TT=ne(([i,e,t])=>{const n=B(i).toVar(),s=b(1.4).toVar(),r=b(0).toVar(),a=B(n).toVar();return St({start:b(0),end:b(3),type:"float",condition:"<="},()=>{const o=B(uf(a.mul(2))).toVar();n.addAssign(o.add(t.mul(b(.1).mul(e)))),a.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=b(ai(n.z.add(ai(n.x.add(ai(n.y)))))).toVar();r.addAssign(c.div(s)),a.addAssign(.14)}),r});ai.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});uf.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});TT.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let $a;class hf extends Zc{constructor(e){$a=$a||Xc("discard"),super(e,$a)}}const ET=G(hf),AT=i=>ET(i).append();F("discard",AT);te("DiscardNode",hf);class df extends Le{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const a of this.functionNodes){const c=a.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>r&&(s=a,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const NT=G(df),qn=i=>(...e)=>NT(i,...e);te("FunctionOverloadingNode",df);class ff extends yt{constructor(){super("vec2")}setup(){const e=B(Vt.z,0,Vt.x.negate()).normalize(),t=Vt.cross(e);return We(e.dot(Dt),t.dot(Dt)).mul(.495).add(.5)}}oe(ff);te("MatcapUVNode",ff);class Mn extends As{constructor(e=Mn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=Ct.FRAME}update(e){const t=this.scope,n=this.scale;t===Mn.LOCAL?this.value+=e.deltaTime*n:t===Mn.DELTA?this.value=e.deltaTime*n:t===Mn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Mn.LOCAL="local";Mn.GLOBAL="global";Mn.DELTA="delta";Mn.FRAME="frame";const bT=(i,e=0)=>ye(new Mn(Mn.LOCAL,i,e));oe(Mn,Mn.FRAME).uint();te("TimerNode",Mn);class Wt extends Le{constructor(e=Wt.SINE,t=bT()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=ye(this.timeNode);let n=null;return e===Wt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Wt.SQUARE?n=t.fract().round():e===Wt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Wt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Wt.SINE="sine";Wt.SQUARE="square";Wt.TRIANGLE="triangle";Wt.SAWTOOTH="sawtooth";G(Wt,Wt.SINE);G(Wt,Wt.SQUARE);G(Wt,Wt.TRIANGLE);G(Wt,Wt.SAWTOOTH);te("OscNode",Wt);class pi extends yt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===pi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===pi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}pi.DIRECTION_TO_COLOR="directionToColor";pi.COLOR_TO_DIRECTION="colorToDirection";const pf=G(pi,pi.DIRECTION_TO_COLOR),wT=G(pi,pi.COLOR_TO_DIRECTION);F("directionToColor",pf);F("colorToDirection",wT);te("PackingNode",pi);class Kc extends Le{constructor(e,t,n,s=b(0),r=b(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:a}=this;let o=e.sub(t).div(n.sub(t));return a===!0&&(o=o.clamp()),o.mul(r.sub(s)).add(s)}}const RT=G(Kc,null,null,{doClamp:!1}),CT=G(Kc);F("remap",RT);F("remapClamp",CT);te("RemapNode",Kc);class mf extends yt{constructor(e,t,n=We(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const LT=G(mf);F("rotateUV",LT);te("RotateUVNode",mf);class gf extends yt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),a=t.sin();return od(r,a,a.negate(),r).mul(n)}else{const r=t,a=Lr(Re(1,0,0,0),Re(0,ps(r.x),Wi(r.x).negate(),0),Re(0,Wi(r.x),ps(r.x),0),Re(0,0,0,1)),o=Lr(Re(ps(r.y),0,Wi(r.y),0),Re(0,1,0,0),Re(Wi(r.y).negate(),0,ps(r.y),0),Re(0,0,0,1)),c=Lr(Re(ps(r.z),Wi(r.z).negate(),0,0),Re(Wi(r.z),ps(r.z),0,0),Re(0,0,1,0),Re(0,0,0,1));return a.mul(o).mul(c).mul(Re(n,1)).xyz}}}const PT=G(gf);F("rotate",PT);te("RotateNode",gf);class _f extends Le{constructor(e,t=mi(),n=b(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,a=e.mod(s.mul(r)).floor(),o=a.mod(s),c=r.sub(a.add(1).div(s).ceil()),l=n.reciprocal(),u=We(o,c);return t.add(u).mul(l)}}G(_f);te("SpriteSheetUVNode",_f);class xf extends fr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const vf=G(xf);F("storageElement",vf);te("StorageArrayElementNode",xf);class yf extends Le{constructor(e,t=null,n=null,s=b(1),r=Tn,a=Di){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=a}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:a}=this;let o=a.abs().normalize();o=o.div(o.dot(B(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,g=Bn(h,c).mul(o.x),_=Bn(d,l).mul(o.y),p=Bn(m,u).mul(o.z);return In(g,_,p)}}const IT=G(yf),DT=(...i)=>IT(...i);F("triplanarTexture",DT);te("TriplanarTexturesNode",yf);new ki;new U;new U;new U;new Nt;new U(0,0,-1);new lt;new U;new U;new lt;new Fe;new Ji;We(Or.x.oneMinus(),Or.y);class Xt extends Le{constructor(e=Xt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Xt.GEOMETRY?n=Io.cross(Do):t===Xt.LOCAL?n=Di.cross($c):t===Xt.VIEW?n=Qi.cross(Jo):t===Xt.WORLD&&(n=Id.cross(nT));const s=n.mul(Do.w).xyz;return Gn(Lt(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";oe(Xt,Xt.GEOMETRY);oe(Xt,Xt.LOCAL);const UT=oe(Xt,Xt.VIEW);oe(Xt,Xt.WORLD);const OT=Gn(Dt.cross(Bd).mul(Do.w));Gn(OT.transformDirection(ns));te("BitangentNode",Xt);const Mf=hi(Jo,UT,Qi);Vt.mul(Mf);class FT extends jo{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new lt(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}te("VertexColorNode",FT);const ea=1/6,Sf=i=>dt(ea,dt(i,dt(i,i.negate().add(3)).sub(3)).add(1)),vc=i=>dt(ea,dt(i,dt(i,dt(3,i).sub(6))).add(4)),Tf=i=>dt(ea,dt(i,dt(i,dt(-3,i).add(3)).add(3)).add(1)),yc=i=>dt(ea,ui(i,3)),Yu=i=>Sf(i).add(vc(i)),$u=i=>Tf(i).add(yc(i)),ju=i=>In(-1,vc(i).div(Sf(i).add(vc(i)))),Zu=i=>In(1,yc(i).div(Tf(i).add(yc(i)))),Ku=(i,e,t)=>{const n=i.uvNode,s=dt(n,e.zw).add(.5),r=kr(s),a=kc(s),o=Yu(a.x),c=$u(a.x),l=ju(a.x),u=Zu(a.x),h=ju(a.y),d=Zu(a.y),m=We(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),g=We(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),_=We(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),p=We(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),f=Yu(a.y).mul(In(o.mul(i.uv(m).level(t)),c.mul(i.uv(g).level(t)))),S=$u(a.y).mul(In(o.mul(i.uv(_).level(t)),c.mul(i.uv(p).level(t))));return f.add(S)},VT=(i,e)=>{const t=We(i.size(R(e))),n=We(i.size(R(e.add(1)))),s=hr(1,t),r=hr(1,n),a=Ku(i,Re(s,t),kr(e)),o=Ku(i,Re(r,n),Td(e));return kc(e).mix(a,o)};class Ef extends yt{constructor(e,t=b(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return VT(this.textureNode,this.blurNode)}}const zT=G(Ef);F("bicubic",zT);te("TextureBicubicNode",Ef);class Af extends Le{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}oe(Af);te("PointUVNode",Af);class ni extends Le{constructor(e=ni.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ni.BACKGROUND_BLURRINESS?s=fi("backgroundBlurriness","float",n):t===ni.BACKGROUND_INTENSITY?s=fi("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}ni.BACKGROUND_BLURRINESS="backgroundBlurriness";ni.BACKGROUND_INTENSITY="backgroundIntensity";oe(ni,ni.BACKGROUND_BLURRINESS);oe(ni,ni.BACKGROUND_INTENSITY);te("SceneNode",ni);class BT extends Zo{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null}getInputType(){return"storageBuffer"}element(e){return vf(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Ko(this.value),this._varying=Lt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}te("StorageBufferNode",BT);class Nf extends mr{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),a=n.build(e,"uvec2"),o=s.build(e,"vec4"),c=e.generateTextureStore(e,r,a,o);e.addLineFlowCode(c)}}G(Nf);te("TextureStoreNode",Nf);class GT extends Wr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}te("UserDataNode",GT);const HT=ne(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Md).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return B(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),kT=ne(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return B(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),WT=ne(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return B(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),XT=ne(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return B(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Qt extends yt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===Qt.BURN?r=HT(s):e===Qt.DODGE?r=kT(s):e===Qt.SCREEN?r=WT(s):e===Qt.OVERLAY&&(r=XT(s)),r}}Qt.BURN="burn";Qt.DODGE="dodge";Qt.SCREEN="screen";Qt.OVERLAY="overlay";const qT=G(Qt,Qt.BURN),YT=G(Qt,Qt.DODGE),$T=G(Qt,Qt.OVERLAY),jT=G(Qt,Qt.SCREEN);F("burn",qT);F("dodge",YT);F("overlay",$T);F("screen",jT);te("BlendModeNode",Qt);const ZT=ne(({textureNode:i,bumpScale:e})=>{let t=i;if(t.isTextureNode!==!0&&t.traverse(a=>{a.isTextureNode===!0&&(t=a)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=b(i),s=t.uvNode||mi(),r=a=>i.cache().context({getUV:()=>a,forceUVContext:!0});return We(b(r(s.add(s.dFdx()))).sub(n),b(r(s.add(s.dFdy()))).sub(n)).mul(e)}),KT=ne(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),a=t,o=r.cross(a),c=a.cross(s),l=s.dot(o).mul(Oo),u=l.sign().mul(n.x.mul(o).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class bf extends yt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=ZT({textureNode:this.textureNode,bumpScale:e});return KT({surf_pos:yn,surf_norm:Qi,dHdxy:t})}}const JT=G(bf);F("bumpMap",JT);te("BumpMapNode",bf);const QT=ne(({color:i,adjustment:e})=>e.mix(wf(i.rgb),i.rgb)),eE=ne(({color:i,adjustment:e})=>{const t=In(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Dn(i.rgb,n,s)}),tE=ne(({color:i,adjustment:e})=>{const t=B(.57735,.57735,.57735),n=e.cos();return B(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(pr(t,i.rgb).mul(n.oneMinus())))))});class En extends yt{constructor(e,t,n=b(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===En.SATURATION?r=QT(s):e===En.VIBRANCE?r=eE(s):e===En.HUE?r=tE(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}En.SATURATION="saturation";En.VIBRANCE="vibrance";En.HUE="hue";const nE=G(En,En.SATURATION),iE=G(En,En.VIBRANCE),sE=G(En,En.HUE),rE=B(.2125,.7154,.0721),wf=(i,e=rE)=>pr(i,e),Rf=(i,e)=>Dn(B(0),i,wf(i).sub(e).max(0));F("saturation",nE);F("vibrance",iE);F("hue",sE);F("threshold",Rf);te("ColorAdjustmentNode",En);const oE=ne(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),a=e.dFdy(),o=s.dFdx(),c=s.dFdy(),l=t,u=a.cross(l),h=l.cross(r),d=u.mul(o.x).add(h.mul(c.x)),m=u.mul(o.y).add(h.mul(c.y)),g=d.dot(d).max(m.dot(m)),_=Oo.mul(g.inverseSqrt());return In(d.mul(n.x,_),m.mul(n.y,_),l.mul(n.z)).normalize()});class Cf extends yt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=vs}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=B(s.xy.mul(n),s.z));let r=null;return t===xh?r=Pd.mul(s).normalize():t===vs&&(e.hasGeometryAttribute("tangent")===!0?r=Mf.mul(s).normalize():r=oE({eye_pos:yn,surf_norm:Qi,mapN:s,uv:mi()})),r}}const aE=G(Cf);F("normalMap",aE);te("NormalMapNode",Cf);class Lf extends yt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const cE=G(Lf);F("posterize",cE);te("PosterizeNode",Lf);const lE=ne(({color:i,exposure:e})=>i.mul(e).clamp()),uE=ne(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),hE=ne(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),dE=ne(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),fE=ne(({color:i,exposure:e})=>{const t=hi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=hi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=dE({color:i}),i=n.mul(i),i.clamp()}),pE=hi(B(1.6605,-.1246,-.0182),B(-.5876,1.1329,-.1006),B(-.0728,-.0083,1.1187)),mE=hi(B(.6274,.0691,.0164),B(.3293,.9195,.088),B(.0433,.0113,.8956)),gE=ne(([i])=>{const e=B(i).toVar(),t=B(e.mul(e)).toVar(),n=B(t.mul(t)).toVar();return b(15.5).mul(n.mul(t)).sub(dt(40.14,n.mul(e))).add(dt(31.96,n).sub(dt(6.868,t.mul(e))).add(dt(.4298,t).add(dt(.1191,e).sub(.00232))))}),_E=ne(({color:i,exposure:e})=>{const t=B(i).toVar(),n=hi(B(.856627153315983,.137318972929847,.11189821299995),B(.0951212405381588,.761241990602591,.0767994186031903),B(.0482516061458583,.101439036467562,.811302368396859)),s=hi(B(1.1271005818144368,-.1413297634984383,-.14132976349843826),B(-.11060664309660323,1.157823702216272,-.11060664309660294),B(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=b(-12.47393),a=b(4.026069);return t.mulAssign(e),t.assign(mE.mul(t)),t.assign(n.mul(t)),t.assign(si(t,1e-10)),t.assign(Sd(t)),t.assign(t.sub(r).div(a.sub(r))),t.assign(Lo(t,0,1)),t.assign(gE(t)),t.assign(s.mul(t)),t.assign(ui(si(B(0),t),B(2.2))),t.assign(pE.mul(t)),t.assign(Lo(t,0,1)),t}),xE={[rh]:lE,[oh]:uE,[ah]:hE,[ch]:fE,[lh]:_E};class vE extends yt{constructor(e=ei,t=b(1),n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ei)return t;const s={exposure:this.exposureNode,color:t},r=xE[n];let a=null;return r?a=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),a=t),a}}te("ToneMappingNode",vE);let ja=null;class Pf extends Xr{constructor(e=Or,t=null){ja===null&&(ja=new Wh),super(e,t,ja)}}const yE=G(Pf);F("viewportSharedTexture",yE);te("ViewportSharedTextureNode",Pf);class Mc extends mr{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class qr extends yt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new Br;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new Ji(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=Ct.FRAME,this._textureNode=ye(new Mc(this,r.texture)),this._depthTextureNode=ye(new Mc(this,s)),this._depthNode=null,this._cameraNear=Rt(0),this._cameraFar=Rt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=gc(tf(this._depthTextureNode,e,t),e,t)}return this._depthNode}setup(){return this.scope===qr.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Fe);this.setSize(r.width,r.height);const a=t.toneMapping,o=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=ei,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=a,t.toneMappingNode=o,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}qr.COLOR="color";qr.DEPTH="depth";const Jc=(i,e)=>ye(new Mc(i,e));te("PassNode",qr);const ME=new Cc(-1,1,1,-1,0,1);class SE extends ts{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ci(t,2))}}const TE=new SE;class ta{constructor(e=null){this._mesh=new un(TE,e)}dispose(){this._mesh.geometry.dispose()}async renderAsync(e){await e.renderAsync(this._mesh,ME)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}get render(){return this.renderAsync}}const Ju=new ta,Qu=new ta;class EE extends yt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=We(1),this._invSize=Rt(new Fe),this._passDirection=Rt(new Fe),this._horizontalRT=new Ji,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Ji,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Jc(this,this._verticalRT.texture),this.updateBeforeType=Ct.RENDER,this.resolution=new Fe(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),a=n.value;Ju.material=this._material,Qu.material=this._material,this.setSize(s.image.width,s.image.height);const o=s.type;this._horizontalRT.texture.type=o,this._verticalRT.texture.type=o,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Ju.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Qu.render(t),t.setRenderTarget(r),n.value=a}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Re();const n=t.uvNode||mi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=ne(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=We(this.directionNode).mul(this._passDirection),d=b(l[0]).toVar(),m=Re(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=b(g),p=b(l[g]),f=We(h.mul(u.mul(_))).toVar(),S=Re(s(n.add(f))),y=Re(s(n.sub(f)));m.addAssign(S.add(y).mul(p)),d.addAssign(dt(2,p))}return m.div(d)}),a=this._material||(this._material=e.createNodeMaterial());a.fragmentNode=r();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const AE=(i,e)=>ye(new EE(ye(i),e));F("gaussianBlur",AE);const eh=new ta;class NE extends yt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Bn(),this.damp=Rt(t),this._compRT=new Ji,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Ji,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Jc(this,this._compRT.texture),this.updateBeforeType=Ct.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=s.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const a=t.getRenderTarget(),o=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),eh.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(a),n.value=o}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Re();const s=t.uvNode||mi();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),a=ne(([u,h])=>{const d=b(h).toVar(),m=Re(u).toVar();return si(Wc(m.sub(d)),0)}),o=ne(()=>{const u=Re(n),h=Re(r(s));return u.mulAssign(this.damp.mul(a(u,.1))),si(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=o(),eh.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const bE=(i,e)=>ye(new NE(ye(i),e));F("afterImage",bE);const th=new ta;class wE extends yt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=B(.1,0,1),this.samples=s,this.resolution=new Fe(1,1),this._renderTarget=new Ji,this._renderTarget.texture.name="anamorphic",this._invSize=Rt(new Fe),this._textureNode=Jc(this,this._renderTarget.texture),this.updateBeforeType=Ct.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),a=n.value;th.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),th.render(t),t.setRenderTarget(r),n.value=a}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Re();const n=t.uvNode||mi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=ne(()=>{const c=this.samples,l=Math.floor(c/2),u=B(0).toVar();return St({start:-l,end:l},({i:h})=>{const d=b(h).abs().div(l).oneMinus(),m=We(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(m),_=Rf(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),a=this._material||(this._material=e.createNodeMaterial());a.fragmentNode=r();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const RE=(i,e=.9,t=3,n=32)=>ye(new wE(ye(i),ye(e),ye(t),n));F("anamorphic",RE);class If extends yt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let o=0;o<r.length;o++){const c=s[o],l=r[o];t.push(l.build(e,c.type))}else for(const o of s){const c=r[o.name];if(c!==void 0)t.push(c.build(e,o.type));else throw new Error(`FunctionCallNode: Input '${o.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const CE=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Qs(e):$o(e[0]),ye(new If(ye(i),e)));F("call",CE);te("FunctionCallNode",If);class Df extends Le{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Ui,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:b()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Jh(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Qh(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const vo=G(Df);F("scriptableValue",vo);te("ScriptableValueNode",Df);class Uf extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class LE{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Za=new Uf;class Of extends Le{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Uf,this._output=vo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=vo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=vo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new LE(this),s=Za.get("THREE"),r=Za.get("TSL"),a=this.getMethod(this.codeNode),o=[n,this._local,Za,e,t,s,r];this._object=a(...o);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:b()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",a=s+this.codeNode.code+r;return this._method=new Function(...e,a),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const PE=G(Of);F("scriptable",PE);te("ScriptableNode",Of);class na extends Le{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}mixAssign(e){return Dn(e,this.colorNode,this)}setup(){return this.factorNode}}const IE=G(na);F("fog",IE);te("FogNode",na);class Ff extends na{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(){return Ii(this.nearNode,this.farNode,yn.z.negate())}}const DE=G(Ff);F("rangeFog",DE);te("FogRangeNode",Ff);class Vf extends na{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(){const e=yn.z.negate(),t=this.densityNode;return t.mul(t,e,e).negate().exp().oneMinus()}}const UE=G(Vf);F("densityFog",UE);te("FogExp2Node",Vf);let hs=null,ds=null;class zf extends Le{constructor(e=b(),t=b()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Yi(this.minNode.value)),n=e.getTypeLength(Yi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,r=this.maxNode.value,a=e.getTypeLength(Yi(s)),o=e.getTypeLength(Yi(r));hs=hs||new lt,ds=ds||new lt,hs.setScalar(0),ds.setScalar(0),a===1?hs.setScalar(s):s.isColor?hs.set(s.r,s.g,s.b):hs.set(s.x,s.y,s.z||0,s.w||0),o===1?ds.setScalar(r):r.isColor?ds.set(r.r,r.g,r.b):ds.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const m=d%c,g=hs.getComponent(m),_=ds.getComponent(m);u[d]=Sh.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Yc(u,"vec4",t.count).element(hM).convert(h)}else n=b(0);return n}}G(zf);te("RangeNode",zf);class Bf extends Le{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=Ct.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const OE=(i,e,t)=>ye(new Bf(ye(i),e,t));F("compute",OE);te("ComputeNode",Bf);class Es extends Le{constructor(e=Es.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Es.TARGET_DIRECTION&&(n=ns.transformDirection(pc(t).sub(pc(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Es.TARGET_DIRECTION="targetDirection";const Gf=G(Es,Es.TARGET_DIRECTION);te("LightNode",Es);const Hf=ne(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class kf extends bs{constructor(e=null){super(e),this.cutoffDistanceNode=Rt(0),this.decayExponentNode=Rt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,a=e.context.lightingModel,o=Ld(r).sub(yn),c=o.normalize(),l=o.length(),u=Hf({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;a.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}te("PointLightNode",kf);gr(jh,kf);class Wf extends bs{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=Gf(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r},e.stack,e)}}te("DirectionalLightNode",Wf);gr(dy,Wf);class Qc extends bs{constructor(e=null){super(e),this.coneCosNode=Rt(0),this.penumbraCosNode=Rt(0),this.cutoffDistanceNode=Rt(0),this.decayExponentNode=Rt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Ii(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:a}=this,o=Ld(a).sub(yn),c=o.normalize(),l=c.dot(Gf(a)),u=this.getSpotAttenuation(l),h=o.length(),d=Hf({lightDistance:h,cutoffDistance:s,decayExponent:r}),m=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:m,reflectedLight:g},e.stack,e)}}te("SpotLightNode",Qc);gr($h,Qc);class FE extends $h{constructor(e,t,n,s,r,a){super(e,t,n,s,r,a),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const VE=FE;class Xf extends Qc{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Bn(t,We(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}te("IESSpotLightNode",Xf);gr(VE,Xf);class qf extends bs{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}te("AmbientLightNode",qf);gr(fy,qf);class Yf extends bs{constructor(e=null){super(e),this.lightPositionNode=pc(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Rt(new He)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,a=Qi.dot(s).mul(.5).add(.5),o=Dn(n,t,a);e.context.irradiance.addAssign(o)}}te("HemisphereLightNode",Yf);gr(Yh,Yf);const zE=ne(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class $f extends yt{constructor(e=mi()){super("float"),this.uvNode=e}setup(){return zE({uv:this.uvNode})}}const BE=G($f);F("checker",BE);te("CheckerNode",$f);const GE=new kh;class HE extends Xn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(GE),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=ne(()=>{Lt(We(),"vUv").assign(mi());const n=pn("instancePosition"),s=tn("vec4","mvPos");s.assign(Ts.mul(Re(n,1)));const r=tr.z.div(tr.w),a=Ei.mul(s),o=tn("vec2","offset");return o.assign(gn.xy),o.assign(o.mul(jS)),o.assign(o.div(tr.z)),o.y.assign(o.y.mul(r)),o.assign(o.mul(a.w)),a.assign(a.add(Re(o,0,0))),a})(),this.fragmentNode=ne(()=>{const n=Lt(We(),"vUv"),s=tn("float","alpha");s.assign(1);const r=n.x,a=n.y,o=r.mul(r).add(a.mul(a));if(e){const l=tn("float","dlen");l.assign(o.fwidth()),s.assign(Ii(l.oneMinus(),l.add(1),o).oneMinus())}else o.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=pn("instanceColor").mul(Ur):c=Ur,Re(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Nn("InstancedPointsNodeMaterial",HE);const kE=new Hh;class WE extends Xn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(kE),this.setValues(e)}}Nn("LineBasicNodeMaterial",WE);const XE=new qh;class qE extends Xn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(XE),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?b(this.dashScaleNode):mc,n=this.dashSizeNode?b(this.dashSizeNode):Ud,s=this.dashSizeNode?b(this.dashGapNode):Od;er.assign(n),Co.assign(s);const r=Lt(pn("lineDistance").mul(t));(e?r.add(e):r).mod(er.add(Co)).greaterThan(er).discard()}}Nn("LineDashedNodeMaterial",qE);const YE=new qh;class $E extends Xn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(YE),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=ne(({start:o,end:c})=>{const l=Ei.element(2).element(2),d=Ei.element(3).element(2).mul(-.5).div(l).sub(o.z).div(c.z.sub(o.z));return Re(Dn(o.xyz,c.xyz,d),c.w)});this.vertexNode=ne(()=>{Hi("vec2","vUv").assign(mi());const o=pn("instanceStart"),c=pn("instanceEnd"),l=tn("vec4","start"),u=tn("vec4","end");l.assign(Ts.mul(Re(o,1))),u.assign(Ts.mul(Re(c,1))),s&&(Hi("vec3","worldStart").assign(l.xyz),Hi("vec3","worldEnd").assign(u.xyz));const h=tr.z.div(tr.w),d=Ei.element(2).element(3).equal(-1);vt(d,()=>{vt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const m=Ei.mul(l),g=Ei.mul(u),_=m.xyz.div(m.w),p=g.xyz.div(g.w),f=p.xy.sub(_.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const S=Ir(Re());if(s){const y=u.xyz.sub(l.xyz).normalize(),E=Dn(l.xyz,u.xyz,.5).normalize(),D=y.cross(E).normalize(),w=y.cross(D),A=Hi("vec4","worldPos");A.assign(gn.y.lessThan(.5).cond(l,u));const V=ka.mul(.5);A.addAssign(Re(gn.x.lessThan(0).cond(D.mul(V),D.mul(V).negate()),0)),n||(A.addAssign(Re(gn.y.lessThan(.5).cond(y.mul(V).negate(),y.mul(V)),0)),A.addAssign(Re(w.mul(V),0)),vt(gn.y.greaterThan(1).or(gn.y.lessThan(0)),()=>{A.subAssign(Re(w.mul(2).mul(V),0))})),S.assign(Ei.mul(A));const K=Ir(B());K.assign(gn.y.lessThan(.5).cond(_,p)),S.z.assign(K.z.mul(S.w))}else{const y=tn("vec2","offset");y.assign(We(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(gn.x.lessThan(0).cond(y.negate(),y)),vt(gn.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(gn.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(ka)),y.assign(y.div(tr.w)),S.assign(gn.y.lessThan(.5).cond(m,g)),y.assign(y.mul(S.w)),S.assign(S.add(Re(y,0,0)))}return S})();const a=ne(({p1:o,p2:c,p3:l,p4:u})=>{const h=o.sub(l),d=u.sub(l),m=c.sub(o),g=h.dot(d),_=d.dot(m),p=h.dot(m),f=d.dot(d),y=m.dot(m).mul(f).sub(_.mul(_)),D=g.mul(_).sub(p.mul(f)).div(y).clamp(),w=g.add(_.mul(D)).div(f).clamp();return We(D,w)});this.fragmentNode=ne(()=>{const o=Hi("vec2","vUv");if(n){const u=this.offsetNode?b(this.offsetNodeNode):Gu,h=this.dashScaleNode?b(this.dashScaleNode):mc,d=this.dashSizeNode?b(this.dashSizeNode):Ud,m=this.dashSizeNode?b(this.dashGapNode):Od;er.assign(d),Co.assign(m);const g=pn("instanceDistanceStart"),_=pn("instanceDistanceEnd"),p=gn.y.lessThan(.5).cond(h.mul(g),mc.mul(_)),f=Lt(p.add(Gu)),S=u?f.add(u):f;o.y.lessThan(-1).or(o.y.greaterThan(1)).discard(),S.mod(er.add(Co)).greaterThan(er).discard()}const c=tn("float","alpha");if(c.assign(1),s){const u=Hi("vec3","worldStart"),h=Hi("vec3","worldEnd"),d=Hi("vec4","worldPos").xyz.normalize().mul(1e5),m=h.sub(u),g=a({p1:u,p2:h,p3:B(0,0,0),p4:d}),_=u.add(m.mul(g.x)),p=d.mul(g.y),y=_.sub(p).length().div(ka);if(!n)if(e){const E=y.fwidth();c.assign(Ii(E.negate().add(.5),E.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=o.x,h=o.y.greaterThan(0).cond(o.y.sub(1),o.y.add(1)),d=u.mul(u).add(h.mul(h)),m=tn("float","dlen");m.assign(d.fwidth()),vt(o.y.abs().greaterThan(1),()=>{c.assign(Ii(m.oneMinus(),m.add(1),d).oneMinus())})}else vt(o.y.abs().greaterThan(1),()=>{const u=o.x,h=o.y.greaterThan(0).cond(o.y.sub(1),o.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=pn("instanceColorStart"),h=pn("instanceColorEnd");l=gn.y.lessThan(.5).cond(u,h).mul(Ur)}else l=Ur;return Re(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Nn("Line2NodeMaterial",$E);const jE=new cy;class ZE extends Xn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(jE),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?b(this.opacityNode):Dd;Jt.assign(Re(pf(Dt),e))}}Nn("MeshNormalNodeMaterial",ZE);const KE=new wc;class JE extends Xn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(KE),this.setValues(e)}}Nn("MeshBasicNodeMaterial",JE);const Fr=ne(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),Fo=ne(i=>i.diffuseColor.mul(1/Math.PI)),QE=()=>b(.25),eA=ne(({dotNH:i})=>dc.mul(.5/Math.PI).add(1).mul(i.pow(dc))),tA=ne(({lightDirection:i})=>{const e=i.add(Vt).normalize(),t=Dt.dot(e).clamp(),n=Vt.dot(e).clamp(),s=Fr({f0:Ti,f90:1,dotVH:n}),r=QE(),a=eA({dotNH:t});return s.mul(r).mul(a)});class jf extends dd{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Dt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(Fo({diffuseColor:Jt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(tA({lightDirection:e})).mul(OS))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Fo({diffuseColor:Jt})))}}const nA=new cc;class iA extends Xn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(nA),this.setValues(e)}setupLightingModel(){return new jf(!1)}}Nn("MeshLambertNodeMaterial",iA);const sA=new ay;class rA extends Xn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(sA),this.setValues(e)}setupLightingModel(){return new jf}setupVariants(){const e=(this.shininessNode?b(this.shininessNode):IS).max(1e-4);dc.assign(e);const t=this.specularNode||US;Ti.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Nn("MeshPhongNodeMaterial",rA);const oA=ne(()=>{const i=Io.dFdx().abs().max(Io.dFdy().abs());return i.x.max(i.y).max(i.z)}),aA=ne(i=>{const{roughness:e}=i,t=oA();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),cA=ne(i=>{const{alpha:e,dotNL:t,dotNV:n}=i,s=e.pow2(),r=t.mul(s.add(s.oneMinus().mul(n.pow2())).sqrt()),a=n.mul(s.add(s.oneMinus().mul(t.pow2())).sqrt());return hr(.5,r.add(a).max(Md))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),lA=ne(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),nh=ne(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,iridescenceFresnel:r}=i,a=i.normalView||Dt,o=s.pow2(),c=e.add(Vt).normalize(),l=a.dot(e).clamp(),u=a.dot(Vt).clamp(),h=a.dot(c).clamp(),d=Vt.dot(c).clamp();let m=Fr({f0:t,f90:n,dotVH:d});r&&(m=Bc.mix(m,r));const g=cA({alpha:o,dotNL:l,dotNV:u}),_=lA({alpha:o,dotNH:h});return m.mul(g).mul(_)}),Zf=ne(({roughness:i,dotNV:e})=>{const t=Re(-1,-.0275,-.572,.022),n=Re(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return We(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),uA=ne(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=Zf({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),hA=ne(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(B(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),dA=ne(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=b(1).div(t),r=e.pow2().oneMinus().max(.0078125);return b(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),fA=ne(({dotNV:i,dotNL:e})=>b(1).div(b(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),pA=ne(({lightDirection:i})=>{const e=i.add(Vt).normalize(),t=Dt.dot(i).clamp(),n=Dt.dot(Vt).clamp(),s=Dt.dot(e).clamp(),r=dA({roughness:zc,dotNH:s}),a=fA({dotNV:n,dotNL:t});return js.mul(r).mul(a)}),mA=hi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),gA=i=>{const e=i.sqrt();return B(1).add(e).div(B(1).sub(e))},ih=(i,e)=>i.sub(e).div(i.add(e)).pow2(),_A=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=B(54856e-17,44201e-17,52481e-17),s=B(1681e3,1795300,2208400),r=B(43278e5,93046e5,66121e5),a=b(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let o=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return o=B(o.x.add(a),o.y,o.z).div(10685e-11),mA.mul(o)},xA=ne(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Dn(i,e,Ii(0,.03,n)),a=i.div(r).pow2().mul(b(1).sub(t.pow2())),c=b(1).sub(a).sqrt(),l=ih(r,i),u=Fr({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(i).cond(Math.PI,0),m=b(Math.PI).sub(d),g=gA(s.clamp(0,.9999)),_=ih(g,r.vec3()),p=Fr({f0:_,f90:1,dotVH:c}),f=B(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),S=r.mul(n,c,2),y=B(m).add(f),E=u.mul(p).clamp(1e-5,.9999),D=E.sqrt(),w=h.pow2().mul(p).div(B(1).sub(E));let V=u.add(w),K=w.sub(h);for(let v=1;v<=2;++v){K=K.mul(D);const N=_A(b(v).mul(S),b(v).mul(y)).mul(2);V=V.add(K.mul(N))}return V.max(B(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),vA=ne(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Zi(t.lessThan(.25),b(-339.2).mul(s).add(b(161.4).mul(t)).sub(25.9),b(-8.48).mul(s).add(b(14.3).mul(t)).sub(9.95)),a=Zi(t.lessThan(.25),b(44).mul(s).sub(b(23.7).mul(t)).add(3.26),b(1.97).mul(s).sub(b(3.27).mul(t)).add(.72));return Zi(t.lessThan(.25),0,b(.1).mul(t).sub(.025)).add(r.mul(n).add(a).exp()).mul(1/Math.PI).saturate()}),Ka=B(.04),Ja=B(1);class el extends dd{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=B().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=B().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=B().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=B().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=B().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=Dt.dot(Vt).clamp();this.iridescenceFresnel=xA({outsideIOR:b(1),eta2:pd,cosTheta1:e,thinFilmThickness:md,baseF0:Ti}),this.iridescenceF0=hA({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=b(1)){const s=Dt.dot(Vt).clamp(),r=Zf({roughness:Pr,dotNV:s}),o=(this.iridescenceF0?Bc.mix(Ti,this.iridescenceF0):Ti).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ti.add(Ti.oneMinus().mul(.047619)),h=o.mul(u).div(l.mul(u).oneMinus());e.addAssign(o),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Dt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(pA({lightDirection:e}))),this.clearcoat===!0){const o=Zs.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(o.mul(nh({lightDirection:e,f0:Ka,f90:Ja,roughness:Ro,normalView:Zs})))}n.directDiffuse.addAssign(r.mul(Fo({diffuseColor:Jt.rgb}))),n.directSpecular.addAssign(r.mul(nh({lightDirection:e,f0:Ti,f90:1,roughness:Pr,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(Fo({diffuseColor:Jt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(js,vA({normal:Dt,viewDir:Vt,roughness:zc}))),this.clearcoat===!0){const l=Zs.dot(Vt).clamp(),u=uA({dotNV:l,specularColor:Ka,specularF90:Ja,roughness:Ro});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=B().temp("singleScattering"),r=B().temp("multiScattering"),a=t.mul(1/Math.PI);this.computeMultiscattering(s,r);const o=s.add(r),c=Jt.mul(o.r.max(o.g).max(o.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(a)),n.indirectDiffuse.addAssign(c.mul(a))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Dt.dot(Vt).clamp().add(e),r=Pr.mul(-16).oneMinus().negate().exp2(),a=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(a)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Zs.dot(Vt).clamp(),s=Fr({dotVH:n,f0:Ka,f90:Ja}),r=t.mul(hc.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(hc));t.assign(r)}if(this.sheen===!0){const n=js.r.max(js.g).max(js.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const yA=new Xh;class Kf extends Xn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(yA),this.setValues(e)}setupLightingModel(){return new el}setupVariants(){const e=this.metalnessNode?b(this.metalnessNode):VS;dM.assign(e);let t=this.roughnessNode?b(this.roughnessNode):FS;t=aA({roughness:t}),Pr.assign(t);const n=Dn(B(.04),Jt.rgb,e);Ti.assign(n),Jt.assign(Re(Jt.rgb.mul(e.oneMinus()),Jt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Nn("MeshStandardNodeMaterial",Kf);const MA=new oy;class Jf extends Kf{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(MA),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new el(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?b(this.clearcoatNode):BS,n=this.clearcoatRoughnessNode?b(this.clearcoatRoughnessNode):GS;hc.assign(t),Ro.assign(n)}if(this.useSheen){const t=this.sheenNode?B(this.sheenNode):WS,n=this.sheenRoughnessNode?b(this.sheenRoughnessNode):XS;js.assign(t),zc.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?b(this.iridescenceNode):qS,n=this.iridescenceIORNode?b(this.iridescenceIORNode):YS,s=this.iridescenceThicknessNode?b(this.iridescenceThicknessNode):$S;Bc.assign(t),pd.assign(n),md.assign(s)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?B(this.clearcoatNormalNode):HS;Zs.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}Nn("MeshPhysicalNodeMaterial",Jf);class SA extends el{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const a=r.material,{thicknessColorNode:o,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=a,m=e.add(Dt.mul(c)).normalize(),g=b(Vt.dot(m.negate()).saturate().pow(h).mul(d)),_=B(g.add(l).mul(o));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class TA extends Jf{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=b(.1),this.thicknessAmbientNode=b(0),this.thicknessAttenuationNode=b(.1),this.thicknessPowerNode=b(2),this.thicknessScaleNode=b(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new SA(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Nn("MeshSSSNodeMaterial",TA);const EA=new kh;class AA extends Xn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(EA),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Nn("PointsNodeMaterial",AA);const NA=new ry;class bA extends Xn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(NA),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,a=Tn;let o=Ts.mul(B(n||0)),c=We(Po[0].xyz.length(),Po[1].xyz.length());r!==null&&(c=c.mul(r));let l=a.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(Rt(e.center).sub(.5))),l=l.mul(c);const u=b(s||kS),h=l.rotate(u);o=Re(o.xy.add(h),o.zw);const d=Ei.mul(o);return t.vertex=a,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Nn("SpriteNodeMaterial",bA);const nr=ne(([i,e,t])=>{const n=b(t).toVar(),s=b(e).toVar(),r=Ss(i).toVar();return Zi(r,s,n)}),Vr=ne(([i,e])=>{const t=Ss(e).toVar(),n=b(i).toVar();return Zi(t,n.negate(),n)}),Pt=ne(([i])=>{const e=b(i).toVar();return R(kr(e))}),Tt=ne(([i,e])=>{const t=b(i).toVar();return e.assign(Pt(t)),t.sub(b(e))}),Qf=ne(([i,e,t,n,s,r])=>{const a=b(r).toVar(),o=b(s).toVar(),c=b(n).toVar(),l=b(t).toVar(),u=b(e).toVar(),h=b(i).toVar(),d=b(Ut(1,o)).toVar();return Ut(1,a).mul(h.mul(d).add(u.mul(o))).add(a.mul(l.mul(d).add(c.mul(o))))}),ep=ne(([i,e,t,n,s,r])=>{const a=b(r).toVar(),o=b(s).toVar(),c=B(n).toVar(),l=B(t).toVar(),u=B(e).toVar(),h=B(i).toVar(),d=b(Ut(1,o)).toVar();return Ut(1,a).mul(h.mul(d).add(u.mul(o))).add(a.mul(l.mul(d).add(c.mul(o))))}),tp=qn([Qf,ep]),np=ne(([i,e,t,n,s,r,a,o,c,l,u])=>{const h=b(u).toVar(),d=b(l).toVar(),m=b(c).toVar(),g=b(o).toVar(),_=b(a).toVar(),p=b(r).toVar(),f=b(s).toVar(),S=b(n).toVar(),y=b(t).toVar(),E=b(e).toVar(),D=b(i).toVar(),w=b(Ut(1,m)).toVar(),A=b(Ut(1,d)).toVar();return b(Ut(1,h)).toVar().mul(A.mul(D.mul(w).add(E.mul(m))).add(d.mul(y.mul(w).add(S.mul(m))))).add(h.mul(A.mul(f.mul(w).add(p.mul(m))).add(d.mul(_.mul(w).add(g.mul(m))))))}),ip=ne(([i,e,t,n,s,r,a,o,c,l,u])=>{const h=b(u).toVar(),d=b(l).toVar(),m=b(c).toVar(),g=B(o).toVar(),_=B(a).toVar(),p=B(r).toVar(),f=B(s).toVar(),S=B(n).toVar(),y=B(t).toVar(),E=B(e).toVar(),D=B(i).toVar(),w=b(Ut(1,m)).toVar(),A=b(Ut(1,d)).toVar();return b(Ut(1,h)).toVar().mul(A.mul(D.mul(w).add(E.mul(m))).add(d.mul(y.mul(w).add(S.mul(m))))).add(h.mul(A.mul(f.mul(w).add(p.mul(m))).add(d.mul(_.mul(w).add(g.mul(m))))))}),sp=qn([np,ip]),rp=ne(([i,e,t])=>{const n=b(t).toVar(),s=b(e).toVar(),r=ge(i).toVar(),a=ge(r.bitAnd(ge(7))).toVar(),o=b(nr(a.lessThan(ge(4)),s,n)).toVar(),c=b(dt(2,nr(a.lessThan(ge(4)),n,s))).toVar();return Vr(o,Ss(a.bitAnd(ge(1)))).add(Vr(c,Ss(a.bitAnd(ge(2)))))}),op=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=b(e).toVar(),o=ge(i).toVar(),c=ge(o.bitAnd(ge(15))).toVar(),l=b(nr(c.lessThan(ge(8)),a,r)).toVar(),u=b(nr(c.lessThan(ge(4)),r,nr(c.equal(ge(12)).or(c.equal(ge(14))),a,s))).toVar();return Vr(l,Ss(c.bitAnd(ge(1)))).add(Vr(u,Ss(c.bitAnd(ge(2)))))}),Kt=qn([rp,op]),ap=ne(([i,e,t])=>{const n=b(t).toVar(),s=b(e).toVar(),r=Hr(i).toVar();return B(Kt(r.x,s,n),Kt(r.y,s,n),Kt(r.z,s,n))}),cp=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=b(e).toVar(),o=Hr(i).toVar();return B(Kt(o.x,a,r,s),Kt(o.y,a,r,s),Kt(o.z,a,r,s))}),Vn=qn([ap,cp]),lp=ne(([i])=>{const e=b(i).toVar();return dt(.6616,e)}),up=ne(([i])=>{const e=b(i).toVar();return dt(.982,e)}),hp=ne(([i])=>{const e=B(i).toVar();return dt(.6616,e)}),dp=qn([lp,hp]),fp=ne(([i])=>{const e=B(i).toVar();return dt(.982,e)}),pp=qn([up,fp]),xn=ne(([i,e])=>{const t=R(e).toVar(),n=ge(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(R(32).sub(t)))}),mp=ne(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(xn(t,R(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(xn(i,R(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(xn(e,R(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(xn(t,R(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(xn(i,R(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(xn(e,R(4))),e.addAssign(i)}),_r=ne(([i,e,t])=>{const n=ge(t).toVar(),s=ge(e).toVar(),r=ge(i).toVar();return n.bitXorAssign(s),n.subAssign(xn(s,R(14))),r.bitXorAssign(n),r.subAssign(xn(n,R(11))),s.bitXorAssign(r),s.subAssign(xn(r,R(25))),n.bitXorAssign(s),n.subAssign(xn(s,R(16))),r.bitXorAssign(n),r.subAssign(xn(n,R(4))),s.bitXorAssign(r),s.subAssign(xn(r,R(14))),n.bitXorAssign(s),n.subAssign(xn(s,R(24))),n}),sn=ne(([i])=>{const e=ge(i).toVar();return b(e).div(b(ge(R(4294967295))))}),ii=ne(([i])=>{const e=b(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),gp=ne(([i])=>{const e=R(i).toVar(),t=ge(ge(1)).toVar(),n=ge(ge(R(3735928559)).add(t.shiftLeft(ge(2)).add(ge(13)))).toVar();return _r(n.add(ge(e)),n,n)}),_p=ne(([i,e])=>{const t=R(e).toVar(),n=R(i).toVar(),s=ge(ge(2)).toVar(),r=ge().toVar(),a=ge().toVar(),o=ge().toVar();return r.assign(a.assign(o.assign(ge(R(3735928559)).add(s.shiftLeft(ge(2)).add(ge(13)))))),r.addAssign(ge(n)),a.addAssign(ge(t)),_r(r,a,o)}),xp=ne(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=R(i).toVar(),a=ge(ge(3)).toVar(),o=ge().toVar(),c=ge().toVar(),l=ge().toVar();return o.assign(c.assign(l.assign(ge(R(3735928559)).add(a.shiftLeft(ge(2)).add(ge(13)))))),o.addAssign(ge(r)),c.addAssign(ge(s)),l.addAssign(ge(n)),_r(o,c,l)}),vp=ne(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),a=R(e).toVar(),o=R(i).toVar(),c=ge(ge(4)).toVar(),l=ge().toVar(),u=ge().toVar(),h=ge().toVar();return l.assign(u.assign(h.assign(ge(R(3735928559)).add(c.shiftLeft(ge(2)).add(ge(13)))))),l.addAssign(ge(o)),u.addAssign(ge(a)),h.addAssign(ge(r)),mp(l,u,h),l.addAssign(ge(s)),_r(l,u,h)}),yp=ne(([i,e,t,n,s])=>{const r=R(s).toVar(),a=R(n).toVar(),o=R(t).toVar(),c=R(e).toVar(),l=R(i).toVar(),u=ge(ge(5)).toVar(),h=ge().toVar(),d=ge().toVar(),m=ge().toVar();return h.assign(d.assign(m.assign(ge(R(3735928559)).add(u.shiftLeft(ge(2)).add(ge(13)))))),h.addAssign(ge(l)),d.addAssign(ge(c)),m.addAssign(ge(o)),mp(h,d,m),h.addAssign(ge(a)),d.addAssign(ge(r)),_r(h,d,m)}),ut=qn([gp,_p,xp,vp,yp]),Mp=ne(([i,e])=>{const t=R(e).toVar(),n=R(i).toVar(),s=ge(ut(n,t)).toVar(),r=Hr().toVar();return r.x.assign(s.bitAnd(R(255))),r.y.assign(s.shiftRight(R(8)).bitAnd(R(255))),r.z.assign(s.shiftRight(R(16)).bitAnd(R(255))),r}),Sp=ne(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=R(i).toVar(),a=ge(ut(r,s,n)).toVar(),o=Hr().toVar();return o.x.assign(a.bitAnd(R(255))),o.y.assign(a.shiftRight(R(8)).bitAnd(R(255))),o.z.assign(a.shiftRight(R(16)).bitAnd(R(255))),o}),zn=qn([Mp,Sp]),Tp=ne(([i])=>{const e=We(i).toVar(),t=R().toVar(),n=R().toVar(),s=b(Tt(e.x,t)).toVar(),r=b(Tt(e.y,n)).toVar(),a=b(ii(s)).toVar(),o=b(ii(r)).toVar(),c=b(tp(Kt(ut(t,n),s,r),Kt(ut(t.add(R(1)),n),s.sub(1),r),Kt(ut(t,n.add(R(1))),s,r.sub(1)),Kt(ut(t.add(R(1)),n.add(R(1))),s.sub(1),r.sub(1)),a,o)).toVar();return dp(c)}),Ep=ne(([i])=>{const e=B(i).toVar(),t=R().toVar(),n=R().toVar(),s=R().toVar(),r=b(Tt(e.x,t)).toVar(),a=b(Tt(e.y,n)).toVar(),o=b(Tt(e.z,s)).toVar(),c=b(ii(r)).toVar(),l=b(ii(a)).toVar(),u=b(ii(o)).toVar(),h=b(sp(Kt(ut(t,n,s),r,a,o),Kt(ut(t.add(R(1)),n,s),r.sub(1),a,o),Kt(ut(t,n.add(R(1)),s),r,a.sub(1),o),Kt(ut(t.add(R(1)),n.add(R(1)),s),r.sub(1),a.sub(1),o),Kt(ut(t,n,s.add(R(1))),r,a,o.sub(1)),Kt(ut(t.add(R(1)),n,s.add(R(1))),r.sub(1),a,o.sub(1)),Kt(ut(t,n.add(R(1)),s.add(R(1))),r,a.sub(1),o.sub(1)),Kt(ut(t.add(R(1)),n.add(R(1)),s.add(R(1))),r.sub(1),a.sub(1),o.sub(1)),c,l,u)).toVar();return pp(h)}),wA=qn([Tp,Ep]),Ap=ne(([i])=>{const e=We(i).toVar(),t=R().toVar(),n=R().toVar(),s=b(Tt(e.x,t)).toVar(),r=b(Tt(e.y,n)).toVar(),a=b(ii(s)).toVar(),o=b(ii(r)).toVar(),c=B(tp(Vn(zn(t,n),s,r),Vn(zn(t.add(R(1)),n),s.sub(1),r),Vn(zn(t,n.add(R(1))),s,r.sub(1)),Vn(zn(t.add(R(1)),n.add(R(1))),s.sub(1),r.sub(1)),a,o)).toVar();return dp(c)}),Np=ne(([i])=>{const e=B(i).toVar(),t=R().toVar(),n=R().toVar(),s=R().toVar(),r=b(Tt(e.x,t)).toVar(),a=b(Tt(e.y,n)).toVar(),o=b(Tt(e.z,s)).toVar(),c=b(ii(r)).toVar(),l=b(ii(a)).toVar(),u=b(ii(o)).toVar(),h=B(sp(Vn(zn(t,n,s),r,a,o),Vn(zn(t.add(R(1)),n,s),r.sub(1),a,o),Vn(zn(t,n.add(R(1)),s),r,a.sub(1),o),Vn(zn(t.add(R(1)),n.add(R(1)),s),r.sub(1),a.sub(1),o),Vn(zn(t,n,s.add(R(1))),r,a,o.sub(1)),Vn(zn(t.add(R(1)),n,s.add(R(1))),r.sub(1),a,o.sub(1)),Vn(zn(t,n.add(R(1)),s.add(R(1))),r,a.sub(1),o.sub(1)),Vn(zn(t.add(R(1)),n.add(R(1)),s.add(R(1))),r.sub(1),a.sub(1),o.sub(1)),c,l,u)).toVar();return pp(h)}),RA=qn([Ap,Np]),CA=ne(([i])=>{const e=b(i).toVar(),t=R(Pt(e)).toVar();return sn(ut(t))}),LA=ne(([i])=>{const e=We(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar();return sn(ut(t,n))}),PA=ne(([i])=>{const e=B(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar(),s=R(Pt(e.z)).toVar();return sn(ut(t,n,s))}),IA=ne(([i])=>{const e=Re(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar(),s=R(Pt(e.z)).toVar(),r=R(Pt(e.w)).toVar();return sn(ut(t,n,s,r))}),bp=ne(([i])=>{const e=b(i).toVar(),t=R(Pt(e)).toVar();return B(sn(ut(t,R(0))),sn(ut(t,R(1))),sn(ut(t,R(2))))}),wp=ne(([i])=>{const e=We(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar();return B(sn(ut(t,n,R(0))),sn(ut(t,n,R(1))),sn(ut(t,n,R(2))))}),Rp=ne(([i])=>{const e=B(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar(),s=R(Pt(e.z)).toVar();return B(sn(ut(t,n,s,R(0))),sn(ut(t,n,s,R(1))),sn(ut(t,n,s,R(2))))}),Cp=ne(([i])=>{const e=Re(i).toVar(),t=R(Pt(e.x)).toVar(),n=R(Pt(e.y)).toVar(),s=R(Pt(e.z)).toVar(),r=R(Pt(e.w)).toVar();return B(sn(ut(t,n,s,r,R(0))),sn(ut(t,n,s,r,R(1))),sn(ut(t,n,s,r,R(2))))}),Lp=qn([bp,wp,Rp,Cp]),Vo=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=R(e).toVar(),o=B(i).toVar(),c=b(0).toVar(),l=b(1).toVar();return St({start:R(0),end:a},({i:u})=>{c.addAssign(l.mul(wA(o))),l.mulAssign(s),o.mulAssign(r)}),c}),Pp=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=R(e).toVar(),o=B(i).toVar(),c=B(0).toVar(),l=b(1).toVar();return St({start:R(0),end:a},({i:u})=>{c.addAssign(l.mul(RA(o))),l.mulAssign(s),o.mulAssign(r)}),c}),DA=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=R(e).toVar(),o=B(i).toVar();return We(Vo(o,a,r,s),Vo(o.add(B(R(19),R(193),R(17))),a,r,s))}),UA=ne(([i,e,t,n])=>{const s=b(n).toVar(),r=b(t).toVar(),a=R(e).toVar(),o=B(i).toVar(),c=B(Pp(o,a,r,s)).toVar(),l=b(Vo(o.add(B(R(19),R(193),R(17))),a,r,s)).toVar();return Re(c,l)}),Ip=ne(([i,e,t,n,s,r,a])=>{const o=R(a).toVar(),c=b(r).toVar(),l=R(s).toVar(),u=R(n).toVar(),h=R(t).toVar(),d=R(e).toVar(),m=We(i).toVar(),g=B(Lp(We(d.add(u),h.add(l)))).toVar(),_=We(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const p=We(We(b(d),b(h)).add(_)).toVar(),f=We(p.sub(m)).toVar();return vt(o.equal(R(2)),()=>Ln(f.x).add(Ln(f.y))),vt(o.equal(R(3)),()=>si(Ln(f.x),Ln(f.y))),pr(f,f)}),Dp=ne(([i,e,t,n,s,r,a,o,c])=>{const l=R(c).toVar(),u=b(o).toVar(),h=R(a).toVar(),d=R(r).toVar(),m=R(s).toVar(),g=R(n).toVar(),_=R(t).toVar(),p=R(e).toVar(),f=B(i).toVar(),S=B(Lp(B(p.add(m),_.add(d),g.add(h)))).toVar();S.subAssign(.5),S.mulAssign(u),S.addAssign(.5);const y=B(B(b(p),b(_),b(g)).add(S)).toVar(),E=B(y.sub(f)).toVar();return vt(l.equal(R(2)),()=>Ln(E.x).add(Ln(E.y).add(Ln(E.z)))),vt(l.equal(R(3)),()=>si(si(Ln(E.x),Ln(E.y)),Ln(E.z))),pr(E,E)}),xr=qn([Ip,Dp]),OA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=We(i).toVar(),a=R().toVar(),o=R().toVar(),c=We(Tt(r.x,a),Tt(r.y,o)).toVar(),l=b(1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=b(xr(c,u,h,a,o,s,n)).toVar();l.assign(Dr(l,d))})}),vt(n.equal(R(0)),()=>{l.assign(Ns(l))}),l}),FA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=We(i).toVar(),a=R().toVar(),o=R().toVar(),c=We(Tt(r.x,a),Tt(r.y,o)).toVar(),l=We(1e6,1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=b(xr(c,u,h,a,o,s,n)).toVar();vt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),vt(n.equal(R(0)),()=>{l.assign(Ns(l))}),l}),VA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=We(i).toVar(),a=R().toVar(),o=R().toVar(),c=We(Tt(r.x,a),Tt(r.y,o)).toVar(),l=B(1e6,1e6,1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:u})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:h})=>{const d=b(xr(c,u,h,a,o,s,n)).toVar();vt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),vt(n.equal(R(0)),()=>{l.assign(Ns(l))}),l}),zA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=B(i).toVar(),a=R().toVar(),o=R().toVar(),c=R().toVar(),l=B(Tt(r.x,a),Tt(r.y,o),Tt(r.z,c)).toVar(),u=b(1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{St({start:-1,end:R(1),name:"z",condition:"<="},({z:m})=>{const g=b(xr(l,h,d,m,a,o,c,s,n)).toVar();u.assign(Dr(u,g))})})}),vt(n.equal(R(0)),()=>{u.assign(Ns(u))}),u}),BA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=B(i).toVar(),a=R().toVar(),o=R().toVar(),c=R().toVar(),l=B(Tt(r.x,a),Tt(r.y,o),Tt(r.z,c)).toVar(),u=We(1e6,1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{St({start:-1,end:R(1),name:"z",condition:"<="},({z:m})=>{const g=b(xr(l,h,d,m,a,o,c,s,n)).toVar();vt(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),vt(n.equal(R(0)),()=>{u.assign(Ns(u))}),u}),GA=ne(([i,e,t])=>{const n=R(t).toVar(),s=b(e).toVar(),r=B(i).toVar(),a=R().toVar(),o=R().toVar(),c=R().toVar(),l=B(Tt(r.x,a),Tt(r.y,o),Tt(r.z,c)).toVar(),u=B(1e6,1e6,1e6).toVar();return St({start:-1,end:R(1),name:"x",condition:"<="},({x:h})=>{St({start:-1,end:R(1),name:"y",condition:"<="},({y:d})=>{St({start:-1,end:R(1),name:"z",condition:"<="},({z:m})=>{const g=b(xr(l,h,d,m,a,o,c,s,n)).toVar();vt(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),vt(n.equal(R(0)),()=>{u.assign(Ns(u))}),u});nr.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Vr.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Pt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});Qf.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});ep.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});np.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});ip.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});rp.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});op.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});ap.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});cp.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});lp.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});up.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});hp.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});fp.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});xn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});_r.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});sn.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});ii.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});gp.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});_p.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});xp.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});vp.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});yp.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Mp.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Sp.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Tp.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Ep.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Ap.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Np.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});CA.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});LA.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});PA.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});IA.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});bp.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});wp.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Rp.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Cp.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Vo.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Pp.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});DA.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});UA.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Ip.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Dp.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});OA.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});FA.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});VA.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});zA.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});BA.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});GA.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const HA=ne(([i])=>{const e=B(i).toVar(),t=b(e.x).toVar(),n=b(e.y).toVar(),s=b(e.z).toVar();vt(n.lessThan(1e-4),()=>B(s,s,s)).else(()=>{t.assign(dt(6,t.sub(kr(t))));const r=R(Ed(t)).toVar(),a=b(t.sub(b(r))).toVar(),o=b(s.mul(Ut(1,n))).toVar(),c=b(s.mul(Ut(1,n.mul(a)))).toVar(),l=b(s.mul(Ut(1,n.mul(Ut(1,a))))).toVar();return vt(r.equal(R(0)),()=>B(s,l,o)).elseif(r.equal(R(1)),()=>B(c,s,o)).elseif(r.equal(R(2)),()=>B(o,s,l)).elseif(r.equal(R(3)),()=>B(o,c,s)).elseif(r.equal(R(4)),()=>B(l,o,s)),B(s,o,c)})}),kA=ne(([i])=>{const e=B(i).toVar(),t=b(e.x).toVar(),n=b(e.y).toVar(),s=b(e.z).toVar(),r=b(Dr(t,Dr(n,s))).toVar(),a=b(si(t,si(n,s))).toVar(),o=b(a.sub(r)).toVar(),c=b().toVar(),l=b().toVar(),u=b().toVar();return u.assign(a),vt(a.greaterThan(0),()=>{l.assign(o.div(a))}).else(()=>{l.assign(0)}),vt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{vt(t.greaterThanEqual(a),()=>{c.assign(n.sub(s).div(o))}).elseif(n.greaterThanEqual(a),()=>{c.assign(In(2,s.sub(t).div(o)))}).else(()=>{c.assign(In(4,t.sub(n).div(o)))}),c.mulAssign(1/6),vt(c.lessThan(0),()=>{c.addAssign(1)})}),B(c,l,u)});HA.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});kA.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const WA=ne(([i])=>{const e=B(i).toVar(),t=rd(yd(e,B(.04045))).toVar(),n=B(e.div(12.92)).toVar(),s=B(ui(si(e.add(B(.055)),B(0)).div(1.055),B(2.4))).toVar();return Dn(n,s,t)});WA.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});let ct=[];function XA(){const i=document.getElementById("hud"),e=i.contentWindow.document,t=e.getElementById("velocity"),n=e.getElementById("x"),s=e.getElementById("y"),r=e.getElementById("z"),a=e.getElementById("vx"),o=e.getElementById("vy"),c=e.getElementById("vz"),l=e.getElementById("time"),u=new sy;let h=0,d=!1,m=new Yh(15658751,7829384,.1);u.add(m);let g=new jh(16777215,1e5,1e6,1);g.position.set(-1e5,1e5,-1e5),g.castShadow=!0,g.shadow.camera.near=.1,u.add(g);const _=new vn(90,window.innerWidth/window.innerHeight,1e-4,200);var p=6;_.position.set(0,p,15),_.lookAt(0,p,0);const f=new Bh;f.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(f.domElement),window.addEventListener("resize",Ke,!1);const S=Sy(_,f.domElement);let y=new Ms(2e3,6,2e3),E=new cc({color:3125231,wireframe:!1}),D=new un(y,E);D.position.set(0,-3,0),D.receiveShadow=!0,u.add(D),ct.push(D);let w=new Ms(13,4,13),A=new cc({color:16715535}),V=new U(0,4,0),K=new U(0,4,0),v=new U(0,0,0),N=1;ue(N);function ue(ce){let _e=new un(w,A);switch(ce){case 1:for(let xe=0;xe<11;xe++)_e=new un(w,A),v.set(0,xe*6+4,-xe*36),_e.position.set(v.x,v.y,v.z),_e.castShadow=!0,u.add(_e),ct.push(_e);K=ct[ct.length-1].position;break;case 2:V=K,_e.position.set(V.x,V.y,V.z),_e.castShadow=!0,u.add(_e),ct.push(_e);for(let xe=0;xe<12;xe++)_e=new un(w,A),v.set(V.x+16*Math.sin(xe*4),V.y+xe*5,V.z+-xe*35),_e.position.set(v.x,v.y,v.z),_e.castShadow=!0,u.add(_e),ct.push(_e);K=ct[ct.length-1].position;break;case 3:V=K,_e.position.set(V.x,V.y,V.z),_e.castShadow=!0,u.add(_e),ct.push(_e);for(let xe=0;xe<13;xe++)_e=new un(w,A),v.set(V.x+42*Math.cos(xe)-6,V.y+xe*6,-42*Math.sin(xe)+V.z-36),_e.position.set(v.x,v.y,v.z),_e.castShadow=!0,u.add(_e),ct.push(_e);K=ct[ct.length-1].position;break;case 4:V=K,_e.position.set(V.x,V.y,V.z),_e.castShadow=!0,u.add(_e),ct.push(_e);for(let xe=0;xe<14;xe++)_e=new un(w,A),v.set(V.x+42*Math.cos(xe)-6,V.y+4.5*Math.sin(xe)+1.5*xe,+V.z-xe*36),_e.position.set(v.x,v.y,v.z),_e.castShadow=!0,u.add(_e),ct.push(_e);K=ct[ct.length-1].position;break;default:console.log("Done!"),P();break}}function le(){h=0,setInterval(()=>{h++},100),d=!0}function P(){d===!0&&(d=!1),setInterval(()=>{h--},100);let ce=JSON.parse(localStorage.getItem("times"))||[];ce.push(h),localStorage.setItem("times",JSON.stringify(ce))}function Q(){if(K.z-6.5<S.getObject().position.z&&S.getObject().position.z<K.z+6.5&&K.x-6.5<S.getObject().position.x&&S.getObject().position.x<K.x+6.5&&K.y+3<S.getObject().position.y){for(let ce=0;ce<10+N;ce++)u.remove(ct[ct.length-1]),ct[0].remove(ct.length-1);N++,ue(N)}}function j(){let ce=V;S.getObject().position.y<ce.y-20&&(S.getObject().position.set(ce.x,ce.y+20,ce.z),L.x=0,L.y=0,L.z=0)}let ie=!1,q=!1,J=!1,se=!1,he=!1,Ee=!1,Xe=performance.now(),L=new U,Z=new U,Ne=40,Pe=0,be=0,Me=0,at=Math.PI,ze=at-Me,O=0;document.addEventListener("keydown",function(ce){switch(ce.keyCode){case 38:case 87:ie=!0;break;case 37:case 65:J=!0;break;case 40:case 83:q=!0;break;case 39:case 68:se=!0;break;case 32:he===!0&&(L.y+=Ne),he=!1;break;case 16:Ee=!0;break}},!1),document.addEventListener("keyup",function(ce){switch(ce.keyCode){case 38:case 87:ie=!1;break;case 37:case 65:J=!1;break;case 40:case 83:q=!1;break;case 39:case 68:se=!1;break;case 16:Ee=!1;break}},!1);function Gt(){let ce=S.getObject().position.clone(),_e=[];if(Ee?ce.y=ce.y-p/4:ce.y=ce.y-p/2,Ee)var xe=new wi().setFromCenterAndSize(ce,new U(1.2,p/2,1.2));else var xe=new wi().setFromCenterAndSize(ce,new U(1.2,p,1.2));let we=xe.max.y-xe.min.y;for(let rt=0;rt<ct.length;rt++){let T=ct[rt],x=new wi().setFromObject(T),Y=ce.x-T.position.x,$=ce.z-T.position.z,re=Math.abs(Y),ee=Math.abs($);xe.intersectsBox(x)&&(x.min.y>ce.y+we/2||x.max.y<=ce.y?(T.position.y>ce.y&&_e.push([rt,5]),T.position.y<=ce.y&&_e.push([rt,6])):x.min.y<ce.y<x.max.y&&(xe.max.x>x.min.x&&xe.min.x<x.max.x&&re<ee&&(T.position.z>ce.z&&_e.push([rt,1]),T.position.z<ce.z&&_e.push([rt,2])),xe.max.z>x.min.z&&xe.min.z<x.max.z&&ee<re&&(T.position.x>ce.x&&_e.push([rt,3]),T.position.x<ce.x&&_e.push([rt,4]))))}return _e}function Ue(){j(),Q(),N===1&&d===!1&&ct[ct.length-10-N].position.x-6.5<S.getObject().position.x&&S.getObject().position.x<ct[ct.length-10-N].position.x+6.5&&ct[ct.length-10-N].position.z-6.5<S.getObject().position.z&&S.getObject().position.z<ct[ct.length-10-N].position.z+6.5&&ct[ct.length-10-N].position.y+3<S.getObject().position.y&&le();let ce=Gt(),_e=_.getWorldDirection(new U),xe=performance.now(),we=(xe-Xe)/1e3;if(Z.z=Number(ie)-Number(q),Z.x=Number(se)-Number(J),S.moveRight(-L.x*we),S.moveForward(-L.z*we),L.y-=100*we,S.getObject().position.y+=L.y*we,ce.length===0)Ee?(ie||q)&&Z.x!=0&&(J||se&&Z.z!=0)?(L.z-=Z.z*7*we/2**(1/2),L.x-=Z.x*7*we/2**(1/2)):ie||q?L.z-=Z.z*7*we:(J||se)&&(L.x-=Z.x*7*we):(ie||q)&&Z.x!=0&&(J||se&&Z.z!=0)?(L.z-=Z.z*15*we/2**(1/2),L.x-=Z.x*15*we/2**(1/2)):ie||q?L.z-=Z.z*15*we:(J||se)&&(L.x-=Z.x*15*we);else for(let $=0;$<ce.length;$++){let re=ct[ce[$][0]],ee=new wi().setFromObject(re);ce[$][1]===6&&(Ee?(L.x-=L.x*20*we,L.z-=L.z*20*we,(ie||q)&&Z.x!=0&&(J||se&&Z.z!=0)?(L.z-=Z.z*400*we/2**(1/2),L.x-=Z.x*400*we/2**(1/2)):ie||q?L.z-=Z.z*400*we:(J||se)&&(L.x-=Z.x*400*we),S.getObject().position.y<re.position.y+(ee.max.y-ee.min.y)/2+p/2&&(L.y=0,S.getObject().position.y=re.position.y+(ee.max.y-ee.min.y)/2+p/2,he=!0)):(L.x-=L.x*15*we,L.z-=L.z*15*we,(ie||q)&&Z.x!=0&&(J||se&&Z.z!=0)?(L.z-=Z.z*750*we/2**(1/2),L.x-=Z.x*750*we/2**(1/2)):ie||q?L.z-=Z.z*750*we:(J||se)&&(L.x-=Z.x*750*we),S.getObject().position.y<re.position.y+(ee.max.y-ee.min.y)/2+p&&(L.y=0,S.getObject().position.y=re.position.y+(ee.max.y-ee.min.y)/2+p,he=!0))),ce[$][1]===5&&S.getObject().position.y>re.position.y-(ee.max.y-ee.min.y)/2&&(L.y=0,S.getObject().position.y=re.position.y-(ee.max.y-ee.min.y)/2),ce[$][1]===1&&be>0&&(be=0,O=Math.sqrt(Pe**2+be**2),L.x=O*Math.sin(Me),L.z=-O*Math.cos(Me)),ce[$][1]===2&&be<0&&(be=0,O=Math.sqrt(Pe**2+be**2),L.x=O*Math.sin(Me),L.z=-O*Math.cos(Me)),ce[$][1]===3&&Pe>0&&(Pe=0,O=Math.sqrt(Pe**2+be**2),L.x=O*Math.sin(Me),L.z=-O*Math.cos(Me)),ce[$][1]===4&&Pe<0&&(Pe=0,O=Math.sqrt(Pe**2+be**2),L.x=O*Math.sin(Me),L.z=-O*Math.cos(Me))}const rt=new U(L.x,0,L.z);t.textContent=`Velocity: ${rt.length().toFixed(2)}`,n.textContent=` X: ${S.getObject().position.x.toFixed(2)} `,s.textContent=` Y: ${S.getObject().position.y.toFixed(2)} `,r.textContent=` Z: ${S.getObject().position.z.toFixed(2)} `,i.contentWindow.postMessage({velocity:rt.length().toFixed(2)},"*"),i.contentWindow.postMessage({x:S.getObject().position.x.toFixed(2)},"*"),i.contentWindow.postMessage({y:S.getObject().position.y.toFixed(2)},"*"),i.contentWindow.postMessage({z:S.getObject().position.z.toFixed(2)},"*"),a.textContent=` VX: ${L.x.toFixed(2)} `,o.textContent=` VY: ${L.y.toFixed(2)} `,c.textContent=` VZ: ${L.z.toFixed(2)} `;let T=h%10,x=Math.floor(h/10)%60,Y=Math.floor(h/600)%60;l.textContent=`Time: ${Y}:${x}:${T}`,O=Math.sqrt(L.x**2+L.z**2),Me=Math.acos(L.z/O),at=Math.acos(_e.z),ze=Me-at,Pe=O*Math.sin(ze),be=-O*Math.cos(ze),Pe=Math.round(Pe*100)/100,be=Math.round(be*100)/100,Xe=xe,f.render(u,_),requestAnimationFrame(Ue)}function Ke(){_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}Ue()}XA();
