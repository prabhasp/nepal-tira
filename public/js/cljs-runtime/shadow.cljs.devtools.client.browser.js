goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39383 = arguments.length;
var i__5770__auto___39384 = (0);
while(true){
if((i__5770__auto___39384 < len__5769__auto___39383)){
args__5775__auto__.push((arguments[i__5770__auto___39384]));

var G__39385 = (i__5770__auto___39384 + (1));
i__5770__auto___39384 = G__39385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38753){
var G__38754 = cljs.core.first(seq38753);
var seq38753__$1 = cljs.core.next(seq38753);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38754,seq38753__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38759 = cljs.core.seq(sources);
var chunk__38760 = null;
var count__38761 = (0);
var i__38762 = (0);
while(true){
if((i__38762 < count__38761)){
var map__38784 = chunk__38760.cljs$core$IIndexed$_nth$arity$2(null,i__38762);
var map__38784__$1 = cljs.core.__destructure_map(map__38784);
var src = map__38784__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38784__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38789){var e_39391 = e38789;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39391);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39391.message)].join('')));
}

var G__39393 = seq__38759;
var G__39394 = chunk__38760;
var G__39395 = count__38761;
var G__39396 = (i__38762 + (1));
seq__38759 = G__39393;
chunk__38760 = G__39394;
count__38761 = G__39395;
i__38762 = G__39396;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38759);
if(temp__5804__auto__){
var seq__38759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38759__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38759__$1);
var G__39398 = cljs.core.chunk_rest(seq__38759__$1);
var G__39399 = c__5568__auto__;
var G__39400 = cljs.core.count(c__5568__auto__);
var G__39401 = (0);
seq__38759 = G__39398;
chunk__38760 = G__39399;
count__38761 = G__39400;
i__38762 = G__39401;
continue;
} else {
var map__38800 = cljs.core.first(seq__38759__$1);
var map__38800__$1 = cljs.core.__destructure_map(map__38800);
var src = map__38800__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38804){var e_39403 = e38804;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39403);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39403.message)].join('')));
}

var G__39404 = cljs.core.next(seq__38759__$1);
var G__39405 = null;
var G__39406 = (0);
var G__39407 = (0);
seq__38759 = G__39404;
chunk__38760 = G__39405;
count__38761 = G__39406;
i__38762 = G__39407;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38813 = cljs.core.seq(js_requires);
var chunk__38814 = null;
var count__38815 = (0);
var i__38816 = (0);
while(true){
if((i__38816 < count__38815)){
var js_ns = chunk__38814.cljs$core$IIndexed$_nth$arity$2(null,i__38816);
var require_str_39409 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39409);


var G__39411 = seq__38813;
var G__39412 = chunk__38814;
var G__39413 = count__38815;
var G__39414 = (i__38816 + (1));
seq__38813 = G__39411;
chunk__38814 = G__39412;
count__38815 = G__39413;
i__38816 = G__39414;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38813);
if(temp__5804__auto__){
var seq__38813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38813__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38813__$1);
var G__39417 = cljs.core.chunk_rest(seq__38813__$1);
var G__39418 = c__5568__auto__;
var G__39419 = cljs.core.count(c__5568__auto__);
var G__39420 = (0);
seq__38813 = G__39417;
chunk__38814 = G__39418;
count__38815 = G__39419;
i__38816 = G__39420;
continue;
} else {
var js_ns = cljs.core.first(seq__38813__$1);
var require_str_39421 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39421);


