import wx from '../../lib/base/wx';
import Component from "../../lib/base/component";
import {observable, extendObservable, autorun, toJS, isObservableArray, isObservableObject, isObservable } from  "../../lib/mobx/mobx-2.6.2.umd";

export default class Tabs extends Component {
     constructor(page, id, props, context){
        super(page, id, props, context);
        this.content = props.content || "";
        this.contents = props.contents || [];
     }

     buildState(context){
    	 var state = super.buildState(context);
    	 state.content = this.content;
    	 return state;
     }
     
     tabNavClick(event){
    	 var content = event.currentTarget.dataset.content;
    	 this.setActiveTabId(content);
     }
     
     setActiveTabIndex(index){
    	 if ((this.contents.length > index) && (index >= 0)){
    		 this.setActiveTabId(this.contents[index]);
    	 }
     }
     
     setCurrentTab(args){
    	 debugger;
    	 var index ;
    	 if(args.replace(/[^0-9]/ig,"")){
    		 index = args.replace(/[^0-9]/ig,"");
    	 }else{
    		 index = 0 ;
    	 }
    	 var currContent = this.contents[index] ;
    	 this.setActiveTabId(currContent) ;
     }
     
     setActiveTabId(id){
    	 var index = this.contents.indexOf(id) 
    	 if (index != -1){
    		 this.content = id;
    		 this._update(this.context);
    		 this.fireEvent(Tabs.EVENT_SELECT, {index: index, id: id, source: this});
    	 }
     }
     
     initOperation(){
       	super.initOperation();
   	   	this.defineOperation('setCurrentTab', {
   	   		 label : "跳转到",
   	   		 icon : '',
   	   		 init : function() {},
   	   		 argsDef : [ {
   	   			 name : 'currentTab',
   	   			 displayName : "页签项"
   	   		 }],
   	   		 method : function(args) {
   	   		   return this.owner.setCurrentTab(args.currentTab);
   	   		 }
   	   	 });
       }
}

Tabs.EVENT_SELECT = "select";

wx.comp = wx.comp || {};
wx.comp.Tabs = Tabs;

