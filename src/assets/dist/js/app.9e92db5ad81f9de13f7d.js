(window.$_$=window.$_$||[]).push([[0],{"/gyc":function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u("6SzI"),r=function(e){return e&&e.__esModule?e:{default:e}}(u("5or1"));var l=(0,r.default)({fetchApi:[]});t.default=(0,n.handleActions)({FETCHAPI1:function(e,t){var u=t.payload;return r.default.merge(e,{fetchApi:u})}},l)},"5or1":function(e,t){e.exports=Immutable},"7pVq":function(e,t,u){"use strict";var n=s(u("Yz+Y")),r=s(u("iCc5")),l=s(u("V7oC")),a=s(u("FYw3")),o=s(u("mRg0"));u("wrEB");var c=s(u("cDcd")),d=s(u("faye")),i=u("h74D"),f=s(u("BFIO"));function s(e){return e&&e.__esModule?e:{default:e}}var M=(0,s(u("UqNH")).default)(),D=function(e){function t(){return(0,r.default)(this,t),(0,a.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement(i.Provider,{store:M},c.default.createElement(f.default,null))}}]),t}(c.default.PureComponent);d.default.render(c.default.createElement(D,null),document.getElementById("app"))},BFIO:function(e,t,u){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=o(u("cDcd")),r=u("oncg"),l=o(u("IK32")),a=o(u("V9mj"));function o(e){return e&&e.__esModule?e:{default:e}}var c=(e.env.ENV_NAME,r.BrowserRouter);t.default=function(){return n.default.createElement(c,{basename:""},n.default.createElement(r.Switch,null,n.default.createElement(r.Route,{exact:!0,path:"/",component:l.default}),n.default.createElement(r.Route,{exact:!0,path:"/goods",component:a.default}),n.default.createElement(r.Redirect,{from:"*",to:"/"})))}}).call(this,u("8oxB"))},IK32:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(u("Yz+Y")),r=i(u("iCc5")),l=i(u("V7oC")),a=i(u("FYw3")),o=i(u("mRg0")),c=i(u("cDcd")),d=i(u("ZJMQ"));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,r.default)(this,t),(0,a.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,null),c.default.createElement("h1",null,"hello, word!"),c.default.createElement("img",{src:u("KaEU"),style:{width:"1rem",height:"1rem"}}))}}]),t}(c.default.PureComponent);t.default=f},KaEU:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNzc0IDg3NS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3NzQgODc1Ljc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojOEVENkZCO30KCS5zdDJ7ZmlsbDojMUM3OEMwO30KPC9zdHlsZT4KPHRpdGxlPmxvZ28tb24tZGFyay1iZzwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODcsMGwzODcsMjE4Ljl2NDM3LjlMMzg3LDg3NS43TDAsNjU2LjhWMjE4LjlMMzg3LDB6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MDQuOSw2NDEuN0wzOTkuOCw4MTQuM1Y2NzkuOWwxOTAuMS0xMDQuNkw3MDQuOSw2NDEuN0w3MDQuOSw2NDEuN3ogTTcyNS44LDYyMi44VjI2MS45bC0xMTEuNiw2NC41djIzMgoJTDcyNS44LDYyMi44TDcyNS44LDYyMi44eiBNNjcuOSw2NDEuN0wzNzMsODE0LjNWNjc5LjlMMTgyLjgsNTc1LjNMNjcuOSw2NDEuN3ogTTQ3LDYyMi44VjI2MS45bDExMS42LDY0LjV2MjMyTDQ3LDYyMi44egoJIE02MC4xLDIzOC41TDM3Myw2MS41djEyOS45TDE3Mi41LDMwMS43bC0xLjYsMC45QzE3MC45LDMwMi42LDYwLjEsMjM4LjUsNjAuMSwyMzguNXogTTcxMi43LDIzOC41bC0zMTIuOS0xNzd2MTI5LjlsMjAwLjUsMTEwLjIKCWwxLjYsMC45TDcxMi43LDIzOC41TDcxMi43LDIzOC41eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMzczLDY0OS4zTDE4NS40LDU0Ni4xVjM0MS44TDM3Myw0NTAuMVY2NDkuM3ogTTM5OS44LDY0OS4zbDE4Ny42LTEwMy4xVjM0MS44TDM5OS44LDQ1MC4xVjY0OS4zegoJIE0xOTguMSwzMTguMmwxODguMy0xMDMuNWwxODguMywxMDMuNUwzODYuNCw0MjYuOUwxOTguMSwzMTguMkwxOTguMSwzMTguMnoiLz4KPC9zdmc+Cg=="},UqNH:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u("rKB8"),r=a(u("ZSx1")),l=a(u("fhFi"));function a(e){return e&&e.__esModule?e:{default:e}}var o=(0,n.compose)((0,n.applyMiddleware)(r.default))(n.createStore);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(l.default,e)}},V9mj:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=f(u("Yz+Y")),l=f(u("iCc5")),a=f(u("V7oC")),o=f(u("FYw3")),c=f(u("mRg0")),d=f(u("cDcd")),i=f(u("ZJMQ"));function f(e){return e&&e.__esModule?e:{default:e}}var s=(0,f(u("giF9")).default)(n=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement(i.default,null),d.default.createElement("h1",null,"hello, word! --- ViewsGoodsDetails"),d.default.createElement("img",{src:u("KaEU"),style:{width:"1rem",height:"1rem"}}))}}]),t}(d.default.Component))||n;t.default=s},X0jD:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(u("QbLZ")),r=u("rKB8"),l=u("h74D"),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u]);return t.default=e,t}(u("pmdI"));t.default=function(e){return(0,l.connect)(function(e){return(0,n.default)({},e)},function(e){var t={};for(var u in a)t[u]=(0,r.bindActionCreators)(a[u],e);return t})(e)}},ZJMQ:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(u("Yz+Y")),r=i(u("iCc5")),l=i(u("V7oC")),a=i(u("FYw3")),o=i(u("mRg0")),c=i(u("cDcd")),d=u("oncg");function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,r.default)(this,t),(0,a.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.Link,{to:"/"},"首页"),"---",c.default.createElement(d.Link,{to:"/goods"},"商品页"))}}]),t}(c.default.PureComponent);t.default=f},ZSx1:function(e,t){e.exports=ReduxThunk},cC7T:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(u("14Xm")),r=a(u("D3Ub")),l=u("6SzI");function a(e){return e&&e.__esModule?e:{default:e}}t.default={fetchApi1:function(e){return function(){var e=(0,r.default)(n.default.mark(function e(t,u){var r;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(function(){return{}},1e3);case 2:r=e.sent,t((0,l.createAction)("FETCHAPI1")(r));case 4:case"end":return e.stop()}},e,void 0)}));return function(t,u){return e.apply(this,arguments)}}()}}},cDcd:function(e,t){e.exports=React},faye:function(e,t){e.exports=ReactDOM},fhFi:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u("rKB8"),r=function(e){return e&&e.__esModule?e:{default:e}}(u("/gyc"));t.default=(0,n.combineReducers)({$$api1:r.default})},giF9:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(u("Yz+Y")),r=i(u("iCc5")),l=i(u("V7oC")),a=i(u("FYw3")),o=i(u("tfYw")),c=i(u("mRg0")),d=i(u("X0jD"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t;return(0,d.default)(t=function(e){function t(e){return(0,r.default)(this,t),(0,a.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e))}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return(0,o.default)(t.prototype.__proto__||(0,n.default)(t.prototype),"render",this).call(this,this.props,this.state)}}]),t}(e))||t}},h74D:function(e,t){e.exports=ReactRedux},oncg:function(e,t){e.exports=ReactRouterDOM},pmdI:function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.$api1=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(u("cC7T"));t.$api1=n.default},rKB8:function(e,t){e.exports=Redux}},[["7pVq",4,1,2,3]]]);