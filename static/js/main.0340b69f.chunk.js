(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{143:function(e,t,n){},446:function(e,t,n){},447:function(e,t,n){},449:function(e,t,n){},450:function(e,t,n){},451:function(e,t,n){},452:function(e,t,n){},457:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),r=n(110),i=n.n(r),l=(n(229),n(239),n(223)),o=n(64),j=n(16),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,461)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},d=n(65),x="GET_CONFIGURATION",b="RECEIVE_CONFIGURATION",m="ON_ERROR",f="UPDATE_CURRENT_SECTION_NUMBER";var p={configuration:{},error:null};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{configuration:t.payload&&t.payload.data});case f:return Object(d.a)(Object(d.a)({},e),{},{currentSectionNumber:t.payload&&t.payload});case m:return Object(d.a)(Object(d.a)({},e),{},{error:!0});default:return e}},h=n(17),g=n.n(h),v=n(57),N="https://cors-anywhere.herokuapp.com/http://patientcheck-be.dhlbsite.com",y="en_GB",w="c-cta",_="c-hero",I="c-infolist-steps",q="c-infolist-tick-bullets",k=n(220),E=n.n(k);function C(e){return function(e){return E.a.get(e)}(N+"/api/config/".concat(e))}var S=g.a.mark(T),P=g.a.mark(F);function T(e){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(v.b)(C,e&&e.payload||y);case 3:return t=n.sent,n.next=6,Object(v.d)({type:b,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(v.d)((n.t0,{type:m}));case 12:case"end":return n.stop()}}),S,null,[[0,8]])}function F(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(x,T);case 2:case"end":return e.stop()}}),P)}var R=g.a.mark(G);function G(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.c)(F)]);case 2:case"end":return e.stop()}}),R)}var U=n(71),V=n(72),A=n(75),B=n(74),M=n(44),D=n(21),z=n.p+"static/media/hero-image.a877084f.png",J=n.p+"static/media/mobile-header.cc2e7d11.png",L=function(e){return Object(c.jsxs)("h2",{className:"text-4xl leading-10 font-bold not-italic text-base sm:base normal-case pb-4",children:[" ",e.children," "]})},H=function(e){return Object(c.jsxs)("p",{className:"normal-case leading-snug sm:leading-snug",children:[" ",e.children," "]})},K=(n(446),n(447),function(e){var t=e.data;return t&&Object(c.jsxs)("div",{children:[Object(c.jsxs)(L,{children:[" ",t.object.heading," "]}),Object(c.jsxs)(H,{children:[" ",t.object.description," "]})]})}),Q=function(){var e=Object(j.c)((function(e){return e.configuration}));if(Object(s.useEffect)((function(){}),[e]),!e.landingPage)return null;var t=e.landingPage.content.components.find((function(e){return"c-page-description"===e.id}));return t&&Object(c.jsx)(K,{data:t})},W=function(e){return e.data&&Object(c.jsxs)("div",{className:"mx-auto h-full flex sm:flex-wrap 2xl:align-middle 2xl:items-center hero px-20 sm:pb-0 md:pb-8 lg:pb-8  sm:px-5",children:[Object(c.jsx)("div",{className:"2xl:w-1/2 lg:w-1/2 md:w-full sm:w-full  text-left pt-12 pb-24 4xl:pb-0 sm:pb-0 order-1 sm:order-last sm:mt-1 sm:px-6 sm:pt-6 sm:pb-10 md:pb-10 md:px-4 hero__content 4xl:flex 4xl:items-center ",children:Object(c.jsx)("div",{children:Object(c.jsx)(Q,{})})}),Object(c.jsx)("div",{className:"4xl:w-full sm:w-full lg:w-1/2 lg:py-6 md:w-full items-end text-center order-2 sm:order-1 sm:h-auto sm:pb-0 hero",children:Object(c.jsxs)("picture",{children:[Object(c.jsx)("source",{media:"(min-width:768px)",srcSet:z}),Object(c.jsx)("source",{media:"(min-width:767px)",srcSet:J}),Object(c.jsx)("img",{src:z,alt:"Hero Img"})]})})]})},X=function(){var e=Object(j.c)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return e.id===_}));return n&&Object(c.jsx)(W,{data:n})},Y=n(112),Z=(n(449),function(e){var t=e.step,n=e.index,s=t||{},a=s.text;s.iconImage;return Object(c.jsxs)("div",{className:"infoliststeps__item mb-4",children:[Object(c.jsx)("div",{className:"infoliststeps__circle",children:Object(c.jsx)("div",{className:"infoliststeps__image my-3",children:Object(c.jsx)("img",{src:N+"/images/"+t["icon-image"],className:"logo mx-auto",alt:"logo"})})}),Object(c.jsxs)("div",{className:"infoliststeps__step text-center text-xl font-bold my-2 sm:mb-2",children:["Step ",n]}),Object(c.jsx)("div",{className:"infoliststeps__stepText text-center ",children:a})]},n)}),$=function(e){var t=(e.data||{}).object||{},n=t.heading,s=t.steps,a=Y.isIE?"ie-grid":"grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1";return Object(c.jsxs)("div",{className:"infoliststeps",children:[Object(c.jsxs)("div",{className:"infoliststeps__heading text-center font-bold md:text-3xl my-8",children:[Object(c.jsx)("h2",{children:n})," "]}),Object(c.jsx)("div",{className:"infoliststeps__content text-center ".concat(a),children:(s||[]).map((function(e,t){return Object(c.jsx)(Z,{step:e,index:t+1},t)}))})]})},ee=function(){var e=Object(j.c)((function(e){return e.configuration}));if(Object(s.useEffect)((function(){}),[e]),!e.landingPage)return null;var t=e.landingPage.content.components.find((function(e){return e.id===I}));return t&&Object(c.jsx)($,{data:t})},te=(n(450),function(e){var t=e.step,n=e.index,s=(t||{}).text;return Object(c.jsxs)("div",{className:"infolistbullets__item mb-4 pb-8",children:[Object(c.jsx)("div",{className:"infolistbullets__circle",children:Object(c.jsx)("div",{className:"infolistbullets__image my-3",children:Object(c.jsx)("img",{src:N+"/images/"+t["icon-image"],className:"logo mx-auto",alt:"tick"})})}),Object(c.jsx)("div",{className:"infolistbullets__bulletText text-center ",children:s})]},n)}),ne=function(e){var t=(e.data||{}).object||{},n=t.heading,s=t.steps,a=Y.isIE?"ie-grid":"grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1";return Object(c.jsxs)("div",{className:"infolistbullets",children:[Object(c.jsxs)("div",{className:"infolistbullets__heading text-center font-bold my-8 pt-8 md:pt-10",children:[Object(c.jsx)("h2",{children:n})," "]}),Object(c.jsx)("div",{className:"infolistbullets__content text-center ".concat(a),children:(s||[]).map((function(e,t){return Object(c.jsx)(te,{step:e,index:t+1},t)}))})]})},ce=function(){var e=Object(j.c)((function(e){return e.configuration}));if(Object(s.useEffect)((function(){}),[e]),!e.landingPage)return null;var t=e.landingPage.content.components.find((function(e){return e.id===q}));return t&&Object(c.jsx)(ne,{data:t})},se=(n(451),function(e){var t=e.data;return t&&Object(c.jsx)("div",{className:"cta-div text-center",children:Object(c.jsxs)("a",{className:"place-content-center capitalize mt-10 text-center mb-10 bg-primary-900  hover:bg-opacity-75 transition-colors duration-200 rounded-full font-semibold py-4 px-12 inline-flex cta",href:t.object.link,children:[t.object.text,t.object.iconImage&&""!==t.object.iconImage&&Object(c.jsx)("img",{className:"w-5 ml-2",src:t.object.iconImage,alt:t.object.text})]})})}),ae=function(){var e=Object(j.c)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return e.id===w}));return n&&Object(c.jsx)(se,{data:n})},re=function(e){var t=e.data,n=[];return t.landingPage.content.components.forEach((function(e){e.id===_&&n.push(Object(c.jsx)(X,{})),e.id===I&&n.push(Object(c.jsx)(ee,{})),e.id===q&&n.push(Object(c.jsx)(ce,{})),e.id===w&&n.push(Object(c.jsx)(ae,{}))})),Object(c.jsx)(c.Fragment,{children:n.map((function(e,t){return Object(c.jsxs)("div",{children:[" ",e]},t)}))})},ie=function(){var e=Object(j.c)((function(e){return e.configuration}));return Object(s.useEffect)((function(){}),[e]),e.landingPage?Object(c.jsx)(re,{data:e}):null},le=function(){return Object(c.jsx)("div",{className:"max-w-screen-2xl mx-auto",children:Object(c.jsx)(ie,{})})},oe=(n(143),function(){return Object(c.jsx)("div",{className:"survey-wrapper",children:Object(c.jsx)("div",{className:"survey-container",children:Object(c.jsxs)("div",{className:"survey pt-5 ",children:[Object(c.jsx)("div",{className:"image-wrapper text-center my-8 "}),Object(c.jsx)("div",{className:"fields-wrapper"})]})})})}),je=n(22),ue=n(40),de=(n(452),function(e){var t=e.data,n=N+"/images/"+t.image;return t&&Object(c.jsxs)("div",{className:"text-center ",children:[Object(c.jsxs)("div",{className:"section__title text-sm font-medium",children:["Section ",t.pageNumber," "]}),Object(c.jsxs)(L,{children:[" ",t.name," "]}),Object(c.jsx)("div",{className:"mx-auto max-w-3xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-3xl 3xl:max-w-3xl md:mx-auto lg:mx-auto 2xl:mx-auto 3xl:mx-auto px-8",children:Object(c.jsx)("img",{className:"text-center mx-auto",src:n,alt:"section-image"})})]})}),xe=n(116),be=n(115),me=function(e){var t=e.answerItem,n=e.questionIndex,s=e.answerIndex,a=e.handleOnChange,r=e.register,i=e.className;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("input",{id:"q_mcq".concat(n,"_").concat(s),type:"radio",name:"answer_".concat(n),value:t.text,onChange:function(e){return a(e,n,s)},defaultChecked:"true"===t.answered,ref:r({required:!0}),className:"radio"}),Object(c.jsxs)("label",{className:i,for:"q_mcq".concat(n,"_").concat(s),children:[t.text,Object(c.jsx)("span",{children:Object(c.jsx)(be.a,{})})]})]})},fe=function(e){var t=e.question,n=e.questionIndex,s=e.onValueChange,a=e.register,r=function(e,t,n){s(e,t,n)};return Object(c.jsx)("ul",{className:"card",children:Object(c.jsxs)("label",{className:"control-label",htmlFor:"answer_".concat(n),children:[Object(c.jsx)("h2",{className:"question-title text-center sm:text-left text-poppins text-app-900 text-xl font-semibold",children:t.question}),Object(c.jsx)("br",{}),t.answer.map((function(e,t){return Object(c.jsx)("li",{className:"mutliple-choice-fields",onClick:function(e){return r(e,n,t)},children:"true"===e.answered?Object(c.jsx)(me,{answerItem:e,questionIndex:n,answerIndex:t,handleOnChange:r,register:a,className:"label-selected"}):Object(c.jsx)(me,{answerItem:e,questionIndex:n,answerIndex:t,handleOnChange:r,register:a,className:"label-unselected"})},t)}))]})})},pe=function(e){var t=e.question,n=e.questionIndex,s=e.onValueChange,a=e.register;return Object(c.jsx)("div",{className:"card",children:Object(c.jsxs)("label",{className:"control-label",htmlFor:"answer_".concat(n),children:[Object(c.jsx)("h2",{className:"question-title text-center sm:text-left text-poppins text-app-900 text-xl font-semibold",children:t.question}),Object(c.jsx)("br",{}),Object(c.jsx)("ul",{className:"yes-no-field",children:t.answer.map((function(e,t){return Object(c.jsxs)("li",{className:"yes-no-field__li",children:[Object(c.jsx)("input",{id:"q_mcq".concat(n,"_").concat(t),type:"radio",name:"answer_".concat(n),value:e.text,onChange:function(e){return function(e,t,n){s(e,t,n)}(e,n,t)},defaultChecked:"true"==e.answered,ref:a({"\u0153":!0}),className:"yes-no-field__radio"}),Object(c.jsxs)("label",{className:"yes-no-field__label",for:"q_mcq".concat(n,"_").concat(t),children:[Object(c.jsx)("span",{className:"yes-no-field__span",children:Object(c.jsx)(be.a,{})}),e.text]})]},t)}))})]})})},Oe=n(113),he=n.n(Oe),ge=function(){var e=Object(D.g)(),t=Object(xe.a)(),n=t.register,r=(t.handleSubmit,t.errors,Object(j.c)((function(e){return e.configuration}))),i=(Object(D.f)(),Object(s.useState)([])),l=Object(ue.a)(i,2),o=l[0],u=l[1],d=Object(s.useState)({}),x=Object(ue.a)(d,2),b=x[0],m=x[1],p=Object(j.b)(),O=Object(j.c)((function(e){return e.currentSectionNumber})),h=Object(D.g)().pathname,g=he.a.parse(e.search),v="",N=r.survey;(a.a.useEffect((function(){if(h){var e=h.split("section/");p((t=e[1].substring(0,1),{type:f,payload:t}))}var t;if(N){var n=N.content.components.find((function(e){return"c-survey"===e.id})).object.sections[parseInt(O)-1],c=n.questions;u(c),m({pageNumber:O&&parseInt(O)||1,name:n.name,image:n.hero[0].image.Desktop})}}),[e,O,r,o]),N)&&(v=N.content.components.find((function(e){return"c-survey"===e.id})).object.sections[parseInt(O)]?"/survey/section/"+(parseInt(O)+1)+"/?locale="+g.locale:"/survey/results");if(!N)return null;var y=function(e,t,n){var c=Object.assign([],Object(je.a)(o)),s=c[t].answer.map((function(e,t){return e.answered=t===n?"true":"false",e}));c[t].answer=s,u(c)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(de,{data:b}),Object(c.jsxs)("div",{children:[o.map((function(e,t){return Object(c.jsx)("div",{className:"mx-auto max-w-3xl md:max-w-3xl lg:max-w-3xl 2xl:max-w-3xl 3xl:max-w-3xl md:mx-auto lg:mx-auto 2xl:mx-auto 3xl:mx-auto px-8",children:Object(c.jsxs)("div",{children:["q_mcq"===e.id&&Object(c.jsx)(fe,{question:e,questionIndex:t,onValueChange:y,register:n}),"q_yes_no"===e.id&&Object(c.jsx)(pe,{question:e,questionIndex:t,onValueChange:y,register:n})]},t)})})),Object(c.jsx)("div",{className:"next-btn-wrapper flex w-full text-center py-10 justify-center mt-16",children:Object(c.jsx)(M.b,{className:"w-1/5 sm:w-1/2 md:w-1/2 lg:w-1/3 py-3 rounded-full btn-primary font-semibold text-poppins text-base block",to:v,children:"Next"})})]})]})},ve=function(){return Object(c.jsx)("div",{className:"survey-wrapper",children:Object(c.jsx)("div",{className:"survey-container",children:Object(c.jsxs)("div",{className:"survey pt-5 ",children:[Object(c.jsx)("div",{className:"image-wrapper text-center my-8 "}),Object(c.jsx)("div",{className:"fields-wrapper",children:Object(c.jsx)(ge,{})})]})})})},Ne=function(){var e=Object(xe.a)(),t=(e.register,e.handleSubmit,e.errors,Object(j.c)((function(e){return e.configuration}))),n=(Object(D.f)(),Object(s.useState)([])),a=Object(ue.a)(n,2),r=a[0],i=a[1],l=Object(s.useState)({}),o=Object(ue.a)(l,2),u=(o[0],o[1],Object(j.b)(),t.survey);return Object(s.useEffect)((function(){if(console.info("useEffect configuration page resulsts ",t),u){var e=u.content.components.find((function(e){return"c-survey"===e.id})).object.sections;i(e),console.info("aaA: ",e)}}),[t]),u?Object(c.jsx)("div",{className:"text-center",children:r.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("strong",{children:e.name})}),e.questions.map((function(e){var t=e.answer.find((function(e){return"true"===e.answered}));console.log("data",t);var n=!t||"T2"!==t.score&&"T3"!==t.score?"":"-"+t.scoreMessage;return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:n})})}))]})}))}):null},ye=function(){return Object(c.jsx)("div",{className:"survey-wrapper",children:Object(c.jsx)("div",{className:"survey-container",children:Object(c.jsxs)("div",{className:"survey pt-5 ",children:[Object(c.jsx)("div",{className:"image-wrapper text-center my-8 "}),Object(c.jsx)("div",{className:"fields-wrapper",children:Object(c.jsx)(Ne,{})})]})})})},we=(n(457),n.p+"static/media/logo.4dc48088.svg"),_e=function(e){var t=Object(D.g)().search,n=(he.a.parse(t)||{}).locale,s=n||y;return Object(c.jsx)("header",{className:"header pt-12 sm:pt-6 md:pt-12 lg:pt-12 2xl:pt-12 3xl:pt-12 px-20 sm:px-10 md:px-20 xl:px-20 lg:px-20 2xl:px-20 3xl:px-20 4xl:px-20",children:Object(c.jsx)("div",{className:"header__container",children:Object(c.jsx)(M.b,{to:"/?locale=".concat(s),children:Object(c.jsx)("img",{src:we,className:"logo",alt:"logo"})})})})},Ie=(n(458),function(e){var t=e.data;return Object(c.jsx)(s.Fragment,{children:(t||[]).length>0?Object(c.jsx)("footer",{className:"mx-auto",children:Object(c.jsx)("div",{className:"py-3 flex md:flex md:items-center md:justify-center ",children:Object(c.jsx)("ul",{className:"w-full text-center",children:(t||[]).map((function(e,n){var s=e||{},a=s.name,r=s.text,i=(t||[]).length===n+1?"border-0":"border-r";return Object(c.jsx)("li",{className:"px-4 sm:px-3 ".concat(i," capitalize inline leading-7 text-sm"),children:Object(c.jsx)("a",{className:"text-sm font-poppins",href:a,children:r})},n)}))})})}):""})}),qe=function(){var e=Object(j.c)((function(e){return e.configuration}));if(Object(s.useEffect)((function(){}),[e]),!e.content)return null;var t=[];e.content.content.labels.sections.forEach((function(e,n){var c=e||{},s=c.name,a=c.translations;"clickables"===s&&t.push(a)}));var n=["privacy","cookies","terms"],a=(t[0]||[]).filter((function(e){return-1!==n.indexOf(e.name)}));return Object(c.jsx)(Ie,{data:a})},ke=n(114),Ee=function(e){Object(A.a)(n,e);var t=Object(B.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"application",children:Object(c.jsxs)(ke.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"Gilead Survey"}),Object(c.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(c.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",rel:"stylesheet"})]})})}}]),n}(a.a.Component),Ce=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"max-w-screen-2xl mx-auto",children:[Object(c.jsx)(Ee,{}),Object(c.jsx)(_e,{}),t,Object(c.jsx)(qe,{})]})},Se=function(e){Object(A.a)(n,e);var t=Object(B.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"application",children:Object(c.jsxs)(ke.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"Gilead Survey"}),Object(c.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(c.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",rel:"stylesheet"})]})})}}]),n}(a.a.Component),Pe=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"max-w-screen-2xl mx-auto",children:[Object(c.jsx)(Se,{}),Object(c.jsx)(_e,{}),t,Object(c.jsx)(qe,{})]})},Te=function(e){Object(A.a)(n,e);var t=Object(B.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(c.jsx)(M.a,{children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{path:"/survey/:path/:n?",exact:!0,children:Object(c.jsx)(Pe,{children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{path:"/survey",exact:!0,component:oe}),Object(c.jsx)(D.a,{path:"/survey/section/:sectionNumber",component:ve}),Object(c.jsx)(D.a,{path:"/survey/results",exact:!0,component:ye}),Object(c.jsx)(D.a,{component:function(){return Object(c.jsx)("div",{className:"container",children:"404 Main Survey"})},exact:!0,path:"/survey/*"})]})})}),Object(c.jsx)(D.a,{children:Object(c.jsx)(Ce,{children:Object(c.jsxs)(D.c,{children:[Object(c.jsx)(D.a,{path:"/",exact:!0,component:le}),Object(c.jsx)(D.a,{component:function(){return Object(c.jsx)("div",{className:"container",children:"404 Main"})},exact:!0,path:"/*"})]})})})]})})}}]),n}(s.Component),Fe=function(){return Object(c.jsx)(Te,{})},Re=(n(459),window.location.href.split("?")[1].split("=")[1]),Ge=Object(l.a)(),Ue=Object(o.d)(O,Object(o.a)(Ge));Ge.run(G),Ue.dispatch({type:x,payload:Re}),i.a.render(Object(c.jsx)(j.a,{store:Ue,children:Object(c.jsx)(Fe,{})}),document.getElementById("root")),u()}},[[460,1,2]]]);
//# sourceMappingURL=main.0340b69f.chunk.js.map