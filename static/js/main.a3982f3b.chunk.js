(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{79:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n(0),i=(n(79),n(10)),a=n(31),o=n(23),s=n(35),l=n(66),u="ADD_TASK",d="REMOVE_TASK",j="TOGGLE_TASK",b="SET_VISIBILITY_FILTER",f="SHOW_ALL",O="SHOW_COMPLETED",x="SHOW_ACTIVE",h=99,p=[{userId:1,id:1,text:"You can create new tasks in the creator above",completed:!1},{userId:1,id:2,text:"Mark tasks as completed by clicking on the checkbox",completed:!1},{userId:1,id:3,text:"Filter tasks in the sidebar on the left",completed:!1},{userId:1,id:4,text:"Delete tasks by clicking on trash icon",completed:!0}],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return[].concat(Object(l.a)(e),[{id:t.id,text:t.text,completed:!1}]);case d:return e.filter((function(e){return e.id!==t.id}));case j:return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}));default:return e}},v=f,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.filter;default:return e}},w=Object(a.b)({tasks:k,visibilityFilter:m}),T=n(127),_=n(130),C=n(132),S=n(50),g=Object(T.a)((function(e){return{appBar:{zIndex:e.zIndex.drawer+1},title:{flexGrow:1}}}));function y(){var e=g();return Object(r.jsx)(_.a,{position:"fixed",className:e.appBar,children:Object(r.jsx)(C.a,{children:Object(r.jsx)(S.a,{variant:"h6",className:e.title,children:"Task Manager"})})})}var E=n(148),I=Object(T.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"}}}));function D(e){var t=e.children,n=I();return Object(r.jsxs)(E.a,{className:n.drawer,variant:"permanent",classes:{paper:n.drawerPaper},children:[Object(r.jsx)(C.a,{}),Object(r.jsx)("div",{className:n.drawerContainer,children:t})]})}var N=n(133),A=Object(T.a)((function(e){return{root:{display:"flex"}}}));function L(e){var t=e.sideMenu,n=e.contentTop,c=e.contentBottom,i=A();return Object(r.jsxs)("div",{className:i.root,children:[Object(r.jsx)(N.a,{}),Object(r.jsx)(y,{}),Object(r.jsx)(D,{children:t}),Object(r.jsxs)(B,{children:[n,c]})]})}var z=Object(T.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,paddingTop:e.spacing(2)},fullWidth:{width:"100%"}}}));function B(e){var t=e.children,n=z();return Object(r.jsxs)("main",{className:n.fullWidth,children:[Object(r.jsx)("div",{className:n.toolbar}),Object(r.jsx)("div",{className:n.content,children:t})]})}var M=n(67),W=n(134),F=n(135),R=n(146),V=n(65),G=n.n(V),X=Object(o.b)(null,(function(e){return{addTask:function(t){return e(function(e){return{type:u,id:h++,text:e}}(t))}}}))((function(e){var t=e.addTask,n=Object(c.useState)(""),i=Object(M.a)(n,2),a=i[0],o=i[1],s=Object(c.useRef)();return Object(r.jsxs)(W.a,{component:"form",onSubmit:function(e){e.preventDefault(),t(a),o(""),s.current.focus()},children:[Object(r.jsx)(F.a,{edge:"start","aria-label":"create new task",type:"submit",children:Object(r.jsx)(G.a,{color:"primary",fontSize:fe})}),Object(r.jsx)(R.a,{ref:s,value:a,onChange:function(e){return o(e.target.value)},id:"outlined-basic",label:"Task description",variant:"outlined",required:!0,fullWidth:!0})]})})),H=n(136),K=n(139),P=n(140),J=n(141),U=n(137),Y=n(138),q=function(e){var t=e.active,n=e.children,c=e.icon,i=e.onClick;return Object(r.jsxs)(W.a,{button:!0,selected:t,onClick:i,children:[Object(r.jsx)(U.a,{children:c}),Object(r.jsx)(Y.a,{children:n})]})},Q=Object(o.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e((n=t.filter,{type:b,filter:n}));var n}}}))(q),Z=f,$=O,ee=x,te=function(){return Object(r.jsxs)(H.a,{children:[Object(r.jsx)(Q,{filter:Z,icon:Object(r.jsx)(K.a,{}),children:"All"}),Object(r.jsx)(Q,{filter:ee,icon:Object(r.jsx)(P.a,{}),children:"Active"}),Object(r.jsx)(Q,{filter:$,icon:Object(r.jsx)(J.a,{}),children:"Completed"})]})},ne=n(144),re=n(142),ce=n(143),ie=n(145),ae=n(49),oe=function(e){var t=e.text,n=e.completed,c=e.onClick,i=e.onDeleteClick;return Object(r.jsxs)(W.a,{button:!0,onClick:function(){c()},children:[Object(r.jsx)(F.a,{edge:"start",children:n?Object(r.jsx)(re.a,{style:{color:ae.a[500]},fontSize:fe}):Object(r.jsx)(ce.a,{fontSize:fe})}),Object(r.jsx)(Y.a,{primary:t}),Object(r.jsx)(ne.a,{children:Object(r.jsx)(F.a,{edge:"end","aria-label":"delete the task",onClick:function(){return i()},children:Object(r.jsx)(ie.a,{color:"secondary",fontSize:fe})})})]})},se=function(e){var t=e.tasks,n=e.onTaskClick,c=e.onTaskDeleteClick;return Object(r.jsx)(H.a,{children:t.map((function(e){return Object(r.jsx)(oe,Object(s.a)(Object(s.a)({},e),{},{onClick:function(){return n(e.id)},onDeleteClick:function(){return c(e.id)}}),e.id)}))})},le=f,ue=O,de=x,je=function(e,t){switch(t){case ue:return e.filter((function(e){return e.completed}));case de:return e.filter((function(e){return!e.completed}));case le:default:return e}},be=Object(o.b)((function(e){return{tasks:je(e.tasks,e.visibilityFilter)}}),(function(e){return{onTaskClick:function(t){return e(function(e){return{type:j,id:e}}(t))},onTaskDeleteClick:function(t){return e(function(e){return{type:d,id:e}}(t))}}}))(se),fe="large",Oe=function(){return Object(r.jsx)(L,{sideMenu:Object(r.jsx)(te,{}),contentTop:Object(r.jsx)(X,{}),contentBottom:Object(r.jsx)(be,{})})},xe=Object(a.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(i.render)(Object(r.jsx)(o.a,{store:xe,children:Object(r.jsx)(Oe,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.a3982f3b.chunk.js.map