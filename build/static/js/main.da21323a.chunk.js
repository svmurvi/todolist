(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{41:function(t,e,n){t.exports={doneTask:"taskField_doneTask__3E883",undoneTask:"taskField_undoneTask__orkGy"}},44:function(t,e,n){t.exports={textField:"input_textField__2_IGI","mui-auto-fill-cancel":"input_mui-auto-fill-cancel__cmWAm",buttonAdd:"input_buttonAdd__DMud4"}},57:function(t,e,n){t.exports={list:"todosList_list__UcD9a"}},68:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(10),o=n.n(c),r=(n(68),n(58)),a=n(115),u=n(112),s=n(44),d=n.n(s),l=n(45),j=n(8),f=Object(i.createContext)(),b=[{title:"task 1",isDone:!1,clicked:!1},{title:"task 2",isDone:!0,clicked:!1},{title:"task 3",isDone:!1,clicked:!1}];function k(t){var e=t.children,n=Object(i.useState)(b),c=Object(l.a)(n,2),o=c[0],r=c[1],a=Object(i.useState)(""),u=Object(l.a)(a,2),s=u[0],d=u[1];return Object(j.jsx)(f.Provider,{value:{todos:o,setTodos:r,input:s,setInput:d},children:e})}var x=function(){var t=Object(i.useContext)(f),e=t.input,n=t.setInput,c=t.setTodos;function o(){e.length&&""!==e&&(c((function(t){return[].concat(Object(r.a)(t),[{title:e,isDone:!1,clicked:!1}])})),n(""))}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.a,{className:d.a.textField,variant:"outlined",label:"Input Task",value:e,onChange:function(t){return function(t){n(t.target.value)}(t)},onKeyDown:function(t){return"Enter"===t.key?o():""}}),Object(j.jsx)(u.a,{variant:"outlined",className:d.a.buttonAdd,onClick:o,children:"Add task"})]})},O=n(111),p=n(113),m=n(117),_=n(114),h=n(56),v=n.n(h),g=n(116),D=n(41),T=n.n(D);var C=function(t){var e=Object(i.useContext)(f).setTodos;function n(t){e((function(e){return e.filter((function(e,n){return t!==n}))}))}function c(t){e((function(e){return e.map((function(e,i){return i===+t&&(e.clicked=!e.clicked),""===e.title&&n(i),e}))}))}return Object(j.jsxs)(p.a,{className:T.a.listItem,children:[Object(j.jsx)(g.a,{id:t.id,checked:t.completed,onChange:function(t){return function(t){e((function(e){return e.map((function(e,n){return+t.target.id===n&&(e.isDone=!e.isDone),e}))}))}(t)},color:"default"}),t.clicked?Object(j.jsx)(a.a,{id:t.id,"data-id":t.id,value:t.text,onChange:function(t){return function(t){e((function(e){return e.map((function(e,n){return n===+t.target.id&&(e.title=t.target.value),e}))}))}(t)},onBlur:function(t){return c(+t.target.id)},onKeyDown:function(t){return"Enter"===t.key?c(+t.target.id):""}}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.a,{id:t.id,primary:t.text,className:t.completed?T.a.doneTask:T.a.undoneTask,onClick:function(t){return c(+t.target.parentNode.id)}}),Object(j.jsx)(_.a,{onClick:function(t){return n(+t.currentTarget.id)},id:t.id,children:Object(j.jsx)(v.a,{fontSize:"small"})})]})]})},y=n(57),F=n.n(y);var I=function(){var t=Object(i.useContext)(f).todos.map((function(t,e){return Object(j.jsx)(C,{id:String(e),text:t.title,completed:t.isDone,clicked:t.clicked},e)}));return Object(j.jsx)(O.a,{className:F.a.list,children:t})};var N=function(){return Object(j.jsxs)(k,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(I,{})]})};o.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.da21323a.chunk.js.map