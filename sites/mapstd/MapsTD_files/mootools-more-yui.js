// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/95af494959087bf84db49b73ea8870f8 
// Or build this file again with packager using: packager build More/Element.Shortcuts More/Fx.Slide
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.4.0.1",build:"a4244edf2aa97ac8a196fc96082dd35af1abab87"};Element.implement({isDisplayed:function(){return this.getStyle("display")!="none";
},isVisible:function(){var a=this.offsetWidth,b=this.offsetHeight;return(a==0&&b==0)?false:(a>0&&b>0)?true:this.style.display!="none";},toggle:function(){return this[this.isDisplayed()?"hide":"show"]();
},hide:function(){var b;try{b=this.getStyle("display");}catch(a){}if(b=="none"){return this;}return this.store("element:_originalDisplay",b||"").setStyle("display","none");
},show:function(a){if(!a&&this.isDisplayed()){return this;}a=a||this.retrieve("element:_originalDisplay")||"block";return this.setStyle("display",(a=="none")?"block":a);
},swapClass:function(a,b){return this.removeClass(a).addClass(b);}});Document.implement({clearSelection:function(){if(window.getSelection){var a=window.getSelection();
if(a&&a.removeAllRanges){a.removeAllRanges();}}else{if(document.selection&&document.selection.empty){try{document.selection.empty();}catch(b){}}}}});Fx.Slide=new Class({Extends:Fx,options:{mode:"vertical",wrapper:false,hideOverflow:true,resetHeight:false},initialize:function(b,a){b=this.element=this.subject=document.id(b);
this.parent(a);a=this.options;var d=b.retrieve("wrapper"),c=b.getStyles("margin","position","overflow");if(a.hideOverflow){c=Object.append(c,{overflow:"hidden"});
}if(a.wrapper){d=document.id(a.wrapper).setStyles(c);}if(!d){d=new Element("div",{styles:c}).wraps(b);}b.store("wrapper",d).setStyle("margin",0);if(b.getStyle("overflow")=="visible"){b.setStyle("overflow","hidden");
}this.now=[];this.open=true;this.wrapper=d;this.addEvent("complete",function(){this.open=(d["offset"+this.layout.capitalize()]!=0);if(this.open&&this.options.resetHeight){d.setStyle("height","");
}},true);},vertical:function(){this.margin="margin-top";this.layout="height";this.offset=this.element.offsetHeight;},horizontal:function(){this.margin="margin-left";
this.layout="width";this.offset=this.element.offsetWidth;},set:function(a){this.element.setStyle(this.margin,a[0]);this.wrapper.setStyle(this.layout,a[1]);
return this;},compute:function(c,b,a){return[0,1].map(function(d){return Fx.compute(c[d],b[d],a);});},start:function(b,e){if(!this.check(b,e)){return this;
}this[e||this.options.mode]();var d=this.element.getStyle(this.margin).toInt(),c=this.wrapper.getStyle(this.layout).toInt(),a=[[d,c],[0,this.offset]],g=[[d,c],[-this.offset,0]],f;
switch(b){case"in":f=a;break;case"out":f=g;break;case"toggle":f=(c==0)?a:g;}return this.parent(f[0],f[1]);},slideIn:function(a){return this.start("in",a);
},slideOut:function(a){return this.start("out",a);},hide:function(a){this[a||this.options.mode]();this.open=false;return this.set([-this.offset,0]);},show:function(a){this[a||this.options.mode]();
this.open=true;return this.set([0,this.offset]);},toggle:function(a){return this.start("toggle",a);}});Element.Properties.slide={set:function(a){this.get("slide").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("slide");if(!a){a=new Fx.Slide(this,{link:"cancel"});this.store("slide",a);}return a;}};Element.implement({slide:function(d,e){d=d||"toggle";
var b=this.get("slide"),a;switch(d){case"hide":b.hide(e);break;case"show":b.show(e);break;case"toggle":var c=this.retrieve("slide:flag",b.open);b[c?"slideOut":"slideIn"](e);
this.store("slide:flag",!c);a=true;break;default:b.start(d,e);}if(!a){this.eliminate("slide:flag");}return this;}});