var G__39422 = cljs.core.next(seq__38813__$1);
var G__39423 = null;
var G__39424 = (0);
var G__39425 = (0);
seq__38813 = G__39422;
chunk__38814 = G__39423;
count__38815 = G__39424;
i__38816 = G__39425;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38822){
var map__38823 = p__38822;
var map__38823__$1 = cljs.core.__destructure_map(map__38823);
var msg = map__38823__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38824(s__38825){
return (new cljs.core.LazySeq(null,(function (){
var s__38825__$1 = s__38825;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38825__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38843 = cljs.core.first(xs__6360__auto__);
var map__38843__$1 = cljs.core.__destructure_map(map__38843);
var src = map__38843__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38843__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38825__$1,map__38843,map__38843__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38823,map__38823__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38824_$_iter__38826(s__38827){
return (new cljs.core.LazySeq(null,((function (s__38825__$1,map__38843,map__38843__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38823,map__38823__$1,msg,info,reload_info){
return (function (){
var s__38827__$1 = s__38827;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38827__$1);
if(temp__5804__auto____$1){
var s__38827__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38827__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38827__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38829 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38828 = (0);
while(true){
if((i__38828 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38828);
cljs.core.chunk_append(b__38829,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39436 = (i__38828 + (1));
i__38828 = G__39436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38829),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38824_$_iter__38826(cljs.core.chunk_rest(s__38827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38829),null);
}
} else {
var warning = cljs.core.first(s__38827__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38824_$_iter__38826(cljs.core.rest(s__38827__$2)));
}
} else {
return null;
}
break;
}
});})(s__38825__$1,map__38843,map__38843__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38823,map__38823__$1,msg,info,reload_info))
,null,null));
});})(s__38825__$1,map__38843,map__38843__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38823,map__38823__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38824(cljs.core.rest(s__38825__$1)));
} else {
var G__39438 = cljs.core.rest(s__38825__$1);
s__38825__$1 = G__39438;
continue;
}
} else {
var G__39439 = cljs.core.rest(s__38825__$1);
s__38825__$1 = G__39439;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38851_39443 = cljs.core.seq(warnings);
var chunk__38852_39444 = null;
var count__38853_39445 = (0);
var i__38854_39446 = (0);
while(true){
if((i__38854_39446 < count__38853_39445)){
var map__38860_39447 = chunk__38852_39444.cljs$core$IIndexed$_nth$arity$2(null,i__38854_39446);
var map__38860_39448__$1 = cljs.core.__destructure_map(map__38860_39447);
var w_39449 = map__38860_39448__$1;
var msg_39450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38860_39448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38860_39448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38860_39448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38860_39448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39450__$1)].join(''));


var G__39455 = seq__38851_39443;
var G__39456 = chunk__38852_39444;
var G__39457 = count__38853_39445;
var G__39458 = (i__38854_39446 + (1));
seq__38851_39443 = G__39455;
chunk__38852_39444 = G__39456;
count__38853_39445 = G__39457;
i__38854_39446 = G__39458;
continue;
} else {
var temp__5804__auto___39461 = cljs.core.seq(seq__38851_39443);
if(temp__5804__auto___39461){
var seq__38851_39462__$1 = temp__5804__auto___39461;
if(cljs.core.chunked_seq_QMARK_(seq__38851_39462__$1)){
var c__5568__auto___39464 = cljs.core.chunk_first(seq__38851_39462__$1);
var G__39465 = cljs.core.chunk_rest(seq__38851_39462__$1);
var G__39466 = c__5568__auto___39464;
var G__39467 = cljs.core.count(c__5568__auto___39464);
var G__39468 = (0);
seq__38851_39443 = G__39465;
chunk__38852_39444 = G__39466;
count__38853_39445 = G__39467;
i__38854_39446 = G__39468;
continue;
} else {
var map__38870_39469 = cljs.core.first(seq__38851_39462__$1);
var map__38870_39470__$1 = cljs.core.__destructure_map(map__38870_39469);
var w_39471 = map__38870_39470__$1;
var msg_39472__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870_39470__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870_39470__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870_39470__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38870_39470__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39475)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39473),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39474),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39472__$1)].join(''));


