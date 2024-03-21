goog.provide('app.core');
app.core.time_section = (function app$core$time_section(){
var f__28844__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33474 = app.core.time_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33474)){
var f__28786__auto___33475 = temp__5804__auto___33474;
(f__28786__auto___33475.cljs$core$IFn$_invoke$arity$0 ? f__28786__auto___33475.cljs$core$IFn$_invoke$arity$0() : f__28786__auto___33475.call(null));
} else {
}
} else {
}

var vec__33461 = uix.core.use_state((new Date()));
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(0),null);
var set_date_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(1),null);
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timeZone","timeZone",-1874446783),"Asia/Kathmandu",new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"second","second",-444702010),"2-digit",new cljs.core.Keyword(null,"hour12","hour12",788435038),true], null));
var local_offset = (- date.getTimezoneOffset());
var kathmandu_offset = (5.75 * (60));
var diff = (kathmandu_offset - local_offset);
var hrs = ((diff / (60)) | (0));
var mins = cljs.core.mod(cljs.core.abs(diff),(60));
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
return setInterval((function (){
var G__33465 = (new Date());
return (set_date_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_date_BANG_.cljs$core$IFn$_invoke$arity$1(G__33465) : set_date_BANG_.call(null,G__33465));
}),(1000));
}));

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Time",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(date.toLocaleTimeString("en-US",options),["div",null,"time-display",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(["which is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.abs(hrs))," hrs and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mins)," minutes ",(((diff > (0)))?"ahead of":"behind")," you."].join(''),["div",null,"hours-ahead",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33466 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33467 = app.core.time_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33467);

try{return f__28844__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33466);
}} else {
return f__28844__auto__();
}
});

(app.core.time_section.uix_component_QMARK_ = true);

(app.core.time_section.displayName = "app.core/time-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28795__auto___33476 = window.uix.dev.signature_BANG_();
(sig__28795__auto___33476.cljs$core$IFn$_invoke$arity$4 ? sig__28795__auto___33476.cljs$core$IFn$_invoke$arity$4(app.core.time_section,"(uix.core/use-state (js/Date.))(uix.core/use-effect (fn [] (js/setInterval (fn* [] (set-date! (js/Date.))) 1000)))",null,null) : sig__28795__auto___33476.call(null,app.core.time_section,"(uix.core/use-state (js/Date.))(uix.core/use-effect (fn [] (js/setInterval (fn* [] (set-date! (js/Date.))) 1000)))",null,null));

window.uix.dev.register_BANG_(app.core.time_section,app.core.time_section.displayName);

(app.core.time_section.fast_refresh_signature = sig__28795__auto___33476);
} else {
}
} else {
}
app.core.date_section = (function app$core$date_section(){
var f__28844__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33477 = app.core.date_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33477)){
var f__28786__auto___33478 = temp__5804__auto___33477;
(f__28786__auto___33478.cljs$core$IFn$_invoke$arity$0 ? f__28786__auto___33478.cljs$core$IFn$_invoke$arity$0() : f__28786__auto___33478.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Date",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Today's Nepali Patro date is:",["div",null,"patro-display",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("MMM DD B.S",["div",null,"patro-value",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Pick a date:",["div",null,"patro-picker",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Patro date is:",["div",null,"patro-date",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("MMM DD B.S",["div",null,"patro-value",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33468 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33469 = app.core.date_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33469);

try{return f__28844__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33468);
}} else {
return f__28844__auto__();
}
});

(app.core.date_section.uix_component_QMARK_ = true);

(app.core.date_section.displayName = "app.core/date-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28795__auto___33479 = window.uix.dev.signature_BANG_();
(sig__28795__auto___33479.cljs$core$IFn$_invoke$arity$4 ? sig__28795__auto___33479.cljs$core$IFn$_invoke$arity$4(app.core.date_section,"",null,null) : sig__28795__auto___33479.call(null,app.core.date_section,"",null,null));

window.uix.dev.register_BANG_(app.core.date_section,app.core.date_section.displayName);

(app.core.date_section.fast_refresh_signature = sig__28795__auto___33479);
} else {
}
} else {
}
app.core.currency_section = (function app$core$currency_section(){
var f__28844__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33480 = app.core.currency_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33480)){
var f__28786__auto___33481 = temp__5804__auto___33480;
(f__28786__auto___33481.cljs$core$IFn$_invoke$arity$0 ? f__28786__auto___33481.cljs$core$IFn$_invoke$arity$0() : f__28786__auto___33481.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Currency",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Today's conversion rates:",["div",null,"currency-rates",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("1 USD = ## NPR",["div",null,"usd-rate",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("1 AUD = ## NPR",["div",null,"aud-rate",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Amount:",["div",null,"currency-input",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("0.00",["div",null,"currency-value",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33470 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33471 = app.core.currency_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33471);

try{return f__28844__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33470);
}} else {
return f__28844__auto__();
}
});

(app.core.currency_section.uix_component_QMARK_ = true);

(app.core.currency_section.displayName = "app.core/currency-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28795__auto___33482 = window.uix.dev.signature_BANG_();
(sig__28795__auto___33482.cljs$core$IFn$_invoke$arity$4 ? sig__28795__auto___33482.cljs$core$IFn$_invoke$arity$4(app.core.currency_section,"",null,null) : sig__28795__auto___33482.call(null,app.core.currency_section,"",null,null));

window.uix.dev.register_BANG_(app.core.currency_section,app.core.currency_section.displayName);

(app.core.currency_section.fast_refresh_signature = sig__28795__auto___33482);
} else {
}
} else {
}
app.core.app = (function app$core$app(){
var f__28844__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___33483 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___33483)){
var f__28786__auto___33484 = temp__5804__auto___33483;
(f__28786__auto___33484.cljs$core$IFn$_invoke$arity$0 ? f__28786__auto___33484.cljs$core$IFn$_invoke$arity$0() : f__28786__auto___33484.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Aile Nepal tira...",["div",null,"app-header",false],false),[]),uix.compiler.aot._GT_el("div",[{'className':"three-body"}],[uix.compiler.alpha.component_element(app.core.time_section,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__33472 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__33473 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__33473);

try{return f__28844__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__33472);
}} else {
return f__28844__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28795__auto___33485 = window.uix.dev.signature_BANG_();
(sig__28795__auto___33485.cljs$core$IFn$_invoke$arity$4 ? sig__28795__auto___33485.cljs$core$IFn$_invoke$arity$4(app.core.app,"",null,null) : sig__28795__auto___33485.call(null,app.core.app,"",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__28795__auto___33485);
} else {
}
} else {
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}
app.core.render = (function app$core$render(){
return uix.dom.render_root(uix.compiler.alpha.component_element(app.core.app,[null],[]),app.core.root);
});
app.core.init = (function app$core$init(){
return app.core.render();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
