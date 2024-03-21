goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33791 = (function (f,blockable,meta33792){
this.f = f;
this.blockable = blockable;
this.meta33792 = meta33792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33793,meta33792__$1){
var self__ = this;
var _33793__$1 = this;
return (new cljs.core.async.t_cljs$core$async33791(self__.f,self__.blockable,meta33792__$1));
}));

(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33793){
var self__ = this;
var _33793__$1 = this;
return self__.meta33792;
}));

(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33792","meta33792",2069483672,null)], null);
}));

(cljs.core.async.t_cljs$core$async33791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33791");

(cljs.core.async.t_cljs$core$async33791.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33791.
 */
cljs.core.async.__GT_t_cljs$core$async33791 = (function cljs$core$async$__GT_t_cljs$core$async33791(f,blockable,meta33792){
return (new cljs.core.async.t_cljs$core$async33791(f,blockable,meta33792));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33790 = arguments.length;
switch (G__33790) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33791(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33802 = arguments.length;
switch (G__33802) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33806 = arguments.length;
switch (G__33806) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36045 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36045) : fn1.call(null,val_36045));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36045) : fn1.call(null,val_36045));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33812 = arguments.length;
switch (G__33812) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36047 = n;
var x_36048 = (0);
while(true){
if((x_36048 < n__5636__auto___36047)){
(a[x_36048] = x_36048);

var G__36049 = (x_36048 + (1));
x_36048 = G__36049;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33816 = (function (flag,meta33817){
this.flag = flag;
this.meta33817 = meta33817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33818,meta33817__$1){
var self__ = this;
var _33818__$1 = this;
return (new cljs.core.async.t_cljs$core$async33816(self__.flag,meta33817__$1));
}));

(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33818){
var self__ = this;
var _33818__$1 = this;
return self__.meta33817;
}));

(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33817","meta33817",1166563087,null)], null);
}));

