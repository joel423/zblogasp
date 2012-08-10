﻿///////////////////////////////////////////////////////////////////////////////
// 作	 者:    	瑜廷
// 技术支持:     33195@qq.com
// 程序名称:    	YT.CMS Script Interface
// 开始时间:     2011-06-01
// 最后修改:    	2011-06-02
// 备	 注:    	only for YT.CMS
///////////////////////////////////////////////////////////////////////////////
//日志调用
YT.CMS.push({
	//类型描述,表,支持的字段集合
	YT:{Text:'日志',Value:'Article',Fields:[{
		Group:'「日志信息」',Fields:[{
				Text:'编号',
				Value:'<#article/id#>'
			},{
				Text:'权限',
				Value:'<#article/level#>'
			},{
				Text:'标题',
				Value:'<#article/title#>'
			},{
				Text:'摘要',
				Value:'<#article/intro#>'
			},{
				Text:'全文',
				Value:'<#article/content#>'
			},{
				Text:'时间',
				Value:'<#article/posttime#>'
			},{
				Text:'评论数',
				Value:'<#article/commnums#>'
			},{
				Text:'浏览数',
				Value:'<#article/viewnums#>'
			},{
				Text:'引用数',
				Value:'<#article/trackbacknums#>'
			},{
				Text:'引用链接',
				Value:'<#article/trackback_url#>'
			},{
				Text:'链接',
				Value:'<#article/url#>'
			},{
				Text:'内容首张图片',
				Value:'<#xiaoyi/first/img#>'
			}]
	},{
		Group:'「分类信息」',Fields:[{
				Text:'编号',
				Value:'<#article/category/id#>'
			},{
				Text:'名称',
				Value:'<#article/category/name#>'
			},{
				Text:'序号',
				Value:'<#article/category/order#>'
			},{
				Text:'文章数',
				Value:'<#article/category/count#>'
			},{
				Text:'链接',
				Value:'<#article/category/url#>'
			}]
	},{
		Group:'「作者信息」',Fields:[{
				Text:'编号',
				Value:'<#article/author/id#>'
			},{
				Text:'名称',
				Value:'<#article/author/name#>'
			},{
				Text:'等级',
				Value:'<#article/author/level#>'
			},{
				Text:'Email',
				Value:'<#article/author/email#>'
			},{
				Text:'网站链接',
				Value:'<#article/author/homepage#>'
			},{
				Text:'文章数',
				Value:'<#article/author/count#>'
			},{
				Text:'链接',
				Value:'<#article/author/url#>'
			}]
	},{
		Group:'「其它信息」',Fields:[{
				Text:'日志评论RSS',
				Value:'<#article/commentrss#>'
			},{
				Text:'日志别名',
				Value:'<#article/staticname#>'
			},{
				Text:'分类别名',
				Value:'<#article/category/staticname#>'
			},{
				Text:'作者别名',
				Value:'<#article/author/staticname#>'
			},{
				Text:'TAGS',
				Value:'<#article/tagtoname#>'
			},{
				Text:'第一个TAG摘要',
				Value:'<#article/firsttagintro#>'
			}]
	}]},
	//数据源,函数名称及参数个数与类型
	DataSource:[{Group:'「普通调用」',DataSource:[{Text:'单篇文章',Value:'GetArticleModel',Parameters:[{
		Text:'文章标识,调用多篇文章请用逗号分割',
		Value:'0'
	}]},{Text:'全站Limit(by:流年)',Value:'GetArticleLimit',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'索引（排除前几条）',
		Value:1
	}]},{Text:'分类Limit(by:流年)',Value:'GetArticleCategorysLimit',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'索引（排除前几条）',
		Value:1
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	}]},{Text:'最新文章',Value:'GetArticleRandomSortNew',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'随机文章',Value:'GetArticleRandomSortRand',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'本月评论排行',Value:'GetArticleRandomSortComMonth',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'本年评论排行',Value:'GetArticleRandomSortComYear',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'本月排行',Value:'GetArticleRandomSortTopMonth',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'本年排行',Value:'GetArticleRandomSortTopYear',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'热文排行',Value:'GetArticleRandomSortTopHot',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'分类文章列表',Value:'GetArticleCategorys',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	}]},{Text:'分类热门文章列表',Value:'GetArticleCategorysTophot',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	}]},{Text:'Tag文章列表',Value:'GetArticleTag',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'TAG标识',
		Value:0
	}]},{Text:'分类Tag文章列表',Value:'GetArticleCategoryTag',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	},{
		Text:'TAG标识',
		Value:0
	}]},{Text:'置顶文章列表',Value:'GetArticleTop',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'分类置顶文章列表',Value:'GetArticleCategoryTop',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	}]}]}]
});
YT.CMS.push({
	YT:{Text:'评论',Value:'Comment',Fields:[{
		Group:'「评论信息」',Fields:[{
				Text:'编号',
				Value:'<#article/comment/id#>'
			},{
				Text:'序号',
				Value:'<#article/comment/count#>'
			},{
				Text:'名称',
				Value:'<#article/comment/name#>'
			},{
				Text:'网址',
				Value:'<#article/comment/url#>'
			},{
				Text:'Email',
				Value:'<#article/comment/email#>'
			},{
				Text:'时间',
				Value:'<#article/comment/posttime#>'
			},{
				Text:'内容',
				Value:'<#article/comment/content#>'
			},{
				Text:'作者编号',
				Value:'<#article/comment/authorid#>'
			},{
				Text:'首要联系',
				Value:'<#article/comment/firstcontact#>'
			},{
				Text:'Email的MD5码',
				Value:'<#article/comment/emailmd5#>'
			},{
				Text:'经过编码的URL链接',
				Value:'<#article/comment/urlencoder#>'
			},{
				Text:'文章标题',
				Value:'<#article/title#>'
			},{
				Text:'链接',
				Value:'<#article/comment/commenturl#>'
			}]
	}]},
	DataSource:[{Group:'「普通调用」',DataSource:[{Text:'最新回复列表',Value:'GetCommentComments',Parameters:[{
		Text:'调用数量',
		Value:5
	}]},{Text:'分类最新回复列表',Value:'GetCommentCategorysComments',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'分类标识,多个请用逗号分割',
		Value:'0'
	}]},{Text:'文章评论列表',Value:'GetCommentArticleComments',Parameters:[{
		Text:'调用数量',
		Value:5
	},{
		Text:'文章标识,多个请用逗号分割',
		Value:'0'
	}]}]}]
});
YT.CMS.push({
	YT:{Text:'标签',Value:'Tag',Fields:[{Group:'「日志信息」',Fields:[{
		Text:'编号',
		Value:'<#article/tag/id#>'
	},{
		Text:'名称',
		Value:'<#article/tag/name#>'
	},{
		Text:'摘要',
		Value:'<#article/tag/intro#>'
	},{
		Text:'文章数',
		Value:'<#article/tag/count#>'
	},{
		Text:'链接',
		Value:'<#article/tag/url#>'
	},{
		Text:'经过编码的名称',
		Value:'<#article/tag/encodename#>'
	}]}]},
	DataSource:[{Group:'「普通调用」',DataSource:[{Text:'标签列表',Value:'GetTagLists',Parameters:[{
			Text:'调用数量',
			Value:5
	}]}]}]
});

//==================
//使用接口加载模型字段
//==================
$.ajax({
	url: YT_CMS_XML_URL+Config.Model,
	type: 'GET',
	dataType: 'xml',
	data: { t:Math.random() },
	success: function(xml) {
		$("Model", xml).each(function(i) {
			var Model = $('Model', xml).get(i);
			addModelField(YT.CMS[0].YT.Fields,Model);
			addModelField(YT.CMS[1].YT.Fields,Model);
		});
	}
});
function addModelField(arrObject,Model){
	arrObject.push({
		Group:'「模型>'+ $('Table>Description',Model).text()+'」',Fields:[]
	});	
	var u = arrObject.length - 1;
	$('Field',Model).each(function(){
		arrObject[u].Fields.push({
			Text:$(this).find('Description').text(),
			Value:'<#article/model/'+$(this).find('Name').text()+'#>'
		});						   
	});
}