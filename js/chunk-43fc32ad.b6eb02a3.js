(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43fc32ad"],{"71be":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[e._v(e._s(e.fullDomainName)+" is still in the old registrar!")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}]},[e._v("\n      Since you are are the owner of "+e._s(e.fullDomainName)+" you can transfer the\n      name to the new registrar using transfer button\n    ")]),n("div",{staticClass:"transfer-registrar-button"},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.isOwner,expression:"isOwner"}],class:["large-round-button-green-filled",e.loading?"disabled":""],on:{click:e.transferFunc}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v("\n          Transfer\n        ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),n("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],r=n("cebc"),i=n("2f62"),o=n("539d"),c={components:{"interface-bottom-text":o["a"]},props:{hostName:{type:String,default:""},deedOwner:{type:String,default:""},transferFunc:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""}},computed:Object(r["a"])({},Object(i["b"])({account:"account"}),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},isOwner:function(){return this.account.address.toLowerCase()===this.deedOwner.toLowerCase()}}),mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},u=c,l=(n("bc01"),n("2877")),f=Object(l["a"])(u,a,s,!1,null,"48e6f3fa",null),d=f.exports;n.d(t,"default",function(){return d})},a98c:function(e,t,n){},bc01:function(e,t,n){"use strict";var a=n("a98c"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-43fc32ad.b6eb02a3.js.map