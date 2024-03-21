goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37208,p__37209){
var map__37210 = p__37208;
var map__37210__$1 = cljs.core.__destructure_map(map__37210);
var svc = map__37210__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37211 = p__37209;
var map__37211__$1 = cljs.core.__destructure_map(map__37211);
var msg = map__37211__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37211__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37220,p__37221){
var map__37225 = p__37220;
var map__37225__$1 = cljs.core.__destructure_map(map__37225);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37226 = p__37221;
var map__37226__$1 = cljs.core.__destructure_map(map__37226);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37226__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37231,p__37232){
var map__37234 = p__37231;
var map__37234__$1 = cljs.core.__destructure_map(map__37234);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37235 = p__37232;
var map__37235__$1 = cljs.core.__destructure_map(map__37235);
var msg = map__37235__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37235__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37242,tid){
var map__37243 = p__37242;
var map__37243__$1 = cljs.core.__destructure_map(map__37243);
var svc = map__37243__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37243__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37256 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37257 = null;
var count__37258 = (0);
var i__37259 = (0);
while(true){
if((i__37259 < count__37258)){
var vec__37272 = chunk__37257.cljs$core$IIndexed$_nth$arity$2(null,i__37259);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37289 = seq__37256;
var G__37290 = chunk__37257;
var G__37291 = count__37258;
var G__37292 = (i__37259 + (1));
seq__37256 = G__37289;
chunk__37257 = G__37290;
count__37258 = G__37291;
i__37259 = G__37292;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37256);
if(temp__5804__auto__){
var seq__37256__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37256__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37256__$1);
var G__37298 = cljs.core.chunk_rest(seq__37256__$1);
var G__37299 = c__5568__auto__;
var G__37300 = cljs.core.count(c__5568__auto__);
var G__37301 = (0);
seq__37256 = G__37298;
chunk__37257 = G__37299;
count__37258 = G__37300;
i__37259 = G__37301;
continue;
} else {
var vec__37281 = cljs.core.first(seq__37256__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37302 = cljs.core.next(seq__37256__$1);
var G__37303 = null;
var G__37304 = (0);
var G__37305 = (0);
seq__37256 = G__37302;
chunk__37257 = G__37303;
count__37258 = G__37304;
i__37259 = G__37305;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37245_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37245_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37246_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37246_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37247_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37247_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37248_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37248_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37285){
var map__37286 = p__37285;
var map__37286__$1 = cljs.core.__destructure_map(map__37286);
var svc = map__37286__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37286__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37286__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
