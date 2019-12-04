(this["webpackJsonpjs-band-hw-task-6"]=this["webpackJsonpjs-band-hw-task-6"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),i=n.n(a),l=(n(17),n(18),function(){return o.a.createElement("div",{className:"card-header font-weight-bold"},"ToDo List")}),c=function(){return o.a.createElement("div",{className:"card-footer font-weight-bold"},"Aleksei Kotvitskyi")},s=n(2),d=n(9),u=n(3),h=n(4),p=n(6),m=n(5),b=n(1),f=n(7),y=n(8),O=n.n(y);n(21);function v(e){var t=e.items,n=e.dropdownInf,r=e.visibleToggle,a=e.textValue,i=e.handleClick;return o.a.createElement("div",{className:n.open?"dropdownList open":"dropdownList"},o.a.createElement("button",{type:"button",onClick:function(){return r(n)}},a),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e,onClick:i},e)}))))}v.defaultProps={dropdownInf:O.a.shape({open:O.a.bool,name:O.a.string}),handleClick:O.a.func};var g=v;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={openByDone:{open:!0,name:"openByDone"},openByPriority:{open:!0,name:"openByPriority"},sortBy:{priority:"all",completed:"all",searchText:""}},e.visibleChange=e.visibleChange.bind(Object(b.a)(e)),e.handleClick=e.handleClick.bind(Object(b.a)(e)),e.searchByTitle=e.searchByTitle.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"visibleChange",value:function(e){this.setState((function(t){return Object(s.a)({},e.name,w({},t[e.name],{open:!t[e.name].open}))}))}},{key:"handleClick",value:function(e,t){var n=this.props.handleSorted,r=this.state.sortBy,o=e.target.innerText;this.setState((function(e){return{sortBy:w({},e.sortBy,Object(s.a)({},t,o))}})),n(w({},r,Object(s.a)({},t,o)))}},{key:"searchByTitle",value:function(e){var t=this.props.handleSorted,n=this.state.sortBy,r=e.target.value;this.setState((function(e){return{sortBy:w({},e.sortBy,{searchText:r})}})),t(w({},n,{searchText:r}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.openByDone,r=t.openByPriority,a=t.sortBy,i=a.priority,l=a.completed,c=this.props.handleShowModal;return o.a.createElement("div",{className:"d-flex justify-content-around mt-3"},o.a.createElement("div",null,o.a.createElement("input",{type:"search",placeholder:"search by title",className:"form-control",onChange:this.searchByTitle})),o.a.createElement(g,{items:["all","open","done"],dropdownInf:n,visibleToggle:this.visibleChange,handleClick:function(t){return e.handleClick(t,"completed")},textValue:l}),o.a.createElement(g,{items:["all","high","normal","low"],dropdownInf:r,visibleToggle:this.visibleChange,handleClick:function(t){return e.handleClick(t,"priority")},textValue:i}),o.a.createElement("button",{className:"btn btn-dark col-2 p-0",style:{height:"40px"},type:"button",onClick:function(){return c()}},"\u0421reate"))}}]),t}(r.Component);n(22);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={openByPriority:{name:"openByPriority",open:!0},title:"",description:"",priority:"high",id:null},n.visibleToggle=n.visibleToggle.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n.resetData=n.resetData.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.handleCancel=n.handleCancel.bind(Object(b.a)(n)),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.editItem;if(t&&e.editItem!==t){var n=t.title,r=t.description,o=t.priority,a=t.id;this.setState({title:n,description:r,priority:o,id:a})}}},{key:"handleChange",value:function(e){var t="INPUT"===e.target.tagName?"title":"description",n=e.target.value;this.setState(Object(s.a)({},t,n))}},{key:"handleSubmit",value:function(e){var t=this.state,n=t.title,r=t.description,o=t.priority,a=t.id,i=this.props,l=i.creatTodo,c=i.editTodo,s=i.editItem;e.preventDefault(),s?c({title:n,description:r,priority:o,id:a}):l({title:n,description:r,priority:o}),this.resetData()}},{key:"handleCancel",value:function(){(0,this.props.handleShowModal)(),this.resetData()}},{key:"handleClick",value:function(e){this.setState({priority:e.target.innerText})}},{key:"resetData",value:function(){var e=this.props.resetItem;this.setState({title:"",description:"",priority:"high",edit:!1,id:null}),e()}},{key:"visibleToggle",value:function(e){this.setState((function(t){return Object(s.a)({},e.name,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[e.name],{open:!t[e.name].open}))}))}},{key:"render",value:function(){var e=this.state,t=e.openByPriority,n=e.title,r=e.description,a=e.priority,i=this.props.show;return o.a.createElement("div",{className:i?"modalWindow show":"modalWindow"},o.a.createElement("form",{className:"createTodoContent",onSubmit:this.handleSubmit},o.a.createElement("label",null,"Title:",o.a.createElement("input",{type:"text",placeholder:"Title",title:"please fill this field",className:"form-control",value:n,onChange:this.handleChange,required:!0})),o.a.createElement("label",null,"Description:",o.a.createElement("div",null,o.a.createElement("textarea",{placeholder:"Description",className:"form-control",value:r,onChange:this.handleChange}))),o.a.createElement("p",null,"Priority: "),o.a.createElement(g,{items:["high","normal","low"],dropdownInf:t,visibleToggle:this.visibleToggle,handleClick:this.handleClick,textValue:a}),o.a.createElement("div",{className:"btnGroup"},o.a.createElement("button",{type:"button",className:"btn btn-outline-danger",onClick:this.handleCancel},"Cancel"),o.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Save"))))}}]),t}(r.Component);T.defaultProps={editItem:void 0};var C=T,S=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={dropdownOpen:!1},e.handleOpen=e.handleOpen.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleOpen",value:function(){this.setState((function(e){return{dropdownOpen:!e.dropdownOpen}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.todo,r=t.editTodo,a=t.toggleDone,i=t.deleteTodo,l=this.state.dropdownOpen;return o.a.createElement("div",{className:"card text-white ".concat(n.done?"bg-success":"bg-secondary","  mb-3 todoItem show")},o.a.createElement("div",{className:"card-header"},n.title),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},n.description)),o.a.createElement("div",{className:"d-flex justify-content-around card-footer"},o.a.createElement("p",null,n.priority),o.a.createElement("div",{className:l?"dropdownEditTodo open":"dropdownEditTodo"},o.a.createElement("button",{type:"button",onClick:this.handleOpen},"..."),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){a(n),e.handleOpen()}},"done"),o.a.createElement("li",{onClick:function(){r(n),e.handleOpen()}},"edit"),o.a.createElement("li",{onClick:function(){i(n)}},"delete")))))}}]),t}(r.Component);n(23);var I=function(e){var t=e.todolist,n=e.editTodo,r=e.toggleDone,a=e.deleteTodo;return o.a.createElement("ul",{className:"todoList"},t.map((function(e){return o.a.createElement(S,{key:e.id,todo:e,editTodo:n,toggleDone:r,deleteTodo:a})})))};var D=function(e,t){var n=Object(d.a)(t);switch(e.completed){case"done":n=n.filter((function(e){return e.done}));break;case"open":n=n.filter((function(e){return!e.done}))}switch(e.priority){case"high":n=n.filter((function(e){return"high"===e.priority}));break;case"normal":n=n.filter((function(e){return"normal"===e.priority}));break;case"low":n=n.filter((function(e){return"low"===e.priority}))}return e.searchText&&(n=n.filter((function(t){return t.title.includes(e.searchText)}))),n.sort((function(e,t){return e.done-t.done}))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={showModalWindow:!1,items:[],filterItems:[],editItem:void 0,sortBy:{searchText:"",priority:"all",completed:"all"}},e.handleShowModal=e.handleShowModal.bind(Object(b.a)(e)),e.creatTodo=e.creatTodo.bind(Object(b.a)(e)),e.editTodo=e.editTodo.bind(Object(b.a)(e)),e.toggleDone=e.toggleDone.bind(Object(b.a)(e)),e.deleteTodo=e.deleteTodo.bind(Object(b.a)(e)),e.sortedItems=e.sortedItems.bind(Object(b.a)(e)),e.resetItem=e.resetItem.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleShowModal",value:function(){this.setState((function(e){return{showModalWindow:!e.showModalWindow}}))}},{key:"creatTodo",value:function(e){var t=this.state.sortBy;this.setState((function(t){return{items:[].concat(Object(d.a)(t.items),[B({id:Date.now(),done:!1},e)])}})),this.sortedItems(t),this.handleShowModal()}},{key:"editTodo",value:function(e){var t=this.state.sortBy,n=e.id,r=e.title,o=e.description,a=e.priority;this.setState((function(t){return{editItem:e,items:t.items.map((function(e){var t=B({},e);return e.id===n&&(t.title=r,t.description=o,t.priority=a),t}))}})),this.sortedItems(t),this.handleShowModal()}},{key:"toggleDone",value:function(e){var t=this.state.sortBy;this.setState((function(t){return{items:t.items.map((function(t){var n=B({},t);return t.id===e.id&&(n.done=!e.done),n}))}})),this.sortedItems(t)}},{key:"deleteTodo",value:function(e){var t=this.state,n=t.items,r=t.sortBy;this.setState({items:n.filter((function(t){return t.id!==e.id}))}),this.sortedItems(r)}},{key:"sortedItems",value:function(e){this.setState((function(t){var n=D(e,t.items);return t.items.length===n.length?{sortBy:B({},e),filterItems:n,items:n}:{sortBy:B({},e),filterItems:n}}))}},{key:"resetItem",value:function(){this.setState({editItem:void 0})}},{key:"render",value:function(){var e=this.state,t=e.showModalWindow,n=e.filterItems,r=e.editItem;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{handleShowModal:this.handleShowModal,handleSorted:this.sortedItems}),o.a.createElement(C,{show:t,handleShowModal:this.handleShowModal,creatTodo:this.creatTodo,editTodo:this.editTodo,editItem:r,resetItem:this.resetItem}),o.a.createElement(I,{todolist:n,editTodo:this.editTodo,toggleDone:this.toggleDone,deleteTodo:this.deleteTodo}))}}]),t}(r.Component);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),o.a.createElement(N,null),o.a.createElement(c,null))};i.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1d8864b0.chunk.js.map