var G__39480 = cljs.core.next(seq__38851_39462__$1);
var G__39481 = null;
var G__39482 = (0);
var G__39483 = (0);
seq__38851_39443 = G__39480;
chunk__38852_39444 = G__39481;
count__38853_39445 = G__39482;
i__38854_39446 = G__39483;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38821_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38821_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38874){
var map__38875 = p__38874;
var map__38875__$1 = cljs.core.__destructure_map(map__38875);
var msg = map__38875__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38876 = cljs.core.seq(updates);
var chunk__38878 = null;
var count__38879 = (0);
var i__38880 = (0);
while(true){
if((i__38880 < count__38879)){
var path = chunk__38878.cljs$core$IIndexed$_nth$arity$2(null,i__38880);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39115_39490 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39119_39491 = null;
var count__39120_39492 = (0);
var i__39121_39493 = (0);
while(true){
if((i__39121_39493 < count__39120_39492)){
var node_39495 = chunk__39119_39491.cljs$core$IIndexed$_nth$arity$2(null,i__39121_39493);
if(cljs.core.not(node_39495.shadow$old)){
var path_match_39496 = shadow.cljs.devtools.client.browser.match_paths(node_39495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39496)){
var new_link_39498 = (function (){var G__39159 = node_39495.cloneNode(true);
G__39159.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39159;
})();
(node_39495.shadow$old = true);

(new_link_39498.onload = ((function (seq__39115_39490,chunk__39119_39491,count__39120_39492,i__39121_39493,seq__38876,chunk__38878,count__38879,i__38880,new_link_39498,path_match_39496,node_39495,path,map__38875,map__38875__$1,msg,updates,reload_info){
return (function (e){
var seq__39160_39500 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39162_39501 = null;
var count__39163_39502 = (0);
var i__39164_39503 = (0);
while(true){
if((i__39164_39503 < count__39163_39502)){
var map__39186_39504 = chunk__39162_39501.cljs$core$IIndexed$_nth$arity$2(null,i__39164_39503);
var map__39186_39506__$1 = cljs.core.__destructure_map(map__39186_39504);
var task_39507 = map__39186_39506__$1;
var fn_str_39508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39186_39506__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39186_39506__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39510 = goog.getObjectByName(fn_str_39508,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39509)].join(''));

(fn_obj_39510.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39510.cljs$core$IFn$_invoke$arity$2(path,new_link_39498) : fn_obj_39510.call(null,path,new_link_39498));


var G__39511 = seq__39160_39500;
var G__39512 = chunk__39162_39501;
var G__39513 = count__39163_39502;
var G__39514 = (i__39164_39503 + (1));
seq__39160_39500 = G__39511;
chunk__39162_39501 = G__39512;
count__39163_39502 = G__39513;
i__39164_39503 = G__39514;
continue;
} else {
var temp__5804__auto___39516 = cljs.core.seq(seq__39160_39500);
if(temp__5804__auto___39516){
var seq__39160_39517__$1 = temp__5804__auto___39516;
if(cljs.core.chunked_seq_QMARK_(seq__39160_39517__$1)){
var c__5568__auto___39518 = cljs.core.chunk_first(seq__39160_39517__$1);
var G__39519 = cljs.core.chunk_rest(seq__39160_39517__$1);
var G__39520 = c__5568__auto___39518;
var G__39521 = cljs.core.count(c__5568__auto___39518);
var G__39522 = (0);
seq__39160_39500 = G__39519;
chunk__39162_39501 = G__39520;
count__39163_39502 = G__39521;
i__39164_39503 = G__39522;
continue;
} else {
var map__39190_39523 = cljs.core.first(seq__39160_39517__$1);
var map__39190_39524__$1 = cljs.core.__destructure_map(map__39190_39523);
var task_39525 = map__39190_39524__$1;
var fn_str_39526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39190_39524__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39190_39524__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39528 = goog.getObjectByName(fn_str_39526,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39527)].join(''));

(fn_obj_39528.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39528.cljs$core$IFn$_invoke$arity$2(path,new_link_39498) : fn_obj_39528.call(null,path,new_link_39498));


var G__39529 = cljs.core.next(seq__39160_39517__$1);
var G__39530 = null;
var G__39531 = (0);
var G__39532 = (0);
seq__39160_39500 = G__39529;
chunk__39162_39501 = G__39530;
count__39163_39502 = G__39531;
i__39164_39503 = G__39532;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39495);
});})(seq__39115_39490,chunk__39119_39491,count__39120_39492,i__39121_39493,seq__38876,chunk__38878,count__38879,i__38880,new_link_39498,path_match_39496,node_39495,path,map__38875,map__38875__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39496], 0));

goog.dom.insertSiblingAfter(new_link_39498,node_39495);


var G__39534 = seq__39115_39490;
var G__39535 = chunk__39119_39491;
var G__39536 = count__39120_39492;
var G__39537 = (i__39121_39493 + (1));
seq__39115_39490 = G__39534;
chunk__39119_39491 = G__39535;
count__39120_39492 = G__39536;
i__39121_39493 = G__39537;
continue;
} else {
var G__39538 = seq__39115_39490;
var G__39539 = chunk__39119_39491;
var G__39540 = count__39120_39492;
var G__39541 = (i__39121_39493 + (1));
seq__39115_39490 = G__39538;
chunk__39119_39491 = G__39539;
count__39120_39492 = G__39540;
i__39121_39493 = G__39541;
continue;
}
} else {
var G__39542 = seq__39115_39490;
var G__39543 = chunk__39119_39491;
var G__39544 = count__39120_39492;
var G__39545 = (i__39121_39493 + (1));
seq__39115_39490 = G__39542;
chunk__39119_39491 = G__39543;
count__39120_39492 = G__39544;
i__39121_39493 = G__39545;
continue;
}
} else {
var temp__5804__auto___39546 = cljs.core.seq(seq__39115_39490);
if(temp__5804__auto___39546){
var seq__39115_39547__$1 = temp__5804__auto___39546;
if(cljs.core.chunked_seq_QMARK_(seq__39115_39547__$1)){
var c__5568__auto___39549 = cljs.core.chunk_first(seq__39115_39547__$1);
var G__39550 = cljs.core.chunk_rest(seq__39115_39547__$1);
var G__39551 = c__5568__auto___39549;
var G__39552 = cljs.core.count(c__5568__auto___39549);
var G__39553 = (0);
seq__39115_39490 = G__39550;
chunk__39119_39491 = G__39551;
count__39120_39492 = G__39552;
i__39121_39493 = G__39553;
continue;
} else {
var node_39555 = cljs.core.first(seq__39115_39547__$1);
if(cljs.core.not(node_39555.shadow$old)){
var path_match_39557 = shadow.cljs.devtools.client.browser.match_paths(node_39555.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39557)){
var new_link_39559 = (function (){var G__39192 = node_39555.cloneNode(true);
G__39192.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39557),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39192;
})();
(node_39555.shadow$old = true);

(new_link_39559.onload = ((function (seq__39115_39490,chunk__39119_39491,count__39120_39492,i__39121_39493,seq__38876,chunk__38878,count__38879,i__38880,new_link_39559,path_match_39557,node_39555,seq__39115_39547__$1,temp__5804__auto___39546,path,map__38875,map__38875__$1,msg,updates,reload_info){
return (function (e){
var seq__39194_39560 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39196_39561 = null;
var count__39197_39562 = (0);
var i__39198_39563 = (0);
while(true){
if((i__39198_39563 < count__39197_39562)){
var map__39204_39564 = chunk__39196_39561.cljs$core$IIndexed$_nth$arity$2(null,i__39198_39563);
var map__39204_39565__$1 = cljs.core.__destructure_map(map__39204_39564);
var task_39566 = map__39204_39565__$1;
var fn_str_39567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39204_39565__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39204_39565__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39569 = goog.getObjectByName(fn_str_39567,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39568)].join(''));

(fn_obj_39569.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39569.cljs$core$IFn$_invoke$arity$2(path,new_link_39559) : fn_obj_39569.call(null,path,new_link_39559));


var G__39570 = seq__39194_39560;
var G__39571 = chunk__39196_39561;
var G__39572 = count__39197_39562;
var G__39573 = (i__39198_39563 + (1));
seq__39194_39560 = G__39570;
chunk__39196_39561 = G__39571;
count__39197_39562 = G__39572;
i__39198_39563 = G__39573;
continue;
} else {
var temp__5804__auto___39574__$1 = cljs.core.seq(seq__39194_39560);
if(temp__5804__auto___39574__$1){
var seq__39194_39575__$1 = temp__5804__auto___39574__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39194_39575__$1)){
var c__5568__auto___39579 = cljs.core.chunk_first(seq__39194_39575__$1);
var G__39580 = cljs.core.chunk_rest(seq__39194_39575__$1);
var G__39581 = c__5568__auto___39579;
var G__39582 = cljs.core.count(c__5568__auto___39579);
var G__39583 = (0);
seq__39194_39560 = G__39580;
chunk__39196_39561 = G__39581;
count__39197_39562 = G__39582;
i__39198_39563 = G__39583;
continue;
} else {
var map__39207_39584 = cljs.core.first(seq__39194_39575__$1);
var map__39207_39585__$1 = cljs.core.__destructure_map(map__39207_39584);
var task_39586 = map__39207_39585__$1;
var fn_str_39587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207_39585__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39207_39585__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39592 = goog.getObjectByName(fn_str_39587,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39588)].join(''));

(fn_obj_39592.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39592.cljs$core$IFn$_invoke$arity$2(path,new_link_39559) : fn_obj_39592.call(null,path,new_link_39559));


var G__39594 = cljs.core.next(seq__39194_39575__$1);
var G__39595 = null;
var G__39596 = (0);
var G__39597 = (0);
seq__39194_39560 = G__39594;
chunk__39196_39561 = G__39595;
count__39197_39562 = G__39596;
i__39198_39563 = G__39597;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39555);
});})(seq__39115_39490,chunk__39119_39491,count__39120_39492,i__39121_39493,seq__38876,chunk__38878,count__38879,i__38880,new_link_39559,path_match_39557,node_39555,seq__39115_39547__$1,temp__5804__auto___39546,path,map__38875,map__38875__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39557], 0));

goog.dom.insertSiblingAfter(new_link_39559,node_39555);


var G__39598 = cljs.core.next(seq__39115_39547__$1);
var G__39599 = null;
var G__39600 = (0);
var G__39601 = (0);
seq__39115_39490 = G__39598;
chunk__39119_39491 = G__39599;
count__39120_39492 = G__39600;
i__39121_39493 = G__39601;
continue;
} else {
var G__39602 = cljs.core.next(seq__39115_39547__$1);
var G__39603 = null;
var G__39604 = (0);
var G__39605 = (0);
seq__39115_39490 = G__39602;
chunk__39119_39491 = G__39603;
count__39120_39492 = G__39604;
i__39121_39493 = G__39605;
continue;
}
} else {
var G__39606 = cljs.core.next(seq__39115_39547__$1);
var G__39607 = null;
var G__39608 = (0);
var G__39609 = (0);
seq__39115_39490 = G__39606;
chunk__39119_39491 = G__39607;
count__39120_39492 = G__39608;
i__39121_39493 = G__39609;
continue;
}
}
} else {
}
}
break;
}


