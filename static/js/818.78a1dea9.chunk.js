"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{5785:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var a=n(9439),r=n(2791),o=n(9434),c=n(1205),i=n(1413),s="add-button_button__eKi4A",d=n(3329),u=function(t){var e=t.onBtnClick,n=t.props;return(0,d.jsx)("button",(0,i.Z)({className:s,onClick:e},n))},l=n(4274),m=function(t){return t.transaction.categories},p=n(158),h={wrapper:"toggle-button_wrapper__gTPXH",switch:"toggle-button_switch__fUAC9",checked:"toggle-button_checked__0nEhj",slider:"toggle-button_slider__m+yY+",round:"toggle-button_round__B7MoG"},f=function(t){var e=t.getChecked,n=t.onClick,o=(0,r.useState)(!1),c=(0,a.Z)(o,2),i=c[0],s=c[1],u=i?"".concat(h.switch," ").concat(h.checked):h.switch;return(0,d.jsx)("div",{className:h.wrapper,children:(0,d.jsxs)("label",{className:u,children:[(0,d.jsx)("input",{className:h.checkbox,type:"checkbox",checked:i,onChange:function(){if(e(i),i)return n({type:"type",data:"INCOME"}),void s((function(t){return!t}));n({type:"type",data:"EXPENSE"}),s((function(t){return!t}))}}),(0,d.jsx)("span",{className:h.slider+" "+h.round})]})})},g=n(9976),x=n(7978),_=function(t){var e=(0,r.useState)(!1),n=(0,a.Z)(e,2),o=n[0],c=n[1];return(0,r.useEffect)((function(){var e=window.matchMedia(t);e.matches!==o&&c(e.matches);var n=function(){return c(e.matches)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[o,t]),o},v=function(t){return(0,d.jsx)(x.c.DropdownIndicator,(0,i.Z)((0,i.Z)({},t),{},{children:(0,d.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))},y=function(t){var e=t.options,n=void 0===e?[]:e,o=t.onChange,c=_("(min-width: 479px)"),s=(0,r.useState)({label:"Select category",value:""}),u=(0,a.Z)(s,2),l=u[0],m=u[1];return(0,d.jsx)(g.ZP,{options:n,maxMenuHeight:157,components:{DropdownIndicator:v},value:l,onChange:function(t){m(t),o({type:"category",data:t.value})},styles:{control:function(t){return(0,i.Z)((0,i.Z)({},t),{},{width:c?"160px":"100%",height:"50px",border:"1px solid #000000",borderRadius:"30px",cursor:"pointer",transition:"background-color 400ms",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},indicatorsContainer:function(){return{paddingRight:"10px"}},dropdownIndicator:function(t,e){return(0,i.Z)((0,i.Z)({},t),{},{transform:e.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},valueContainer:function(t){return(0,i.Z)((0,i.Z)({},t),{},{paddingLeft:"16px"})},singleValue:function(t){return(0,i.Z)((0,i.Z)({},t),{},{fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)"})},menu:function(t){return(0,i.Z)((0,i.Z)({},t),{},{width:c?"160px":"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px"})},option:function(t,e){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"16px",lineHeight:"calc(24 / 16)",cursor:"pointer",":hover":{backgroundColor:e.isSelected?"":"white"},backgroundColor:e.isSelected?"#24CCA7":"",color:e.isSelected?"#ffffff":"#000000"}},menuList:function(t){return(0,i.Z)((0,i.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},b=n(9513),j=n.n(b),w=n(9040),C=function(t){var e=t,n=e.getDate()<10?e.getDate().toString().padStart(2,0):e.getDate(),a=e.getMonth()<10?(e.getMonth()+1).toString().padStart(2,0):e.getMonth()+1,r=e.getFullYear();return"".concat(r,"-").concat(a,"-").concat(n)};var Z=n.p+"static/media/calendary.30bf32a7a4348ede2ce910569aedc915.svg",k=(n(8639),"calendar_field__pFy3H"),S="calendar_inputBox__MTg5O",N="calendar_icon__givQr",D=function(t){var e=t.onChange,n=(0,r.useState)(new Date),o=(0,a.Z)(n,2),c=o[0],i=o[1],s=(0,r.forwardRef)((function(t,e){var n=t.value,a=t.onClick;return(0,d.jsxs)("div",{className:S,children:[(0,d.jsx)("img",{className:N,src:Z,alt:"Calendar icon"}),(0,d.jsx)("button",{className:k,type:"button",onClick:a,ref:e,children:n})]})}));return(0,d.jsx)(j(),{showIcon:!0,selected:c,onChange:function(t){i(t),e({type:"date",data:C(t)})},customInput:(0,d.jsx)(s,{}),dateFormat:"dd.MM.yyyy",maxDate:(0,w.default)(new Date,0)})},I=n(4925),L="primary-button_button__YlxDi",T=["children"],B=function(t){var e=t.children,n=(0,I.Z)(t,T);return(0,d.jsx)("button",(0,i.Z)((0,i.Z)({className:L},n),{},{children:e}))},E="secondary-button_button__pH-kF",M=["children","onBtnClick"],P=function(t){var e=t.children,n=t.onBtnClick,a=(0,I.Z)(t,M);return(0,d.jsx)("button",(0,i.Z)((0,i.Z)({className:E,onClick:n},a),{},{children:e}))},F={transactionDate:C(new Date),type:"INCOME",categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",comment:"",amount:""},A="add-transaction-form_title__SjWKx",H="add-transaction-form_form__LgtGB",R="add-transaction-form_field__TQA7h",G="add-transaction-form_wrapper__5-Fxj",O="add-transaction-form_box__7ENrd",X=function(t){var e=t.onSubmit,n=t.setShowModal,c=(0,r.useState)(!0),i=(0,a.Z)(c,2),s=i[0],u=i[1],l=(0,p.Z)({initialState:F,onSubmit:e}),h=l.state,g=l.handleChange,x=l.handleDataChange,_=l.handleSubmit,v=(0,o.v9)(m).map((function(t){var e=t.id;return{label:t.name,value:e}})),b=h.comment,j=h.amount;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:A,children:"Add transaction"}),(0,d.jsxs)("form",{onSubmit:_,className:H,children:[(0,d.jsx)(f,{getChecked:function(t){u(t)},onClick:x}),!s&&(0,d.jsx)(y,{options:v,onChange:x}),(0,d.jsxs)("div",{className:G,children:[(0,d.jsx)("input",{className:R,name:"amount",type:"text",value:j,placeholder:"0.00",required:!0,onChange:g}),(0,d.jsx)(D,{onChange:x})]}),(0,d.jsx)("input",{className:R,name:"comment",type:"text",value:b,placeholder:"Comment",onChange:g}),(0,d.jsxs)("div",{className:O,children:[(0,d.jsx)(B,{children:"Add"}),(0,d.jsx)(P,{onBtnClick:function(){n(!1)},children:"Cancel"})]})]})]})},z="home-page_wrapper__bK12s";var K=n.p+"static/media/edit-02.bb8574415ac50161324284392ae9af00.svg",Q={item:"TransactionsListItem_item__2cJuc",leftBox:"TransactionsListItem_leftBox__ce6rj",rightBox:"TransactionsListItem_rightBox__9kbcH",svg:"TransactionsListItem_svg__LRKGX",comment:"TransactionsListItem_comment__TAPk9",sum:"TransactionsListItem_sum__5Aw2P",type:"TransactionsListItem_type__f-SmD",category:"TransactionsListItem_category__koP2G",date:"TransactionsListItem_date__Qj-Tk"},W=function(t){var e=t.category,n=t.sum,a=t.date,r=t.type,o=t.comment,c="income"===r?"+":"-";return(0,d.jsxs)("li",{className:Q.item,children:[(0,d.jsxs)("div",{className:Q.leftBox,children:[(0,d.jsx)("p",{className:Q.date,children:a}),(0,d.jsx)("p",{className:Q.type,children:c}),(0,d.jsx)("p",{className:Q.category,children:e}),(0,d.jsx)("p",{className:Q.comment,children:o}),(0,d.jsx)("span",{className:Q.sum,children:n})]}),(0,d.jsxs)("div",{className:Q.rightBox,children:[(0,d.jsx)("img",{src:K,alt:"",className:Q.svg}),(0,d.jsx)("button",{className:Q.btn,children:"Delete"})]})]})},Y=JSON.parse('[{"id":1,"date":"01.01.23","type":"income","category":"Products","comment":"watever","sum":100},{"id":2,"date":"01.01.23","type":"EXPENSE","category":"Products","comment":"watever","sum":1000},{"id":3,"date":"01.01.23","type":"EXPENSE","category":"Other","comment":"Gift for your wife","sum":5000000000},{"id":4,"date":"01.01.23","type":"income","category":"Car","comment":"Watever","sum":1000},{"id":5,"date":"01.01.23","type":"income","category":"Products","comment":"Vagetables for the week","sum":1000},{"id":6,"date":"01.01.23","type":"income","category":"Car for you and me","comment":"watever","sum":1000},{"id":7,"date":"01.01.23","type":"income","category":"Car","comment":"watever","sum":1000}]'),J={title:"TransactionsList_title__WxhBO"},V=function(){var t=Y.map((function(t){return(0,d.jsx)(W,{category:t.category,sum:t.sum,date:t.date,type:t.type,comment:t.comment},t.id)}));return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:J.title,children:[(0,d.jsx)("p",{children:"Date"}),(0,d.jsx)("p",{children:"Type"}),(0,d.jsx)("p",{children:"Category"}),(0,d.jsx)("p",{children:"Comment"}),(0,d.jsx)("p",{children:"Sum"})]}),(0,d.jsx)("div",{className:J.list_box,children:(0,d.jsx)("ul",{className:J.list,children:t})})]})},q=function(){var t=(0,r.useState)(!1),e=(0,a.Z)(t,2),n=e[0],i=e[1],s=(0,o.I0)();(0,r.useEffect)((function(){s((0,c.tG)())}),[s]);return(0,d.jsxs)("div",{className:z,children:[(0,d.jsx)("p",{children:"Home page"}),(0,d.jsx)(u,{type:"button",onBtnClick:function(){i(!0)}}),(0,d.jsx)(V,{}),n&&(0,d.jsx)(l.Z,{onClose:function(){i(!1)},children:(0,d.jsx)(X,{onSubmit:function(t){console.log("formData",t),s((0,c.dT)(t)),i(!1)},setShowModal:i})})]})}},158:function(t,e,n){var a=n(4942),r=n(1413),o=n(9439),c=n(2791);e.Z=function(t){var e=t.initialState,n=t.onSubmit,i=(0,c.useState)((0,r.Z)({},e)),s=(0,o.Z)(i,2),d=s[0],u=s[1];return{state:d,setState:u,handleChange:function(t){var e=t.target;u((function(t){var n=e.name,o=e.value,c=e.checked,i="checkbox"===e.type?c:o;return(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},n,i))}))},handleDataChange:function(t){var e=t.type,n=t.data;"date"===e&&u((function(t){return(0,r.Z)((0,r.Z)({},t),{},{transactionDate:n})})),"type"===e&&u((function(t){return(0,r.Z)((0,r.Z)({},t),{},{type:n})})),"category"===e&&u((function(t){return(0,r.Z)((0,r.Z)({},t),{},{categoryId:n})}))},handleSubmit:function(t){t.preventDefault(),n((0,r.Z)({},d)),u((0,r.Z)({},e))}}}}}]);
//# sourceMappingURL=818.78a1dea9.chunk.js.map