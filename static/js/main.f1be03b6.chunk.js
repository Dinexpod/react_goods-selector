(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(3),r=c(5),l=c(6),a=c(8),d=c(7),i=c(1),u=c.n(i),j=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(a.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:[]},e.selectGood=function(t){e.setState((function(c){e.setState({selectedGoods:[].concat(Object(s.a)(c.selectedGoods),[t])})}))},e.unselectGood=function(t){e.setState((function(c){e.setState({selectedGoods:Object(s.a)(c.selectedGoods.filter((function(e){return e!==t})))})}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:t.length>0?"Selected good: -":"No goods selected"}),t&&t.map((function(t){return Object(j.jsxs)("h1",{children:["".concat(t," is selected"),Object(j.jsx)("button",{type:"button",onClick:function(){return e.unselectGood(t)},children:"X"})]},t)})),Object(j.jsx)("ul",{children:b.map((function(c){return Object(j.jsxs)("li",{className:t.includes(c)?"selectedGood":"",children:["".concat(c," "),!t.includes(c)&&Object(j.jsx)("button",{type:"button",onClick:function(){return e.selectGood(c)},children:"Select"})]},c)}))})]})}}]),c}(u.a.Component),p=h;o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f1be03b6.chunk.js.map