var G__39610 = seq__38876;
var G__39611 = chunk__38878;
var G__39612 = count__38879;
var G__39613 = (i__38880 + (1));
seq__38876 = G__39610;
chunk__38878 = G__39611;
count__38879 = G__39612;
i__38880 = G__39613;
continue;
} else {
var G__39614 = seq__38876;
var G__39615 = chunk__38878;
var G__39616 = count__38879;
var G__39617 = (i__38880 + (1));
seq__38876 = G__39614;
chunk__38878 = G__39615;
count__38879 = G__39616;
i__38880 = G__39617;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38876);
if(temp__5804__auto__){
var seq__38876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38876__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38876__$1);
var G__39619 = cljs.core.chunk_rest(seq__38876__$1);
var G__39620 = c__5568__auto__;
var G__39621 = cljs.core.count(c__5568__auto__);
var G__39622 = (0);
seq__38876 = G__39619;
chunk__38878 = G__39620;
count__38879 = G__39621;
i__38880 = G__39622;
continue;
} else {
var path = cljs.core.first(seq__38876__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39209_39626 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39213_39627 = null;
var count__39214_39628 = (0);
var i__39215_39629 = (0);
while(true){
if((i__39215_39629 < count__39214_39628)){
var node_39631 = chunk__39213_39627.cljs$core$IIndexed$_nth$arity$2(null,i__39215_39629);
if(cljs.core.not(node_39631.shadow$old)){
var path_match_39632 = shadow.cljs.devtools.client.browser.match_paths(node_39631.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39632)){
var new_link_39634 = (function (){var G__39301 = node_39631.cloneNode(true);
G__39301.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39632),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39301;
})();
(node_39631.shadow$old = true);

(new_link_39634.onload = ((function (seq__39209_39626,chunk__39213_39627,count__39214_39628,i__39215_39629,seq__38876,chunk__38878,count__38879,i__38880,new_link_39634,path_match_39632,node_39631,path,seq__38876__$1,temp__5804__auto__,map__38875,map__38875__$1,msg,updates,reload_info){
return (function (e){
var seq__39302_39637 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39304_39638 = null;
var count__39305_39639 = (0);
var i__39306_39640 = (0);
while(true){
if((i__39306_39640 < count__39305_39639)){
var map__39314_39641 = chunk__39304_39638.cljs$core$IIndexed$_nth$arity$2(null,i__39306_39640);
var map__39314_39642__$1 = cljs.core.__destructure_map(map__39314_39641);
var task_39643 = map__39314_39642__$1;
var fn_str_39644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314_39642__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314_39642__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39646 = goog.getObjectByName(fn_str_39644,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39645)].join(''));

(fn_obj_39646.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39646.cljs$core$IFn$_invoke$arity$2(path,new_link_39634) : fn_obj_39646.call(null,path,new_link_39634));


var G__39650 = seq__39302_39637;
var G__39651 = chunk__39304_39638;
var G__39652 = count__39305_39639;
var G__39653 = (i__39306_39640 + (1));
seq__39302_39637 = G__39650;
chunk__39304_39638 = G__39651;
count__39305_39639 = G__39652;
i__39306_39640 = G__39653;
continue;
} else {
var temp__5804__auto___39654__$1 = cljs.core.seq(seq__39302_39637);
if(temp__5804__auto___39654__$1){
var seq__39302_39656__$1 = temp__5804__auto___39654__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39302_39656__$1)){
var c__5568__auto___39659 = cljs.core.chunk_first(seq__39302_39656__$1);
var G__39660 = cljs.core.chunk_rest(seq__39302_39656__$1);
var G__39661 = c__5568__auto___39659;
var G__39662 = cljs.core.count(c__5568__auto___39659);
var G__39663 = (0);
seq__39302_39637 = G__39660;
chunk__39304_39638 = G__39661;
count__39305_39639 = G__39662;
i__39306_39640 = G__39663;
continue;
} else {
var map__39315_39664 = cljs.core.first(seq__39302_39656__$1);
var map__39315_39665__$1 = cljs.core.__destructure_map(map__39315_39664);
var task_39666 = map__39315_39665__$1;
var fn_str_39667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39315_39665__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39315_39665__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39670 = goog.getObjectByName(fn_str_39667,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39668)].join(''));

(fn_obj_39670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39670.cljs$core$IFn$_invoke$arity$2(path,new_link_39634) : fn_obj_39670.call(null,path,new_link_39634));


var G__39673 = cljs.core.next(seq__39302_39656__$1);
var G__39674 = null;
var G__39675 = (0);
var G__39676 = (0);
seq__39302_39637 = G__39673;
chunk__39304_39638 = G__39674;
count__39305_39639 = G__39675;
i__39306_39640 = G__39676;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39631);
});})(seq__39209_39626,chunk__39213_39627,count__39214_39628,i__39215_39629,seq__38876,chunk__38878,count__38879,i__38880,new_link_39634,path_match_39632,node_39631,path,seq__38876__$1,temp__5804__auto__,map__38875,map__38875__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39632], 0));

goog.dom.insertSiblingAfter(new_link_39634,node_39631);


var G__39680 = seq__39209_39626;
var G__39681 = chunk__39213_39627;
var G__39682 = count__39214_39628;
var G__39683 = (i__39215_39629 + (1));
seq__39209_39626 = G__39680;
chunk__39213_39627 = G__39681;
count__39214_39628 = G__39682;
i__39215_39629 = G__39683;
continue;
} else {
var G__39684 = seq__39209_39626;
var G__39685 = chunk__39213_39627;
var G__39686 = count__39214_39628;
var G__39687 = (i__39215_39629 + (1));
seq__39209_39626 = G__39684;
chunk__39213_39627 = G__39685;
count__39214_39628 = G__39686;
i__39215_39629 = G__39687;
continue;
}
} else {
var G__39688 = seq__39209_39626;
var G__39689 = chunk__39213_39627;
var G__39690 = count__39214_39628;
var G__39691 = (i__39215_39629 + (1));
seq__39209_39626 = G__39688;
chunk__39213_39627 = G__39689;
count__39214_39628 = G__39690;
i__39215_39629 = G__39691;
continue;
}
} else {
var temp__5804__auto___39692__$1 = cljs.core.seq(seq__39209_39626);
if(temp__5804__auto___39692__$1){
var seq__39209_39693__$1 = temp__5804__auto___39692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39209_39693__$1)){
var c__5568__auto___39694 = cljs.core.chunk_first(seq__39209_39693__$1);
var G__39695 = cljs.core.chunk_rest(seq__39209_39693__$1);
var G__39696 = c__5568__auto___39694;
var G__39697 = cljs.core.count(c__5568__auto___39694);
var G__39698 = (0);
seq__39209_39626 = G__39695;
chunk__39213_39627 = G__39696;
count__39214_39628 = G__39697;
i__39215_39629 = G__39698;
continue;
} else {
var node_39699 = cljs.core.first(seq__39209_39693__$1);
if(cljs.core.not(node_39699.shadow$old)){
var path_match_39700 = shadow.cljs.devtools.client.browser.match_paths(node_39699.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39700)){
var new_link_39702 = (function (){var G__39317 = node_39699.cloneNode(true);
G__39317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39700),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39317;
})();
(node_39699.shadow$old = true);

(new_link_39702.onload = ((function (seq__39209_39626,chunk__39213_39627,count__39214_39628,i__39215_39629,seq__38876,chunk__38878,count__38879,i__38880,new_link_39702,path_match_39700,node_39699,seq__39209_39693__$1,temp__5804__auto___39692__$1,path,seq__38876__$1,temp__5804__auto__,map__38875,map__38875__$1,msg,updates,reload_info){
return (function (e){
var seq__39319_39704 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39321_39705 = null;
var count__39322_39706 = (0);
var i__39323_39707 = (0);
while(true){
if((i__39323_39707 < count__39322_39706)){
var map__39331_39712 = chunk__39321_39705.cljs$core$IIndexed$_nth$arity$2(null,i__39323_39707);
var map__39331_39713__$1 = cljs.core.__destructure_map(map__39331_39712);
var task_39714 = map__39331_39713__$1;
var fn_str_39715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39331_39713__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39331_39713__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39720 = goog.getObjectByName(fn_str_39715,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39716)].join(''));

(fn_obj_39720.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39720.cljs$core$IFn$_invoke$arity$2(path,new_link_39702) : fn_obj_39720.call(null,path,new_link_39702));


var G__39722 = seq__39319_39704;
var G__39723 = chunk__39321_39705;
var G__39724 = count__39322_39706;
var G__39725 = (i__39323_39707 + (1));
seq__39319_39704 = G__39722;
chunk__39321_39705 = G__39723;
count__39322_39706 = G__39724;
i__39323_39707 = G__39725;
continue;
} else {
var temp__5804__auto___39727__$2 = cljs.core.seq(seq__39319_39704);
if(temp__5804__auto___39727__$2){
var seq__39319_39728__$1 = temp__5804__auto___39727__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39319_39728__$1)){
var c__5568__auto___39729 = cljs.core.chunk_first(seq__39319_39728__$1);
var G__39730 = cljs.core.chunk_rest(seq__39319_39728__$1);
var G__39731 = c__5568__auto___39729;
var G__39732 = cljs.core.count(c__5568__auto___39729);
var G__39733 = (0);
seq__39319_39704 = G__39730;
chunk__39321_39705 = G__39731;
count__39322_39706 = G__39732;
i__39323_39707 = G__39733;
continue;
} else {
var map__39332_39736 = cljs.core.first(seq__39319_39728__$1);
var map__39332_39738__$1 = cljs.core.__destructure_map(map__39332_39736);
var task_39739 = map__39332_39738__$1;
var fn_str_39740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332_39738__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332_39738__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39744 = goog.getObjectByName(fn_str_39740,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39741)].join(''));

(fn_obj_39744.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39744.cljs$core$IFn$_invoke$arity$2(path,new_link_39702) : fn_obj_39744.call(null,path,new_link_39702));


var G__39745 = cljs.core.next(seq__39319_39728__$1);
var G__39746 = null;
var G__39747 = (0);
var G__39748 = (0);
seq__39319_39704 = G__39745;
chunk__39321_39705 = G__39746;
count__39322_39706 = G__39747;
i__39323_39707 = G__39748;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39699);
});})(seq__39209_39626,chunk__39213_39627,count__39214_39628,i__39215_39629,seq__38876,chunk__38878,count__38879,i__38880,new_link_39702,path_match_39700,node_39699,seq__39209_39693__$1,temp__5804__auto___39692__$1,path,seq__38876__$1,temp__5804__auto__,map__38875,map__38875__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39700], 0));

