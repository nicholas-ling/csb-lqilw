(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(32)},23:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),c=t.n(o),l=(t(23),t(1)),u=t(11),m=t(3),s=t(14),d=t(9),i=t.n(d),p=t(10),g=t.n(p),b=function(e){for(var a=[],t=0;t<e;t++)a.push(t);return a},f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),h=function(e,a,t,r){var n=5e5+1e4*e,o=i.a.createMortgageCalculator();o.totalPrice=n,o.downPayment=.2*n,o.interestRate=.0128,o.months=360,o.taxRate=0,o.insuranceRate=.0013,o.mortgageInsuranceRate=0,o.mortgageInsuranceEnabled=!1,o.mortgageInsuranceThreshold=.1,o.additionalPrincipalPayment=0;var c=o.calculatePayment(),l=c.paymentSchedule[0].totalPayment,u=parseFloat(t)/12,m=parseFloat(r),s=parseFloat(a),d=l+s+u+20,p=c.paymentSchedule[0].interestPayment+s+u+20,b=360*(m-p)/o.downPayment,h=g()(Math.pow(1+b,1/30)-1).format("0.00%");return console.log(s,d),{price:f.format(n),down:f.format(o.downPayment),mortgage:f.format(l),management:f.format(s),tax:f.format(u),insurance:f.format(20),rental:f.format(m),cash:f.format(m-d),profit:f.format(m-p),roi:h}};function y(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=a[e],r=a[1],n=a[2],o=a[3];return b(t).map(function(e){return Object(s.a)({},h(e,r,n,o))})}()}var v=u.a.div.withConfig({displayName:"App__Styles",componentId:"sc-1ycloiu-0"})(["padding:1rem;table{border-spacing:0;border:1px solid black;tr{:last-child{td{border-bottom:0;}}}th,td{margin:0;padding:0.5rem;border-bottom:1px solid black;border-right:1px solid black;:last-child{border-right:0;}}}"]);function E(e){var a=e.columns,t=e.data,r=Object(m.b)({columns:a,data:t},m.a),o=r.getTableProps,c=r.getTableBodyProps,l=r.headerGroups,u=r.rows,s=r.prepareRow;return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",o(),n.a.createElement("thead",null,l.map(function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map(function(e){return n.a.createElement("th",e.getHeaderProps(),e.render("Header"))}))})),n.a.createElement("tbody",c(),u.slice(0,50).map(function(e,a){return s(e),n.a.createElement("tr",e.getRowProps(),e.cells.map(function(e){return n.a.createElement("td",e.getCellProps(),e.render("Cell"))}))}))))}var w=function(){var e=Object(r.useState)(y(40,123)),a=Object(l.a)(e,2),t=a[0],o=a[1],c=n.a.useMemo(function(){return[{Header:"\u623f\u4ef7",accessor:"price"},{Header:"\u9996\u4ed8",accessor:"down"},{Header:"\u6bcf\u6708\u652f\u51fa",columns:[{Header:"\u8d37\u6b3e\u6708\u4f9b",accessor:"mortgage"},{Header:"\u7ef4\u62a4\u8d39",accessor:"management"},{Header:"\u5730\u7a0e",accessor:"tax"},{Header:"\u623f\u4e1c\u4fdd\u9669",accessor:"insurance"}]},{Header:"\u6bcf\u6708\u6536\u5165",columns:[{Header:"\u79df\u91d1",accessor:"rental"}]},{Header:"\u8d22\u52a1\u5206\u6790",columns:[{Header:"\u6bcf\u6708\u73b0\u91d1\u6d41",accessor:"cash"},{Header:"\u6bcf\u6708\u6536\u76ca\u6d41",accessor:"profit"},{Header:"\u79df\u91d1\u5e74\u5316\u590d\u5408\u56de\u62a5",accessor:"roi"}]}]},[]),u=Object(r.useState)(0),m=Object(l.a)(u,2),s=m[0],d=m[1],i=Object(r.useState)(0),p=Object(l.a)(i,2),g=p[0],b=p[1],f=Object(r.useState)(0),h=Object(l.a)(f,2),w=h[0],H=h[1];return n.a.createElement(v,null,n.a.createElement("div",null,n.a.createElement("h1",null,"condo\u6295\u8d44\u6536\u76ca\u8ba1\u7b97"),"\u7ba1\u7406\u8d39/\u6708\uff1a",n.a.createElement("input",{type:"number",name:"management",onChange:function(e){d(e.target.value),o(y(40,e.target.value,g,w))}}),"  ","\u5730\u7a0e/\u5e74\uff1a",n.a.createElement("input",{type:"number",name:"tax",onChange:function(e){b(e.target.value),o(y(40,s,e.target.value,w))}}),"  ","\u79df\u91d1/\u6708\uff1a",n.a.createElement("input",{type:"number",name:"rental",onChange:function(e){H(e.target.value),o(y(40,s,g,e.target.value))}}),"  ","  ",n.a.createElement("p",null)),n.a.createElement(E,{columns:c,data:t}))};c.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e6f1585f.chunk.js.map