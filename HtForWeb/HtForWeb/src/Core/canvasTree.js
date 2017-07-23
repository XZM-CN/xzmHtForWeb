// .  --  id
// #  --  class
//////////////////////////////////////////////////////////////////////////
// http://www.thinksaas.cn/topics/0/269/269298.html
// document.scripts[0].src = "ZTree/newjs.jquery.ztree.core.js"
var zTree;
var demoIframe;

var setting = {
	view: {
		dblClickExpand: false,
		showLine: true,
		selectedMulti: false
	},
	data: {
		simpleData: {
			enable: true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: ""
		}
	},
	callback: {
		beforeClick: function (treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			if (treeNode.isParent && treeNode.children.length<1) {
				zTree.expandNode(treeNode);
				window.MiddleWare.EventFlow(treeNode);
				return false;
			} else {
				console.log("单击了树节点: " + treeNode.name);
				window.MiddleWare.EventFlow(treeNode);
				return true;
			}
		}
	}
};


var visPath = "./Part/";
var vis_example = "./example/";

var zNodes = [
/*     */// 
		{id: 140, pId: 7, name: "HT for Web", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 141, pId: 7, name: "Widgets", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 142, pId: 7, name: "Topology", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 143, pId: 7, name: "Data Binding", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 144, pId: 7, name: "Layout", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 145, pId: 7, name: "Position", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 146, pId: 7, name: "Theme", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 147, pId: 7, name: "Vector", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 148, pId: 7, name: "Shape", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 149, pId: 7, name: "Editor", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 150, pId: 7, name: "3D", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 151, pId: 7, name: "Custom 3D Model", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 152, pId: 7, name: "OBJ Import", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 153, pId: 7, name: "3D Lighting", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 154, pId: 7, name: "Animation", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 155, pId: 7, name: "Miscellaneous", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 156, pId: 7, name: "GIS", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 157, pId: 7, name: "XXXXXX", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 158, pId: 7, name: "XXXXXX", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 159, pId: 7, name: "XXXXXX", open: true, projectType: "", ChildType: "", option: "" },
		{ id: 160, pId: 7, name: "XXXXXX", open: true, projectType: "", ChildType: "", option: "" },

/*     */// 网址 html
		{id: 140001, pId: 140, name: "推荐", open: true, projectType: "WEBSITE", url: "http://blog.csdn.net/xhload3d/article/details/52167621", target: "_blank" },
		{ id: 140002, pId: 140, name: "website", open: true, projectType: "WEBSITE", url: "http://www.hightopo.com/guide/guide/core/beginners/ht-beginners-guide.html#ref_datatype", target: "_blank" },
		{ id: 140003, pId: 140, name: "blog", open: true, projectType: "WEBSITE", url: "http://www.hightopo.com/blog/", target: "_blank" },
		{ id: 140004, pId: 140, name: "guide", open: true, projectType: "WEBSITE", url: "http://www.hightopo.com/guide/readme.html", target: "_blank" },
		{ id: 140005, pId: 140, name: "Highttopo", open: true, projectType: "WEBSITE", url: "http://www.hightopo.com/demos/index.html", target: "_blank" },
		{ id: 140006, pId: 140, name: "duilib", open: true, projectType: "WEBSITE", url: visPath + "example_overview.html", target: "_blank" },
		{ id: 140007, pId: 140, name: "unused", open: true, projectType: "WEBSITE", url: visPath + "", target: "_blank" },
		{ id: 140008, pId: 140, name: "组件说明", open: true, projectType: "WEBSITE", url: "http://www.hightopo.com/guide/guide/core/beginners/examples/example_classes.html", target: "_blank" },

/*     */// Widgets
		{id: 141001, pId: 141, name: "example_property", open: true, projectType: "WEBSITE", url: vis_example + "Widgets/example_property/example_property.html", target: "_blank" },

/*     */// 未使用
		{ id: 99999, pId: 7, name: "unused", open: false, projectType: "canvasCore", ChildType: "", option: "" },
		{ id: 99999999, pId: 7, name: "unused", open: true, projectType: "canvasCore", ChildType: "", option: ""}
	];


$(document).ready(function () {
	$.fn.zTree.init($("#tree"), setting, zNodes);
	//var zTree = $.fn.zTree.getZTreeObj("tree");
	//zTree.selectNode(zTree.getNodeByParam("id", 115));
});