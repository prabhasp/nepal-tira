goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36267){
var map__36269 = p__36267;
var map__36269__$1 = cljs.core.__destructure_map(map__36269);
var m = map__36269__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36277_36632 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36278_36633 = null;
var count__36279_36634 = (0);
var i__36280_36635 = (0);
while(true){
if((i__36280_36635 < count__36279_36634)){
var f_36636 = chunk__36278_36633.cljs$core$IIndexed$_nth$arity$2(null,i__36280_36635);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36636], 0));


var G__36637 = seq__36277_36632;
var G__36638 = chunk__36278_36633;
var G__36639 = count__36279_36634;
var G__36640 = (i__36280_36635 + (1));
seq__36277_36632 = G__36637;
chunk__36278_36633 = G__36638;
count__36279_36634 = G__36639;
i__36280_36635 = G__36640;
continue;
} else {
var temp__5804__auto___36641 = cljs.core.seq(seq__36277_36632);
if(temp__5804__auto___36641){
var seq__36277_36642__$1 = temp__5804__auto___36641;
if(cljs.core.chunked_seq_QMARK_(seq__36277_36642__$1)){
var c__5568__auto___36643 = cljs.core.chunk_first(seq__36277_36642__$1);
var G__36644 = cljs.core.chunk_rest(seq__36277_36642__$1);
var G__36645 = c__5568__auto___36643;
var G__36646 = cljs.core.count(c__5568__auto___36643);
var G__36647 = (0);
seq__36277_36632 = G__36644;
chunk__36278_36633 = G__36645;
count__36279_36634 = G__36646;
i__36280_36635 = G__36647;
continue;
} else {
var f_36648 = cljs.core.first(seq__36277_36642__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36648], 0));


var G__36650 = cljs.core.next(seq__36277_36642__$1);
var G__36651 = null;
var G__36652 = (0);
var G__36653 = (0);
seq__36277_36632 = G__36650;
chunk__36278_36633 = G__36651;
count__36279_36634 = G__36652;
i__36280_36635 = G__36653;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36655 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36655], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36655)))?cljs.core.second(arglists_36655):arglists_36655)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36291_36657 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36292_36658 = null;
var count__36293_36659 = (0);
var i__36294_36660 = (0);
while(true){
if((i__36294_36660 < count__36293_36659)){
var vec__36309_36661 = chunk__36292_36658.cljs$core$IIndexed$_nth$arity$2(null,i__36294_36660);
var name_36662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36309_36661,(0),null);
var map__36312_36663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36309_36661,(1),null);
var map__36312_36664__$1 = cljs.core.__destructure_map(map__36312_36663);
var doc_36665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312_36664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36312_36664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36662], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36666], 0));

if(cljs.core.truth_(doc_36665)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36665], 0));
} else {
}


var G__36669 = seq__36291_36657;
var G__36670 = chunk__36292_36658;
var G__36671 = count__36293_36659;
var G__36672 = (i__36294_36660 + (1));
seq__36291_36657 = G__36669;
chunk__36292_36658 = G__36670;
count__36293_36659 = G__36671;
i__36294_36660 = G__36672;
continue;
} else {
var temp__5804__auto___36673 = cljs.core.seq(seq__36291_36657);
if(temp__5804__auto___36673){
var seq__36291_36675__$1 = temp__5804__auto___36673;
if(cljs.core.chunked_seq_QMARK_(seq__36291_36675__$1)){
var c__5568__auto___36676 = cljs.core.chunk_first(seq__36291_36675__$1);
var G__36677 = cljs.core.chunk_rest(seq__36291_36675__$1);
var G__36678 = c__5568__auto___36676;
var G__36679 = cljs.core.count(c__5568__auto___36676);
var G__36680 = (0);
seq__36291_36657 = G__36677;
chunk__36292_36658 = G__36678;
count__36293_36659 = G__36679;
i__36294_36660 = G__36680;
continue;
} else {
var vec__36317_36683 = cljs.core.first(seq__36291_36675__$1);
var name_36684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36317_36683,(0),null);
var map__36320_36685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36317_36683,(1),null);
var map__36320_36686__$1 = cljs.core.__destructure_map(map__36320_36685);
var doc_36687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320_36686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320_36686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36684], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36688], 0));

if(cljs.core.truth_(doc_36687)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36687], 0));
} else {
}


var G__36690 = cljs.core.next(seq__36291_36675__$1);
var G__36691 = null;
var G__36692 = (0);
var G__36693 = (0);
seq__36291_36657 = G__36690;
chunk__36292_36658 = G__36691;
count__36293_36659 = G__36692;
i__36294_36660 = G__36693;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36325 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36326 = null;
var count__36327 = (0);
var i__36328 = (0);
while(true){
if((i__36328 < count__36327)){
var role = chunk__36326.cljs$core$IIndexed$_nth$arity$2(null,i__36328);
var temp__5804__auto___36695__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36695__$1)){
var spec_36696 = temp__5804__auto___36695__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36696)], 0));
} else {
}


