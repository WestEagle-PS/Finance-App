"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[245],{8029:function(t,e,n){n.r(e),n.d(e,{default:function(){return Ht}});var a=n(9439),i=n(2791),s=n(9434),r=n(2423),c=n(1413),o="add-button_button__eKi4A",l=n(3329),d=function(t){var e=t.onBtnClick,n=t.props;return(0,l.jsx)("button",(0,c.Z)({className:o,onClick:e},n))},u=n(4274),m=n(106),h=n(4942),x=n(2007),_=n.n(x),p=function(t){var e=t.initialState,n=t.onSubmit,s=(0,i.useState)((0,c.Z)({},e)),r=(0,a.Z)(s,2),o=r[0],l=r[1];return{state:o,setState:l,handleChange:function(t){var e=t.target;l((function(t){var n=e.name,a=e.value,i=e.checked,s="checkbox"===e.type?i:a;return(0,c.Z)((0,c.Z)({},t),{},(0,h.Z)({},n,s))}))},handleDataChange:function(t){var e=t.type,n=t.data;"date"===e&&l((function(t){return(0,c.Z)((0,c.Z)({},t),{},{transactionDate:n})})),"type"===e&&l((function(t){return(0,c.Z)((0,c.Z)({},t),{},{type:n})})),"category"===e&&l((function(t){return(0,c.Z)((0,c.Z)({},t),{},{categoryId:n})}))},handleSubmit:function(t){t.preventDefault(),n((0,c.Z)({},o)),l((0,c.Z)({},e))}}},f=p;p.propTypes={initialState:_().object.isRequired,onSubmit:_().func.isRequired};var j={wrapper:"toggle-button_wrapper__gTPXH",switch:"toggle-button_switch__fUAC9",checked:"toggle-button_checked__0nEhj",slider:"toggle-button_slider__m+yY+",round:"toggle-button_round__B7MoG"},g=function(t){var e=t.getChecked,n=t.onClick,s=(0,i.useState)(!1),r=(0,a.Z)(s,2),c=r[0],o=r[1],d=c?"".concat(j.switch," ").concat(j.checked):j.switch;return(0,l.jsx)("div",{className:j.wrapper,children:(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("input",{className:j.checkbox,type:"checkbox",checked:c,onChange:function(){if(e(c),c)return n({type:"type",data:"INCOME"}),void o((function(t){return!t}));n({type:"type",data:"EXPENSE"}),o((function(t){return!t}))}}),(0,l.jsx)("span",{className:j.slider+" "+j.round})]})})},v=n(9976),b=n(3177),N=function(t){var e=t.options,n=void 0===e?[]:e,s=t.onChange,r=(0,i.useState)(null),o=(0,a.Z)(r,2),d=o[0],u=o[1];return(0,l.jsx)(v.ZP,{options:n,components:{DropdownIndicator:b.Z},value:d,placeholder:"Select a category",onChange:function(t){u(t),s({type:"category",data:t.value})},styles:{placeholder:function(t){return(0,c.Z)((0,c.Z)({},t),{},{fontFamily:"CirceRegular",color:"#BDBDBD",fontSize:"18px",lineHeight:"calc(27 / 18)"})},control:function(t){return(0,c.Z)((0,c.Z)({},t),{},{width:"100%",height:"32px",border:"none",borderBottom:"1px solid #E0E0E0",cursor:"pointer",backgroundColor:"transparent","&:hover":null,boxShadow:"none"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(t,e){return(0,c.Z)((0,c.Z)({},t),{},{transform:e.isFocused?"rotate(180deg)":"",transition:"transform 400ms"})},singleValue:function(t){return(0,c.Z)((0,c.Z)({},t),{},{fontFamily:"CirceRegular",color:"#000000",fontSize:"18px",lineHeight:"calc(27 / 18)"})},menu:function(t){return(0,c.Z)((0,c.Z)({},t),{},{margin:0,width:"100%",padding:"12px 0",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:"20px",overflow:"hidden"})},option:function(t,e){return{paddingTop:"8px",paddingBottom:"8px",paddingLeft:"20px",fontFamily:"CirceRegular",fontSize:"18px",lineHeight:"calc(27 / 18)",display:"flex",alignItems:"center",cursor:"pointer",":hover":{backgroundColor:e.isSelected?"":"white",color:"#FF6596"},color:e.isSelected?"#FF6596":"#000000"}},menuList:function(t){return(0,c.Z)((0,c.Z)({},t),{},{"::-webkit-scrollbar":{width:"0px",height:"0px"}})}}})},S=n(4925),Z="simple-field_formGroup__tqFfT",y="simple-field_field__mYIDS",C="simple-field_iconField__x33ev",k="simple-field_centered__jNO4b",w=["value","centered","icon"],D=function(t){var e=t.value,n=void 0===e?"":e,a=t.centered,i=void 0!==a&&a,s=t.icon,r=(0,S.Z)(t,w),o=y;return s&&(o=o+" "+C),i&&(o=o+" "+k),(0,l.jsxs)("div",{className:Z,children:[(0,l.jsx)("input",(0,c.Z)({className:o,value:n},r)),s]})},I=n(9513),T=n.n(I),L=n(9040),E=function(t){var e=t,n=e.getDate()<10?e.getDate().toString().padStart(2,0):e.getDate(),a=e.getMonth()<10?(e.getMonth()+1).toString().padStart(2,0):e.getMonth()+1,i=e.getFullYear();return"".concat(i,"-").concat(a,"-").concat(n)};var M=n.p+"static/media/calendary.30bf32a7a4348ede2ce910569aedc915.svg",F=(n(8639),"calendar_field__pFy3H"),B="calendar_inputBox__MTg5O",A="calendar_icon__givQr",O=function(t){var e=t.stateDate,n=t.onChange,s=(0,i.useState)(new Date(e)),r=(0,a.Z)(s,2),c=r[0],o=r[1],d=(0,i.forwardRef)((function(t,e){var n=t.value,a=t.onClick;return(0,l.jsxs)("div",{className:B,children:[(0,l.jsx)("img",{className:A,src:M,alt:"Calendar icon"}),(0,l.jsx)("button",{className:F,type:"button",onClick:a,ref:e,children:n})]})}));return(0,l.jsx)(T(),{showIcon:!0,selected:c,onChange:function(t){o(t),n({type:"date",data:E(t)})},customInput:(0,l.jsx)(d,{}),dateFormat:"dd.MM.yyyy",maxDate:(0,L.default)(new Date,0)})},H=n(202),P="secondary-button_button__pH-kF",Q=["children","onBtnClick"],R=function(t){var e=t.children,n=t.onBtnClick,a=(0,S.Z)(t,Q);return(0,l.jsx)("button",(0,c.Z)((0,c.Z)({className:P,onClick:n},a),{},{children:e}))},Y={transactionDate:E(new Date),type:"INCOME",categoryId:"063f1132-ba5d-42b4-951d-44011ca46262",comment:"",amount:""},q="add-transaction-form_title__SjWKx",G="add-transaction-form_form__LgtGB",K="add-transaction-form_field__TQA7h",X="add-transaction-form_wrapper__5-Fxj",z="add-transaction-form_box__7ENrd",J="add-transaction-form_type__pMFfQ",W="add-transaction-form_income__DJuca",U="add-transaction-form_expense__F2o6j",V="add-transaction-form_inputBox__alIk5",$="add-transaction-form_icon__90jgj",tt=function(t){var e=t.initialState,n=void 0===e?Y:e,r=t.isEdit,c=void 0!==r&&r,o=t.onSubmit,d=t.setShowModal,u=t.titleEdit,h=(0,i.useState)(!0),x=(0,a.Z)(h,2),_=x[0],p=x[1],j=f({initialState:n,onSubmit:o}),v=j.state,b=j.handleChange,S=j.handleDataChange,Z=j.handleSubmit,y=(0,s.v9)(m.us).filter((function(t){return"Income"!==t.name})),C=y.map((function(t){var e=t.id;return{label:t.name,value:e}})),k=v.transactionDate,w=v.type,I=v.comment,T=v.amount,L=v.categoryId,E=y.find((function(t){return t.id===L})),F="INCOME"===w?W:J,B="EXPENSE"===w?U:J;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:q,children:u||"Add transaction"}),(0,l.jsxs)("form",{onSubmit:Z,className:G,children:[c?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:J,children:[(0,l.jsx)("span",{className:F,children:"Income"})," / ",(0,l.jsx)("span",{className:B,children:"Expense"})]}),"EXPENSE"===w&&(0,l.jsx)("input",{className:K,name:"categoryId",type:"text",value:E.name,disabled:!0})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{getChecked:function(t){p(t)},onClick:S}),!_&&(0,l.jsx)(N,{options:C,onChange:S})]}),(0,l.jsxs)("div",{className:X,children:[(0,l.jsx)(D,{className:K,name:"amount",type:"number",value:T,placeholder:"0.00",centered:!0,required:!0,onChange:b}),c?(0,l.jsxs)("div",{className:V,children:[(0,l.jsx)("img",{className:$,src:M,alt:"Calendar icon"}),(0,l.jsx)(D,{name:"transactionDate",type:"text",value:k,disabled:!0})]}):(0,l.jsx)(O,{stateDate:k,onChange:S})]}),(0,l.jsx)(D,{name:"comment",type:"text",value:I,placeholder:"Comment",onChange:b}),(0,l.jsxs)("div",{className:z,children:[(0,l.jsx)(H.Z,{children:c?"Save":"Add"}),(0,l.jsx)(R,{onBtnClick:function(){d(!1)},children:"Cancel"})]})]})]})},et="home-page_wrapper__bK12s",nt=n(3433),at="edit-button_button__Yx4Lp",it="edit-button_label__aO0tA",st=function(t){var e=t.id,n=t.onClick;return(0,l.jsx)("button",{className:at,onClick:function(){n(e)},children:(0,l.jsx)("span",{className:it,children:"Edit"})})},rt="delete-button_button__NgmWc",ct=function(t){var e=t.id,n=t.onClick;return(0,l.jsx)("button",{className:rt,onClick:function(t){n(e)},children:"Delete"})},ot="TransactionsListItem_item__2cJuc",lt="TransactionsListItem_leftBox__ce6rj",dt="TransactionsListItem_rightBox__9kbcH",ut="TransactionsListItem_comment__TAPk9",mt="TransactionsListItem_sum__5Aw2P",ht="TransactionsListItem_type__f-SmD",xt="TransactionsListItem_category__koP2G",_t="TransactionsListItem_date__Qj-Tk",pt="TransactionsListItem_greenSum__Qn1cd",ft="TransactionsListItem_redSum__PO3vo",jt=n(6098),gt=n.n(jt),vt=function(t){var e=t.id,n=t.category,a=t.sum,i=t.date,s=t.type,r=t.comment,c=t.onEditBtnClick,o=t.onDeleteBtnClick,d=gt()(a).format("0,00.00").replaceAll(",","\xa0"),u="INCOME"===s?"+":"-",m=new Date(i),h=m.getDate().toString().padStart(2,"0"),x=(m.getMonth()+1).toString().padStart(2,"0"),_=m.getFullYear().toString().slice(-2),p="".concat(h,".").concat(x,".").concat(_);return(0,l.jsxs)("li",{className:ot,children:[(0,l.jsxs)("div",{className:lt,children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:_t,children:p})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:ht,children:u})}),(0,l.jsx)("div",{children:(0,l.jsxs)("p",{className:xt,children:[" ",null!==n&&void 0!==n&&n.name?n.name:"Unknown"]})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:ut,children:r})})]}),(0,l.jsx)("div",{className:mt,children:(0,l.jsx)("span",{className:"+"===u?pt:ft,children:d})}),(0,l.jsxs)("div",{className:dt,children:[(0,l.jsx)(st,{onClick:function(){return c(e)}}),(0,l.jsx)(ct,{onClick:function(){return o(e)}})]})]})},bt=n(1433),Nt={title:"TransactionsList_title__WxhBO",img:"TransactionsList_img__Ao3ri",titleText:"TransactionsList_titleText__-LLND",textLover:"TransactionsList_textLover__etjZW"},St=n(9953),Zt=(n(6035),function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],o=e[1],d=(0,i.useState)({}),h=(0,a.Z)(d,2),x=h[0],_=h[1],p=(0,i.useState)(null),f=(0,a.Z)(p,2),j=f[0],g=f[1],v=(0,i.useState)(!1),b=(0,a.Z)(v,2),N=b[0],S=b[1],Z=(0,s.I0)(),y=(0,s.v9)(m.aQ),C=(0,s.v9)(m.us),k=function(t){o(!0);var e=y&&y.find((function(e){return e.id===t}));g(e.amount),(null===e||void 0===e?void 0:e.amount)<0?_((function(){_((0,c.Z)((0,c.Z)({},e),{},{amount:-1*e.amount}))})):_(e),S(!0)},w=function(t){var e=y.find((function(e){return e.id===t}));Z((0,r.Ks)(e))},D=(0,nt.Z)(y);D.sort((function(t,e){var n=new Date(t.transactionDate);return new Date(e.transactionDate).getTime()-n.getTime()}));var I=D&&D.map((function(t){var e=t.id,n=t.transactionDate,a=t.type,i=t.categoryId,s=t.comment,r=t.amount,c=C&&C.find((function(t){return t.id===i}));return r&&r<0&&(r*=-1),(0,l.jsx)(vt,{id:e,category:c,sum:r,date:n,type:a,comment:s,onEditBtnClick:k,onDeleteBtnClick:w},e)})),T=0===D.length?(0,l.jsxs)("div",{className:Nt.boxNotFound,children:[(0,l.jsx)("p",{className:Nt.titleText,children:"No Transactions yet"}),(0,l.jsx)("p",{className:Nt.textLover,children:"Start transactions with your wallet.All transactions made will be displayed here."}),(0,l.jsx)("img",{src:bt,alt:"no transaction",className:Nt.img})]}):(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:Nt.title,children:[(0,l.jsx)("p",{children:"Date"}),(0,l.jsx)("p",{children:"Type"}),(0,l.jsx)("p",{children:"Category"}),(0,l.jsx)("p",{children:"Comment"}),(0,l.jsx)("p",{children:"Sum"})]}),(0,l.jsxs)(St.Z,{style:{maxHeight:"60vh"},children:[" ",(0,l.jsxs)("div",{className:Nt.list_box,children:[(0,l.jsx)("ul",{className:Nt.list,children:I}),N&&(0,l.jsx)(u.Z,{onClose:function(){S(!1)},children:(0,l.jsx)(tt,{titleEdit:"Edit transaction",initialState:x,isEdit:n,onSubmit:function(t){var e=(0,c.Z)((0,c.Z)({},t),{},{oldAmount:j});Z((0,r.qJ)(e)),S(!1)},setShowModal:S})})]})]})]});return(0,l.jsxs)(l.Fragment,{children:[" ",T]})}),yt="TransactionsListMobileItem_box__vlaiC",Ct="TransactionsListMobileItem_table__htwQH",kt="TransactionsListMobileItem_tbody__F5pGd",wt="TransactionsListMobileItem_body__9HSOO",Dt="TransactionsListMobileItem_head__F5jZr",It="TransactionsListMobileItem_green__zOM+Z",Tt="TransactionsListMobileItem_red__aXhID",Lt="TransactionsListMobileItem_greenSum__LLgfR",Et="TransactionsListMobileItem_redSum__Lbaj7",Mt="TransactionsListMobileItem_editBox__TIfdZ",Ft=function(t){var e=t.id,n=t.category,a=t.sum,i=t.date,s=t.type,r=t.comment,c=t.onEditBtnClick,o=t.onDeleteBtnClick,d=gt()(a).format("0,00.00").replaceAll(",","\xa0"),u=new Date(i),m=u.getDate().toString().padStart(2,"0"),h=(u.getMonth()+1).toString().padStart(2,"0"),x=u.getFullYear().toString().slice(-2),_="".concat(m,".").concat(h,".").concat(x),p="INCOME"===s?"+":"-";return(0,l.jsx)("div",{className:yt,children:(0,l.jsx)("table",{className:Ct,children:(0,l.jsxs)("tbody",{className:kt,children:[(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:"Date"}),(0,l.jsx)("td",{className:wt,children:_})]}),(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:"Type"}),(0,l.jsx)("td",{className:wt,children:p})]}),(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:"Category"}),(0,l.jsx)("td",{className:wt,children:null!==n&&void 0!==n&&n.name?n.name:"unknown"})]}),(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:"Comment"}),(0,l.jsx)("td",{className:wt,children:r})]}),(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:"Sum"}),(0,l.jsx)("td",{className:"+"===p?Lt:Et,children:d})]}),(0,l.jsxs)("tr",{className:"+"===p?It:Tt,children:[(0,l.jsx)("td",{className:Dt,children:(0,l.jsx)(ct,{onClick:function(){return o(e)}})}),(0,l.jsx)("td",{className:wt,children:(0,l.jsx)("div",{className:Mt,children:(0,l.jsx)(st,{onClick:function(){return c(e)}})})})]})]})})})},Bt=function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],o=(0,i.useState)(""),d=(0,a.Z)(o,2),h=d[0],x=d[1],_=(0,i.useState)(!1),p=(0,a.Z)(_,2),f=p[0],j=p[1],g=(0,s.I0)(),v=(0,s.v9)(m.aQ),b=(0,s.v9)(m.us),N=function(t){c(!0);var e=v.find((function(e){return e.id===t}));x(e),j(!0)},S=function(t){g((0,r.Ks)(t))},Z=(0,nt.Z)(v);Z.sort((function(t,e){var n=new Date(t.transactionDate);return new Date(e.transactionDate).getTime()-n.getTime()}));var y=Z.map((function(t){var e=t.id,n=t.transactionDate,a=t.type,i=t.categoryId,s=t.comment,r=t.amount,c=b.find((function(t){return t.id===i}));return(0,l.jsx)(Ft,{id:e,category:c,sum:r,date:n,type:a,comment:s,onEditBtnClick:N,onDeleteBtnClick:S},e)}));return(0,l.jsxs)(l.Fragment,{children:[" ",y,f&&(0,l.jsx)(u.Z,{onClose:function(){j(!1)},children:(0,l.jsx)(tt,{initialState:h,isEdit:n,onSubmit:function(t){g((0,r.qJ)(t)),j(!1)},setShowModal:j})})," "]})},At=n(3845),Ot=n(1926),Ht=function(){var t=(0,i.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],o=(0,s.I0)();(0,i.useEffect)((function(){o((0,r.tG)()),o((0,r._v)())}),[o]);var m=(0,At.Z)("(min-width: 768px)"),h=(0,At.Z)("(max-width: 767px)");return(0,l.jsxs)("div",{className:et,children:[h&&(0,l.jsx)(Ot.Z,{}),m&&(0,l.jsx)(Zt,{setShowModal:c}),h&&(0,l.jsx)(Bt,{}),(0,l.jsx)(d,{type:"button",onBtnClick:function(){c(!0)}}),n&&(0,l.jsx)(u.Z,{onClose:function(){c(!1)},children:(0,l.jsx)(tt,{onSubmit:function(t){o((0,r.dT)(t)),c(!1)},setShowModal:c})})]})}},3177:function(t,e,n){var a=n(1413),i=n(3646),s=n(3329);e.Z=function(t){return(0,s.jsx)(i.c.DropdownIndicator,(0,a.Z)((0,a.Z)({},t),{},{children:(0,s.jsx)("svg",{width:"20",height:"11",viewBox:"0 0 20 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M1 1L10 10L19 1",stroke:"black"})})}))}},202:function(t,e,n){n.d(e,{Z:function(){return o}});var a=n(1413),i=n(4925),s="primary-button_button__YlxDi",r=n(3329),c=["children"],o=function(t){var e=t.children,n=(0,i.Z)(t,c);return(0,r.jsx)("button",(0,a.Z)((0,a.Z)({className:s},n),{},{children:e}))}},1433:function(t,e,n){t.exports=n.p+"static/media/wallett.efcc2a8f028fbcc6331e.png"}}]);
//# sourceMappingURL=245.4bb50e7d.chunk.js.map