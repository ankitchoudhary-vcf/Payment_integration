(this.webpackJsonppayment_integration=this.webpackJsonppayment_integration||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i(13),n=i.n(a),c=(i(29),i(30),i(31),i(14)),o=i.n(c),r=i(22),l=i(9),d=i(0),b=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),i=t[0],a=t[1],n=Object(s.useState)(""),c=Object(l.a)(n,2),b=c[0],j=c[1],h=Object(s.useState)(""),u=Object(l.a)(h,2),m=u[0],x=u[1],f=Object(s.useState)({}),p=Object(l.a)(f,2),O=p[0],v=p[1];Object(s.useEffect)((function(){v({payment_capture:1,amount:m,currency:"INR"})}),[m]);var g=function(e){return new Promise((function(t){var i=document.createElement("script");i.src=e,i.onload=function(){t(!0)},i.onerror=function(){t(!1)},document.body.appendChild(i)}))},y=function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://checkout.razorpay.com/v1/checkout.js");case 2:if(e.sent){e.next=6;break}return alert("Razorpay SDK failed to load."),e.abrupt("return");case 6:t={key:"rzp_test_WKw1wPTThc1bXI",amount:100*O.amount,currency:O.currency,order_id:O.order_id,name:"PayDoni",description:"Donation",image:"https://example.com/your_logo",handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)}},new window.Razorpay(t).open();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"notification mt-6 has-text-centered is-info is-light mx-4",children:[Object(d.jsx)("h1",{className:"title",children:"Donate Here !!"}),Object(d.jsx)("hr",{className:"has-background-info"})]}),Object(d.jsxs)("div",{className:"columns notification is-info is-light mt-6 is-centered is-vcentered mx-4",children:[Object(d.jsx)("div",{className:"column notification is-info is-6 mx-4 is-hidden-mobile",children:Object(d.jsx)("figure",{className:"image is-3by2",children:Object(d.jsx)("img",{className:"has-ratio",src:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9uYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"donate"})})}),Object(d.jsx)("div",{className:"column notification is-link is-light is-6",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{class:"field",children:[Object(d.jsx)("label",{class:"label",children:"Name"}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"text",placeholder:"Enter Your Name",value:i,onChange:function(e){return a(e.target.value)},required:!0})})]}),Object(d.jsxs)("div",{class:"field",children:[Object(d.jsx)("label",{class:"label",children:"Email"}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"email",placeholder:"Enter Your Email",value:b,onChange:function(e){return j(e.target.value)},required:!0})})]}),Object(d.jsxs)("div",{class:"field",children:[Object(d.jsx)("label",{class:"label",children:"Amount"}),Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("input",{class:"input",type:"number",placeholder:"Enter the Amount",value:m,onChange:function(e){return x(e.target.value)},required:!0})})]}),Object(d.jsx)("div",{class:"field",children:Object(d.jsx)("div",{class:"control",children:Object(d.jsx)("button",{class:"button is-fullwidth is-info",onClick:function(e){e.preventDefault(),!i||!b||!m||" "===i||" "===b||" "===m||" "===m||m<1?alert("Oops!! Invalid Input"):y()},children:"Pay Now"})})})]})})]})]})},j=i(4),h=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("nav",{className:"navbar has-background-info",role:"navigation","aria-label":"main navigation",children:[Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(j.b,{className:"navbar-item",to:"/",children:Object(d.jsx)("h3",{className:"title",children:"PayDoni"})}),Object(d.jsxs)("button",{className:i?"navbar-burger is-active":"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navigation-bar",onClick:function(){return a(!i)},children:[Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"}),Object(d.jsx)("span",{"aria-hidden":"true"})]})]}),Object(d.jsxs)("div",{id:"navigation-bar",className:i?"navbar-menu has-background-info-light is-active":"navbar-menu",onClick:function(){return a(!1)},children:[Object(d.jsxs)("div",{className:"navbar-start",children:[Object(d.jsx)(j.b,{className:"navbar-item",to:"/",children:"Home"}),Object(d.jsx)(j.b,{className:"navbar-item",to:"/about",children:"About"})]}),Object(d.jsx)("div",{className:"navbar-end my-2 mr-4",children:Object(d.jsx)(j.b,{to:"/donate",className:"navbar-item button is-primary is-light",children:"Donate Now"})})]})]})},u=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"columns notification is-info mt-6",children:[Object(d.jsxs)("div",{className:"column is-8 has-text-centered",children:[Object(d.jsx)("h3",{className:"title",children:"ABOUT US"}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{className:"content has-text-justified mt-6",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youmany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, byinjected humour, or randomised words which don't look even slightly believable."})]}),Object(d.jsxs)("div",{className:"column is-4 mb-6 has-text-centered",children:[Object(d.jsx)("figure",{className:"image is-128x128 is-hidden-mobile",style:{float:"right"},children:Object(d.jsx)("img",{src:"https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",alt:"about"})}),Object(d.jsx)("figure",{className:"image is-128x128 mx-6 is-hidden-desktop",children:Object(d.jsx)("img",{src:"https://images.unsplash.com/photo-1547496613-4e19af6736dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",alt:"about"})})]})]}),Object(d.jsxs)("div",{className:"notification is-info is-light has-text-centered mt-6 mb-0",children:[Object(d.jsx)("h2",{className:"title",children:"We aim further!"}),Object(d.jsx)("p",{children:"A little contribution from your side to save our indigenous communities would be highly appreciable."}),Object(d.jsx)(j.b,{to:"/donate",className:"button is-success is-light my-4",style:{border:"1px solid"},children:"Donate Now"})]})]})},m=i(24),x=(i(48),function(){return Object(d.jsx)("div",{className:"carousel-wrapper has-background-info-light",style:{width:"auto"},children:Object(d.jsxs)(m.Carousel,{centerMode:!0,label:!0,infiniteLoop:!0,useKeyboardArrows:!0,autoPlay:!0,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{alt:"carouselImage",src:"https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxwb29yJTIwY2hpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(d.jsxs)("div",{className:" notification mx-6 is-info title is-3",style:{position:"relative",bottom:"100px"},children:[Object(d.jsx)("p",{className:"title is-size-6-touch is-size-5-desktop notification is-info is-light",children:"HELP POOR CHILD"}),Object(d.jsx)("p",{className:"subtitle is-size-7-touch is-size-6-desktop mt-4 ",children:"Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going"}),Object(d.jsx)(j.b,{to:"/donate",className:"button is-success is-light mx-2",children:"Donate Now"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{alt:"carouselImage",src:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(d.jsxs)("div",{className:" notification mx-6 is-info title is-3",style:{position:"relative",bottom:"100px"},children:[Object(d.jsx)("p",{className:"title is-size-6-touch is-size-5-desktop notification is-info is-light",children:"HELP POOR CHILD"}),Object(d.jsx)("p",{className:"subtitle is-size-7-touch is-size-6-desktop mt-4 ",children:"Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going"}),Object(d.jsx)(j.b,{to:"/donate",className:"button is-success is-light mx-2",children:"Donate Now"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{alt:"carouselImage",src:"https://images.unsplash.com/photo-1536337005238-94b997371b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}),Object(d.jsxs)("div",{className:" notification mx-6 my-0 is-info title is-3",style:{position:"relative",bottom:"100px"},children:[Object(d.jsx)("p",{className:"title is-size-6-touch is-size-5-desktop notification is-info is-light",children:"HELP POOR CHILD"}),Object(d.jsx)("p",{className:"subtitle is-size-7-touch is-size-6-desktop mt-4 ",children:"Suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going"}),Object(d.jsx)(j.b,{to:"/donate",className:"button is-success is-light mx-2",children:"Donate Now"})]})]})]})})}),f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"columns is-mobile is-centered is-hidden-desktop",children:Object(d.jsx)("div",{className:"column is-6-desktop is-full-touch",children:Object(d.jsx)(x,{})})}),Object(d.jsx)("div",{className:"columns is-mobile is-centered is-hidden-touch mt-6",children:Object(d.jsx)("div",{className:"column is-6-desktop is-full-touch",children:Object(d.jsx)(x,{})})}),Object(d.jsx)(u,{})]})},p=function(){return Object(d.jsx)("footer",{className:"footer has-background-dark mt-6",style:{position:"relative",top:"12vh",width:"100%"},children:Object(d.jsx)("div",{className:"content has-text-centered has-text-white",children:Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{className:"has-text-white",children:"PayDoni"})," created by"," ",Object(d.jsx)("a",{href:"https://github.com/ankit1509",children:"Ankit Choudhary"}),"."]})})})},O=i(2);var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{})}),Object(d.jsx)(O.a,{exact:!0,path:"/donate",children:Object(d.jsx)(b,{})}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(u,{})})]}),Object(d.jsx)(p,{})]})})},g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,50)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))};n.a.render(Object(d.jsx)(v,{}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.60cf2dea.chunk.js.map