var G__36701 = seq__36325;
var G__36702 = chunk__36326;
var G__36703 = count__36327;
var G__36704 = (i__36328 + (1));
seq__36325 = G__36701;
chunk__36326 = G__36702;
count__36327 = G__36703;
i__36328 = G__36704;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36325);
if(temp__5804__auto____$1){
var seq__36325__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36325__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36325__$1);
var G__36707 = cljs.core.chunk_rest(seq__36325__$1);
var G__36708 = c__5568__auto__;
var G__36709 = cljs.core.count(c__5568__auto__);
var G__36710 = (0);
seq__36325 = G__36707;
chunk__36326 = G__36708;
count__36327 = G__36709;
i__36328 = G__36710;
continue;
} else {
var role = cljs.core.first(seq__36325__$1);
var temp__5804__auto___36712__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36712__$2)){
var spec_36713 = temp__5804__auto___36712__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36713)], 0));
} else {
}


var G__36714 = cljs.core.next(seq__36325__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__36325 = G__36714;
chunk__36326 = G__36715;
count__36327 = G__36716;
i__36328 = G__36717;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36724 = cljs.core.ex_cause(t);
via = G__36723;
t = G__36724;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36471 = datafied_throwable;
var map__36471__$1 = cljs.core.__destructure_map(map__36471);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36471__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36471__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36471__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36472 = cljs.core.last(via);
var map__36472__$1 = cljs.core.__destructure_map(map__36472);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36473 = data;
var map__36473__$1 = cljs.core.__destructure_map(map__36473);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36474 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36474__$1 = cljs.core.__destructure_map(map__36474);
var top_data = map__36474__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36474__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36487 = phase;
var G__36487__$1 = (((G__36487 instanceof cljs.core.Keyword))?G__36487.fqn:null);
switch (G__36487__$1) {
case "read-source":
var map__36498 = data;
var map__36498__$1 = cljs.core.__destructure_map(map__36498);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36498__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36498__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36502 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36502__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36502,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36502);
var G__36502__$2 = (cljs.core.truth_((function (){var fexpr__36514 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36514.cljs$core$IFn$_invoke$arity$1 ? fexpr__36514.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36514.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36502__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36502__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36502__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36515 = top_data;
var G__36515__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36515,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36515);
var G__36515__$2 = (cljs.core.truth_((function (){var fexpr__36525 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36525.cljs$core$IFn$_invoke$arity$1 ? fexpr__36525.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36525.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36515__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36515__$1);
var G__36515__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36515__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36515__$2);
var G__36515__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36515__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36515__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36515__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36515__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36528 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36528,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36528,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36528,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36528,(3),null);
var G__36536 = top_data;
var G__36536__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36536);
var G__36536__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36536__$1);
var G__36536__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36536__$2);
var G__36536__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36536__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36536__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36536__$4;
}

break;
case "execution":
var vec__36545 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36545,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36442_SHARP_){
var or__5045__auto__ = (p1__36442_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36549.cljs$core$IFn$_invoke$arity$1 ? fexpr__36549.cljs$core$IFn$_invoke$arity$1(p1__36442_SHARP_) : fexpr__36549.call(null,p1__36442_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36550 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36550__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36550);
var G__36550__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36550__$1);
var G__36550__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36550__$2);
var G__36550__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36550__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36550__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36550__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36487__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36556){
var map__36557 = p__36556;
var map__36557__$1 = cljs.core.__destructure_map(map__36557);
var triage_data = map__36557__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36559 = phase;
var G__36559__$1 = (((G__36559 instanceof cljs.core.Keyword))?G__36559.fqn:null);
switch (G__36559__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36563 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36564 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36565 = loc;
var G__36566 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36574_36781 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36575_36782 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36576_36783 = true;
var _STAR_print_fn_STAR__temp_val__36577_36784 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36576_36783);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36577_36784);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36554_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36554_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36575_36782);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36574_36781);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36563,G__36564,G__36565,G__36566) : format.call(null,G__36563,G__36564,G__36565,G__36566));

break;
case "macroexpansion":
var G__36581 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36582 = cause_type;
var G__36583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36584 = loc;
var G__36585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36581,G__36582,G__36583,G__36584,G__36585) : format.call(null,G__36581,G__36582,G__36583,G__36584,G__36585));

break;
case "compile-syntax-check":
var G__36586 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36587 = cause_type;
var G__36588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36589 = loc;
var G__36590 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36586,G__36587,G__36588,G__36589,G__36590) : format.call(null,G__36586,G__36587,G__36588,G__36589,G__36590));

break;
case "compilation":
var G__36592 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36593 = cause_type;
var G__36594 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36595 = loc;
var G__36596 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36592,G__36593,G__36594,G__36595,G__36596) : format.call(null,G__36592,G__36593,G__36594,G__36595,G__36596));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36597 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36598 = symbol;
var G__36599 = loc;
var G__36600 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36604_36806 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36605_36807 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36606_36808 = true;
var _STAR_print_fn_STAR__temp_val__36607_36809 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36606_36808);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36607_36809);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36555_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36555_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36605_36807);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36604_36806);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36597,G__36598,G__36599,G__36600) : format.call(null,G__36597,G__36598,G__36599,G__36600));
} else {
var G__36608 = "Execution error%s at %s(%s).\n%s\n";
var G__36609 = cause_type;
var G__36610 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36611 = loc;
var G__36612 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36608,G__36609,G__36610,G__36611,G__36612) : format.call(null,G__36608,G__36609,G__36610,G__36611,G__36612));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36559__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
