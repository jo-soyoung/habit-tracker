(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(t,e,n){t.exports={habit:"habit_habit__3TmwF",habitName:"habit_habitName__30kwo",habitCount:"habit_habitCount__2Jng5",habitButton:"habit_habitButton__30T0_",habitIncrease:"habit_habitIncrease__1fuFv",habitDecrease:"habit_habitDecrease__2PETa"}},,,,function(t,e,n){t.exports={habits:"habits_habits__Txr5X",habitsList:"habits_habitsList__3wqsA",habitsReset:"habits_habitsReset__2jPB0"}},function(t,e,n){t.exports={addForm:"habitAddForm_addForm__pzrjZ",addInput:"habitAddForm_addInput__34NJK",addButton:"habitAddForm_addButton__3hKCy"}},function(t,e,n){t.exports={header:"header_header__NMNwq",headerCountAnnounce:"header_headerCountAnnounce__Weyt8",headerCount:"header_headerCount__135jP"}},,,function(t,e,n){t.exports={habitButton:"deleteBtn_habitButton__3KvZS",habitDelete:"deleteBtn_habitDelete__3ufCz"}},,function(t,e,n){t.exports={box:"popUp_box__WkHiw"}},,,,,,,function(t,e,n){},function(t,e,n){},,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(12),o=n.n(i),s=(n(20),n(14)),r=n(3),b=n(15),u=(n(21),n(6)),h=n.n(u),l=n(2),d=n.n(l),j=n(11),f=n.n(j),m=n(0),O=function(t){var e=t.habit,n=t.onDelete;return Object(m.jsx)("button",{className:"".concat(f.a.habitButton," ").concat(f.a.habitDelete),onClick:function(){n(e)},children:Object(m.jsx)("i",{className:"fas fa-trash"})})},_=n(13),x=n.n(_),p=function(t){var e=t.habit,n=t.onDelete;return Object(m.jsxs)("div",{className:x.a.box,children:[Object(m.jsx)("strong",{children:"Congrats!"}),Object(m.jsx)("p",{children:"You've done ".concat(e.name," for ").concat(e.count," days!")}),Object(m.jsx)(O,{habit:e,onDelete:n})]})},N=Object(a.memo)((function(t){var e=t.habit,n=t.onIncrement,a=t.onDecrement,c=t.onDelete,i=e.name,o=e.count;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("li",{className:d.a.habit,children:[Object(m.jsx)("span",{className:d.a.habitName,children:i}),Object(m.jsx)("span",{className:d.a.habitCount,children:o}),Object(m.jsx)("button",{className:"".concat(d.a.habitButton," ").concat(d.a.habitIncrease),onClick:function(){n(e)},children:Object(m.jsx)("i",{className:"fas fa-plus-square"})}),Object(m.jsx)("button",{className:"".concat(d.a.habitButton," ").concat(d.a.habitDecrease),onClick:function(){a(e)},children:Object(m.jsx)("i",{className:"fas fa-minus-square"})}),Object(m.jsx)(O,{habit:e,onDelete:c})]}),e.count>=21&&Object(m.jsx)(p,{habit:e,onDelete:c})]})})),C=n(7),D=n.n(C),v=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(m.jsxs)("form",{ref:e,className:D.a.addForm,onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&t.onAdd(c),e.current.reset()},children:[Object(m.jsx)("input",{ref:n,type:"text",placeholder:"Habit",className:D.a.addInput}),Object(m.jsx)("button",{className:D.a.addButton,children:"Add"})]})})),g=function(t){var e=t.habits,n=t.onAdd,a=t.onIncrement,c=t.onDecrement,i=t.onDelete,o=t.onReset;return Object(m.jsxs)("div",{className:h.a.habits,children:[Object(m.jsx)(v,{onAdd:n}),Object(m.jsx)("ul",{className:h.a.habitsList,children:e.map((function(t){return Object(m.jsx)(N,{habit:t,onIncrement:a,onDecrement:c,onDelete:i},t.id)}))}),Object(m.jsx)("button",{className:h.a.habitsReset,onClick:o,children:"Reset All"})]})},I=n(8),k=n.n(I),B=function(t){return Object(m.jsxs)("header",{className:k.a.header,children:[Object(m.jsx)("h1",{children:"21 Days of Habit Tracker"}),Object(m.jsxs)("p",{children:["It takes ",Object(m.jsx)("span",{children:"21 days"})," to form a habit"]}),Object(m.jsxs)("strong",{className:k.a.headerCountAnnounce,children:[Object(m.jsx)("span",{className:k.a.headerCount,children:t.totalCount})," habits are being formed!"]})]})},A=function(){var t=Object(a.useState)([]),e=Object(b.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){o()}),[]),Object(a.useEffect)((function(){i()}),[n]);var i=function(){localStorage.setItem("habits",JSON.stringify(n))},o=Object(a.useCallback)((function(){if(null===localStorage.getItem("habits"))localStorage.setItem("habits",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("habits"));c(t)}}),[]),u=Object(a.useCallback)((function(t){c((function(e){return e.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(r.a)(Object(r.a)({},t),{},{count:n<0?0:n})}return e}))}))}),[]),h=Object(a.useCallback)((function(t){c((function(e){return e.filter((function(e){return e.id!==t.id}))}))}),[]),l=Object(a.useCallback)((function(t){c((function(e){return[].concat(Object(s.a)(e),[{id:Date.now(),name:t,count:0}])}))}),[]),d=Object(a.useCallback)((function(){c((function(t){return t.map((function(t){return 0!==t.count?Object(r.a)(Object(r.a)({},t),{},{count:0}):t}))}))}),[]);return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(B,{totalCount:n.filter((function(t){return t.count>0})).length}),Object(m.jsx)(g,{habits:n,onIncrement:function(t){c((function(e){return e.map((function(e){return e.id===t.id?Object(r.a)(Object(r.a)({},t),{},{count:t.count+1}):e}))}))},onDecrement:u,onDelete:h,onAdd:l,onReset:d})]})};n(23);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.bc2f73cc.chunk.js.map