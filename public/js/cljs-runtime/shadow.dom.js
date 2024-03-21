goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37287 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37287(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37288 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37288(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36063 = coll;
var G__36064 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36063,G__36064) : shadow.dom.lazy_native_coll_seq.call(null,G__36063,G__36064));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36088 = arguments.length;
switch (G__36088) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36092 = arguments.length;
switch (G__36092) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36100 = arguments.length;
switch (G__36100) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36110 = arguments.length;
switch (G__36110) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36123 = arguments.length;
switch (G__36123) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36136 = arguments.length;
switch (G__36136) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36144){if((e36144 instanceof Object)){
var e = e36144;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36144;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36155 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36156 = null;
var count__36157 = (0);
var i__36158 = (0);
while(true){
if((i__36158 < count__36157)){
var el = chunk__36156.cljs$core$IIndexed$_nth$arity$2(null,i__36158);
var handler_37315__$1 = ((function (seq__36155,chunk__36156,count__36157,i__36158,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36155,chunk__36156,count__36157,i__36158,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37315__$1);


var G__37316 = seq__36155;
var G__37317 = chunk__36156;
var G__37318 = count__36157;
var G__37319 = (i__36158 + (1));
seq__36155 = G__37316;
chunk__36156 = G__37317;
count__36157 = G__37318;
i__36158 = G__37319;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36155);
if(temp__5804__auto__){
var seq__36155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36155__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36155__$1);
var G__37320 = cljs.core.chunk_rest(seq__36155__$1);
var G__37321 = c__5568__auto__;
var G__37322 = cljs.core.count(c__5568__auto__);
var G__37323 = (0);
seq__36155 = G__37320;
chunk__36156 = G__37321;
count__36157 = G__37322;
i__36158 = G__37323;
continue;
} else {
var el = cljs.core.first(seq__36155__$1);
var handler_37324__$1 = ((function (seq__36155,chunk__36156,count__36157,i__36158,el,seq__36155__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36155,chunk__36156,count__36157,i__36158,el,seq__36155__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37324__$1);


var G__37325 = cljs.core.next(seq__36155__$1);
var G__37326 = null;
var G__37327 = (0);
var G__37328 = (0);
seq__36155 = G__37325;
chunk__36156 = G__37326;
count__36157 = G__37327;
i__36158 = G__37328;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36182 = arguments.length;
switch (G__36182) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36189 = cljs.core.seq(events);
var chunk__36191 = null;
var count__36192 = (0);
var i__36193 = (0);
while(true){
if((i__36193 < count__36192)){
var vec__36211 = chunk__36191.cljs$core$IIndexed$_nth$arity$2(null,i__36193);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36211,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37330 = seq__36189;
var G__37331 = chunk__36191;
var G__37332 = count__36192;
var G__37333 = (i__36193 + (1));
seq__36189 = G__37330;
chunk__36191 = G__37331;
count__36192 = G__37332;
i__36193 = G__37333;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36189);
if(temp__5804__auto__){
var seq__36189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36189__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36189__$1);
var G__37334 = cljs.core.chunk_rest(seq__36189__$1);
var G__37335 = c__5568__auto__;
var G__37336 = cljs.core.count(c__5568__auto__);
var G__37337 = (0);
seq__36189 = G__37334;
chunk__36191 = G__37335;
count__36192 = G__37336;
i__36193 = G__37337;
continue;
} else {
var vec__36217 = cljs.core.first(seq__36189__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37338 = cljs.core.next(seq__36189__$1);
var G__37339 = null;
var G__37340 = (0);
var G__37341 = (0);
seq__36189 = G__37338;
chunk__36191 = G__37339;
count__36192 = G__37340;
i__36193 = G__37341;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36225 = cljs.core.seq(styles);
var chunk__36226 = null;
var count__36227 = (0);
var i__36228 = (0);
while(true){
if((i__36228 < count__36227)){
var vec__36240 = chunk__36226.cljs$core$IIndexed$_nth$arity$2(null,i__36228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36240,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37343 = seq__36225;
var G__37344 = chunk__36226;
var G__37345 = count__36227;
var G__37346 = (i__36228 + (1));
seq__36225 = G__37343;
chunk__36226 = G__37344;
count__36227 = G__37345;
i__36228 = G__37346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36225);
if(temp__5804__auto__){
var seq__36225__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36225__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36225__$1);
var G__37347 = cljs.core.chunk_rest(seq__36225__$1);
var G__37348 = c__5568__auto__;
var G__37349 = cljs.core.count(c__5568__auto__);
var G__37350 = (0);
seq__36225 = G__37347;
chunk__36226 = G__37348;
count__36227 = G__37349;
i__36228 = G__37350;
continue;
} else {
var vec__36247 = cljs.core.first(seq__36225__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36247,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37351 = cljs.core.next(seq__36225__$1);
var G__37352 = null;
var G__37353 = (0);
var G__37354 = (0);
seq__36225 = G__37351;
chunk__36226 = G__37352;
count__36227 = G__37353;
i__36228 = G__37354;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36254_37355 = key;
var G__36254_37356__$1 = (((G__36254_37355 instanceof cljs.core.Keyword))?G__36254_37355.fqn:null);
switch (G__36254_37356__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37362 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37362,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37362,"aria-");
}
})())){
el.setAttribute(ks_37362,value);
} else {
(el[ks_37362] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36324){
var map__36330 = p__36324;
var map__36330__$1 = cljs.core.__destructure_map(map__36330);
var props = map__36330__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36336 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36336,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36343 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36343,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36343;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36352 = arguments.length;
switch (G__36352) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36360){
var vec__36362 = p__36360;
var seq__36363 = cljs.core.seq(vec__36362);
var first__36364 = cljs.core.first(seq__36363);
var seq__36363__$1 = cljs.core.next(seq__36363);
var nn = first__36364;
var first__36364__$1 = cljs.core.first(seq__36363__$1);
var seq__36363__$2 = cljs.core.next(seq__36363__$1);
var np = first__36364__$1;
var nc = seq__36363__$2;
var node = vec__36362;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36370 = nn;
var G__36371 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36370,G__36371) : create_fn.call(null,G__36370,G__36371));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36373 = nn;
var G__36374 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36373,G__36374) : create_fn.call(null,G__36373,G__36374));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36377 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36377,(1),null);
var seq__36381_37371 = cljs.core.seq(node_children);
var chunk__36382_37372 = null;
var count__36383_37373 = (0);
var i__36384_37374 = (0);
while(true){
if((i__36384_37374 < count__36383_37373)){
var child_struct_37375 = chunk__36382_37372.cljs$core$IIndexed$_nth$arity$2(null,i__36384_37374);
var children_37376 = shadow.dom.dom_node(child_struct_37375);
if(cljs.core.seq_QMARK_(children_37376)){
var seq__36492_37377 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37376));
var chunk__36494_37378 = null;
var count__36495_37379 = (0);
var i__36496_37380 = (0);
while(true){
if((i__36496_37380 < count__36495_37379)){
var child_37381 = chunk__36494_37378.cljs$core$IIndexed$_nth$arity$2(null,i__36496_37380);
if(cljs.core.truth_(child_37381)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37381);


var G__37382 = seq__36492_37377;
var G__37383 = chunk__36494_37378;
var G__37384 = count__36495_37379;
var G__37385 = (i__36496_37380 + (1));
seq__36492_37377 = G__37382;
chunk__36494_37378 = G__37383;
count__36495_37379 = G__37384;
i__36496_37380 = G__37385;
continue;
} else {
var G__37386 = seq__36492_37377;
var G__37387 = chunk__36494_37378;
var G__37388 = count__36495_37379;
var G__37389 = (i__36496_37380 + (1));
seq__36492_37377 = G__37386;
chunk__36494_37378 = G__37387;
count__36495_37379 = G__37388;
i__36496_37380 = G__37389;
continue;
}
} else {
var temp__5804__auto___37390 = cljs.core.seq(seq__36492_37377);
if(temp__5804__auto___37390){
var seq__36492_37391__$1 = temp__5804__auto___37390;
if(cljs.core.chunked_seq_QMARK_(seq__36492_37391__$1)){
var c__5568__auto___37392 = cljs.core.chunk_first(seq__36492_37391__$1);
var G__37393 = cljs.core.chunk_rest(seq__36492_37391__$1);
var G__37394 = c__5568__auto___37392;
var G__37395 = cljs.core.count(c__5568__auto___37392);
var G__37396 = (0);
seq__36492_37377 = G__37393;
chunk__36494_37378 = G__37394;
count__36495_37379 = G__37395;
i__36496_37380 = G__37396;
continue;
} else {
var child_37398 = cljs.core.first(seq__36492_37391__$1);
if(cljs.core.truth_(child_37398)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37398);


var G__37399 = cljs.core.next(seq__36492_37391__$1);
var G__37400 = null;
var G__37401 = (0);
var G__37402 = (0);
seq__36492_37377 = G__37399;
chunk__36494_37378 = G__37400;
count__36495_37379 = G__37401;
i__36496_37380 = G__37402;
continue;
} else {
var G__37403 = cljs.core.next(seq__36492_37391__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__36492_37377 = G__37403;
chunk__36494_37378 = G__37404;
count__36495_37379 = G__37405;
i__36496_37380 = G__37406;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37376);
}


var G__37407 = seq__36381_37371;
var G__37408 = chunk__36382_37372;
var G__37409 = count__36383_37373;
var G__37410 = (i__36384_37374 + (1));
seq__36381_37371 = G__37407;
chunk__36382_37372 = G__37408;
count__36383_37373 = G__37409;
i__36384_37374 = G__37410;
continue;
} else {
var temp__5804__auto___37411 = cljs.core.seq(seq__36381_37371);
if(temp__5804__auto___37411){
var seq__36381_37412__$1 = temp__5804__auto___37411;
if(cljs.core.chunked_seq_QMARK_(seq__36381_37412__$1)){
var c__5568__auto___37414 = cljs.core.chunk_first(seq__36381_37412__$1);
var G__37415 = cljs.core.chunk_rest(seq__36381_37412__$1);
var G__37416 = c__5568__auto___37414;
var G__37417 = cljs.core.count(c__5568__auto___37414);
var G__37418 = (0);
seq__36381_37371 = G__37415;
chunk__36382_37372 = G__37416;
count__36383_37373 = G__37417;
i__36384_37374 = G__37418;
continue;
} else {
var child_struct_37419 = cljs.core.first(seq__36381_37412__$1);
var children_37420 = shadow.dom.dom_node(child_struct_37419);
if(cljs.core.seq_QMARK_(children_37420)){
var seq__36539_37421 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37420));
var chunk__36541_37422 = null;
var count__36542_37423 = (0);
var i__36543_37424 = (0);
while(true){
if((i__36543_37424 < count__36542_37423)){
var child_37425 = chunk__36541_37422.cljs$core$IIndexed$_nth$arity$2(null,i__36543_37424);
if(cljs.core.truth_(child_37425)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37425);


var G__37426 = seq__36539_37421;
var G__37427 = chunk__36541_37422;
var G__37428 = count__36542_37423;
var G__37429 = (i__36543_37424 + (1));
seq__36539_37421 = G__37426;
chunk__36541_37422 = G__37427;
count__36542_37423 = G__37428;
i__36543_37424 = G__37429;
continue;
} else {
var G__37430 = seq__36539_37421;
var G__37431 = chunk__36541_37422;
var G__37432 = count__36542_37423;
var G__37433 = (i__36543_37424 + (1));
seq__36539_37421 = G__37430;
chunk__36541_37422 = G__37431;
count__36542_37423 = G__37432;
i__36543_37424 = G__37433;
continue;
}
} else {
var temp__5804__auto___37434__$1 = cljs.core.seq(seq__36539_37421);
if(temp__5804__auto___37434__$1){
var seq__36539_37435__$1 = temp__5804__auto___37434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36539_37435__$1)){
var c__5568__auto___37436 = cljs.core.chunk_first(seq__36539_37435__$1);
var G__37437 = cljs.core.chunk_rest(seq__36539_37435__$1);
var G__37438 = c__5568__auto___37436;
var G__37439 = cljs.core.count(c__5568__auto___37436);
var G__37440 = (0);
seq__36539_37421 = G__37437;
chunk__36541_37422 = G__37438;
count__36542_37423 = G__37439;
i__36543_37424 = G__37440;
continue;
} else {
var child_37441 = cljs.core.first(seq__36539_37435__$1);
if(cljs.core.truth_(child_37441)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37441);


var G__37442 = cljs.core.next(seq__36539_37435__$1);
var G__37443 = null;
var G__37444 = (0);
var G__37445 = (0);
seq__36539_37421 = G__37442;
chunk__36541_37422 = G__37443;
count__36542_37423 = G__37444;
i__36543_37424 = G__37445;
continue;
} else {
var G__37446 = cljs.core.next(seq__36539_37435__$1);
var G__37447 = null;
var G__37448 = (0);
var G__37449 = (0);
seq__36539_37421 = G__37446;
chunk__36541_37422 = G__37447;
count__36542_37423 = G__37448;
i__36543_37424 = G__37449;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37420);
}


var G__37450 = cljs.core.next(seq__36381_37412__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__36381_37371 = G__37450;
chunk__36382_37372 = G__37451;
count__36383_37373 = G__37452;
i__36384_37374 = G__37453;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36568 = cljs.core.seq(node);
var chunk__36569 = null;
var count__36570 = (0);
var i__36571 = (0);
while(true){
if((i__36571 < count__36570)){
var n = chunk__36569.cljs$core$IIndexed$_nth$arity$2(null,i__36571);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37455 = seq__36568;
var G__37456 = chunk__36569;
var G__37457 = count__36570;
var G__37458 = (i__36571 + (1));
seq__36568 = G__37455;
chunk__36569 = G__37456;
count__36570 = G__37457;
i__36571 = G__37458;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36568);
if(temp__5804__auto__){
var seq__36568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36568__$1);
var G__37459 = cljs.core.chunk_rest(seq__36568__$1);
var G__37460 = c__5568__auto__;
var G__37461 = cljs.core.count(c__5568__auto__);
var G__37462 = (0);
seq__36568 = G__37459;
chunk__36569 = G__37460;
count__36570 = G__37461;
i__36571 = G__37462;
continue;
} else {
var n = cljs.core.first(seq__36568__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37463 = cljs.core.next(seq__36568__$1);
var G__37464 = null;
var G__37465 = (0);
var G__37466 = (0);
seq__36568 = G__37463;
chunk__36569 = G__37464;
count__36570 = G__37465;
i__36571 = G__37466;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36603 = arguments.length;
switch (G__36603) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36614 = arguments.length;
switch (G__36614) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36629 = arguments.length;
switch (G__36629) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37472 = arguments.length;
var i__5770__auto___37473 = (0);
while(true){
if((i__5770__auto___37473 < len__5769__auto___37472)){
args__5775__auto__.push((arguments[i__5770__auto___37473]));

var G__37474 = (i__5770__auto___37473 + (1));
i__5770__auto___37473 = G__37474;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36697_37475 = cljs.core.seq(nodes);
var chunk__36698_37476 = null;
var count__36699_37477 = (0);
var i__36700_37478 = (0);
while(true){
if((i__36700_37478 < count__36699_37477)){
var node_37479 = chunk__36698_37476.cljs$core$IIndexed$_nth$arity$2(null,i__36700_37478);
fragment.appendChild(shadow.dom._to_dom(node_37479));


var G__37480 = seq__36697_37475;
var G__37481 = chunk__36698_37476;
var G__37482 = count__36699_37477;
var G__37483 = (i__36700_37478 + (1));
seq__36697_37475 = G__37480;
chunk__36698_37476 = G__37481;
count__36699_37477 = G__37482;
i__36700_37478 = G__37483;
continue;
} else {
var temp__5804__auto___37484 = cljs.core.seq(seq__36697_37475);
if(temp__5804__auto___37484){
var seq__36697_37485__$1 = temp__5804__auto___37484;
if(cljs.core.chunked_seq_QMARK_(seq__36697_37485__$1)){
var c__5568__auto___37486 = cljs.core.chunk_first(seq__36697_37485__$1);
var G__37487 = cljs.core.chunk_rest(seq__36697_37485__$1);
var G__37488 = c__5568__auto___37486;
var G__37489 = cljs.core.count(c__5568__auto___37486);
var G__37490 = (0);
seq__36697_37475 = G__37487;
chunk__36698_37476 = G__37488;
count__36699_37477 = G__37489;
i__36700_37478 = G__37490;
continue;
} else {
var node_37491 = cljs.core.first(seq__36697_37485__$1);
fragment.appendChild(shadow.dom._to_dom(node_37491));


var G__37492 = cljs.core.next(seq__36697_37485__$1);
var G__37493 = null;
var G__37494 = (0);
var G__37495 = (0);
seq__36697_37475 = G__37492;
chunk__36698_37476 = G__37493;
count__36699_37477 = G__37494;
i__36700_37478 = G__37495;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36682){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36682));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36732_37496 = cljs.core.seq(scripts);
var chunk__36733_37497 = null;
var count__36734_37498 = (0);
var i__36735_37499 = (0);
while(true){
if((i__36735_37499 < count__36734_37498)){
var vec__36751_37500 = chunk__36733_37497.cljs$core$IIndexed$_nth$arity$2(null,i__36735_37499);
var script_tag_37501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751_37500,(0),null);
var script_body_37502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36751_37500,(1),null);
eval(script_body_37502);


var G__37503 = seq__36732_37496;
var G__37504 = chunk__36733_37497;
var G__37505 = count__36734_37498;
var G__37506 = (i__36735_37499 + (1));
seq__36732_37496 = G__37503;
chunk__36733_37497 = G__37504;
count__36734_37498 = G__37505;
i__36735_37499 = G__37506;
continue;
} else {
var temp__5804__auto___37507 = cljs.core.seq(seq__36732_37496);
if(temp__5804__auto___37507){
var seq__36732_37508__$1 = temp__5804__auto___37507;
if(cljs.core.chunked_seq_QMARK_(seq__36732_37508__$1)){
var c__5568__auto___37509 = cljs.core.chunk_first(seq__36732_37508__$1);
var G__37510 = cljs.core.chunk_rest(seq__36732_37508__$1);
var G__37511 = c__5568__auto___37509;
var G__37512 = cljs.core.count(c__5568__auto___37509);
var G__37513 = (0);
seq__36732_37496 = G__37510;
chunk__36733_37497 = G__37511;
count__36734_37498 = G__37512;
i__36735_37499 = G__37513;
continue;
} else {
var vec__36756_37514 = cljs.core.first(seq__36732_37508__$1);
var script_tag_37515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36756_37514,(0),null);
var script_body_37516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36756_37514,(1),null);
eval(script_body_37516);


var G__37517 = cljs.core.next(seq__36732_37508__$1);
var G__37518 = null;
var G__37519 = (0);
var G__37520 = (0);
seq__36732_37496 = G__37517;
chunk__36733_37497 = G__37518;
count__36734_37498 = G__37519;
i__36735_37499 = G__37520;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36760){
var vec__36761 = p__36760;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36761,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36761,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36768 = arguments.length;
switch (G__36768) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36786 = cljs.core.seq(style_keys);
var chunk__36787 = null;
var count__36788 = (0);
var i__36789 = (0);
while(true){
if((i__36789 < count__36788)){
var it = chunk__36787.cljs$core$IIndexed$_nth$arity$2(null,i__36789);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37528 = seq__36786;
var G__37529 = chunk__36787;
var G__37530 = count__36788;
var G__37531 = (i__36789 + (1));
seq__36786 = G__37528;
chunk__36787 = G__37529;
count__36788 = G__37530;
i__36789 = G__37531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36786);
if(temp__5804__auto__){
var seq__36786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36786__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36786__$1);
var G__37532 = cljs.core.chunk_rest(seq__36786__$1);
var G__37533 = c__5568__auto__;
var G__37534 = cljs.core.count(c__5568__auto__);
var G__37535 = (0);
seq__36786 = G__37532;
chunk__36787 = G__37533;
count__36788 = G__37534;
i__36789 = G__37535;
continue;
} else {
var it = cljs.core.first(seq__36786__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37536 = cljs.core.next(seq__36786__$1);
var G__37537 = null;
var G__37538 = (0);
var G__37539 = (0);
seq__36786 = G__37536;
chunk__36787 = G__37537;
count__36788 = G__37538;
i__36789 = G__37539;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36819,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36837 = k36819;
var G__36837__$1 = (((G__36837 instanceof cljs.core.Keyword))?G__36837.fqn:null);
switch (G__36837__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36819,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36839){
var vec__36840 = p__36839;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36840,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36818){
var self__ = this;
var G__36818__$1 = this;
return (new cljs.core.RecordIter((0),G__36818__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36821,other36822){
var self__ = this;
var this36821__$1 = this;
return (((!((other36822 == null)))) && ((((this36821__$1.constructor === other36822.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36821__$1.x,other36822.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36821__$1.y,other36822.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36821__$1.__extmap,other36822.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36819){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36860 = k36819;
var G__36860__$1 = (((G__36860 instanceof cljs.core.Keyword))?G__36860.fqn:null);
switch (G__36860__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36819);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36818){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36865 = cljs.core.keyword_identical_QMARK_;
var expr__36866 = k__5352__auto__;
if(cljs.core.truth_((pred__36865.cljs$core$IFn$_invoke$arity$2 ? pred__36865.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36866) : pred__36865.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36866)))){
return (new shadow.dom.Coordinate(G__36818,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36865.cljs$core$IFn$_invoke$arity$2 ? pred__36865.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36866) : pred__36865.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36866)))){
return (new shadow.dom.Coordinate(self__.x,G__36818,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36818),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36818){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36818,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36830){
var extmap__5385__auto__ = (function (){var G__36875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36830,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36875);
} else {
return G__36875;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36830),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36830),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36890,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36900 = k36890;
var G__36900__$1 = (((G__36900 instanceof cljs.core.Keyword))?G__36900.fqn:null);
switch (G__36900__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36890,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36904){
var vec__36905 = p__36904;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36905,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36889){
var self__ = this;
var G__36889__$1 = this;
return (new cljs.core.RecordIter((0),G__36889__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36891,other36892){
var self__ = this;
var this36891__$1 = this;
return (((!((other36892 == null)))) && ((((this36891__$1.constructor === other36892.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36891__$1.w,other36892.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36891__$1.h,other36892.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36891__$1.__extmap,other36892.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36890){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36938 = k36890;
var G__36938__$1 = (((G__36938 instanceof cljs.core.Keyword))?G__36938.fqn:null);
switch (G__36938__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36890);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36889){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36941 = cljs.core.keyword_identical_QMARK_;
var expr__36942 = k__5352__auto__;
if(cljs.core.truth_((pred__36941.cljs$core$IFn$_invoke$arity$2 ? pred__36941.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36942) : pred__36941.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36942)))){
return (new shadow.dom.Size(G__36889,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36941.cljs$core$IFn$_invoke$arity$2 ? pred__36941.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36942) : pred__36941.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36942)))){
return (new shadow.dom.Size(self__.w,G__36889,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36889),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36889){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36889,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36895){
var extmap__5385__auto__ = (function (){var G__36969 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36895,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36895)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36969);
} else {
return G__36969;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36895),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36895),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37572 = (i + (1));
var G__37573 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37572;
ret = G__37573;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36991){
var vec__36994 = p__36991;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37010 = arguments.length;
switch (G__37010) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37582 = ps;
var G__37583 = (i + (1));
el__$1 = G__37582;
i = G__37583;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37049 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37054_37592 = cljs.core.seq(props);
var chunk__37055_37593 = null;
var count__37056_37594 = (0);
var i__37057_37595 = (0);
while(true){
if((i__37057_37595 < count__37056_37594)){
var vec__37072_37596 = chunk__37055_37593.cljs$core$IIndexed$_nth$arity$2(null,i__37057_37595);
var k_37597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072_37596,(0),null);
var v_37598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37072_37596,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37597);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37597),v_37598);


var G__37599 = seq__37054_37592;
var G__37600 = chunk__37055_37593;
var G__37601 = count__37056_37594;
var G__37602 = (i__37057_37595 + (1));
seq__37054_37592 = G__37599;
chunk__37055_37593 = G__37600;
count__37056_37594 = G__37601;
i__37057_37595 = G__37602;
continue;
} else {
var temp__5804__auto___37603 = cljs.core.seq(seq__37054_37592);
if(temp__5804__auto___37603){
var seq__37054_37604__$1 = temp__5804__auto___37603;
if(cljs.core.chunked_seq_QMARK_(seq__37054_37604__$1)){
var c__5568__auto___37605 = cljs.core.chunk_first(seq__37054_37604__$1);
var G__37606 = cljs.core.chunk_rest(seq__37054_37604__$1);
var G__37607 = c__5568__auto___37605;
var G__37608 = cljs.core.count(c__5568__auto___37605);
var G__37609 = (0);
seq__37054_37592 = G__37606;
chunk__37055_37593 = G__37607;
count__37056_37594 = G__37608;
i__37057_37595 = G__37609;
continue;
} else {
var vec__37082_37610 = cljs.core.first(seq__37054_37604__$1);
var k_37611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37082_37610,(0),null);
var v_37612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37082_37610,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37611);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37611),v_37612);


var G__37613 = cljs.core.next(seq__37054_37604__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__37054_37592 = G__37613;
chunk__37055_37593 = G__37614;
count__37056_37594 = G__37615;
i__37057_37595 = G__37616;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37095 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37095,(1),null);
var seq__37099_37617 = cljs.core.seq(node_children);
var chunk__37101_37618 = null;
var count__37102_37619 = (0);
var i__37103_37620 = (0);
while(true){
if((i__37103_37620 < count__37102_37619)){
var child_struct_37621 = chunk__37101_37618.cljs$core$IIndexed$_nth$arity$2(null,i__37103_37620);
if((!((child_struct_37621 == null)))){
if(typeof child_struct_37621 === 'string'){
var text_37622 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37622),child_struct_37621].join(''));
} else {
var children_37623 = shadow.dom.svg_node(child_struct_37621);
if(cljs.core.seq_QMARK_(children_37623)){
var seq__37186_37624 = cljs.core.seq(children_37623);
var chunk__37188_37625 = null;
var count__37189_37626 = (0);
var i__37190_37627 = (0);
while(true){
if((i__37190_37627 < count__37189_37626)){
var child_37629 = chunk__37188_37625.cljs$core$IIndexed$_nth$arity$2(null,i__37190_37627);
if(cljs.core.truth_(child_37629)){
node.appendChild(child_37629);


var G__37630 = seq__37186_37624;
var G__37631 = chunk__37188_37625;
var G__37632 = count__37189_37626;
var G__37633 = (i__37190_37627 + (1));
seq__37186_37624 = G__37630;
chunk__37188_37625 = G__37631;
count__37189_37626 = G__37632;
i__37190_37627 = G__37633;
continue;
} else {
var G__37634 = seq__37186_37624;
var G__37635 = chunk__37188_37625;
var G__37636 = count__37189_37626;
var G__37637 = (i__37190_37627 + (1));
seq__37186_37624 = G__37634;
chunk__37188_37625 = G__37635;
count__37189_37626 = G__37636;
i__37190_37627 = G__37637;
continue;
}
} else {
var temp__5804__auto___37638 = cljs.core.seq(seq__37186_37624);
if(temp__5804__auto___37638){
var seq__37186_37639__$1 = temp__5804__auto___37638;
if(cljs.core.chunked_seq_QMARK_(seq__37186_37639__$1)){
var c__5568__auto___37640 = cljs.core.chunk_first(seq__37186_37639__$1);
var G__37641 = cljs.core.chunk_rest(seq__37186_37639__$1);
var G__37642 = c__5568__auto___37640;
var G__37643 = cljs.core.count(c__5568__auto___37640);
var G__37644 = (0);
seq__37186_37624 = G__37641;
chunk__37188_37625 = G__37642;
count__37189_37626 = G__37643;
i__37190_37627 = G__37644;
continue;
} else {
var child_37645 = cljs.core.first(seq__37186_37639__$1);
if(cljs.core.truth_(child_37645)){
node.appendChild(child_37645);


var G__37646 = cljs.core.next(seq__37186_37639__$1);
var G__37647 = null;
var G__37648 = (0);
var G__37649 = (0);
seq__37186_37624 = G__37646;
chunk__37188_37625 = G__37647;
count__37189_37626 = G__37648;
i__37190_37627 = G__37649;
continue;
} else {
var G__37650 = cljs.core.next(seq__37186_37639__$1);
var G__37651 = null;
var G__37652 = (0);
var G__37653 = (0);
seq__37186_37624 = G__37650;
chunk__37188_37625 = G__37651;
count__37189_37626 = G__37652;
i__37190_37627 = G__37653;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37623);
}
}


var G__37654 = seq__37099_37617;
var G__37655 = chunk__37101_37618;
var G__37656 = count__37102_37619;
var G__37657 = (i__37103_37620 + (1));
seq__37099_37617 = G__37654;
chunk__37101_37618 = G__37655;
count__37102_37619 = G__37656;
i__37103_37620 = G__37657;
continue;
} else {
var G__37658 = seq__37099_37617;
var G__37659 = chunk__37101_37618;
var G__37660 = count__37102_37619;
var G__37661 = (i__37103_37620 + (1));
seq__37099_37617 = G__37658;
chunk__37101_37618 = G__37659;
count__37102_37619 = G__37660;
i__37103_37620 = G__37661;
continue;
}
} else {
var temp__5804__auto___37662 = cljs.core.seq(seq__37099_37617);
if(temp__5804__auto___37662){
var seq__37099_37663__$1 = temp__5804__auto___37662;
if(cljs.core.chunked_seq_QMARK_(seq__37099_37663__$1)){
var c__5568__auto___37664 = cljs.core.chunk_first(seq__37099_37663__$1);
var G__37665 = cljs.core.chunk_rest(seq__37099_37663__$1);
var G__37666 = c__5568__auto___37664;
var G__37667 = cljs.core.count(c__5568__auto___37664);
var G__37668 = (0);
seq__37099_37617 = G__37665;
chunk__37101_37618 = G__37666;
count__37102_37619 = G__37667;
i__37103_37620 = G__37668;
continue;
} else {
var child_struct_37669 = cljs.core.first(seq__37099_37663__$1);
if((!((child_struct_37669 == null)))){
if(typeof child_struct_37669 === 'string'){
var text_37670 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37670),child_struct_37669].join(''));
} else {
var children_37671 = shadow.dom.svg_node(child_struct_37669);
if(cljs.core.seq_QMARK_(children_37671)){
var seq__37195_37672 = cljs.core.seq(children_37671);
var chunk__37198_37673 = null;
var count__37199_37674 = (0);
var i__37200_37675 = (0);
while(true){
if((i__37200_37675 < count__37199_37674)){
var child_37679 = chunk__37198_37673.cljs$core$IIndexed$_nth$arity$2(null,i__37200_37675);
if(cljs.core.truth_(child_37679)){
node.appendChild(child_37679);


var G__37680 = seq__37195_37672;
var G__37681 = chunk__37198_37673;
var G__37682 = count__37199_37674;
var G__37683 = (i__37200_37675 + (1));
seq__37195_37672 = G__37680;
chunk__37198_37673 = G__37681;
count__37199_37674 = G__37682;
i__37200_37675 = G__37683;
continue;
} else {
var G__37684 = seq__37195_37672;
var G__37685 = chunk__37198_37673;
var G__37686 = count__37199_37674;
var G__37687 = (i__37200_37675 + (1));
seq__37195_37672 = G__37684;
chunk__37198_37673 = G__37685;
count__37199_37674 = G__37686;
i__37200_37675 = G__37687;
continue;
}
} else {
var temp__5804__auto___37688__$1 = cljs.core.seq(seq__37195_37672);
if(temp__5804__auto___37688__$1){
var seq__37195_37689__$1 = temp__5804__auto___37688__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37195_37689__$1)){
var c__5568__auto___37690 = cljs.core.chunk_first(seq__37195_37689__$1);
var G__37691 = cljs.core.chunk_rest(seq__37195_37689__$1);
var G__37692 = c__5568__auto___37690;
var G__37693 = cljs.core.count(c__5568__auto___37690);
var G__37694 = (0);
seq__37195_37672 = G__37691;
chunk__37198_37673 = G__37692;
count__37199_37674 = G__37693;
i__37200_37675 = G__37694;
continue;
} else {
var child_37695 = cljs.core.first(seq__37195_37689__$1);
if(cljs.core.truth_(child_37695)){
node.appendChild(child_37695);


var G__37697 = cljs.core.next(seq__37195_37689__$1);
var G__37698 = null;
var G__37699 = (0);
var G__37700 = (0);
seq__37195_37672 = G__37697;
chunk__37198_37673 = G__37698;
count__37199_37674 = G__37699;
i__37200_37675 = G__37700;
continue;
} else {
var G__37701 = cljs.core.next(seq__37195_37689__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__37195_37672 = G__37701;
chunk__37198_37673 = G__37702;
count__37199_37674 = G__37703;
i__37200_37675 = G__37704;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37671);
}
}


var G__37705 = cljs.core.next(seq__37099_37663__$1);
var G__37706 = null;
var G__37707 = (0);
var G__37708 = (0);
seq__37099_37617 = G__37705;
chunk__37101_37618 = G__37706;
count__37102_37619 = G__37707;
i__37103_37620 = G__37708;
continue;
} else {
var G__37709 = cljs.core.next(seq__37099_37663__$1);
var G__37710 = null;
var G__37711 = (0);
var G__37712 = (0);
seq__37099_37617 = G__37709;
chunk__37101_37618 = G__37710;
count__37102_37619 = G__37711;
i__37103_37620 = G__37712;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37714 = arguments.length;
var i__5770__auto___37715 = (0);
while(true){
if((i__5770__auto___37715 < len__5769__auto___37714)){
args__5775__auto__.push((arguments[i__5770__auto___37715]));

var G__37718 = (i__5770__auto___37715 + (1));
i__5770__auto___37715 = G__37718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37222){
var G__37223 = cljs.core.first(seq37222);
var seq37222__$1 = cljs.core.next(seq37222);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37223,seq37222__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37233 = arguments.length;
switch (G__37233) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33685__auto___37725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_37262){
var state_val_37263 = (state_37262[(1)]);
if((state_val_37263 === (1))){
var state_37262__$1 = state_37262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37262__$1,(2),once_or_cleanup);
} else {
if((state_val_37263 === (2))){
var inst_37255 = (state_37262[(2)]);
var inst_37260 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37262__$1 = (function (){var statearr_37275 = state_37262;
(statearr_37275[(7)] = inst_37255);

return statearr_37275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37262__$1,inst_37260);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33337__auto__ = null;
var shadow$dom$state_machine__33337__auto____0 = (function (){
var statearr_37276 = [null,null,null,null,null,null,null,null];
(statearr_37276[(0)] = shadow$dom$state_machine__33337__auto__);

(statearr_37276[(1)] = (1));

return statearr_37276;
});
var shadow$dom$state_machine__33337__auto____1 = (function (state_37262){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_37262);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e37278){var ex__33340__auto__ = e37278;
var statearr_37279_37726 = state_37262;
(statearr_37279_37726[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_37262[(4)]))){
var statearr_37280_37727 = state_37262;
(statearr_37280_37727[(1)] = cljs.core.first((state_37262[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37728 = state_37262;
state_37262 = G__37728;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
shadow$dom$state_machine__33337__auto__ = function(state_37262){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33337__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33337__auto____1.call(this,state_37262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33337__auto____0;
shadow$dom$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33337__auto____1;
return shadow$dom$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_37284 = f__33686__auto__();
(statearr_37284[(6)] = c__33685__auto___37725);

return statearr_37284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
