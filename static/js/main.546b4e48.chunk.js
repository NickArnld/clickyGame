(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){},,,,,,,,,function(e){e.exports=[{id:1,image:"https://www.familyhandyman.com/wp-content/uploads/2018/09/How-to-Avoid-Snakes-Slithering-Up-Your-Toilet-shutterstock_780480850.jpg"},{id:2,image:"http://ppcorn.com/us/wp-content/uploads/sites/14/2016/02/snake-2-ppcorn.jpg"},{id:3,image:"https://www.thephotoargus.com/wp-content/uploads/2017/01/snake-13.jpg"},{id:4,image:"https://media.mnn.com/assets/images/2017/02/blue-snake.jpg.653x0_q80_crop-smart.jpg"},{id:5,image:"https://media.nature.com/w700/magazine-assets/d41586-018-01681-3/d41586-018-01681-3_15440080.jpg"},{id:6,image:"https://media-cdn.tripadvisor.com/media/photo-s/0d/fc/47/63/anaconda.jpg"},{id:7,image:"https://vignette.wikia.nocookie.net/animalplanetsthemostextreme/images/f/fb/King_Cobra.jpg/revision/latest?cb=20180701125910"},{id:8,image:"https://i.pinimg.com/originals/f1/29/0f/f1290fa4f270aa243253eeee46a28a7a.jpg"},{id:9,image:"https://media.mnn.com/assets/images/2016/06/snake-Sri-Lankan-pit-viper.jpg.653x0_q80_crop-smart.jpg"},{id:10,image:"https://i.imgur.com/T4BDC.jpg"},{id:11,image:"https://media.mnn.com/assets/images/2016/06/snake-eyelash-viper.jpg.838x0_q80.jpg"},{id:12,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlVBKyRGLZ_wVn6zEOOnq2sBr3GSy2bD7AFFx8eQ3dfw1SkKR"}]},function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(17),a(7)),s=a(2),l=a(3),m=a(5),p=a(4),d=a(6);a(18),a(1);var u=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Welcome to the Clicky Game!"),r.a.createElement("p",null,"Click as many individual pictures as you can! Don't click duplicates or you lose!"))},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar sticky-top"},r.a.createElement("h4",{className:"nav-item navTitle"},"Clicky-Game"),r.a.createElement("h4",{className:"nav-item"},"Current Score: ",this.props.currentScore),r.a.createElement("h4",{className:"nav-item"},"Top Score: ",this.props.topScore))}}]),t}(r.a.Component);var h=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};var f=function(e){return r.a.createElement("img",{src:e.imgLink,className:"clickPic",alt:"",onClick:function(){return e.clickHandler(e.id)}})},k=a(10),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={picArray:k,curScore:0,topScore:0,alreadyClicked:[],lossMsg:""},a.gameOver=function(){a.setState({curScore:0,alreadyClicked:[],lossMsg:"Sorry, you lost. Click Another to try again!"}),a.state.curScore>a.state.topScore&&a.setState({topScore:a.state.curScore})},a.handleClick=function(e){0===a.state.alreadyClicked.length?(a.setState({alreadyClicked:[].concat(Object(o.a)(a.state.alreadyClicked),[e]),lossMsg:""}),a.scoreIncrement(a.state.curScore),a.doShuffle(a.state.picArray)):a.findDuplicate(e,a.state.alreadyClicked)?a.gameOver():(a.setState({alreadyClicked:[].concat(Object(o.a)(a.state.alreadyClicked),[e]),lossMsg:""}),a.scoreIncrement(a.state.curScore),a.doShuffle(a.state.picArray))},a.doShuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a.scoreIncrement=function(e){e+=1,a.setState({curScore:e})},a.findDuplicate=function(e,t){for(var a=0;a<t.length;a++){if(t[a]===e)return!0}return!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g,{currentScore:this.state.curScore,topScore:this.state.topScore}),r.a.createElement(u,null),r.a.createElement(h,null,r.a.createElement("h3",{className:"lossMsg"},this.state.lossMsg),this.state.picArray.map(function(t){return r.a.createElement(f,{id:t.id,key:t.id,imgLink:t.image,clickHandler:e.handleClick,alreadyClicked:e.alreadyClicked})})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.546b4e48.chunk.js.map