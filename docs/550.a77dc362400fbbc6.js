"use strict";(self.webpackChunkstandalone=self.webpackChunkstandalone||[]).push([[550],{2095:(w,f,l)=>{l.r(f),l.d(f,{ProductsComponent:()=>V});var g=l(6814),x=l(1120),v=l(1578),e=l(4769);function h(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function u(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function c(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,h,4,2,"a",10),e.YNc(2,u,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function m(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))})("click",function(){e.CHM(t);const s=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(s.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function A(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,m,6,5,"a",10),e.YNc(2,A,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())})("click",function(){e.CHM(t),e.oxw(3);const s=e.MAs(1);return e.KtG(s.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function U(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,M,4,2,"a",10),e.YNc(2,D,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function N(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,c,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,U,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class L{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const S=Number.MAX_SAFE_INTEGER;let E=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let C=n.id||this.service.defaultId();return this.state[C]?this.state[C].slice:t}let p,d,s=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),o=r.id,_=r.itemsPerPage,b=this.service.register(r);if(!s&&t instanceof Array){if(_=+_||S,p=(r.currentPage-1)*_,d=p+_,this.stateIsIdentical(o,t,p,d))return this.state[o].slice;{let I=t.slice(p,d);return this.saveState(o,t,I,p,d),this.service.change.emit(o),I}}return b&&this.service.change.emit(o),this.saveState(o,t,t,p,d),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const s=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<s.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${s.join(", ")}`)}saveState(t,n,s,r,o){this.state[t]={collection:n,size:n.length,slice:s,start:r,end:o}}stateIsIdentical(t,n,s,r){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==s||o.end!==r)&&o.slice.every((d,_)=>d===n[s+_])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),F=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(s=>{this.id===s&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,s,r){r=+r;let o=[];const p=Math.max(Math.ceil(s/n),1),d=Math.ceil(r/2),_=t<=d,b=p-d<t,C=!_&&!b;let I=r<p,P=1;for(;P<=p&&P<=r;){let k,y=this.calculatePageNumber(P,t,r,p);k=I&&(2===P&&(C||b)||P===r-1&&(C||_))?"...":y,o.push({label:k,value:y}),P++}return o}calculatePageNumber(t,n,s,r){let o=Math.ceil(s/2);return t===s?r:1===t?t:s<r?r-o<n?r-s+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function T(i){return!!i&&"false"!==i}let O=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=T(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=T(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=T(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,N,6,8,"ul",3),e.qZA()()),2&t){const s=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&s.pages.length<=1))}},dependencies:[F,g.O5,g.sg,g.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[L],imports:[[g.ez]]}),i})();var B=l(380),J=l(9366),R=l(2425),Y=l(916);function q(i,a){if(1&i&&e._UZ(0,"i",21),2&i){const t=a.$implicit,n=e.oxw().$implicit;e.ekj("text-warning",n.ratingsAverage>=t)}}function z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",22),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.addToWishlist(s._id))}),e.qZA()}}function $(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.removeFromWishlist(s._id))}),e.qZA()}}const Q=function(i){return["/details",i]},j=function(){return[1,2,3,4,5]};function G(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"figure"),e._UZ(4,"img",10),e.qZA(),e.TgZ(5,"figcaption",11)(6,"h3",12),e._uU(7),e.ALo(8,"cuttext"),e.qZA(),e.TgZ(9,"h3",13),e._uU(10),e.qZA()(),e._UZ(11,"hr"),e.TgZ(12,"div",14)(13,"span",15),e._uU(14),e.qZA(),e.TgZ(15,"span"),e.YNc(16,q,1,2,"i",16),e.qZA()()(),e.TgZ(17,"div",17)(18,"i",18),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.oxw(2);return e.KtG(o.addProductToCart(r._id))}),e.qZA(),e.YNc(19,z,1,0,"i",19),e.YNc(20,$,1,0,"i",20),e.qZA()()()}if(2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(12,Q,t._id)),e.xp6(2),e.Q6J("src",t.imageCover,e.LSH)("alt",t.title),e.xp6(3),e.Oqu(e.xi3(8,9,t.title,3)),e.xp6(3),e.Oqu(t.category.name),e.xp6(4),e.hij("",t.price," EGP "),e.xp6(2),e.Q6J("ngForOf",e.DdM(14,j)),e.xp6(3),e.Q6J("ngIf",!n.wishlistData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishlistData.includes(t._id))}}const K=function(i,a,t){return{id:"paginateId",itemsPerPage:i,currentPage:a,totalItems:t}};function W(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"h2",2),e._uU(2,"All Products"),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,G,21,15,"div",4),e.ALo(5,"paginate"),e.qZA(),e.TgZ(6,"div",5)(7,"pagination-controls",6),e.NdJ("pageChange",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))})("pageBoundsCorrection",function(s){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(s))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",e.xi3(5,5,t.allPoducts,e.kEZ(8,K,t.itemsInPage,t.currentPage,t.total))),e.xp6(3),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let V=(()=>{class i{constructor(t,n,s,r){this._ProductsService=t,this._CartService=n,this._ToastrService=s,this._WishlistService=r,this.allPoducts=[],this.itemsInPage=0,this.currentPage=1,this.total=0,this.wishlistData=[]}ngOnInit(){this._ProductsService.getProducts().subscribe({next:t=>{this.allPoducts=t.data,this.itemsInPage=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.total=t.results}})}addProductToCart(t){this._CartService.addProductCart(t).subscribe({next:n=>{this._ToastrService.success(n.message,n.status),this._CartService.cartNumber.next(n.numOfCartItems)}})}pageChanged(t){this._ProductsService.getProducts(t).subscribe({next:n=>{this.allPoducts=n.data,this.itemsInPage=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results}})}addToWishlist(t){this._WishlistService.addWishlist(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message,n.status),this.wishlistData=n.data}})}removeFromWishlist(t){this._WishlistService.removeWishlist(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.status,n.message),this.wishlistData=n.data}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(B.s),e.Y36(J.N),e.Y36(R._W),e.Y36(Y.M))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class"," p-4 mt-4 rounded-2 ",4,"ngIf"],[1,"p-4","mt-4","rounded-2"],[1,"mb-4"],[1,"row","g-4"],["class","col-md-6 col-lg-3 h-100",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","align-items-center","py-2","mt-4"],["id","paginateId","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-md-6","col-lg-3","h-100"],[1,"product","position-relative","h-100"],[1,"main-layer",3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"p-2"],[1,"h6","fw-bold","text-primary"],[1,"h6","fw-bold"],[1,"product-tail","d-flex","justify-content-between","align-items-center","p-2"],[1,"fw-bold","text-muted"],["class","fas fa-star",3,"text-warning",4,"ngFor","ngForOf"],[1,"layer-product","d-flex","flex-column","justify-content-evenly","align-items-center","rounded-2"],["title","add to cart",1,"fa-solid","fa-cart-shopping","color-main","fa-xl",3,"click"],["class","fa-regular fa-heart text-danger fa-xl","title","add to wishlist ",3,"click",4,"ngIf"],["class","fa-solid fa-heart text-danger fa-xl","title","remove from wishlist ",3,"click",4,"ngIf"],[1,"fas","fa-star"],["title","add to wishlist ",1,"fa-regular","fa-heart","text-danger","fa-xl",3,"click"],["title","remove from wishlist ",1,"fa-solid","fa-heart","text-danger","fa-xl",3,"click"]],template:function(n,s){1&n&&e.YNc(0,W,8,12,"section",0),2&n&&e.Q6J("ngIf",s.allPoducts.length>0)},dependencies:[g.ez,g.sg,g.O5,x.rH,v.r,H,E,O],styles:[".color-main[_ngcontent-%COMP%]{color:#1abc9c}"]})}return i})()},9366:(w,f,l)=>{l.d(f,{N:()=>e});var g=l(5619),x=l(4769),v=l(9862);let e=(()=>{class h{constructor(c){this._HttpClient=c,this.cartNumber=new g.X(0),this.apiUrl="https://ecommerce.routemisr.com/api/v1/"}addProductCart(c){return this._HttpClient.post(this.apiUrl+"cart",{productId:c})}getUserCart(){return this._HttpClient.get(this.apiUrl+"cart")}removeSpecificCartItem(c){return this._HttpClient.delete(this.apiUrl+`cart/${c}`)}updateCartProduct(c,m){return this._HttpClient.put(this.apiUrl+`cart/${m}`,{count:c})}clearUserCart(){return this._HttpClient.delete(this.apiUrl+"cart")}checkoutSession(c,m){return this._HttpClient.post(this.apiUrl+`orders/checkout-session/${c}?url=http://localhost:4200`,m)}static#e=this.\u0275fac=function(m){return new(m||h)(x.LFG(v.eN))};static#t=this.\u0275prov=x.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},380:(w,f,l)=>{l.d(f,{s:()=>v});var g=l(4769),x=l(9862);let v=(()=>{class e{constructor(u){this._HttpClient=u,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}getProducts(u=1){return this._HttpClient.get(this.baseUrl+`products?page=${u}`)}getSpecificProduct(u){return this._HttpClient.get(this.baseUrl+`products/${u}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"categories")}getSpecificCategories(u){return this._HttpClient.get(this.baseUrl+`categories/${u}`)}static#e=this.\u0275fac=function(c){return new(c||e)(g.LFG(x.eN))};static#t=this.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);