(cljs.core.async.t_cljs$core$async33816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33816");

(cljs.core.async.t_cljs$core$async33816.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33816.
 */
cljs.core.async.__GT_t_cljs$core$async33816 = (function cljs$core$async$__GT_t_cljs$core$async33816(flag,meta33817){
return (new cljs.core.async.t_cljs$core$async33816(flag,meta33817));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33816(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33844 = (function (flag,cb,meta33845){
this.flag = flag;
this.cb = cb;
this.meta33845 = meta33845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33846,meta33845__$1){
var self__ = this;
var _33846__$1 = this;
return (new cljs.core.async.t_cljs$core$async33844(self__.flag,self__.cb,meta33845__$1));
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33846){
var self__ = this;
var _33846__$1 = this;
return self__.meta33845;
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33845","meta33845",-44533203,null)], null);
}));

(cljs.core.async.t_cljs$core$async33844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33844");

(cljs.core.async.t_cljs$core$async33844.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33844.
 */
cljs.core.async.__GT_t_cljs$core$async33844 = (function cljs$core$async$__GT_t_cljs$core$async33844(flag,cb,meta33845){
return (new cljs.core.async.t_cljs$core$async33844(flag,cb,meta33845));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33844(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33851_SHARP_){
var G__33875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33851_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33875) : fret.call(null,G__33875));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33852_SHARP_){
var G__33876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33852_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33876) : fret.call(null,G__33876));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36055 = (i + (1));
i = G__36055;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36056 = arguments.length;
var i__5770__auto___36057 = (0);
while(true){
if((i__5770__auto___36057 < len__5769__auto___36056)){
args__5775__auto__.push((arguments[i__5770__auto___36057]));

var G__36062 = (i__5770__auto___36057 + (1));
i__5770__auto___36057 = G__36062;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33922){
var map__33923 = p__33922;
var map__33923__$1 = cljs.core.__destructure_map(map__33923);
var opts = map__33923__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33903){
var G__33904 = cljs.core.first(seq33903);
var seq33903__$1 = cljs.core.next(seq33903);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33904,seq33903__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33928 = arguments.length;
switch (G__33928) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33685__auto___36066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_33969){
var state_val_33970 = (state_33969[(1)]);
if((state_val_33970 === (7))){
var inst_33964 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
var statearr_33972_36067 = state_33969__$1;
(statearr_33972_36067[(2)] = inst_33964);

(statearr_33972_36067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (1))){
var state_33969__$1 = state_33969;
var statearr_33973_36068 = state_33969__$1;
(statearr_33973_36068[(2)] = null);

(statearr_33973_36068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (4))){
var inst_33946 = (state_33969[(7)]);
var inst_33946__$1 = (state_33969[(2)]);
var inst_33947 = (inst_33946__$1 == null);
var state_33969__$1 = (function (){var statearr_33974 = state_33969;
(statearr_33974[(7)] = inst_33946__$1);

return statearr_33974;
})();
if(cljs.core.truth_(inst_33947)){
var statearr_33976_36069 = state_33969__$1;
(statearr_33976_36069[(1)] = (5));

} else {
var statearr_33977_36070 = state_33969__$1;
(statearr_33977_36070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (13))){
var state_33969__$1 = state_33969;
var statearr_33978_36071 = state_33969__$1;
(statearr_33978_36071[(2)] = null);

(statearr_33978_36071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (6))){
var inst_33946 = (state_33969[(7)]);
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33969__$1,(11),to,inst_33946);
} else {
if((state_val_33970 === (3))){
var inst_33966 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33969__$1,inst_33966);
} else {
if((state_val_33970 === (12))){
var state_33969__$1 = state_33969;
var statearr_33980_36074 = state_33969__$1;
(statearr_33980_36074[(2)] = null);

(statearr_33980_36074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (2))){
var state_33969__$1 = state_33969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33969__$1,(4),from);
} else {
if((state_val_33970 === (11))){
var inst_33957 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
if(cljs.core.truth_(inst_33957)){
var statearr_33981_36075 = state_33969__$1;
(statearr_33981_36075[(1)] = (12));

} else {
var statearr_33982_36076 = state_33969__$1;
(statearr_33982_36076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (9))){
var state_33969__$1 = state_33969;
var statearr_33983_36077 = state_33969__$1;
(statearr_33983_36077[(2)] = null);

(statearr_33983_36077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (5))){
var state_33969__$1 = state_33969;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33984_36078 = state_33969__$1;
(statearr_33984_36078[(1)] = (8));

} else {
var statearr_33985_36079 = state_33969__$1;
(statearr_33985_36079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (14))){
var inst_33962 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
var statearr_33986_36080 = state_33969__$1;
(statearr_33986_36080[(2)] = inst_33962);

(statearr_33986_36080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (10))){
var inst_33954 = (state_33969[(2)]);
var state_33969__$1 = state_33969;
var statearr_33987_36081 = state_33969__$1;
(statearr_33987_36081[(2)] = inst_33954);

(statearr_33987_36081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33970 === (8))){
var inst_33951 = cljs.core.async.close_BANG_(to);
var state_33969__$1 = state_33969;
var statearr_33989_36083 = state_33969__$1;
(statearr_33989_36083[(2)] = inst_33951);

(statearr_33989_36083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_33990 = [null,null,null,null,null,null,null,null];
(statearr_33990[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_33990[(1)] = (1));

return statearr_33990;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_33969){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_33969);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e33991){var ex__33340__auto__ = e33991;
var statearr_33992_36084 = state_33969;
(statearr_33992_36084[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_33969[(4)]))){
var statearr_33993_36085 = state_33969;
(statearr_33993_36085[(1)] = cljs.core.first((state_33969[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36086 = state_33969;
state_33969 = G__36086;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_33969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_33969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_33995 = f__33686__auto__();
(statearr_33995[(6)] = c__33685__auto___36066);

return statearr_33995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33997){
var vec__33998 = p__33997;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33998,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33998,(1),null);
var job = vec__33998;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33685__auto___36089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34006){
var state_val_34007 = (state_34006[(1)]);
if((state_val_34007 === (1))){
var state_34006__$1 = state_34006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34006__$1,(2),res,v);
} else {
if((state_val_34007 === (2))){
var inst_34003 = (state_34006[(2)]);
var inst_34004 = cljs.core.async.close_BANG_(res);
var state_34006__$1 = (function (){var statearr_34008 = state_34006;
(statearr_34008[(7)] = inst_34003);

return statearr_34008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34006__$1,inst_34004);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_34009 = [null,null,null,null,null,null,null,null];
(statearr_34009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1 = (function (state_34006){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34006);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34010){var ex__33340__auto__ = e34010;
var statearr_34011_36091 = state_34006;
(statearr_34011_36091[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34006[(4)]))){
var statearr_34012_36093 = state_34006;
(statearr_34012_36093[(1)] = cljs.core.first((state_34006[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36094 = state_34006;
state_34006 = G__36094;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = function(state_34006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1.call(this,state_34006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34014 = f__33686__auto__();
(statearr_34014[(6)] = c__33685__auto___36089);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34015){
var vec__34016 = p__34015;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34016,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34016,(1),null);
var job = vec__34016;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36096 = n;
var __36097 = (0);
while(true){
if((__36097 < n__5636__auto___36096)){
var G__34019_36098 = type;
var G__34019_36099__$1 = (((G__34019_36098 instanceof cljs.core.Keyword))?G__34019_36098.fqn:null);
switch (G__34019_36099__$1) {
case "compute":
var c__33685__auto___36102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36097,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = ((function (__36097,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function (state_34033){
var state_val_34034 = (state_34033[(1)]);
if((state_val_34034 === (1))){
var state_34033__$1 = state_34033;
var statearr_34035_36103 = state_34033__$1;
(statearr_34035_36103[(2)] = null);

(statearr_34035_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34034 === (2))){
var state_34033__$1 = state_34033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34033__$1,(4),jobs);
} else {
if((state_val_34034 === (3))){
var inst_34030 = (state_34033[(2)]);
var state_34033__$1 = state_34033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34033__$1,inst_34030);
} else {
if((state_val_34034 === (4))){
var inst_34022 = (state_34033[(2)]);
var inst_34023 = process__$1(inst_34022);
var state_34033__$1 = state_34033;
if(cljs.core.truth_(inst_34023)){
var statearr_34036_36104 = state_34033__$1;
(statearr_34036_36104[(1)] = (5));

} else {
var statearr_34037_36105 = state_34033__$1;
(statearr_34037_36105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34034 === (5))){
var state_34033__$1 = state_34033;
var statearr_34039_36106 = state_34033__$1;
(statearr_34039_36106[(2)] = null);

(statearr_34039_36106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34034 === (6))){
var state_34033__$1 = state_34033;
var statearr_34040_36107 = state_34033__$1;
(statearr_34040_36107[(2)] = null);

(statearr_34040_36107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34034 === (7))){
var inst_34028 = (state_34033[(2)]);
var state_34033__$1 = state_34033;
var statearr_34041_36108 = state_34033__$1;
(statearr_34041_36108[(2)] = inst_34028);

(statearr_34041_36108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36097,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
;
return ((function (__36097,switch__33336__auto__,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_34042 = [null,null,null,null,null,null,null];
(statearr_34042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__);

(statearr_34042[(1)] = (1));

return statearr_34042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1 = (function (state_34033){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34033);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34043){var ex__33340__auto__ = e34043;
var statearr_34044_36111 = state_34033;
(statearr_34044_36111[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34033[(4)]))){
var statearr_34045_36112 = state_34033;
(statearr_34045_36112[(1)] = cljs.core.first((state_34033[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36113 = state_34033;
state_34033 = G__36113;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = function(state_34033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1.call(this,state_34033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__;
})()
;})(__36097,switch__33336__auto__,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
})();
var state__33687__auto__ = (function (){var statearr_34046 = f__33686__auto__();
(statearr_34046[(6)] = c__33685__auto___36102);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
});})(__36097,c__33685__auto___36102,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
);


break;
case "async":
var c__33685__auto___36115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36097,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = ((function (__36097,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function (state_34060){
var state_val_34061 = (state_34060[(1)]);
if((state_val_34061 === (1))){
var state_34060__$1 = state_34060;
var statearr_34062_36119 = state_34060__$1;
(statearr_34062_36119[(2)] = null);

(statearr_34062_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (2))){
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34060__$1,(4),jobs);
} else {
if((state_val_34061 === (3))){
var inst_34058 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34060__$1,inst_34058);
} else {
if((state_val_34061 === (4))){
var inst_34050 = (state_34060[(2)]);
var inst_34051 = async(inst_34050);
var state_34060__$1 = state_34060;
if(cljs.core.truth_(inst_34051)){
var statearr_34063_36121 = state_34060__$1;
(statearr_34063_36121[(1)] = (5));

} else {
var statearr_34065_36122 = state_34060__$1;
(statearr_34065_36122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (5))){
var state_34060__$1 = state_34060;
var statearr_34066_36124 = state_34060__$1;
(statearr_34066_36124[(2)] = null);

(statearr_34066_36124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (6))){
var state_34060__$1 = state_34060;
var statearr_34067_36125 = state_34060__$1;
(statearr_34067_36125[(2)] = null);

(statearr_34067_36125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (7))){
var inst_34056 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34068_36129 = state_34060__$1;
(statearr_34068_36129[(2)] = inst_34056);

(statearr_34068_36129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36097,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
;
return ((function (__36097,switch__33336__auto__,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_34069 = [null,null,null,null,null,null,null];
(statearr_34069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__);

(statearr_34069[(1)] = (1));

return statearr_34069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1 = (function (state_34060){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34060);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34070){var ex__33340__auto__ = e34070;
var statearr_34071_36130 = state_34060;
(statearr_34071_36130[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34060[(4)]))){
var statearr_34072_36131 = state_34060;
(statearr_34072_36131[(1)] = cljs.core.first((state_34060[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36132 = state_34060;
state_34060 = G__36132;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = function(state_34060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1.call(this,state_34060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__;
})()
;})(__36097,switch__33336__auto__,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
})();
var state__33687__auto__ = (function (){var statearr_34074 = f__33686__auto__();
(statearr_34074[(6)] = c__33685__auto___36115);

return statearr_34074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
});})(__36097,c__33685__auto___36115,G__34019_36098,G__34019_36099__$1,n__5636__auto___36096,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34019_36099__$1)].join('')));

}

var G__36133 = (__36097 + (1));
__36097 = G__36133;
continue;
} else {
}
break;
}

var c__33685__auto___36134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34096){
var state_val_34097 = (state_34096[(1)]);
if((state_val_34097 === (7))){
var inst_34092 = (state_34096[(2)]);
var state_34096__$1 = state_34096;
var statearr_34099_36137 = state_34096__$1;
(statearr_34099_36137[(2)] = inst_34092);

(statearr_34099_36137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34097 === (1))){
var state_34096__$1 = state_34096;
var statearr_34100_36138 = state_34096__$1;
(statearr_34100_36138[(2)] = null);

(statearr_34100_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34097 === (4))){
var inst_34077 = (state_34096[(7)]);
var inst_34077__$1 = (state_34096[(2)]);
var inst_34078 = (inst_34077__$1 == null);
var state_34096__$1 = (function (){var statearr_34101 = state_34096;
(statearr_34101[(7)] = inst_34077__$1);

return statearr_34101;
})();
if(cljs.core.truth_(inst_34078)){
var statearr_34102_36139 = state_34096__$1;
(statearr_34102_36139[(1)] = (5));

} else {
var statearr_34103_36140 = state_34096__$1;
(statearr_34103_36140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34097 === (6))){
var inst_34077 = (state_34096[(7)]);
var inst_34082 = (state_34096[(8)]);
var inst_34082__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34084 = [inst_34077,inst_34082__$1];
var inst_34085 = (new cljs.core.PersistentVector(null,2,(5),inst_34083,inst_34084,null));
var state_34096__$1 = (function (){var statearr_34105 = state_34096;
(statearr_34105[(8)] = inst_34082__$1);

return statearr_34105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34096__$1,(8),jobs,inst_34085);
} else {
if((state_val_34097 === (3))){
var inst_34094 = (state_34096[(2)]);
var state_34096__$1 = state_34096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34096__$1,inst_34094);
} else {
if((state_val_34097 === (2))){
var state_34096__$1 = state_34096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34096__$1,(4),from);
} else {
if((state_val_34097 === (9))){
var inst_34089 = (state_34096[(2)]);
var state_34096__$1 = (function (){var statearr_34106 = state_34096;
(statearr_34106[(9)] = inst_34089);

return statearr_34106;
})();
var statearr_34107_36141 = state_34096__$1;
(statearr_34107_36141[(2)] = null);

(statearr_34107_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34097 === (5))){
var inst_34080 = cljs.core.async.close_BANG_(jobs);
var state_34096__$1 = state_34096;
var statearr_34109_36142 = state_34096__$1;
(statearr_34109_36142[(2)] = inst_34080);

(statearr_34109_36142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34097 === (8))){
var inst_34082 = (state_34096[(8)]);
var inst_34087 = (state_34096[(2)]);
var state_34096__$1 = (function (){var statearr_34111 = state_34096;
(statearr_34111[(10)] = inst_34087);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34096__$1,(9),results,inst_34082);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1 = (function (state_34096){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34096);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34113){var ex__33340__auto__ = e34113;
var statearr_34114_36145 = state_34096;
(statearr_34114_36145[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34096[(4)]))){
var statearr_34115_36146 = state_34096;
(statearr_34115_36146[(1)] = cljs.core.first((state_34096[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36147 = state_34096;
state_34096 = G__36147;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = function(state_34096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1.call(this,state_34096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34116 = f__33686__auto__();
(statearr_34116[(6)] = c__33685__auto___36134);

return statearr_34116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


var c__33685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (7))){
var inst_34152 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34158_36148 = state_34156__$1;
(statearr_34158_36148[(2)] = inst_34152);

(statearr_34158_36148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (20))){
var state_34156__$1 = state_34156;
var statearr_34159_36149 = state_34156__$1;
(statearr_34159_36149[(2)] = null);

(statearr_34159_36149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (1))){
var state_34156__$1 = state_34156;
var statearr_34160_36150 = state_34156__$1;
(statearr_34160_36150[(2)] = null);

(statearr_34160_36150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (4))){
var inst_34119 = (state_34156[(7)]);
var inst_34119__$1 = (state_34156[(2)]);
var inst_34120 = (inst_34119__$1 == null);
var state_34156__$1 = (function (){var statearr_34161 = state_34156;
(statearr_34161[(7)] = inst_34119__$1);

return statearr_34161;
})();
if(cljs.core.truth_(inst_34120)){
var statearr_34162_36151 = state_34156__$1;
(statearr_34162_36151[(1)] = (5));

} else {
var statearr_34163_36152 = state_34156__$1;
(statearr_34163_36152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (15))){
var inst_34132 = (state_34156[(8)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34156__$1,(18),to,inst_34132);
} else {
if((state_val_34157 === (21))){
var inst_34147 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34164_36153 = state_34156__$1;
(statearr_34164_36153[(2)] = inst_34147);

(statearr_34164_36153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (13))){
var inst_34149 = (state_34156[(2)]);
var state_34156__$1 = (function (){var statearr_34165 = state_34156;
(statearr_34165[(9)] = inst_34149);

return statearr_34165;
})();
var statearr_34166_36154 = state_34156__$1;
(statearr_34166_36154[(2)] = null);

(statearr_34166_36154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var inst_34119 = (state_34156[(7)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34156__$1,(11),inst_34119);
} else {
if((state_val_34157 === (17))){
var inst_34142 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34142)){
var statearr_34167_36159 = state_34156__$1;
(statearr_34167_36159[(1)] = (19));

} else {
var statearr_34168_36160 = state_34156__$1;
(statearr_34168_36160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (3))){
var inst_34154 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (12))){
var inst_34129 = (state_34156[(10)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34156__$1,(14),inst_34129);
} else {
if((state_val_34157 === (2))){
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34156__$1,(4),results);
} else {
if((state_val_34157 === (19))){
var state_34156__$1 = state_34156;
var statearr_34169_36161 = state_34156__$1;
(statearr_34169_36161[(2)] = null);

(statearr_34169_36161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (11))){
var inst_34129 = (state_34156[(2)]);
var state_34156__$1 = (function (){var statearr_34170 = state_34156;
(statearr_34170[(10)] = inst_34129);

return statearr_34170;
})();
var statearr_34171_36165 = state_34156__$1;
(statearr_34171_36165[(2)] = null);

(statearr_34171_36165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (9))){
var state_34156__$1 = state_34156;
var statearr_34173_36166 = state_34156__$1;
(statearr_34173_36166[(2)] = null);

(statearr_34173_36166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (5))){
var state_34156__$1 = state_34156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34175_36167 = state_34156__$1;
(statearr_34175_36167[(1)] = (8));

} else {
var statearr_34176_36168 = state_34156__$1;
(statearr_34176_36168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (14))){
var inst_34132 = (state_34156[(8)]);
var inst_34134 = (state_34156[(11)]);
var inst_34132__$1 = (state_34156[(2)]);
var inst_34133 = (inst_34132__$1 == null);
var inst_34134__$1 = cljs.core.not(inst_34133);
var state_34156__$1 = (function (){var statearr_34177 = state_34156;
(statearr_34177[(8)] = inst_34132__$1);

(statearr_34177[(11)] = inst_34134__$1);

return statearr_34177;
})();
if(inst_34134__$1){
var statearr_34178_36169 = state_34156__$1;
(statearr_34178_36169[(1)] = (15));

} else {
var statearr_34179_36170 = state_34156__$1;
(statearr_34179_36170[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (16))){
var inst_34134 = (state_34156[(11)]);
var state_34156__$1 = state_34156;
var statearr_34180_36171 = state_34156__$1;
(statearr_34180_36171[(2)] = inst_34134);

(statearr_34180_36171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (10))){
var inst_34126 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34181_36172 = state_34156__$1;
(statearr_34181_36172[(2)] = inst_34126);

(statearr_34181_36172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (18))){
var inst_34139 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34182_36173 = state_34156__$1;
(statearr_34182_36173[(2)] = inst_34139);

(statearr_34182_36173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (8))){
var inst_34123 = cljs.core.async.close_BANG_(to);
var state_34156__$1 = state_34156;
var statearr_34183_36174 = state_34156__$1;
(statearr_34183_36174[(2)] = inst_34123);

(statearr_34183_36174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_34184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__);

(statearr_34184[(1)] = (1));

return statearr_34184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1 = (function (state_34156){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34156);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34185){var ex__33340__auto__ = e34185;
var statearr_34186_36176 = state_34156;
(statearr_34186_36176[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34156[(4)]))){
var statearr_34187_36177 = state_34156;
(statearr_34187_36177[(1)] = cljs.core.first((state_34156[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36178 = state_34156;
state_34156 = G__36178;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34188 = f__33686__auto__();
(statearr_34188[(6)] = c__33685__auto__);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

return c__33685__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34193 = arguments.length;
switch (G__34193) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34202 = arguments.length;
switch (G__34202) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34216 = arguments.length;
switch (G__34216) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33685__auto___36197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34253){
var state_val_34255 = (state_34253[(1)]);
if((state_val_34255 === (7))){
var inst_34249 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
var statearr_34259_36198 = state_34253__$1;
(statearr_34259_36198[(2)] = inst_34249);

(statearr_34259_36198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (1))){
var state_34253__$1 = state_34253;
var statearr_34261_36203 = state_34253__$1;
(statearr_34261_36203[(2)] = null);

(statearr_34261_36203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (4))){
var inst_34226 = (state_34253[(7)]);
var inst_34226__$1 = (state_34253[(2)]);
var inst_34228 = (inst_34226__$1 == null);
var state_34253__$1 = (function (){var statearr_34265 = state_34253;
(statearr_34265[(7)] = inst_34226__$1);

return statearr_34265;
})();
if(cljs.core.truth_(inst_34228)){
var statearr_34266_36207 = state_34253__$1;
(statearr_34266_36207[(1)] = (5));

} else {
var statearr_34268_36208 = state_34253__$1;
(statearr_34268_36208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (13))){
var state_34253__$1 = state_34253;
var statearr_34269_36209 = state_34253__$1;
(statearr_34269_36209[(2)] = null);

(statearr_34269_36209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (6))){
var inst_34226 = (state_34253[(7)]);
var inst_34236 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34226) : p.call(null,inst_34226));
var state_34253__$1 = state_34253;
if(cljs.core.truth_(inst_34236)){
var statearr_34273_36210 = state_34253__$1;
(statearr_34273_36210[(1)] = (9));

} else {
var statearr_34274_36214 = state_34253__$1;
(statearr_34274_36214[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (3))){
var inst_34251 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34253__$1,inst_34251);
} else {
if((state_val_34255 === (12))){
var state_34253__$1 = state_34253;
var statearr_34279_36215 = state_34253__$1;
(statearr_34279_36215[(2)] = null);

(statearr_34279_36215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (2))){
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34253__$1,(4),ch);
} else {
if((state_val_34255 === (11))){
var inst_34226 = (state_34253[(7)]);
var inst_34240 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34253__$1,(8),inst_34240,inst_34226);
} else {
if((state_val_34255 === (9))){
var state_34253__$1 = state_34253;
var statearr_34283_36216 = state_34253__$1;
(statearr_34283_36216[(2)] = tc);

(statearr_34283_36216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (5))){
var inst_34232 = cljs.core.async.close_BANG_(tc);
var inst_34234 = cljs.core.async.close_BANG_(fc);
var state_34253__$1 = (function (){var statearr_34285 = state_34253;
(statearr_34285[(8)] = inst_34232);

return statearr_34285;
})();
var statearr_34287_36220 = state_34253__$1;
(statearr_34287_36220[(2)] = inst_34234);

(statearr_34287_36220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (14))){
var inst_34247 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
var statearr_34292_36221 = state_34253__$1;
(statearr_34292_36221[(2)] = inst_34247);

(statearr_34292_36221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (10))){
var state_34253__$1 = state_34253;
var statearr_34295_36222 = state_34253__$1;
(statearr_34295_36222[(2)] = fc);

(statearr_34295_36222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34255 === (8))){
var inst_34242 = (state_34253[(2)]);
var state_34253__$1 = state_34253;
if(cljs.core.truth_(inst_34242)){
var statearr_34297_36223 = state_34253__$1;
(statearr_34297_36223[(1)] = (12));

} else {
var statearr_34298_36224 = state_34253__$1;
(statearr_34298_36224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_34303 = [null,null,null,null,null,null,null,null,null];
(statearr_34303[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_34303[(1)] = (1));

return statearr_34303;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_34253){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34253);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34304){var ex__33340__auto__ = e34304;
var statearr_34305_36232 = state_34253;
(statearr_34305_36232[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34253[(4)]))){
var statearr_34307_36233 = state_34253;
(statearr_34307_36233[(1)] = cljs.core.first((state_34253[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36234 = state_34253;
state_34253 = G__36234;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_34253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_34253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34311 = f__33686__auto__();
(statearr_34311[(6)] = c__33685__auto___36197);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34342){
var state_val_34343 = (state_34342[(1)]);
if((state_val_34343 === (7))){
var inst_34337 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34350_36238 = state_34342__$1;
(statearr_34350_36238[(2)] = inst_34337);

(statearr_34350_36238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (1))){
var inst_34317 = init;
var inst_34318 = inst_34317;
var state_34342__$1 = (function (){var statearr_34352 = state_34342;
(statearr_34352[(7)] = inst_34318);

return statearr_34352;
})();
var statearr_34354_36239 = state_34342__$1;
(statearr_34354_36239[(2)] = null);

(statearr_34354_36239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (4))){
var inst_34321 = (state_34342[(8)]);
var inst_34321__$1 = (state_34342[(2)]);
var inst_34322 = (inst_34321__$1 == null);
var state_34342__$1 = (function (){var statearr_34358 = state_34342;
(statearr_34358[(8)] = inst_34321__$1);

return statearr_34358;
})();
if(cljs.core.truth_(inst_34322)){
var statearr_34359_36243 = state_34342__$1;
(statearr_34359_36243[(1)] = (5));

} else {
var statearr_34360_36244 = state_34342__$1;
(statearr_34360_36244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (6))){
var inst_34318 = (state_34342[(7)]);
var inst_34325 = (state_34342[(9)]);
var inst_34321 = (state_34342[(8)]);
var inst_34325__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34318,inst_34321) : f.call(null,inst_34318,inst_34321));
var inst_34326 = cljs.core.reduced_QMARK_(inst_34325__$1);
var state_34342__$1 = (function (){var statearr_34365 = state_34342;
(statearr_34365[(9)] = inst_34325__$1);

return statearr_34365;
})();
if(inst_34326){
var statearr_34367_36245 = state_34342__$1;
(statearr_34367_36245[(1)] = (8));

} else {
var statearr_34368_36246 = state_34342__$1;
(statearr_34368_36246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (3))){
var inst_34339 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34342__$1,inst_34339);
} else {
if((state_val_34343 === (2))){
var state_34342__$1 = state_34342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34342__$1,(4),ch);
} else {
if((state_val_34343 === (9))){
var inst_34325 = (state_34342[(9)]);
var inst_34318 = inst_34325;
var state_34342__$1 = (function (){var statearr_34373 = state_34342;
(statearr_34373[(7)] = inst_34318);

return statearr_34373;
})();
var statearr_34374_36250 = state_34342__$1;
(statearr_34374_36250[(2)] = null);

(statearr_34374_36250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (5))){
var inst_34318 = (state_34342[(7)]);
var state_34342__$1 = state_34342;
var statearr_34376_36251 = state_34342__$1;
(statearr_34376_36251[(2)] = inst_34318);

(statearr_34376_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (10))){
var inst_34335 = (state_34342[(2)]);
var state_34342__$1 = state_34342;
var statearr_34377_36252 = state_34342__$1;
(statearr_34377_36252[(2)] = inst_34335);

(statearr_34377_36252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34343 === (8))){
var inst_34325 = (state_34342[(9)]);
var inst_34330 = cljs.core.deref(inst_34325);
var state_34342__$1 = state_34342;
var statearr_34381_36253 = state_34342__$1;
(statearr_34381_36253[(2)] = inst_34330);

(statearr_34381_36253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33337__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33337__auto____0 = (function (){
var statearr_34383 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34383[(0)] = cljs$core$async$reduce_$_state_machine__33337__auto__);

(statearr_34383[(1)] = (1));

return statearr_34383;
});
var cljs$core$async$reduce_$_state_machine__33337__auto____1 = (function (state_34342){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34342);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34388){var ex__33340__auto__ = e34388;
var statearr_34389_36255 = state_34342;
(statearr_34389_36255[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34342[(4)]))){
var statearr_34390_36256 = state_34342;
(statearr_34390_36256[(1)] = cljs.core.first((state_34342[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36257 = state_34342;
state_34342 = G__36257;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33337__auto__ = function(state_34342){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33337__auto____1.call(this,state_34342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33337__auto____0;
cljs$core$async$reduce_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33337__auto____1;
return cljs$core$async$reduce_$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34395 = f__33686__auto__();
(statearr_34395[(6)] = c__33685__auto__);

return statearr_34395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

return c__33685__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (1))){
var inst_34402 = cljs.core.async.reduce(f__$1,init,ch);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(2),inst_34402);
} else {
if((state_val_34409 === (2))){
var inst_34404 = (state_34408[(2)]);
var inst_34405 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34404) : f__$1.call(null,inst_34404));
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34405);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33337__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33337__auto____0 = (function (){
var statearr_34416 = [null,null,null,null,null,null,null];
(statearr_34416[(0)] = cljs$core$async$transduce_$_state_machine__33337__auto__);

(statearr_34416[(1)] = (1));

return statearr_34416;
});
var cljs$core$async$transduce_$_state_machine__33337__auto____1 = (function (state_34408){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34408);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34418){var ex__33340__auto__ = e34418;
var statearr_34419_36258 = state_34408;
(statearr_34419_36258[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34408[(4)]))){
var statearr_34423_36259 = state_34408;
(statearr_34423_36259[(1)] = cljs.core.first((state_34408[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36260 = state_34408;
state_34408 = G__36260;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33337__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33337__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33337__auto____0;
cljs$core$async$transduce_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33337__auto____1;
return cljs$core$async$transduce_$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34425 = f__33686__auto__();
(statearr_34425[(6)] = c__33685__auto__);

return statearr_34425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

return c__33685__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34431 = arguments.length;
switch (G__34431) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34465){
var state_val_34466 = (state_34465[(1)]);
if((state_val_34466 === (7))){
var inst_34445 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34474_36262 = state_34465__$1;
(statearr_34474_36262[(2)] = inst_34445);

(statearr_34474_36262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (1))){
var inst_34436 = cljs.core.seq(coll);
var inst_34438 = inst_34436;
var state_34465__$1 = (function (){var statearr_34478 = state_34465;
(statearr_34478[(7)] = inst_34438);

return statearr_34478;
})();
var statearr_34479_36263 = state_34465__$1;
(statearr_34479_36263[(2)] = null);

(statearr_34479_36263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (4))){
var inst_34438 = (state_34465[(7)]);
var inst_34443 = cljs.core.first(inst_34438);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34465__$1,(7),ch,inst_34443);
} else {
if((state_val_34466 === (13))){
var inst_34459 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34483_36264 = state_34465__$1;
(statearr_34483_36264[(2)] = inst_34459);

(statearr_34483_36264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (6))){
var inst_34448 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
if(cljs.core.truth_(inst_34448)){
var statearr_34485_36265 = state_34465__$1;
(statearr_34485_36265[(1)] = (8));

} else {
var statearr_34487_36266 = state_34465__$1;
(statearr_34487_36266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (3))){
var inst_34463 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34465__$1,inst_34463);
} else {
if((state_val_34466 === (12))){
var state_34465__$1 = state_34465;
var statearr_34491_36268 = state_34465__$1;
(statearr_34491_36268[(2)] = null);

(statearr_34491_36268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (2))){
var inst_34438 = (state_34465[(7)]);
var state_34465__$1 = state_34465;
if(cljs.core.truth_(inst_34438)){
var statearr_34493_36270 = state_34465__$1;
(statearr_34493_36270[(1)] = (4));

} else {
var statearr_34494_36271 = state_34465__$1;
(statearr_34494_36271[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (11))){
var inst_34456 = cljs.core.async.close_BANG_(ch);
var state_34465__$1 = state_34465;
var statearr_34498_36272 = state_34465__$1;
(statearr_34498_36272[(2)] = inst_34456);

(statearr_34498_36272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (9))){
var state_34465__$1 = state_34465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34501_36273 = state_34465__$1;
(statearr_34501_36273[(1)] = (11));

} else {
var statearr_34503_36274 = state_34465__$1;
(statearr_34503_36274[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (5))){
var inst_34438 = (state_34465[(7)]);
var state_34465__$1 = state_34465;
var statearr_34504_36275 = state_34465__$1;
(statearr_34504_36275[(2)] = inst_34438);

(statearr_34504_36275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (10))){
var inst_34461 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34508_36276 = state_34465__$1;
(statearr_34508_36276[(2)] = inst_34461);

(statearr_34508_36276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (8))){
var inst_34438 = (state_34465[(7)]);
var inst_34451 = cljs.core.next(inst_34438);
var inst_34438__$1 = inst_34451;
var state_34465__$1 = (function (){var statearr_34510 = state_34465;
(statearr_34510[(7)] = inst_34438__$1);

return statearr_34510;
})();
var statearr_34511_36281 = state_34465__$1;
(statearr_34511_36281[(2)] = null);

(statearr_34511_36281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_34465){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34465);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34517){var ex__33340__auto__ = e34517;
var statearr_34519_36282 = state_34465;
(statearr_34519_36282[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34465[(4)]))){
var statearr_34522_36283 = state_34465;
(statearr_34522_36283[(1)] = cljs.core.first((state_34465[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36284 = state_34465;
state_34465 = G__36284;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_34465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_34465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34525 = f__33686__auto__();
(statearr_34525[(6)] = c__33685__auto__);

return statearr_34525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

return c__33685__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34532 = arguments.length;
switch (G__34532) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36288 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36288(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36290 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36290(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36296 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36296(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36302 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36302(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34535 = (function (ch,cs,meta34536){
this.ch = ch;
this.cs = cs;
this.meta34536 = meta34536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34537,meta34536__$1){
var self__ = this;
var _34537__$1 = this;
return (new cljs.core.async.t_cljs$core$async34535(self__.ch,self__.cs,meta34536__$1));
}));

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34537){
var self__ = this;
var _34537__$1 = this;
return self__.meta34536;
}));

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34535.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34536","meta34536",-1219680009,null)], null);
}));

(cljs.core.async.t_cljs$core$async34535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34535");

(cljs.core.async.t_cljs$core$async34535.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34535.
 */
cljs.core.async.__GT_t_cljs$core$async34535 = (function cljs$core$async$__GT_t_cljs$core$async34535(ch,cs,meta34536){
return (new cljs.core.async.t_cljs$core$async34535(ch,cs,meta34536));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34535(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33685__auto___36313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34697){
var state_val_34698 = (state_34697[(1)]);
if((state_val_34698 === (7))){
var inst_34689 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34703_36314 = state_34697__$1;
(statearr_34703_36314[(2)] = inst_34689);

(statearr_34703_36314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (20))){
var inst_34582 = (state_34697[(7)]);
var inst_34594 = cljs.core.first(inst_34582);
var inst_34595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34594,(0),null);
var inst_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34594,(1),null);
var state_34697__$1 = (function (){var statearr_34704 = state_34697;
(statearr_34704[(8)] = inst_34595);

return statearr_34704;
})();
if(cljs.core.truth_(inst_34596)){
var statearr_34706_36315 = state_34697__$1;
(statearr_34706_36315[(1)] = (22));

} else {
var statearr_34707_36316 = state_34697__$1;
(statearr_34707_36316[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (27))){
var inst_34639 = (state_34697[(9)]);
var inst_34550 = (state_34697[(10)]);
var inst_34631 = (state_34697[(11)]);
var inst_34633 = (state_34697[(12)]);
var inst_34639__$1 = cljs.core._nth(inst_34631,inst_34633);
var inst_34640 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34639__$1,inst_34550,done);
var state_34697__$1 = (function (){var statearr_34708 = state_34697;
(statearr_34708[(9)] = inst_34639__$1);

return statearr_34708;
})();
if(cljs.core.truth_(inst_34640)){
var statearr_34709_36321 = state_34697__$1;
(statearr_34709_36321[(1)] = (30));

} else {
var statearr_34710_36322 = state_34697__$1;
(statearr_34710_36322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (1))){
var state_34697__$1 = state_34697;
var statearr_34715_36323 = state_34697__$1;
(statearr_34715_36323[(2)] = null);

(statearr_34715_36323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (24))){
var inst_34582 = (state_34697[(7)]);
var inst_34601 = (state_34697[(2)]);
var inst_34602 = cljs.core.next(inst_34582);
var inst_34560 = inst_34602;
var inst_34561 = null;
var inst_34562 = (0);
var inst_34563 = (0);
var state_34697__$1 = (function (){var statearr_34720 = state_34697;
(statearr_34720[(13)] = inst_34560);

(statearr_34720[(14)] = inst_34601);

(statearr_34720[(15)] = inst_34561);

(statearr_34720[(16)] = inst_34562);

(statearr_34720[(17)] = inst_34563);

return statearr_34720;
})();
var statearr_34721_36329 = state_34697__$1;
(statearr_34721_36329[(2)] = null);

(statearr_34721_36329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (39))){
var state_34697__$1 = state_34697;
var statearr_34729_36331 = state_34697__$1;
(statearr_34729_36331[(2)] = null);

(statearr_34729_36331[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (4))){
var inst_34550 = (state_34697[(10)]);
var inst_34550__$1 = (state_34697[(2)]);
var inst_34551 = (inst_34550__$1 == null);
var state_34697__$1 = (function (){var statearr_34730 = state_34697;
(statearr_34730[(10)] = inst_34550__$1);

return statearr_34730;
})();
if(cljs.core.truth_(inst_34551)){
var statearr_34734_36333 = state_34697__$1;
(statearr_34734_36333[(1)] = (5));

} else {
var statearr_34735_36335 = state_34697__$1;
(statearr_34735_36335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (15))){
var inst_34560 = (state_34697[(13)]);
var inst_34561 = (state_34697[(15)]);
var inst_34562 = (state_34697[(16)]);
var inst_34563 = (state_34697[(17)]);
var inst_34578 = (state_34697[(2)]);
var inst_34579 = (inst_34563 + (1));
var tmp34722 = inst_34560;
var tmp34723 = inst_34561;
var tmp34724 = inst_34562;
var inst_34560__$1 = tmp34722;
var inst_34561__$1 = tmp34723;
var inst_34562__$1 = tmp34724;
var inst_34563__$1 = inst_34579;
var state_34697__$1 = (function (){var statearr_34737 = state_34697;
(statearr_34737[(13)] = inst_34560__$1);

(statearr_34737[(18)] = inst_34578);

(statearr_34737[(15)] = inst_34561__$1);

(statearr_34737[(16)] = inst_34562__$1);

(statearr_34737[(17)] = inst_34563__$1);

return statearr_34737;
})();
var statearr_34738_36339 = state_34697__$1;
(statearr_34738_36339[(2)] = null);

(statearr_34738_36339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (21))){
var inst_34609 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34746_36340 = state_34697__$1;
(statearr_34746_36340[(2)] = inst_34609);

(statearr_34746_36340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (31))){
var inst_34639 = (state_34697[(9)]);
var inst_34643 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34639);
var state_34697__$1 = state_34697;
var statearr_34747_36342 = state_34697__$1;
(statearr_34747_36342[(2)] = inst_34643);

(statearr_34747_36342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (32))){
var inst_34632 = (state_34697[(19)]);
var inst_34631 = (state_34697[(11)]);
var inst_34633 = (state_34697[(12)]);
var inst_34630 = (state_34697[(20)]);
var inst_34645 = (state_34697[(2)]);
var inst_34646 = (inst_34633 + (1));
var tmp34742 = inst_34632;
var tmp34743 = inst_34631;
var tmp34744 = inst_34630;
var inst_34630__$1 = tmp34744;
var inst_34631__$1 = tmp34743;
var inst_34632__$1 = tmp34742;
var inst_34633__$1 = inst_34646;
var state_34697__$1 = (function (){var statearr_34749 = state_34697;
(statearr_34749[(19)] = inst_34632__$1);

(statearr_34749[(11)] = inst_34631__$1);

(statearr_34749[(12)] = inst_34633__$1);

(statearr_34749[(21)] = inst_34645);

(statearr_34749[(20)] = inst_34630__$1);

return statearr_34749;
})();
var statearr_34750_36344 = state_34697__$1;
(statearr_34750_36344[(2)] = null);

(statearr_34750_36344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (40))){
var inst_34662 = (state_34697[(22)]);
var inst_34666 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34662);
var state_34697__$1 = state_34697;
var statearr_34751_36345 = state_34697__$1;
(statearr_34751_36345[(2)] = inst_34666);

(statearr_34751_36345[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (33))){
var inst_34649 = (state_34697[(23)]);
var inst_34651 = cljs.core.chunked_seq_QMARK_(inst_34649);
var state_34697__$1 = state_34697;
if(inst_34651){
var statearr_34752_36346 = state_34697__$1;
(statearr_34752_36346[(1)] = (36));

} else {
var statearr_34757_36347 = state_34697__$1;
(statearr_34757_36347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (13))){
var inst_34572 = (state_34697[(24)]);
var inst_34575 = cljs.core.async.close_BANG_(inst_34572);
var state_34697__$1 = state_34697;
var statearr_34762_36348 = state_34697__$1;
(statearr_34762_36348[(2)] = inst_34575);

(statearr_34762_36348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (22))){
var inst_34595 = (state_34697[(8)]);
var inst_34598 = cljs.core.async.close_BANG_(inst_34595);
var state_34697__$1 = state_34697;
var statearr_34767_36350 = state_34697__$1;
(statearr_34767_36350[(2)] = inst_34598);

(statearr_34767_36350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (36))){
var inst_34649 = (state_34697[(23)]);
var inst_34656 = cljs.core.chunk_first(inst_34649);
var inst_34657 = cljs.core.chunk_rest(inst_34649);
var inst_34658 = cljs.core.count(inst_34656);
var inst_34630 = inst_34657;
var inst_34631 = inst_34656;
var inst_34632 = inst_34658;
var inst_34633 = (0);
var state_34697__$1 = (function (){var statearr_34771 = state_34697;
(statearr_34771[(19)] = inst_34632);

(statearr_34771[(11)] = inst_34631);

(statearr_34771[(12)] = inst_34633);

(statearr_34771[(20)] = inst_34630);

return statearr_34771;
})();
var statearr_34773_36353 = state_34697__$1;
(statearr_34773_36353[(2)] = null);

(statearr_34773_36353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (41))){
var inst_34649 = (state_34697[(23)]);
var inst_34668 = (state_34697[(2)]);
var inst_34669 = cljs.core.next(inst_34649);
var inst_34630 = inst_34669;
var inst_34631 = null;
var inst_34632 = (0);
var inst_34633 = (0);
var state_34697__$1 = (function (){var statearr_34774 = state_34697;
(statearr_34774[(19)] = inst_34632);

(statearr_34774[(25)] = inst_34668);

(statearr_34774[(11)] = inst_34631);

(statearr_34774[(12)] = inst_34633);

(statearr_34774[(20)] = inst_34630);

return statearr_34774;
})();
var statearr_34779_36354 = state_34697__$1;
(statearr_34779_36354[(2)] = null);

(statearr_34779_36354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (43))){
var state_34697__$1 = state_34697;
var statearr_34780_36355 = state_34697__$1;
(statearr_34780_36355[(2)] = null);

(statearr_34780_36355[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (29))){
var inst_34677 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34781_36356 = state_34697__$1;
(statearr_34781_36356[(2)] = inst_34677);

(statearr_34781_36356[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (44))){
var inst_34686 = (state_34697[(2)]);
var state_34697__$1 = (function (){var statearr_34783 = state_34697;
(statearr_34783[(26)] = inst_34686);

return statearr_34783;
})();
var statearr_34784_36357 = state_34697__$1;
(statearr_34784_36357[(2)] = null);

(statearr_34784_36357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (6))){
var inst_34619 = (state_34697[(27)]);
var inst_34618 = cljs.core.deref(cs);
var inst_34619__$1 = cljs.core.keys(inst_34618);
var inst_34620 = cljs.core.count(inst_34619__$1);
var inst_34621 = cljs.core.reset_BANG_(dctr,inst_34620);
var inst_34629 = cljs.core.seq(inst_34619__$1);
var inst_34630 = inst_34629;
var inst_34631 = null;
var inst_34632 = (0);
var inst_34633 = (0);
var state_34697__$1 = (function (){var statearr_34785 = state_34697;
(statearr_34785[(19)] = inst_34632);

(statearr_34785[(28)] = inst_34621);

(statearr_34785[(27)] = inst_34619__$1);

(statearr_34785[(11)] = inst_34631);

(statearr_34785[(12)] = inst_34633);

(statearr_34785[(20)] = inst_34630);

return statearr_34785;
})();
var statearr_34786_36359 = state_34697__$1;
(statearr_34786_36359[(2)] = null);

(statearr_34786_36359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (28))){
var inst_34630 = (state_34697[(20)]);
var inst_34649 = (state_34697[(23)]);
var inst_34649__$1 = cljs.core.seq(inst_34630);
var state_34697__$1 = (function (){var statearr_34787 = state_34697;
(statearr_34787[(23)] = inst_34649__$1);

return statearr_34787;
})();
if(inst_34649__$1){
var statearr_34788_36361 = state_34697__$1;
(statearr_34788_36361[(1)] = (33));

} else {
var statearr_34789_36365 = state_34697__$1;
(statearr_34789_36365[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (25))){
var inst_34632 = (state_34697[(19)]);
var inst_34633 = (state_34697[(12)]);
var inst_34636 = (inst_34633 < inst_34632);
var inst_34637 = inst_34636;
var state_34697__$1 = state_34697;
if(cljs.core.truth_(inst_34637)){
var statearr_34797_36366 = state_34697__$1;
(statearr_34797_36366[(1)] = (27));

} else {
var statearr_34798_36367 = state_34697__$1;
(statearr_34798_36367[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (34))){
var state_34697__$1 = state_34697;
var statearr_34800_36368 = state_34697__$1;
(statearr_34800_36368[(2)] = null);

(statearr_34800_36368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (17))){
var state_34697__$1 = state_34697;
var statearr_34801_36369 = state_34697__$1;
(statearr_34801_36369[(2)] = null);

(statearr_34801_36369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (3))){
var inst_34691 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34697__$1,inst_34691);
} else {
if((state_val_34698 === (12))){
var inst_34614 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34802_36372 = state_34697__$1;
(statearr_34802_36372[(2)] = inst_34614);

(statearr_34802_36372[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (2))){
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34697__$1,(4),ch);
} else {
if((state_val_34698 === (23))){
var state_34697__$1 = state_34697;
var statearr_34807_36375 = state_34697__$1;
(statearr_34807_36375[(2)] = null);

(statearr_34807_36375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (35))){
var inst_34675 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34808_36376 = state_34697__$1;
(statearr_34808_36376[(2)] = inst_34675);

(statearr_34808_36376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (19))){
var inst_34582 = (state_34697[(7)]);
var inst_34586 = cljs.core.chunk_first(inst_34582);
var inst_34587 = cljs.core.chunk_rest(inst_34582);
var inst_34588 = cljs.core.count(inst_34586);
var inst_34560 = inst_34587;
var inst_34561 = inst_34586;
var inst_34562 = inst_34588;
var inst_34563 = (0);
var state_34697__$1 = (function (){var statearr_34812 = state_34697;
(statearr_34812[(13)] = inst_34560);

(statearr_34812[(15)] = inst_34561);

(statearr_34812[(16)] = inst_34562);

(statearr_34812[(17)] = inst_34563);

return statearr_34812;
})();
var statearr_34814_36380 = state_34697__$1;
(statearr_34814_36380[(2)] = null);

(statearr_34814_36380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (11))){
var inst_34560 = (state_34697[(13)]);
var inst_34582 = (state_34697[(7)]);
var inst_34582__$1 = cljs.core.seq(inst_34560);
var state_34697__$1 = (function (){var statearr_34819 = state_34697;
(statearr_34819[(7)] = inst_34582__$1);

return statearr_34819;
})();
if(inst_34582__$1){
var statearr_34820_36385 = state_34697__$1;
(statearr_34820_36385[(1)] = (16));

} else {
var statearr_34821_36386 = state_34697__$1;
(statearr_34821_36386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (9))){
var inst_34616 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34822_36387 = state_34697__$1;
(statearr_34822_36387[(2)] = inst_34616);

(statearr_34822_36387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (5))){
var inst_34558 = cljs.core.deref(cs);
var inst_34559 = cljs.core.seq(inst_34558);
var inst_34560 = inst_34559;
var inst_34561 = null;
var inst_34562 = (0);
var inst_34563 = (0);
var state_34697__$1 = (function (){var statearr_34823 = state_34697;
(statearr_34823[(13)] = inst_34560);

(statearr_34823[(15)] = inst_34561);

(statearr_34823[(16)] = inst_34562);

(statearr_34823[(17)] = inst_34563);

return statearr_34823;
})();
var statearr_34824_36415 = state_34697__$1;
(statearr_34824_36415[(2)] = null);

(statearr_34824_36415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (14))){
var state_34697__$1 = state_34697;
var statearr_34825_36419 = state_34697__$1;
(statearr_34825_36419[(2)] = null);

(statearr_34825_36419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (45))){
var inst_34683 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34826_36425 = state_34697__$1;
(statearr_34826_36425[(2)] = inst_34683);

(statearr_34826_36425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (26))){
var inst_34619 = (state_34697[(27)]);
var inst_34679 = (state_34697[(2)]);
var inst_34680 = cljs.core.seq(inst_34619);
var state_34697__$1 = (function (){var statearr_34827 = state_34697;
(statearr_34827[(29)] = inst_34679);

return statearr_34827;
})();
if(inst_34680){
var statearr_34832_36451 = state_34697__$1;
(statearr_34832_36451[(1)] = (42));

} else {
var statearr_34833_36455 = state_34697__$1;
(statearr_34833_36455[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (16))){
var inst_34582 = (state_34697[(7)]);
var inst_34584 = cljs.core.chunked_seq_QMARK_(inst_34582);
var state_34697__$1 = state_34697;
if(inst_34584){
var statearr_34834_36469 = state_34697__$1;
(statearr_34834_36469[(1)] = (19));

} else {
var statearr_34835_36470 = state_34697__$1;
(statearr_34835_36470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (38))){
var inst_34672 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34836_36475 = state_34697__$1;
(statearr_34836_36475[(2)] = inst_34672);

(statearr_34836_36475[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (30))){
var state_34697__$1 = state_34697;
var statearr_34837_36476 = state_34697__$1;
(statearr_34837_36476[(2)] = null);

(statearr_34837_36476[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (10))){
var inst_34561 = (state_34697[(15)]);
var inst_34563 = (state_34697[(17)]);
var inst_34571 = cljs.core._nth(inst_34561,inst_34563);
var inst_34572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34571,(0),null);
var inst_34573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34571,(1),null);
var state_34697__$1 = (function (){var statearr_34838 = state_34697;
(statearr_34838[(24)] = inst_34572);

return statearr_34838;
})();
if(cljs.core.truth_(inst_34573)){
var statearr_34839_36484 = state_34697__$1;
(statearr_34839_36484[(1)] = (13));

} else {
var statearr_34840_36485 = state_34697__$1;
(statearr_34840_36485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (18))){
var inst_34612 = (state_34697[(2)]);
var state_34697__$1 = state_34697;
var statearr_34842_36486 = state_34697__$1;
(statearr_34842_36486[(2)] = inst_34612);

(statearr_34842_36486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (42))){
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34697__$1,(45),dchan);
} else {
if((state_val_34698 === (37))){
var inst_34550 = (state_34697[(10)]);
var inst_34662 = (state_34697[(22)]);
var inst_34649 = (state_34697[(23)]);
var inst_34662__$1 = cljs.core.first(inst_34649);
var inst_34663 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34662__$1,inst_34550,done);
var state_34697__$1 = (function (){var statearr_34843 = state_34697;
(statearr_34843[(22)] = inst_34662__$1);

return statearr_34843;
})();
if(cljs.core.truth_(inst_34663)){
var statearr_34844_36500 = state_34697__$1;
(statearr_34844_36500[(1)] = (39));

} else {
var statearr_34845_36501 = state_34697__$1;
(statearr_34845_36501[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34698 === (8))){
var inst_34562 = (state_34697[(16)]);
var inst_34563 = (state_34697[(17)]);
var inst_34565 = (inst_34563 < inst_34562);
var inst_34566 = inst_34565;
var state_34697__$1 = state_34697;
if(cljs.core.truth_(inst_34566)){
var statearr_34846_36504 = state_34697__$1;
(statearr_34846_36504[(1)] = (10));

} else {
var statearr_34847_36506 = state_34697__$1;
(statearr_34847_36506[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33337__auto__ = null;
var cljs$core$async$mult_$_state_machine__33337__auto____0 = (function (){
var statearr_34848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34848[(0)] = cljs$core$async$mult_$_state_machine__33337__auto__);

(statearr_34848[(1)] = (1));

return statearr_34848;
});
var cljs$core$async$mult_$_state_machine__33337__auto____1 = (function (state_34697){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34697);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e34850){var ex__33340__auto__ = e34850;
var statearr_34852_36524 = state_34697;
(statearr_34852_36524[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34697[(4)]))){
var statearr_34853_36526 = state_34697;
(statearr_34853_36526[(1)] = cljs.core.first((state_34697[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36527 = state_34697;
state_34697 = G__36527;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33337__auto__ = function(state_34697){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33337__auto____1.call(this,state_34697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33337__auto____0;
cljs$core$async$mult_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33337__auto____1;
return cljs$core$async$mult_$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_34854 = f__33686__auto__();
(statearr_34854[(6)] = c__33685__auto___36313);

return statearr_34854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34856 = arguments.length;
switch (G__34856) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36537 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36537(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36548 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36548(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36551 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36551(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36553 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36553(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36558 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36558(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36561 = arguments.length;
var i__5770__auto___36562 = (0);
while(true){
if((i__5770__auto___36562 < len__5769__auto___36561)){
args__5775__auto__.push((arguments[i__5770__auto___36562]));

var G__36567 = (i__5770__auto___36562 + (1));
i__5770__auto___36562 = G__36567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34865){
var map__34866 = p__34865;
var map__34866__$1 = cljs.core.__destructure_map(map__34866);
var opts = map__34866__$1;
var statearr_34867_36573 = state;
(statearr_34867_36573[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34868_36578 = state;
(statearr_34868_36578[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34869_36579 = state;
(statearr_34869_36579[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34861){
var G__34862 = cljs.core.first(seq34861);
var seq34861__$1 = cljs.core.next(seq34861);
var G__34863 = cljs.core.first(seq34861__$1);
var seq34861__$2 = cljs.core.next(seq34861__$1);
var G__34864 = cljs.core.first(seq34861__$2);
var seq34861__$3 = cljs.core.next(seq34861__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34862,G__34863,G__34864,seq34861__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34872 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34873){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34873 = meta34873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34874,meta34873__$1){
var self__ = this;
var _34874__$1 = this;
return (new cljs.core.async.t_cljs$core$async34872(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34873__$1));
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34874){
var self__ = this;
var _34874__$1 = this;
return self__.meta34873;
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34872.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34873","meta34873",1247255350,null)], null);
}));

(cljs.core.async.t_cljs$core$async34872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34872");

(cljs.core.async.t_cljs$core$async34872.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34872.
 */
cljs.core.async.__GT_t_cljs$core$async34872 = (function cljs$core$async$__GT_t_cljs$core$async34872(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34873){
return (new cljs.core.async.t_cljs$core$async34872(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34873));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34872(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33685__auto___36619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_34956){
var state_val_34957 = (state_34956[(1)]);
if((state_val_34957 === (7))){
var inst_34913 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
if(cljs.core.truth_(inst_34913)){
var statearr_34958_36620 = state_34956__$1;
(statearr_34958_36620[(1)] = (8));

} else {
var statearr_34959_36621 = state_34956__$1;
(statearr_34959_36621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (20))){
var inst_34906 = (state_34956[(7)]);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34956__$1,(23),out,inst_34906);
} else {
if((state_val_34957 === (1))){
var inst_34889 = calc_state();
var inst_34890 = cljs.core.__destructure_map(inst_34889);
var inst_34891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34890,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34890,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34890,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34894 = inst_34889;
var state_34956__$1 = (function (){var statearr_34960 = state_34956;
(statearr_34960[(8)] = inst_34891);

(statearr_34960[(9)] = inst_34892);

(statearr_34960[(10)] = inst_34893);

(statearr_34960[(11)] = inst_34894);

return statearr_34960;
})();
var statearr_34961_36626 = state_34956__$1;
(statearr_34961_36626[(2)] = null);

(statearr_34961_36626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (24))){
var inst_34897 = (state_34956[(12)]);
var inst_34894 = inst_34897;
var state_34956__$1 = (function (){var statearr_34962 = state_34956;
(statearr_34962[(11)] = inst_34894);

return statearr_34962;
})();
var statearr_34963_36627 = state_34956__$1;
(statearr_34963_36627[(2)] = null);

(statearr_34963_36627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (4))){
var inst_34906 = (state_34956[(7)]);
var inst_34908 = (state_34956[(13)]);
var inst_34905 = (state_34956[(2)]);
var inst_34906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34905,(0),null);
var inst_34907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34905,(1),null);
var inst_34908__$1 = (inst_34906__$1 == null);
var state_34956__$1 = (function (){var statearr_34964 = state_34956;
(statearr_34964[(7)] = inst_34906__$1);

(statearr_34964[(14)] = inst_34907);

(statearr_34964[(13)] = inst_34908__$1);

return statearr_34964;
})();
if(cljs.core.truth_(inst_34908__$1)){
var statearr_34965_36630 = state_34956__$1;
(statearr_34965_36630[(1)] = (5));

} else {
var statearr_34966_36631 = state_34956__$1;
(statearr_34966_36631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (15))){
var inst_34927 = (state_34956[(15)]);
var inst_34898 = (state_34956[(16)]);
var inst_34927__$1 = cljs.core.empty_QMARK_(inst_34898);
var state_34956__$1 = (function (){var statearr_34974 = state_34956;
(statearr_34974[(15)] = inst_34927__$1);

return statearr_34974;
})();
if(inst_34927__$1){
var statearr_34981_36649 = state_34956__$1;
(statearr_34981_36649[(1)] = (17));

} else {
var statearr_34982_36654 = state_34956__$1;
(statearr_34982_36654[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (21))){
var inst_34897 = (state_34956[(12)]);
var inst_34894 = inst_34897;
var state_34956__$1 = (function (){var statearr_34989 = state_34956;
(statearr_34989[(11)] = inst_34894);

return statearr_34989;
})();
var statearr_34990_36656 = state_34956__$1;
(statearr_34990_36656[(2)] = null);

(statearr_34990_36656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (13))){
var inst_34920 = (state_34956[(2)]);
var inst_34921 = calc_state();
var inst_34894 = inst_34921;
var state_34956__$1 = (function (){var statearr_34991 = state_34956;
(statearr_34991[(17)] = inst_34920);

(statearr_34991[(11)] = inst_34894);

return statearr_34991;
})();
var statearr_34992_36667 = state_34956__$1;
(statearr_34992_36667[(2)] = null);

(statearr_34992_36667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (22))){
var inst_34950 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_34993_36668 = state_34956__$1;
(statearr_34993_36668[(2)] = inst_34950);

(statearr_34993_36668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (6))){
var inst_34907 = (state_34956[(14)]);
var inst_34911 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34907,change);
var state_34956__$1 = state_34956;
var statearr_34994_36674 = state_34956__$1;
(statearr_34994_36674[(2)] = inst_34911);

(statearr_34994_36674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (25))){
var state_34956__$1 = state_34956;
var statearr_35002_36681 = state_34956__$1;
(statearr_35002_36681[(2)] = null);

(statearr_35002_36681[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (17))){
var inst_34899 = (state_34956[(18)]);
var inst_34907 = (state_34956[(14)]);
var inst_34932 = (inst_34899.cljs$core$IFn$_invoke$arity$1 ? inst_34899.cljs$core$IFn$_invoke$arity$1(inst_34907) : inst_34899.call(null,inst_34907));
var inst_34933 = cljs.core.not(inst_34932);
var state_34956__$1 = state_34956;
var statearr_35006_36689 = state_34956__$1;
(statearr_35006_36689[(2)] = inst_34933);

(statearr_35006_36689[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (3))){
var inst_34954 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34956__$1,inst_34954);
} else {
if((state_val_34957 === (12))){
var state_34956__$1 = state_34956;
var statearr_35007_36694 = state_34956__$1;
(statearr_35007_36694[(2)] = null);

(statearr_35007_36694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (2))){
var inst_34897 = (state_34956[(12)]);
var inst_34894 = (state_34956[(11)]);
var inst_34897__$1 = cljs.core.__destructure_map(inst_34894);
var inst_34898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34897__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34897__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34897__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34956__$1 = (function (){var statearr_35011 = state_34956;
(statearr_35011[(16)] = inst_34898);

(statearr_35011[(18)] = inst_34899);

(statearr_35011[(12)] = inst_34897__$1);

return statearr_35011;
})();
return cljs.core.async.ioc_alts_BANG_(state_34956__$1,(4),inst_34900);
} else {
if((state_val_34957 === (23))){
var inst_34941 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
if(cljs.core.truth_(inst_34941)){
var statearr_35012_36705 = state_34956__$1;
(statearr_35012_36705[(1)] = (24));

} else {
var statearr_35013_36706 = state_34956__$1;
(statearr_35013_36706[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (19))){
var inst_34936 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_35014_36711 = state_34956__$1;
(statearr_35014_36711[(2)] = inst_34936);

(statearr_35014_36711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (11))){
var inst_34907 = (state_34956[(14)]);
var inst_34917 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34907);
var state_34956__$1 = state_34956;
var statearr_35015_36718 = state_34956__$1;
(statearr_35015_36718[(2)] = inst_34917);

(statearr_35015_36718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (9))){
var inst_34898 = (state_34956[(16)]);
var inst_34924 = (state_34956[(19)]);
var inst_34907 = (state_34956[(14)]);
var inst_34924__$1 = (inst_34898.cljs$core$IFn$_invoke$arity$1 ? inst_34898.cljs$core$IFn$_invoke$arity$1(inst_34907) : inst_34898.call(null,inst_34907));
var state_34956__$1 = (function (){var statearr_35016 = state_34956;
(statearr_35016[(19)] = inst_34924__$1);

return statearr_35016;
})();
if(cljs.core.truth_(inst_34924__$1)){
var statearr_35017_36719 = state_34956__$1;
(statearr_35017_36719[(1)] = (14));

} else {
var statearr_35018_36720 = state_34956__$1;
(statearr_35018_36720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (5))){
var inst_34908 = (state_34956[(13)]);
var state_34956__$1 = state_34956;
var statearr_35019_36721 = state_34956__$1;
(statearr_35019_36721[(2)] = inst_34908);

(statearr_35019_36721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (14))){
var inst_34924 = (state_34956[(19)]);
var state_34956__$1 = state_34956;
var statearr_35024_36722 = state_34956__$1;
(statearr_35024_36722[(2)] = inst_34924);

(statearr_35024_36722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (26))){
var inst_34946 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_35025_36725 = state_34956__$1;
(statearr_35025_36725[(2)] = inst_34946);

(statearr_35025_36725[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (16))){
var inst_34938 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
if(cljs.core.truth_(inst_34938)){
var statearr_35026_36726 = state_34956__$1;
(statearr_35026_36726[(1)] = (20));

} else {
var statearr_35027_36727 = state_34956__$1;
(statearr_35027_36727[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (10))){
var inst_34952 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
var statearr_35028_36728 = state_34956__$1;
(statearr_35028_36728[(2)] = inst_34952);

(statearr_35028_36728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (18))){
var inst_34927 = (state_34956[(15)]);
var state_34956__$1 = state_34956;
var statearr_35029_36729 = state_34956__$1;
(statearr_35029_36729[(2)] = inst_34927);

(statearr_35029_36729[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (8))){
var inst_34906 = (state_34956[(7)]);
var inst_34915 = (inst_34906 == null);
var state_34956__$1 = state_34956;
if(cljs.core.truth_(inst_34915)){
var statearr_35030_36730 = state_34956__$1;
(statearr_35030_36730[(1)] = (11));

} else {
var statearr_35031_36731 = state_34956__$1;
(statearr_35031_36731[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33337__auto__ = null;
var cljs$core$async$mix_$_state_machine__33337__auto____0 = (function (){
var statearr_35032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35032[(0)] = cljs$core$async$mix_$_state_machine__33337__auto__);

(statearr_35032[(1)] = (1));

return statearr_35032;
});
var cljs$core$async$mix_$_state_machine__33337__auto____1 = (function (state_34956){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_34956);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35033){var ex__33340__auto__ = e35033;
var statearr_35035_36737 = state_34956;
(statearr_35035_36737[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_34956[(4)]))){
var statearr_35039_36741 = state_34956;
(statearr_35039_36741[(1)] = cljs.core.first((state_34956[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36742 = state_34956;
state_34956 = G__36742;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33337__auto__ = function(state_34956){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33337__auto____1.call(this,state_34956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33337__auto____0;
cljs$core$async$mix_$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33337__auto____1;
return cljs$core$async$mix_$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35040 = f__33686__auto__();
(statearr_35040[(6)] = c__33685__auto___36619);

return statearr_35040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36754 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36754(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36759 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36759(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36764 = (function() {
var G__36765 = null;
var G__36765__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36765__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36765 = function(p,v){
switch(arguments.length){
case 1:
return G__36765__1.call(this,p);
case 2:
return G__36765__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36765.cljs$core$IFn$_invoke$arity$1 = G__36765__1;
G__36765.cljs$core$IFn$_invoke$arity$2 = G__36765__2;
return G__36765;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35053 = arguments.length;
switch (G__35053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36764(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36764(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35062 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35063){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35063 = meta35063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35064,meta35063__$1){
var self__ = this;
var _35064__$1 = this;
return (new cljs.core.async.t_cljs$core$async35062(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35063__$1));
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35064){
var self__ = this;
var _35064__$1 = this;
return self__.meta35063;
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35063","meta35063",-610278315,null)], null);
}));

(cljs.core.async.t_cljs$core$async35062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35062");

(cljs.core.async.t_cljs$core$async35062.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35062.
 */
cljs.core.async.__GT_t_cljs$core$async35062 = (function cljs$core$async$__GT_t_cljs$core$async35062(ch,topic_fn,buf_fn,mults,ensure_mult,meta35063){
return (new cljs.core.async.t_cljs$core$async35062(ch,topic_fn,buf_fn,mults,ensure_mult,meta35063));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35056 = arguments.length;
switch (G__35056) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35054_SHARP_){
if(cljs.core.truth_((p1__35054_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35054_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35054_SHARP_.call(null,topic)))){
return p1__35054_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35054_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35062(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33685__auto___36776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35143){
var state_val_35144 = (state_35143[(1)]);
if((state_val_35144 === (7))){
var inst_35139 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35149_36778 = state_35143__$1;
(statearr_35149_36778[(2)] = inst_35139);

(statearr_35149_36778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (20))){
var state_35143__$1 = state_35143;
var statearr_35150_36779 = state_35143__$1;
(statearr_35150_36779[(2)] = null);

(statearr_35150_36779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (1))){
var state_35143__$1 = state_35143;
var statearr_35151_36780 = state_35143__$1;
(statearr_35151_36780[(2)] = null);

(statearr_35151_36780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (24))){
var inst_35122 = (state_35143[(7)]);
var inst_35131 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35122);
var state_35143__$1 = state_35143;
var statearr_35156_36785 = state_35143__$1;
(statearr_35156_36785[(2)] = inst_35131);

(statearr_35156_36785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (4))){
var inst_35074 = (state_35143[(8)]);
var inst_35074__$1 = (state_35143[(2)]);
var inst_35075 = (inst_35074__$1 == null);
var state_35143__$1 = (function (){var statearr_35157 = state_35143;
(statearr_35157[(8)] = inst_35074__$1);

return statearr_35157;
})();
if(cljs.core.truth_(inst_35075)){
var statearr_35158_36790 = state_35143__$1;
(statearr_35158_36790[(1)] = (5));

} else {
var statearr_35159_36791 = state_35143__$1;
(statearr_35159_36791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (15))){
var inst_35116 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35160_36792 = state_35143__$1;
(statearr_35160_36792[(2)] = inst_35116);

(statearr_35160_36792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (21))){
var inst_35136 = (state_35143[(2)]);
var state_35143__$1 = (function (){var statearr_35161 = state_35143;
(statearr_35161[(9)] = inst_35136);

return statearr_35161;
})();
var statearr_35162_36793 = state_35143__$1;
(statearr_35162_36793[(2)] = null);

(statearr_35162_36793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (13))){
var inst_35098 = (state_35143[(10)]);
var inst_35100 = cljs.core.chunked_seq_QMARK_(inst_35098);
var state_35143__$1 = state_35143;
if(inst_35100){
var statearr_35165_36796 = state_35143__$1;
(statearr_35165_36796[(1)] = (16));

} else {
var statearr_35166_36798 = state_35143__$1;
(statearr_35166_36798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (22))){
var inst_35128 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
if(cljs.core.truth_(inst_35128)){
var statearr_35167_36799 = state_35143__$1;
(statearr_35167_36799[(1)] = (23));

} else {
var statearr_35168_36800 = state_35143__$1;
(statearr_35168_36800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (6))){
var inst_35122 = (state_35143[(7)]);
var inst_35074 = (state_35143[(8)]);
var inst_35124 = (state_35143[(11)]);
var inst_35122__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35074) : topic_fn.call(null,inst_35074));
var inst_35123 = cljs.core.deref(mults);
var inst_35124__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35123,inst_35122__$1);
var state_35143__$1 = (function (){var statearr_35169 = state_35143;
(statearr_35169[(7)] = inst_35122__$1);

(statearr_35169[(11)] = inst_35124__$1);

return statearr_35169;
})();
if(cljs.core.truth_(inst_35124__$1)){
var statearr_35170_36810 = state_35143__$1;
(statearr_35170_36810[(1)] = (19));

} else {
var statearr_35171_36811 = state_35143__$1;
(statearr_35171_36811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (25))){
var inst_35133 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35172_36812 = state_35143__$1;
(statearr_35172_36812[(2)] = inst_35133);

(statearr_35172_36812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (17))){
var inst_35098 = (state_35143[(10)]);
var inst_35107 = cljs.core.first(inst_35098);
var inst_35108 = cljs.core.async.muxch_STAR_(inst_35107);
var inst_35109 = cljs.core.async.close_BANG_(inst_35108);
var inst_35110 = cljs.core.next(inst_35098);
var inst_35084 = inst_35110;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35143__$1 = (function (){var statearr_35176 = state_35143;
(statearr_35176[(12)] = inst_35109);

(statearr_35176[(13)] = inst_35084);

(statearr_35176[(14)] = inst_35086);

(statearr_35176[(15)] = inst_35085);

(statearr_35176[(16)] = inst_35087);

return statearr_35176;
})();
var statearr_35177_36813 = state_35143__$1;
(statearr_35177_36813[(2)] = null);

(statearr_35177_36813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (3))){
var inst_35141 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35143__$1,inst_35141);
} else {
if((state_val_35144 === (12))){
var inst_35118 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35178_36814 = state_35143__$1;
(statearr_35178_36814[(2)] = inst_35118);

(statearr_35178_36814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (2))){
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35143__$1,(4),ch);
} else {
if((state_val_35144 === (23))){
var state_35143__$1 = state_35143;
var statearr_35179_36815 = state_35143__$1;
(statearr_35179_36815[(2)] = null);

(statearr_35179_36815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (19))){
var inst_35074 = (state_35143[(8)]);
var inst_35124 = (state_35143[(11)]);
var inst_35126 = cljs.core.async.muxch_STAR_(inst_35124);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35143__$1,(22),inst_35126,inst_35074);
} else {
if((state_val_35144 === (11))){
var inst_35084 = (state_35143[(13)]);
var inst_35098 = (state_35143[(10)]);
var inst_35098__$1 = cljs.core.seq(inst_35084);
var state_35143__$1 = (function (){var statearr_35180 = state_35143;
(statearr_35180[(10)] = inst_35098__$1);

return statearr_35180;
})();
if(inst_35098__$1){
var statearr_35181_36816 = state_35143__$1;
(statearr_35181_36816[(1)] = (13));

} else {
var statearr_35182_36817 = state_35143__$1;
(statearr_35182_36817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (9))){
var inst_35120 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35183_36820 = state_35143__$1;
(statearr_35183_36820[(2)] = inst_35120);

(statearr_35183_36820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (5))){
var inst_35081 = cljs.core.deref(mults);
var inst_35082 = cljs.core.vals(inst_35081);
var inst_35083 = cljs.core.seq(inst_35082);
var inst_35084 = inst_35083;
var inst_35085 = null;
var inst_35086 = (0);
var inst_35087 = (0);
var state_35143__$1 = (function (){var statearr_35184 = state_35143;
(statearr_35184[(13)] = inst_35084);

(statearr_35184[(14)] = inst_35086);

(statearr_35184[(15)] = inst_35085);

(statearr_35184[(16)] = inst_35087);

return statearr_35184;
})();
var statearr_35185_36825 = state_35143__$1;
(statearr_35185_36825[(2)] = null);

(statearr_35185_36825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (14))){
var state_35143__$1 = state_35143;
var statearr_35189_36826 = state_35143__$1;
(statearr_35189_36826[(2)] = null);

(statearr_35189_36826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (16))){
var inst_35098 = (state_35143[(10)]);
var inst_35102 = cljs.core.chunk_first(inst_35098);
var inst_35103 = cljs.core.chunk_rest(inst_35098);
var inst_35104 = cljs.core.count(inst_35102);
var inst_35084 = inst_35103;
var inst_35085 = inst_35102;
var inst_35086 = inst_35104;
var inst_35087 = (0);
var state_35143__$1 = (function (){var statearr_35190 = state_35143;
(statearr_35190[(13)] = inst_35084);

(statearr_35190[(14)] = inst_35086);

(statearr_35190[(15)] = inst_35085);

(statearr_35190[(16)] = inst_35087);

return statearr_35190;
})();
var statearr_35191_36827 = state_35143__$1;
(statearr_35191_36827[(2)] = null);

(statearr_35191_36827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (10))){
var inst_35084 = (state_35143[(13)]);
var inst_35086 = (state_35143[(14)]);
var inst_35085 = (state_35143[(15)]);
var inst_35087 = (state_35143[(16)]);
var inst_35092 = cljs.core._nth(inst_35085,inst_35087);
var inst_35093 = cljs.core.async.muxch_STAR_(inst_35092);
var inst_35094 = cljs.core.async.close_BANG_(inst_35093);
var inst_35095 = (inst_35087 + (1));
var tmp35186 = inst_35084;
var tmp35187 = inst_35086;
var tmp35188 = inst_35085;
var inst_35084__$1 = tmp35186;
var inst_35085__$1 = tmp35188;
var inst_35086__$1 = tmp35187;
var inst_35087__$1 = inst_35095;
var state_35143__$1 = (function (){var statearr_35192 = state_35143;
(statearr_35192[(13)] = inst_35084__$1);

(statearr_35192[(14)] = inst_35086__$1);

(statearr_35192[(15)] = inst_35085__$1);

(statearr_35192[(17)] = inst_35094);

(statearr_35192[(16)] = inst_35087__$1);

return statearr_35192;
})();
var statearr_35193_36828 = state_35143__$1;
(statearr_35193_36828[(2)] = null);

(statearr_35193_36828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (18))){
var inst_35113 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35194_36829 = state_35143__$1;
(statearr_35194_36829[(2)] = inst_35113);

(statearr_35194_36829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (8))){
var inst_35086 = (state_35143[(14)]);
var inst_35087 = (state_35143[(16)]);
var inst_35089 = (inst_35087 < inst_35086);
var inst_35090 = inst_35089;
var state_35143__$1 = state_35143;
if(cljs.core.truth_(inst_35090)){
var statearr_35195_36831 = state_35143__$1;
(statearr_35195_36831[(1)] = (10));

} else {
var statearr_35196_36832 = state_35143__$1;
(statearr_35196_36832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35197[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35197[(1)] = (1));

return statearr_35197;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35143){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35143);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35198){var ex__33340__auto__ = e35198;
var statearr_35199_36833 = state_35143;
(statearr_35199_36833[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35143[(4)]))){
var statearr_35200_36834 = state_35143;
(statearr_35200_36834[(1)] = cljs.core.first((state_35143[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36835 = state_35143;
state_35143 = G__36835;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35201 = f__33686__auto__();
(statearr_35201[(6)] = c__33685__auto___36776);

return statearr_35201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35203 = arguments.length;
switch (G__35203) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35205 = arguments.length;
switch (G__35205) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35208 = arguments.length;
switch (G__35208) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33685__auto___36858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35258){
var state_val_35259 = (state_35258[(1)]);
if((state_val_35259 === (7))){
var state_35258__$1 = state_35258;
var statearr_35260_36859 = state_35258__$1;
(statearr_35260_36859[(2)] = null);

(statearr_35260_36859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (1))){
var state_35258__$1 = state_35258;
var statearr_35261_36861 = state_35258__$1;
(statearr_35261_36861[(2)] = null);

(statearr_35261_36861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (4))){
var inst_35215 = (state_35258[(7)]);
var inst_35214 = (state_35258[(8)]);
var inst_35217 = (inst_35215 < inst_35214);
var state_35258__$1 = state_35258;
if(cljs.core.truth_(inst_35217)){
var statearr_35262_36868 = state_35258__$1;
(statearr_35262_36868[(1)] = (6));

} else {
var statearr_35263_36869 = state_35258__$1;
(statearr_35263_36869[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (15))){
var inst_35244 = (state_35258[(9)]);
var inst_35249 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35244);
var state_35258__$1 = state_35258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35258__$1,(17),out,inst_35249);
} else {
if((state_val_35259 === (13))){
var inst_35244 = (state_35258[(9)]);
var inst_35244__$1 = (state_35258[(2)]);
var inst_35245 = cljs.core.some(cljs.core.nil_QMARK_,inst_35244__$1);
var state_35258__$1 = (function (){var statearr_35264 = state_35258;
(statearr_35264[(9)] = inst_35244__$1);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35245)){
var statearr_35265_36872 = state_35258__$1;
(statearr_35265_36872[(1)] = (14));

} else {
var statearr_35266_36874 = state_35258__$1;
(statearr_35266_36874[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (6))){
var state_35258__$1 = state_35258;
var statearr_35267_36876 = state_35258__$1;
(statearr_35267_36876[(2)] = null);

(statearr_35267_36876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (17))){
var inst_35251 = (state_35258[(2)]);
var state_35258__$1 = (function (){var statearr_35289 = state_35258;
(statearr_35289[(10)] = inst_35251);

return statearr_35289;
})();
var statearr_35290_36877 = state_35258__$1;
(statearr_35290_36877[(2)] = null);

(statearr_35290_36877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (3))){
var inst_35256 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35258__$1,inst_35256);
} else {
if((state_val_35259 === (12))){
var _ = (function (){var statearr_35305 = state_35258;
(statearr_35305[(4)] = cljs.core.rest((state_35258[(4)])));

return statearr_35305;
})();
var state_35258__$1 = state_35258;
var ex35288 = (state_35258__$1[(2)]);
var statearr_35306_36878 = state_35258__$1;
(statearr_35306_36878[(5)] = ex35288);


if((ex35288 instanceof Object)){
var statearr_35313_36879 = state_35258__$1;
(statearr_35313_36879[(1)] = (11));

(statearr_35313_36879[(5)] = null);

} else {
throw ex35288;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (2))){
var inst_35213 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35214 = cnt;
var inst_35215 = (0);
var state_35258__$1 = (function (){var statearr_35314 = state_35258;
(statearr_35314[(7)] = inst_35215);

(statearr_35314[(11)] = inst_35213);

(statearr_35314[(8)] = inst_35214);

return statearr_35314;
})();
var statearr_35317_36882 = state_35258__$1;
(statearr_35317_36882[(2)] = null);

(statearr_35317_36882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (11))){
var inst_35223 = (state_35258[(2)]);
var inst_35224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35258__$1 = (function (){var statearr_35318 = state_35258;
(statearr_35318[(12)] = inst_35223);

return statearr_35318;
})();
var statearr_35319_36883 = state_35258__$1;
(statearr_35319_36883[(2)] = inst_35224);

(statearr_35319_36883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (9))){
var inst_35215 = (state_35258[(7)]);
var _ = (function (){var statearr_35321 = state_35258;
(statearr_35321[(4)] = cljs.core.cons((12),(state_35258[(4)])));

return statearr_35321;
})();
var inst_35230 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35215) : chs__$1.call(null,inst_35215));
var inst_35231 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35215) : done.call(null,inst_35215));
var inst_35232 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35230,inst_35231);
var ___$1 = (function (){var statearr_35322 = state_35258;
(statearr_35322[(4)] = cljs.core.rest((state_35258[(4)])));

return statearr_35322;
})();
var state_35258__$1 = state_35258;
var statearr_35323_36887 = state_35258__$1;
(statearr_35323_36887[(2)] = inst_35232);

(statearr_35323_36887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (5))){
var inst_35242 = (state_35258[(2)]);
var state_35258__$1 = (function (){var statearr_35324 = state_35258;
(statearr_35324[(13)] = inst_35242);

return statearr_35324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35258__$1,(13),dchan);
} else {
if((state_val_35259 === (14))){
var inst_35247 = cljs.core.async.close_BANG_(out);
var state_35258__$1 = state_35258;
var statearr_35325_36893 = state_35258__$1;
(statearr_35325_36893[(2)] = inst_35247);

(statearr_35325_36893[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (16))){
var inst_35254 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35326_36894 = state_35258__$1;
(statearr_35326_36894[(2)] = inst_35254);

(statearr_35326_36894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (10))){
var inst_35215 = (state_35258[(7)]);
var inst_35235 = (state_35258[(2)]);
var inst_35236 = (inst_35215 + (1));
var inst_35215__$1 = inst_35236;
var state_35258__$1 = (function (){var statearr_35330 = state_35258;
(statearr_35330[(7)] = inst_35215__$1);

(statearr_35330[(14)] = inst_35235);

return statearr_35330;
})();
var statearr_35331_36896 = state_35258__$1;
(statearr_35331_36896[(2)] = null);

(statearr_35331_36896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35259 === (8))){
var inst_35240 = (state_35258[(2)]);
var state_35258__$1 = state_35258;
var statearr_35332_36897 = state_35258__$1;
(statearr_35332_36897[(2)] = inst_35240);

(statearr_35332_36897[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35258){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35258);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35334){var ex__33340__auto__ = e35334;
var statearr_35335_36898 = state_35258;
(statearr_35335_36898[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35258[(4)]))){
var statearr_35336_36899 = state_35258;
(statearr_35336_36899[(1)] = cljs.core.first((state_35258[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36901 = state_35258;
state_35258 = G__36901;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35337 = f__33686__auto__();
(statearr_35337[(6)] = c__33685__auto___36858);

return statearr_35337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35340 = arguments.length;
switch (G__35340) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35372){
var state_val_35373 = (state_35372[(1)]);
if((state_val_35373 === (7))){
var inst_35352 = (state_35372[(7)]);
var inst_35351 = (state_35372[(8)]);
var inst_35351__$1 = (state_35372[(2)]);
var inst_35352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35351__$1,(0),null);
var inst_35353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35351__$1,(1),null);
var inst_35354 = (inst_35352__$1 == null);
var state_35372__$1 = (function (){var statearr_35374 = state_35372;
(statearr_35374[(7)] = inst_35352__$1);

(statearr_35374[(9)] = inst_35353);

(statearr_35374[(8)] = inst_35351__$1);

return statearr_35374;
})();
if(cljs.core.truth_(inst_35354)){
var statearr_35375_36912 = state_35372__$1;
(statearr_35375_36912[(1)] = (8));

} else {
var statearr_35376_36913 = state_35372__$1;
(statearr_35376_36913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (1))){
var inst_35341 = cljs.core.vec(chs);
var inst_35342 = inst_35341;
var state_35372__$1 = (function (){var statearr_35377 = state_35372;
(statearr_35377[(10)] = inst_35342);

return statearr_35377;
})();
var statearr_35378_36914 = state_35372__$1;
(statearr_35378_36914[(2)] = null);

(statearr_35378_36914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (4))){
var inst_35342 = (state_35372[(10)]);
var state_35372__$1 = state_35372;
return cljs.core.async.ioc_alts_BANG_(state_35372__$1,(7),inst_35342);
} else {
if((state_val_35373 === (6))){
var inst_35368 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
var statearr_35379_36915 = state_35372__$1;
(statearr_35379_36915[(2)] = inst_35368);

(statearr_35379_36915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (3))){
var inst_35370 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35372__$1,inst_35370);
} else {
if((state_val_35373 === (2))){
var inst_35342 = (state_35372[(10)]);
var inst_35344 = cljs.core.count(inst_35342);
var inst_35345 = (inst_35344 > (0));
var state_35372__$1 = state_35372;
if(cljs.core.truth_(inst_35345)){
var statearr_35381_36919 = state_35372__$1;
(statearr_35381_36919[(1)] = (4));

} else {
var statearr_35382_36921 = state_35372__$1;
(statearr_35382_36921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (11))){
var inst_35342 = (state_35372[(10)]);
var inst_35361 = (state_35372[(2)]);
var tmp35380 = inst_35342;
var inst_35342__$1 = tmp35380;
var state_35372__$1 = (function (){var statearr_35383 = state_35372;
(statearr_35383[(10)] = inst_35342__$1);

(statearr_35383[(11)] = inst_35361);

return statearr_35383;
})();
var statearr_35384_36922 = state_35372__$1;
(statearr_35384_36922[(2)] = null);

(statearr_35384_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (9))){
var inst_35352 = (state_35372[(7)]);
var state_35372__$1 = state_35372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35372__$1,(11),out,inst_35352);
} else {
if((state_val_35373 === (5))){
var inst_35366 = cljs.core.async.close_BANG_(out);
var state_35372__$1 = state_35372;
var statearr_35396_36923 = state_35372__$1;
(statearr_35396_36923[(2)] = inst_35366);

(statearr_35396_36923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (10))){
var inst_35364 = (state_35372[(2)]);
var state_35372__$1 = state_35372;
var statearr_35397_36926 = state_35372__$1;
(statearr_35397_36926[(2)] = inst_35364);

(statearr_35397_36926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35373 === (8))){
var inst_35342 = (state_35372[(10)]);
var inst_35352 = (state_35372[(7)]);
var inst_35353 = (state_35372[(9)]);
var inst_35351 = (state_35372[(8)]);
var inst_35356 = (function (){var cs = inst_35342;
var vec__35347 = inst_35351;
var v = inst_35352;
var c = inst_35353;
return (function (p1__35338_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35338_SHARP_);
});
})();
var inst_35357 = cljs.core.filterv(inst_35356,inst_35342);
var inst_35342__$1 = inst_35357;
var state_35372__$1 = (function (){var statearr_35398 = state_35372;
(statearr_35398[(10)] = inst_35342__$1);

return statearr_35398;
})();
var statearr_35399_36927 = state_35372__$1;
(statearr_35399_36927[(2)] = null);

(statearr_35399_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35400 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35400[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35400[(1)] = (1));

return statearr_35400;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35372){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35372);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35401){var ex__33340__auto__ = e35401;
var statearr_35402_36930 = state_35372;
(statearr_35402_36930[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35372[(4)]))){
var statearr_35403_36931 = state_35372;
(statearr_35403_36931[(1)] = cljs.core.first((state_35372[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_35372;
state_35372 = G__36932;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35404 = f__33686__auto__();
(statearr_35404[(6)] = c__33685__auto___36908);

return statearr_35404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35406 = arguments.length;
switch (G__35406) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___36939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35412 = (state_35431[(7)]);
var inst_35412__$1 = (state_35431[(2)]);
var inst_35413 = (inst_35412__$1 == null);
var inst_35414 = cljs.core.not(inst_35413);
var state_35431__$1 = (function (){var statearr_35434 = state_35431;
(statearr_35434[(7)] = inst_35412__$1);

return statearr_35434;
})();
if(inst_35414){
var statearr_35435_36945 = state_35431__$1;
(statearr_35435_36945[(1)] = (8));

} else {
var statearr_35436_36946 = state_35431__$1;
(statearr_35436_36946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (1))){
var inst_35407 = (0);
var state_35431__$1 = (function (){var statearr_35437 = state_35431;
(statearr_35437[(8)] = inst_35407);

return statearr_35437;
})();
var statearr_35438_36952 = state_35431__$1;
(statearr_35438_36952[(2)] = null);

(statearr_35438_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35431__$1,(7),ch);
} else {
if((state_val_35432 === (6))){
var inst_35425 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35441_36953 = state_35431__$1;
(statearr_35441_36953[(2)] = inst_35425);

(statearr_35441_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35427 = (state_35431[(2)]);
var inst_35428 = cljs.core.async.close_BANG_(out);
var state_35431__$1 = (function (){var statearr_35442 = state_35431;
(statearr_35442[(9)] = inst_35427);

return statearr_35442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35431__$1,inst_35428);
} else {
if((state_val_35432 === (2))){
var inst_35407 = (state_35431[(8)]);
var inst_35409 = (inst_35407 < n);
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35409)){
var statearr_35445_36955 = state_35431__$1;
(statearr_35445_36955[(1)] = (4));

} else {
var statearr_35446_36956 = state_35431__$1;
(statearr_35446_36956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (11))){
var inst_35407 = (state_35431[(8)]);
var inst_35417 = (state_35431[(2)]);
var inst_35418 = (inst_35407 + (1));
var inst_35407__$1 = inst_35418;
var state_35431__$1 = (function (){var statearr_35447 = state_35431;
(statearr_35447[(8)] = inst_35407__$1);

(statearr_35447[(10)] = inst_35417);

return statearr_35447;
})();
var statearr_35448_36957 = state_35431__$1;
(statearr_35448_36957[(2)] = null);

(statearr_35448_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (9))){
var state_35431__$1 = state_35431;
var statearr_35449_36958 = state_35431__$1;
(statearr_35449_36958[(2)] = null);

(statearr_35449_36958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (5))){
var state_35431__$1 = state_35431;
var statearr_35452_36961 = state_35431__$1;
(statearr_35452_36961[(2)] = null);

(statearr_35452_36961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (10))){
var inst_35422 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35453_36962 = state_35431__$1;
(statearr_35453_36962[(2)] = inst_35422);

(statearr_35453_36962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (8))){
var inst_35412 = (state_35431[(7)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35431__$1,(11),out,inst_35412);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35454[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35454[(1)] = (1));

return statearr_35454;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35431){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35431);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35455){var ex__33340__auto__ = e35455;
var statearr_35456_36963 = state_35431;
(statearr_35456_36963[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35431[(4)]))){
var statearr_35457_36967 = state_35431;
(statearr_35457_36967[(1)] = cljs.core.first((state_35431[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_35431;
state_35431 = G__36968;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35458 = f__33686__auto__();
(statearr_35458[(6)] = c__33685__auto___36939);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35466 = (function (f,ch,meta35461,_,fn1,meta35467){
this.f = f;
this.ch = ch;
this.meta35461 = meta35461;
this._ = _;
this.fn1 = fn1;
this.meta35467 = meta35467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35468,meta35467__$1){
var self__ = this;
var _35468__$1 = this;
return (new cljs.core.async.t_cljs$core$async35466(self__.f,self__.ch,self__.meta35461,self__._,self__.fn1,meta35467__$1));
}));

(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35468){
var self__ = this;
var _35468__$1 = this;
return self__.meta35467;
}));

(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35459_SHARP_){
var G__35472 = (((p1__35459_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35459_SHARP_) : self__.f.call(null,p1__35459_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35472) : f1.call(null,G__35472));
});
}));

(cljs.core.async.t_cljs$core$async35466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35461","meta35461",1914772019,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35460","cljs.core.async/t_cljs$core$async35460",760472323,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35467","meta35467",1055454181,null)], null);
}));

(cljs.core.async.t_cljs$core$async35466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35466");

(cljs.core.async.t_cljs$core$async35466.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35466.
 */
cljs.core.async.__GT_t_cljs$core$async35466 = (function cljs$core$async$__GT_t_cljs$core$async35466(f,ch,meta35461,_,fn1,meta35467){
return (new cljs.core.async.t_cljs$core$async35466(f,ch,meta35461,_,fn1,meta35467));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35460 = (function (f,ch,meta35461){
this.f = f;
this.ch = ch;
this.meta35461 = meta35461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35462,meta35461__$1){
var self__ = this;
var _35462__$1 = this;
return (new cljs.core.async.t_cljs$core$async35460(self__.f,self__.ch,meta35461__$1));
}));

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35462){
var self__ = this;
var _35462__$1 = this;
return self__.meta35461;
}));

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35466(self__.f,self__.ch,self__.meta35461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35483 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35483) : self__.f.call(null,G__35483));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35461","meta35461",1914772019,null)], null);
}));

(cljs.core.async.t_cljs$core$async35460.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35460");

(cljs.core.async.t_cljs$core$async35460.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35460");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35460.
 */
cljs.core.async.__GT_t_cljs$core$async35460 = (function cljs$core$async$__GT_t_cljs$core$async35460(f,ch,meta35461){
return (new cljs.core.async.t_cljs$core$async35460(f,ch,meta35461));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35460(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35501 = (function (f,ch,meta35502){
this.f = f;
this.ch = ch;
this.meta35502 = meta35502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35503,meta35502__$1){
var self__ = this;
var _35503__$1 = this;
return (new cljs.core.async.t_cljs$core$async35501(self__.f,self__.ch,meta35502__$1));
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35503){
var self__ = this;
var _35503__$1 = this;
return self__.meta35502;
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35502","meta35502",1785968941,null)], null);
}));

(cljs.core.async.t_cljs$core$async35501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35501");

(cljs.core.async.t_cljs$core$async35501.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35501.
 */
cljs.core.async.__GT_t_cljs$core$async35501 = (function cljs$core$async$__GT_t_cljs$core$async35501(f,ch,meta35502){
return (new cljs.core.async.t_cljs$core$async35501(f,ch,meta35502));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35501(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35516 = (function (p,ch,meta35517){
this.p = p;
this.ch = ch;
this.meta35517 = meta35517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35518,meta35517__$1){
var self__ = this;
var _35518__$1 = this;
return (new cljs.core.async.t_cljs$core$async35516(self__.p,self__.ch,meta35517__$1));
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35518){
var self__ = this;
var _35518__$1 = this;
return self__.meta35517;
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35517","meta35517",-1695711147,null)], null);
}));

(cljs.core.async.t_cljs$core$async35516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35516");

(cljs.core.async.t_cljs$core$async35516.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35516.
 */
cljs.core.async.__GT_t_cljs$core$async35516 = (function cljs$core$async$__GT_t_cljs$core$async35516(p,ch,meta35517){
return (new cljs.core.async.t_cljs$core$async35516(p,ch,meta35517));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35516(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35520 = arguments.length;
switch (G__35520) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___36976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35543){
var state_val_35544 = (state_35543[(1)]);
if((state_val_35544 === (7))){
var inst_35539 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35545_36977 = state_35543__$1;
(statearr_35545_36977[(2)] = inst_35539);

(statearr_35545_36977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (1))){
var state_35543__$1 = state_35543;
var statearr_35547_36978 = state_35543__$1;
(statearr_35547_36978[(2)] = null);

(statearr_35547_36978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (4))){
var inst_35524 = (state_35543[(7)]);
var inst_35524__$1 = (state_35543[(2)]);
var inst_35526 = (inst_35524__$1 == null);
var state_35543__$1 = (function (){var statearr_35558 = state_35543;
(statearr_35558[(7)] = inst_35524__$1);

return statearr_35558;
})();
if(cljs.core.truth_(inst_35526)){
var statearr_35559_36989 = state_35543__$1;
(statearr_35559_36989[(1)] = (5));

} else {
var statearr_35560_36990 = state_35543__$1;
(statearr_35560_36990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (6))){
var inst_35524 = (state_35543[(7)]);
var inst_35530 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35524) : p.call(null,inst_35524));
var state_35543__$1 = state_35543;
if(cljs.core.truth_(inst_35530)){
var statearr_35561_36992 = state_35543__$1;
(statearr_35561_36992[(1)] = (8));

} else {
var statearr_35562_36993 = state_35543__$1;
(statearr_35562_36993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (3))){
var inst_35541 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35543__$1,inst_35541);
} else {
if((state_val_35544 === (2))){
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35543__$1,(4),ch);
} else {
if((state_val_35544 === (11))){
var inst_35533 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35564_36997 = state_35543__$1;
(statearr_35564_36997[(2)] = inst_35533);

(statearr_35564_36997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (9))){
var state_35543__$1 = state_35543;
var statearr_35565_36998 = state_35543__$1;
(statearr_35565_36998[(2)] = null);

(statearr_35565_36998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (5))){
var inst_35528 = cljs.core.async.close_BANG_(out);
var state_35543__$1 = state_35543;
var statearr_35567_36999 = state_35543__$1;
(statearr_35567_36999[(2)] = inst_35528);

(statearr_35567_36999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (10))){
var inst_35536 = (state_35543[(2)]);
var state_35543__$1 = (function (){var statearr_35568 = state_35543;
(statearr_35568[(8)] = inst_35536);

return statearr_35568;
})();
var statearr_35569_37000 = state_35543__$1;
(statearr_35569_37000[(2)] = null);

(statearr_35569_37000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (8))){
var inst_35524 = (state_35543[(7)]);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35543__$1,(11),out,inst_35524);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35570 = [null,null,null,null,null,null,null,null,null];
(statearr_35570[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35570[(1)] = (1));

return statearr_35570;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35543){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35543);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35571){var ex__33340__auto__ = e35571;
var statearr_35572_37001 = state_35543;
(statearr_35572_37001[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35543[(4)]))){
var statearr_35573_37002 = state_35543;
(statearr_35573_37002[(1)] = cljs.core.first((state_35543[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_35543;
state_35543 = G__37003;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35574 = f__33686__auto__();
(statearr_35574[(6)] = c__33685__auto___36976);

return statearr_35574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35576 = arguments.length;
switch (G__35576) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33685__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35641){
var state_val_35642 = (state_35641[(1)]);
if((state_val_35642 === (7))){
var inst_35637 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35643_37009 = state_35641__$1;
(statearr_35643_37009[(2)] = inst_35637);

(statearr_35643_37009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (20))){
var inst_35606 = (state_35641[(7)]);
var inst_35617 = (state_35641[(2)]);
var inst_35619 = cljs.core.next(inst_35606);
var inst_35590 = inst_35619;
var inst_35591 = null;
var inst_35592 = (0);
var inst_35593 = (0);
var state_35641__$1 = (function (){var statearr_35644 = state_35641;
(statearr_35644[(8)] = inst_35592);

(statearr_35644[(9)] = inst_35617);

(statearr_35644[(10)] = inst_35590);

(statearr_35644[(11)] = inst_35593);

(statearr_35644[(12)] = inst_35591);

return statearr_35644;
})();
var statearr_35654_37015 = state_35641__$1;
(statearr_35654_37015[(2)] = null);

(statearr_35654_37015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (1))){
var state_35641__$1 = state_35641;
var statearr_35655_37018 = state_35641__$1;
(statearr_35655_37018[(2)] = null);

(statearr_35655_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (4))){
var inst_35579 = (state_35641[(13)]);
var inst_35579__$1 = (state_35641[(2)]);
var inst_35580 = (inst_35579__$1 == null);
var state_35641__$1 = (function (){var statearr_35656 = state_35641;
(statearr_35656[(13)] = inst_35579__$1);

return statearr_35656;
})();
if(cljs.core.truth_(inst_35580)){
var statearr_35657_37019 = state_35641__$1;
(statearr_35657_37019[(1)] = (5));

} else {
var statearr_35658_37020 = state_35641__$1;
(statearr_35658_37020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (15))){
var state_35641__$1 = state_35641;
var statearr_35662_37021 = state_35641__$1;
(statearr_35662_37021[(2)] = null);

(statearr_35662_37021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (21))){
var state_35641__$1 = state_35641;
var statearr_35664_37022 = state_35641__$1;
(statearr_35664_37022[(2)] = null);

(statearr_35664_37022[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (13))){
var inst_35592 = (state_35641[(8)]);
var inst_35590 = (state_35641[(10)]);
var inst_35593 = (state_35641[(11)]);
var inst_35591 = (state_35641[(12)]);
var inst_35602 = (state_35641[(2)]);
var inst_35603 = (inst_35593 + (1));
var tmp35659 = inst_35592;
var tmp35660 = inst_35590;
var tmp35661 = inst_35591;
var inst_35590__$1 = tmp35660;
var inst_35591__$1 = tmp35661;
var inst_35592__$1 = tmp35659;
var inst_35593__$1 = inst_35603;
var state_35641__$1 = (function (){var statearr_35665 = state_35641;
(statearr_35665[(8)] = inst_35592__$1);

(statearr_35665[(14)] = inst_35602);

(statearr_35665[(10)] = inst_35590__$1);

(statearr_35665[(11)] = inst_35593__$1);

(statearr_35665[(12)] = inst_35591__$1);

return statearr_35665;
})();
var statearr_35666_37024 = state_35641__$1;
(statearr_35666_37024[(2)] = null);

(statearr_35666_37024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (22))){
var state_35641__$1 = state_35641;
var statearr_35667_37025 = state_35641__$1;
(statearr_35667_37025[(2)] = null);

(statearr_35667_37025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (6))){
var inst_35579 = (state_35641[(13)]);
var inst_35588 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35579) : f.call(null,inst_35579));
var inst_35589 = cljs.core.seq(inst_35588);
var inst_35590 = inst_35589;
var inst_35591 = null;
var inst_35592 = (0);
var inst_35593 = (0);
var state_35641__$1 = (function (){var statearr_35668 = state_35641;
(statearr_35668[(8)] = inst_35592);

(statearr_35668[(10)] = inst_35590);

(statearr_35668[(11)] = inst_35593);

(statearr_35668[(12)] = inst_35591);

return statearr_35668;
})();
var statearr_35669_37027 = state_35641__$1;
(statearr_35669_37027[(2)] = null);

(statearr_35669_37027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (17))){
var inst_35606 = (state_35641[(7)]);
var inst_35610 = cljs.core.chunk_first(inst_35606);
var inst_35611 = cljs.core.chunk_rest(inst_35606);
var inst_35612 = cljs.core.count(inst_35610);
var inst_35590 = inst_35611;
var inst_35591 = inst_35610;
var inst_35592 = inst_35612;
var inst_35593 = (0);
var state_35641__$1 = (function (){var statearr_35670 = state_35641;
(statearr_35670[(8)] = inst_35592);

(statearr_35670[(10)] = inst_35590);

(statearr_35670[(11)] = inst_35593);

(statearr_35670[(12)] = inst_35591);

return statearr_35670;
})();
var statearr_35671_37029 = state_35641__$1;
(statearr_35671_37029[(2)] = null);

(statearr_35671_37029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (3))){
var inst_35639 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35641__$1,inst_35639);
} else {
if((state_val_35642 === (12))){
var inst_35627 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35672_37030 = state_35641__$1;
(statearr_35672_37030[(2)] = inst_35627);

(statearr_35672_37030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (2))){
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35641__$1,(4),in$);
} else {
if((state_val_35642 === (23))){
var inst_35635 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35673_37031 = state_35641__$1;
(statearr_35673_37031[(2)] = inst_35635);

(statearr_35673_37031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (19))){
var inst_35622 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35674_37032 = state_35641__$1;
(statearr_35674_37032[(2)] = inst_35622);

(statearr_35674_37032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (11))){
var inst_35590 = (state_35641[(10)]);
var inst_35606 = (state_35641[(7)]);
var inst_35606__$1 = cljs.core.seq(inst_35590);
var state_35641__$1 = (function (){var statearr_35675 = state_35641;
(statearr_35675[(7)] = inst_35606__$1);

return statearr_35675;
})();
if(inst_35606__$1){
var statearr_35678_37033 = state_35641__$1;
(statearr_35678_37033[(1)] = (14));

} else {
var statearr_35679_37034 = state_35641__$1;
(statearr_35679_37034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (9))){
var inst_35629 = (state_35641[(2)]);
var inst_35630 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35641__$1 = (function (){var statearr_35680 = state_35641;
(statearr_35680[(15)] = inst_35629);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35681_37036 = state_35641__$1;
(statearr_35681_37036[(1)] = (21));

} else {
var statearr_35682_37038 = state_35641__$1;
(statearr_35682_37038[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (5))){
var inst_35582 = cljs.core.async.close_BANG_(out);
var state_35641__$1 = state_35641;
var statearr_35683_37039 = state_35641__$1;
(statearr_35683_37039[(2)] = inst_35582);

(statearr_35683_37039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (14))){
var inst_35606 = (state_35641[(7)]);
var inst_35608 = cljs.core.chunked_seq_QMARK_(inst_35606);
var state_35641__$1 = state_35641;
if(inst_35608){
var statearr_35685_37042 = state_35641__$1;
(statearr_35685_37042[(1)] = (17));

} else {
var statearr_35686_37044 = state_35641__$1;
(statearr_35686_37044[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (16))){
var inst_35625 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35688_37045 = state_35641__$1;
(statearr_35688_37045[(2)] = inst_35625);

(statearr_35688_37045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (10))){
var inst_35593 = (state_35641[(11)]);
var inst_35591 = (state_35641[(12)]);
var inst_35600 = cljs.core._nth(inst_35591,inst_35593);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35641__$1,(13),out,inst_35600);
} else {
if((state_val_35642 === (18))){
var inst_35606 = (state_35641[(7)]);
var inst_35615 = cljs.core.first(inst_35606);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35641__$1,(20),out,inst_35615);
} else {
if((state_val_35642 === (8))){
var inst_35592 = (state_35641[(8)]);
var inst_35593 = (state_35641[(11)]);
var inst_35596 = (inst_35593 < inst_35592);
var inst_35597 = inst_35596;
var state_35641__$1 = state_35641;
if(cljs.core.truth_(inst_35597)){
var statearr_35689_37047 = state_35641__$1;
(statearr_35689_37047[(1)] = (10));

} else {
var statearr_35690_37048 = state_35641__$1;
(statearr_35690_37048[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____0 = (function (){
var statearr_35691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35691[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__);

(statearr_35691[(1)] = (1));

return statearr_35691;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____1 = (function (state_35641){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35641);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35692){var ex__33340__auto__ = e35692;
var statearr_35693_37052 = state_35641;
(statearr_35693_37052[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35641[(4)]))){
var statearr_35694_37053 = state_35641;
(statearr_35694_37053[(1)] = cljs.core.first((state_35641[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37058 = state_35641;
state_35641 = G__37058;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__ = function(state_35641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____1.call(this,state_35641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33337__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35695 = f__33686__auto__();
(statearr_35695[(6)] = c__33685__auto__);

return statearr_35695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));

return c__33685__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35704 = arguments.length;
switch (G__35704) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35716 = arguments.length;
switch (G__35716) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35729 = arguments.length;
switch (G__35729) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___37077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35761){
var state_val_35762 = (state_35761[(1)]);
if((state_val_35762 === (7))){
var inst_35756 = (state_35761[(2)]);
var state_35761__$1 = state_35761;
var statearr_35763_37078 = state_35761__$1;
(statearr_35763_37078[(2)] = inst_35756);

(statearr_35763_37078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (1))){
var inst_35733 = null;
var state_35761__$1 = (function (){var statearr_35764 = state_35761;
(statearr_35764[(7)] = inst_35733);

return statearr_35764;
})();
var statearr_35766_37081 = state_35761__$1;
(statearr_35766_37081[(2)] = null);

(statearr_35766_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (4))){
var inst_35736 = (state_35761[(8)]);
var inst_35736__$1 = (state_35761[(2)]);
var inst_35742 = (inst_35736__$1 == null);
var inst_35743 = cljs.core.not(inst_35742);
var state_35761__$1 = (function (){var statearr_35767 = state_35761;
(statearr_35767[(8)] = inst_35736__$1);

return statearr_35767;
})();
if(inst_35743){
var statearr_35771_37085 = state_35761__$1;
(statearr_35771_37085[(1)] = (5));

} else {
var statearr_35772_37086 = state_35761__$1;
(statearr_35772_37086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (6))){
var state_35761__$1 = state_35761;
var statearr_35774_37087 = state_35761__$1;
(statearr_35774_37087[(2)] = null);

(statearr_35774_37087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (3))){
var inst_35758 = (state_35761[(2)]);
var inst_35759 = cljs.core.async.close_BANG_(out);
var state_35761__$1 = (function (){var statearr_35775 = state_35761;
(statearr_35775[(9)] = inst_35758);

return statearr_35775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35761__$1,inst_35759);
} else {
if((state_val_35762 === (2))){
var state_35761__$1 = state_35761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35761__$1,(4),ch);
} else {
if((state_val_35762 === (11))){
var inst_35736 = (state_35761[(8)]);
var inst_35750 = (state_35761[(2)]);
var inst_35733 = inst_35736;
var state_35761__$1 = (function (){var statearr_35776 = state_35761;
(statearr_35776[(10)] = inst_35750);

(statearr_35776[(7)] = inst_35733);

return statearr_35776;
})();
var statearr_35777_37091 = state_35761__$1;
(statearr_35777_37091[(2)] = null);

(statearr_35777_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (9))){
var inst_35736 = (state_35761[(8)]);
var state_35761__$1 = state_35761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35761__$1,(11),out,inst_35736);
} else {
if((state_val_35762 === (5))){
var inst_35736 = (state_35761[(8)]);
var inst_35733 = (state_35761[(7)]);
var inst_35745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35736,inst_35733);
var state_35761__$1 = state_35761;
if(inst_35745){
var statearr_35779_37092 = state_35761__$1;
(statearr_35779_37092[(1)] = (8));

} else {
var statearr_35780_37093 = state_35761__$1;
(statearr_35780_37093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (10))){
var inst_35753 = (state_35761[(2)]);
var state_35761__$1 = state_35761;
var statearr_35781_37094 = state_35761__$1;
(statearr_35781_37094[(2)] = inst_35753);

(statearr_35781_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35762 === (8))){
var inst_35733 = (state_35761[(7)]);
var tmp35778 = inst_35733;
var inst_35733__$1 = tmp35778;
var state_35761__$1 = (function (){var statearr_35783 = state_35761;
(statearr_35783[(7)] = inst_35733__$1);

return statearr_35783;
})();
var statearr_35784_37098 = state_35761__$1;
(statearr_35784_37098[(2)] = null);

(statearr_35784_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35785[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35785[(1)] = (1));

return statearr_35785;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35761){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35761);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35786){var ex__33340__auto__ = e35786;
var statearr_35788_37107 = state_35761;
(statearr_35788_37107[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35761[(4)]))){
var statearr_35795_37114 = state_35761;
(statearr_35795_37114[(1)] = cljs.core.first((state_35761[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37115 = state_35761;
state_35761 = G__37115;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35796 = f__33686__auto__();
(statearr_35796[(6)] = c__33685__auto___37077);

return statearr_35796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35799 = arguments.length;
switch (G__35799) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___37120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35841){
var state_val_35842 = (state_35841[(1)]);
if((state_val_35842 === (7))){
var inst_35837 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
var statearr_35844_37121 = state_35841__$1;
(statearr_35844_37121[(2)] = inst_35837);

(statearr_35844_37121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (1))){
var inst_35802 = (new Array(n));
var inst_35803 = inst_35802;
var inst_35804 = (0);
var state_35841__$1 = (function (){var statearr_35846 = state_35841;
(statearr_35846[(7)] = inst_35803);

(statearr_35846[(8)] = inst_35804);

return statearr_35846;
})();
var statearr_35847_37122 = state_35841__$1;
(statearr_35847_37122[(2)] = null);

(statearr_35847_37122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (4))){
var inst_35807 = (state_35841[(9)]);
var inst_35807__$1 = (state_35841[(2)]);
var inst_35808 = (inst_35807__$1 == null);
var inst_35809 = cljs.core.not(inst_35808);
var state_35841__$1 = (function (){var statearr_35848 = state_35841;
(statearr_35848[(9)] = inst_35807__$1);

return statearr_35848;
})();
if(inst_35809){
var statearr_35849_37123 = state_35841__$1;
(statearr_35849_37123[(1)] = (5));

} else {
var statearr_35850_37124 = state_35841__$1;
(statearr_35850_37124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (15))){
var inst_35831 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
var statearr_35851_37125 = state_35841__$1;
(statearr_35851_37125[(2)] = inst_35831);

(statearr_35851_37125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (13))){
var state_35841__$1 = state_35841;
var statearr_35852_37126 = state_35841__$1;
(statearr_35852_37126[(2)] = null);

(statearr_35852_37126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (6))){
var inst_35804 = (state_35841[(8)]);
var inst_35827 = (inst_35804 > (0));
var state_35841__$1 = state_35841;
if(cljs.core.truth_(inst_35827)){
var statearr_35853_37127 = state_35841__$1;
(statearr_35853_37127[(1)] = (12));

} else {
var statearr_35854_37128 = state_35841__$1;
(statearr_35854_37128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (3))){
var inst_35839 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35841__$1,inst_35839);
} else {
if((state_val_35842 === (12))){
var inst_35803 = (state_35841[(7)]);
var inst_35829 = cljs.core.vec(inst_35803);
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35841__$1,(15),out,inst_35829);
} else {
if((state_val_35842 === (2))){
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35841__$1,(4),ch);
} else {
if((state_val_35842 === (11))){
var inst_35821 = (state_35841[(2)]);
var inst_35822 = (new Array(n));
var inst_35803 = inst_35822;
var inst_35804 = (0);
var state_35841__$1 = (function (){var statearr_35855 = state_35841;
(statearr_35855[(7)] = inst_35803);

(statearr_35855[(10)] = inst_35821);

(statearr_35855[(8)] = inst_35804);

return statearr_35855;
})();
var statearr_35856_37129 = state_35841__$1;
(statearr_35856_37129[(2)] = null);

(statearr_35856_37129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (9))){
var inst_35803 = (state_35841[(7)]);
var inst_35819 = cljs.core.vec(inst_35803);
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35841__$1,(11),out,inst_35819);
} else {
if((state_val_35842 === (5))){
var inst_35803 = (state_35841[(7)]);
var inst_35814 = (state_35841[(11)]);
var inst_35804 = (state_35841[(8)]);
var inst_35807 = (state_35841[(9)]);
var inst_35813 = (inst_35803[inst_35804] = inst_35807);
var inst_35814__$1 = (inst_35804 + (1));
var inst_35815 = (inst_35814__$1 < n);
var state_35841__$1 = (function (){var statearr_35861 = state_35841;
(statearr_35861[(12)] = inst_35813);

(statearr_35861[(11)] = inst_35814__$1);

return statearr_35861;
})();
if(cljs.core.truth_(inst_35815)){
var statearr_35862_37130 = state_35841__$1;
(statearr_35862_37130[(1)] = (8));

} else {
var statearr_35863_37131 = state_35841__$1;
(statearr_35863_37131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (14))){
var inst_35834 = (state_35841[(2)]);
var inst_35835 = cljs.core.async.close_BANG_(out);
var state_35841__$1 = (function (){var statearr_35865 = state_35841;
(statearr_35865[(13)] = inst_35834);

return statearr_35865;
})();
var statearr_35866_37132 = state_35841__$1;
(statearr_35866_37132[(2)] = inst_35835);

(statearr_35866_37132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (10))){
var inst_35825 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
var statearr_35868_37133 = state_35841__$1;
(statearr_35868_37133[(2)] = inst_35825);

(statearr_35868_37133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (8))){
var inst_35803 = (state_35841[(7)]);
var inst_35814 = (state_35841[(11)]);
var tmp35864 = inst_35803;
var inst_35803__$1 = tmp35864;
var inst_35804 = inst_35814;
var state_35841__$1 = (function (){var statearr_35869 = state_35841;
(statearr_35869[(7)] = inst_35803__$1);

(statearr_35869[(8)] = inst_35804);

return statearr_35869;
})();
var statearr_35870_37134 = state_35841__$1;
(statearr_35870_37134[(2)] = null);

(statearr_35870_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35877[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35877[(1)] = (1));

return statearr_35877;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35841){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35841);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35878){var ex__33340__auto__ = e35878;
var statearr_35882_37135 = state_35841;
(statearr_35882_37135[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35841[(4)]))){
var statearr_35883_37136 = state_35841;
(statearr_35883_37136[(1)] = cljs.core.first((state_35841[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37137 = state_35841;
state_35841 = G__37137;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_35885 = f__33686__auto__();
(statearr_35885[(6)] = c__33685__auto___37120);

return statearr_35885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35896 = arguments.length;
switch (G__35896) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33685__auto___37139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33686__auto__ = (function (){var switch__33336__auto__ = (function (state_35948){
var state_val_35949 = (state_35948[(1)]);
if((state_val_35949 === (7))){
var inst_35943 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35951_37140 = state_35948__$1;
(statearr_35951_37140[(2)] = inst_35943);

(statearr_35951_37140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (1))){
var inst_35903 = [];
var inst_35904 = inst_35903;
var inst_35905 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35948__$1 = (function (){var statearr_35952 = state_35948;
(statearr_35952[(7)] = inst_35905);

(statearr_35952[(8)] = inst_35904);

return statearr_35952;
})();
var statearr_35953_37141 = state_35948__$1;
(statearr_35953_37141[(2)] = null);

(statearr_35953_37141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (4))){
var inst_35908 = (state_35948[(9)]);
var inst_35908__$1 = (state_35948[(2)]);
var inst_35909 = (inst_35908__$1 == null);
var inst_35910 = cljs.core.not(inst_35909);
var state_35948__$1 = (function (){var statearr_35954 = state_35948;
(statearr_35954[(9)] = inst_35908__$1);

return statearr_35954;
})();
if(inst_35910){
var statearr_35955_37142 = state_35948__$1;
(statearr_35955_37142[(1)] = (5));

} else {
var statearr_35961_37143 = state_35948__$1;
(statearr_35961_37143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (15))){
var inst_35904 = (state_35948[(8)]);
var inst_35935 = cljs.core.vec(inst_35904);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35948__$1,(18),out,inst_35935);
} else {
if((state_val_35949 === (13))){
var inst_35930 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35967_37144 = state_35948__$1;
(statearr_35967_37144[(2)] = inst_35930);

(statearr_35967_37144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (6))){
var inst_35904 = (state_35948[(8)]);
var inst_35932 = inst_35904.length;
var inst_35933 = (inst_35932 > (0));
var state_35948__$1 = state_35948;
if(cljs.core.truth_(inst_35933)){
var statearr_35968_37145 = state_35948__$1;
(statearr_35968_37145[(1)] = (15));

} else {
var statearr_35969_37146 = state_35948__$1;
(statearr_35969_37146[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (17))){
var inst_35940 = (state_35948[(2)]);
var inst_35941 = cljs.core.async.close_BANG_(out);
var state_35948__$1 = (function (){var statearr_35970 = state_35948;
(statearr_35970[(10)] = inst_35940);

return statearr_35970;
})();
var statearr_35971_37147 = state_35948__$1;
(statearr_35971_37147[(2)] = inst_35941);

(statearr_35971_37147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (3))){
var inst_35945 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35948__$1,inst_35945);
} else {
if((state_val_35949 === (12))){
var inst_35904 = (state_35948[(8)]);
var inst_35923 = cljs.core.vec(inst_35904);
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35948__$1,(14),out,inst_35923);
} else {
if((state_val_35949 === (2))){
var state_35948__$1 = state_35948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35948__$1,(4),ch);
} else {
if((state_val_35949 === (11))){
var inst_35912 = (state_35948[(11)]);
var inst_35908 = (state_35948[(9)]);
var inst_35904 = (state_35948[(8)]);
var inst_35920 = inst_35904.push(inst_35908);
var tmp35972 = inst_35904;
var inst_35904__$1 = tmp35972;
var inst_35905 = inst_35912;
var state_35948__$1 = (function (){var statearr_35975 = state_35948;
(statearr_35975[(12)] = inst_35920);

(statearr_35975[(7)] = inst_35905);

(statearr_35975[(8)] = inst_35904__$1);

return statearr_35975;
})();
var statearr_35976_37148 = state_35948__$1;
(statearr_35976_37148[(2)] = null);

(statearr_35976_37148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (9))){
var inst_35905 = (state_35948[(7)]);
var inst_35916 = cljs.core.keyword_identical_QMARK_(inst_35905,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35948__$1 = state_35948;
var statearr_35977_37149 = state_35948__$1;
(statearr_35977_37149[(2)] = inst_35916);

(statearr_35977_37149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (5))){
var inst_35912 = (state_35948[(11)]);
var inst_35908 = (state_35948[(9)]);
var inst_35905 = (state_35948[(7)]);
var inst_35913 = (state_35948[(13)]);
var inst_35912__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35908) : f.call(null,inst_35908));
var inst_35913__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35912__$1,inst_35905);
var state_35948__$1 = (function (){var statearr_35983 = state_35948;
(statearr_35983[(11)] = inst_35912__$1);

(statearr_35983[(13)] = inst_35913__$1);

return statearr_35983;
})();
if(inst_35913__$1){
var statearr_35984_37150 = state_35948__$1;
(statearr_35984_37150[(1)] = (8));

} else {
var statearr_35985_37151 = state_35948__$1;
(statearr_35985_37151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (14))){
var inst_35912 = (state_35948[(11)]);
var inst_35908 = (state_35948[(9)]);
var inst_35925 = (state_35948[(2)]);
var inst_35926 = [];
var inst_35927 = inst_35926.push(inst_35908);
var inst_35904 = inst_35926;
var inst_35905 = inst_35912;
var state_35948__$1 = (function (){var statearr_35986 = state_35948;
(statearr_35986[(14)] = inst_35925);

(statearr_35986[(7)] = inst_35905);

(statearr_35986[(8)] = inst_35904);

(statearr_35986[(15)] = inst_35927);

return statearr_35986;
})();
var statearr_35987_37152 = state_35948__$1;
(statearr_35987_37152[(2)] = null);

(statearr_35987_37152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (16))){
var state_35948__$1 = state_35948;
var statearr_35988_37153 = state_35948__$1;
(statearr_35988_37153[(2)] = null);

(statearr_35988_37153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (10))){
var inst_35918 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
if(cljs.core.truth_(inst_35918)){
var statearr_35989_37154 = state_35948__$1;
(statearr_35989_37154[(1)] = (11));

} else {
var statearr_35990_37155 = state_35948__$1;
(statearr_35990_37155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (18))){
var inst_35937 = (state_35948[(2)]);
var state_35948__$1 = state_35948;
var statearr_35991_37156 = state_35948__$1;
(statearr_35991_37156[(2)] = inst_35937);

(statearr_35991_37156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35949 === (8))){
var inst_35913 = (state_35948[(13)]);
var state_35948__$1 = state_35948;
var statearr_35992_37157 = state_35948__$1;
(statearr_35992_37157[(2)] = inst_35913);

(statearr_35992_37157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33337__auto__ = null;
var cljs$core$async$state_machine__33337__auto____0 = (function (){
var statearr_35997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35997[(0)] = cljs$core$async$state_machine__33337__auto__);

(statearr_35997[(1)] = (1));

return statearr_35997;
});
var cljs$core$async$state_machine__33337__auto____1 = (function (state_35948){
while(true){
var ret_value__33338__auto__ = (function (){try{while(true){
var result__33339__auto__ = switch__33336__auto__(state_35948);
if(cljs.core.keyword_identical_QMARK_(result__33339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33339__auto__;
}
break;
}
}catch (e35998){var ex__33340__auto__ = e35998;
var statearr_35999_37158 = state_35948;
(statearr_35999_37158[(2)] = ex__33340__auto__);


if(cljs.core.seq((state_35948[(4)]))){
var statearr_36000_37159 = state_35948;
(statearr_36000_37159[(1)] = cljs.core.first((state_35948[(4)])));

} else {
throw ex__33340__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33338__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37160 = state_35948;
state_35948 = G__37160;
continue;
} else {
return ret_value__33338__auto__;
}
break;
}
});
cljs$core$async$state_machine__33337__auto__ = function(state_35948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33337__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33337__auto____1.call(this,state_35948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33337__auto____0;
cljs$core$async$state_machine__33337__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33337__auto____1;
return cljs$core$async$state_machine__33337__auto__;
})()
})();
var state__33687__auto__ = (function (){var statearr_36001 = f__33686__auto__();
(statearr_36001[(6)] = c__33685__auto___37139);

return statearr_36001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33687__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
