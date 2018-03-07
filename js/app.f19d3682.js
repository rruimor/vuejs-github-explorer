webpackJsonp([1],{0:function(e,t,s){e.exports=s("NHnr")},JeL0:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("p3C9");var r=s("/5sW"),a=(s("n12u"),s("M4fF")),n=s.n(a),u={name:"SearchInput",data:function(){return{inputValue:""}},watch:{inputValue:function(e){this.$store.commit("setSearchQuery",e)}}},c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"github__search",placeholder:"Enter some text..."},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})])},i=[],l=s("XyMi");function o(e){s("JeL0")}var p=!1,h=o,f="data-v-653ca46c",d=null,_=Object(l["a"])(u,c,i,p,h,f,d),m=_.exports,v=s("8kuj"),g=s.n(v),b={props:{result:{type:Object,required:!0}},components:{Spinner:g.a},methods:{setSelected:function(){this.$store.commit("setSelectedUser",this.result.login)}}},C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",appear:""}},[s("li",{staticClass:"result",on:{click:e.setSelected}},[e.result.avatar_url?s("clazy-load",{staticClass:"avatar__wrapper",attrs:{src:e.result.avatar_url}},[s("img",{staticClass:"avatar--thumbnail",attrs:{slot:"image",src:e.result.avatar_url},slot:"image"}),s("Spinner",{staticClass:"preloader",attrs:{slot:"placeholder"},slot:"placeholder"})],1):e._e(),s("div",{staticClass:"name__wrapper"},[s("span",{staticClass:"result__name"},[e._v(e._s(e.result.login))])])],1)])},S=[];function U(e){s("RaYE")}var w=!1,y=U,x="data-v-2160aa99",D=null,j=Object(l["a"])(b,C,S,w,y,x,D),O=j.exports,N={name:"SearchResults",props:{results:{type:Array,required:!0}},components:{ResultItem:O},computed:{resultMsg:function(){return""===this.$store.state.searchQuery?"":this.results&&this.results.length?"":"No results found"}}},Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search__results"},[e.resultMsg?s("div",{staticClass:"results__message"},[e._v("\n    "+e._s(e.resultMsg)+"\n  ")]):e._e(),e.results&&e.results.length?s("ul",[s("div",{staticClass:"users__wrapper"},e._l(e.results,function(e){return s("ResultItem",{key:e.id,attrs:{result:e}})}))]):e._e()])},$=[];function E(e){s("SxXC")}var k=!1,R=E,I="data-v-6c50d5a6",F=null,M=Object(l["a"])(N,Q,$,k,R,I,F),P=M.exports,V=s("NYxO"),q={name:"Search",data:function(){return{results:[],errors:[]}},components:{SearchInput:m,SearchResults:P},watch:{searchQuery:function(){this.getUsers()}},computed:Object.assign({},Object(V["b"])(["searchQuery"])),methods:{updateInputQuery:function(e){this.$emit("update:inputQuery",e)},getUsers:n.a.debounce(function(){if(""!==this.searchQuery){console.log("Getting users with param: ",this.searchQuery);var e=this,t=new URL("https://api.github.com/search/users");t.searchParams.append("q",this.searchQuery),fetch(t).then(function(e){return e.json()}).then(function(t){e.results=t.items}).catch(function(e){console.log(e)})}else this.results=[]},300)}},T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("SearchInput"),s("SearchResults",{attrs:{results:e.results}})],1)},L=[];function Y(e){s("WLm/")}var H=!1,J=Y,W="data-v-1a67769a",X=null,z=Object(l["a"])(q,T,L,H,J,W,X),G=z.exports,K=s("4PV6"),Z=s.n(K),A={props:{figureNumber:{type:Number,required:!0},figureText:{type:String,required:!0}}},B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"figure"},[s("p",{staticClass:"figure__number"},[e._v(e._s(e.figureNumber))]),s("span",{staticClass:"figure__text"},[e._v(e._s(e.figureText))])])},ee=[];function te(e){s("tKsZ")}var se=!1,re=te,ae="data-v-604f99fa",ne=null,ue=Object(l["a"])(A,B,ee,se,re,ae,ne),ce=ue.exports,ie={props:{selectedUser:{type:String,required:!0}},data:function(){return{userData:{}}},created:function(){this.getUser(this.selectedUser)},components:{Spinner:g.a,Figure:ce},computed:{hasUserData:function(){return!n.a.isEmpty(this.userData)}},methods:{getUser:function(e){console.log("selected user: ",e);var t=this;Z()("https://api.github.com/users/"+e).then(function(e){return e.json()}).then(function(e){t.userData=e}).catch(function(e){console.log(e)})}}},le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[e.hasUserData?[s("transition",{attrs:{name:"fade",appear:""}},[s("div",{staticClass:"profle__wrapper"},[s("h1",[e._v(e._s(e.userData.login))]),s("section",{staticClass:"avatar__wrapper"},[s("clazy-load",{attrs:{src:e.userData.avatar_url}},[s("img",{staticClass:"avatar--thumbnail",attrs:{slot:"image",src:e.userData.avatar_url},slot:"image"}),s("Spinner",{staticClass:"preloader",attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1),s("section",{staticClass:"profile__name"},[s("h2",{staticClass:"user__name"},[e._v(e._s(e.userData.name))]),s("span",{staticClass:"user__location"},[e._v(e._s(e.userData.location))])]),s("section",{staticClass:"profile__figures"},[s("Figure",{attrs:{figureNumber:e.userData.followers,figureText:"Followers"}}),s("Figure",{attrs:{figureNumber:e.userData.following,figureText:"Following"}}),s("Figure",{attrs:{figureNumber:e.userData.public_repos,figureText:"Public Repos"}})],1),s("section",[e.userData.blog?s("p",[s("a",{attrs:{href:e.userData.blog,target:"_blank"}},[e._v(e._s(e.userData.blog))])]):e._e()])])])]:s("Spinner")],2)},oe=[];function pe(e){s("kvD+")}var he=!1,fe=pe,de="data-v-a7eee3fc",_e=null,me=Object(l["a"])(ie,le,oe,he,fe,de,_e),ve=me.exports,ge={name:"app",components:{Search:G,Profile:ve},computed:Object.assign({},Object(V["b"])(["selectedUser","searchQuery"])),methods:{clearSelectedUser:function(){this.$store.commit("clearSelectedUser")}}},be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{center:!e.searchQuery},attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"logo__wrapper"},[s("a",{directives:[{name:"show",rawName:"v-show",value:e.selectedUser,expression:"selectedUser"}],staticClass:"nav__back",attrs:{href:"#"},on:{click:e.clearSelectedUser}},[e._v("←")]),s("h1",{directives:[{name:"show",rawName:"v-show",value:!e.selectedUser,expression:"!selectedUser"}],staticClass:"logo"},[e._v("GitHub Explorer")])]),s("Search",{directives:[{name:"show",rawName:"v-show",value:!e.selectedUser,expression:"!selectedUser"}]}),e.selectedUser?s("Profile",{attrs:{selectedUser:e.selectedUser}}):e._e()],1)])},Ce=[];function Se(e){s("xO0c")}var Ue=!1,we=Se,ye=null,xe=null,De=Object(l["a"])(ge,be,Ce,Ue,we,ye,xe),je=De.exports;r["a"].use(V["a"]);var Oe=new V["a"].Store({state:{selectedUser:"",searchQuery:""},mutations:{clearSelectedUser:function(e){e.selectedUser=""},setSelectedUser:function(e,t){e.selectedUser=t},setSearchQuery:function(e,t){e.searchQuery=t}}}),Ne=s("MYII"),Qe=s.n(Ne);r["a"].config.productionTip=!1,r["a"].use(Qe.a),new r["a"]({store:Oe,render:function(e){return e(je)}}).$mount("#app")},RaYE:function(e,t){},SxXC:function(e,t){},"WLm/":function(e,t){},"kvD+":function(e,t){},tKsZ:function(e,t){},xO0c:function(e,t){}},[0]);
//# sourceMappingURL=app.f19d3682.js.map