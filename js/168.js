"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[168],{32924:(e,s,l)=>{l.d(s,{Z:()=>n});var r=l(67294),a=l(85893);function i(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==l)return;var r,a,i=[],c=!0,n=!1;try{for(l=l.call(e);!(c=(r=l.next()).done)&&(i.push(r.value),!s||i.length!==s);c=!0);}catch(e){n=!0,a=e}finally{try{c||null==l.return||l.return()}finally{if(n)throw a}}return i}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return c(e,s);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return c(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,s){(null==s||s>e.length)&&(s=e.length);for(var l=0,r=new Array(s);l<s;l++)r[l]=e[l];return r}function n(e){var s=e.selectedItem,l=e.setItem,c=e.items,n=i((0,r.useState)(!1),2),t=n[0],o=n[1];document.addEventListener("click",(function(e){!e.target.closest(".select")&&o(!1)}));return(0,r.useEffect)((function(){o(!1)}),[s]),(0,a.jsxs)("div",{className:"select",children:[(0,a.jsx)("div",{className:"new-select",onClick:function(){return o(!t)},children:s}),t&&(0,a.jsx)("div",{className:"new-select__list",children:c.map((function(e){return(0,a.jsx)("div",{className:"new-select__item",onClick:function(){return function(e){l(e),o(!1)}(e)},children:(0,a.jsx)("span",{children:e})},e)}))})]})}},24168:(e,s,l)=>{l.r(s),l.d(s,{default:()=>o});var r=l(67294),a=l(39711),i=l(32924),c=l(85893);function n(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==l)return;var r,a,i=[],c=!0,n=!1;try{for(l=l.call(e);!(c=(r=l.next()).done)&&(i.push(r.value),!s||i.length!==s);c=!0);}catch(e){n=!0,a=e}finally{try{c||null==l.return||l.return()}finally{if(n)throw a}}return i}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return t(e,s);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return t(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,s){(null==s||s>e.length)&&(s=e.length);for(var l=0,r=new Array(s);l<s;l++)r[l]=e[l];return r}function o(){var e=["Apple","Android","Crypto","Ger"],s=n((0,r.useState)(e[0]),2),l=s[0],t=s[1],o=["All Collections","Cryptocurr","Crypto","Ger"],m=n((0,r.useState)(o[0]),2),d=m[0],j=m[1],_=["Image","Cryptocurr","Crypto","Ger"],x=n((0,r.useState)(_[0]),2),p=x[0],h=x[1];return(0,c.jsx)("section",{className:"market",id:"market",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h1",{children:"Marketplace"}),(0,c.jsx)("p",{className:"market__text",children:"On SAWA NFT Metaverse, you may find, collect, and exchange amazing goods from popular games, special projects, and creative artists from all over the world."}),(0,c.jsxs)("div",{className:"market__box",children:[(0,c.jsxs)("div",{className:"market__top d-flex",children:[(0,c.jsx)("p",{className:"market__results",children:"21 717 961 results"}),(0,c.jsxs)("div",{className:"market__sort d-flex",children:[(0,c.jsx)("p",{children:"Sort by:"}),(0,c.jsx)(i.Z,{selectedItem:l,setItem:t,items:e})]})]}),(0,c.jsxs)("div",{className:"market__flex d-flex",children:[(0,c.jsxs)("div",{className:"market-left",children:[(0,c.jsx)("p",{className:"market-left__name",children:"Filter"}),(0,c.jsxs)("form",{action:"",className:"popup-form market-form item-form",children:[(0,c.jsxs)("div",{className:"market-left__item",children:[(0,c.jsx)("label",{children:"Price range"}),(0,c.jsxs)("div",{className:"market__line d-flex",children:[(0,c.jsx)("input",{type:"number",name:"usd",maxLength:"8",placeholder:"1.00",className:"usd"}),(0,c.jsx)("input",{type:"number",name:"usd",maxLength:"8",placeholder:"100.00",className:"usd"})]}),(0,c.jsx)("a",{href:"#",className:"market-left__set btn btn1",children:"Set Price"})]}),(0,c.jsxs)("div",{className:"market-left__item",children:[(0,c.jsx)("label",{children:"Collection"}),(0,c.jsx)(i.Z,{selectedItem:d,setItem:j,items:o})]}),(0,c.jsxs)("div",{className:"market-left__item",children:[(0,c.jsx)("label",{children:"Type"}),(0,c.jsx)(i.Z,{selectedItem:p,setItem:h,items:_})]}),(0,c.jsxs)("div",{className:"market-left__item",children:[(0,c.jsx)("label",{children:"Availability"}),(0,c.jsxs)("div",{className:"market-left__filter d-flex",children:[(0,c.jsx)("a",{href:"#",className:"btn btn1 market-left__btn",children:"Buy now"}),(0,c.jsx)("a",{href:"#",className:"btn btn1 market-left__btn active",children:"Reserve Price"}),(0,c.jsx)("a",{href:"#",className:"btn btn1 market-left__btn",children:"Live Auction"}),(0,c.jsx)("a",{href:"#",className:"btn btn1 market-left__btn",children:"Active Offer"})]})]})]})]}),(0,c.jsxs)("div",{className:"coll__box",children:[(0,c.jsxs)("div",{className:"proj__box proj__box_market d-flex",children:[(0,c.jsxs)("div",{className:"proj__item flavor nft",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/1.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor nft",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/2.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor nft",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/3.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor nft",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/4.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor des",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/5.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor des",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/6.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor des",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/7.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/1.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]}),(0,c.jsxs)("div",{className:"proj__item flavor act",children:[(0,c.jsx)("div",{className:"proj__soon",children:"Coming Soon"}),(0,c.jsx)("div",{className:"proj__top",children:(0,c.jsx)("img",{src:"/img/projects/2.png",alt:""})}),(0,c.jsxs)("div",{className:"proj__content",children:[(0,c.jsxs)("div",{className:"proj__flex proj__love d-flex",children:[(0,c.jsx)(a.rU,{to:"/launchpad/some-project-title",className:"proj__title",children:"Momentibles - Main private sale"}),(0,c.jsxs)("div",{className:"like",children:[(0,c.jsx)("p",{children:"11"}),(0,c.jsx)("img",{src:"/img/love.svg",alt:"",className:"proj__icon svg"})]})]}),(0,c.jsxs)("div",{className:"proj__flex d-flex",children:[(0,c.jsxs)("div",{className:"new__content",children:[(0,c.jsx)("p",{className:"new__span",children:"Price"}),(0,c.jsx)("p",{className:"proj__title",children:"200 SAWA"})]}),(0,c.jsx)("img",{src:"/img/sawa.svg",alt:"",className:"proj__icon"})]})]})]})]}),(0,c.jsxs)("div",{className:"blog__nav d-flex",children:[(0,c.jsx)("a",{href:"#",className:"blog__left",children:(0,c.jsx)("img",{src:"/img/left.svg",alt:"",className:"svg"})}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#",children:"1"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#",children:"2"})}),(0,c.jsx)("li",{className:"active",children:(0,c.jsx)("a",{href:"#",children:"3"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#",children:"4"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"#",children:"5"})})]}),(0,c.jsx)("a",{href:"#",className:"blog__right",children:(0,c.jsx)("img",{src:"/img/right.svg",alt:"",className:"svg"})})]})]})]})]})]})})}}}]);