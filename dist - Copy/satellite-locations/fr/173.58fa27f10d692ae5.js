"use strict";(self.webpackChunksatellite_locations=self.webpackChunksatellite_locations||[]).push([[173],{173:(v,p,S)=>{S.r(p),S.d(p,{SatellitesModule:()=>y});var s=S(6895),r=S(9686),A=S(4931),e=S(8256),I=S(4890),c=S(2578),o=S(7575);function C(l,i){if(1&l&&(e.\u0275\u0275elementStart(0,"tr")(1,"th"),e.\u0275\u0275i18n(2,16),e.\u0275\u0275pipe(3,"titlecase"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"td"),e.\u0275\u0275i18n(5,17),e.\u0275\u0275elementEnd()()),2&l){const t=i.$implicit,n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(3,2,n.decamelize(t.key))),e.\u0275\u0275i18nApply(2),e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(t.value),e.\u0275\u0275i18nApply(5)}}let g=(()=>{class l{constructor(){this.closeModal=new e.EventEmitter,this.transformationType=r.TransformationType,this.direction=r.Direction,this.decamelize=c.d.decamelize,this.opened=!0}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["app-satellite-details"]],inputs:{satellite:"satellite"},outputs:{closeModal:"closeModal"},decls:46,vars:22,consts:function(){let i,t,n,a,_,L,d,E,M,m;return i="Latitude",t=" " + "\ufffd0\ufffd" + " ",n="Longitude",a=" " + "\ufffd0\ufffd" + " ",_="Hauteur",L="Comme \xE0",d="Nom",E="" + "\ufffd0\ufffd" + "",M="" + "\ufffd0\ufffd" + "",m="" + "\ufffd0\ufffd" + "",[[3,"clrModalOpen","clrModalClosable","clrModalSize","clrModalOpenChange"],[1,"modal-title"],[1,"modal-body"],[1,"card-title"],[1,"table","table-vertical"],i,t,n,a,_,L,[4,"ngFor","ngForOf"],d,E,[1,"modal-footer"],["type","button",1,"btn","btn-outline",3,"click"],M,m]},template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"clr-modal",0),e.\u0275\u0275listener("clrModalOpenChange",function(_){return n.opened=_}),e.\u0275\u0275elementStart(1,"h3",1),e.\u0275\u0275text(2,"Satellite Details"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2)(4,"div",3),e.\u0275\u0275text(5,"Path"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"table",4)(7,"tbody")(8,"tr")(9,"th"),e.\u0275\u0275i18n(10,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"td"),e.\u0275\u0275i18n(12,6),e.\u0275\u0275pipe(13,"coordinates"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(14,"tr")(15,"th"),e.\u0275\u0275i18n(16,7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"td"),e.\u0275\u0275i18n(18,8),e.\u0275\u0275pipe(19,"coordinates"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"tr")(21,"th"),e.\u0275\u0275i18n(22,9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"td"),e.\u0275\u0275text(24),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(25,"tr")(26,"th"),e.\u0275\u0275i18n(27,10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(28,"td"),e.\u0275\u0275text(29),e.\u0275\u0275pipe(30,"date"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275element(31,"br"),e.\u0275\u0275elementStart(32,"div",3),e.\u0275\u0275text(33,"Orbit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"table",4)(35,"tbody"),e.\u0275\u0275template(36,C,6,4,"tr",11),e.\u0275\u0275pipe(37,"keyvalue"),e.\u0275\u0275elementStart(38,"tr")(39,"th"),e.\u0275\u0275i18n(40,12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"td"),e.\u0275\u0275i18n(42,13),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(43,"div",14)(44,"button",15),e.\u0275\u0275listener("click",function(){return n.closeModal.emit()}),e.\u0275\u0275text(45," Close "),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275property("clrModalOpen",n.opened)("clrModalClosable",!1)("clrModalSize","lg"),e.\u0275\u0275advance(13),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind3(13,9,n.satellite.path[0].trace.latitude,n.transformationType.ToDegrees,n.direction.Latitude)),e.\u0275\u0275i18nApply(12),e.\u0275\u0275advance(6),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind3(19,13,n.satellite.path[0].trace.longitude,n.transformationType.ToDegrees,n.direction.Longitude)),e.\u0275\u0275i18nApply(18),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(n.satellite.path[0].trace.height),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(30,17,n.satellite.path[0].asAt,"medium")),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(37,20,n.satellite.orbit)),e.\u0275\u0275advance(6),e.\u0275\u0275i18nExp(n.satellite.displayName),e.\u0275\u0275i18nApply(42))},dependencies:[s.sg,o.qAN,o.VLi,s.rS,s.uU,s.Nd,r.CoordinatesPipe]}),l})();const D=function(l){return{"background-color":l}};function f(l,i){if(1&l){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"clr-dg-row",9),e.\u0275\u0275listener("click",function(){const _=e.\u0275\u0275restoreView(t).$implicit,L=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(L.viewSatellite.emit(_))}),e.\u0275\u0275elementStart(1,"clr-dg-cell"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"clr-dg-cell",10),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"clr-dg-cell"),e.\u0275\u0275element(6,"span",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"clr-dg-cell"),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"coordinates"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"clr-dg-cell"),e.\u0275\u0275text(11),e.\u0275\u0275pipe(12,"coordinates"),e.\u0275\u0275elementEnd()()}if(2&l){const t=i.$implicit,n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(null==t?null:t.displayName),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(15,D,"C"===(null==t?null:t.constellation)?"lavender":"E"===(null==t?null:t.constellation)?"gold":"G"===(null==t?null:t.constellation)?"antiquewhite":"J"===(null==t?null:t.constellation)?"lightgrey":"R"===(null==t?null:t.constellation)?"powderblue":null)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(null==t?null:t.constellation),e.\u0275\u0275advance(2),e.\u0275\u0275styleProp("background-color",null!=t&&t.orbit.isHealthy?"forestgreen":"res"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind3(9,7,null==t||null==t.path[0]||null==t.path[0].trace?null:t.path[0].trace.latitude,n.transformationType.ToDegrees,n.direction.Latitude)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind3(12,11,null==t||null==t.path[0]||null==t.path[0].trace?null:t.path[0].trace.longitude,n.transformationType.ToDegrees,n.direction.Longitude))}}function O(l,i){if(1&l&&(e.\u0275\u0275elementStart(0,"clr-dg-footer"),e.\u0275\u0275i18nStart(1,12),e.\u0275\u0275element(2,"clr-dg-pagination",13,14),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd()),2&l){const t=e.\u0275\u0275reference(3),n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("clrDgTotalItems",n.satelliteLocations.length),e.\u0275\u0275advance(1),e.\u0275\u0275i18nExp(t.firstItem+1)(t.lastItem+1)(t.totalItems),e.\u0275\u0275i18nApply(1)}}let u=(()=>{class l{constructor(){this.satelliteLocations=[],this.viewSatellite=new e.EventEmitter,this.transformationType=r.TransformationType,this.direction=r.Direction}ngOnInit(){}}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["app-satellites-table"]],inputs:{satelliteLocations:"satelliteLocations"},outputs:{viewSatellite:"viewSatellite"},decls:15,vars:7,consts:function(){let i,t,n,a,_,L,d;return i="Nom",t="Constellation",n="Indicateur de sant\xE9",a="Latitude",_="Longitude",L="Chargement",d=" " + "\ufffd0\ufffd" + " - " + "\ufffd1\ufffd" + " of " + "\ufffd2\ufffd" + " Satellite Locations " + "\ufffd#2\ufffd" + "" + "\ufffd/#2\ufffd" + "",[[3,"clrDgField"],i,t,n,a,_,L,[3,"click",4,"clrDgItems","clrDgItemsOf"],[4,"ngIf"],[3,"click"],[3,"ngStyle"],[1,"color-square"],d,[3,"clrDgTotalItems"],["pagination",""]]},template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"clr-datagrid")(1,"clr-dg-column",0),e.\u0275\u0275i18n(2,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"clr-dg-column",0),e.\u0275\u0275i18n(4,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"clr-dg-column",0),e.\u0275\u0275i18n(6,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"clr-dg-column",0),e.\u0275\u0275i18n(8,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"clr-dg-column",0),e.\u0275\u0275i18n(10,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"clr-dg-placeholder"),e.\u0275\u0275i18n(12,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(13,f,13,17,"clr-dg-row",7),e.\u0275\u0275template(14,O,4,4,"clr-dg-footer",8),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("clrDgField","displayName"),e.\u0275\u0275advance(2),e.\u0275\u0275property("clrDgField","constellation"),e.\u0275\u0275advance(2),e.\u0275\u0275property("clrDgField","orbit?.isHealthy"),e.\u0275\u0275advance(2),e.\u0275\u0275property("clrDgField","path[0]?.trace?.latitude"),e.\u0275\u0275advance(2),e.\u0275\u0275property("clrDgField","path[0]?.trace?.longitude"),e.\u0275\u0275advance(4),e.\u0275\u0275property("clrDgItemsOf",n.satelliteLocations),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==n.satelliteLocations?null:n.satelliteLocations.length)>0))},dependencies:[s.O5,s.PC,o.C9t,o.m4W,o.f6,o.Z4N,o.fv_,o.dRQ,o.Ltv,o.F7K,o.PDs,o.KHL,o.Gcc,o.jND,o.Nh1,o.dml,o.K8c,r.CoordinatesPipe],styles:[".color-square[_ngcontent-%COMP%]{display:inline-block;vertical-align:bottom;height:13px;width:13px;border:1px solid black;border-radius:4px}.active-color[_ngcontent-%COMP%]{color:#228b22}.inactive-color[_ngcontent-%COMP%]{color:red}"],changeDetection:0}),l})();function N(l,i){if(1&l){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"app-satellite-details",6),e.\u0275\u0275listener("closeModal",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.isShowDetails=!1)}),e.\u0275\u0275elementEnd()}if(2&l){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("satellite",t.selectedSatellite)}}let P=(()=>{class l{constructor(t,n){this.satellitesService=t,this.cdr=n,this.satelliteLocations$=this.satellitesService.getSatelliteLocations(),this.isShowDetails=!1}ngOnInit(){}ngAfterViewChecked(){this.cdr.detectChanges()}showSatelliteDetails(t){this.selectedSatellite=t,this.isShowDetails=!0}}return l.\u0275fac=function(t){return new(t||l)(e.\u0275\u0275directiveInject(I.k),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["app-list-satellites"]],decls:8,vars:4,consts:function(){let i;return i="Tous les emplacements satellites",[i,[1,"card-header"],[1,"card"],[1,"card-block"],[3,"satelliteLocations","viewSatellite"],[3,"satellite","closeModal",4,"ngIf"],[3,"satellite","closeModal"]]},template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"h3"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"div",1),e.\u0275\u0275elementStart(3,"div",2)(4,"div",3)(5,"app-satellites-table",4),e.\u0275\u0275listener("viewSatellite",function(_){return n.showSatelliteDetails(_)}),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(7,N,1,1,"app-satellite-details",5)),2&t&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("satelliteLocations",e.\u0275\u0275pipeBind1(6,2,n.satelliteLocations$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.isShowDetails))},dependencies:[s.O5,g,u,s.Ov]}),l})();var F=S(9646);function $(l,i){if(1&l){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"app-satellite-details",6),e.\u0275\u0275listener("closeModal",function(){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.isShowDetails=!1)}),e.\u0275\u0275elementEnd()}if(2&l){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("satellite",t.selectedSatellite)}}const h=[{path:"",pathMatch:"full",redirectTo:"list"},{path:"list",component:P},{path:"list-visible",component:(()=>{class l{constructor(t,n){this.satellitesService=t,this.cdr=n,this.satelliteLocations$=(0,F.of)([]),this.isShowDetails=!1}ngOnInit(){navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{t&&(this.satelliteLocations$=this.satellitesService.getVisibleSatelliteLocations(t.coords.latitude,t.coords.latitude))},t=>c.d.displayToast("error",t.message)):c.d.displayToast("warning","Geolocation is not supported by this browser.")}ngAfterViewChecked(){this.cdr.detectChanges()}showSatelliteDetails(t){this.selectedSatellite=t,this.isShowDetails=!0}}return l.\u0275fac=function(t){return new(t||l)(e.\u0275\u0275directiveInject(I.k),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["app-list-visible-satellites"]],decls:8,vars:4,consts:function(){let i;return i="Satellites visibles",[i,[1,"card-header"],[1,"card"],[1,"card-block"],[3,"satelliteLocations","viewSatellite"],[3,"satellite","closeModal",4,"ngIf"],[3,"satellite","closeModal"]]},template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"h3"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"div",1),e.\u0275\u0275elementStart(3,"div",2)(4,"div",3)(5,"app-satellites-table",4),e.\u0275\u0275listener("viewSatellite",function(_){return n.showSatelliteDetails(_)}),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(7,$,1,1,"app-satellite-details",5)),2&t&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("satelliteLocations",e.\u0275\u0275pipeBind1(6,2,n.satelliteLocations$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.isShowDetails))},dependencies:[s.O5,g,u,s.Ov]}),l})()}];let R=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[A.Bz.forChild(h),A.Bz]}),l})(),y=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.ez,R,o.K6A,r.CoordinatesModule]}),l})()}}]);