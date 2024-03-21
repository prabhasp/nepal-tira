goog.provide('app.core');
app.core.time_section = (function app$core$time_section(){
var f__40383__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___43300 = app.core.time_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___43300)){
var f__40325__auto___43301 = temp__5804__auto___43300;
(f__40325__auto___43301.cljs$core$IFn$_invoke$arity$0 ? f__40325__auto___43301.cljs$core$IFn$_invoke$arity$0() : f__40325__auto___43301.call(null));
} else {
}
} else {
}

var vec__43287 = uix.core.use_state((new Date()));
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43287,(0),null);
var set_date_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43287,(1),null);
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timeZone","timeZone",-1874446783),"Asia/Kathmandu",new cljs.core.Keyword(null,"hour","hour",-555989214),"2-digit",new cljs.core.Keyword(null,"minute","minute",-642875969),"2-digit",new cljs.core.Keyword(null,"second","second",-444702010),"2-digit",new cljs.core.Keyword(null,"hour12","hour12",788435038),true], null));
var local_offset = (- date.getTimezoneOffset());
var kathmandu_offset = (5.75 * (60));
var diff = (kathmandu_offset - local_offset);
var hrs = ((diff / (60)) | (0));
var mins = cljs.core.mod(cljs.core.abs(diff),(60));
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
return setInterval((function (){
var G__43291 = (new Date());
return (set_date_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_date_BANG_.cljs$core$IFn$_invoke$arity$1(G__43291) : set_date_BANG_.call(null,G__43291));
}),(1000));
}));

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Time",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(date.toLocaleTimeString("en-US",options),["div",null,"time-display",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(["which is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.abs(hrs))," hrs and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mins)," minutes ",(((diff > (0)))?"ahead of":"behind")," you."].join(''),["div",null,"hours-ahead",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__43292 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__43293 = app.core.time_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__43293);

try{return f__40383__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__43292);
}} else {
return f__40383__auto__();
}
});

(app.core.time_section.uix_component_QMARK_ = true);

(app.core.time_section.displayName = "app.core/time-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__40334__auto___43302 = window.uix.dev.signature_BANG_();
(sig__40334__auto___43302.cljs$core$IFn$_invoke$arity$4 ? sig__40334__auto___43302.cljs$core$IFn$_invoke$arity$4(app.core.time_section,"(uix.core/use-state (js/Date.))(uix.core/use-effect (fn [] (js/setInterval (fn* [] (set-date! (js/Date.))) 1000)))",null,null) : sig__40334__auto___43302.call(null,app.core.time_section,"(uix.core/use-state (js/Date.))(uix.core/use-effect (fn [] (js/setInterval (fn* [] (set-date! (js/Date.))) 1000)))",null,null));

window.uix.dev.register_BANG_(app.core.time_section,app.core.time_section.displayName);

(app.core.time_section.fast_refresh_signature = sig__40334__auto___43302);
} else {
}
} else {
}
app.core.date_section = (function app$core$date_section(){
var f__40383__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___43303 = app.core.date_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___43303)){
var f__40325__auto___43304 = temp__5804__auto___43303;
(f__40325__auto___43304.cljs$core$IFn$_invoke$arity$0 ? f__40325__auto___43304.cljs$core$IFn$_invoke$arity$0() : f__40325__auto___43304.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Date",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Today's Nepali Patro date is:",["div",null,"patro-display",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("MMM DD B.S",["div",null,"patro-value",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Pick a date:",["div",null,"patro-picker",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Patro date is:",["div",null,"patro-date",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("MMM DD B.S",["div",null,"patro-value",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__43294 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__43295 = app.core.date_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__43295);

try{return f__40383__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__43294);
}} else {
return f__40383__auto__();
}
});

(app.core.date_section.uix_component_QMARK_ = true);

(app.core.date_section.displayName = "app.core/date-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__40334__auto___43305 = window.uix.dev.signature_BANG_();
(sig__40334__auto___43305.cljs$core$IFn$_invoke$arity$4 ? sig__40334__auto___43305.cljs$core$IFn$_invoke$arity$4(app.core.date_section,"",null,null) : sig__40334__auto___43305.call(null,app.core.date_section,"",null,null));

window.uix.dev.register_BANG_(app.core.date_section,app.core.date_section.displayName);

(app.core.date_section.fast_refresh_signature = sig__40334__auto___43305);
} else {
}
} else {
}
app.core.currency_section = (function app$core$currency_section(){
var f__40383__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___43306 = app.core.currency_section.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___43306)){
var f__40325__auto___43307 = temp__5804__auto___43306;
(f__40325__auto___43307.cljs$core$IFn$_invoke$arity$0 ? f__40325__auto___43307.cljs$core$IFn$_invoke$arity$0() : f__40325__auto___43307.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app-section"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Currency",["div",null,"section-title",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Today's conversion rates:",["div",null,"currency-rates",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("1 USD = ## NPR",["div",null,"usd-rate",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("1 AUD = ## NPR",["div",null,"aud-rate",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Amount:",["div",null,"currency-input",false],false),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("0.00",["div",null,"currency-value",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__43296 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__43297 = app.core.currency_section;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__43297);

try{return f__40383__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__43296);
}} else {
return f__40383__auto__();
}
});

(app.core.currency_section.uix_component_QMARK_ = true);

(app.core.currency_section.displayName = "app.core/currency-section");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__40334__auto___43308 = window.uix.dev.signature_BANG_();
(sig__40334__auto___43308.cljs$core$IFn$_invoke$arity$4 ? sig__40334__auto___43308.cljs$core$IFn$_invoke$arity$4(app.core.currency_section,"",null,null) : sig__40334__auto___43308.call(null,app.core.currency_section,"",null,null));

window.uix.dev.register_BANG_(app.core.currency_section,app.core.currency_section.displayName);

(app.core.currency_section.fast_refresh_signature = sig__40334__auto___43308);
} else {
}
} else {
}
app.core.app = (function app$core$app(){
var f__40383__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___43309 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___43309)){
var f__40325__auto___43310 = temp__5804__auto___43309;
(f__40325__auto___43310.cljs$core$IFn$_invoke$arity$0 ? f__40325__auto___43310.cljs$core$IFn$_invoke$arity$0() : f__40325__auto___43310.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"app"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("Aile Nepal tira...",["div",null,"app-header",false],false),[]),uix.compiler.aot._GT_el("div",[{'className':"three-body"}],[uix.compiler.alpha.component_element(app.core.time_section,[null],[]),uix.compiler.alpha.component_element(app.core.date_section,[null],[]),uix.compiler.alpha.component_element(app.core.currency_section,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__43298 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__43299 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__43299);

try{return f__40383__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__43298);
}} else {
return f__40383__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__40334__auto___43311 = window.uix.dev.signature_BANG_();
(sig__40334__auto___43311.cljs$core$IFn$_invoke$arity$4 ? sig__40334__auto___43311.cljs$core$IFn$_invoke$arity$4(app.core.app,"",null,null) : sig__40334__auto___43311.call(null,app.core.app,"",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__40334__auto___43311);
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
