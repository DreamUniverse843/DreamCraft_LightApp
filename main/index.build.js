import wx from '../wxsys/lib/base/wx';
import _createPageConfig from '../wxsys/lib/base/createPageConfig';
import PageClass from './index.user';

 var $g_fns_restData = {
		get _userdata(){
			return {

			};
		}
}; 


 var $g_fns_restData4 = {
		get _userdata(){
			return {

			};
		}
}; 


 var $g_fns_restData1 = {
		get _userdata(){
			return {

			};
		}
}; 


import '../wxsys/comps/wrapper/wrapper';
import '../wxsys/comps/image/image'; 
import '../wxsys/comps/commonOperation/commonOperation'; 
import '../wxsys/comps/tabs/tabs'; 
import '../wxsys/comps/list/list'; 
import '../wxsys/comps/restData/restData'; 
import '../wxsys/comps/page/page'; 
import '../wxsys/comps/wrapper/wrapper'; 
import '../wxsys/comps/text/text'; 
import '../wxsys/comps/toptips/toptips'; 
import '../wxsys/comps/wxApi/wxApi'; 
var methods = {

 $items_list: function({listindex,restData,restData1,params,restData4,$page,props,listitem}){
 return restData1.value ;
}

,
 $items_list3: function({listindex,list3item,list3index,restData,restData1,params,restData4,$page,props,listitem}){
 return restData4.value ;
}

}
var template = [
	[
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData",
					"type":"array",
					"items":{
						"fns":$g_fns_restData,
						"type":"object",
						"key":"_key",
						"props":{
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fwaiyunl":{
								"define":"fwaiyunl",
								"label":"版本",
								"type":"string",
								"extType":"String"
							},
							"fdianhua":{
								"define":"fdianhua",
								"label":"玩家QQ群",
								"type":"string",
								"extType":"String"
							},
							"ftouxiang":{
								"define":"ftouxiang",
								"label":"头像",
								"type":"objectstorage",
								"extType":"Image"
							},
							"fxingming":{
								"define":"fxingming",
								"label":"大标题",
								"type":"string",
								"extType":"String"
							},
							"fzhuanye":{
								"define":"fzhuanye",
								"label":"副标题",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"fbiyexx":{
								"define":"fbiyexx",
								"label":"IP",
								"type":"string",
								"extType":"String"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/gerenxx",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_gerenxx",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData",
				"filters":{}
			}
		},
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData4",
					"type":"array",
					"items":{
						"fns":$g_fns_restData4,
						"type":"object",
						"key":"_key",
						"props":{
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fmiaoshu":{
								"define":"fmiaoshu",
								"label":"描述",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							},
							"ftupian":{
								"define":"ftupian",
								"label":"图片",
								"type":"objectstorage",
								"extType":"Image"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/zuopin",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_zuopin",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData4",
				"filters":{}
			}
		},
		{
			"cls":wx.compClass('$UI/wxsys/comps/restData/restData'),
			"props":{
				"schema":{
					"limit":20,
					"orderBy":[],
					"keyItems":"_key",
					"id":"restData1",
					"type":"array",
					"items":{
						"fns":$g_fns_restData1,
						"type":"object",
						"key":"_key",
						"props":{
							"fid":{
								"define":"fid",
								"label":"主键",
								"type":"string",
								"extType":"String"
							},
							"fneirong":{
								"define":"fneirong",
								"label":"内容",
								"type":"string",
								"extType":"String"
							},
							"fbiaoti":{
								"define":"fbiaoti",
								"label":"标题",
								"type":"string",
								"extType":"String"
							},
							"_key":{
								"type":"string"
							}
						}
					}
				},
				"options":{
					"isMain":false,
					"className":"/main/shixi",
					"autoMode":"load",
					"defSlaves":[],
					"url":"/dbrest",
					"confirmDelete":true,
					"tableName":"main_shixi",
					"confirmRefreshText":"",
					"allowEmpty":false,
					"confirmDeleteText":"",
					"confirmRefresh":true,
					"idColumn":"fid"
				},
				"id":"restData1",
				"filters":{}
			}
		}
	],
	{
		"cls":wx.compClass('$UI/wxsys/comps/page/page'),
		"props":{
			"id":"page"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wxApi/wxApi'),
		"props":{
			"id":"wxapi"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/commonOperation/commonOperation'),
		"props":{
			"id":"commonOperation"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"src":"http://8.140.96.103/i.jpg",
			"id":"image1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text",
			"text":"筱望之宇"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text2",
			"text":"Bamboo Sight Universal"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/tabs/tabs'),
		"props":{
			"contents":[
				"tab1",
				"tabcontent9",
				"tabcontent10",
				"tabcontent12"
			],
			"id":"tabs2",
			"content":"tab1"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"tabnav11"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"src":"$model/UI2/main/images/tubiao/q.png",
			"id":"image17"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text28",
			"text":"信息"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"tabnav12"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"src":"$model/UI2/main/images/tubiao/qqq.png",
			"id":"image18"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text29",
			"text":"介绍"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"tabnav13"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"src":"$model/UI2/main/images/tubiao/qq.png",
			"id":"image19"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text30",
			"text":"直播"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/wrapper/wrapper'),
		"props":{
			"id":"tabnav15"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/image/image'),
		"props":{
			"src":"$model/UI2/main/images/tubiao/qqqqq.png",
			"id":"image21"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text34",
			"text":"截图"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text5",
			"text":"IP：play.bsuniversal.top"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text7",
			"text":"版本：1.8.X-1.16.5"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text9",
			"text":"玩家QQ群：920799310  管理员QQ：3382308510"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/list/list'),
		"props":{
			"$items":"$items_list",
			"item":"listitem",
			"autoRefresh":true,
			"dataId":"restData1",
			"$template":[
				{
					"cls":wx.compClass('$UI/wxsys/comps/image/image'),
					"props":{
						"src":"$model/UI2/main/images/tubiao/y.png",
						"id":"image10"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text19",
						"text":"筱望之宇"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text24",
						"text":"好玩的服务器！"
					}
				}
			],
			"autoLoadNextPage":true,
			"index":"listindex",
			"id":"list",
			"items":"restData1.value",
			"key":"_key"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/text/text'),
		"props":{
			"id":"text3",
			"text":"本功能仍在调试！"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/list/list'),
		"props":{
			"$items":"$items_list3",
			"item":"list3item",
			"autoRefresh":true,
			"dataId":"restData4",
			"$template":[
				{
					"cls":wx.compClass('$UI/wxsys/comps/image/image'),
					"props":{
						"src":"http://8.140.96.103/i.png",
						"id":"image2"
					}
				},
				{
					"cls":wx.compClass('$UI/wxsys/comps/text/text'),
					"props":{
						"id":"text1"
					}
				}
			],
			"autoLoadNextPage":true,
			"index":"list3index",
			"id":"list3",
			"items":"restData4.value",
			"key":"_key"
		}
	},
	{
		"cls":wx.compClass('$UI/wxsys/comps/toptips/toptips'),
		"props":{
			"id":"__toptips__"
		}
	}
];
export function createPageConfig(){
	return _createPageConfig(PageClass, template, methods, {})
}
export function createPage(owner, pageid, props){
	var page = new PageClass(owner, props);
	page.$init(template, methods, pageid);
	return page;
}
