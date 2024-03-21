goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33528){
var map__33530 = p__33528;
var map__33530__$1 = cljs.core.__destructure_map(map__33530);
var runtime = map__33530__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33612 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33612)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33532 = runtime;
var G__33533 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33612);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33532,G__33533) : shadow.remote.runtime.shared.process.call(null,G__33532,G__33533));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33534,res){
var map__33535 = p__33534;
var map__33535__$1 = cljs.core.__destructure_map(map__33535);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33535__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33535__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33536 = res;
var G__33536__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33536,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33536);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33536__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33536__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33538 = arguments.length;
switch (G__33538) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33539,msg,handlers,timeout_after_ms){
var map__33540 = p__33539;
var map__33540__$1 = cljs.core.__destructure_map(map__33540);
var runtime = map__33540__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33540__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33630 = arguments.length;
var i__5770__auto___33631 = (0);
while(true){
if((i__5770__auto___33631 < len__5769__auto___33630)){
args__5775__auto__.push((arguments[i__5770__auto___33631]));

var G__33633 = (i__5770__auto___33631 + (1));
i__5770__auto___33631 = G__33633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33549,ev,args){
var map__33550 = p__33549;
var map__33550__$1 = cljs.core.__destructure_map(map__33550);
var runtime = map__33550__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33551 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33554 = null;
var count__33555 = (0);
var i__33556 = (0);
while(true){
if((i__33556 < count__33555)){
var ext = chunk__33554.cljs$core$IIndexed$_nth$arity$2(null,i__33556);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33636 = seq__33551;
var G__33637 = chunk__33554;
var G__33638 = count__33555;
var G__33639 = (i__33556 + (1));
seq__33551 = G__33636;
chunk__33554 = G__33637;
count__33555 = G__33638;
i__33556 = G__33639;
continue;
} else {
var G__33641 = seq__33551;
var G__33642 = chunk__33554;
var G__33643 = count__33555;
var G__33644 = (i__33556 + (1));
seq__33551 = G__33641;
chunk__33554 = G__33642;
count__33555 = G__33643;
i__33556 = G__33644;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33551);
if(temp__5804__auto__){
var seq__33551__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33551__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33551__$1);
var G__33647 = cljs.core.chunk_rest(seq__33551__$1);
var G__33648 = c__5568__auto__;
var G__33649 = cljs.core.count(c__5568__auto__);
var G__33650 = (0);
seq__33551 = G__33647;
chunk__33554 = G__33648;
count__33555 = G__33649;
i__33556 = G__33650;
continue;
} else {
var ext = cljs.core.first(seq__33551__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33651 = cljs.core.next(seq__33551__$1);
var G__33652 = null;
var G__33653 = (0);
var G__33654 = (0);
seq__33551 = G__33651;
chunk__33554 = G__33652;
count__33555 = G__33653;
i__33556 = G__33654;
continue;
} else {
var G__33655 = cljs.core.next(seq__33551__$1);
var G__33656 = null;
var G__33657 = (0);
var G__33658 = (0);
seq__33551 = G__33655;
chunk__33554 = G__33656;
count__33555 = G__33657;
i__33556 = G__33658;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33543){
var G__33544 = cljs.core.first(seq33543);
var seq33543__$1 = cljs.core.next(seq33543);
var G__33545 = cljs.core.first(seq33543__$1);
var seq33543__$2 = cljs.core.next(seq33543__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33544,G__33545,seq33543__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33563,p__33564){
var map__33565 = p__33563;
var map__33565__$1 = cljs.core.__destructure_map(map__33565);
var runtime = map__33565__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33566 = p__33564;
var map__33566__$1 = cljs.core.__destructure_map(map__33566);
var msg = map__33566__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33566__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33567 = cljs.core.deref(state_ref);
var map__33567__$1 = cljs.core.__destructure_map(map__33567);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33567__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33567__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33568,msg){
var map__33569 = p__33568;
var map__33569__$1 = cljs.core.__destructure_map(map__33569);
var runtime = map__33569__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33569__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33571,key,p__33572){
var map__33573 = p__33571;
var map__33573__$1 = cljs.core.__destructure_map(map__33573);
var state = map__33573__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33573__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33574 = p__33572;
var map__33574__$1 = cljs.core.__destructure_map(map__33574);
var spec = map__33574__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33574__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33575,key,spec){
var map__33576 = p__33575;
var map__33576__$1 = cljs.core.__destructure_map(map__33576);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33576__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33577_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33577_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33578_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33578_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33579_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33579_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33580_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33580_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33581_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33581_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33582,key){
var map__33583 = p__33582;
var map__33583__$1 = cljs.core.__destructure_map(map__33583);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33583__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33589,msg){
var map__33590 = p__33589;
var map__33590__$1 = cljs.core.__destructure_map(map__33590);
var runtime = map__33590__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33590__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33591,p__33592){
var map__33593 = p__33591;
var map__33593__$1 = cljs.core.__destructure_map(map__33593);
var runtime = map__33593__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33594 = p__33592;
var map__33594__$1 = cljs.core.__destructure_map(map__33594);
var msg = map__33594__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33594__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33594__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33595 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33597 = null;
var count__33598 = (0);
var i__33599 = (0);
while(true){
if((i__33599 < count__33598)){
var map__33607 = chunk__33597.cljs$core$IIndexed$_nth$arity$2(null,i__33599);
var map__33607__$1 = cljs.core.__destructure_map(map__33607);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33607__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33692 = seq__33595;
var G__33693 = chunk__33597;
var G__33694 = count__33598;
var G__33695 = (i__33599 + (1));
seq__33595 = G__33692;
chunk__33597 = G__33693;
count__33598 = G__33694;
i__33599 = G__33695;
continue;
} else {
var G__33696 = seq__33595;
var G__33697 = chunk__33597;
var G__33698 = count__33598;
var G__33699 = (i__33599 + (1));
seq__33595 = G__33696;
chunk__33597 = G__33697;
count__33598 = G__33698;
i__33599 = G__33699;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33595);
if(temp__5804__auto__){
var seq__33595__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33595__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33595__$1);
var G__33701 = cljs.core.chunk_rest(seq__33595__$1);
var G__33702 = c__5568__auto__;
var G__33703 = cljs.core.count(c__5568__auto__);
var G__33704 = (0);
seq__33595 = G__33701;
chunk__33597 = G__33702;
count__33598 = G__33703;
i__33599 = G__33704;
continue;
} else {
var map__33608 = cljs.core.first(seq__33595__$1);
var map__33608__$1 = cljs.core.__destructure_map(map__33608);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33608__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33706 = cljs.core.next(seq__33595__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__33595 = G__33706;
chunk__33597 = G__33707;
count__33598 = G__33708;
i__33599 = G__33709;
continue;
} else {
var G__33710 = cljs.core.next(seq__33595__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__33595 = G__33710;
chunk__33597 = G__33711;
count__33598 = G__33712;
i__33599 = G__33713;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
