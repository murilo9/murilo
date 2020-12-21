/*! For license information please see component---src-pages-index-js-cbae5148325b8a595b22.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6BiS":function(e,t,n){},"K+00":function(e,t,n){},OvDN:function(e,t,n){},R4jk:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("q1tI"),o=n.n(a);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var l=n("TSYQ"),c=n.n(l),u=o.a.createContext({});u.Consumer,u.Provider;function m(e,t){var n=Object(a.useContext)(u);return e||n[t]||t}var p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,a=e.as,l=void 0===a?"div":a,u=e.className,p=i(e,["bsPrefix","fluid","as","className"]),f=m(n,"container"),d="string"==typeof r?"-"+r:"-fluid";return o.a.createElement(l,s({ref:t},p,{className:c()(u,r?""+f+d:f)}))}));p.displayName="Container",p.defaultProps={fluid:!1};var f=p,d=["xl","lg","md","sm","xs"],v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.noGutters,l=e.as,u=void 0===l?"div":l,p=i(e,["bsPrefix","className","noGutters","as"]),f=m(n,"row"),v=f+"-cols",b=[];return d.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&b.push(""+v+r+"-"+t)})),o.a.createElement(u,s({ref:t},p,{className:c.a.apply(void 0,[r,f,a&&"no-gutters"].concat(b))}))}));v.displayName="Row",v.defaultProps={noGutters:!1};var b=v,h=["xl","lg","md","sm","xs"],g=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,l=void 0===a?"div":a,u=i(e,["bsPrefix","className","as"]),p=m(n,"col"),f=[],d=[];return h.forEach((function(e){var t,n,r,a=u[e];if(delete u[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var s="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+s:""+p+s+"-"+t),null!=r&&d.push("order"+s+"-"+r),null!=n&&d.push("offset"+s+"-"+n)})),f.length||f.push(p),o.a.createElement(l,s({},u,{ref:t,className:c.a.apply(void 0,[r].concat(f,d))}))}));g.displayName="Col";var E=g,y=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.getContainterStyle=function(){return{width:this.props.size,height:this.props.size,position:"relative"}},n.getSquareStyle=function(){return{border:"2px solid "+("blue"===this.props.color?"#5DEEFF":"#66E782"),width:"100%",height:"100%",position:"absolute",left:this.props.left||"0",right:this.props.right||"0",top:this.props.top||"0",bottom:this.props.bottom||"0"}},n.getImgStyle=function(){return{backgroundImage:"url("+this.props.src+")",backgroundSize:"cover",width:"100%",paddingTop:"100%",position:"relative"}},n.render=function(){return a.createElement("div",{style:this.getContainterStyle(),className:"mh-picture "+this.props.className},a.createElement("div",{style:this.getSquareStyle()}),a.createElement("div",{style:this.getImgStyle()}))},t}(a.Component),x=(n("E9XD"),n("7O5W")),N=n("17x9"),O=n.n(N);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function I(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=T(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e}),{})}var M=!1;try{M=!0}catch(st){}function R(e){return null===e?null:"object"===k(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function D(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?w({},e,t):{}}function A(e){var t=e.forwardedRef,n=C(e,["forwardedRef"]),r=n.icon,a=n.mask,o=n.symbol,s=n.className,i=n.title,l=R(r),c=D("classes",[].concat(P(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,o=e.inverse,s=e.border,i=e.listItem,l=e.flip,c=e.size,u=e.rotation,m=e.pull,p=(w(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":o,"fa-border":s,"fa-li":i,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(c),null!=c),w(t,"fa-rotate-".concat(u),null!=u&&0!==u),w(t,"fa-pull-".concat(m),null!=m),w(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(n)),P(s.split(" ")))),u=D("transform","string"==typeof n.transform?x.parse.transform(n.transform):n.transform),m=D("mask",R(a)),p=Object(x.icon)(l,S({},c,{},u,{},m,{symbol:o,title:i}));if(!p)return function(){var e;!M&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var f=p.abstract,d={ref:t};return Object.keys(n).forEach((function(e){A.defaultProps.hasOwnProperty(e)||(d[e]=n[e])})),L(f[0],d)}A.displayName="FontAwesomeIcon",A.propTypes={border:O.a.bool,className:O.a.string,mask:O.a.oneOfType([O.a.object,O.a.array,O.a.string]),fixedWidth:O.a.bool,inverse:O.a.bool,flip:O.a.oneOf(["horizontal","vertical","both"]),icon:O.a.oneOfType([O.a.object,O.a.array,O.a.string]),listItem:O.a.bool,pull:O.a.oneOf(["right","left"]),pulse:O.a.bool,rotation:O.a.oneOf([0,90,180,270]),size:O.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:O.a.bool,symbol:O.a.oneOfType([O.a.bool,O.a.string]),title:O.a.string,transform:O.a.oneOfType([O.a.string,O.a.object]),swapOpacity:O.a.bool},A.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var L=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=I(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[T(t)]=r}return e}),{attrs:{}}),s=r.style,i=void 0===s?{}:s,l=C(r,["style"]);return o.attrs.style=S({},o.attrs.style,{},i),t.apply(void 0,[n.tag,S({},o.attrs,{},l)].concat(P(a)))}.bind(null,o.a.createElement),z=n("8tEE"),F=n("wHSu"),_=(n("6BiS"),"https://www.linkedin.com/in/murilo-henrique-matias-4a6694153/"),q="https://github.com/murilo9",H="https://wa.me/5541998929470",V="mailto:murilohenriquematias@gmail.com",U=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"mh-social-networks mt-4",id:"social-networks"},a.createElement("a",{href:_,className:"mr-2",target:"_blank"},a.createElement(A,{icon:z.b})),a.createElement("a",{href:q,className:"mr-2",target:"_blank"},a.createElement(A,{icon:z.a})),a.createElement("a",{href:H,className:"mr-2",target:"_blank"},a.createElement(A,{icon:z.c})),a.createElement("a",{href:V,className:"mr-2",target:"_blank"},a.createElement(A,{icon:F.b})))},t}(a.Component),B=(n("oglm"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={title:""},n}Object(r.a)(t,e);var n=t.prototype;return n.showSubtitle=function(){document.getElementById("landing-subtitle").style.color="#5DEEFF",document.getElementById("landing-social-networks").style.borderTop="2px solid black",document.getElementById("social-networks").style.color="#fff"},n.pushLetter=function(e,t,n){var r=this.state.title;r+=e,this.setState({title:r}),t===n-1&&setTimeout(this.showSubtitle,250)},n.writeTitle=function(e){for(var t="Murilo Henrique, prazer ;)".length,n=function(n){setTimeout((function(){return e.pushLetter("Murilo Henrique, prazer ;)".charAt(n),n,t)}),50*n)},r=0;r<t;r++)n(r)},n.componentDidMount=function(){var e=this;setTimeout((function(){return e.writeTitle(e)}),1e3)},n.render=function(){return a.createElement("section",{className:"d-flex align-items-center pt-0 pb-0 mh-landing"},a.createElement(f,null,a.createElement(b,{noGutters:!0},a.createElement(E,{sm:4,className:"d-flex justify-content-center"},a.createElement(y,{src:"murilo.png",size:"260px",id:"landing-img",color:"green",top:"20px",left:"-20px",className:"mb-2"})),a.createElement(E,{sm:7,className:"mh-landing-text d-flex flex-column justify-content-end pb-4"},a.createElement("h1",{className:"landing-title"},this.state.title),a.createElement("p",{className:"mt-3 mh-landing-subtitle",id:"landing-subtitle"},"Desenvolvedor Javascript Fullstack")),a.createElement(E,{sm:4}),a.createElement(E,{sm:7,id:"landing-social-networks",className:"d-flex justify-content-center"},a.createElement(U,null)))))},t}(a.Component)),J="http://www.utfpr.edu.br/",W="https://www.up.edu.br",G="https://orbitaldev.com.br/",X="http://yousendr.com/",K=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("section",{className:"bkg-dark-2",id:"about"},a.createElement(f,null,a.createElement("h2",{className:"green-title-border"},"Sobre mim"),a.createElement(b,{className:"mt-4"},a.createElement(E,{sm:5},a.createElement(y,{src:"coder.jpg",className:"mb-6",size:"260px",color:"blue",top:"20px",left:"-20px"}),a.createElement(y,{src:"robotica.jpg",className:"ml-4",size:"260px",color:"green",top:"-20px",left:"20px"})),a.createElement(E,{sm:7},a.createElement("h3",{className:"mb-3"},"🖥️",a.createElement("span",{className:"ml-1"},"Como tudo começou")),a.createElement("p",{className:"color-light-gray"},"Tive o meu primeiro contato com desenvolvimento aos 11 anos com linguagem C. Hoje, com 24 anos, sou apaixonado por frameworks JavaScript e estou buscando me especializar como Desenvolvedor Fullstack JavaScript."),a.createElement("h3",{className:"mb-3 mt-3"},"🎓",a.createElement("span",{className:"ml-1"},"Formação")),a.createElement("p",{className:"color-light-gray"},"Cursei o ensino médio técnico em eletrônica na ",a.createElement("a",{href:J,className:"color-blue",target:"_blank"},"UTFPR"),"."),a.createElement("p",{className:"color-light-gray"},"Hoje sou formado em Análise e Desenvolvimento de Sistemas pela ",a.createElement("a",{href:W,className:"color-blue",target:"_blank"},"Universidade Positivo.")),a.createElement("h3",{className:"mb-3 mt-3"},"💼",a.createElement("span",{className:"ml-1"},"Experiência profissional")),a.createElement("p",{className:"color-light-gray"},"Fui estagiário como Desenvolvedor Web PHP na ",a.createElement("a",{href:G,className:"color-blue",target:"_blank"},"Orbital")," e atualmente sou desenvolvedor web Fullstack no ",a.createElement("a",{href:X,className:"color-blue",target:"_blank"},"YouSendr")," - utilizando MVC, webpack, VueJS, Vuetify e Element no front-end e Google Apps Script no back-end."),a.createElement("h3",{className:"mb-3 mt-3"},"🎨",a.createElement("span",{className:"ml-1"},"O que gosto de fazer")),a.createElement("p",{className:"color-light-gray"},"Como entusiasta, gosto de estudar temas relacionados a UI/UX design, eletrônica, robótica e automação com Arduino.")))))},t}(a.Component),Y=(n("sn+x"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("section",{id:"services"},a.createElement(f,null,a.createElement("div",{className:"d-flex justify-content-center"},a.createElement("h2",{className:"green-title-border"},"Serviços")),a.createElement(b,{className:"mt-4"},a.createElement(E,{className:"d-flex flex-column align-items-center"},a.createElement("object",{type:"image/svg+xml",data:"computer.svg",className:"mh-flat-icon mb-3"}),a.createElement("h3",{className:"mb-2"},"Aplicações Web"),a.createElement("p",{className:"color-light-gray"},"Construção de aplicações web modernas com Vue, React ou Angular com backend composto de API REST ou de serviços baseados em nuvem (Firebase, Heroku).")),a.createElement(E,{className:"d-flex flex-column align-items-center"},a.createElement("object",{type:"image/svg+xml",data:"worldwide.svg",className:"mh-flat-icon mb-3"}),a.createElement("h3",{className:"mb-2"},"APIs REST"),a.createElement("p",{className:"color-light-gray"},"APIs feitas em Nodejs para prover serviços à sua aplicação de front-end utilizando bancos de dados relacionais (MySQL) ou não-relacionais (MongoDB) e seus respectivos ORMs (Sequelize, Mongoose).")),a.createElement(E,{className:"d-flex flex-column align-items-center"},a.createElement("object",{type:"image/svg+xml",data:"online.svg",className:"mh-flat-icon mb-3"}),a.createElement("h3",{className:"mb-2"},"Landing Pages e Sites"),a.createElement("p",{className:"color-light-gray"},"Páginas feitas usando Nuxtjs visando a melhor performance e bons resultados em motores de busca (SEO).")))))},t}(a.Component)),Q=(n("OvDN"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("section",{className:"bkg-dark-2",id:"skills"},a.createElement(f,{className:"d-flex flex-column align-items-center"},a.createElement("h2",{className:"green-title-border mb-0"},"Habilidades"),a.createElement("div",{className:"mt-3 d-flex flex-column align-items-center"},a.createElement("h3",{className:"mt-3 color-green"},"Principais"),a.createElement("p",{className:"mt-2 mh-skills-major"},"HTML | CSS | Javascript | Vue | React"),a.createElement("h3",{className:"mt-3 color-green"},"Secundárias"),a.createElement("p",{className:"mt-2 mh-skills-minor"},"Angular | Node | Nuxt | Typescript"),a.createElement("h3",{className:"mt-3 color-green"},"Outras"),a.createElement("p",{className:"mt-2 mh-skills-misc"},"Vuex | Redux | MongoDB | MySQL | Mongoose | Firebase | Webpack")),a.createElement("div",{className:"d-flex flex-column align-items-center"},a.createElement("h3",{className:"mt-3 color-green"},"Idiomas"),a.createElement(b,{className:"mt-3"},a.createElement(E,null,a.createElement(b,null,a.createElement(E,null,a.createElement("img",{src:"english.svg",className:"mh-flag"})),a.createElement(E,null,a.createElement("p",{className:"color-blue"},"Inglês"),a.createElement("p",{className:"color-light-gray"},"Avançado")))),a.createElement(E,null,a.createElement(b,null,a.createElement(E,null,a.createElement("img",{src:"francais.svg",className:"mh-flag"})),a.createElement(E,null,a.createElement("p",{className:"color-blue"},"Francês"),a.createElement("p",{className:"color-light-gray"},"Básico"))))))))},t}(a.Component));var Z=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function $(e){var t=Z(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var ee=function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},te=n("XcHJ");function ne(e){var t,n,r=(t=e,(n=Object(a.useRef)(t)).current=t,n);Object(a.useEffect)((function(){return function(){return r.current()}}),[])}var re=Math.pow(2,31)-1;function ae(){var e=Object(te.a)(),t=Object(a.useRef)();return ne((function(){return clearTimeout(t.current)})),Object(a.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=re?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=re?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),re)}(t,r,Date.now()+a))},clear:n}}),[])}var oe=n("dZvc");function se(e,t){return function(e){var t=Object(oe.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var ie=/([A-Z])/g;var le=/^ms-/;function ce(e){return function(e){return e.replace(ie,"-$1").toLowerCase()}(e).replace(le,"-ms-")}var ue=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var me=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(ce(t))||se(e).getPropertyValue(ce(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!ue.test(e))}(a)?n+=ce(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(ce(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},pe=n("SJxq"),fe=!1,de=!1;try{var ve={get passive(){return fe=!0},get once(){return de=fe=!0}};pe.a&&(window.addEventListener("test",ve,ve),window.removeEventListener("test",ve,!0))}catch(st){}var be=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!de){var a=r.once,o=r.capture,s=n;!de&&a&&(s=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=s),e.addEventListener(t,s,fe?r:o)}e.addEventListener(t,n,r)};var he=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var ge=function(e,t,n,r){return be(e,t,n,r),function(){he(e,t,n,r)}};function Ee(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=ge(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function ye(e,t,n,r){var a,o;null==n&&(a=me(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var s=Ee(e,n,r),i=ge(e,"transitionend",t);return function(){s(),i()}}var xe=n("i8i4"),Ne=n.n(xe),Oe=!1,ke=o.a.createContext(null),we=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[Ne.a.findDOMNode(this),r],o=a[0],s=a[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||Oe?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:Ne.a.findDOMNode(this);t&&!Oe?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:Ne.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],s=a[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,i(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(ke.Provider,{value:null},"function"==typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function je(){}we.contextType=ke,we.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:je,onEntering:je,onEntered:je,onExit:je,onExiting:je,onExited:je},we.UNMOUNTED="unmounted",we.EXITED="exited",we.ENTERING="entering",we.ENTERED="entered",we.EXITING="exiting";var Se=we;n("QLaP");function Ce(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function Pe(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function Te(e,t){return Object.keys(t).reduce((function(n,r){var o,l=n,c=l[Ce(r)],u=l[r],m=i(l,[Ce(r),r].map(Pe)),p=t[r],f=function(e,t,n){var r=Object(a.useRef)(void 0!==e),o=Object(a.useState)(t),s=o[0],i=o[1],l=void 0!==e,c=r.current;return r.current=l,!l&&c&&s!==t&&i(t),[l?e:s,Object(a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(u,c,e[p]),d=f[0],v=f[1];return s({},m,((o={})[r]=d,o[p]=v,o))}),e)}n("94VI");var Ie=/-(.)/g;var Me=function(e){return e[0].toUpperCase()+(t=e,t.replace(Ie,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var Re,De,Ae,Le,ze,Fe,_e,qe,He=(Re="carousel-caption",Le=(Ae=void 0===De?{}:De).displayName,ze=void 0===Le?Me(Re):Le,Fe=Ae.Component,_e=Ae.defaultProps,(qe=o.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,a=e.as,l=void 0===a?Fe||"div":a,u=i(e,["className","bsPrefix","as"]),p=m(r,Re);return o.a.createElement(l,s({ref:t,className:c()(n,p)},u))}))).defaultProps=_e,qe.displayName=ze,qe),Ve=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,a=e.bsPrefix,l=e.children,u=e.className,p=i(e,["as","bsPrefix","children","className"]),f=c()(u,m(a,"carousel-item"));return o.a.createElement(r,s({ref:t},p,{className:f}),l)}));Ve.displayName="CarouselItem";var Ue=Ve;function Be(e,t){var n=0;return o.a.Children.map(e,(function(e){return o.a.isValidElement(e)?t(e,n++):e}))}var Je=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function We(e){return!e||"#"===e.trim()}var Ge=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,l=e.onKeyDown,c=i(e,["as","disabled","onKeyDown"]),u=function(e){var t=c.href,n=c.onClick;(a||We(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return We(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),a&&(c.tabIndex=-1,c["aria-disabled"]=!0),o.a.createElement(r,s({ref:t},c,{onClick:u,onKeyDown:Je((function(e){" "===e.key&&(e.preventDefault(),u(e))}),l)}))}));Ge.displayName="SafeAnchor";var Xe=Ge;var Ke={bsPrefix:O.a.string,as:O.a.elementType,slide:O.a.bool,fade:O.a.bool,controls:O.a.bool,indicators:O.a.bool,activeIndex:O.a.number,onSelect:O.a.func,onSlide:O.a.func,onSlid:O.a.func,interval:O.a.number,keyboard:O.a.bool,pause:O.a.oneOf(["hover",!1]),wrap:O.a.bool,touch:O.a.bool,prevIcon:O.a.node,prevLabel:O.a.string,nextIcon:O.a.node,nextLabel:O.a.string},Ye={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var Qe=o.a.forwardRef((function(e,t){var n=Te(e,{activeIndex:"onSelect"}),r=n.as,l=void 0===r?"div":r,u=n.bsPrefix,p=n.slide,f=n.fade,d=n.controls,v=n.indicators,b=n.activeIndex,h=n.onSelect,g=n.onSlide,E=n.onSlid,y=n.interval,x=n.keyboard,N=n.onKeyDown,O=n.pause,k=n.onMouseOver,w=n.onMouseOut,j=n.wrap,S=n.touch,C=n.onTouchStart,P=n.onTouchMove,T=n.onTouchEnd,I=n.prevIcon,M=n.prevLabel,R=n.nextIcon,D=n.nextLabel,A=n.className,L=n.children,z=i(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),F=m(u,"carousel"),_=Object(a.useRef)(null),q=Object(a.useState)("next"),H=q[0],V=q[1],U=Object(a.useState)(!1),B=U[0],J=U[1],W=Object(a.useState)(b||0),G=W[0],X=W[1];B||b===G||(_.current?V(_.current):V((b||0)>G?"next":"prev"),p&&J(!0),X(b||0)),Object(a.useEffect)((function(){_.current&&(_.current=null)}));var K,Y=0;!function(e,t){var n=0;o.a.Children.forEach(e,(function(e){o.a.isValidElement(e)&&t(e,n++)}))}(L,(function(e,t){++Y,t===b&&(K=e.props.interval)}));var Q=Z(K),te=Object(a.useCallback)((function(e){if(!B){var t=G-1;if(t<0){if(!j)return;t=Y-1}_.current="prev",h&&h(t,e)}}),[B,G,h,j,Y]),ne=$((function(e){if(!B){var t=G+1;if(t>=Y){if(!j)return;t=0}_.current="next",h&&h(t,e)}})),re=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{element:re.current,prev:te,next:ne}}));var oe=$((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(re.current)&&ne()})),se="next"===H?"left":"right";ee((function(){p||(g&&g(G,se),E&&E(G,se))}),[G]);var ie=F+"-item-"+H,le=F+"-item-"+se,ce=Object(a.useCallback)((function(e){!function(e){e.offsetHeight}(e),g&&g(G,se)}),[g,G,se]),ue=Object(a.useCallback)((function(){J(!1),E&&E(G,se)}),[E,G,se]),me=Object(a.useCallback)((function(e){if(x&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void te(e);case"ArrowRight":return e.preventDefault(),void ne(e)}N&&N(e)}),[x,N,te,ne]),pe=Object(a.useState)(!1),fe=pe[0],de=pe[1],ve=Object(a.useCallback)((function(e){"hover"===O&&de(!0),k&&k(e)}),[O,k]),be=Object(a.useCallback)((function(e){de(!1),w&&w(e)}),[w]),he=Object(a.useRef)(0),ge=Object(a.useRef)(0),Ee=Object(a.useState)(!1),xe=Ee[0],Ne=Ee[1],Oe=ae(),ke=Object(a.useCallback)((function(e){he.current=e.touches[0].clientX,ge.current=0,S&&Ne(!0),C&&C(e)}),[S,C]),we=Object(a.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-he.current,P&&P(e)}),[P]),je=Object(a.useCallback)((function(e){if(S){var t=ge.current;if(Math.abs(t)<=40)return;t>0?te(e):ne(e)}Oe.set((function(){Ne(!1)}),y||void 0),T&&T(e)}),[S,te,ne,Oe,y,T]),Ce=null!=y&&!fe&&!xe&&!B,Pe=Object(a.useRef)();Object(a.useEffect)((function(){var e,t;if(Ce)return Pe.current=window.setInterval(document.visibilityState?oe:ne,null!=(e=null!=(t=Q.current)?t:y)?e:void 0),function(){null!==Pe.current&&clearInterval(Pe.current)}}),[Ce,ne,Q,y,oe]);var Ie=Object(a.useMemo)((function(){return v&&Array.from({length:Y},(function(e,t){return function(e){h&&h(t,e)}}))}),[v,Y,h]);return o.a.createElement(l,s({ref:re},z,{onKeyDown:me,onMouseOver:ve,onMouseOut:be,onTouchStart:ke,onTouchMove:we,onTouchEnd:je,className:c()(A,F,p&&"slide",f&&F+"-fade")}),v&&o.a.createElement("ol",{className:F+"-indicators"},Be(L,(function(e,t){return o.a.createElement("li",{key:t,className:t===G?"active":void 0,onClick:Ie?Ie[t]:void 0})}))),o.a.createElement("div",{className:F+"-inner"},Be(L,(function(e,t){var n=t===G;return p?o.a.createElement(Se,{in:n,onEnter:n?ce:void 0,onEntered:n?ue:void 0,addEndListener:ye},(function(t){return o.a.cloneElement(e,{className:c()(e.props.className,n&&"entered"!==t&&ie,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&le)})})):o.a.cloneElement(e,{className:c()(e.props.className,n&&"active")})}))),d&&o.a.createElement(o.a.Fragment,null,(j||0!==b)&&o.a.createElement(Xe,{className:F+"-control-prev",onClick:te},I,M&&o.a.createElement("span",{className:"sr-only"},M)),(j||b!==Y-1)&&o.a.createElement(Xe,{className:F+"-control-next",onClick:ne},R,D&&o.a.createElement("span",{className:"sr-only"},D))))}));Qe.displayName="Carousel",Qe.propTypes=Ke,Qe.defaultProps=Ye,Qe.Caption=He,Qe.Item=Ue;var Ze=Qe,$e=(n("K+00"),function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.renderPictures=function(){if(this.props.pictures.length){var e=[];return this.props.pictures.forEach((function(t){e.push(a.createElement(Ze.Item,{key:t},a.createElement("img",{className:"d-block",src:t})))})),a.createElement(Ze,null,e)}return a.createElement("p",null,"Sem fotos para exibir.")},n.render=function(){var e=this.props.links.repo?a.createElement("p",null,a.createElement("a",{href:this.props.links.repo,className:"color-green",target:"_blank"},"Repositório")):null,t=this.props.links.demo?a.createElement("p",null,a.createElement("a",{href:this.props.links.demo,className:"color-green",target:"_blank"},"Demo")):null,n=this.props.links.site?a.createElement("p",null,a.createElement("a",{href:this.props.links.site,className:"color-green",target:"_blank"},"Site")):null;return a.createElement("div",{className:"mh-portfolio-card mt-7"},a.createElement("div",{className:"pt-3 pl-3 pr-3 pb-3"},a.createElement("h3",{className:"green-title-border"},this.props.title),a.createElement("div",{className:"mt-2"},this.props.description,a.createElement("p",{className:"color-light-gray mt-2"},"Tecnologias: ",this.props.techs)),a.createElement("div",{className:"mt-3"},e,t,n)),this.renderPictures())},t}(a.Component)),et=[{title:"YouSendr Message",description:a.createElement(a.Fragment,null,a.createElement("p",null,"Aplicação desenvolvida durante minha atuação na ",a.createElement("a",{href:"https://yousendr.com/pt-br/",target:"_blank",className:"color-green"},"YouSendr™"),", o YouSendr Message é um complemento para o Google Planilhas para automação de disparo de mensagens. Os contatos da planilha são organizados dentro de um pipeline composto por fases, que podem ter mensagens personalizadas e realizar os disparos agendados para os canais configurados (Email, SMS, Whatsapp e Telegram) de acordo com as regras estabelecidas (data, horário, dias da semana). Também é possível acompanhar em tempo real as interações (visualizações, cliques e respostas) que ocorrem nas mensagens, dentre inúmeras outras funcionalidades."),a.createElement("p",null,"O front-end da aplicação foi feito em Vue com um layout personalizado construído utilizando o framework Element. O back-end da aplicação é híbrido, utilizando as funções do Google Planilhas escritas em Google App Script, e os serviços do Firebase.")),techs:"Vue | Vuex | Element | Google App Script | Firebase",pictures:["yousendr-message-1.png","yousendr-message-2.png","yousendr-message-3.png","yousendr-message-4.png"],links:{site:"https://yousendr.com/pt/message/"}},{title:"Mydria",description:a.createElement("p",null,"Mydria é uma rede social onde os usuários podem postar texto e imagens, bem como seguir e reagir a posts de outros usuários. O front-end foi feito em React usando o tema padrão do Bootstrap, além de uma cariação dark mode. No back-end foi utilizada uma API REST feita em Node que faz autenticação e fornece os serviços para a aplicação, interagindo com um banco de dados MongoDB através do Mongoose ORM. A API Node é hospedada no Heroku. As imagens são hospedadas no serviço de store do Firebase."),techs:["React | Redux | Bootstrap | Node | MongoDB | Mongoose | Heroku | Firebase"],pictures:["mydria-front.png","mydria-feed.png","mydria-feed-black.png","mydria-profile.png"],links:{repo:"https://github.com/murilo9/mydria"}},{title:"Jevang",description:a.createElement("p",null,"Site de exposição de obras em desenvolvimento para a pintora ",a.createElement("a",{href:"https://www.instagram.com/jevangart/",target:"_blank",className:"color-green"},"Julia Evangelista"),". Feito em Nuxt utilizando o framework Vue Material. Design feito por mim. O site possui um painel de administrador com layout padrão do Material Design. Os usuários podem enviar mensagens que são visualizadas pelo administrador no painel. O back-end é serverless, portanto o site se comunica diretamente com os serviços de autenticação, hospedagem e storage do Firebase."),techs:"Vue | Nuxt | Firebase | Material UI",pictures:["jevang-front.png","jevang-mobile.png","jevang-panel-mobile.png"],links:{demo:"#"}}],tt=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.renderPortfolioCards=function(){var e=[];return et.forEach((function(t){e.push(a.createElement($e,{title:t.title,description:t.description,pictures:t.pictures,links:t.links,techs:t.techs,key:t.title}))})),e},n.render=function(){return a.createElement("section",{id:"portfolio"},a.createElement(f,null,a.createElement("div",{className:"d-flex justify-content-center"},a.createElement("h2",{className:"green-title-border"},"Portfólio")),this.renderPortfolioCards()))},t}(a.Component),nt=(n("R4jk"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("nav",null,a.createElement("ul",{className:"d-flex"},a.createElement("li",null,a.createElement("a",{href:"#about",className:"color-blue mr-2"},a.createElement("strong",null,"Sobre mim"))),a.createElement("li",null,a.createElement("a",{href:"#services",className:"color-blue mr-2"},a.createElement("strong",null,"Serviços"))),a.createElement("li",null,a.createElement("a",{href:"#skills",className:"color-blue mr-2"},a.createElement("strong",null,"Habilidades"))),a.createElement("li",null,a.createElement("a",{href:"#portfolio",className:"color-blue mr-2"},a.createElement("strong",null,"Portfólio")))))},t}(a.Component)),rt=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("header",{className:"d-flex align-items-center"},a.createElement(f,null,a.createElement(b,null,a.createElement(E,{className:"d-flex justify-content-start"},a.createElement(nt,null)),a.createElement(E,{className:"d-flex justify-content-end"},a.createElement(A,{icon:F.a,className:"available"}),a.createElement("span",{className:"ml-1"},"Disponível para novos projetos")))))},t}(a.Component),at=(n("y8WM"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return a.createElement("footer",{className:"d-flex justify-content-between align-items-center bkg-dark-2 pl-2 pr-2"},a.createElement("span",null,"Copyright 2020 - Murilo Henrique"),a.createElement("span",null,"Flat icons by ",a.createElement("a",{href:"https://www.flaticon.com/authors/phatplus"},"phatplus")," and ",a.createElement("a",{href:"https://www.flaticon.com/br/autores/freepik"},"Freepik")))},t}(a.Component)),ot=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){setTimeout((function(){return document.body.style.display="block"}),500)},n.render=function(){return a.createElement("main",null,a.createElement(B,null),a.createElement(K,null),a.createElement(Y,null),a.createElement(Q,null),a.createElement(tt,null),a.createElement(rt,null),a.createElement(at,null))},t}(a.Component);t.default=ot},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},oglm:function(e,t,n){},"sn+x":function(e,t,n){},y8WM:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-cbae5148325b8a595b22.js.map