goog.dom.insertSiblingAfter(new_link_39702,node_39699);


var G__39750 = cljs.core.next(seq__39209_39693__$1);
var G__39751 = null;
var G__39752 = (0);
var G__39753 = (0);
seq__39209_39626 = G__39750;
chunk__39213_39627 = G__39751;
count__39214_39628 = G__39752;
i__39215_39629 = G__39753;
continue;
} else {
var G__39754 = cljs.core.next(seq__39209_39693__$1);
var G__39755 = null;
var G__39756 = (0);
var G__39757 = (0);
seq__39209_39626 = G__39754;
chunk__39213_39627 = G__39755;
count__39214_39628 = G__39756;
i__39215_39629 = G__39757;
continue;
}
} else {
var G__39760 = cljs.core.next(seq__39209_39693__$1);
var G__39761 = null;
var G__39762 = (0);
var G__39763 = (0);
seq__39209_39626 = G__39760;
chunk__39213_39627 = G__39761;
count__39214_39628 = G__39762;
i__39215_39629 = G__39763;
continue;
}
}
} else {
}
}
break;
}


var G__39764 = cljs.core.next(seq__38876__$1);
var G__39765 = null;
var G__39766 = (0);
var G__39767 = (0);
seq__38876 = G__39764;
chunk__38878 = G__39765;
count__38879 = G__39766;
i__38880 = G__39767;
continue;
} else {
var G__39770 = cljs.core.next(seq__38876__$1);
var G__39771 = null;
var G__39772 = (0);
var G__39773 = (0);
seq__38876 = G__39770;
chunk__38878 = G__39771;
count__38879 = G__39772;
i__38880 = G__39773;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39334){
var map__39335 = p__39334;
var map__39335__$1 = cljs.core.__destructure_map(map__39335);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39335__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39336,done,error){
var map__39337 = p__39336;
var map__39337__$1 = cljs.core.__destructure_map(map__39337);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39337__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39338,done,error){
var map__39339 = p__39338;
var map__39339__$1 = cljs.core.__destructure_map(map__39339);
var msg = map__39339__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39339__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39339__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39339__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39341){
var map__39342 = p__39341;
var map__39342__$1 = cljs.core.__destructure_map(map__39342);
var src = map__39342__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39342__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39343 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39343) : done.call(null,G__39343));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39344){
var map__39345 = p__39344;
var map__39345__$1 = cljs.core.__destructure_map(map__39345);
var msg__$1 = map__39345__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39345__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39346){var ex = e39346;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39349){
var map__39350 = p__39349;
var map__39350__$1 = cljs.core.__destructure_map(map__39350);
var env = map__39350__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39350__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39359){
var map__39360 = p__39359;
var map__39360__$1 = cljs.core.__destructure_map(map__39360);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39360__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39360__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39361){
var map__39362 = p__39361;
var map__39362__$1 = cljs.core.__destructure_map(map__39362);
var svc = map__39362__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39362__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
