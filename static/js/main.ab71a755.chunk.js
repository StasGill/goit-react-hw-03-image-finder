(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),o=a(6),s=a.n(o),i=(a(5),a(7)),l=a(3),u=a(8),h=a(9),d=a(12),m=a(11),j=function(e){var t=e.onChange,a=e.onSubmit,c=e.value;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:a,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",placeholder:"Search images and photos",name:"searchQuery",onChange:t,value:c})]})})},b=function(e){var t=e.imgSrcc,a=e.onClick,c=e.data,r=e.tags;return Object(n.jsx)("li",{className:"ImageGalleryItem",onClick:a,"data-id":c,children:Object(n.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image","data-id":c})})},g=function(e){var t=e.imgSrc,a=e.openModal;return Object(n.jsx)("ul",{className:"ImageGallery App",children:t.map((function(e){return Object(n.jsx)(b,{imgSrcc:e.webformatURL,onClick:a,data:e.id,tags:e.tags},e.id)}))})},p=function(e){var t=e.onClick;return Object(n.jsx)("button",{className:"Button",onClick:t,children:"Load more"})},O=function(e){e.onClick;var t=e.imgSrc;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"backDrop",children:Object(n.jsx)("div",{className:"modal",children:Object(n.jsx)("img",{src:t,alt:""})})})})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return fetch("https://pixabay.com/api/?key=19931633-64dd09852af588ce39504dae9&q=".concat(t,"&page=").concat(e,"&image_type=photo")).then((function(e){return e.json()}))},v=a(10),x=a.n(v),S=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchQuery:"",searchItems:[],isModalOpen:!1,prewiewImg:"",currentPage:1,loaderOn:!1},e.switchLoader=function(){e.setState((function(e){return{loaderOn:!e.loaderOn}}))},e.onSubmit=function(t){t.preventDefault();var a=e.state.searchQuery;e.switchLoader(),f("",a).then((function(t){return e.setState({searchItems:Object(l.a)(t.hits)})})),e.switchLoader()},e.loadMore=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var t=e.state.searchQuery;e.switchLoader(),f(e.state.currentPage+1,t).then((function(t){return e.setState((function(e){return{searchItems:[].concat(Object(l.a)(e.searchItems),Object(l.a)(t.hits)),currentPage:e.currentPage+1}}))})),e.switchLoader()},e.onChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.openModal=function(t){e.setState((function(e){return{isModalOpen:!e.isModalOpen}}));var a=e.state.searchItems.find((function(e){return e.id==t.target.dataset.id}));e.setState({prewiewImg:a.webformatURL})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadMore()}},{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=Object(l.a)(this.state.searchItems),t=this.state,a=t.isModalOpen,c=t.loaderOn;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onChange:this.onChange,onSubmit:this.onSubmit,value:this.state.searchQuery}),Object(n.jsx)(g,{imgSrc:e,openModal:this.openModal}),c?Object(n.jsx)(x.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}):Object(n.jsx)(p,{onClick:this.loadMore}),a&&Object(n.jsx)(O,{onClick:this.openModal,imgSrc:this.state.prewiewImg})]})}}]),a}(c.Component);var w=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(S,{})})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root"))},5:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.ab71a755.chunk.js.map