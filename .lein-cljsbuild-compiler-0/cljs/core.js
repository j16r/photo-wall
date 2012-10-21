goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__5890__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5890 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5890__delegate.call(this, array, i, idxs);
};
G__5890.cljs$lang$maxFixedArity = 2;
G__5890.cljs$lang$applyTo = (function (arglist__5891){
var array = cljs.core.first(arglist__5891);
var i = cljs.core.first(cljs.core.next(arglist__5891));
var idxs = cljs.core.rest(cljs.core.next(arglist__5891));
return G__5890__delegate(array, i, idxs);
});
G__5890.cljs$lang$arity$variadic = G__5890__delegate;
return G__5890;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____5955 = this$;
if(and__3822__auto____5955)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5955;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____5956 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5956)
{return or__3824__auto____5956;
} else
{var or__3824__auto____5957 = (cljs.core._invoke["_"]);
if(or__3824__auto____5957)
{return or__3824__auto____5957;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5958 = this$;
if(and__3822__auto____5958)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5958;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____5959 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5959)
{return or__3824__auto____5959;
} else
{var or__3824__auto____5960 = (cljs.core._invoke["_"]);
if(or__3824__auto____5960)
{return or__3824__auto____5960;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5961 = this$;
if(and__3822__auto____5961)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5961;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____5962 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5962)
{return or__3824__auto____5962;
} else
{var or__3824__auto____5963 = (cljs.core._invoke["_"]);
if(or__3824__auto____5963)
{return or__3824__auto____5963;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5964 = this$;
if(and__3822__auto____5964)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5964;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____5965 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5965)
{return or__3824__auto____5965;
} else
{var or__3824__auto____5966 = (cljs.core._invoke["_"]);
if(or__3824__auto____5966)
{return or__3824__auto____5966;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5967 = this$;
if(and__3822__auto____5967)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5967;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____5968 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5968)
{return or__3824__auto____5968;
} else
{var or__3824__auto____5969 = (cljs.core._invoke["_"]);
if(or__3824__auto____5969)
{return or__3824__auto____5969;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5970 = this$;
if(and__3822__auto____5970)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5970;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____5971 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5971)
{return or__3824__auto____5971;
} else
{var or__3824__auto____5972 = (cljs.core._invoke["_"]);
if(or__3824__auto____5972)
{return or__3824__auto____5972;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5973 = this$;
if(and__3822__auto____5973)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5973;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____5974 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5974)
{return or__3824__auto____5974;
} else
{var or__3824__auto____5975 = (cljs.core._invoke["_"]);
if(or__3824__auto____5975)
{return or__3824__auto____5975;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____5976 = this$;
if(and__3822__auto____5976)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____5976;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____5977 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5977)
{return or__3824__auto____5977;
} else
{var or__3824__auto____5978 = (cljs.core._invoke["_"]);
if(or__3824__auto____5978)
{return or__3824__auto____5978;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____5979 = this$;
if(and__3822__auto____5979)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____5979;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____5980 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5980)
{return or__3824__auto____5980;
} else
{var or__3824__auto____5981 = (cljs.core._invoke["_"]);
if(or__3824__auto____5981)
{return or__3824__auto____5981;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____5982 = this$;
if(and__3822__auto____5982)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____5982;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____5983 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5983)
{return or__3824__auto____5983;
} else
{var or__3824__auto____5984 = (cljs.core._invoke["_"]);
if(or__3824__auto____5984)
{return or__3824__auto____5984;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____5985 = this$;
if(and__3822__auto____5985)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____5985;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____5986 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5986)
{return or__3824__auto____5986;
} else
{var or__3824__auto____5987 = (cljs.core._invoke["_"]);
if(or__3824__auto____5987)
{return or__3824__auto____5987;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____5988 = this$;
if(and__3822__auto____5988)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____5988;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____5989 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5989)
{return or__3824__auto____5989;
} else
{var or__3824__auto____5990 = (cljs.core._invoke["_"]);
if(or__3824__auto____5990)
{return or__3824__auto____5990;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____5991 = this$;
if(and__3822__auto____5991)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____5991;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____5992 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5992)
{return or__3824__auto____5992;
} else
{var or__3824__auto____5993 = (cljs.core._invoke["_"]);
if(or__3824__auto____5993)
{return or__3824__auto____5993;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____5994 = this$;
if(and__3822__auto____5994)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____5994;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____5995 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5995)
{return or__3824__auto____5995;
} else
{var or__3824__auto____5996 = (cljs.core._invoke["_"]);
if(or__3824__auto____5996)
{return or__3824__auto____5996;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____5997 = this$;
if(and__3822__auto____5997)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____5997;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____5998 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5998)
{return or__3824__auto____5998;
} else
{var or__3824__auto____5999 = (cljs.core._invoke["_"]);
if(or__3824__auto____5999)
{return or__3824__auto____5999;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6000 = this$;
if(and__3822__auto____6000)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6000;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6001 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6001)
{return or__3824__auto____6001;
} else
{var or__3824__auto____6002 = (cljs.core._invoke["_"]);
if(or__3824__auto____6002)
{return or__3824__auto____6002;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6003 = this$;
if(and__3822__auto____6003)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6003;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6004 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6004)
{return or__3824__auto____6004;
} else
{var or__3824__auto____6005 = (cljs.core._invoke["_"]);
if(or__3824__auto____6005)
{return or__3824__auto____6005;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6006 = this$;
if(and__3822__auto____6006)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6006;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6007 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6007)
{return or__3824__auto____6007;
} else
{var or__3824__auto____6008 = (cljs.core._invoke["_"]);
if(or__3824__auto____6008)
{return or__3824__auto____6008;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6009 = this$;
if(and__3822__auto____6009)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6009;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6010 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6010)
{return or__3824__auto____6010;
} else
{var or__3824__auto____6011 = (cljs.core._invoke["_"]);
if(or__3824__auto____6011)
{return or__3824__auto____6011;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6012 = this$;
if(and__3822__auto____6012)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6012;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6013 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6013)
{return or__3824__auto____6013;
} else
{var or__3824__auto____6014 = (cljs.core._invoke["_"]);
if(or__3824__auto____6014)
{return or__3824__auto____6014;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6015 = this$;
if(and__3822__auto____6015)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6015;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6016 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6016)
{return or__3824__auto____6016;
} else
{var or__3824__auto____6017 = (cljs.core._invoke["_"]);
if(or__3824__auto____6017)
{return or__3824__auto____6017;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6021 = coll;
if(and__3822__auto____6021)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6021;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6022 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6022)
{return or__3824__auto____6022;
} else
{var or__3824__auto____6023 = (cljs.core._count["_"]);
if(or__3824__auto____6023)
{return or__3824__auto____6023;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6027 = coll;
if(and__3822__auto____6027)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6027;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6028 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6028)
{return or__3824__auto____6028;
} else
{var or__3824__auto____6029 = (cljs.core._empty["_"]);
if(or__3824__auto____6029)
{return or__3824__auto____6029;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6033 = coll;
if(and__3822__auto____6033)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6033;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6034 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6034)
{return or__3824__auto____6034;
} else
{var or__3824__auto____6035 = (cljs.core._conj["_"]);
if(or__3824__auto____6035)
{return or__3824__auto____6035;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6042 = coll;
if(and__3822__auto____6042)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6042;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6043 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6043)
{return or__3824__auto____6043;
} else
{var or__3824__auto____6044 = (cljs.core._nth["_"]);
if(or__3824__auto____6044)
{return or__3824__auto____6044;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6045 = coll;
if(and__3822__auto____6045)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6045;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6046 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6046)
{return or__3824__auto____6046;
} else
{var or__3824__auto____6047 = (cljs.core._nth["_"]);
if(or__3824__auto____6047)
{return or__3824__auto____6047;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6051 = coll;
if(and__3822__auto____6051)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6051;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6052 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6052)
{return or__3824__auto____6052;
} else
{var or__3824__auto____6053 = (cljs.core._first["_"]);
if(or__3824__auto____6053)
{return or__3824__auto____6053;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6057 = coll;
if(and__3822__auto____6057)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6057;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6058 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6058)
{return or__3824__auto____6058;
} else
{var or__3824__auto____6059 = (cljs.core._rest["_"]);
if(or__3824__auto____6059)
{return or__3824__auto____6059;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6063 = coll;
if(and__3822__auto____6063)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6063;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6064 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6064)
{return or__3824__auto____6064;
} else
{var or__3824__auto____6065 = (cljs.core._next["_"]);
if(or__3824__auto____6065)
{return or__3824__auto____6065;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6072 = o;
if(and__3822__auto____6072)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6072;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6073 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6073)
{return or__3824__auto____6073;
} else
{var or__3824__auto____6074 = (cljs.core._lookup["_"]);
if(or__3824__auto____6074)
{return or__3824__auto____6074;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6075 = o;
if(and__3822__auto____6075)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6075;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6076 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6076)
{return or__3824__auto____6076;
} else
{var or__3824__auto____6077 = (cljs.core._lookup["_"]);
if(or__3824__auto____6077)
{return or__3824__auto____6077;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6081 = coll;
if(and__3822__auto____6081)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6081;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6082 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6082)
{return or__3824__auto____6082;
} else
{var or__3824__auto____6083 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6083)
{return or__3824__auto____6083;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6087 = coll;
if(and__3822__auto____6087)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6087;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6088 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6088)
{return or__3824__auto____6088;
} else
{var or__3824__auto____6089 = (cljs.core._assoc["_"]);
if(or__3824__auto____6089)
{return or__3824__auto____6089;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6093 = coll;
if(and__3822__auto____6093)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6093;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6094 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6094)
{return or__3824__auto____6094;
} else
{var or__3824__auto____6095 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6095)
{return or__3824__auto____6095;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6099 = coll;
if(and__3822__auto____6099)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6099;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6100 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6100)
{return or__3824__auto____6100;
} else
{var or__3824__auto____6101 = (cljs.core._key["_"]);
if(or__3824__auto____6101)
{return or__3824__auto____6101;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6105 = coll;
if(and__3822__auto____6105)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6105;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6106 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6106)
{return or__3824__auto____6106;
} else
{var or__3824__auto____6107 = (cljs.core._val["_"]);
if(or__3824__auto____6107)
{return or__3824__auto____6107;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6111 = coll;
if(and__3822__auto____6111)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6111;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6112 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6112)
{return or__3824__auto____6112;
} else
{var or__3824__auto____6113 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6113)
{return or__3824__auto____6113;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6117 = coll;
if(and__3822__auto____6117)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6117;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6118 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6118)
{return or__3824__auto____6118;
} else
{var or__3824__auto____6119 = (cljs.core._peek["_"]);
if(or__3824__auto____6119)
{return or__3824__auto____6119;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6123 = coll;
if(and__3822__auto____6123)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6123;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6124 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6124)
{return or__3824__auto____6124;
} else
{var or__3824__auto____6125 = (cljs.core._pop["_"]);
if(or__3824__auto____6125)
{return or__3824__auto____6125;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6129 = coll;
if(and__3822__auto____6129)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6129;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6130 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6130)
{return or__3824__auto____6130;
} else
{var or__3824__auto____6131 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6131)
{return or__3824__auto____6131;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6135 = o;
if(and__3822__auto____6135)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6135;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6136 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6136)
{return or__3824__auto____6136;
} else
{var or__3824__auto____6137 = (cljs.core._deref["_"]);
if(or__3824__auto____6137)
{return or__3824__auto____6137;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6141 = o;
if(and__3822__auto____6141)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6141;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6142 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6142)
{return or__3824__auto____6142;
} else
{var or__3824__auto____6143 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6143)
{return or__3824__auto____6143;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6147 = o;
if(and__3822__auto____6147)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6147;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6148 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6148)
{return or__3824__auto____6148;
} else
{var or__3824__auto____6149 = (cljs.core._meta["_"]);
if(or__3824__auto____6149)
{return or__3824__auto____6149;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6153 = o;
if(and__3822__auto____6153)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6153;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6154 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6154)
{return or__3824__auto____6154;
} else
{var or__3824__auto____6155 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6155)
{return or__3824__auto____6155;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6162 = coll;
if(and__3822__auto____6162)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6162;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6163 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6163)
{return or__3824__auto____6163;
} else
{var or__3824__auto____6164 = (cljs.core._reduce["_"]);
if(or__3824__auto____6164)
{return or__3824__auto____6164;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6165 = coll;
if(and__3822__auto____6165)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6165;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6166 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6166)
{return or__3824__auto____6166;
} else
{var or__3824__auto____6167 = (cljs.core._reduce["_"]);
if(or__3824__auto____6167)
{return or__3824__auto____6167;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6171 = coll;
if(and__3822__auto____6171)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6171;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6172 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6172)
{return or__3824__auto____6172;
} else
{var or__3824__auto____6173 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6173)
{return or__3824__auto____6173;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6177 = o;
if(and__3822__auto____6177)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6177;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6178 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6178)
{return or__3824__auto____6178;
} else
{var or__3824__auto____6179 = (cljs.core._equiv["_"]);
if(or__3824__auto____6179)
{return or__3824__auto____6179;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6183 = o;
if(and__3822__auto____6183)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6183;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6184 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6184)
{return or__3824__auto____6184;
} else
{var or__3824__auto____6185 = (cljs.core._hash["_"]);
if(or__3824__auto____6185)
{return or__3824__auto____6185;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6189 = o;
if(and__3822__auto____6189)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6189;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6190 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6190)
{return or__3824__auto____6190;
} else
{var or__3824__auto____6191 = (cljs.core._seq["_"]);
if(or__3824__auto____6191)
{return or__3824__auto____6191;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6195 = coll;
if(and__3822__auto____6195)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6195;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6196 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6196)
{return or__3824__auto____6196;
} else
{var or__3824__auto____6197 = (cljs.core._rseq["_"]);
if(or__3824__auto____6197)
{return or__3824__auto____6197;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6201 = coll;
if(and__3822__auto____6201)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6201;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6202 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6202)
{return or__3824__auto____6202;
} else
{var or__3824__auto____6203 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6203)
{return or__3824__auto____6203;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6207 = coll;
if(and__3822__auto____6207)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6207;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6208 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6208)
{return or__3824__auto____6208;
} else
{var or__3824__auto____6209 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6213 = coll;
if(and__3822__auto____6213)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6213;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6214 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6214)
{return or__3824__auto____6214;
} else
{var or__3824__auto____6215 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6215)
{return or__3824__auto____6215;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6219 = coll;
if(and__3822__auto____6219)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6219;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6220 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6220)
{return or__3824__auto____6220;
} else
{var or__3824__auto____6221 = (cljs.core._comparator["_"]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6225 = o;
if(and__3822__auto____6225)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6225;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6226 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6226)
{return or__3824__auto____6226;
} else
{var or__3824__auto____6227 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6231 = d;
if(and__3822__auto____6231)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6231;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6232 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6232)
{return or__3824__auto____6232;
} else
{var or__3824__auto____6233 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6237 = this$;
if(and__3822__auto____6237)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6237;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6238 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6238)
{return or__3824__auto____6238;
} else
{var or__3824__auto____6239 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6239)
{return or__3824__auto____6239;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6243 = this$;
if(and__3822__auto____6243)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6243;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6244 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6244)
{return or__3824__auto____6244;
} else
{var or__3824__auto____6245 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6245)
{return or__3824__auto____6245;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6249 = this$;
if(and__3822__auto____6249)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6249;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6250 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6250)
{return or__3824__auto____6250;
} else
{var or__3824__auto____6251 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6251)
{return or__3824__auto____6251;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6255 = coll;
if(and__3822__auto____6255)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6255;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6256 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6256)
{return or__3824__auto____6256;
} else
{var or__3824__auto____6257 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6261 = tcoll;
if(and__3822__auto____6261)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6261;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6262 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6262)
{return or__3824__auto____6262;
} else
{var or__3824__auto____6263 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6263)
{return or__3824__auto____6263;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6267 = tcoll;
if(and__3822__auto____6267)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6267;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6268 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6268)
{return or__3824__auto____6268;
} else
{var or__3824__auto____6269 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6269)
{return or__3824__auto____6269;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6273 = tcoll;
if(and__3822__auto____6273)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6273;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6274 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6274)
{return or__3824__auto____6274;
} else
{var or__3824__auto____6275 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6275)
{return or__3824__auto____6275;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6279 = tcoll;
if(and__3822__auto____6279)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6279;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6280 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6280)
{return or__3824__auto____6280;
} else
{var or__3824__auto____6281 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6285 = tcoll;
if(and__3822__auto____6285)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6285;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6286 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6286)
{return or__3824__auto____6286;
} else
{var or__3824__auto____6287 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6287)
{return or__3824__auto____6287;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6291 = tcoll;
if(and__3822__auto____6291)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6291;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6292 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6292)
{return or__3824__auto____6292;
} else
{var or__3824__auto____6293 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6293)
{return or__3824__auto____6293;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6297 = tcoll;
if(and__3822__auto____6297)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6297;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6298 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6298)
{return or__3824__auto____6298;
} else
{var or__3824__auto____6299 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6299)
{return or__3824__auto____6299;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6303 = x;
if(and__3822__auto____6303)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6303;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6304 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6304)
{return or__3824__auto____6304;
} else
{var or__3824__auto____6305 = (cljs.core._compare["_"]);
if(or__3824__auto____6305)
{return or__3824__auto____6305;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6309 = coll;
if(and__3822__auto____6309)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6309;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6310 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6310)
{return or__3824__auto____6310;
} else
{var or__3824__auto____6311 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6311)
{return or__3824__auto____6311;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6315 = coll;
if(and__3822__auto____6315)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6315;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6316 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6316)
{return or__3824__auto____6316;
} else
{var or__3824__auto____6317 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6317)
{return or__3824__auto____6317;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6321 = coll;
if(and__3822__auto____6321)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6321;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6322 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6322)
{return or__3824__auto____6322;
} else
{var or__3824__auto____6323 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6323)
{return or__3824__auto____6323;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6327 = coll;
if(and__3822__auto____6327)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6327;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6328 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6328)
{return or__3824__auto____6328;
} else
{var or__3824__auto____6329 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6331 = (x === y);
if(or__3824__auto____6331)
{return or__3824__auto____6331;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6332__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6333 = y;
var G__6334 = cljs.core.first.call(null,more);
var G__6335 = cljs.core.next.call(null,more);
x = G__6333;
y = G__6334;
more = G__6335;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6332 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6332__delegate.call(this, x, y, more);
};
G__6332.cljs$lang$maxFixedArity = 2;
G__6332.cljs$lang$applyTo = (function (arglist__6336){
var x = cljs.core.first(arglist__6336);
var y = cljs.core.first(cljs.core.next(arglist__6336));
var more = cljs.core.rest(cljs.core.next(arglist__6336));
return G__6332__delegate(x, y, more);
});
G__6332.cljs$lang$arity$variadic = G__6332__delegate;
return G__6332;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6337 = null;
var G__6337__2 = (function (o,k){
return null;
});
var G__6337__3 = (function (o,k,not_found){
return not_found;
});
G__6337 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6337__2.call(this,o,k);
case 3:
return G__6337__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6337;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6338 = null;
var G__6338__2 = (function (_,f){
return f.call(null);
});
var G__6338__3 = (function (_,f,start){
return start;
});
G__6338 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6338__2.call(this,_,f);
case 3:
return G__6338__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6338;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6339 = null;
var G__6339__2 = (function (_,n){
return null;
});
var G__6339__3 = (function (_,n,not_found){
return not_found;
});
G__6339 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6339__2.call(this,_,n);
case 3:
return G__6339__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6339;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6352 = cljs.core._count.call(null,cicoll);
if((cnt__6352 === 0))
{return f.call(null);
} else
{var val__6353 = cljs.core._nth.call(null,cicoll,0);
var n__6354 = 1;
while(true){
if((n__6354 < cnt__6352))
{var nval__6355 = f.call(null,val__6353,cljs.core._nth.call(null,cicoll,n__6354));
if(cljs.core.reduced_QMARK_.call(null,nval__6355))
{return cljs.core.deref.call(null,nval__6355);
} else
{{
var G__6364 = nval__6355;
var G__6365 = (n__6354 + 1);
val__6353 = G__6364;
n__6354 = G__6365;
continue;
}
}
} else
{return val__6353;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6356 = cljs.core._count.call(null,cicoll);
var val__6357 = val;
var n__6358 = 0;
while(true){
if((n__6358 < cnt__6356))
{var nval__6359 = f.call(null,val__6357,cljs.core._nth.call(null,cicoll,n__6358));
if(cljs.core.reduced_QMARK_.call(null,nval__6359))
{return cljs.core.deref.call(null,nval__6359);
} else
{{
var G__6366 = nval__6359;
var G__6367 = (n__6358 + 1);
val__6357 = G__6366;
n__6358 = G__6367;
continue;
}
}
} else
{return val__6357;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6360 = cljs.core._count.call(null,cicoll);
var val__6361 = val;
var n__6362 = idx;
while(true){
if((n__6362 < cnt__6360))
{var nval__6363 = f.call(null,val__6361,cljs.core._nth.call(null,cicoll,n__6362));
if(cljs.core.reduced_QMARK_.call(null,nval__6363))
{return cljs.core.deref.call(null,nval__6363);
} else
{{
var G__6368 = nval__6363;
var G__6369 = (n__6362 + 1);
val__6361 = G__6368;
n__6362 = G__6369;
continue;
}
}
} else
{return val__6361;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6382 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6383 = (arr[0]);
var n__6384 = 1;
while(true){
if((n__6384 < cnt__6382))
{var nval__6385 = f.call(null,val__6383,(arr[n__6384]));
if(cljs.core.reduced_QMARK_.call(null,nval__6385))
{return cljs.core.deref.call(null,nval__6385);
} else
{{
var G__6394 = nval__6385;
var G__6395 = (n__6384 + 1);
val__6383 = G__6394;
n__6384 = G__6395;
continue;
}
}
} else
{return val__6383;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6386 = arr.length;
var val__6387 = val;
var n__6388 = 0;
while(true){
if((n__6388 < cnt__6386))
{var nval__6389 = f.call(null,val__6387,(arr[n__6388]));
if(cljs.core.reduced_QMARK_.call(null,nval__6389))
{return cljs.core.deref.call(null,nval__6389);
} else
{{
var G__6396 = nval__6389;
var G__6397 = (n__6388 + 1);
val__6387 = G__6396;
n__6388 = G__6397;
continue;
}
}
} else
{return val__6387;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6390 = arr.length;
var val__6391 = val;
var n__6392 = idx;
while(true){
if((n__6392 < cnt__6390))
{var nval__6393 = f.call(null,val__6391,(arr[n__6392]));
if(cljs.core.reduced_QMARK_.call(null,nval__6393))
{return cljs.core.deref.call(null,nval__6393);
} else
{{
var G__6398 = nval__6393;
var G__6399 = (n__6392 + 1);
val__6391 = G__6398;
n__6392 = G__6399;
continue;
}
}
} else
{return val__6391;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6400 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6401 = this;
if(((this__6401.i + 1) < this__6401.a.length))
{return (new cljs.core.IndexedSeq(this__6401.a,(this__6401.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6402 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6403 = this;
var c__6404 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6404 > 0))
{return (new cljs.core.RSeq(coll,(c__6404 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6405 = this;
var this__6406 = this;
return cljs.core.pr_str.call(null,this__6406);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6407 = this;
if(cljs.core.counted_QMARK_.call(null,this__6407.a))
{return cljs.core.ci_reduce.call(null,this__6407.a,f,(this__6407.a[this__6407.i]),(this__6407.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6407.a[this__6407.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6408 = this;
if(cljs.core.counted_QMARK_.call(null,this__6408.a))
{return cljs.core.ci_reduce.call(null,this__6408.a,f,start,this__6408.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6409 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6410 = this;
return (this__6410.a.length - this__6410.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6411 = this;
return (this__6411.a[this__6411.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6412 = this;
if(((this__6412.i + 1) < this__6412.a.length))
{return (new cljs.core.IndexedSeq(this__6412.a,(this__6412.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6413 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6414 = this;
var i__6415 = (n + this__6414.i);
if((i__6415 < this__6414.a.length))
{return (this__6414.a[i__6415]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6416 = this;
var i__6417 = (n + this__6416.i);
if((i__6417 < this__6416.a.length))
{return (this__6416.a[i__6417]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6418 = null;
var G__6418__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6418__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6418 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6418__2.call(this,array,f);
case 3:
return G__6418__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6418;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6419 = null;
var G__6419__2 = (function (array,k){
return (array[k]);
});
var G__6419__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6419 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6419__2.call(this,array,k);
case 3:
return G__6419__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6419;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6420 = null;
var G__6420__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6420__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6420 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6420__2.call(this,array,n);
case 3:
return G__6420__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6420;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6421 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6422 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6423 = this;
var this__6424 = this;
return cljs.core.pr_str.call(null,this__6424);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6425 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6426 = this;
return (this__6426.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6427 = this;
return cljs.core._nth.call(null,this__6427.ci,this__6427.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6428 = this;
if((this__6428.i > 0))
{return (new cljs.core.RSeq(this__6428.ci,(this__6428.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6430 = this;
return (new cljs.core.RSeq(this__6430.ci,this__6430.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6431 = this;
return this__6431.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6435__6436 = coll;
if(G__6435__6436)
{if((function (){var or__3824__auto____6437 = (G__6435__6436.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{return G__6435__6436.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6435__6436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6435__6436);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6435__6436);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6442__6443 = coll;
if(G__6442__6443)
{if((function (){var or__3824__auto____6444 = (G__6442__6443.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6444)
{return or__3824__auto____6444;
} else
{return G__6442__6443.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6442__6443.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6442__6443);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6442__6443);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6445 = cljs.core.seq.call(null,coll);
if((s__6445 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6445);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6450__6451 = coll;
if(G__6450__6451)
{if((function (){var or__3824__auto____6452 = (G__6450__6451.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6452)
{return or__3824__auto____6452;
} else
{return G__6450__6451.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6450__6451.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6450__6451);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6450__6451);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6453 = cljs.core.seq.call(null,coll);
if(!((s__6453 == null)))
{return cljs.core._rest.call(null,s__6453);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6457__6458 = coll;
if(G__6457__6458)
{if((function (){var or__3824__auto____6459 = (G__6457__6458.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6459)
{return or__3824__auto____6459;
} else
{return G__6457__6458.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6457__6458.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6457__6458);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6457__6458);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6461 = cljs.core.next.call(null,s);
if(!((sn__6461 == null)))
{{
var G__6462 = sn__6461;
s = G__6462;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6463__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6464 = conj.call(null,coll,x);
var G__6465 = cljs.core.first.call(null,xs);
var G__6466 = cljs.core.next.call(null,xs);
coll = G__6464;
x = G__6465;
xs = G__6466;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6463 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6463__delegate.call(this, coll, x, xs);
};
G__6463.cljs$lang$maxFixedArity = 2;
G__6463.cljs$lang$applyTo = (function (arglist__6467){
var coll = cljs.core.first(arglist__6467);
var x = cljs.core.first(cljs.core.next(arglist__6467));
var xs = cljs.core.rest(cljs.core.next(arglist__6467));
return G__6463__delegate(coll, x, xs);
});
G__6463.cljs$lang$arity$variadic = G__6463__delegate;
return G__6463;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6470 = cljs.core.seq.call(null,coll);
var acc__6471 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6470))
{return (acc__6471 + cljs.core._count.call(null,s__6470));
} else
{{
var G__6472 = cljs.core.next.call(null,s__6470);
var G__6473 = (acc__6471 + 1);
s__6470 = G__6472;
acc__6471 = G__6473;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6480__6481 = coll;
if(G__6480__6481)
{if((function (){var or__3824__auto____6482 = (G__6480__6481.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6482)
{return or__3824__auto____6482;
} else
{return G__6480__6481.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6480__6481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6480__6481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6480__6481);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6483__6484 = coll;
if(G__6483__6484)
{if((function (){var or__3824__auto____6485 = (G__6483__6484.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6485)
{return or__3824__auto____6485;
} else
{return G__6483__6484.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6483__6484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6483__6484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6483__6484);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6488__delegate = function (coll,k,v,kvs){
while(true){
var ret__6487 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6489 = ret__6487;
var G__6490 = cljs.core.first.call(null,kvs);
var G__6491 = cljs.core.second.call(null,kvs);
var G__6492 = cljs.core.nnext.call(null,kvs);
coll = G__6489;
k = G__6490;
v = G__6491;
kvs = G__6492;
continue;
}
} else
{return ret__6487;
}
break;
}
};
var G__6488 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6488__delegate.call(this, coll, k, v, kvs);
};
G__6488.cljs$lang$maxFixedArity = 3;
G__6488.cljs$lang$applyTo = (function (arglist__6493){
var coll = cljs.core.first(arglist__6493);
var k = cljs.core.first(cljs.core.next(arglist__6493));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6493)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6493)));
return G__6488__delegate(coll, k, v, kvs);
});
G__6488.cljs$lang$arity$variadic = G__6488__delegate;
return G__6488;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6496__delegate = function (coll,k,ks){
while(true){
var ret__6495 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6497 = ret__6495;
var G__6498 = cljs.core.first.call(null,ks);
var G__6499 = cljs.core.next.call(null,ks);
coll = G__6497;
k = G__6498;
ks = G__6499;
continue;
}
} else
{return ret__6495;
}
break;
}
};
var G__6496 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6496__delegate.call(this, coll, k, ks);
};
G__6496.cljs$lang$maxFixedArity = 2;
G__6496.cljs$lang$applyTo = (function (arglist__6500){
var coll = cljs.core.first(arglist__6500);
var k = cljs.core.first(cljs.core.next(arglist__6500));
var ks = cljs.core.rest(cljs.core.next(arglist__6500));
return G__6496__delegate(coll, k, ks);
});
G__6496.cljs$lang$arity$variadic = G__6496__delegate;
return G__6496;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6504__6505 = o;
if(G__6504__6505)
{if((function (){var or__3824__auto____6506 = (G__6504__6505.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6506)
{return or__3824__auto____6506;
} else
{return G__6504__6505.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6504__6505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6504__6505);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6504__6505);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6509__delegate = function (coll,k,ks){
while(true){
var ret__6508 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6510 = ret__6508;
var G__6511 = cljs.core.first.call(null,ks);
var G__6512 = cljs.core.next.call(null,ks);
coll = G__6510;
k = G__6511;
ks = G__6512;
continue;
}
} else
{return ret__6508;
}
break;
}
};
var G__6509 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6509__delegate.call(this, coll, k, ks);
};
G__6509.cljs$lang$maxFixedArity = 2;
G__6509.cljs$lang$applyTo = (function (arglist__6513){
var coll = cljs.core.first(arglist__6513);
var k = cljs.core.first(cljs.core.next(arglist__6513));
var ks = cljs.core.rest(cljs.core.next(arglist__6513));
return G__6509__delegate(coll, k, ks);
});
G__6509.cljs$lang$arity$variadic = G__6509__delegate;
return G__6509;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6515 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6515);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6515;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6517 = (cljs.core.string_hash_cache[k]);
if(!((h__6517 == null)))
{return h__6517;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6519 = goog.isString(o);
if(and__3822__auto____6519)
{return check_cache;
} else
{return and__3822__auto____6519;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6523__6524 = x;
if(G__6523__6524)
{if((function (){var or__3824__auto____6525 = (G__6523__6524.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6525)
{return or__3824__auto____6525;
} else
{return G__6523__6524.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6523__6524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6523__6524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6523__6524);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6529__6530 = x;
if(G__6529__6530)
{if((function (){var or__3824__auto____6531 = (G__6529__6530.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6531)
{return or__3824__auto____6531;
} else
{return G__6529__6530.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6529__6530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6529__6530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6529__6530);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6535__6536 = x;
if(G__6535__6536)
{if((function (){var or__3824__auto____6537 = (G__6535__6536.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6537)
{return or__3824__auto____6537;
} else
{return G__6535__6536.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6535__6536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6535__6536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6535__6536);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6541__6542 = x;
if(G__6541__6542)
{if((function (){var or__3824__auto____6543 = (G__6541__6542.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6543)
{return or__3824__auto____6543;
} else
{return G__6541__6542.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6541__6542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6541__6542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6541__6542);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6547__6548 = x;
if(G__6547__6548)
{if((function (){var or__3824__auto____6549 = (G__6547__6548.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6549)
{return or__3824__auto____6549;
} else
{return G__6547__6548.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6547__6548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6547__6548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6547__6548);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6553__6554 = x;
if(G__6553__6554)
{if((function (){var or__3824__auto____6555 = (G__6553__6554.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6555)
{return or__3824__auto____6555;
} else
{return G__6553__6554.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6553__6554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6553__6554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6553__6554);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6559__6560 = x;
if(G__6559__6560)
{if((function (){var or__3824__auto____6561 = (G__6559__6560.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6561)
{return or__3824__auto____6561;
} else
{return G__6559__6560.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6559__6560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6559__6560);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6559__6560);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6565__6566 = x;
if(G__6565__6566)
{if((function (){var or__3824__auto____6567 = (G__6565__6566.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6567)
{return or__3824__auto____6567;
} else
{return G__6565__6566.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6565__6566.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6565__6566);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6565__6566);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6571__6572 = x;
if(G__6571__6572)
{if((function (){var or__3824__auto____6573 = (G__6571__6572.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6573)
{return or__3824__auto____6573;
} else
{return G__6571__6572.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6571__6572.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6571__6572);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6571__6572);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6577__6578 = x;
if(G__6577__6578)
{if(cljs.core.truth_((function (){var or__3824__auto____6579 = null;
if(cljs.core.truth_(or__3824__auto____6579))
{return or__3824__auto____6579;
} else
{return G__6577__6578.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6577__6578.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6577__6578);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6577__6578);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6580__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6580 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6580__delegate.call(this, keyvals);
};
G__6580.cljs$lang$maxFixedArity = 0;
G__6580.cljs$lang$applyTo = (function (arglist__6581){
var keyvals = cljs.core.seq(arglist__6581);;
return G__6580__delegate(keyvals);
});
G__6580.cljs$lang$arity$variadic = G__6580__delegate;
return G__6580;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6583 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6583.push(key);
}));
return keys__6583;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6587 = i;
var j__6588 = j;
var len__6589 = len;
while(true){
if((len__6589 === 0))
{return to;
} else
{(to[j__6588] = (from[i__6587]));
{
var G__6590 = (i__6587 + 1);
var G__6591 = (j__6588 + 1);
var G__6592 = (len__6589 - 1);
i__6587 = G__6590;
j__6588 = G__6591;
len__6589 = G__6592;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6596 = (i + (len - 1));
var j__6597 = (j + (len - 1));
var len__6598 = len;
while(true){
if((len__6598 === 0))
{return to;
} else
{(to[j__6597] = (from[i__6596]));
{
var G__6599 = (i__6596 - 1);
var G__6600 = (j__6597 - 1);
var G__6601 = (len__6598 - 1);
i__6596 = G__6599;
j__6597 = G__6600;
len__6598 = G__6601;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6605__6606 = s;
if(G__6605__6606)
{if((function (){var or__3824__auto____6607 = (G__6605__6606.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6607)
{return or__3824__auto____6607;
} else
{return G__6605__6606.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6605__6606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6605__6606);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6605__6606);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6611__6612 = s;
if(G__6611__6612)
{if((function (){var or__3824__auto____6613 = (G__6611__6612.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6613)
{return or__3824__auto____6613;
} else
{return G__6611__6612.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6611__6612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6611__6612);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6611__6612);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6616 = goog.isString(x);
if(and__3822__auto____6616)
{return !((function (){var or__3824__auto____6617 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6617)
{return or__3824__auto____6617;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6616;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6619 = goog.isString(x);
if(and__3822__auto____6619)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6619;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6621 = goog.isString(x);
if(and__3822__auto____6621)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6621;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6626 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6626)
{return or__3824__auto____6626;
} else
{var G__6627__6628 = f;
if(G__6627__6628)
{if((function (){var or__3824__auto____6629 = (G__6627__6628.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6629)
{return or__3824__auto____6629;
} else
{return G__6627__6628.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6627__6628.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6627__6628);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6627__6628);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6631 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6631)
{return (n == n.toFixed());
} else
{return and__3822__auto____6631;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6634 = coll;
if(cljs.core.truth_(and__3822__auto____6634))
{var and__3822__auto____6635 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6635)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6635;
}
} else
{return and__3822__auto____6634;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6644__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6640 = cljs.core.set([y,x]);
var xs__6641 = more;
while(true){
var x__6642 = cljs.core.first.call(null,xs__6641);
var etc__6643 = cljs.core.next.call(null,xs__6641);
if(cljs.core.truth_(xs__6641))
{if(cljs.core.contains_QMARK_.call(null,s__6640,x__6642))
{return false;
} else
{{
var G__6645 = cljs.core.conj.call(null,s__6640,x__6642);
var G__6646 = etc__6643;
s__6640 = G__6645;
xs__6641 = G__6646;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6644 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6644__delegate.call(this, x, y, more);
};
G__6644.cljs$lang$maxFixedArity = 2;
G__6644.cljs$lang$applyTo = (function (arglist__6647){
var x = cljs.core.first(arglist__6647);
var y = cljs.core.first(cljs.core.next(arglist__6647));
var more = cljs.core.rest(cljs.core.next(arglist__6647));
return G__6644__delegate(x, y, more);
});
G__6644.cljs$lang$arity$variadic = G__6644__delegate;
return G__6644;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__6651__6652 = x;
if(G__6651__6652)
{if(cljs.core.truth_((function (){var or__3824__auto____6653 = null;
if(cljs.core.truth_(or__3824__auto____6653))
{return or__3824__auto____6653;
} else
{return G__6651__6652.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6651__6652.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6651__6652);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6651__6652);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6658 = cljs.core.count.call(null,xs);
var yl__6659 = cljs.core.count.call(null,ys);
if((xl__6658 < yl__6659))
{return -1;
} else
{if((xl__6658 > yl__6659))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6658,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6660 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6661 = (d__6660 === 0);
if(and__3822__auto____6661)
{return ((n + 1) < len);
} else
{return and__3822__auto____6661;
}
})())
{{
var G__6662 = xs;
var G__6663 = ys;
var G__6664 = len;
var G__6665 = (n + 1);
xs = G__6662;
ys = G__6663;
len = G__6664;
n = G__6665;
continue;
}
} else
{return d__6660;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6667 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6667))
{return r__6667;
} else
{if(cljs.core.truth_(r__6667))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__6669 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6669,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6669);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6675 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6675)
{var s__6676 = temp__3971__auto____6675;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6676),cljs.core.next.call(null,s__6676));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6677 = val;
var coll__6678 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6678)
{var nval__6679 = f.call(null,val__6677,cljs.core.first.call(null,coll__6678));
if(cljs.core.reduced_QMARK_.call(null,nval__6679))
{return cljs.core.deref.call(null,nval__6679);
} else
{{
var G__6680 = nval__6679;
var G__6681 = cljs.core.next.call(null,coll__6678);
val__6677 = G__6680;
coll__6678 = G__6681;
continue;
}
}
} else
{return val__6677;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6683 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6683);
return cljs.core.vec.call(null,a__6683);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6690__6691 = coll;
if(G__6690__6691)
{if((function (){var or__3824__auto____6692 = (G__6690__6691.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6692)
{return or__3824__auto____6692;
} else
{return G__6690__6691.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6690__6691.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6690__6691);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6690__6691);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6693__6694 = coll;
if(G__6693__6694)
{if((function (){var or__3824__auto____6695 = (G__6693__6694.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6695)
{return or__3824__auto____6695;
} else
{return G__6693__6694.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6693__6694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6693__6694);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6693__6694);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6696 = this;
return this__6696.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6697__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6697 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6697__delegate.call(this, x, y, more);
};
G__6697.cljs$lang$maxFixedArity = 2;
G__6697.cljs$lang$applyTo = (function (arglist__6698){
var x = cljs.core.first(arglist__6698);
var y = cljs.core.first(cljs.core.next(arglist__6698));
var more = cljs.core.rest(cljs.core.next(arglist__6698));
return G__6697__delegate(x, y, more);
});
G__6697.cljs$lang$arity$variadic = G__6697__delegate;
return G__6697;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6699__delegate.call(this, x, y, more);
};
G__6699.cljs$lang$maxFixedArity = 2;
G__6699.cljs$lang$applyTo = (function (arglist__6700){
var x = cljs.core.first(arglist__6700);
var y = cljs.core.first(cljs.core.next(arglist__6700));
var more = cljs.core.rest(cljs.core.next(arglist__6700));
return G__6699__delegate(x, y, more);
});
G__6699.cljs$lang$arity$variadic = G__6699__delegate;
return G__6699;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6701__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6701 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6701__delegate.call(this, x, y, more);
};
G__6701.cljs$lang$maxFixedArity = 2;
G__6701.cljs$lang$applyTo = (function (arglist__6702){
var x = cljs.core.first(arglist__6702);
var y = cljs.core.first(cljs.core.next(arglist__6702));
var more = cljs.core.rest(cljs.core.next(arglist__6702));
return G__6701__delegate(x, y, more);
});
G__6701.cljs$lang$arity$variadic = G__6701__delegate;
return G__6701;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6703__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6703 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6703__delegate.call(this, x, y, more);
};
G__6703.cljs$lang$maxFixedArity = 2;
G__6703.cljs$lang$applyTo = (function (arglist__6704){
var x = cljs.core.first(arglist__6704);
var y = cljs.core.first(cljs.core.next(arglist__6704));
var more = cljs.core.rest(cljs.core.next(arglist__6704));
return G__6703__delegate(x, y, more);
});
G__6703.cljs$lang$arity$variadic = G__6703__delegate;
return G__6703;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6705__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6706 = y;
var G__6707 = cljs.core.first.call(null,more);
var G__6708 = cljs.core.next.call(null,more);
x = G__6706;
y = G__6707;
more = G__6708;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6705 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6705__delegate.call(this, x, y, more);
};
G__6705.cljs$lang$maxFixedArity = 2;
G__6705.cljs$lang$applyTo = (function (arglist__6709){
var x = cljs.core.first(arglist__6709);
var y = cljs.core.first(cljs.core.next(arglist__6709));
var more = cljs.core.rest(cljs.core.next(arglist__6709));
return G__6705__delegate(x, y, more);
});
G__6705.cljs$lang$arity$variadic = G__6705__delegate;
return G__6705;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6710__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6711 = y;
var G__6712 = cljs.core.first.call(null,more);
var G__6713 = cljs.core.next.call(null,more);
x = G__6711;
y = G__6712;
more = G__6713;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6710 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6710__delegate.call(this, x, y, more);
};
G__6710.cljs$lang$maxFixedArity = 2;
G__6710.cljs$lang$applyTo = (function (arglist__6714){
var x = cljs.core.first(arglist__6714);
var y = cljs.core.first(cljs.core.next(arglist__6714));
var more = cljs.core.rest(cljs.core.next(arglist__6714));
return G__6710__delegate(x, y, more);
});
G__6710.cljs$lang$arity$variadic = G__6710__delegate;
return G__6710;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6715__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6716 = y;
var G__6717 = cljs.core.first.call(null,more);
var G__6718 = cljs.core.next.call(null,more);
x = G__6716;
y = G__6717;
more = G__6718;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6715 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6715__delegate.call(this, x, y, more);
};
G__6715.cljs$lang$maxFixedArity = 2;
G__6715.cljs$lang$applyTo = (function (arglist__6719){
var x = cljs.core.first(arglist__6719);
var y = cljs.core.first(cljs.core.next(arglist__6719));
var more = cljs.core.rest(cljs.core.next(arglist__6719));
return G__6715__delegate(x, y, more);
});
G__6715.cljs$lang$arity$variadic = G__6715__delegate;
return G__6715;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6720__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6721 = y;
var G__6722 = cljs.core.first.call(null,more);
var G__6723 = cljs.core.next.call(null,more);
x = G__6721;
y = G__6722;
more = G__6723;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6720 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6720__delegate.call(this, x, y, more);
};
G__6720.cljs$lang$maxFixedArity = 2;
G__6720.cljs$lang$applyTo = (function (arglist__6724){
var x = cljs.core.first(arglist__6724);
var y = cljs.core.first(cljs.core.next(arglist__6724));
var more = cljs.core.rest(cljs.core.next(arglist__6724));
return G__6720__delegate(x, y, more);
});
G__6720.cljs$lang$arity$variadic = G__6720__delegate;
return G__6720;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6725__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6725 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6725__delegate.call(this, x, y, more);
};
G__6725.cljs$lang$maxFixedArity = 2;
G__6725.cljs$lang$applyTo = (function (arglist__6726){
var x = cljs.core.first(arglist__6726);
var y = cljs.core.first(cljs.core.next(arglist__6726));
var more = cljs.core.rest(cljs.core.next(arglist__6726));
return G__6725__delegate(x, y, more);
});
G__6725.cljs$lang$arity$variadic = G__6725__delegate;
return G__6725;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6727__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6727 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6727__delegate.call(this, x, y, more);
};
G__6727.cljs$lang$maxFixedArity = 2;
G__6727.cljs$lang$applyTo = (function (arglist__6728){
var x = cljs.core.first(arglist__6728);
var y = cljs.core.first(cljs.core.next(arglist__6728));
var more = cljs.core.rest(cljs.core.next(arglist__6728));
return G__6727__delegate(x, y, more);
});
G__6727.cljs$lang$arity$variadic = G__6727__delegate;
return G__6727;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6730 = (n % d);
return cljs.core.fix.call(null,((n - rem__6730) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6732 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6732));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6735 = (v - ((v >> 1) & 1431655765));
var v__6736 = ((v__6735 & 858993459) + ((v__6735 >> 2) & 858993459));
return ((((v__6736 + (v__6736 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6737__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6738 = y;
var G__6739 = cljs.core.first.call(null,more);
var G__6740 = cljs.core.next.call(null,more);
x = G__6738;
y = G__6739;
more = G__6740;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6737__delegate.call(this, x, y, more);
};
G__6737.cljs$lang$maxFixedArity = 2;
G__6737.cljs$lang$applyTo = (function (arglist__6741){
var x = cljs.core.first(arglist__6741);
var y = cljs.core.first(cljs.core.next(arglist__6741));
var more = cljs.core.rest(cljs.core.next(arglist__6741));
return G__6737__delegate(x, y, more);
});
G__6737.cljs$lang$arity$variadic = G__6737__delegate;
return G__6737;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6745 = n;
var xs__6746 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6747 = xs__6746;
if(and__3822__auto____6747)
{return (n__6745 > 0);
} else
{return and__3822__auto____6747;
}
})()))
{{
var G__6748 = (n__6745 - 1);
var G__6749 = cljs.core.next.call(null,xs__6746);
n__6745 = G__6748;
xs__6746 = G__6749;
continue;
}
} else
{return xs__6746;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6750__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6751 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6752 = cljs.core.next.call(null,more);
sb = G__6751;
more = G__6752;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6750 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6750__delegate.call(this, x, ys);
};
G__6750.cljs$lang$maxFixedArity = 1;
G__6750.cljs$lang$applyTo = (function (arglist__6753){
var x = cljs.core.first(arglist__6753);
var ys = cljs.core.rest(arglist__6753);
return G__6750__delegate(x, ys);
});
G__6750.cljs$lang$arity$variadic = G__6750__delegate;
return G__6750;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6754__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6755 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6756 = cljs.core.next.call(null,more);
sb = G__6755;
more = G__6756;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6754 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6754__delegate.call(this, x, ys);
};
G__6754.cljs$lang$maxFixedArity = 1;
G__6754.cljs$lang$applyTo = (function (arglist__6757){
var x = cljs.core.first(arglist__6757);
var ys = cljs.core.rest(arglist__6757);
return G__6754__delegate(x, ys);
});
G__6754.cljs$lang$arity$variadic = G__6754__delegate;
return G__6754;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6760 = cljs.core.seq.call(null,x);
var ys__6761 = cljs.core.seq.call(null,y);
while(true){
if((xs__6760 == null))
{return (ys__6761 == null);
} else
{if((ys__6761 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6760),cljs.core.first.call(null,ys__6761)))
{{
var G__6762 = cljs.core.next.call(null,xs__6760);
var G__6763 = cljs.core.next.call(null,ys__6761);
xs__6760 = G__6762;
ys__6761 = G__6763;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6764_SHARP_,p2__6765_SHARP_){
return cljs.core.hash_combine.call(null,p1__6764_SHARP_,cljs.core.hash.call(null,p2__6765_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6769 = 0;
var s__6770 = cljs.core.seq.call(null,m);
while(true){
if(s__6770)
{var e__6771 = cljs.core.first.call(null,s__6770);
{
var G__6772 = ((h__6769 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6771)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6771)))) % 4503599627370496);
var G__6773 = cljs.core.next.call(null,s__6770);
h__6769 = G__6772;
s__6770 = G__6773;
continue;
}
} else
{return h__6769;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6777 = 0;
var s__6778 = cljs.core.seq.call(null,s);
while(true){
if(s__6778)
{var e__6779 = cljs.core.first.call(null,s__6778);
{
var G__6780 = ((h__6777 + cljs.core.hash.call(null,e__6779)) % 4503599627370496);
var G__6781 = cljs.core.next.call(null,s__6778);
h__6777 = G__6780;
s__6778 = G__6781;
continue;
}
} else
{return h__6777;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6802__6803 = cljs.core.seq.call(null,fn_map);
if(G__6802__6803)
{var G__6805__6807 = cljs.core.first.call(null,G__6802__6803);
var vec__6806__6808 = G__6805__6807;
var key_name__6809 = cljs.core.nth.call(null,vec__6806__6808,0,null);
var f__6810 = cljs.core.nth.call(null,vec__6806__6808,1,null);
var G__6802__6811 = G__6802__6803;
var G__6805__6812 = G__6805__6807;
var G__6802__6813 = G__6802__6811;
while(true){
var vec__6814__6815 = G__6805__6812;
var key_name__6816 = cljs.core.nth.call(null,vec__6814__6815,0,null);
var f__6817 = cljs.core.nth.call(null,vec__6814__6815,1,null);
var G__6802__6818 = G__6802__6813;
var str_name__6819 = cljs.core.name.call(null,key_name__6816);
(obj[str_name__6819] = f__6817);
var temp__3974__auto____6820 = cljs.core.next.call(null,G__6802__6818);
if(temp__3974__auto____6820)
{var G__6802__6821 = temp__3974__auto____6820;
{
var G__6822 = cljs.core.first.call(null,G__6802__6821);
var G__6823 = G__6802__6821;
G__6805__6812 = G__6822;
G__6802__6813 = G__6823;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6824 = this;
var h__2177__auto____6825 = this__6824.__hash;
if(!((h__2177__auto____6825 == null)))
{return h__2177__auto____6825;
} else
{var h__2177__auto____6826 = cljs.core.hash_coll.call(null,coll);
this__6824.__hash = h__2177__auto____6826;
return h__2177__auto____6826;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6827 = this;
if((this__6827.count === 1))
{return null;
} else
{return this__6827.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6828 = this;
return (new cljs.core.List(this__6828.meta,o,coll,(this__6828.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6829 = this;
var this__6830 = this;
return cljs.core.pr_str.call(null,this__6830);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6831 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6832 = this;
return this__6832.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6833 = this;
return this__6833.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6834 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6835 = this;
return this__6835.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6836 = this;
if((this__6836.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6836.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6837 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6838 = this;
return (new cljs.core.List(meta,this__6838.first,this__6838.rest,this__6838.count,this__6838.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6839 = this;
return this__6839.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6840 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6841 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6842 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6843 = this;
return (new cljs.core.List(this__6843.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6844 = this;
var this__6845 = this;
return cljs.core.pr_str.call(null,this__6845);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6846 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6847 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6848 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6849 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6850 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6851 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6853 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6854 = this;
return this__6854.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6855 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6859__6860 = coll;
if(G__6859__6860)
{if((function (){var or__3824__auto____6861 = (G__6859__6860.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6861)
{return or__3824__auto____6861;
} else
{return G__6859__6860.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6859__6860.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6859__6860);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6859__6860);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__6862__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__6862 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6862__delegate.call(this, x, y, z, items);
};
G__6862.cljs$lang$maxFixedArity = 3;
G__6862.cljs$lang$applyTo = (function (arglist__6863){
var x = cljs.core.first(arglist__6863);
var y = cljs.core.first(cljs.core.next(arglist__6863));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6863)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6863)));
return G__6862__delegate(x, y, z, items);
});
G__6862.cljs$lang$arity$variadic = G__6862__delegate;
return G__6862;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6864 = this;
var h__2177__auto____6865 = this__6864.__hash;
if(!((h__2177__auto____6865 == null)))
{return h__2177__auto____6865;
} else
{var h__2177__auto____6866 = cljs.core.hash_coll.call(null,coll);
this__6864.__hash = h__2177__auto____6866;
return h__2177__auto____6866;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6867 = this;
if((this__6867.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__6867.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6868 = this;
return (new cljs.core.Cons(null,o,coll,this__6868.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6869 = this;
var this__6870 = this;
return cljs.core.pr_str.call(null,this__6870);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6871 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6872 = this;
return this__6872.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6873 = this;
if((this__6873.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6873.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6874 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6875 = this;
return (new cljs.core.Cons(meta,this__6875.first,this__6875.rest,this__6875.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6876 = this;
return this__6876.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6877 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6877.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6882 = (coll == null);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{var G__6883__6884 = coll;
if(G__6883__6884)
{if((function (){var or__3824__auto____6885 = (G__6883__6884.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6885)
{return or__3824__auto____6885;
} else
{return G__6883__6884.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6883__6884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6883__6884);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6883__6884);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6889__6890 = x;
if(G__6889__6890)
{if((function (){var or__3824__auto____6891 = (G__6889__6890.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6891)
{return or__3824__auto____6891;
} else
{return G__6889__6890.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6889__6890.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6889__6890);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6889__6890);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6892 = null;
var G__6892__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6892__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6892 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6892__2.call(this,string,f);
case 3:
return G__6892__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6892;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6893 = null;
var G__6893__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6893__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6893 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6893__2.call(this,string,k);
case 3:
return G__6893__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6893;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6894 = null;
var G__6894__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6894__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6894 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6894__2.call(this,string,n);
case 3:
return G__6894__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6894;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym6897,coll){
var this__6898 = this;
var this_sym6897__6899 = this;
var ___6900 = this_sym6897__6899;
if((coll == null))
{return null;
} else
{var strobj__6901 = coll.strobj;
if((strobj__6901 == null))
{return cljs.core._lookup.call(null,coll,this__6898.k,null);
} else
{return (strobj__6901[this__6898.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym6895,args6896){
var this__6902 = this;
return this_sym6895.call.apply(this_sym6895,[this_sym6895].concat(args6896.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6911 = null;
var G__6911__2 = (function (this_sym6905,coll){
var this_sym6905__6907 = this;
var this__6908 = this_sym6905__6907;
return cljs.core._lookup.call(null,coll,this__6908.toString(),null);
});
var G__6911__3 = (function (this_sym6906,coll,not_found){
var this_sym6906__6909 = this;
var this__6910 = this_sym6906__6909;
return cljs.core._lookup.call(null,coll,this__6910.toString(),not_found);
});
G__6911 = function(this_sym6906,coll,not_found){
switch(arguments.length){
case 2:
return G__6911__2.call(this,this_sym6906,coll);
case 3:
return G__6911__3.call(this,this_sym6906,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6911;
})()
;
String.prototype.apply = (function (this_sym6903,args6904){
return this_sym6903.call.apply(this_sym6903,[this_sym6903].concat(args6904.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6913 = lazy_seq.x;
if(lazy_seq.realized)
{return x__6913;
} else
{lazy_seq.x = x__6913.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6914 = this;
var h__2177__auto____6915 = this__6914.__hash;
if(!((h__2177__auto____6915 == null)))
{return h__2177__auto____6915;
} else
{var h__2177__auto____6916 = cljs.core.hash_coll.call(null,coll);
this__6914.__hash = h__2177__auto____6916;
return h__2177__auto____6916;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6917 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6918 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__6919 = this;
var this__6920 = this;
return cljs.core.pr_str.call(null,this__6920);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6921 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6922 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6923 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6925 = this;
return (new cljs.core.LazySeq(meta,this__6925.realized,this__6925.x,this__6925.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6926 = this;
return this__6926.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6927 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6927.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6928 = this;
return this__6928.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__6929 = this;
var ___6930 = this;
(this__6929.buf[this__6929.end] = o);
return this__6929.end = (this__6929.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__6931 = this;
var ___6932 = this;
var ret__6933 = (new cljs.core.ArrayChunk(this__6931.buf,0,this__6931.end));
this__6931.buf = null;
return ret__6933;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6934 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__6934.arr[this__6934.off]),(this__6934.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6935 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__6935.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__6936 = this;
if((this__6936.off === this__6936.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__6936.arr,(this__6936.off + 1),this__6936.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__6937 = this;
return (this__6937.arr[(this__6937.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__6938 = this;
if((function (){var and__3822__auto____6939 = (i >= 0);
if(and__3822__auto____6939)
{return (i < (this__6938.end - this__6938.off));
} else
{return and__3822__auto____6939;
}
})())
{return (this__6938.arr[(this__6938.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6940 = this;
return (this__6940.end - this__6940.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__6941 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6942 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6943 = this;
return cljs.core._nth.call(null,this__6943.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6944 = this;
if((cljs.core._count.call(null,this__6944.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__6944.chunk),this__6944.more,this__6944.meta));
} else
{if((this__6944.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6944.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__6945 = this;
if((this__6945.more == null))
{return null;
} else
{return this__6945.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6946 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__6947 = this;
return (new cljs.core.ChunkedCons(this__6947.chunk,this__6947.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6948 = this;
return this__6948.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__6949 = this;
return this__6949.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__6950 = this;
if((this__6950.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6950.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__6954__6955 = s;
if(G__6954__6955)
{if(cljs.core.truth_((function (){var or__3824__auto____6956 = null;
if(cljs.core.truth_(or__3824__auto____6956))
{return or__3824__auto____6956;
} else
{return G__6954__6955.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__6954__6955.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6954__6955);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6954__6955);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6959 = [];
var s__6960 = s;
while(true){
if(cljs.core.seq.call(null,s__6960))
{ary__6959.push(cljs.core.first.call(null,s__6960));
{
var G__6961 = cljs.core.next.call(null,s__6960);
s__6960 = G__6961;
continue;
}
} else
{return ary__6959;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__6965 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__6966 = 0;
var xs__6967 = cljs.core.seq.call(null,coll);
while(true){
if(xs__6967)
{(ret__6965[i__6966] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__6967)));
{
var G__6968 = (i__6966 + 1);
var G__6969 = cljs.core.next.call(null,xs__6967);
i__6966 = G__6968;
xs__6967 = G__6969;
continue;
}
} else
{}
break;
}
return ret__6965;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__6977 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6978 = cljs.core.seq.call(null,init_val_or_seq);
var i__6979 = 0;
var s__6980 = s__6978;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6981 = s__6980;
if(and__3822__auto____6981)
{return (i__6979 < size);
} else
{return and__3822__auto____6981;
}
})()))
{(a__6977[i__6979] = cljs.core.first.call(null,s__6980));
{
var G__6984 = (i__6979 + 1);
var G__6985 = cljs.core.next.call(null,s__6980);
i__6979 = G__6984;
s__6980 = G__6985;
continue;
}
} else
{return a__6977;
}
break;
}
} else
{var n__2516__auto____6982 = size;
var i__6983 = 0;
while(true){
if((i__6983 < n__2516__auto____6982))
{(a__6977[i__6983] = init_val_or_seq);
{
var G__6986 = (i__6983 + 1);
i__6983 = G__6986;
continue;
}
} else
{}
break;
}
return a__6977;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__6994 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6995 = cljs.core.seq.call(null,init_val_or_seq);
var i__6996 = 0;
var s__6997 = s__6995;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6998 = s__6997;
if(and__3822__auto____6998)
{return (i__6996 < size);
} else
{return and__3822__auto____6998;
}
})()))
{(a__6994[i__6996] = cljs.core.first.call(null,s__6997));
{
var G__7001 = (i__6996 + 1);
var G__7002 = cljs.core.next.call(null,s__6997);
i__6996 = G__7001;
s__6997 = G__7002;
continue;
}
} else
{return a__6994;
}
break;
}
} else
{var n__2516__auto____6999 = size;
var i__7000 = 0;
while(true){
if((i__7000 < n__2516__auto____6999))
{(a__6994[i__7000] = init_val_or_seq);
{
var G__7003 = (i__7000 + 1);
i__7000 = G__7003;
continue;
}
} else
{}
break;
}
return a__6994;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7011 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7012 = cljs.core.seq.call(null,init_val_or_seq);
var i__7013 = 0;
var s__7014 = s__7012;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7015 = s__7014;
if(and__3822__auto____7015)
{return (i__7013 < size);
} else
{return and__3822__auto____7015;
}
})()))
{(a__7011[i__7013] = cljs.core.first.call(null,s__7014));
{
var G__7018 = (i__7013 + 1);
var G__7019 = cljs.core.next.call(null,s__7014);
i__7013 = G__7018;
s__7014 = G__7019;
continue;
}
} else
{return a__7011;
}
break;
}
} else
{var n__2516__auto____7016 = size;
var i__7017 = 0;
while(true){
if((i__7017 < n__2516__auto____7016))
{(a__7011[i__7017] = init_val_or_seq);
{
var G__7020 = (i__7017 + 1);
i__7017 = G__7020;
continue;
}
} else
{}
break;
}
return a__7011;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7025 = s;
var i__7026 = n;
var sum__7027 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7028 = (i__7026 > 0);
if(and__3822__auto____7028)
{return cljs.core.seq.call(null,s__7025);
} else
{return and__3822__auto____7028;
}
})()))
{{
var G__7029 = cljs.core.next.call(null,s__7025);
var G__7030 = (i__7026 - 1);
var G__7031 = (sum__7027 + 1);
s__7025 = G__7029;
i__7026 = G__7030;
sum__7027 = G__7031;
continue;
}
} else
{return sum__7027;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7036 = cljs.core.seq.call(null,x);
if(s__7036)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7036))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7036),concat.call(null,cljs.core.chunk_rest.call(null,s__7036),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7036),concat.call(null,cljs.core.rest.call(null,s__7036),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7040__delegate = function (x,y,zs){
var cat__7039 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7038 = cljs.core.seq.call(null,xys);
if(xys__7038)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7038))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7038),cat.call(null,cljs.core.chunk_rest.call(null,xys__7038),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7038),cat.call(null,cljs.core.rest.call(null,xys__7038),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7039.call(null,concat.call(null,x,y),zs);
};
var G__7040 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7040__delegate.call(this, x, y, zs);
};
G__7040.cljs$lang$maxFixedArity = 2;
G__7040.cljs$lang$applyTo = (function (arglist__7041){
var x = cljs.core.first(arglist__7041);
var y = cljs.core.first(cljs.core.next(arglist__7041));
var zs = cljs.core.rest(cljs.core.next(arglist__7041));
return G__7040__delegate(x, y, zs);
});
G__7040.cljs$lang$arity$variadic = G__7040__delegate;
return G__7040;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7042__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7042 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7042__delegate.call(this, a, b, c, d, more);
};
G__7042.cljs$lang$maxFixedArity = 4;
G__7042.cljs$lang$applyTo = (function (arglist__7043){
var a = cljs.core.first(arglist__7043);
var b = cljs.core.first(cljs.core.next(arglist__7043));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7043)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7043))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7043))));
return G__7042__delegate(a, b, c, d, more);
});
G__7042.cljs$lang$arity$variadic = G__7042__delegate;
return G__7042;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7085 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7086 = cljs.core._first.call(null,args__7085);
var args__7087 = cljs.core._rest.call(null,args__7085);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7086);
} else
{return f.call(null,a__7086);
}
} else
{var b__7088 = cljs.core._first.call(null,args__7087);
var args__7089 = cljs.core._rest.call(null,args__7087);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7086,b__7088);
} else
{return f.call(null,a__7086,b__7088);
}
} else
{var c__7090 = cljs.core._first.call(null,args__7089);
var args__7091 = cljs.core._rest.call(null,args__7089);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7086,b__7088,c__7090);
} else
{return f.call(null,a__7086,b__7088,c__7090);
}
} else
{var d__7092 = cljs.core._first.call(null,args__7091);
var args__7093 = cljs.core._rest.call(null,args__7091);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7086,b__7088,c__7090,d__7092);
} else
{return f.call(null,a__7086,b__7088,c__7090,d__7092);
}
} else
{var e__7094 = cljs.core._first.call(null,args__7093);
var args__7095 = cljs.core._rest.call(null,args__7093);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7086,b__7088,c__7090,d__7092,e__7094);
} else
{return f.call(null,a__7086,b__7088,c__7090,d__7092,e__7094);
}
} else
{var f__7096 = cljs.core._first.call(null,args__7095);
var args__7097 = cljs.core._rest.call(null,args__7095);
if((argc === 6))
{if(f__7096.cljs$lang$arity$6)
{return f__7096.cljs$lang$arity$6(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096);
}
} else
{var g__7098 = cljs.core._first.call(null,args__7097);
var args__7099 = cljs.core._rest.call(null,args__7097);
if((argc === 7))
{if(f__7096.cljs$lang$arity$7)
{return f__7096.cljs$lang$arity$7(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098);
}
} else
{var h__7100 = cljs.core._first.call(null,args__7099);
var args__7101 = cljs.core._rest.call(null,args__7099);
if((argc === 8))
{if(f__7096.cljs$lang$arity$8)
{return f__7096.cljs$lang$arity$8(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100);
}
} else
{var i__7102 = cljs.core._first.call(null,args__7101);
var args__7103 = cljs.core._rest.call(null,args__7101);
if((argc === 9))
{if(f__7096.cljs$lang$arity$9)
{return f__7096.cljs$lang$arity$9(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102);
}
} else
{var j__7104 = cljs.core._first.call(null,args__7103);
var args__7105 = cljs.core._rest.call(null,args__7103);
if((argc === 10))
{if(f__7096.cljs$lang$arity$10)
{return f__7096.cljs$lang$arity$10(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104);
}
} else
{var k__7106 = cljs.core._first.call(null,args__7105);
var args__7107 = cljs.core._rest.call(null,args__7105);
if((argc === 11))
{if(f__7096.cljs$lang$arity$11)
{return f__7096.cljs$lang$arity$11(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106);
}
} else
{var l__7108 = cljs.core._first.call(null,args__7107);
var args__7109 = cljs.core._rest.call(null,args__7107);
if((argc === 12))
{if(f__7096.cljs$lang$arity$12)
{return f__7096.cljs$lang$arity$12(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108);
}
} else
{var m__7110 = cljs.core._first.call(null,args__7109);
var args__7111 = cljs.core._rest.call(null,args__7109);
if((argc === 13))
{if(f__7096.cljs$lang$arity$13)
{return f__7096.cljs$lang$arity$13(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110);
}
} else
{var n__7112 = cljs.core._first.call(null,args__7111);
var args__7113 = cljs.core._rest.call(null,args__7111);
if((argc === 14))
{if(f__7096.cljs$lang$arity$14)
{return f__7096.cljs$lang$arity$14(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112);
}
} else
{var o__7114 = cljs.core._first.call(null,args__7113);
var args__7115 = cljs.core._rest.call(null,args__7113);
if((argc === 15))
{if(f__7096.cljs$lang$arity$15)
{return f__7096.cljs$lang$arity$15(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114);
}
} else
{var p__7116 = cljs.core._first.call(null,args__7115);
var args__7117 = cljs.core._rest.call(null,args__7115);
if((argc === 16))
{if(f__7096.cljs$lang$arity$16)
{return f__7096.cljs$lang$arity$16(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116);
}
} else
{var q__7118 = cljs.core._first.call(null,args__7117);
var args__7119 = cljs.core._rest.call(null,args__7117);
if((argc === 17))
{if(f__7096.cljs$lang$arity$17)
{return f__7096.cljs$lang$arity$17(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118);
}
} else
{var r__7120 = cljs.core._first.call(null,args__7119);
var args__7121 = cljs.core._rest.call(null,args__7119);
if((argc === 18))
{if(f__7096.cljs$lang$arity$18)
{return f__7096.cljs$lang$arity$18(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120);
}
} else
{var s__7122 = cljs.core._first.call(null,args__7121);
var args__7123 = cljs.core._rest.call(null,args__7121);
if((argc === 19))
{if(f__7096.cljs$lang$arity$19)
{return f__7096.cljs$lang$arity$19(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120,s__7122);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120,s__7122);
}
} else
{var t__7124 = cljs.core._first.call(null,args__7123);
var args__7125 = cljs.core._rest.call(null,args__7123);
if((argc === 20))
{if(f__7096.cljs$lang$arity$20)
{return f__7096.cljs$lang$arity$20(a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120,s__7122,t__7124);
} else
{return f__7096.call(null,a__7086,b__7088,c__7090,d__7092,e__7094,f__7096,g__7098,h__7100,i__7102,j__7104,k__7106,l__7108,m__7110,n__7112,o__7114,p__7116,q__7118,r__7120,s__7122,t__7124);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7140 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7141 = cljs.core.bounded_count.call(null,args,(fixed_arity__7140 + 1));
if((bc__7141 <= fixed_arity__7140))
{return cljs.core.apply_to.call(null,f,bc__7141,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7142 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7143 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7144 = cljs.core.bounded_count.call(null,arglist__7142,(fixed_arity__7143 + 1));
if((bc__7144 <= fixed_arity__7143))
{return cljs.core.apply_to.call(null,f,bc__7144,arglist__7142);
} else
{return f.cljs$lang$applyTo(arglist__7142);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7142));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7145 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7146 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7147 = cljs.core.bounded_count.call(null,arglist__7145,(fixed_arity__7146 + 1));
if((bc__7147 <= fixed_arity__7146))
{return cljs.core.apply_to.call(null,f,bc__7147,arglist__7145);
} else
{return f.cljs$lang$applyTo(arglist__7145);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7145));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7148 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7149 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7150 = cljs.core.bounded_count.call(null,arglist__7148,(fixed_arity__7149 + 1));
if((bc__7150 <= fixed_arity__7149))
{return cljs.core.apply_to.call(null,f,bc__7150,arglist__7148);
} else
{return f.cljs$lang$applyTo(arglist__7148);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7148));
}
});
var apply__6 = (function() { 
var G__7154__delegate = function (f,a,b,c,d,args){
var arglist__7151 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7152 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7153 = cljs.core.bounded_count.call(null,arglist__7151,(fixed_arity__7152 + 1));
if((bc__7153 <= fixed_arity__7152))
{return cljs.core.apply_to.call(null,f,bc__7153,arglist__7151);
} else
{return f.cljs$lang$applyTo(arglist__7151);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7151));
}
};
var G__7154 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7154__delegate.call(this, f, a, b, c, d, args);
};
G__7154.cljs$lang$maxFixedArity = 5;
G__7154.cljs$lang$applyTo = (function (arglist__7155){
var f = cljs.core.first(arglist__7155);
var a = cljs.core.first(cljs.core.next(arglist__7155));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7155)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7155))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7155)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7155)))));
return G__7154__delegate(f, a, b, c, d, args);
});
G__7154.cljs$lang$arity$variadic = G__7154__delegate;
return G__7154;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7156){
var obj = cljs.core.first(arglist__7156);
var f = cljs.core.first(cljs.core.next(arglist__7156));
var args = cljs.core.rest(cljs.core.next(arglist__7156));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7157__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7157__delegate.call(this, x, y, more);
};
G__7157.cljs$lang$maxFixedArity = 2;
G__7157.cljs$lang$applyTo = (function (arglist__7158){
var x = cljs.core.first(arglist__7158);
var y = cljs.core.first(cljs.core.next(arglist__7158));
var more = cljs.core.rest(cljs.core.next(arglist__7158));
return G__7157__delegate(x, y, more);
});
G__7157.cljs$lang$arity$variadic = G__7157__delegate;
return G__7157;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7159 = pred;
var G__7160 = cljs.core.next.call(null,coll);
pred = G__7159;
coll = G__7160;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7162 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7162))
{return or__3824__auto____7162;
} else
{{
var G__7163 = pred;
var G__7164 = cljs.core.next.call(null,coll);
pred = G__7163;
coll = G__7164;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7165 = null;
var G__7165__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7165__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7165__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7165__3 = (function() { 
var G__7166__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7166 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7166__delegate.call(this, x, y, zs);
};
G__7166.cljs$lang$maxFixedArity = 2;
G__7166.cljs$lang$applyTo = (function (arglist__7167){
var x = cljs.core.first(arglist__7167);
var y = cljs.core.first(cljs.core.next(arglist__7167));
var zs = cljs.core.rest(cljs.core.next(arglist__7167));
return G__7166__delegate(x, y, zs);
});
G__7166.cljs$lang$arity$variadic = G__7166__delegate;
return G__7166;
})()
;
G__7165 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7165__0.call(this);
case 1:
return G__7165__1.call(this,x);
case 2:
return G__7165__2.call(this,x,y);
default:
return G__7165__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7165.cljs$lang$maxFixedArity = 2;
G__7165.cljs$lang$applyTo = G__7165__3.cljs$lang$applyTo;
return G__7165;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7168__delegate = function (args){
return x;
};
var G__7168 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7168__delegate.call(this, args);
};
G__7168.cljs$lang$maxFixedArity = 0;
G__7168.cljs$lang$applyTo = (function (arglist__7169){
var args = cljs.core.seq(arglist__7169);;
return G__7168__delegate(args);
});
G__7168.cljs$lang$arity$variadic = G__7168__delegate;
return G__7168;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7176 = null;
var G__7176__0 = (function (){
return f.call(null,g.call(null));
});
var G__7176__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7176__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7176__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7176__4 = (function() { 
var G__7177__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7177__delegate.call(this, x, y, z, args);
};
G__7177.cljs$lang$maxFixedArity = 3;
G__7177.cljs$lang$applyTo = (function (arglist__7178){
var x = cljs.core.first(arglist__7178);
var y = cljs.core.first(cljs.core.next(arglist__7178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7178)));
return G__7177__delegate(x, y, z, args);
});
G__7177.cljs$lang$arity$variadic = G__7177__delegate;
return G__7177;
})()
;
G__7176 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7176__0.call(this);
case 1:
return G__7176__1.call(this,x);
case 2:
return G__7176__2.call(this,x,y);
case 3:
return G__7176__3.call(this,x,y,z);
default:
return G__7176__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7176.cljs$lang$maxFixedArity = 3;
G__7176.cljs$lang$applyTo = G__7176__4.cljs$lang$applyTo;
return G__7176;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7179 = null;
var G__7179__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7179__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7179__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7179__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7179__4 = (function() { 
var G__7180__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7180 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7180__delegate.call(this, x, y, z, args);
};
G__7180.cljs$lang$maxFixedArity = 3;
G__7180.cljs$lang$applyTo = (function (arglist__7181){
var x = cljs.core.first(arglist__7181);
var y = cljs.core.first(cljs.core.next(arglist__7181));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7181)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7181)));
return G__7180__delegate(x, y, z, args);
});
G__7180.cljs$lang$arity$variadic = G__7180__delegate;
return G__7180;
})()
;
G__7179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7179__0.call(this);
case 1:
return G__7179__1.call(this,x);
case 2:
return G__7179__2.call(this,x,y);
case 3:
return G__7179__3.call(this,x,y,z);
default:
return G__7179__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7179.cljs$lang$maxFixedArity = 3;
G__7179.cljs$lang$applyTo = G__7179__4.cljs$lang$applyTo;
return G__7179;
})()
});
var comp__4 = (function() { 
var G__7182__delegate = function (f1,f2,f3,fs){
var fs__7173 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7183__delegate = function (args){
var ret__7174 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7173),args);
var fs__7175 = cljs.core.next.call(null,fs__7173);
while(true){
if(fs__7175)
{{
var G__7184 = cljs.core.first.call(null,fs__7175).call(null,ret__7174);
var G__7185 = cljs.core.next.call(null,fs__7175);
ret__7174 = G__7184;
fs__7175 = G__7185;
continue;
}
} else
{return ret__7174;
}
break;
}
};
var G__7183 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7183__delegate.call(this, args);
};
G__7183.cljs$lang$maxFixedArity = 0;
G__7183.cljs$lang$applyTo = (function (arglist__7186){
var args = cljs.core.seq(arglist__7186);;
return G__7183__delegate(args);
});
G__7183.cljs$lang$arity$variadic = G__7183__delegate;
return G__7183;
})()
;
};
var G__7182 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7182__delegate.call(this, f1, f2, f3, fs);
};
G__7182.cljs$lang$maxFixedArity = 3;
G__7182.cljs$lang$applyTo = (function (arglist__7187){
var f1 = cljs.core.first(arglist__7187);
var f2 = cljs.core.first(cljs.core.next(arglist__7187));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7187)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7187)));
return G__7182__delegate(f1, f2, f3, fs);
});
G__7182.cljs$lang$arity$variadic = G__7182__delegate;
return G__7182;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7188__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7188 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7188__delegate.call(this, args);
};
G__7188.cljs$lang$maxFixedArity = 0;
G__7188.cljs$lang$applyTo = (function (arglist__7189){
var args = cljs.core.seq(arglist__7189);;
return G__7188__delegate(args);
});
G__7188.cljs$lang$arity$variadic = G__7188__delegate;
return G__7188;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7190__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7190 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7190__delegate.call(this, args);
};
G__7190.cljs$lang$maxFixedArity = 0;
G__7190.cljs$lang$applyTo = (function (arglist__7191){
var args = cljs.core.seq(arglist__7191);;
return G__7190__delegate(args);
});
G__7190.cljs$lang$arity$variadic = G__7190__delegate;
return G__7190;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7192__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7192 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7192__delegate.call(this, args);
};
G__7192.cljs$lang$maxFixedArity = 0;
G__7192.cljs$lang$applyTo = (function (arglist__7193){
var args = cljs.core.seq(arglist__7193);;
return G__7192__delegate(args);
});
G__7192.cljs$lang$arity$variadic = G__7192__delegate;
return G__7192;
})()
;
});
var partial__5 = (function() { 
var G__7194__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7195__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7195 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7195__delegate.call(this, args);
};
G__7195.cljs$lang$maxFixedArity = 0;
G__7195.cljs$lang$applyTo = (function (arglist__7196){
var args = cljs.core.seq(arglist__7196);;
return G__7195__delegate(args);
});
G__7195.cljs$lang$arity$variadic = G__7195__delegate;
return G__7195;
})()
;
};
var G__7194 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7194__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7194.cljs$lang$maxFixedArity = 4;
G__7194.cljs$lang$applyTo = (function (arglist__7197){
var f = cljs.core.first(arglist__7197);
var arg1 = cljs.core.first(cljs.core.next(arglist__7197));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7197)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7197))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7197))));
return G__7194__delegate(f, arg1, arg2, arg3, more);
});
G__7194.cljs$lang$arity$variadic = G__7194__delegate;
return G__7194;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7198 = null;
var G__7198__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7198__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7198__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7198__4 = (function() { 
var G__7199__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7199 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7199__delegate.call(this, a, b, c, ds);
};
G__7199.cljs$lang$maxFixedArity = 3;
G__7199.cljs$lang$applyTo = (function (arglist__7200){
var a = cljs.core.first(arglist__7200);
var b = cljs.core.first(cljs.core.next(arglist__7200));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7200)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7200)));
return G__7199__delegate(a, b, c, ds);
});
G__7199.cljs$lang$arity$variadic = G__7199__delegate;
return G__7199;
})()
;
G__7198 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7198__1.call(this,a);
case 2:
return G__7198__2.call(this,a,b);
case 3:
return G__7198__3.call(this,a,b,c);
default:
return G__7198__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7198.cljs$lang$maxFixedArity = 3;
G__7198.cljs$lang$applyTo = G__7198__4.cljs$lang$applyTo;
return G__7198;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7201 = null;
var G__7201__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7201__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7201__4 = (function() { 
var G__7202__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7202 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7202__delegate.call(this, a, b, c, ds);
};
G__7202.cljs$lang$maxFixedArity = 3;
G__7202.cljs$lang$applyTo = (function (arglist__7203){
var a = cljs.core.first(arglist__7203);
var b = cljs.core.first(cljs.core.next(arglist__7203));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7203)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7203)));
return G__7202__delegate(a, b, c, ds);
});
G__7202.cljs$lang$arity$variadic = G__7202__delegate;
return G__7202;
})()
;
G__7201 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7201__2.call(this,a,b);
case 3:
return G__7201__3.call(this,a,b,c);
default:
return G__7201__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7201.cljs$lang$maxFixedArity = 3;
G__7201.cljs$lang$applyTo = G__7201__4.cljs$lang$applyTo;
return G__7201;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7204 = null;
var G__7204__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7204__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7204__4 = (function() { 
var G__7205__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7205 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7205__delegate.call(this, a, b, c, ds);
};
G__7205.cljs$lang$maxFixedArity = 3;
G__7205.cljs$lang$applyTo = (function (arglist__7206){
var a = cljs.core.first(arglist__7206);
var b = cljs.core.first(cljs.core.next(arglist__7206));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7206)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7206)));
return G__7205__delegate(a, b, c, ds);
});
G__7205.cljs$lang$arity$variadic = G__7205__delegate;
return G__7205;
})()
;
G__7204 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7204__2.call(this,a,b);
case 3:
return G__7204__3.call(this,a,b,c);
default:
return G__7204__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7204.cljs$lang$maxFixedArity = 3;
G__7204.cljs$lang$applyTo = G__7204__4.cljs$lang$applyTo;
return G__7204;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7222 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7230 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7230)
{var s__7231 = temp__3974__auto____7230;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7231))
{var c__7232 = cljs.core.chunk_first.call(null,s__7231);
var size__7233 = cljs.core.count.call(null,c__7232);
var b__7234 = cljs.core.chunk_buffer.call(null,size__7233);
var n__2516__auto____7235 = size__7233;
var i__7236 = 0;
while(true){
if((i__7236 < n__2516__auto____7235))
{cljs.core.chunk_append.call(null,b__7234,f.call(null,(idx + i__7236),cljs.core._nth.call(null,c__7232,i__7236)));
{
var G__7237 = (i__7236 + 1);
i__7236 = G__7237;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7234),mapi.call(null,(idx + size__7233),cljs.core.chunk_rest.call(null,s__7231)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7231)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7231)));
}
} else
{return null;
}
}),null));
});
return mapi__7222.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7247 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7247)
{var s__7248 = temp__3974__auto____7247;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7248))
{var c__7249 = cljs.core.chunk_first.call(null,s__7248);
var size__7250 = cljs.core.count.call(null,c__7249);
var b__7251 = cljs.core.chunk_buffer.call(null,size__7250);
var n__2516__auto____7252 = size__7250;
var i__7253 = 0;
while(true){
if((i__7253 < n__2516__auto____7252))
{var x__7254 = f.call(null,cljs.core._nth.call(null,c__7249,i__7253));
if((x__7254 == null))
{} else
{cljs.core.chunk_append.call(null,b__7251,x__7254);
}
{
var G__7256 = (i__7253 + 1);
i__7253 = G__7256;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7251),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7248)));
} else
{var x__7255 = f.call(null,cljs.core.first.call(null,s__7248));
if((x__7255 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7248));
} else
{return cljs.core.cons.call(null,x__7255,keep.call(null,f,cljs.core.rest.call(null,s__7248)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7282 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7292 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7292)
{var s__7293 = temp__3974__auto____7292;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7293))
{var c__7294 = cljs.core.chunk_first.call(null,s__7293);
var size__7295 = cljs.core.count.call(null,c__7294);
var b__7296 = cljs.core.chunk_buffer.call(null,size__7295);
var n__2516__auto____7297 = size__7295;
var i__7298 = 0;
while(true){
if((i__7298 < n__2516__auto____7297))
{var x__7299 = f.call(null,(idx + i__7298),cljs.core._nth.call(null,c__7294,i__7298));
if((x__7299 == null))
{} else
{cljs.core.chunk_append.call(null,b__7296,x__7299);
}
{
var G__7301 = (i__7298 + 1);
i__7298 = G__7301;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7296),keepi.call(null,(idx + size__7295),cljs.core.chunk_rest.call(null,s__7293)));
} else
{var x__7300 = f.call(null,idx,cljs.core.first.call(null,s__7293));
if((x__7300 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7293));
} else
{return cljs.core.cons.call(null,x__7300,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7293)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7282.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7387 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7387))
{return p.call(null,y);
} else
{return and__3822__auto____7387;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7388 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7388))
{var and__3822__auto____7389 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7389))
{return p.call(null,z);
} else
{return and__3822__auto____7389;
}
} else
{return and__3822__auto____7388;
}
})());
});
var ep1__4 = (function() { 
var G__7458__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7390 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7390))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7390;
}
})());
};
var G__7458 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7458__delegate.call(this, x, y, z, args);
};
G__7458.cljs$lang$maxFixedArity = 3;
G__7458.cljs$lang$applyTo = (function (arglist__7459){
var x = cljs.core.first(arglist__7459);
var y = cljs.core.first(cljs.core.next(arglist__7459));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7459)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7459)));
return G__7458__delegate(x, y, z, args);
});
G__7458.cljs$lang$arity$variadic = G__7458__delegate;
return G__7458;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7402 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7402))
{return p2.call(null,x);
} else
{return and__3822__auto____7402;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7403 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7403))
{var and__3822__auto____7404 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7404))
{var and__3822__auto____7405 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7405))
{return p2.call(null,y);
} else
{return and__3822__auto____7405;
}
} else
{return and__3822__auto____7404;
}
} else
{return and__3822__auto____7403;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7406 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7406))
{var and__3822__auto____7407 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7407))
{var and__3822__auto____7408 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7408))
{var and__3822__auto____7409 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7409))
{var and__3822__auto____7410 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7410))
{return p2.call(null,z);
} else
{return and__3822__auto____7410;
}
} else
{return and__3822__auto____7409;
}
} else
{return and__3822__auto____7408;
}
} else
{return and__3822__auto____7407;
}
} else
{return and__3822__auto____7406;
}
})());
});
var ep2__4 = (function() { 
var G__7460__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7411 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7411))
{return cljs.core.every_QMARK_.call(null,(function (p1__7257_SHARP_){
var and__3822__auto____7412 = p1.call(null,p1__7257_SHARP_);
if(cljs.core.truth_(and__3822__auto____7412))
{return p2.call(null,p1__7257_SHARP_);
} else
{return and__3822__auto____7412;
}
}),args);
} else
{return and__3822__auto____7411;
}
})());
};
var G__7460 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7460__delegate.call(this, x, y, z, args);
};
G__7460.cljs$lang$maxFixedArity = 3;
G__7460.cljs$lang$applyTo = (function (arglist__7461){
var x = cljs.core.first(arglist__7461);
var y = cljs.core.first(cljs.core.next(arglist__7461));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7461)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7461)));
return G__7460__delegate(x, y, z, args);
});
G__7460.cljs$lang$arity$variadic = G__7460__delegate;
return G__7460;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7431 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7431))
{var and__3822__auto____7432 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7432))
{return p3.call(null,x);
} else
{return and__3822__auto____7432;
}
} else
{return and__3822__auto____7431;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7433 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7433))
{var and__3822__auto____7434 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7434))
{var and__3822__auto____7435 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7435))
{var and__3822__auto____7436 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7436))
{var and__3822__auto____7437 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7437))
{return p3.call(null,y);
} else
{return and__3822__auto____7437;
}
} else
{return and__3822__auto____7436;
}
} else
{return and__3822__auto____7435;
}
} else
{return and__3822__auto____7434;
}
} else
{return and__3822__auto____7433;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7438 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7438))
{var and__3822__auto____7439 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7439))
{var and__3822__auto____7440 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7440))
{var and__3822__auto____7441 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7441))
{var and__3822__auto____7442 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7442))
{var and__3822__auto____7443 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7443))
{var and__3822__auto____7444 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7444))
{var and__3822__auto____7445 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7445))
{return p3.call(null,z);
} else
{return and__3822__auto____7445;
}
} else
{return and__3822__auto____7444;
}
} else
{return and__3822__auto____7443;
}
} else
{return and__3822__auto____7442;
}
} else
{return and__3822__auto____7441;
}
} else
{return and__3822__auto____7440;
}
} else
{return and__3822__auto____7439;
}
} else
{return and__3822__auto____7438;
}
})());
});
var ep3__4 = (function() { 
var G__7462__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7446 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7446))
{return cljs.core.every_QMARK_.call(null,(function (p1__7258_SHARP_){
var and__3822__auto____7447 = p1.call(null,p1__7258_SHARP_);
if(cljs.core.truth_(and__3822__auto____7447))
{var and__3822__auto____7448 = p2.call(null,p1__7258_SHARP_);
if(cljs.core.truth_(and__3822__auto____7448))
{return p3.call(null,p1__7258_SHARP_);
} else
{return and__3822__auto____7448;
}
} else
{return and__3822__auto____7447;
}
}),args);
} else
{return and__3822__auto____7446;
}
})());
};
var G__7462 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7462__delegate.call(this, x, y, z, args);
};
G__7462.cljs$lang$maxFixedArity = 3;
G__7462.cljs$lang$applyTo = (function (arglist__7463){
var x = cljs.core.first(arglist__7463);
var y = cljs.core.first(cljs.core.next(arglist__7463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7463)));
return G__7462__delegate(x, y, z, args);
});
G__7462.cljs$lang$arity$variadic = G__7462__delegate;
return G__7462;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7464__delegate = function (p1,p2,p3,ps){
var ps__7449 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7259_SHARP_){
return p1__7259_SHARP_.call(null,x);
}),ps__7449);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7260_SHARP_){
var and__3822__auto____7454 = p1__7260_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7454))
{return p1__7260_SHARP_.call(null,y);
} else
{return and__3822__auto____7454;
}
}),ps__7449);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7261_SHARP_){
var and__3822__auto____7455 = p1__7261_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7455))
{var and__3822__auto____7456 = p1__7261_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7456))
{return p1__7261_SHARP_.call(null,z);
} else
{return and__3822__auto____7456;
}
} else
{return and__3822__auto____7455;
}
}),ps__7449);
});
var epn__4 = (function() { 
var G__7465__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7457 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7457))
{return cljs.core.every_QMARK_.call(null,(function (p1__7262_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7262_SHARP_,args);
}),ps__7449);
} else
{return and__3822__auto____7457;
}
})());
};
var G__7465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7465__delegate.call(this, x, y, z, args);
};
G__7465.cljs$lang$maxFixedArity = 3;
G__7465.cljs$lang$applyTo = (function (arglist__7466){
var x = cljs.core.first(arglist__7466);
var y = cljs.core.first(cljs.core.next(arglist__7466));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7466)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7466)));
return G__7465__delegate(x, y, z, args);
});
G__7465.cljs$lang$arity$variadic = G__7465__delegate;
return G__7465;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7464 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7464__delegate.call(this, p1, p2, p3, ps);
};
G__7464.cljs$lang$maxFixedArity = 3;
G__7464.cljs$lang$applyTo = (function (arglist__7467){
var p1 = cljs.core.first(arglist__7467);
var p2 = cljs.core.first(cljs.core.next(arglist__7467));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7467)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7467)));
return G__7464__delegate(p1, p2, p3, ps);
});
G__7464.cljs$lang$arity$variadic = G__7464__delegate;
return G__7464;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7548 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7548))
{return or__3824__auto____7548;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7549 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7549))
{return or__3824__auto____7549;
} else
{var or__3824__auto____7550 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7550))
{return or__3824__auto____7550;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7619__delegate = function (x,y,z,args){
var or__3824__auto____7551 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7551))
{return or__3824__auto____7551;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7619__delegate.call(this, x, y, z, args);
};
G__7619.cljs$lang$maxFixedArity = 3;
G__7619.cljs$lang$applyTo = (function (arglist__7620){
var x = cljs.core.first(arglist__7620);
var y = cljs.core.first(cljs.core.next(arglist__7620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7620)));
return G__7619__delegate(x, y, z, args);
});
G__7619.cljs$lang$arity$variadic = G__7619__delegate;
return G__7619;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7563 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7563))
{return or__3824__auto____7563;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7564 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7564))
{return or__3824__auto____7564;
} else
{var or__3824__auto____7565 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7565))
{return or__3824__auto____7565;
} else
{var or__3824__auto____7566 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7566))
{return or__3824__auto____7566;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7567 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7567))
{return or__3824__auto____7567;
} else
{var or__3824__auto____7568 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7568))
{return or__3824__auto____7568;
} else
{var or__3824__auto____7569 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7569))
{return or__3824__auto____7569;
} else
{var or__3824__auto____7570 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7570))
{return or__3824__auto____7570;
} else
{var or__3824__auto____7571 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7571))
{return or__3824__auto____7571;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7621__delegate = function (x,y,z,args){
var or__3824__auto____7572 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7572))
{return or__3824__auto____7572;
} else
{return cljs.core.some.call(null,(function (p1__7302_SHARP_){
var or__3824__auto____7573 = p1.call(null,p1__7302_SHARP_);
if(cljs.core.truth_(or__3824__auto____7573))
{return or__3824__auto____7573;
} else
{return p2.call(null,p1__7302_SHARP_);
}
}),args);
}
};
var G__7621 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7621__delegate.call(this, x, y, z, args);
};
G__7621.cljs$lang$maxFixedArity = 3;
G__7621.cljs$lang$applyTo = (function (arglist__7622){
var x = cljs.core.first(arglist__7622);
var y = cljs.core.first(cljs.core.next(arglist__7622));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7622)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7622)));
return G__7621__delegate(x, y, z, args);
});
G__7621.cljs$lang$arity$variadic = G__7621__delegate;
return G__7621;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7592 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7592))
{return or__3824__auto____7592;
} else
{var or__3824__auto____7593 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7593))
{return or__3824__auto____7593;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7594 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7594))
{return or__3824__auto____7594;
} else
{var or__3824__auto____7595 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7595))
{return or__3824__auto____7595;
} else
{var or__3824__auto____7596 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7596))
{return or__3824__auto____7596;
} else
{var or__3824__auto____7597 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7597))
{return or__3824__auto____7597;
} else
{var or__3824__auto____7598 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7598))
{return or__3824__auto____7598;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7599 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7599))
{return or__3824__auto____7599;
} else
{var or__3824__auto____7600 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7600))
{return or__3824__auto____7600;
} else
{var or__3824__auto____7601 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7601))
{return or__3824__auto____7601;
} else
{var or__3824__auto____7602 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7602))
{return or__3824__auto____7602;
} else
{var or__3824__auto____7603 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7603))
{return or__3824__auto____7603;
} else
{var or__3824__auto____7604 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7604))
{return or__3824__auto____7604;
} else
{var or__3824__auto____7605 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7605))
{return or__3824__auto____7605;
} else
{var or__3824__auto____7606 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7606))
{return or__3824__auto____7606;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7623__delegate = function (x,y,z,args){
var or__3824__auto____7607 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7607))
{return or__3824__auto____7607;
} else
{return cljs.core.some.call(null,(function (p1__7303_SHARP_){
var or__3824__auto____7608 = p1.call(null,p1__7303_SHARP_);
if(cljs.core.truth_(or__3824__auto____7608))
{return or__3824__auto____7608;
} else
{var or__3824__auto____7609 = p2.call(null,p1__7303_SHARP_);
if(cljs.core.truth_(or__3824__auto____7609))
{return or__3824__auto____7609;
} else
{return p3.call(null,p1__7303_SHARP_);
}
}
}),args);
}
};
var G__7623 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7623__delegate.call(this, x, y, z, args);
};
G__7623.cljs$lang$maxFixedArity = 3;
G__7623.cljs$lang$applyTo = (function (arglist__7624){
var x = cljs.core.first(arglist__7624);
var y = cljs.core.first(cljs.core.next(arglist__7624));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7624)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7624)));
return G__7623__delegate(x, y, z, args);
});
G__7623.cljs$lang$arity$variadic = G__7623__delegate;
return G__7623;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7625__delegate = function (p1,p2,p3,ps){
var ps__7610 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7304_SHARP_){
return p1__7304_SHARP_.call(null,x);
}),ps__7610);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7305_SHARP_){
var or__3824__auto____7615 = p1__7305_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7615))
{return or__3824__auto____7615;
} else
{return p1__7305_SHARP_.call(null,y);
}
}),ps__7610);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7306_SHARP_){
var or__3824__auto____7616 = p1__7306_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7616))
{return or__3824__auto____7616;
} else
{var or__3824__auto____7617 = p1__7306_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7617))
{return or__3824__auto____7617;
} else
{return p1__7306_SHARP_.call(null,z);
}
}
}),ps__7610);
});
var spn__4 = (function() { 
var G__7626__delegate = function (x,y,z,args){
var or__3824__auto____7618 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7618))
{return or__3824__auto____7618;
} else
{return cljs.core.some.call(null,(function (p1__7307_SHARP_){
return cljs.core.some.call(null,p1__7307_SHARP_,args);
}),ps__7610);
}
};
var G__7626 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7626__delegate.call(this, x, y, z, args);
};
G__7626.cljs$lang$maxFixedArity = 3;
G__7626.cljs$lang$applyTo = (function (arglist__7627){
var x = cljs.core.first(arglist__7627);
var y = cljs.core.first(cljs.core.next(arglist__7627));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7627)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7627)));
return G__7626__delegate(x, y, z, args);
});
G__7626.cljs$lang$arity$variadic = G__7626__delegate;
return G__7626;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7625 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7625__delegate.call(this, p1, p2, p3, ps);
};
G__7625.cljs$lang$maxFixedArity = 3;
G__7625.cljs$lang$applyTo = (function (arglist__7628){
var p1 = cljs.core.first(arglist__7628);
var p2 = cljs.core.first(cljs.core.next(arglist__7628));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7628)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7628)));
return G__7625__delegate(p1, p2, p3, ps);
});
G__7625.cljs$lang$arity$variadic = G__7625__delegate;
return G__7625;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7647 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7647)
{var s__7648 = temp__3974__auto____7647;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7648))
{var c__7649 = cljs.core.chunk_first.call(null,s__7648);
var size__7650 = cljs.core.count.call(null,c__7649);
var b__7651 = cljs.core.chunk_buffer.call(null,size__7650);
var n__2516__auto____7652 = size__7650;
var i__7653 = 0;
while(true){
if((i__7653 < n__2516__auto____7652))
{cljs.core.chunk_append.call(null,b__7651,f.call(null,cljs.core._nth.call(null,c__7649,i__7653)));
{
var G__7665 = (i__7653 + 1);
i__7653 = G__7665;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7651),map.call(null,f,cljs.core.chunk_rest.call(null,s__7648)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7648)),map.call(null,f,cljs.core.rest.call(null,s__7648)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7654 = cljs.core.seq.call(null,c1);
var s2__7655 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7656 = s1__7654;
if(and__3822__auto____7656)
{return s2__7655;
} else
{return and__3822__auto____7656;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7654),cljs.core.first.call(null,s2__7655)),map.call(null,f,cljs.core.rest.call(null,s1__7654),cljs.core.rest.call(null,s2__7655)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7657 = cljs.core.seq.call(null,c1);
var s2__7658 = cljs.core.seq.call(null,c2);
var s3__7659 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7660 = s1__7657;
if(and__3822__auto____7660)
{var and__3822__auto____7661 = s2__7658;
if(and__3822__auto____7661)
{return s3__7659;
} else
{return and__3822__auto____7661;
}
} else
{return and__3822__auto____7660;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7657),cljs.core.first.call(null,s2__7658),cljs.core.first.call(null,s3__7659)),map.call(null,f,cljs.core.rest.call(null,s1__7657),cljs.core.rest.call(null,s2__7658),cljs.core.rest.call(null,s3__7659)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7666__delegate = function (f,c1,c2,c3,colls){
var step__7664 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7663 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7663))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7663),step.call(null,map.call(null,cljs.core.rest,ss__7663)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7468_SHARP_){
return cljs.core.apply.call(null,f,p1__7468_SHARP_);
}),step__7664.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7666 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7666__delegate.call(this, f, c1, c2, c3, colls);
};
G__7666.cljs$lang$maxFixedArity = 4;
G__7666.cljs$lang$applyTo = (function (arglist__7667){
var f = cljs.core.first(arglist__7667);
var c1 = cljs.core.first(cljs.core.next(arglist__7667));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7667)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7667))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7667))));
return G__7666__delegate(f, c1, c2, c3, colls);
});
G__7666.cljs$lang$arity$variadic = G__7666__delegate;
return G__7666;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7670 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7670)
{var s__7671 = temp__3974__auto____7670;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7671),take.call(null,(n - 1),cljs.core.rest.call(null,s__7671)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7677 = (function (n,coll){
while(true){
var s__7675 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7676 = (n > 0);
if(and__3822__auto____7676)
{return s__7675;
} else
{return and__3822__auto____7676;
}
})()))
{{
var G__7678 = (n - 1);
var G__7679 = cljs.core.rest.call(null,s__7675);
n = G__7678;
coll = G__7679;
continue;
}
} else
{return s__7675;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7677.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7682 = cljs.core.seq.call(null,coll);
var lead__7683 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7683)
{{
var G__7684 = cljs.core.next.call(null,s__7682);
var G__7685 = cljs.core.next.call(null,lead__7683);
s__7682 = G__7684;
lead__7683 = G__7685;
continue;
}
} else
{return s__7682;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7691 = (function (pred,coll){
while(true){
var s__7689 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7690 = s__7689;
if(and__3822__auto____7690)
{return pred.call(null,cljs.core.first.call(null,s__7689));
} else
{return and__3822__auto____7690;
}
})()))
{{
var G__7692 = pred;
var G__7693 = cljs.core.rest.call(null,s__7689);
pred = G__7692;
coll = G__7693;
continue;
}
} else
{return s__7689;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7691.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7696 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7696)
{var s__7697 = temp__3974__auto____7696;
return cljs.core.concat.call(null,s__7697,cycle.call(null,s__7697));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7702 = cljs.core.seq.call(null,c1);
var s2__7703 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7704 = s1__7702;
if(and__3822__auto____7704)
{return s2__7703;
} else
{return and__3822__auto____7704;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7702),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7703),interleave.call(null,cljs.core.rest.call(null,s1__7702),cljs.core.rest.call(null,s2__7703))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7706__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7705 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7705))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7705),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7705)));
} else
{return null;
}
}),null));
};
var G__7706 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7706__delegate.call(this, c1, c2, colls);
};
G__7706.cljs$lang$maxFixedArity = 2;
G__7706.cljs$lang$applyTo = (function (arglist__7707){
var c1 = cljs.core.first(arglist__7707);
var c2 = cljs.core.first(cljs.core.next(arglist__7707));
var colls = cljs.core.rest(cljs.core.next(arglist__7707));
return G__7706__delegate(c1, c2, colls);
});
G__7706.cljs$lang$arity$variadic = G__7706__delegate;
return G__7706;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7717 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7715 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7715)
{var coll__7716 = temp__3971__auto____7715;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7716),cat.call(null,cljs.core.rest.call(null,coll__7716),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7717.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7718__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7718 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7718__delegate.call(this, f, coll, colls);
};
G__7718.cljs$lang$maxFixedArity = 2;
G__7718.cljs$lang$applyTo = (function (arglist__7719){
var f = cljs.core.first(arglist__7719);
var coll = cljs.core.first(cljs.core.next(arglist__7719));
var colls = cljs.core.rest(cljs.core.next(arglist__7719));
return G__7718__delegate(f, coll, colls);
});
G__7718.cljs$lang$arity$variadic = G__7718__delegate;
return G__7718;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7729 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7729)
{var s__7730 = temp__3974__auto____7729;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7730))
{var c__7731 = cljs.core.chunk_first.call(null,s__7730);
var size__7732 = cljs.core.count.call(null,c__7731);
var b__7733 = cljs.core.chunk_buffer.call(null,size__7732);
var n__2516__auto____7734 = size__7732;
var i__7735 = 0;
while(true){
if((i__7735 < n__2516__auto____7734))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7731,i__7735))))
{cljs.core.chunk_append.call(null,b__7733,cljs.core._nth.call(null,c__7731,i__7735));
} else
{}
{
var G__7738 = (i__7735 + 1);
i__7735 = G__7738;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7733),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7730)));
} else
{var f__7736 = cljs.core.first.call(null,s__7730);
var r__7737 = cljs.core.rest.call(null,s__7730);
if(cljs.core.truth_(pred.call(null,f__7736)))
{return cljs.core.cons.call(null,f__7736,filter.call(null,pred,r__7737));
} else
{return filter.call(null,pred,r__7737);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7741 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7741.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7739_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7739_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7745__7746 = to;
if(G__7745__7746)
{if((function (){var or__3824__auto____7747 = (G__7745__7746.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7747)
{return or__3824__auto____7747;
} else
{return G__7745__7746.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7745__7746.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7745__7746);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7745__7746);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7748__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7748 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7748__delegate.call(this, f, c1, c2, c3, colls);
};
G__7748.cljs$lang$maxFixedArity = 4;
G__7748.cljs$lang$applyTo = (function (arglist__7749){
var f = cljs.core.first(arglist__7749);
var c1 = cljs.core.first(cljs.core.next(arglist__7749));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7749)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7749))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7749))));
return G__7748__delegate(f, c1, c2, c3, colls);
});
G__7748.cljs$lang$arity$variadic = G__7748__delegate;
return G__7748;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7756 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7756)
{var s__7757 = temp__3974__auto____7756;
var p__7758 = cljs.core.take.call(null,n,s__7757);
if((n === cljs.core.count.call(null,p__7758)))
{return cljs.core.cons.call(null,p__7758,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7757)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7759 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7759)
{var s__7760 = temp__3974__auto____7759;
var p__7761 = cljs.core.take.call(null,n,s__7760);
if((n === cljs.core.count.call(null,p__7761)))
{return cljs.core.cons.call(null,p__7761,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7760)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7761,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7766 = cljs.core.lookup_sentinel;
var m__7767 = m;
var ks__7768 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7768)
{var m__7769 = cljs.core._lookup.call(null,m__7767,cljs.core.first.call(null,ks__7768),sentinel__7766);
if((sentinel__7766 === m__7769))
{return not_found;
} else
{{
var G__7770 = sentinel__7766;
var G__7771 = m__7769;
var G__7772 = cljs.core.next.call(null,ks__7768);
sentinel__7766 = G__7770;
m__7767 = G__7771;
ks__7768 = G__7772;
continue;
}
}
} else
{return m__7767;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7773,v){
var vec__7778__7779 = p__7773;
var k__7780 = cljs.core.nth.call(null,vec__7778__7779,0,null);
var ks__7781 = cljs.core.nthnext.call(null,vec__7778__7779,1);
if(cljs.core.truth_(ks__7781))
{return cljs.core.assoc.call(null,m,k__7780,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7780,null),ks__7781,v));
} else
{return cljs.core.assoc.call(null,m,k__7780,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7782,f,args){
var vec__7787__7788 = p__7782;
var k__7789 = cljs.core.nth.call(null,vec__7787__7788,0,null);
var ks__7790 = cljs.core.nthnext.call(null,vec__7787__7788,1);
if(cljs.core.truth_(ks__7790))
{return cljs.core.assoc.call(null,m,k__7789,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7789,null),ks__7790,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7789,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7789,null),args));
}
};
var update_in = function (m,p__7782,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7782, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7791){
var m = cljs.core.first(arglist__7791);
var p__7782 = cljs.core.first(cljs.core.next(arglist__7791));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7791)));
return update_in__delegate(m, p__7782, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7794 = this;
var h__2177__auto____7795 = this__7794.__hash;
if(!((h__2177__auto____7795 == null)))
{return h__2177__auto____7795;
} else
{var h__2177__auto____7796 = cljs.core.hash_coll.call(null,coll);
this__7794.__hash = h__2177__auto____7796;
return h__2177__auto____7796;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7797 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7798 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7799 = this;
var new_array__7800 = this__7799.array.slice();
(new_array__7800[k] = v);
return (new cljs.core.Vector(this__7799.meta,new_array__7800,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7831 = null;
var G__7831__2 = (function (this_sym7801,k){
var this__7803 = this;
var this_sym7801__7804 = this;
var coll__7805 = this_sym7801__7804;
return coll__7805.cljs$core$ILookup$_lookup$arity$2(coll__7805,k);
});
var G__7831__3 = (function (this_sym7802,k,not_found){
var this__7803 = this;
var this_sym7802__7806 = this;
var coll__7807 = this_sym7802__7806;
return coll__7807.cljs$core$ILookup$_lookup$arity$3(coll__7807,k,not_found);
});
G__7831 = function(this_sym7802,k,not_found){
switch(arguments.length){
case 2:
return G__7831__2.call(this,this_sym7802,k);
case 3:
return G__7831__3.call(this,this_sym7802,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7831;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7792,args7793){
var this__7808 = this;
return this_sym7792.call.apply(this_sym7792,[this_sym7792].concat(args7793.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7809 = this;
var new_array__7810 = this__7809.array.slice();
new_array__7810.push(o);
return (new cljs.core.Vector(this__7809.meta,new_array__7810,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7811 = this;
var this__7812 = this;
return cljs.core.pr_str.call(null,this__7812);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7813 = this;
return cljs.core.ci_reduce.call(null,this__7813.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7814 = this;
return cljs.core.ci_reduce.call(null,this__7814.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7815 = this;
if((this__7815.array.length > 0))
{var vector_seq__7816 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7815.array.length))
{return cljs.core.cons.call(null,(this__7815.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__7816.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7817 = this;
return this__7817.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7818 = this;
var count__7819 = this__7818.array.length;
if((count__7819 > 0))
{return (this__7818.array[(count__7819 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7820 = this;
if((this__7820.array.length > 0))
{var new_array__7821 = this__7820.array.slice();
new_array__7821.pop();
return (new cljs.core.Vector(this__7820.meta,new_array__7821,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7822 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7823 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7824 = this;
return (new cljs.core.Vector(meta,this__7824.array,this__7824.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7825 = this;
return this__7825.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7826 = this;
if((function (){var and__3822__auto____7827 = (0 <= n);
if(and__3822__auto____7827)
{return (n < this__7826.array.length);
} else
{return and__3822__auto____7827;
}
})())
{return (this__7826.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7828 = this;
if((function (){var and__3822__auto____7829 = (0 <= n);
if(and__3822__auto____7829)
{return (n < this__7828.array.length);
} else
{return and__3822__auto____7829;
}
})())
{return (this__7828.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7830 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7830.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2295__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7833 = pv.cnt;
if((cnt__7833 < 32))
{return 0;
} else
{return (((cnt__7833 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7839 = level;
var ret__7840 = node;
while(true){
if((ll__7839 === 0))
{return ret__7840;
} else
{var embed__7841 = ret__7840;
var r__7842 = cljs.core.pv_fresh_node.call(null,edit);
var ___7843 = cljs.core.pv_aset.call(null,r__7842,0,embed__7841);
{
var G__7844 = (ll__7839 - 5);
var G__7845 = r__7842;
ll__7839 = G__7844;
ret__7840 = G__7845;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7851 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7852 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7851,subidx__7852,tailnode);
return ret__7851;
} else
{var child__7853 = cljs.core.pv_aget.call(null,parent,subidx__7852);
if(!((child__7853 == null)))
{var node_to_insert__7854 = push_tail.call(null,pv,(level - 5),child__7853,tailnode);
cljs.core.pv_aset.call(null,ret__7851,subidx__7852,node_to_insert__7854);
return ret__7851;
} else
{var node_to_insert__7855 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7851,subidx__7852,node_to_insert__7855);
return ret__7851;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7859 = (0 <= i);
if(and__3822__auto____7859)
{return (i < pv.cnt);
} else
{return and__3822__auto____7859;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7860 = pv.root;
var level__7861 = pv.shift;
while(true){
if((level__7861 > 0))
{{
var G__7862 = cljs.core.pv_aget.call(null,node__7860,((i >>> level__7861) & 31));
var G__7863 = (level__7861 - 5);
node__7860 = G__7862;
level__7861 = G__7863;
continue;
}
} else
{return node__7860.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7866 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7866,(i & 31),val);
return ret__7866;
} else
{var subidx__7867 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7866,subidx__7867,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7867),i,val));
return ret__7866;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7873 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7874 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7873));
if((function (){var and__3822__auto____7875 = (new_child__7874 == null);
if(and__3822__auto____7875)
{return (subidx__7873 === 0);
} else
{return and__3822__auto____7875;
}
})())
{return null;
} else
{var ret__7876 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7876,subidx__7873,new_child__7874);
return ret__7876;
}
} else
{if((subidx__7873 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7877 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7877,subidx__7873,null);
return ret__7877;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7880 = this;
return (new cljs.core.TransientVector(this__7880.cnt,this__7880.shift,cljs.core.tv_editable_root.call(null,this__7880.root),cljs.core.tv_editable_tail.call(null,this__7880.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7881 = this;
var h__2177__auto____7882 = this__7881.__hash;
if(!((h__2177__auto____7882 == null)))
{return h__2177__auto____7882;
} else
{var h__2177__auto____7883 = cljs.core.hash_coll.call(null,coll);
this__7881.__hash = h__2177__auto____7883;
return h__2177__auto____7883;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7884 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7885 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7886 = this;
if((function (){var and__3822__auto____7887 = (0 <= k);
if(and__3822__auto____7887)
{return (k < this__7886.cnt);
} else
{return and__3822__auto____7887;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7888 = this__7886.tail.slice();
(new_tail__7888[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7886.meta,this__7886.cnt,this__7886.shift,this__7886.root,new_tail__7888,null));
} else
{return (new cljs.core.PersistentVector(this__7886.meta,this__7886.cnt,this__7886.shift,cljs.core.do_assoc.call(null,coll,this__7886.shift,this__7886.root,k,v),this__7886.tail,null));
}
} else
{if((k === this__7886.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7886.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__7936 = null;
var G__7936__2 = (function (this_sym7889,k){
var this__7891 = this;
var this_sym7889__7892 = this;
var coll__7893 = this_sym7889__7892;
return coll__7893.cljs$core$ILookup$_lookup$arity$2(coll__7893,k);
});
var G__7936__3 = (function (this_sym7890,k,not_found){
var this__7891 = this;
var this_sym7890__7894 = this;
var coll__7895 = this_sym7890__7894;
return coll__7895.cljs$core$ILookup$_lookup$arity$3(coll__7895,k,not_found);
});
G__7936 = function(this_sym7890,k,not_found){
switch(arguments.length){
case 2:
return G__7936__2.call(this,this_sym7890,k);
case 3:
return G__7936__3.call(this,this_sym7890,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7936;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7878,args7879){
var this__7896 = this;
return this_sym7878.call.apply(this_sym7878,[this_sym7878].concat(args7879.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7897 = this;
var step_init__7898 = [0,init];
var i__7899 = 0;
while(true){
if((i__7899 < this__7897.cnt))
{var arr__7900 = cljs.core.array_for.call(null,v,i__7899);
var len__7901 = arr__7900.length;
var init__7905 = (function (){var j__7902 = 0;
var init__7903 = (step_init__7898[1]);
while(true){
if((j__7902 < len__7901))
{var init__7904 = f.call(null,init__7903,(j__7902 + i__7899),(arr__7900[j__7902]));
if(cljs.core.reduced_QMARK_.call(null,init__7904))
{return init__7904;
} else
{{
var G__7937 = (j__7902 + 1);
var G__7938 = init__7904;
j__7902 = G__7937;
init__7903 = G__7938;
continue;
}
}
} else
{(step_init__7898[0] = len__7901);
(step_init__7898[1] = init__7903);
return init__7903;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7905))
{return cljs.core.deref.call(null,init__7905);
} else
{{
var G__7939 = (i__7899 + (step_init__7898[0]));
i__7899 = G__7939;
continue;
}
}
} else
{return (step_init__7898[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7906 = this;
if(((this__7906.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7907 = this__7906.tail.slice();
new_tail__7907.push(o);
return (new cljs.core.PersistentVector(this__7906.meta,(this__7906.cnt + 1),this__7906.shift,this__7906.root,new_tail__7907,null));
} else
{var root_overflow_QMARK___7908 = ((this__7906.cnt >>> 5) > (1 << this__7906.shift));
var new_shift__7909 = ((root_overflow_QMARK___7908)?(this__7906.shift + 5):this__7906.shift);
var new_root__7911 = ((root_overflow_QMARK___7908)?(function (){var n_r__7910 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7910,0,this__7906.root);
cljs.core.pv_aset.call(null,n_r__7910,1,cljs.core.new_path.call(null,null,this__7906.shift,(new cljs.core.VectorNode(null,this__7906.tail))));
return n_r__7910;
})():cljs.core.push_tail.call(null,coll,this__7906.shift,this__7906.root,(new cljs.core.VectorNode(null,this__7906.tail))));
return (new cljs.core.PersistentVector(this__7906.meta,(this__7906.cnt + 1),new_shift__7909,new_root__7911,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7912 = this;
if((this__7912.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__7912.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7913 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7914 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7915 = this;
var this__7916 = this;
return cljs.core.pr_str.call(null,this__7916);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7917 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7918 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7919 = this;
if((this__7919.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7920 = this;
return this__7920.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7921 = this;
if((this__7921.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__7921.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7922 = this;
if((this__7922.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7922.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7922.meta);
} else
{if((1 < (this__7922.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__7922.meta,(this__7922.cnt - 1),this__7922.shift,this__7922.root,this__7922.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7923 = cljs.core.array_for.call(null,coll,(this__7922.cnt - 2));
var nr__7924 = cljs.core.pop_tail.call(null,coll,this__7922.shift,this__7922.root);
var new_root__7925 = (((nr__7924 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7924);
var cnt_1__7926 = (this__7922.cnt - 1);
if((function (){var and__3822__auto____7927 = (5 < this__7922.shift);
if(and__3822__auto____7927)
{return (cljs.core.pv_aget.call(null,new_root__7925,1) == null);
} else
{return and__3822__auto____7927;
}
})())
{return (new cljs.core.PersistentVector(this__7922.meta,cnt_1__7926,(this__7922.shift - 5),cljs.core.pv_aget.call(null,new_root__7925,0),new_tail__7923,null));
} else
{return (new cljs.core.PersistentVector(this__7922.meta,cnt_1__7926,this__7922.shift,new_root__7925,new_tail__7923,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7928 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7930 = this;
return (new cljs.core.PersistentVector(meta,this__7930.cnt,this__7930.shift,this__7930.root,this__7930.tail,this__7930.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7931 = this;
return this__7931.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7932 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7933 = this;
if((function (){var and__3822__auto____7934 = (0 <= n);
if(and__3822__auto____7934)
{return (n < this__7933.cnt);
} else
{return and__3822__auto____7934;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7935 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7935.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__7940 = xs.length;
var xs__7941 = (((no_clone === true))?xs:xs.slice());
if((l__7940 < 32))
{return (new cljs.core.PersistentVector(null,l__7940,5,cljs.core.PersistentVector.EMPTY_NODE,xs__7941,null));
} else
{var node__7942 = xs__7941.slice(0,32);
var v__7943 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__7942,null));
var i__7944 = 32;
var out__7945 = cljs.core._as_transient.call(null,v__7943);
while(true){
if((i__7944 < l__7940))
{{
var G__7946 = (i__7944 + 1);
var G__7947 = cljs.core.conj_BANG_.call(null,out__7945,(xs__7941[i__7944]));
i__7944 = G__7946;
out__7945 = G__7947;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7945);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7948){
var args = cljs.core.seq(arglist__7948);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7949 = this;
if(((this__7949.off + 1) < this__7949.node.length))
{var s__7950 = cljs.core.chunked_seq.call(null,this__7949.vec,this__7949.node,this__7949.i,(this__7949.off + 1));
if((s__7950 == null))
{return null;
} else
{return s__7950;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7951 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7952 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7953 = this;
return (this__7953.node[this__7953.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7954 = this;
if(((this__7954.off + 1) < this__7954.node.length))
{var s__7955 = cljs.core.chunked_seq.call(null,this__7954.vec,this__7954.node,this__7954.i,(this__7954.off + 1));
if((s__7955 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7955;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7956 = this;
var l__7957 = this__7956.node.length;
var s__7958 = ((((this__7956.i + l__7957) < cljs.core._count.call(null,this__7956.vec)))?cljs.core.chunked_seq.call(null,this__7956.vec,(this__7956.i + l__7957),0):null);
if((s__7958 == null))
{return null;
} else
{return s__7958;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7959 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7960 = this;
return cljs.core.chunked_seq.call(null,this__7960.vec,this__7960.node,this__7960.i,this__7960.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__7961 = this;
return this__7961.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7962 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7962.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7963 = this;
return cljs.core.array_chunk.call(null,this__7963.node,this__7963.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7964 = this;
var l__7965 = this__7964.node.length;
var s__7966 = ((((this__7964.i + l__7965) < cljs.core._count.call(null,this__7964.vec)))?cljs.core.chunked_seq.call(null,this__7964.vec,(this__7964.i + l__7965),0):null);
if((s__7966 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7966;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7969 = this;
var h__2177__auto____7970 = this__7969.__hash;
if(!((h__2177__auto____7970 == null)))
{return h__2177__auto____7970;
} else
{var h__2177__auto____7971 = cljs.core.hash_coll.call(null,coll);
this__7969.__hash = h__2177__auto____7971;
return h__2177__auto____7971;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7972 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7973 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__7974 = this;
var v_pos__7975 = (this__7974.start + key);
return (new cljs.core.Subvec(this__7974.meta,cljs.core._assoc.call(null,this__7974.v,v_pos__7975,val),this__7974.start,((this__7974.end > (v_pos__7975 + 1)) ? this__7974.end : (v_pos__7975 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8001 = null;
var G__8001__2 = (function (this_sym7976,k){
var this__7978 = this;
var this_sym7976__7979 = this;
var coll__7980 = this_sym7976__7979;
return coll__7980.cljs$core$ILookup$_lookup$arity$2(coll__7980,k);
});
var G__8001__3 = (function (this_sym7977,k,not_found){
var this__7978 = this;
var this_sym7977__7981 = this;
var coll__7982 = this_sym7977__7981;
return coll__7982.cljs$core$ILookup$_lookup$arity$3(coll__7982,k,not_found);
});
G__8001 = function(this_sym7977,k,not_found){
switch(arguments.length){
case 2:
return G__8001__2.call(this,this_sym7977,k);
case 3:
return G__8001__3.call(this,this_sym7977,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8001;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym7967,args7968){
var this__7983 = this;
return this_sym7967.call.apply(this_sym7967,[this_sym7967].concat(args7968.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7984 = this;
return (new cljs.core.Subvec(this__7984.meta,cljs.core._assoc_n.call(null,this__7984.v,this__7984.end,o),this__7984.start,(this__7984.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__7985 = this;
var this__7986 = this;
return cljs.core.pr_str.call(null,this__7986);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7987 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7988 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7989 = this;
var subvec_seq__7990 = (function subvec_seq(i){
if((i === this__7989.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7989.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__7990.call(null,this__7989.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7991 = this;
return (this__7991.end - this__7991.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7992 = this;
return cljs.core._nth.call(null,this__7992.v,(this__7992.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7993 = this;
if((this__7993.start === this__7993.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7993.meta,this__7993.v,this__7993.start,(this__7993.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7994 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7995 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7996 = this;
return (new cljs.core.Subvec(meta,this__7996.v,this__7996.start,this__7996.end,this__7996.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7997 = this;
return this__7997.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7998 = this;
return cljs.core._nth.call(null,this__7998.v,(this__7998.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7999 = this;
return cljs.core._nth.call(null,this__7999.v,(this__7999.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8000 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8000.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__8003 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8003,0,tl.length);
return ret__8003;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8007 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8008 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8007,subidx__8008,(((level === 5))?tail_node:(function (){var child__8009 = cljs.core.pv_aget.call(null,ret__8007,subidx__8008);
if(!((child__8009 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8009,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8007;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8014 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8015 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8016 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8014,subidx__8015));
if((function (){var and__3822__auto____8017 = (new_child__8016 == null);
if(and__3822__auto____8017)
{return (subidx__8015 === 0);
} else
{return and__3822__auto____8017;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8014,subidx__8015,new_child__8016);
return node__8014;
}
} else
{if((subidx__8015 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8014,subidx__8015,null);
return node__8014;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8022 = (0 <= i);
if(and__3822__auto____8022)
{return (i < tv.cnt);
} else
{return and__3822__auto____8022;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8023 = tv.root;
var node__8024 = root__8023;
var level__8025 = tv.shift;
while(true){
if((level__8025 > 0))
{{
var G__8026 = cljs.core.tv_ensure_editable.call(null,root__8023.edit,cljs.core.pv_aget.call(null,node__8024,((i >>> level__8025) & 31)));
var G__8027 = (level__8025 - 5);
node__8024 = G__8026;
level__8025 = G__8027;
continue;
}
} else
{return node__8024.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8067 = null;
var G__8067__2 = (function (this_sym8030,k){
var this__8032 = this;
var this_sym8030__8033 = this;
var coll__8034 = this_sym8030__8033;
return coll__8034.cljs$core$ILookup$_lookup$arity$2(coll__8034,k);
});
var G__8067__3 = (function (this_sym8031,k,not_found){
var this__8032 = this;
var this_sym8031__8035 = this;
var coll__8036 = this_sym8031__8035;
return coll__8036.cljs$core$ILookup$_lookup$arity$3(coll__8036,k,not_found);
});
G__8067 = function(this_sym8031,k,not_found){
switch(arguments.length){
case 2:
return G__8067__2.call(this,this_sym8031,k);
case 3:
return G__8067__3.call(this,this_sym8031,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8067;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8028,args8029){
var this__8037 = this;
return this_sym8028.call.apply(this_sym8028,[this_sym8028].concat(args8029.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8038 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8039 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8040 = this;
if(this__8040.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8041 = this;
if((function (){var and__3822__auto____8042 = (0 <= n);
if(and__3822__auto____8042)
{return (n < this__8041.cnt);
} else
{return and__3822__auto____8042;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8043 = this;
if(this__8043.root.edit)
{return this__8043.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8044 = this;
if(this__8044.root.edit)
{if((function (){var and__3822__auto____8045 = (0 <= n);
if(and__3822__auto____8045)
{return (n < this__8044.cnt);
} else
{return and__3822__auto____8045;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8044.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8050 = (function go(level,node){
var node__8048 = cljs.core.tv_ensure_editable.call(null,this__8044.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8048,(n & 31),val);
return node__8048;
} else
{var subidx__8049 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8048,subidx__8049,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8048,subidx__8049)));
return node__8048;
}
}).call(null,this__8044.shift,this__8044.root);
this__8044.root = new_root__8050;
return tcoll;
}
} else
{if((n === this__8044.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8044.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8051 = this;
if(this__8051.root.edit)
{if((this__8051.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8051.cnt))
{this__8051.cnt = 0;
return tcoll;
} else
{if((((this__8051.cnt - 1) & 31) > 0))
{this__8051.cnt = (this__8051.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8052 = cljs.core.editable_array_for.call(null,tcoll,(this__8051.cnt - 2));
var new_root__8054 = (function (){var nr__8053 = cljs.core.tv_pop_tail.call(null,tcoll,this__8051.shift,this__8051.root);
if(!((nr__8053 == null)))
{return nr__8053;
} else
{return (new cljs.core.VectorNode(this__8051.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8055 = (5 < this__8051.shift);
if(and__3822__auto____8055)
{return (cljs.core.pv_aget.call(null,new_root__8054,1) == null);
} else
{return and__3822__auto____8055;
}
})())
{var new_root__8056 = cljs.core.tv_ensure_editable.call(null,this__8051.root.edit,cljs.core.pv_aget.call(null,new_root__8054,0));
this__8051.root = new_root__8056;
this__8051.shift = (this__8051.shift - 5);
this__8051.cnt = (this__8051.cnt - 1);
this__8051.tail = new_tail__8052;
return tcoll;
} else
{this__8051.root = new_root__8054;
this__8051.cnt = (this__8051.cnt - 1);
this__8051.tail = new_tail__8052;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8057 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8058 = this;
if(this__8058.root.edit)
{if(((this__8058.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8058.tail[(this__8058.cnt & 31)] = o);
this__8058.cnt = (this__8058.cnt + 1);
return tcoll;
} else
{var tail_node__8059 = (new cljs.core.VectorNode(this__8058.root.edit,this__8058.tail));
var new_tail__8060 = cljs.core.make_array.call(null,32);
(new_tail__8060[0] = o);
this__8058.tail = new_tail__8060;
if(((this__8058.cnt >>> 5) > (1 << this__8058.shift)))
{var new_root_array__8061 = cljs.core.make_array.call(null,32);
var new_shift__8062 = (this__8058.shift + 5);
(new_root_array__8061[0] = this__8058.root);
(new_root_array__8061[1] = cljs.core.new_path.call(null,this__8058.root.edit,this__8058.shift,tail_node__8059));
this__8058.root = (new cljs.core.VectorNode(this__8058.root.edit,new_root_array__8061));
this__8058.shift = new_shift__8062;
this__8058.cnt = (this__8058.cnt + 1);
return tcoll;
} else
{var new_root__8063 = cljs.core.tv_push_tail.call(null,tcoll,this__8058.shift,this__8058.root,tail_node__8059);
this__8058.root = new_root__8063;
this__8058.cnt = (this__8058.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8064 = this;
if(this__8064.root.edit)
{this__8064.root.edit = null;
var len__8065 = (this__8064.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8066 = cljs.core.make_array.call(null,len__8065);
cljs.core.array_copy.call(null,this__8064.tail,0,trimmed_tail__8066,0,len__8065);
return (new cljs.core.PersistentVector(null,this__8064.cnt,this__8064.shift,this__8064.root,trimmed_tail__8066,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8068 = this;
var h__2177__auto____8069 = this__8068.__hash;
if(!((h__2177__auto____8069 == null)))
{return h__2177__auto____8069;
} else
{var h__2177__auto____8070 = cljs.core.hash_coll.call(null,coll);
this__8068.__hash = h__2177__auto____8070;
return h__2177__auto____8070;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8071 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8072 = this;
var this__8073 = this;
return cljs.core.pr_str.call(null,this__8073);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8074 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8075 = this;
return cljs.core._first.call(null,this__8075.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8076 = this;
var temp__3971__auto____8077 = cljs.core.next.call(null,this__8076.front);
if(temp__3971__auto____8077)
{var f1__8078 = temp__3971__auto____8077;
return (new cljs.core.PersistentQueueSeq(this__8076.meta,f1__8078,this__8076.rear,null));
} else
{if((this__8076.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8076.meta,this__8076.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8080 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8080.front,this__8080.rear,this__8080.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8081 = this;
return this__8081.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8082 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8082.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8083 = this;
var h__2177__auto____8084 = this__8083.__hash;
if(!((h__2177__auto____8084 == null)))
{return h__2177__auto____8084;
} else
{var h__2177__auto____8085 = cljs.core.hash_coll.call(null,coll);
this__8083.__hash = h__2177__auto____8085;
return h__2177__auto____8085;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8086 = this;
if(cljs.core.truth_(this__8086.front))
{return (new cljs.core.PersistentQueue(this__8086.meta,(this__8086.count + 1),this__8086.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8087 = this__8086.rear;
if(cljs.core.truth_(or__3824__auto____8087))
{return or__3824__auto____8087;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8086.meta,(this__8086.count + 1),cljs.core.conj.call(null,this__8086.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8088 = this;
var this__8089 = this;
return cljs.core.pr_str.call(null,this__8089);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8090 = this;
var rear__8091 = cljs.core.seq.call(null,this__8090.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8092 = this__8090.front;
if(cljs.core.truth_(or__3824__auto____8092))
{return or__3824__auto____8092;
} else
{return rear__8091;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8090.front,cljs.core.seq.call(null,rear__8091),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8093 = this;
return this__8093.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8094 = this;
return cljs.core._first.call(null,this__8094.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8095 = this;
if(cljs.core.truth_(this__8095.front))
{var temp__3971__auto____8096 = cljs.core.next.call(null,this__8095.front);
if(temp__3971__auto____8096)
{var f1__8097 = temp__3971__auto____8096;
return (new cljs.core.PersistentQueue(this__8095.meta,(this__8095.count - 1),f1__8097,this__8095.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8095.meta,(this__8095.count - 1),cljs.core.seq.call(null,this__8095.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8098 = this;
return cljs.core.first.call(null,this__8098.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8099 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8100 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8101 = this;
return (new cljs.core.PersistentQueue(meta,this__8101.count,this__8101.front,this__8101.rear,this__8101.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8102 = this;
return this__8102.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8103 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8104 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8107 = array.length;
var i__8108 = 0;
while(true){
if((i__8108 < len__8107))
{if((k === (array[i__8108])))
{return i__8108;
} else
{{
var G__8109 = (i__8108 + incr);
i__8108 = G__8109;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8112 = cljs.core.hash.call(null,a);
var b__8113 = cljs.core.hash.call(null,b);
if((a__8112 < b__8113))
{return -1;
} else
{if((a__8112 > b__8113))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8121 = m.keys;
var len__8122 = ks__8121.length;
var so__8123 = m.strobj;
var out__8124 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8125 = 0;
var out__8126 = cljs.core.transient$.call(null,out__8124);
while(true){
if((i__8125 < len__8122))
{var k__8127 = (ks__8121[i__8125]);
{
var G__8128 = (i__8125 + 1);
var G__8129 = cljs.core.assoc_BANG_.call(null,out__8126,k__8127,(so__8123[k__8127]));
i__8125 = G__8128;
out__8126 = G__8129;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8126,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8135 = {};
var l__8136 = ks.length;
var i__8137 = 0;
while(true){
if((i__8137 < l__8136))
{var k__8138 = (ks[i__8137]);
(new_obj__8135[k__8138] = (obj[k__8138]));
{
var G__8139 = (i__8137 + 1);
i__8137 = G__8139;
continue;
}
} else
{}
break;
}
return new_obj__8135;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8142 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8143 = this;
var h__2177__auto____8144 = this__8143.__hash;
if(!((h__2177__auto____8144 == null)))
{return h__2177__auto____8144;
} else
{var h__2177__auto____8145 = cljs.core.hash_imap.call(null,coll);
this__8143.__hash = h__2177__auto____8145;
return h__2177__auto____8145;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8146 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8147 = this;
if((function (){var and__3822__auto____8148 = goog.isString(k);
if(and__3822__auto____8148)
{return !((cljs.core.scan_array.call(null,1,k,this__8147.keys) == null));
} else
{return and__3822__auto____8148;
}
})())
{return (this__8147.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8149 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8150 = (this__8149.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8150)
{return or__3824__auto____8150;
} else
{return (this__8149.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8149.keys) == null)))
{var new_strobj__8151 = cljs.core.obj_clone.call(null,this__8149.strobj,this__8149.keys);
(new_strobj__8151[k] = v);
return (new cljs.core.ObjMap(this__8149.meta,this__8149.keys,new_strobj__8151,(this__8149.update_count + 1),null));
} else
{var new_strobj__8152 = cljs.core.obj_clone.call(null,this__8149.strobj,this__8149.keys);
var new_keys__8153 = this__8149.keys.slice();
(new_strobj__8152[k] = v);
new_keys__8153.push(k);
return (new cljs.core.ObjMap(this__8149.meta,new_keys__8153,new_strobj__8152,(this__8149.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8154 = this;
if((function (){var and__3822__auto____8155 = goog.isString(k);
if(and__3822__auto____8155)
{return !((cljs.core.scan_array.call(null,1,k,this__8154.keys) == null));
} else
{return and__3822__auto____8155;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8177 = null;
var G__8177__2 = (function (this_sym8156,k){
var this__8158 = this;
var this_sym8156__8159 = this;
var coll__8160 = this_sym8156__8159;
return coll__8160.cljs$core$ILookup$_lookup$arity$2(coll__8160,k);
});
var G__8177__3 = (function (this_sym8157,k,not_found){
var this__8158 = this;
var this_sym8157__8161 = this;
var coll__8162 = this_sym8157__8161;
return coll__8162.cljs$core$ILookup$_lookup$arity$3(coll__8162,k,not_found);
});
G__8177 = function(this_sym8157,k,not_found){
switch(arguments.length){
case 2:
return G__8177__2.call(this,this_sym8157,k);
case 3:
return G__8177__3.call(this,this_sym8157,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8177;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8140,args8141){
var this__8163 = this;
return this_sym8140.call.apply(this_sym8140,[this_sym8140].concat(args8141.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8164 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8165 = this;
var this__8166 = this;
return cljs.core.pr_str.call(null,this__8166);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8167 = this;
if((this__8167.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8130_SHARP_){
return cljs.core.vector.call(null,p1__8130_SHARP_,(this__8167.strobj[p1__8130_SHARP_]));
}),this__8167.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8168 = this;
return this__8168.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8169 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8170 = this;
return (new cljs.core.ObjMap(meta,this__8170.keys,this__8170.strobj,this__8170.update_count,this__8170.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8171 = this;
return this__8171.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8172 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8172.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8173 = this;
if((function (){var and__3822__auto____8174 = goog.isString(k);
if(and__3822__auto____8174)
{return !((cljs.core.scan_array.call(null,1,k,this__8173.keys) == null));
} else
{return and__3822__auto____8174;
}
})())
{var new_keys__8175 = this__8173.keys.slice();
var new_strobj__8176 = cljs.core.obj_clone.call(null,this__8173.strobj,this__8173.keys);
new_keys__8175.splice(cljs.core.scan_array.call(null,1,k,new_keys__8175),1);
cljs.core.js_delete.call(null,new_strobj__8176,k);
return (new cljs.core.ObjMap(this__8173.meta,new_keys__8175,new_strobj__8176,(this__8173.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8181 = this;
var h__2177__auto____8182 = this__8181.__hash;
if(!((h__2177__auto____8182 == null)))
{return h__2177__auto____8182;
} else
{var h__2177__auto____8183 = cljs.core.hash_imap.call(null,coll);
this__8181.__hash = h__2177__auto____8183;
return h__2177__auto____8183;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8184 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8185 = this;
var bucket__8186 = (this__8185.hashobj[cljs.core.hash.call(null,k)]);
var i__8187 = (cljs.core.truth_(bucket__8186)?cljs.core.scan_array.call(null,2,k,bucket__8186):null);
if(cljs.core.truth_(i__8187))
{return (bucket__8186[(i__8187 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8188 = this;
var h__8189 = cljs.core.hash.call(null,k);
var bucket__8190 = (this__8188.hashobj[h__8189]);
if(cljs.core.truth_(bucket__8190))
{var new_bucket__8191 = bucket__8190.slice();
var new_hashobj__8192 = goog.object.clone(this__8188.hashobj);
(new_hashobj__8192[h__8189] = new_bucket__8191);
var temp__3971__auto____8193 = cljs.core.scan_array.call(null,2,k,new_bucket__8191);
if(cljs.core.truth_(temp__3971__auto____8193))
{var i__8194 = temp__3971__auto____8193;
(new_bucket__8191[(i__8194 + 1)] = v);
return (new cljs.core.HashMap(this__8188.meta,this__8188.count,new_hashobj__8192,null));
} else
{new_bucket__8191.push(k,v);
return (new cljs.core.HashMap(this__8188.meta,(this__8188.count + 1),new_hashobj__8192,null));
}
} else
{var new_hashobj__8195 = goog.object.clone(this__8188.hashobj);
(new_hashobj__8195[h__8189] = [k,v]);
return (new cljs.core.HashMap(this__8188.meta,(this__8188.count + 1),new_hashobj__8195,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8196 = this;
var bucket__8197 = (this__8196.hashobj[cljs.core.hash.call(null,k)]);
var i__8198 = (cljs.core.truth_(bucket__8197)?cljs.core.scan_array.call(null,2,k,bucket__8197):null);
if(cljs.core.truth_(i__8198))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8223 = null;
var G__8223__2 = (function (this_sym8199,k){
var this__8201 = this;
var this_sym8199__8202 = this;
var coll__8203 = this_sym8199__8202;
return coll__8203.cljs$core$ILookup$_lookup$arity$2(coll__8203,k);
});
var G__8223__3 = (function (this_sym8200,k,not_found){
var this__8201 = this;
var this_sym8200__8204 = this;
var coll__8205 = this_sym8200__8204;
return coll__8205.cljs$core$ILookup$_lookup$arity$3(coll__8205,k,not_found);
});
G__8223 = function(this_sym8200,k,not_found){
switch(arguments.length){
case 2:
return G__8223__2.call(this,this_sym8200,k);
case 3:
return G__8223__3.call(this,this_sym8200,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8223;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8179,args8180){
var this__8206 = this;
return this_sym8179.call.apply(this_sym8179,[this_sym8179].concat(args8180.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8207 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8208 = this;
var this__8209 = this;
return cljs.core.pr_str.call(null,this__8209);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8210 = this;
if((this__8210.count > 0))
{var hashes__8211 = cljs.core.js_keys.call(null,this__8210.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8178_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8210.hashobj[p1__8178_SHARP_])));
}),hashes__8211);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8212 = this;
return this__8212.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8213 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8214 = this;
return (new cljs.core.HashMap(meta,this__8214.count,this__8214.hashobj,this__8214.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8215 = this;
return this__8215.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8216 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8216.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8217 = this;
var h__8218 = cljs.core.hash.call(null,k);
var bucket__8219 = (this__8217.hashobj[h__8218]);
var i__8220 = (cljs.core.truth_(bucket__8219)?cljs.core.scan_array.call(null,2,k,bucket__8219):null);
if(cljs.core.not.call(null,i__8220))
{return coll;
} else
{var new_hashobj__8221 = goog.object.clone(this__8217.hashobj);
if((3 > bucket__8219.length))
{cljs.core.js_delete.call(null,new_hashobj__8221,h__8218);
} else
{var new_bucket__8222 = bucket__8219.slice();
new_bucket__8222.splice(i__8220,2);
(new_hashobj__8221[h__8218] = new_bucket__8222);
}
return (new cljs.core.HashMap(this__8217.meta,(this__8217.count - 1),new_hashobj__8221,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8224 = ks.length;
var i__8225 = 0;
var out__8226 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8225 < len__8224))
{{
var G__8227 = (i__8225 + 1);
var G__8228 = cljs.core.assoc.call(null,out__8226,(ks[i__8225]),(vs[i__8225]));
i__8225 = G__8227;
out__8226 = G__8228;
continue;
}
} else
{return out__8226;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8232 = m.arr;
var len__8233 = arr__8232.length;
var i__8234 = 0;
while(true){
if((len__8233 <= i__8234))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8232[i__8234]),k))
{return i__8234;
} else
{if("\uFDD0'else")
{{
var G__8235 = (i__8234 + 2);
i__8234 = G__8235;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8238 = this;
return (new cljs.core.TransientArrayMap({},this__8238.arr.length,this__8238.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8239 = this;
var h__2177__auto____8240 = this__8239.__hash;
if(!((h__2177__auto____8240 == null)))
{return h__2177__auto____8240;
} else
{var h__2177__auto____8241 = cljs.core.hash_imap.call(null,coll);
this__8239.__hash = h__2177__auto____8241;
return h__2177__auto____8241;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8242 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8243 = this;
var idx__8244 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8244 === -1))
{return not_found;
} else
{return (this__8243.arr[(idx__8244 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8245 = this;
var idx__8246 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8246 === -1))
{if((this__8245.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8245.meta,(this__8245.cnt + 1),(function (){var G__8247__8248 = this__8245.arr.slice();
G__8247__8248.push(k);
G__8247__8248.push(v);
return G__8247__8248;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8245.arr[(idx__8246 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8245.meta,this__8245.cnt,(function (){var G__8249__8250 = this__8245.arr.slice();
(G__8249__8250[(idx__8246 + 1)] = v);
return G__8249__8250;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8251 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8283 = null;
var G__8283__2 = (function (this_sym8252,k){
var this__8254 = this;
var this_sym8252__8255 = this;
var coll__8256 = this_sym8252__8255;
return coll__8256.cljs$core$ILookup$_lookup$arity$2(coll__8256,k);
});
var G__8283__3 = (function (this_sym8253,k,not_found){
var this__8254 = this;
var this_sym8253__8257 = this;
var coll__8258 = this_sym8253__8257;
return coll__8258.cljs$core$ILookup$_lookup$arity$3(coll__8258,k,not_found);
});
G__8283 = function(this_sym8253,k,not_found){
switch(arguments.length){
case 2:
return G__8283__2.call(this,this_sym8253,k);
case 3:
return G__8283__3.call(this,this_sym8253,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8283;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8236,args8237){
var this__8259 = this;
return this_sym8236.call.apply(this_sym8236,[this_sym8236].concat(args8237.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8260 = this;
var len__8261 = this__8260.arr.length;
var i__8262 = 0;
var init__8263 = init;
while(true){
if((i__8262 < len__8261))
{var init__8264 = f.call(null,init__8263,(this__8260.arr[i__8262]),(this__8260.arr[(i__8262 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8264))
{return cljs.core.deref.call(null,init__8264);
} else
{{
var G__8284 = (i__8262 + 2);
var G__8285 = init__8264;
i__8262 = G__8284;
init__8263 = G__8285;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8265 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8266 = this;
var this__8267 = this;
return cljs.core.pr_str.call(null,this__8267);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8268 = this;
if((this__8268.cnt > 0))
{var len__8269 = this__8268.arr.length;
var array_map_seq__8270 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8269))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8268.arr[i]),(this__8268.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8270.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8271 = this;
return this__8271.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8272 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8273 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8273.cnt,this__8273.arr,this__8273.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8274 = this;
return this__8274.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8275 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8275.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8276 = this;
var idx__8277 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8277 >= 0))
{var len__8278 = this__8276.arr.length;
var new_len__8279 = (len__8278 - 2);
if((new_len__8279 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8280 = cljs.core.make_array.call(null,new_len__8279);
var s__8281 = 0;
var d__8282 = 0;
while(true){
if((s__8281 >= len__8278))
{return (new cljs.core.PersistentArrayMap(this__8276.meta,(this__8276.cnt - 1),new_arr__8280,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8276.arr[s__8281])))
{{
var G__8286 = (s__8281 + 2);
var G__8287 = d__8282;
s__8281 = G__8286;
d__8282 = G__8287;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8280[d__8282] = (this__8276.arr[s__8281]));
(new_arr__8280[(d__8282 + 1)] = (this__8276.arr[(s__8281 + 1)]));
{
var G__8288 = (s__8281 + 2);
var G__8289 = (d__8282 + 2);
s__8281 = G__8288;
d__8282 = G__8289;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8290 = cljs.core.count.call(null,ks);
var i__8291 = 0;
var out__8292 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8291 < len__8290))
{{
var G__8293 = (i__8291 + 1);
var G__8294 = cljs.core.assoc_BANG_.call(null,out__8292,(ks[i__8291]),(vs[i__8291]));
i__8291 = G__8293;
out__8292 = G__8294;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8292);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8295 = this;
if(cljs.core.truth_(this__8295.editable_QMARK_))
{var idx__8296 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8296 >= 0))
{(this__8295.arr[idx__8296] = (this__8295.arr[(this__8295.len - 2)]));
(this__8295.arr[(idx__8296 + 1)] = (this__8295.arr[(this__8295.len - 1)]));
var G__8297__8298 = this__8295.arr;
G__8297__8298.pop();
G__8297__8298.pop();
G__8297__8298;
this__8295.len = (this__8295.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8299 = this;
if(cljs.core.truth_(this__8299.editable_QMARK_))
{var idx__8300 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8300 === -1))
{if(((this__8299.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8299.len = (this__8299.len + 2);
this__8299.arr.push(key);
this__8299.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8299.len,this__8299.arr),key,val);
}
} else
{if((val === (this__8299.arr[(idx__8300 + 1)])))
{return tcoll;
} else
{(this__8299.arr[(idx__8300 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8301 = this;
if(cljs.core.truth_(this__8301.editable_QMARK_))
{if((function (){var G__8302__8303 = o;
if(G__8302__8303)
{if((function (){var or__3824__auto____8304 = (G__8302__8303.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8304)
{return or__3824__auto____8304;
} else
{return G__8302__8303.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8302__8303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8302__8303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8302__8303);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8305 = cljs.core.seq.call(null,o);
var tcoll__8306 = tcoll;
while(true){
var temp__3971__auto____8307 = cljs.core.first.call(null,es__8305);
if(cljs.core.truth_(temp__3971__auto____8307))
{var e__8308 = temp__3971__auto____8307;
{
var G__8314 = cljs.core.next.call(null,es__8305);
var G__8315 = tcoll__8306.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8306,cljs.core.key.call(null,e__8308),cljs.core.val.call(null,e__8308));
es__8305 = G__8314;
tcoll__8306 = G__8315;
continue;
}
} else
{return tcoll__8306;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8309 = this;
if(cljs.core.truth_(this__8309.editable_QMARK_))
{this__8309.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8309.len,2),this__8309.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8310 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8311 = this;
if(cljs.core.truth_(this__8311.editable_QMARK_))
{var idx__8312 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8312 === -1))
{return not_found;
} else
{return (this__8311.arr[(idx__8312 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8313 = this;
if(cljs.core.truth_(this__8313.editable_QMARK_))
{return cljs.core.quot.call(null,this__8313.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8318 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8319 = 0;
while(true){
if((i__8319 < len))
{{
var G__8320 = cljs.core.assoc_BANG_.call(null,out__8318,(arr[i__8319]),(arr[(i__8319 + 1)]));
var G__8321 = (i__8319 + 2);
out__8318 = G__8320;
i__8319 = G__8321;
continue;
}
} else
{return out__8318;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2295__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8326__8327 = arr.slice();
(G__8326__8327[i] = a);
return G__8326__8327;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8328__8329 = arr.slice();
(G__8328__8329[i] = a);
(G__8328__8329[j] = b);
return G__8328__8329;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8331 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8331,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8331,(2 * i),(new_arr__8331.length - (2 * i)));
return new_arr__8331;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8334 = inode.ensure_editable(edit);
(editable__8334.arr[i] = a);
return editable__8334;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8335 = inode.ensure_editable(edit);
(editable__8335.arr[i] = a);
(editable__8335.arr[j] = b);
return editable__8335;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8342 = arr.length;
var i__8343 = 0;
var init__8344 = init;
while(true){
if((i__8343 < len__8342))
{var init__8347 = (function (){var k__8345 = (arr[i__8343]);
if(!((k__8345 == null)))
{return f.call(null,init__8344,k__8345,(arr[(i__8343 + 1)]));
} else
{var node__8346 = (arr[(i__8343 + 1)]);
if(!((node__8346 == null)))
{return node__8346.kv_reduce(f,init__8344);
} else
{return init__8344;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8347))
{return cljs.core.deref.call(null,init__8347);
} else
{{
var G__8348 = (i__8343 + 2);
var G__8349 = init__8347;
i__8343 = G__8348;
init__8344 = G__8349;
continue;
}
}
} else
{return init__8344;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8350 = this;
var inode__8351 = this;
if((this__8350.bitmap === bit))
{return null;
} else
{var editable__8352 = inode__8351.ensure_editable(e);
var earr__8353 = editable__8352.arr;
var len__8354 = earr__8353.length;
editable__8352.bitmap = (bit ^ editable__8352.bitmap);
cljs.core.array_copy.call(null,earr__8353,(2 * (i + 1)),earr__8353,(2 * i),(len__8354 - (2 * (i + 1))));
(earr__8353[(len__8354 - 2)] = null);
(earr__8353[(len__8354 - 1)] = null);
return editable__8352;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8355 = this;
var inode__8356 = this;
var bit__8357 = (1 << ((hash >>> shift) & 0x01f));
var idx__8358 = cljs.core.bitmap_indexed_node_index.call(null,this__8355.bitmap,bit__8357);
if(((this__8355.bitmap & bit__8357) === 0))
{var n__8359 = cljs.core.bit_count.call(null,this__8355.bitmap);
if(((2 * n__8359) < this__8355.arr.length))
{var editable__8360 = inode__8356.ensure_editable(edit);
var earr__8361 = editable__8360.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8361,(2 * idx__8358),earr__8361,(2 * (idx__8358 + 1)),(2 * (n__8359 - idx__8358)));
(earr__8361[(2 * idx__8358)] = key);
(earr__8361[((2 * idx__8358) + 1)] = val);
editable__8360.bitmap = (editable__8360.bitmap | bit__8357);
return editable__8360;
} else
{if((n__8359 >= 16))
{var nodes__8362 = cljs.core.make_array.call(null,32);
var jdx__8363 = ((hash >>> shift) & 0x01f);
(nodes__8362[jdx__8363] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8364 = 0;
var j__8365 = 0;
while(true){
if((i__8364 < 32))
{if((((this__8355.bitmap >>> i__8364) & 1) === 0))
{{
var G__8418 = (i__8364 + 1);
var G__8419 = j__8365;
i__8364 = G__8418;
j__8365 = G__8419;
continue;
}
} else
{(nodes__8362[i__8364] = ((!(((this__8355.arr[j__8365]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8355.arr[j__8365])),(this__8355.arr[j__8365]),(this__8355.arr[(j__8365 + 1)]),added_leaf_QMARK_):(this__8355.arr[(j__8365 + 1)])));
{
var G__8420 = (i__8364 + 1);
var G__8421 = (j__8365 + 2);
i__8364 = G__8420;
j__8365 = G__8421;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8359 + 1),nodes__8362));
} else
{if("\uFDD0'else")
{var new_arr__8366 = cljs.core.make_array.call(null,(2 * (n__8359 + 4)));
cljs.core.array_copy.call(null,this__8355.arr,0,new_arr__8366,0,(2 * idx__8358));
(new_arr__8366[(2 * idx__8358)] = key);
(new_arr__8366[((2 * idx__8358) + 1)] = val);
cljs.core.array_copy.call(null,this__8355.arr,(2 * idx__8358),new_arr__8366,(2 * (idx__8358 + 1)),(2 * (n__8359 - idx__8358)));
added_leaf_QMARK_.val = true;
var editable__8367 = inode__8356.ensure_editable(edit);
editable__8367.arr = new_arr__8366;
editable__8367.bitmap = (editable__8367.bitmap | bit__8357);
return editable__8367;
} else
{return null;
}
}
}
} else
{var key_or_nil__8368 = (this__8355.arr[(2 * idx__8358)]);
var val_or_node__8369 = (this__8355.arr[((2 * idx__8358) + 1)]);
if((key_or_nil__8368 == null))
{var n__8370 = val_or_node__8369.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8370 === val_or_node__8369))
{return inode__8356;
} else
{return cljs.core.edit_and_set.call(null,inode__8356,edit,((2 * idx__8358) + 1),n__8370);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8368))
{if((val === val_or_node__8369))
{return inode__8356;
} else
{return cljs.core.edit_and_set.call(null,inode__8356,edit,((2 * idx__8358) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8356,edit,(2 * idx__8358),null,((2 * idx__8358) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8368,val_or_node__8369,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8371 = this;
var inode__8372 = this;
return cljs.core.create_inode_seq.call(null,this__8371.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8373 = this;
var inode__8374 = this;
var bit__8375 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8373.bitmap & bit__8375) === 0))
{return inode__8374;
} else
{var idx__8376 = cljs.core.bitmap_indexed_node_index.call(null,this__8373.bitmap,bit__8375);
var key_or_nil__8377 = (this__8373.arr[(2 * idx__8376)]);
var val_or_node__8378 = (this__8373.arr[((2 * idx__8376) + 1)]);
if((key_or_nil__8377 == null))
{var n__8379 = val_or_node__8378.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8379 === val_or_node__8378))
{return inode__8374;
} else
{if(!((n__8379 == null)))
{return cljs.core.edit_and_set.call(null,inode__8374,edit,((2 * idx__8376) + 1),n__8379);
} else
{if((this__8373.bitmap === bit__8375))
{return null;
} else
{if("\uFDD0'else")
{return inode__8374.edit_and_remove_pair(edit,bit__8375,idx__8376);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8377))
{(removed_leaf_QMARK_[0] = true);
return inode__8374.edit_and_remove_pair(edit,bit__8375,idx__8376);
} else
{if("\uFDD0'else")
{return inode__8374;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8380 = this;
var inode__8381 = this;
if((e === this__8380.edit))
{return inode__8381;
} else
{var n__8382 = cljs.core.bit_count.call(null,this__8380.bitmap);
var new_arr__8383 = cljs.core.make_array.call(null,(((n__8382 < 0))?4:(2 * (n__8382 + 1))));
cljs.core.array_copy.call(null,this__8380.arr,0,new_arr__8383,0,(2 * n__8382));
return (new cljs.core.BitmapIndexedNode(e,this__8380.bitmap,new_arr__8383));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8384 = this;
var inode__8385 = this;
return cljs.core.inode_kv_reduce.call(null,this__8384.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8386 = this;
var inode__8387 = this;
var bit__8388 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8386.bitmap & bit__8388) === 0))
{return not_found;
} else
{var idx__8389 = cljs.core.bitmap_indexed_node_index.call(null,this__8386.bitmap,bit__8388);
var key_or_nil__8390 = (this__8386.arr[(2 * idx__8389)]);
var val_or_node__8391 = (this__8386.arr[((2 * idx__8389) + 1)]);
if((key_or_nil__8390 == null))
{return val_or_node__8391.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8390))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8390,val_or_node__8391], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8392 = this;
var inode__8393 = this;
var bit__8394 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8392.bitmap & bit__8394) === 0))
{return inode__8393;
} else
{var idx__8395 = cljs.core.bitmap_indexed_node_index.call(null,this__8392.bitmap,bit__8394);
var key_or_nil__8396 = (this__8392.arr[(2 * idx__8395)]);
var val_or_node__8397 = (this__8392.arr[((2 * idx__8395) + 1)]);
if((key_or_nil__8396 == null))
{var n__8398 = val_or_node__8397.inode_without((shift + 5),hash,key);
if((n__8398 === val_or_node__8397))
{return inode__8393;
} else
{if(!((n__8398 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8392.bitmap,cljs.core.clone_and_set.call(null,this__8392.arr,((2 * idx__8395) + 1),n__8398)));
} else
{if((this__8392.bitmap === bit__8394))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8392.bitmap ^ bit__8394),cljs.core.remove_pair.call(null,this__8392.arr,idx__8395)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8396))
{return (new cljs.core.BitmapIndexedNode(null,(this__8392.bitmap ^ bit__8394),cljs.core.remove_pair.call(null,this__8392.arr,idx__8395)));
} else
{if("\uFDD0'else")
{return inode__8393;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8399 = this;
var inode__8400 = this;
var bit__8401 = (1 << ((hash >>> shift) & 0x01f));
var idx__8402 = cljs.core.bitmap_indexed_node_index.call(null,this__8399.bitmap,bit__8401);
if(((this__8399.bitmap & bit__8401) === 0))
{var n__8403 = cljs.core.bit_count.call(null,this__8399.bitmap);
if((n__8403 >= 16))
{var nodes__8404 = cljs.core.make_array.call(null,32);
var jdx__8405 = ((hash >>> shift) & 0x01f);
(nodes__8404[jdx__8405] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8406 = 0;
var j__8407 = 0;
while(true){
if((i__8406 < 32))
{if((((this__8399.bitmap >>> i__8406) & 1) === 0))
{{
var G__8422 = (i__8406 + 1);
var G__8423 = j__8407;
i__8406 = G__8422;
j__8407 = G__8423;
continue;
}
} else
{(nodes__8404[i__8406] = ((!(((this__8399.arr[j__8407]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8399.arr[j__8407])),(this__8399.arr[j__8407]),(this__8399.arr[(j__8407 + 1)]),added_leaf_QMARK_):(this__8399.arr[(j__8407 + 1)])));
{
var G__8424 = (i__8406 + 1);
var G__8425 = (j__8407 + 2);
i__8406 = G__8424;
j__8407 = G__8425;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8403 + 1),nodes__8404));
} else
{var new_arr__8408 = cljs.core.make_array.call(null,(2 * (n__8403 + 1)));
cljs.core.array_copy.call(null,this__8399.arr,0,new_arr__8408,0,(2 * idx__8402));
(new_arr__8408[(2 * idx__8402)] = key);
(new_arr__8408[((2 * idx__8402) + 1)] = val);
cljs.core.array_copy.call(null,this__8399.arr,(2 * idx__8402),new_arr__8408,(2 * (idx__8402 + 1)),(2 * (n__8403 - idx__8402)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8399.bitmap | bit__8401),new_arr__8408));
}
} else
{var key_or_nil__8409 = (this__8399.arr[(2 * idx__8402)]);
var val_or_node__8410 = (this__8399.arr[((2 * idx__8402) + 1)]);
if((key_or_nil__8409 == null))
{var n__8411 = val_or_node__8410.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8411 === val_or_node__8410))
{return inode__8400;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8399.bitmap,cljs.core.clone_and_set.call(null,this__8399.arr,((2 * idx__8402) + 1),n__8411)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8409))
{if((val === val_or_node__8410))
{return inode__8400;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8399.bitmap,cljs.core.clone_and_set.call(null,this__8399.arr,((2 * idx__8402) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8399.bitmap,cljs.core.clone_and_set.call(null,this__8399.arr,(2 * idx__8402),null,((2 * idx__8402) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8409,val_or_node__8410,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8412 = this;
var inode__8413 = this;
var bit__8414 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8412.bitmap & bit__8414) === 0))
{return not_found;
} else
{var idx__8415 = cljs.core.bitmap_indexed_node_index.call(null,this__8412.bitmap,bit__8414);
var key_or_nil__8416 = (this__8412.arr[(2 * idx__8415)]);
var val_or_node__8417 = (this__8412.arr[((2 * idx__8415) + 1)]);
if((key_or_nil__8416 == null))
{return val_or_node__8417.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8416))
{return val_or_node__8417;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8433 = array_node.arr;
var len__8434 = (2 * (array_node.cnt - 1));
var new_arr__8435 = cljs.core.make_array.call(null,len__8434);
var i__8436 = 0;
var j__8437 = 1;
var bitmap__8438 = 0;
while(true){
if((i__8436 < len__8434))
{if((function (){var and__3822__auto____8439 = !((i__8436 === idx));
if(and__3822__auto____8439)
{return !(((arr__8433[i__8436]) == null));
} else
{return and__3822__auto____8439;
}
})())
{(new_arr__8435[j__8437] = (arr__8433[i__8436]));
{
var G__8440 = (i__8436 + 1);
var G__8441 = (j__8437 + 2);
var G__8442 = (bitmap__8438 | (1 << i__8436));
i__8436 = G__8440;
j__8437 = G__8441;
bitmap__8438 = G__8442;
continue;
}
} else
{{
var G__8443 = (i__8436 + 1);
var G__8444 = j__8437;
var G__8445 = bitmap__8438;
i__8436 = G__8443;
j__8437 = G__8444;
bitmap__8438 = G__8445;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8438,new_arr__8435));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8446 = this;
var inode__8447 = this;
var idx__8448 = ((hash >>> shift) & 0x01f);
var node__8449 = (this__8446.arr[idx__8448]);
if((node__8449 == null))
{var editable__8450 = cljs.core.edit_and_set.call(null,inode__8447,edit,idx__8448,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8450.cnt = (editable__8450.cnt + 1);
return editable__8450;
} else
{var n__8451 = node__8449.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8451 === node__8449))
{return inode__8447;
} else
{return cljs.core.edit_and_set.call(null,inode__8447,edit,idx__8448,n__8451);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8452 = this;
var inode__8453 = this;
return cljs.core.create_array_node_seq.call(null,this__8452.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8454 = this;
var inode__8455 = this;
var idx__8456 = ((hash >>> shift) & 0x01f);
var node__8457 = (this__8454.arr[idx__8456]);
if((node__8457 == null))
{return inode__8455;
} else
{var n__8458 = node__8457.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8458 === node__8457))
{return inode__8455;
} else
{if((n__8458 == null))
{if((this__8454.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8455,edit,idx__8456);
} else
{var editable__8459 = cljs.core.edit_and_set.call(null,inode__8455,edit,idx__8456,n__8458);
editable__8459.cnt = (editable__8459.cnt - 1);
return editable__8459;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8455,edit,idx__8456,n__8458);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8460 = this;
var inode__8461 = this;
if((e === this__8460.edit))
{return inode__8461;
} else
{return (new cljs.core.ArrayNode(e,this__8460.cnt,this__8460.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8462 = this;
var inode__8463 = this;
var len__8464 = this__8462.arr.length;
var i__8465 = 0;
var init__8466 = init;
while(true){
if((i__8465 < len__8464))
{var node__8467 = (this__8462.arr[i__8465]);
if(!((node__8467 == null)))
{var init__8468 = node__8467.kv_reduce(f,init__8466);
if(cljs.core.reduced_QMARK_.call(null,init__8468))
{return cljs.core.deref.call(null,init__8468);
} else
{{
var G__8487 = (i__8465 + 1);
var G__8488 = init__8468;
i__8465 = G__8487;
init__8466 = G__8488;
continue;
}
}
} else
{return null;
}
} else
{return init__8466;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8469 = this;
var inode__8470 = this;
var idx__8471 = ((hash >>> shift) & 0x01f);
var node__8472 = (this__8469.arr[idx__8471]);
if(!((node__8472 == null)))
{return node__8472.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8473 = this;
var inode__8474 = this;
var idx__8475 = ((hash >>> shift) & 0x01f);
var node__8476 = (this__8473.arr[idx__8475]);
if(!((node__8476 == null)))
{var n__8477 = node__8476.inode_without((shift + 5),hash,key);
if((n__8477 === node__8476))
{return inode__8474;
} else
{if((n__8477 == null))
{if((this__8473.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8474,null,idx__8475);
} else
{return (new cljs.core.ArrayNode(null,(this__8473.cnt - 1),cljs.core.clone_and_set.call(null,this__8473.arr,idx__8475,n__8477)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8473.cnt,cljs.core.clone_and_set.call(null,this__8473.arr,idx__8475,n__8477)));
} else
{return null;
}
}
}
} else
{return inode__8474;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8478 = this;
var inode__8479 = this;
var idx__8480 = ((hash >>> shift) & 0x01f);
var node__8481 = (this__8478.arr[idx__8480]);
if((node__8481 == null))
{return (new cljs.core.ArrayNode(null,(this__8478.cnt + 1),cljs.core.clone_and_set.call(null,this__8478.arr,idx__8480,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8482 = node__8481.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8482 === node__8481))
{return inode__8479;
} else
{return (new cljs.core.ArrayNode(null,this__8478.cnt,cljs.core.clone_and_set.call(null,this__8478.arr,idx__8480,n__8482)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8483 = this;
var inode__8484 = this;
var idx__8485 = ((hash >>> shift) & 0x01f);
var node__8486 = (this__8483.arr[idx__8485]);
if(!((node__8486 == null)))
{return node__8486.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8491 = (2 * cnt);
var i__8492 = 0;
while(true){
if((i__8492 < lim__8491))
{if(cljs.core.key_test.call(null,key,(arr[i__8492])))
{return i__8492;
} else
{{
var G__8493 = (i__8492 + 2);
i__8492 = G__8493;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8494 = this;
var inode__8495 = this;
if((hash === this__8494.collision_hash))
{var idx__8496 = cljs.core.hash_collision_node_find_index.call(null,this__8494.arr,this__8494.cnt,key);
if((idx__8496 === -1))
{if((this__8494.arr.length > (2 * this__8494.cnt)))
{var editable__8497 = cljs.core.edit_and_set.call(null,inode__8495,edit,(2 * this__8494.cnt),key,((2 * this__8494.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8497.cnt = (editable__8497.cnt + 1);
return editable__8497;
} else
{var len__8498 = this__8494.arr.length;
var new_arr__8499 = cljs.core.make_array.call(null,(len__8498 + 2));
cljs.core.array_copy.call(null,this__8494.arr,0,new_arr__8499,0,len__8498);
(new_arr__8499[len__8498] = key);
(new_arr__8499[(len__8498 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8495.ensure_editable_array(edit,(this__8494.cnt + 1),new_arr__8499);
}
} else
{if(((this__8494.arr[(idx__8496 + 1)]) === val))
{return inode__8495;
} else
{return cljs.core.edit_and_set.call(null,inode__8495,edit,(idx__8496 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8494.collision_hash >>> shift) & 0x01f)),[null,inode__8495,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8500 = this;
var inode__8501 = this;
return cljs.core.create_inode_seq.call(null,this__8500.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8502 = this;
var inode__8503 = this;
var idx__8504 = cljs.core.hash_collision_node_find_index.call(null,this__8502.arr,this__8502.cnt,key);
if((idx__8504 === -1))
{return inode__8503;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8502.cnt === 1))
{return null;
} else
{var editable__8505 = inode__8503.ensure_editable(edit);
var earr__8506 = editable__8505.arr;
(earr__8506[idx__8504] = (earr__8506[((2 * this__8502.cnt) - 2)]));
(earr__8506[(idx__8504 + 1)] = (earr__8506[((2 * this__8502.cnt) - 1)]));
(earr__8506[((2 * this__8502.cnt) - 1)] = null);
(earr__8506[((2 * this__8502.cnt) - 2)] = null);
editable__8505.cnt = (editable__8505.cnt - 1);
return editable__8505;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8507 = this;
var inode__8508 = this;
if((e === this__8507.edit))
{return inode__8508;
} else
{var new_arr__8509 = cljs.core.make_array.call(null,(2 * (this__8507.cnt + 1)));
cljs.core.array_copy.call(null,this__8507.arr,0,new_arr__8509,0,(2 * this__8507.cnt));
return (new cljs.core.HashCollisionNode(e,this__8507.collision_hash,this__8507.cnt,new_arr__8509));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8510 = this;
var inode__8511 = this;
return cljs.core.inode_kv_reduce.call(null,this__8510.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8512 = this;
var inode__8513 = this;
var idx__8514 = cljs.core.hash_collision_node_find_index.call(null,this__8512.arr,this__8512.cnt,key);
if((idx__8514 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8512.arr[idx__8514])))
{return cljs.core.PersistentVector.fromArray([(this__8512.arr[idx__8514]),(this__8512.arr[(idx__8514 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8515 = this;
var inode__8516 = this;
var idx__8517 = cljs.core.hash_collision_node_find_index.call(null,this__8515.arr,this__8515.cnt,key);
if((idx__8517 === -1))
{return inode__8516;
} else
{if((this__8515.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8515.collision_hash,(this__8515.cnt - 1),cljs.core.remove_pair.call(null,this__8515.arr,cljs.core.quot.call(null,idx__8517,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8518 = this;
var inode__8519 = this;
if((hash === this__8518.collision_hash))
{var idx__8520 = cljs.core.hash_collision_node_find_index.call(null,this__8518.arr,this__8518.cnt,key);
if((idx__8520 === -1))
{var len__8521 = this__8518.arr.length;
var new_arr__8522 = cljs.core.make_array.call(null,(len__8521 + 2));
cljs.core.array_copy.call(null,this__8518.arr,0,new_arr__8522,0,len__8521);
(new_arr__8522[len__8521] = key);
(new_arr__8522[(len__8521 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8518.collision_hash,(this__8518.cnt + 1),new_arr__8522));
} else
{if(cljs.core._EQ_.call(null,(this__8518.arr[idx__8520]),val))
{return inode__8519;
} else
{return (new cljs.core.HashCollisionNode(null,this__8518.collision_hash,this__8518.cnt,cljs.core.clone_and_set.call(null,this__8518.arr,(idx__8520 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8518.collision_hash >>> shift) & 0x01f)),[null,inode__8519])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8523 = this;
var inode__8524 = this;
var idx__8525 = cljs.core.hash_collision_node_find_index.call(null,this__8523.arr,this__8523.cnt,key);
if((idx__8525 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8523.arr[idx__8525])))
{return (this__8523.arr[(idx__8525 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8526 = this;
var inode__8527 = this;
if((e === this__8526.edit))
{this__8526.arr = array;
this__8526.cnt = count;
return inode__8527;
} else
{return (new cljs.core.HashCollisionNode(this__8526.edit,this__8526.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8532 = cljs.core.hash.call(null,key1);
if((key1hash__8532 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8532,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8533 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8532,key1,val1,added_leaf_QMARK___8533).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8533);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8534 = cljs.core.hash.call(null,key1);
if((key1hash__8534 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8534,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8535 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8534,key1,val1,added_leaf_QMARK___8535).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8535);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8536 = this;
var h__2177__auto____8537 = this__8536.__hash;
if(!((h__2177__auto____8537 == null)))
{return h__2177__auto____8537;
} else
{var h__2177__auto____8538 = cljs.core.hash_coll.call(null,coll);
this__8536.__hash = h__2177__auto____8538;
return h__2177__auto____8538;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8539 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8540 = this;
var this__8541 = this;
return cljs.core.pr_str.call(null,this__8541);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8542 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8543 = this;
if((this__8543.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8543.nodes[this__8543.i]),(this__8543.nodes[(this__8543.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8543.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8544 = this;
if((this__8544.s == null))
{return cljs.core.create_inode_seq.call(null,this__8544.nodes,(this__8544.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8544.nodes,this__8544.i,cljs.core.next.call(null,this__8544.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8545 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8546 = this;
return (new cljs.core.NodeSeq(meta,this__8546.nodes,this__8546.i,this__8546.s,this__8546.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8547 = this;
return this__8547.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8548 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8548.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8555 = nodes.length;
var j__8556 = i;
while(true){
if((j__8556 < len__8555))
{if(!(((nodes[j__8556]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8556,null,null));
} else
{var temp__3971__auto____8557 = (nodes[(j__8556 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8557))
{var node__8558 = temp__3971__auto____8557;
var temp__3971__auto____8559 = node__8558.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8559))
{var node_seq__8560 = temp__3971__auto____8559;
return (new cljs.core.NodeSeq(null,nodes,(j__8556 + 2),node_seq__8560,null));
} else
{{
var G__8561 = (j__8556 + 2);
j__8556 = G__8561;
continue;
}
}
} else
{{
var G__8562 = (j__8556 + 2);
j__8556 = G__8562;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8563 = this;
var h__2177__auto____8564 = this__8563.__hash;
if(!((h__2177__auto____8564 == null)))
{return h__2177__auto____8564;
} else
{var h__2177__auto____8565 = cljs.core.hash_coll.call(null,coll);
this__8563.__hash = h__2177__auto____8565;
return h__2177__auto____8565;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8566 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8567 = this;
var this__8568 = this;
return cljs.core.pr_str.call(null,this__8568);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8569 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8570 = this;
return cljs.core.first.call(null,this__8570.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8571 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8571.nodes,this__8571.i,cljs.core.next.call(null,this__8571.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8572 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8573 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8573.nodes,this__8573.i,this__8573.s,this__8573.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8574 = this;
return this__8574.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8575 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8575.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8582 = nodes.length;
var j__8583 = i;
while(true){
if((j__8583 < len__8582))
{var temp__3971__auto____8584 = (nodes[j__8583]);
if(cljs.core.truth_(temp__3971__auto____8584))
{var nj__8585 = temp__3971__auto____8584;
var temp__3971__auto____8586 = nj__8585.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8586))
{var ns__8587 = temp__3971__auto____8586;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8583 + 1),ns__8587,null));
} else
{{
var G__8588 = (j__8583 + 1);
j__8583 = G__8588;
continue;
}
}
} else
{{
var G__8589 = (j__8583 + 1);
j__8583 = G__8589;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8592 = this;
return (new cljs.core.TransientHashMap({},this__8592.root,this__8592.cnt,this__8592.has_nil_QMARK_,this__8592.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8593 = this;
var h__2177__auto____8594 = this__8593.__hash;
if(!((h__2177__auto____8594 == null)))
{return h__2177__auto____8594;
} else
{var h__2177__auto____8595 = cljs.core.hash_imap.call(null,coll);
this__8593.__hash = h__2177__auto____8595;
return h__2177__auto____8595;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8596 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8597 = this;
if((k == null))
{if(this__8597.has_nil_QMARK_)
{return this__8597.nil_val;
} else
{return not_found;
}
} else
{if((this__8597.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8597.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8598 = this;
if((k == null))
{if((function (){var and__3822__auto____8599 = this__8598.has_nil_QMARK_;
if(and__3822__auto____8599)
{return (v === this__8598.nil_val);
} else
{return and__3822__auto____8599;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8598.meta,((this__8598.has_nil_QMARK_)?this__8598.cnt:(this__8598.cnt + 1)),this__8598.root,true,v,null));
}
} else
{var added_leaf_QMARK___8600 = (new cljs.core.Box(false));
var new_root__8601 = (((this__8598.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8598.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8600);
if((new_root__8601 === this__8598.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8598.meta,((added_leaf_QMARK___8600.val)?(this__8598.cnt + 1):this__8598.cnt),new_root__8601,this__8598.has_nil_QMARK_,this__8598.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8602 = this;
if((k == null))
{return this__8602.has_nil_QMARK_;
} else
{if((this__8602.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8602.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8625 = null;
var G__8625__2 = (function (this_sym8603,k){
var this__8605 = this;
var this_sym8603__8606 = this;
var coll__8607 = this_sym8603__8606;
return coll__8607.cljs$core$ILookup$_lookup$arity$2(coll__8607,k);
});
var G__8625__3 = (function (this_sym8604,k,not_found){
var this__8605 = this;
var this_sym8604__8608 = this;
var coll__8609 = this_sym8604__8608;
return coll__8609.cljs$core$ILookup$_lookup$arity$3(coll__8609,k,not_found);
});
G__8625 = function(this_sym8604,k,not_found){
switch(arguments.length){
case 2:
return G__8625__2.call(this,this_sym8604,k);
case 3:
return G__8625__3.call(this,this_sym8604,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8625;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8590,args8591){
var this__8610 = this;
return this_sym8590.call.apply(this_sym8590,[this_sym8590].concat(args8591.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8611 = this;
var init__8612 = ((this__8611.has_nil_QMARK_)?f.call(null,init,null,this__8611.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8612))
{return cljs.core.deref.call(null,init__8612);
} else
{if(!((this__8611.root == null)))
{return this__8611.root.kv_reduce(f,init__8612);
} else
{if("\uFDD0'else")
{return init__8612;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8613 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8614 = this;
var this__8615 = this;
return cljs.core.pr_str.call(null,this__8615);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8616 = this;
if((this__8616.cnt > 0))
{var s__8617 = ((!((this__8616.root == null)))?this__8616.root.inode_seq():null);
if(this__8616.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8616.nil_val], true),s__8617);
} else
{return s__8617;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8618 = this;
return this__8618.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8619 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8620 = this;
return (new cljs.core.PersistentHashMap(meta,this__8620.cnt,this__8620.root,this__8620.has_nil_QMARK_,this__8620.nil_val,this__8620.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8621 = this;
return this__8621.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8622 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8622.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8623 = this;
if((k == null))
{if(this__8623.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8623.meta,(this__8623.cnt - 1),this__8623.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8623.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8624 = this__8623.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8624 === this__8623.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8623.meta,(this__8623.cnt - 1),new_root__8624,this__8623.has_nil_QMARK_,this__8623.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8626 = ks.length;
var i__8627 = 0;
var out__8628 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8627 < len__8626))
{{
var G__8629 = (i__8627 + 1);
var G__8630 = cljs.core.assoc_BANG_.call(null,out__8628,(ks[i__8627]),(vs[i__8627]));
i__8627 = G__8629;
out__8628 = G__8630;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8628);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8631 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8632 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8633 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8634 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8635 = this;
if((k == null))
{if(this__8635.has_nil_QMARK_)
{return this__8635.nil_val;
} else
{return null;
}
} else
{if((this__8635.root == null))
{return null;
} else
{return this__8635.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8636 = this;
if((k == null))
{if(this__8636.has_nil_QMARK_)
{return this__8636.nil_val;
} else
{return not_found;
}
} else
{if((this__8636.root == null))
{return not_found;
} else
{return this__8636.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8637 = this;
if(this__8637.edit)
{return this__8637.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8638 = this;
var tcoll__8639 = this;
if(this__8638.edit)
{if((function (){var G__8640__8641 = o;
if(G__8640__8641)
{if((function (){var or__3824__auto____8642 = (G__8640__8641.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8642)
{return or__3824__auto____8642;
} else
{return G__8640__8641.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8640__8641.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8640__8641);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8640__8641);
}
})())
{return tcoll__8639.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8643 = cljs.core.seq.call(null,o);
var tcoll__8644 = tcoll__8639;
while(true){
var temp__3971__auto____8645 = cljs.core.first.call(null,es__8643);
if(cljs.core.truth_(temp__3971__auto____8645))
{var e__8646 = temp__3971__auto____8645;
{
var G__8657 = cljs.core.next.call(null,es__8643);
var G__8658 = tcoll__8644.assoc_BANG_(cljs.core.key.call(null,e__8646),cljs.core.val.call(null,e__8646));
es__8643 = G__8657;
tcoll__8644 = G__8658;
continue;
}
} else
{return tcoll__8644;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8647 = this;
var tcoll__8648 = this;
if(this__8647.edit)
{if((k == null))
{if((this__8647.nil_val === v))
{} else
{this__8647.nil_val = v;
}
if(this__8647.has_nil_QMARK_)
{} else
{this__8647.count = (this__8647.count + 1);
this__8647.has_nil_QMARK_ = true;
}
return tcoll__8648;
} else
{var added_leaf_QMARK___8649 = (new cljs.core.Box(false));
var node__8650 = (((this__8647.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8647.root).inode_assoc_BANG_(this__8647.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8649);
if((node__8650 === this__8647.root))
{} else
{this__8647.root = node__8650;
}
if(added_leaf_QMARK___8649.val)
{this__8647.count = (this__8647.count + 1);
} else
{}
return tcoll__8648;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8651 = this;
var tcoll__8652 = this;
if(this__8651.edit)
{if((k == null))
{if(this__8651.has_nil_QMARK_)
{this__8651.has_nil_QMARK_ = false;
this__8651.nil_val = null;
this__8651.count = (this__8651.count - 1);
return tcoll__8652;
} else
{return tcoll__8652;
}
} else
{if((this__8651.root == null))
{return tcoll__8652;
} else
{var removed_leaf_QMARK___8653 = (new cljs.core.Box(false));
var node__8654 = this__8651.root.inode_without_BANG_(this__8651.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8653);
if((node__8654 === this__8651.root))
{} else
{this__8651.root = node__8654;
}
if(cljs.core.truth_((removed_leaf_QMARK___8653[0])))
{this__8651.count = (this__8651.count - 1);
} else
{}
return tcoll__8652;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8655 = this;
var tcoll__8656 = this;
if(this__8655.edit)
{this__8655.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8655.count,this__8655.root,this__8655.has_nil_QMARK_,this__8655.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8661 = node;
var stack__8662 = stack;
while(true){
if(!((t__8661 == null)))
{{
var G__8663 = ((ascending_QMARK_)?t__8661.left:t__8661.right);
var G__8664 = cljs.core.conj.call(null,stack__8662,t__8661);
t__8661 = G__8663;
stack__8662 = G__8664;
continue;
}
} else
{return stack__8662;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8665 = this;
var h__2177__auto____8666 = this__8665.__hash;
if(!((h__2177__auto____8666 == null)))
{return h__2177__auto____8666;
} else
{var h__2177__auto____8667 = cljs.core.hash_coll.call(null,coll);
this__8665.__hash = h__2177__auto____8667;
return h__2177__auto____8667;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8668 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8669 = this;
var this__8670 = this;
return cljs.core.pr_str.call(null,this__8670);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8671 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8672 = this;
if((this__8672.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8672.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8673 = this;
return cljs.core.peek.call(null,this__8673.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8674 = this;
var t__8675 = cljs.core.first.call(null,this__8674.stack);
var next_stack__8676 = cljs.core.tree_map_seq_push.call(null,((this__8674.ascending_QMARK_)?t__8675.right:t__8675.left),cljs.core.next.call(null,this__8674.stack),this__8674.ascending_QMARK_);
if(!((next_stack__8676 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8676,this__8674.ascending_QMARK_,(this__8674.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8677 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8678 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8678.stack,this__8678.ascending_QMARK_,this__8678.cnt,this__8678.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8679 = this;
return this__8679.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8681 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8681)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8681;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8683 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8683)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8683;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8687 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8687))
{return cljs.core.deref.call(null,init__8687);
} else
{var init__8688 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8687):init__8687);
if(cljs.core.reduced_QMARK_.call(null,init__8688))
{return cljs.core.deref.call(null,init__8688);
} else
{var init__8689 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8688):init__8688);
if(cljs.core.reduced_QMARK_.call(null,init__8689))
{return cljs.core.deref.call(null,init__8689);
} else
{return init__8689;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8692 = this;
var h__2177__auto____8693 = this__8692.__hash;
if(!((h__2177__auto____8693 == null)))
{return h__2177__auto____8693;
} else
{var h__2177__auto____8694 = cljs.core.hash_coll.call(null,coll);
this__8692.__hash = h__2177__auto____8694;
return h__2177__auto____8694;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8695 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8696 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8697 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8697.key,this__8697.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8745 = null;
var G__8745__2 = (function (this_sym8698,k){
var this__8700 = this;
var this_sym8698__8701 = this;
var node__8702 = this_sym8698__8701;
return node__8702.cljs$core$ILookup$_lookup$arity$2(node__8702,k);
});
var G__8745__3 = (function (this_sym8699,k,not_found){
var this__8700 = this;
var this_sym8699__8703 = this;
var node__8704 = this_sym8699__8703;
return node__8704.cljs$core$ILookup$_lookup$arity$3(node__8704,k,not_found);
});
G__8745 = function(this_sym8699,k,not_found){
switch(arguments.length){
case 2:
return G__8745__2.call(this,this_sym8699,k);
case 3:
return G__8745__3.call(this,this_sym8699,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8745;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8690,args8691){
var this__8705 = this;
return this_sym8690.call.apply(this_sym8690,[this_sym8690].concat(args8691.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8706 = this;
return cljs.core.PersistentVector.fromArray([this__8706.key,this__8706.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8707 = this;
return this__8707.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8708 = this;
return this__8708.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8709 = this;
var node__8710 = this;
return ins.balance_right(node__8710);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8711 = this;
var node__8712 = this;
return (new cljs.core.RedNode(this__8711.key,this__8711.val,this__8711.left,this__8711.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8713 = this;
var node__8714 = this;
return cljs.core.balance_right_del.call(null,this__8713.key,this__8713.val,this__8713.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8715 = this;
var node__8716 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8717 = this;
var node__8718 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8718,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8719 = this;
var node__8720 = this;
return cljs.core.balance_left_del.call(null,this__8719.key,this__8719.val,del,this__8719.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8721 = this;
var node__8722 = this;
return ins.balance_left(node__8722);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8723 = this;
var node__8724 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8724,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8746 = null;
var G__8746__0 = (function (){
var this__8725 = this;
var this__8727 = this;
return cljs.core.pr_str.call(null,this__8727);
});
G__8746 = function(){
switch(arguments.length){
case 0:
return G__8746__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8746;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8728 = this;
var node__8729 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8729,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8730 = this;
var node__8731 = this;
return node__8731;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8732 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8733 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8734 = this;
return cljs.core.list.call(null,this__8734.key,this__8734.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8735 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8736 = this;
return this__8736.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8737 = this;
return cljs.core.PersistentVector.fromArray([this__8737.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8738 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8738.key,this__8738.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8739 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8740 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8740.key,this__8740.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8741 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8742 = this;
if((n === 0))
{return this__8742.key;
} else
{if((n === 1))
{return this__8742.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8743 = this;
if((n === 0))
{return this__8743.key;
} else
{if((n === 1))
{return this__8743.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8744 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8749 = this;
var h__2177__auto____8750 = this__8749.__hash;
if(!((h__2177__auto____8750 == null)))
{return h__2177__auto____8750;
} else
{var h__2177__auto____8751 = cljs.core.hash_coll.call(null,coll);
this__8749.__hash = h__2177__auto____8751;
return h__2177__auto____8751;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8752 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8753 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8754 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8754.key,this__8754.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8802 = null;
var G__8802__2 = (function (this_sym8755,k){
var this__8757 = this;
var this_sym8755__8758 = this;
var node__8759 = this_sym8755__8758;
return node__8759.cljs$core$ILookup$_lookup$arity$2(node__8759,k);
});
var G__8802__3 = (function (this_sym8756,k,not_found){
var this__8757 = this;
var this_sym8756__8760 = this;
var node__8761 = this_sym8756__8760;
return node__8761.cljs$core$ILookup$_lookup$arity$3(node__8761,k,not_found);
});
G__8802 = function(this_sym8756,k,not_found){
switch(arguments.length){
case 2:
return G__8802__2.call(this,this_sym8756,k);
case 3:
return G__8802__3.call(this,this_sym8756,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8802;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8747,args8748){
var this__8762 = this;
return this_sym8747.call.apply(this_sym8747,[this_sym8747].concat(args8748.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8763 = this;
return cljs.core.PersistentVector.fromArray([this__8763.key,this__8763.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8764 = this;
return this__8764.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8765 = this;
return this__8765.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8766 = this;
var node__8767 = this;
return (new cljs.core.RedNode(this__8766.key,this__8766.val,this__8766.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8768 = this;
var node__8769 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8770 = this;
var node__8771 = this;
return (new cljs.core.RedNode(this__8770.key,this__8770.val,this__8770.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8772 = this;
var node__8773 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8774 = this;
var node__8775 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8775,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8776 = this;
var node__8777 = this;
return (new cljs.core.RedNode(this__8776.key,this__8776.val,del,this__8776.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8778 = this;
var node__8779 = this;
return (new cljs.core.RedNode(this__8778.key,this__8778.val,ins,this__8778.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8780 = this;
var node__8781 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8780.left))
{return (new cljs.core.RedNode(this__8780.key,this__8780.val,this__8780.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8780.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8780.right))
{return (new cljs.core.RedNode(this__8780.right.key,this__8780.right.val,(new cljs.core.BlackNode(this__8780.key,this__8780.val,this__8780.left,this__8780.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8780.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8781,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8803 = null;
var G__8803__0 = (function (){
var this__8782 = this;
var this__8784 = this;
return cljs.core.pr_str.call(null,this__8784);
});
G__8803 = function(){
switch(arguments.length){
case 0:
return G__8803__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8803;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8785 = this;
var node__8786 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8785.right))
{return (new cljs.core.RedNode(this__8785.key,this__8785.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8785.left,null)),this__8785.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8785.left))
{return (new cljs.core.RedNode(this__8785.left.key,this__8785.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8785.left.left,null)),(new cljs.core.BlackNode(this__8785.key,this__8785.val,this__8785.left.right,this__8785.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8786,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8787 = this;
var node__8788 = this;
return (new cljs.core.BlackNode(this__8787.key,this__8787.val,this__8787.left,this__8787.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8789 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8790 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8791 = this;
return cljs.core.list.call(null,this__8791.key,this__8791.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8792 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8793 = this;
return this__8793.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8794 = this;
return cljs.core.PersistentVector.fromArray([this__8794.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8795 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8795.key,this__8795.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8797 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8797.key,this__8797.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8798 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8799 = this;
if((n === 0))
{return this__8799.key;
} else
{if((n === 1))
{return this__8799.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8800 = this;
if((n === 0))
{return this__8800.key;
} else
{if((n === 1))
{return this__8800.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8801 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8807 = comp.call(null,k,tree.key);
if((c__8807 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8807 < 0))
{var ins__8808 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__8808 == null)))
{return tree.add_left(ins__8808);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8809 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__8809 == null)))
{return tree.add_right(ins__8809);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8812 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8812))
{return (new cljs.core.RedNode(app__8812.key,app__8812.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8812.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8812.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8812,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8813 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8813))
{return (new cljs.core.RedNode(app__8813.key,app__8813.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8813.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8813.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8813,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__8819 = comp.call(null,k,tree.key);
if((c__8819 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8819 < 0))
{var del__8820 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8821 = !((del__8820 == null));
if(or__3824__auto____8821)
{return or__3824__auto____8821;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8820,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8820,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8822 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8823 = !((del__8822 == null));
if(or__3824__auto____8823)
{return or__3824__auto____8823;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8822);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8822,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8826 = tree.key;
var c__8827 = comp.call(null,k,tk__8826);
if((c__8827 === 0))
{return tree.replace(tk__8826,v,tree.left,tree.right);
} else
{if((c__8827 < 0))
{return tree.replace(tk__8826,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8826,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8830 = this;
var h__2177__auto____8831 = this__8830.__hash;
if(!((h__2177__auto____8831 == null)))
{return h__2177__auto____8831;
} else
{var h__2177__auto____8832 = cljs.core.hash_imap.call(null,coll);
this__8830.__hash = h__2177__auto____8832;
return h__2177__auto____8832;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8833 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8834 = this;
var n__8835 = coll.entry_at(k);
if(!((n__8835 == null)))
{return n__8835.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8836 = this;
var found__8837 = [null];
var t__8838 = cljs.core.tree_map_add.call(null,this__8836.comp,this__8836.tree,k,v,found__8837);
if((t__8838 == null))
{var found_node__8839 = cljs.core.nth.call(null,found__8837,0);
if(cljs.core._EQ_.call(null,v,found_node__8839.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8836.comp,cljs.core.tree_map_replace.call(null,this__8836.comp,this__8836.tree,k,v),this__8836.cnt,this__8836.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8836.comp,t__8838.blacken(),(this__8836.cnt + 1),this__8836.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8840 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8874 = null;
var G__8874__2 = (function (this_sym8841,k){
var this__8843 = this;
var this_sym8841__8844 = this;
var coll__8845 = this_sym8841__8844;
return coll__8845.cljs$core$ILookup$_lookup$arity$2(coll__8845,k);
});
var G__8874__3 = (function (this_sym8842,k,not_found){
var this__8843 = this;
var this_sym8842__8846 = this;
var coll__8847 = this_sym8842__8846;
return coll__8847.cljs$core$ILookup$_lookup$arity$3(coll__8847,k,not_found);
});
G__8874 = function(this_sym8842,k,not_found){
switch(arguments.length){
case 2:
return G__8874__2.call(this,this_sym8842,k);
case 3:
return G__8874__3.call(this,this_sym8842,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8874;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8828,args8829){
var this__8848 = this;
return this_sym8828.call.apply(this_sym8828,[this_sym8828].concat(args8829.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8849 = this;
if(!((this__8849.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__8849.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8850 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8851 = this;
if((this__8851.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8851.tree,false,this__8851.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8852 = this;
var this__8853 = this;
return cljs.core.pr_str.call(null,this__8853);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8854 = this;
var coll__8855 = this;
var t__8856 = this__8854.tree;
while(true){
if(!((t__8856 == null)))
{var c__8857 = this__8854.comp.call(null,k,t__8856.key);
if((c__8857 === 0))
{return t__8856;
} else
{if((c__8857 < 0))
{{
var G__8875 = t__8856.left;
t__8856 = G__8875;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8876 = t__8856.right;
t__8856 = G__8876;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8858 = this;
if((this__8858.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8858.tree,ascending_QMARK_,this__8858.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8859 = this;
if((this__8859.cnt > 0))
{var stack__8860 = null;
var t__8861 = this__8859.tree;
while(true){
if(!((t__8861 == null)))
{var c__8862 = this__8859.comp.call(null,k,t__8861.key);
if((c__8862 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8860,t__8861),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8862 < 0))
{{
var G__8877 = cljs.core.conj.call(null,stack__8860,t__8861);
var G__8878 = t__8861.left;
stack__8860 = G__8877;
t__8861 = G__8878;
continue;
}
} else
{{
var G__8879 = stack__8860;
var G__8880 = t__8861.right;
stack__8860 = G__8879;
t__8861 = G__8880;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8862 > 0))
{{
var G__8881 = cljs.core.conj.call(null,stack__8860,t__8861);
var G__8882 = t__8861.right;
stack__8860 = G__8881;
t__8861 = G__8882;
continue;
}
} else
{{
var G__8883 = stack__8860;
var G__8884 = t__8861.left;
stack__8860 = G__8883;
t__8861 = G__8884;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8860 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8860,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8863 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8864 = this;
return this__8864.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8865 = this;
if((this__8865.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8865.tree,true,this__8865.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8866 = this;
return this__8866.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8867 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8868 = this;
return (new cljs.core.PersistentTreeMap(this__8868.comp,this__8868.tree,this__8868.cnt,meta,this__8868.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8869 = this;
return this__8869.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8870 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8870.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8871 = this;
var found__8872 = [null];
var t__8873 = cljs.core.tree_map_remove.call(null,this__8871.comp,this__8871.tree,k,found__8872);
if((t__8873 == null))
{if((cljs.core.nth.call(null,found__8872,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8871.comp,null,0,this__8871.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8871.comp,t__8873.blacken(),(this__8871.cnt - 1),this__8871.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__8887 = cljs.core.seq.call(null,keyvals);
var out__8888 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8887)
{{
var G__8889 = cljs.core.nnext.call(null,in__8887);
var G__8890 = cljs.core.assoc_BANG_.call(null,out__8888,cljs.core.first.call(null,in__8887),cljs.core.second.call(null,in__8887));
in__8887 = G__8889;
out__8888 = G__8890;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8888);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8891){
var keyvals = cljs.core.seq(arglist__8891);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8892){
var keyvals = cljs.core.seq(arglist__8892);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__8895 = cljs.core.seq.call(null,keyvals);
var out__8896 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8895)
{{
var G__8897 = cljs.core.nnext.call(null,in__8895);
var G__8898 = cljs.core.assoc.call(null,out__8896,cljs.core.first.call(null,in__8895),cljs.core.second.call(null,in__8895));
in__8895 = G__8897;
out__8896 = G__8898;
continue;
}
} else
{return out__8896;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8899){
var keyvals = cljs.core.seq(arglist__8899);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__8902 = cljs.core.seq.call(null,keyvals);
var out__8903 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8902)
{{
var G__8904 = cljs.core.nnext.call(null,in__8902);
var G__8905 = cljs.core.assoc.call(null,out__8903,cljs.core.first.call(null,in__8902),cljs.core.second.call(null,in__8902));
in__8902 = G__8904;
out__8903 = G__8905;
continue;
}
} else
{return out__8903;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__8906){
var comparator = cljs.core.first(arglist__8906);
var keyvals = cljs.core.rest(arglist__8906);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__8907_SHARP_,p2__8908_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____8910 = p1__8907_SHARP_;
if(cljs.core.truth_(or__3824__auto____8910))
{return or__3824__auto____8910;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__8908_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8911){
var maps = cljs.core.seq(arglist__8911);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__8919 = (function (m,e){
var k__8917 = cljs.core.first.call(null,e);
var v__8918 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__8917))
{return cljs.core.assoc.call(null,m,k__8917,f.call(null,cljs.core._lookup.call(null,m,k__8917,null),v__8918));
} else
{return cljs.core.assoc.call(null,m,k__8917,v__8918);
}
});
var merge2__8921 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8919,(function (){var or__3824__auto____8920 = m1;
if(cljs.core.truth_(or__3824__auto____8920))
{return or__3824__auto____8920;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__8921,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8922){
var f = cljs.core.first(arglist__8922);
var maps = cljs.core.rest(arglist__8922);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8927 = cljs.core.ObjMap.EMPTY;
var keys__8928 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__8928)
{var key__8929 = cljs.core.first.call(null,keys__8928);
var entry__8930 = cljs.core._lookup.call(null,map,key__8929,"\uFDD0'user/not-found");
{
var G__8931 = ((cljs.core.not_EQ_.call(null,entry__8930,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8927,key__8929,entry__8930):ret__8927);
var G__8932 = cljs.core.next.call(null,keys__8928);
ret__8927 = G__8931;
keys__8928 = G__8932;
continue;
}
} else
{return ret__8927;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8936 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__8936.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8937 = this;
var h__2177__auto____8938 = this__8937.__hash;
if(!((h__2177__auto____8938 == null)))
{return h__2177__auto____8938;
} else
{var h__2177__auto____8939 = cljs.core.hash_iset.call(null,coll);
this__8937.__hash = h__2177__auto____8939;
return h__2177__auto____8939;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8940 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8941 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8941.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8962 = null;
var G__8962__2 = (function (this_sym8942,k){
var this__8944 = this;
var this_sym8942__8945 = this;
var coll__8946 = this_sym8942__8945;
return coll__8946.cljs$core$ILookup$_lookup$arity$2(coll__8946,k);
});
var G__8962__3 = (function (this_sym8943,k,not_found){
var this__8944 = this;
var this_sym8943__8947 = this;
var coll__8948 = this_sym8943__8947;
return coll__8948.cljs$core$ILookup$_lookup$arity$3(coll__8948,k,not_found);
});
G__8962 = function(this_sym8943,k,not_found){
switch(arguments.length){
case 2:
return G__8962__2.call(this,this_sym8943,k);
case 3:
return G__8962__3.call(this,this_sym8943,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8962;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym8934,args8935){
var this__8949 = this;
return this_sym8934.call.apply(this_sym8934,[this_sym8934].concat(args8935.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8950 = this;
return (new cljs.core.PersistentHashSet(this__8950.meta,cljs.core.assoc.call(null,this__8950.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__8951 = this;
var this__8952 = this;
return cljs.core.pr_str.call(null,this__8952);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8953 = this;
return cljs.core.keys.call(null,this__8953.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8954 = this;
return (new cljs.core.PersistentHashSet(this__8954.meta,cljs.core.dissoc.call(null,this__8954.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8955 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8956 = this;
var and__3822__auto____8957 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8957)
{var and__3822__auto____8958 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8958)
{return cljs.core.every_QMARK_.call(null,(function (p1__8933_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8933_SHARP_);
}),other);
} else
{return and__3822__auto____8958;
}
} else
{return and__3822__auto____8957;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8959 = this;
return (new cljs.core.PersistentHashSet(meta,this__8959.hash_map,this__8959.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8960 = this;
return this__8960.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8961 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__8961.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__8980 = null;
var G__8980__2 = (function (this_sym8966,k){
var this__8968 = this;
var this_sym8966__8969 = this;
var tcoll__8970 = this_sym8966__8969;
if((cljs.core._lookup.call(null,this__8968.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__8980__3 = (function (this_sym8967,k,not_found){
var this__8968 = this;
var this_sym8967__8971 = this;
var tcoll__8972 = this_sym8967__8971;
if((cljs.core._lookup.call(null,this__8968.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__8980 = function(this_sym8967,k,not_found){
switch(arguments.length){
case 2:
return G__8980__2.call(this,this_sym8967,k);
case 3:
return G__8980__3.call(this,this_sym8967,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8980;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym8964,args8965){
var this__8973 = this;
return this_sym8964.call.apply(this_sym8964,[this_sym8964].concat(args8965.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__8974 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__8975 = this;
if((cljs.core._lookup.call(null,this__8975.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8976 = this;
return cljs.core.count.call(null,this__8976.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__8977 = this;
this__8977.transient_map = cljs.core.dissoc_BANG_.call(null,this__8977.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8978 = this;
this__8978.transient_map = cljs.core.assoc_BANG_.call(null,this__8978.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8979 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__8979.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8983 = this;
var h__2177__auto____8984 = this__8983.__hash;
if(!((h__2177__auto____8984 == null)))
{return h__2177__auto____8984;
} else
{var h__2177__auto____8985 = cljs.core.hash_iset.call(null,coll);
this__8983.__hash = h__2177__auto____8985;
return h__2177__auto____8985;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8986 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8987 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8987.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9013 = null;
var G__9013__2 = (function (this_sym8988,k){
var this__8990 = this;
var this_sym8988__8991 = this;
var coll__8992 = this_sym8988__8991;
return coll__8992.cljs$core$ILookup$_lookup$arity$2(coll__8992,k);
});
var G__9013__3 = (function (this_sym8989,k,not_found){
var this__8990 = this;
var this_sym8989__8993 = this;
var coll__8994 = this_sym8989__8993;
return coll__8994.cljs$core$ILookup$_lookup$arity$3(coll__8994,k,not_found);
});
G__9013 = function(this_sym8989,k,not_found){
switch(arguments.length){
case 2:
return G__9013__2.call(this,this_sym8989,k);
case 3:
return G__9013__3.call(this,this_sym8989,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9013;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym8981,args8982){
var this__8995 = this;
return this_sym8981.call.apply(this_sym8981,[this_sym8981].concat(args8982.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8996 = this;
return (new cljs.core.PersistentTreeSet(this__8996.meta,cljs.core.assoc.call(null,this__8996.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8997 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__8997.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__8998 = this;
var this__8999 = this;
return cljs.core.pr_str.call(null,this__8999);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9000 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9000.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9001 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9001.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9002 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9003 = this;
return cljs.core._comparator.call(null,this__9003.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9004 = this;
return cljs.core.keys.call(null,this__9004.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9005 = this;
return (new cljs.core.PersistentTreeSet(this__9005.meta,cljs.core.dissoc.call(null,this__9005.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9006 = this;
return cljs.core.count.call(null,this__9006.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9007 = this;
var and__3822__auto____9008 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9008)
{var and__3822__auto____9009 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9009)
{return cljs.core.every_QMARK_.call(null,(function (p1__8963_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8963_SHARP_);
}),other);
} else
{return and__3822__auto____9009;
}
} else
{return and__3822__auto____9008;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9010 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9010.tree_map,this__9010.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9011 = this;
return this__9011.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9012 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9012.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9016 = cljs.core.seq.call(null,coll);
var out__9017 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9016))
{{
var G__9018 = cljs.core.next.call(null,in__9016);
var G__9019 = cljs.core.conj_BANG_.call(null,out__9017,cljs.core.first.call(null,in__9016));
in__9016 = G__9018;
out__9017 = G__9019;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9017);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9020){
var keys = cljs.core.seq(arglist__9020);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9022){
var comparator = cljs.core.first(arglist__9022);
var keys = cljs.core.rest(arglist__9022);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9028 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9029 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9029))
{var e__9030 = temp__3971__auto____9029;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9030));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9028,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9021_SHARP_){
var temp__3971__auto____9031 = cljs.core.find.call(null,smap,p1__9021_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9031))
{var e__9032 = temp__3971__auto____9031;
return cljs.core.second.call(null,e__9032);
} else
{return p1__9021_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9062 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9055,seen){
while(true){
var vec__9056__9057 = p__9055;
var f__9058 = cljs.core.nth.call(null,vec__9056__9057,0,null);
var xs__9059 = vec__9056__9057;
var temp__3974__auto____9060 = cljs.core.seq.call(null,xs__9059);
if(temp__3974__auto____9060)
{var s__9061 = temp__3974__auto____9060;
if(cljs.core.contains_QMARK_.call(null,seen,f__9058))
{{
var G__9063 = cljs.core.rest.call(null,s__9061);
var G__9064 = seen;
p__9055 = G__9063;
seen = G__9064;
continue;
}
} else
{return cljs.core.cons.call(null,f__9058,step.call(null,cljs.core.rest.call(null,s__9061),cljs.core.conj.call(null,seen,f__9058)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9062.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9067 = cljs.core.PersistentVector.EMPTY;
var s__9068 = s;
while(true){
if(cljs.core.next.call(null,s__9068))
{{
var G__9069 = cljs.core.conj.call(null,ret__9067,cljs.core.first.call(null,s__9068));
var G__9070 = cljs.core.next.call(null,s__9068);
ret__9067 = G__9069;
s__9068 = G__9070;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9067);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9073 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9073)
{return or__3824__auto____9073;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9074 = x.lastIndexOf("/");
if((i__9074 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9074 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9077 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9077)
{return or__3824__auto____9077;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9078 = x.lastIndexOf("/");
if((i__9078 > -1))
{return cljs.core.subs.call(null,x,2,i__9078);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9085 = cljs.core.ObjMap.EMPTY;
var ks__9086 = cljs.core.seq.call(null,keys);
var vs__9087 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9088 = ks__9086;
if(and__3822__auto____9088)
{return vs__9087;
} else
{return and__3822__auto____9088;
}
})())
{{
var G__9089 = cljs.core.assoc.call(null,map__9085,cljs.core.first.call(null,ks__9086),cljs.core.first.call(null,vs__9087));
var G__9090 = cljs.core.next.call(null,ks__9086);
var G__9091 = cljs.core.next.call(null,vs__9087);
map__9085 = G__9089;
ks__9086 = G__9090;
vs__9087 = G__9091;
continue;
}
} else
{return map__9085;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9094__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9079_SHARP_,p2__9080_SHARP_){
return max_key.call(null,k,p1__9079_SHARP_,p2__9080_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9094 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9094__delegate.call(this, k, x, y, more);
};
G__9094.cljs$lang$maxFixedArity = 3;
G__9094.cljs$lang$applyTo = (function (arglist__9095){
var k = cljs.core.first(arglist__9095);
var x = cljs.core.first(cljs.core.next(arglist__9095));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9095)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9095)));
return G__9094__delegate(k, x, y, more);
});
G__9094.cljs$lang$arity$variadic = G__9094__delegate;
return G__9094;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9096__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9092_SHARP_,p2__9093_SHARP_){
return min_key.call(null,k,p1__9092_SHARP_,p2__9093_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9096 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9096__delegate.call(this, k, x, y, more);
};
G__9096.cljs$lang$maxFixedArity = 3;
G__9096.cljs$lang$applyTo = (function (arglist__9097){
var k = cljs.core.first(arglist__9097);
var x = cljs.core.first(cljs.core.next(arglist__9097));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9097)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9097)));
return G__9096__delegate(k, x, y, more);
});
G__9096.cljs$lang$arity$variadic = G__9096__delegate;
return G__9096;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9100 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9100)
{var s__9101 = temp__3974__auto____9100;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9101),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9101)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9104 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9104)
{var s__9105 = temp__3974__auto____9104;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9105))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9105),take_while.call(null,pred,cljs.core.rest.call(null,s__9105)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9107 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9107.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9119 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9120 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9120))
{var vec__9121__9122 = temp__3974__auto____9120;
var e__9123 = cljs.core.nth.call(null,vec__9121__9122,0,null);
var s__9124 = vec__9121__9122;
if(cljs.core.truth_(include__9119.call(null,e__9123)))
{return s__9124;
} else
{return cljs.core.next.call(null,s__9124);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9119,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9125 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9125))
{var vec__9126__9127 = temp__3974__auto____9125;
var e__9128 = cljs.core.nth.call(null,vec__9126__9127,0,null);
var s__9129 = vec__9126__9127;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9128))?s__9129:cljs.core.next.call(null,s__9129)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9141 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9142 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9142))
{var vec__9143__9144 = temp__3974__auto____9142;
var e__9145 = cljs.core.nth.call(null,vec__9143__9144,0,null);
var s__9146 = vec__9143__9144;
if(cljs.core.truth_(include__9141.call(null,e__9145)))
{return s__9146;
} else
{return cljs.core.next.call(null,s__9146);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9141,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9147 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9147))
{var vec__9148__9149 = temp__3974__auto____9147;
var e__9150 = cljs.core.nth.call(null,vec__9148__9149,0,null);
var s__9151 = vec__9148__9149;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9150))?s__9151:cljs.core.next.call(null,s__9151)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9152 = this;
var h__2177__auto____9153 = this__9152.__hash;
if(!((h__2177__auto____9153 == null)))
{return h__2177__auto____9153;
} else
{var h__2177__auto____9154 = cljs.core.hash_coll.call(null,rng);
this__9152.__hash = h__2177__auto____9154;
return h__2177__auto____9154;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9155 = this;
if((this__9155.step > 0))
{if(((this__9155.start + this__9155.step) < this__9155.end))
{return (new cljs.core.Range(this__9155.meta,(this__9155.start + this__9155.step),this__9155.end,this__9155.step,null));
} else
{return null;
}
} else
{if(((this__9155.start + this__9155.step) > this__9155.end))
{return (new cljs.core.Range(this__9155.meta,(this__9155.start + this__9155.step),this__9155.end,this__9155.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9156 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9157 = this;
var this__9158 = this;
return cljs.core.pr_str.call(null,this__9158);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9159 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9160 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9161 = this;
if((this__9161.step > 0))
{if((this__9161.start < this__9161.end))
{return rng;
} else
{return null;
}
} else
{if((this__9161.start > this__9161.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9162 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9162.end - this__9162.start) / this__9162.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9163 = this;
return this__9163.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9164 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9164.meta,(this__9164.start + this__9164.step),this__9164.end,this__9164.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9165 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9166 = this;
return (new cljs.core.Range(meta,this__9166.start,this__9166.end,this__9166.step,this__9166.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9167 = this;
return this__9167.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9168 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9168.start + (n * this__9168.step));
} else
{if((function (){var and__3822__auto____9169 = (this__9168.start > this__9168.end);
if(and__3822__auto____9169)
{return (this__9168.step === 0);
} else
{return and__3822__auto____9169;
}
})())
{return this__9168.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9170 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9170.start + (n * this__9170.step));
} else
{if((function (){var and__3822__auto____9171 = (this__9170.start > this__9170.end);
if(and__3822__auto____9171)
{return (this__9170.step === 0);
} else
{return and__3822__auto____9171;
}
})())
{return this__9170.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9172 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9172.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9175 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9175)
{var s__9176 = temp__3974__auto____9175;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9176),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9176)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9183 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9183)
{var s__9184 = temp__3974__auto____9183;
var fst__9185 = cljs.core.first.call(null,s__9184);
var fv__9186 = f.call(null,fst__9185);
var run__9187 = cljs.core.cons.call(null,fst__9185,cljs.core.take_while.call(null,(function (p1__9177_SHARP_){
return cljs.core._EQ_.call(null,fv__9186,f.call(null,p1__9177_SHARP_));
}),cljs.core.next.call(null,s__9184)));
return cljs.core.cons.call(null,run__9187,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9187),s__9184))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9202 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9202)
{var s__9203 = temp__3971__auto____9202;
return reductions.call(null,f,cljs.core.first.call(null,s__9203),cljs.core.rest.call(null,s__9203));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9204 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9204)
{var s__9205 = temp__3974__auto____9204;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9205)),cljs.core.rest.call(null,s__9205));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9208 = null;
var G__9208__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9208__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9208__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9208__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9208__4 = (function() { 
var G__9209__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9209__delegate.call(this, x, y, z, args);
};
G__9209.cljs$lang$maxFixedArity = 3;
G__9209.cljs$lang$applyTo = (function (arglist__9210){
var x = cljs.core.first(arglist__9210);
var y = cljs.core.first(cljs.core.next(arglist__9210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9210)));
return G__9209__delegate(x, y, z, args);
});
G__9209.cljs$lang$arity$variadic = G__9209__delegate;
return G__9209;
})()
;
G__9208 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9208__0.call(this);
case 1:
return G__9208__1.call(this,x);
case 2:
return G__9208__2.call(this,x,y);
case 3:
return G__9208__3.call(this,x,y,z);
default:
return G__9208__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9208.cljs$lang$maxFixedArity = 3;
G__9208.cljs$lang$applyTo = G__9208__4.cljs$lang$applyTo;
return G__9208;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9211 = null;
var G__9211__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9211__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9211__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9211__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9211__4 = (function() { 
var G__9212__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9212 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9212__delegate.call(this, x, y, z, args);
};
G__9212.cljs$lang$maxFixedArity = 3;
G__9212.cljs$lang$applyTo = (function (arglist__9213){
var x = cljs.core.first(arglist__9213);
var y = cljs.core.first(cljs.core.next(arglist__9213));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9213)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9213)));
return G__9212__delegate(x, y, z, args);
});
G__9212.cljs$lang$arity$variadic = G__9212__delegate;
return G__9212;
})()
;
G__9211 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9211__0.call(this);
case 1:
return G__9211__1.call(this,x);
case 2:
return G__9211__2.call(this,x,y);
case 3:
return G__9211__3.call(this,x,y,z);
default:
return G__9211__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9211.cljs$lang$maxFixedArity = 3;
G__9211.cljs$lang$applyTo = G__9211__4.cljs$lang$applyTo;
return G__9211;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9214 = null;
var G__9214__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9214__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9214__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9214__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9214__4 = (function() { 
var G__9215__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9215__delegate.call(this, x, y, z, args);
};
G__9215.cljs$lang$maxFixedArity = 3;
G__9215.cljs$lang$applyTo = (function (arglist__9216){
var x = cljs.core.first(arglist__9216);
var y = cljs.core.first(cljs.core.next(arglist__9216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9216)));
return G__9215__delegate(x, y, z, args);
});
G__9215.cljs$lang$arity$variadic = G__9215__delegate;
return G__9215;
})()
;
G__9214 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9214__0.call(this);
case 1:
return G__9214__1.call(this,x);
case 2:
return G__9214__2.call(this,x,y);
case 3:
return G__9214__3.call(this,x,y,z);
default:
return G__9214__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9214.cljs$lang$maxFixedArity = 3;
G__9214.cljs$lang$applyTo = G__9214__4.cljs$lang$applyTo;
return G__9214;
})()
});
var juxt__4 = (function() { 
var G__9217__delegate = function (f,g,h,fs){
var fs__9207 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9218 = null;
var G__9218__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9188_SHARP_,p2__9189_SHARP_){
return cljs.core.conj.call(null,p1__9188_SHARP_,p2__9189_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9207);
});
var G__9218__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9190_SHARP_,p2__9191_SHARP_){
return cljs.core.conj.call(null,p1__9190_SHARP_,p2__9191_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9207);
});
var G__9218__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9192_SHARP_,p2__9193_SHARP_){
return cljs.core.conj.call(null,p1__9192_SHARP_,p2__9193_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9207);
});
var G__9218__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9194_SHARP_,p2__9195_SHARP_){
return cljs.core.conj.call(null,p1__9194_SHARP_,p2__9195_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9207);
});
var G__9218__4 = (function() { 
var G__9219__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9196_SHARP_,p2__9197_SHARP_){
return cljs.core.conj.call(null,p1__9196_SHARP_,cljs.core.apply.call(null,p2__9197_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9207);
};
var G__9219 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9219__delegate.call(this, x, y, z, args);
};
G__9219.cljs$lang$maxFixedArity = 3;
G__9219.cljs$lang$applyTo = (function (arglist__9220){
var x = cljs.core.first(arglist__9220);
var y = cljs.core.first(cljs.core.next(arglist__9220));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9220)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9220)));
return G__9219__delegate(x, y, z, args);
});
G__9219.cljs$lang$arity$variadic = G__9219__delegate;
return G__9219;
})()
;
G__9218 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9218__0.call(this);
case 1:
return G__9218__1.call(this,x);
case 2:
return G__9218__2.call(this,x,y);
case 3:
return G__9218__3.call(this,x,y,z);
default:
return G__9218__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9218.cljs$lang$maxFixedArity = 3;
G__9218.cljs$lang$applyTo = G__9218__4.cljs$lang$applyTo;
return G__9218;
})()
};
var G__9217 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9217__delegate.call(this, f, g, h, fs);
};
G__9217.cljs$lang$maxFixedArity = 3;
G__9217.cljs$lang$applyTo = (function (arglist__9221){
var f = cljs.core.first(arglist__9221);
var g = cljs.core.first(cljs.core.next(arglist__9221));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9221)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9221)));
return G__9217__delegate(f, g, h, fs);
});
G__9217.cljs$lang$arity$variadic = G__9217__delegate;
return G__9217;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9224 = cljs.core.next.call(null,coll);
coll = G__9224;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9223 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9223)
{return (n > 0);
} else
{return and__3822__auto____9223;
}
})()))
{{
var G__9225 = (n - 1);
var G__9226 = cljs.core.next.call(null,coll);
n = G__9225;
coll = G__9226;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9228 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9228),s))
{if((cljs.core.count.call(null,matches__9228) === 1))
{return cljs.core.first.call(null,matches__9228);
} else
{return cljs.core.vec.call(null,matches__9228);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9230 = re.exec(s);
if((matches__9230 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9230) === 1))
{return cljs.core.first.call(null,matches__9230);
} else
{return cljs.core.vec.call(null,matches__9230);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9235 = cljs.core.re_find.call(null,re,s);
var match_idx__9236 = s.search(re);
var match_str__9237 = ((cljs.core.coll_QMARK_.call(null,match_data__9235))?cljs.core.first.call(null,match_data__9235):match_data__9235);
var post_match__9238 = cljs.core.subs.call(null,s,(match_idx__9236 + cljs.core.count.call(null,match_str__9237)));
if(cljs.core.truth_(match_data__9235))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9235,re_seq.call(null,re,post_match__9238));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9245__9246 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9247 = cljs.core.nth.call(null,vec__9245__9246,0,null);
var flags__9248 = cljs.core.nth.call(null,vec__9245__9246,1,null);
var pattern__9249 = cljs.core.nth.call(null,vec__9245__9246,2,null);
return (new RegExp(pattern__9249,flags__9248));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9239_SHARP_){
return print_one.call(null,p1__9239_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9259 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9259))
{var and__3822__auto____9263 = (function (){var G__9260__9261 = obj;
if(G__9260__9261)
{if((function (){var or__3824__auto____9262 = (G__9260__9261.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9262)
{return or__3824__auto____9262;
} else
{return G__9260__9261.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9260__9261.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9260__9261);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9260__9261);
}
})();
if(cljs.core.truth_(and__3822__auto____9263))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9263;
}
} else
{return and__3822__auto____9259;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9264 = !((obj == null));
if(and__3822__auto____9264)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9264;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9265__9266 = obj;
if(G__9265__9266)
{if((function (){var or__3824__auto____9267 = (G__9265__9266.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9267)
{return or__3824__auto____9267;
} else
{return G__9265__9266.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9265__9266.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9265__9266);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9265__9266);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9282 = cljs.core.first.call(null,objs);
var sb__9283 = (new goog.string.StringBuffer());
var G__9284__9285 = cljs.core.seq.call(null,objs);
if(G__9284__9285)
{var obj__9286 = cljs.core.first.call(null,G__9284__9285);
var G__9284__9287 = G__9284__9285;
while(true){
if((obj__9286 === first_obj__9282))
{} else
{sb__9283.append(" ");
}
var G__9288__9289 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9286,opts));
if(G__9288__9289)
{var string__9290 = cljs.core.first.call(null,G__9288__9289);
var G__9288__9291 = G__9288__9289;
while(true){
sb__9283.append(string__9290);
var temp__3974__auto____9292 = cljs.core.next.call(null,G__9288__9291);
if(temp__3974__auto____9292)
{var G__9288__9293 = temp__3974__auto____9292;
{
var G__9296 = cljs.core.first.call(null,G__9288__9293);
var G__9297 = G__9288__9293;
string__9290 = G__9296;
G__9288__9291 = G__9297;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9294 = cljs.core.next.call(null,G__9284__9287);
if(temp__3974__auto____9294)
{var G__9284__9295 = temp__3974__auto____9294;
{
var G__9298 = cljs.core.first.call(null,G__9284__9295);
var G__9299 = G__9284__9295;
obj__9286 = G__9298;
G__9284__9287 = G__9299;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9283;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9301 = cljs.core.pr_sb.call(null,objs,opts);
sb__9301.append("\n");
return [cljs.core.str(sb__9301)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9315 = cljs.core.first.call(null,objs);
var G__9316__9317 = cljs.core.seq.call(null,objs);
if(G__9316__9317)
{var obj__9318 = cljs.core.first.call(null,G__9316__9317);
var G__9316__9319 = G__9316__9317;
while(true){
if((obj__9318 === first_obj__9315))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9320__9321 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9318,opts));
if(G__9320__9321)
{var string__9322 = cljs.core.first.call(null,G__9320__9321);
var G__9320__9323 = G__9320__9321;
while(true){
cljs.core.string_print.call(null,string__9322);
var temp__3974__auto____9324 = cljs.core.next.call(null,G__9320__9323);
if(temp__3974__auto____9324)
{var G__9320__9325 = temp__3974__auto____9324;
{
var G__9328 = cljs.core.first.call(null,G__9320__9325);
var G__9329 = G__9320__9325;
string__9322 = G__9328;
G__9320__9323 = G__9329;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9326 = cljs.core.next.call(null,G__9316__9319);
if(temp__3974__auto____9326)
{var G__9316__9327 = temp__3974__auto____9326;
{
var G__9330 = cljs.core.first.call(null,G__9316__9327);
var G__9331 = G__9316__9327;
obj__9318 = G__9330;
G__9316__9319 = G__9331;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9332){
var objs = cljs.core.seq(arglist__9332);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9333){
var objs = cljs.core.seq(arglist__9333);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9334){
var objs = cljs.core.seq(arglist__9334);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9335){
var objs = cljs.core.seq(arglist__9335);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9336){
var objs = cljs.core.seq(arglist__9336);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9337){
var objs = cljs.core.seq(arglist__9337);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9338){
var objs = cljs.core.seq(arglist__9338);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9339){
var objs = cljs.core.seq(arglist__9339);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9340 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9340,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9341 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9341,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9342 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9342,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9343 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9343))
{var nspc__9344 = temp__3974__auto____9343;
return [cljs.core.str(nspc__9344),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9345 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9345))
{var nspc__9346 = temp__3974__auto____9345;
return [cljs.core.str(nspc__9346),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9347 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9347,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9349 = (function (n,len){
var ns__9348 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9348) < len))
{{
var G__9351 = [cljs.core.str("0"),cljs.core.str(ns__9348)].join('');
ns__9348 = G__9351;
continue;
}
} else
{return ns__9348;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9349.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9349.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9349.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9349.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9349.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9349.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9350 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9350,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9352 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9353 = this;
var G__9354__9355 = cljs.core.seq.call(null,this__9353.watches);
if(G__9354__9355)
{var G__9357__9359 = cljs.core.first.call(null,G__9354__9355);
var vec__9358__9360 = G__9357__9359;
var key__9361 = cljs.core.nth.call(null,vec__9358__9360,0,null);
var f__9362 = cljs.core.nth.call(null,vec__9358__9360,1,null);
var G__9354__9363 = G__9354__9355;
var G__9357__9364 = G__9357__9359;
var G__9354__9365 = G__9354__9363;
while(true){
var vec__9366__9367 = G__9357__9364;
var key__9368 = cljs.core.nth.call(null,vec__9366__9367,0,null);
var f__9369 = cljs.core.nth.call(null,vec__9366__9367,1,null);
var G__9354__9370 = G__9354__9365;
f__9369.call(null,key__9368,this$,oldval,newval);
var temp__3974__auto____9371 = cljs.core.next.call(null,G__9354__9370);
if(temp__3974__auto____9371)
{var G__9354__9372 = temp__3974__auto____9371;
{
var G__9379 = cljs.core.first.call(null,G__9354__9372);
var G__9380 = G__9354__9372;
G__9357__9364 = G__9379;
G__9354__9365 = G__9380;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9373 = this;
return this$.watches = cljs.core.assoc.call(null,this__9373.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9374 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9374.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9375 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9375.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9376 = this;
return this__9376.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9377 = this;
return this__9377.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9378 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9392__delegate = function (x,p__9381){
var map__9387__9388 = p__9381;
var map__9387__9389 = ((cljs.core.seq_QMARK_.call(null,map__9387__9388))?cljs.core.apply.call(null,cljs.core.hash_map,map__9387__9388):map__9387__9388);
var validator__9390 = cljs.core._lookup.call(null,map__9387__9389,"\uFDD0'validator",null);
var meta__9391 = cljs.core._lookup.call(null,map__9387__9389,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9391,validator__9390,null));
};
var G__9392 = function (x,var_args){
var p__9381 = null;
if (goog.isDef(var_args)) {
  p__9381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9392__delegate.call(this, x, p__9381);
};
G__9392.cljs$lang$maxFixedArity = 1;
G__9392.cljs$lang$applyTo = (function (arglist__9393){
var x = cljs.core.first(arglist__9393);
var p__9381 = cljs.core.rest(arglist__9393);
return G__9392__delegate(x, p__9381);
});
G__9392.cljs$lang$arity$variadic = G__9392__delegate;
return G__9392;
})()
;
atom = function(x,var_args){
var p__9381 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9397 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9397))
{var validate__9398 = temp__3974__auto____9397;
if(cljs.core.truth_(validate__9398.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9399 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9399,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9400__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9400 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9400__delegate.call(this, a, f, x, y, z, more);
};
G__9400.cljs$lang$maxFixedArity = 5;
G__9400.cljs$lang$applyTo = (function (arglist__9401){
var a = cljs.core.first(arglist__9401);
var f = cljs.core.first(cljs.core.next(arglist__9401));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9401)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9401))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9401)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9401)))));
return G__9400__delegate(a, f, x, y, z, more);
});
G__9400.cljs$lang$arity$variadic = G__9400__delegate;
return G__9400;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9402){
var iref = cljs.core.first(arglist__9402);
var f = cljs.core.first(cljs.core.next(arglist__9402));
var args = cljs.core.rest(cljs.core.next(arglist__9402));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9403 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9403.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9404 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9404.state,(function (p__9405){
var curr_state__9406 = p__9405;
var curr_state__9407 = ((cljs.core.seq_QMARK_.call(null,curr_state__9406))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9406):curr_state__9406);
var done__9408 = cljs.core._lookup.call(null,curr_state__9407,"\uFDD0'done",null);
if(cljs.core.truth_(done__9408))
{return curr_state__9407;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9404.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9429__9430 = options;
var map__9429__9431 = ((cljs.core.seq_QMARK_.call(null,map__9429__9430))?cljs.core.apply.call(null,cljs.core.hash_map,map__9429__9430):map__9429__9430);
var keywordize_keys__9432 = cljs.core._lookup.call(null,map__9429__9431,"\uFDD0'keywordize-keys",null);
var keyfn__9433 = (cljs.core.truth_(keywordize_keys__9432)?cljs.core.keyword:cljs.core.str);
var f__9448 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2451__auto____9447 = (function iter__9441(s__9442){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9442__9445 = s__9442;
while(true){
if(cljs.core.seq.call(null,s__9442__9445))
{var k__9446 = cljs.core.first.call(null,s__9442__9445);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9433.call(null,k__9446),thisfn.call(null,(x[k__9446]))], true),iter__9441.call(null,cljs.core.rest.call(null,s__9442__9445)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2451__auto____9447.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9448.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9449){
var x = cljs.core.first(arglist__9449);
var options = cljs.core.rest(arglist__9449);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9454 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9458__delegate = function (args){
var temp__3971__auto____9455 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9454),args,null);
if(cljs.core.truth_(temp__3971__auto____9455))
{var v__9456 = temp__3971__auto____9455;
return v__9456;
} else
{var ret__9457 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9454,cljs.core.assoc,args,ret__9457);
return ret__9457;
}
};
var G__9458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9458__delegate.call(this, args);
};
G__9458.cljs$lang$maxFixedArity = 0;
G__9458.cljs$lang$applyTo = (function (arglist__9459){
var args = cljs.core.seq(arglist__9459);;
return G__9458__delegate(args);
});
G__9458.cljs$lang$arity$variadic = G__9458__delegate;
return G__9458;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9461 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9461))
{{
var G__9462 = ret__9461;
f = G__9462;
continue;
}
} else
{return ret__9461;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9463__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9463 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9463__delegate.call(this, f, args);
};
G__9463.cljs$lang$maxFixedArity = 1;
G__9463.cljs$lang$applyTo = (function (arglist__9464){
var f = cljs.core.first(arglist__9464);
var args = cljs.core.rest(arglist__9464);
return G__9463__delegate(f, args);
});
G__9463.cljs$lang$arity$variadic = G__9463__delegate;
return G__9463;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9466 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9466,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9466,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9475 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9475)
{return or__3824__auto____9475;
} else
{var or__3824__auto____9476 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9476)
{return or__3824__auto____9476;
} else
{var and__3822__auto____9477 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9477)
{var and__3822__auto____9478 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9478)
{var and__3822__auto____9479 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9479)
{var ret__9480 = true;
var i__9481 = 0;
while(true){
if((function (){var or__3824__auto____9482 = cljs.core.not.call(null,ret__9480);
if(or__3824__auto____9482)
{return or__3824__auto____9482;
} else
{return (i__9481 === cljs.core.count.call(null,parent));
}
})())
{return ret__9480;
} else
{{
var G__9483 = isa_QMARK_.call(null,h,child.call(null,i__9481),parent.call(null,i__9481));
var G__9484 = (i__9481 + 1);
ret__9480 = G__9483;
i__9481 = G__9484;
continue;
}
}
break;
}
} else
{return and__3822__auto____9479;
}
} else
{return and__3822__auto____9478;
}
} else
{return and__3822__auto____9477;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__9493 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9494 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9495 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9496 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9497 = ((cljs.core.contains_QMARK_.call(null,tp__9493.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9495.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9495.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9493,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9496.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9494,parent,ta__9495),"\uFDD0'descendants":tf__9496.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9495,tag,td__9494)});
})());
if(cljs.core.truth_(or__3824__auto____9497))
{return or__3824__auto____9497;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9502 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9503 = (cljs.core.truth_(parentMap__9502.call(null,tag))?cljs.core.disj.call(null,parentMap__9502.call(null,tag),parent):cljs.core.set([]));
var newParents__9504 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9503))?cljs.core.assoc.call(null,parentMap__9502,tag,childsParents__9503):cljs.core.dissoc.call(null,parentMap__9502,tag));
var deriv_seq__9505 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9485_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9485_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9485_SHARP_),cljs.core.second.call(null,p1__9485_SHARP_)));
}),cljs.core.seq.call(null,newParents__9504)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9502.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9486_SHARP_,p2__9487_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9486_SHARP_,p2__9487_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9505));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9513 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9515 = (cljs.core.truth_((function (){var and__3822__auto____9514 = xprefs__9513;
if(cljs.core.truth_(and__3822__auto____9514))
{return xprefs__9513.call(null,y);
} else
{return and__3822__auto____9514;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9515))
{return or__3824__auto____9515;
} else
{var or__3824__auto____9517 = (function (){var ps__9516 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9516) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9516),prefer_table)))
{} else
{}
{
var G__9520 = cljs.core.rest.call(null,ps__9516);
ps__9516 = G__9520;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9517))
{return or__3824__auto____9517;
} else
{var or__3824__auto____9519 = (function (){var ps__9518 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9518) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9518),y,prefer_table)))
{} else
{}
{
var G__9521 = cljs.core.rest.call(null,ps__9518);
ps__9518 = G__9521;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9519))
{return or__3824__auto____9519;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9523 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9523))
{return or__3824__auto____9523;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9541 = cljs.core.reduce.call(null,(function (be,p__9533){
var vec__9534__9535 = p__9533;
var k__9536 = cljs.core.nth.call(null,vec__9534__9535,0,null);
var ___9537 = cljs.core.nth.call(null,vec__9534__9535,1,null);
var e__9538 = vec__9534__9535;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9536))
{var be2__9540 = (cljs.core.truth_((function (){var or__3824__auto____9539 = (be == null);
if(or__3824__auto____9539)
{return or__3824__auto____9539;
} else
{return cljs.core.dominates.call(null,k__9536,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9538:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9540),k__9536,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9536),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9540)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9540;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9541))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9541));
return cljs.core.second.call(null,best_entry__9541);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9545 = mf;
if(and__3822__auto____9545)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9545;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9546 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9546)
{return or__3824__auto____9546;
} else
{var or__3824__auto____9547 = (cljs.core._reset["_"]);
if(or__3824__auto____9547)
{return or__3824__auto____9547;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9551 = mf;
if(and__3822__auto____9551)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9551;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9552 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9552)
{return or__3824__auto____9552;
} else
{var or__3824__auto____9553 = (cljs.core._add_method["_"]);
if(or__3824__auto____9553)
{return or__3824__auto____9553;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9557 = mf;
if(and__3822__auto____9557)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9557;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9558 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9558)
{return or__3824__auto____9558;
} else
{var or__3824__auto____9559 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9559)
{return or__3824__auto____9559;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9563 = mf;
if(and__3822__auto____9563)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9563;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9564 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9564)
{return or__3824__auto____9564;
} else
{var or__3824__auto____9565 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9565)
{return or__3824__auto____9565;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9569 = mf;
if(and__3822__auto____9569)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9569;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9570 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9570)
{return or__3824__auto____9570;
} else
{var or__3824__auto____9571 = (cljs.core._get_method["_"]);
if(or__3824__auto____9571)
{return or__3824__auto____9571;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9575 = mf;
if(and__3822__auto____9575)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9575;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9576 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9576)
{return or__3824__auto____9576;
} else
{var or__3824__auto____9577 = (cljs.core._methods["_"]);
if(or__3824__auto____9577)
{return or__3824__auto____9577;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9581 = mf;
if(and__3822__auto____9581)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9581;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9582 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9582)
{return or__3824__auto____9582;
} else
{var or__3824__auto____9583 = (cljs.core._prefers["_"]);
if(or__3824__auto____9583)
{return or__3824__auto____9583;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9587 = mf;
if(and__3822__auto____9587)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9587;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9588 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9588)
{return or__3824__auto____9588;
} else
{var or__3824__auto____9589 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9589)
{return or__3824__auto____9589;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9592 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9593 = cljs.core._get_method.call(null,mf,dispatch_val__9592);
if(cljs.core.truth_(target_fn__9593))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9592)].join('')));
}
return cljs.core.apply.call(null,target_fn__9593,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9594 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9595 = this;
cljs.core.swap_BANG_.call(null,this__9595.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9595.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9595.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9595.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9596 = this;
cljs.core.swap_BANG_.call(null,this__9596.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9596.method_cache,this__9596.method_table,this__9596.cached_hierarchy,this__9596.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9597 = this;
cljs.core.swap_BANG_.call(null,this__9597.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9597.method_cache,this__9597.method_table,this__9597.cached_hierarchy,this__9597.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9598 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9598.cached_hierarchy),cljs.core.deref.call(null,this__9598.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9598.method_cache,this__9598.method_table,this__9598.cached_hierarchy,this__9598.hierarchy);
}
var temp__3971__auto____9599 = cljs.core.deref.call(null,this__9598.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9599))
{var target_fn__9600 = temp__3971__auto____9599;
return target_fn__9600;
} else
{var temp__3971__auto____9601 = cljs.core.find_and_cache_best_method.call(null,this__9598.name,dispatch_val,this__9598.hierarchy,this__9598.method_table,this__9598.prefer_table,this__9598.method_cache,this__9598.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9601))
{var target_fn__9602 = temp__3971__auto____9601;
return target_fn__9602;
} else
{return cljs.core.deref.call(null,this__9598.method_table).call(null,this__9598.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9603 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9603.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9603.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9603.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9603.method_cache,this__9603.method_table,this__9603.cached_hierarchy,this__9603.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9604 = this;
return cljs.core.deref.call(null,this__9604.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9605 = this;
return cljs.core.deref.call(null,this__9605.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9606 = this;
return cljs.core.do_dispatch.call(null,mf,this__9606.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9608__delegate = function (_,args){
var self__9607 = this;
return cljs.core._dispatch.call(null,self__9607,args);
};
var G__9608 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9608__delegate.call(this, _, args);
};
G__9608.cljs$lang$maxFixedArity = 1;
G__9608.cljs$lang$applyTo = (function (arglist__9609){
var _ = cljs.core.first(arglist__9609);
var args = cljs.core.rest(arglist__9609);
return G__9608__delegate(_, args);
});
G__9608.cljs$lang$arity$variadic = G__9608__delegate;
return G__9608;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9610 = this;
return cljs.core._dispatch.call(null,self__9610,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2294__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9611 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9613,_){
var this__9612 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9612.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9614 = this;
return (this__9614.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9615 = this;
var this__9616 = this;
return cljs.core.pr_str.call(null,this__9616);
});
cljs.core.UUID;
