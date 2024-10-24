function PXToolsSmartMenu($)
{
	this.Data;
	this.Behaviour = "vertical";
	this.ResponsiveLimit = "800";
	this.Theme = "Personalized";
	this.PersonalizedTheme = "PXToolsTheme";
	this.EnableSearch = true;
	this.ShowOnClick = false;
	this.HideOnClick = false;
	this.NoMouseOver = false;
	this.MarkCurrentItem = false;
	this.MarkCurrentTree = true;
	this.ShowTimeout = "250";
	this.HideTimeout = "9999";
	this.HideDuration = "";
	this.ShowDuration = "";
	this.CollapsibleShowDuration = "";
	this.CollapsibleHideDuration = "";
	this.StaticFolder;
	this.LogInConsole = true;
	this.IconDefault1Level = "";
	this.IconDefault2Level = "";
	this.IconDefault3Level = "";
	this.IconDefault4Level = "";
	this.IconDefault5Level = "";
	this.ContainerName = "MPW0066LEFTSMContainer";

	window.vetId=[];
	window.vetSize=[];

	var ucContainerName,
	controlName,
	containerWidth,
	containerType,
	thisMe;

	this.SetData = function(data) {
		
		
		this.Data = data;
	}
	this.GetData = function() {return this.Data;}

	this.SetSelectedItem = function(selItem) {this.SelectedItem = selItem;}
	this.GetSelectedItem = function() {return this.SelectedItem;}

	this.SetAdvancedSearchResults = function(data) {
		mountAdvancedSearchResults(data);
	}

	this.SetIconDefault1Level = function(icon) {this.IconDefault1Level = icon;}
	this.GetIconDefault1Level = function() {return this.IconDefault1Level;}

	this.SetIconDefault2Level = function(icon) {this.IconDefault2Level = icon;}
	this.GetIconDefault2Level = function() {return this.IconDefault2Level;}

	this.SetIconDefault3Level = function(icon) {this.IconDefault3Level = icon;}
	this.GetIconDefault3Level = function() {return this.IconDefault3Level;}

	this.SetIconDefault4Level = function(icon) {this.IconDefault4Level = icon;}
	this.GetIconDefault4Level = function() {return this.IconDefault4Level;}

	this.SetIconDefault5Level = function(icon) {this.IconDefault5Level = icon;}
	this.GetIconDefault5Level = function() {return this.IconDefault5Level;}

	this.render = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		if (!this.IsPostBack)
		{
			window.logInConsole	= this.LogInConsole;

			thisMe = this; //this.me();

			setTimeout(function(){
				var strArrayActive	= localStorage.getItem("arrayActive");

				if (strArrayActive != null && strArrayActive != "null" && strArrayActive.length > 0)
				{
					var arrayActive 	= strArrayActive.split(",");

					for (var i = 0; i < arrayActive.length; i++) {
						var parentItem = document.getElementById(arrayActive[i]);
						if (parentItem != null)
						{
							var item = parentItem.childNodes[0];

							if (item != null)
								if (!item.classList.contains("highlighted"))
									eventFire(item, 'click');
						}
					}
				}
			}, 300);

			controlName 		= "#" + this.ContainerName + "main-menu";
			ucContainerName		= "#" + this.ContainerName;

			$(ucContainerName + "_cssrule").remove();

			if ($(ucContainerName).has(controlName).length == 0)
			{
				window.saveSpace 	= this.Behaviour;
				window.respLimit 	= this.ResponsiveLimit.replace("px","");
				window.theme 		= this.Theme.toLowerCase();
				window.propShowOnClick	= this.ShowOnClick;
				window.propHideOnClick	= this.HideOnClick;
				window.propNoMouseOver	= this.NoMouseOver;
				window.propMarkCurrentItem	= this.MarkCurrentItem;
				window.propMarkCurrentTree	= this.MarkCurrentTree;
				window.propShowTimeout	= this.ShowTimeout;
				window.propHideTimeout	= this.HideTimeout;
				window.propHideDuration	= this.HideDuration;
				window.propShowDuration	= this.ShowDuration;
				window.propCollapsibleShowDuration	= this.CollapsibleShowDuration;
				window.propCollapsibleHideDuration	= this.CollapsibleHideDuration;
				window.enableSearch = this.EnableSearch;

				var vetDefaultIcon = [];
				vetDefaultIcon.push(this.IconDefault1Level);
				vetDefaultIcon.push(this.IconDefault2Level);
				vetDefaultIcon.push(this.IconDefault3Level);
				vetDefaultIcon.push(this.IconDefault4Level);
				vetDefaultIcon.push(this.IconDefault5Level);

				if (window.theme == "personalized")
					window.theme = this.PersonalizedTheme;

				window.ctrName = controlName;

				if (window.theme == "pxtoolsred")
					window.theme = "Default";

				if (window.theme == "pxtoolstheme")
					window.theme = "PXToolsTheme";

				if (window.theme != "PXToolsTheme")
				{
					auxTheme = window.theme;

					if (window.theme == "Default" || 0 == 1)
						auxTheme = "red";

					var css = "PXToolsSmartMenu/sm-" + auxTheme + ".css";
					gx.http.loadStyle(gx.util.resourceUrl(gx.basePath + gx.staticDirectory + css, false));
				}

				var auxPosition = "";

				if (saveSpace == "horizontalPush" || saveSpace == "vertical")
					var auxPosition = "position:relative;";

				var auxClass="";
				if (saveSpace == "horizontalSmart")
					auxClass	= "sm-smart";
				else if (saveSpace == "vertical")
					auxClass	= "sm-vertical"
				else if (saveSpace == "horizontalFloat")
					auxClass	= "sm-horizontalFloat"
				else
					auxClass	= "sm-horizontalPush";

				if (saveSpace == "horizontalSmart")
					var txtOrg  	= '<ul id="' + controlName.replace("#","") + '" class="sm sm-' + theme
									+ ' ' + auxClass + '" style="z-index:5;' + auxPosition + '">';
				else
					var txtOrg  	= '<ul id="' + controlName.replace("#","") + '" class="sm sm-' + theme
									+ ' ' + auxClass + '" style="z-index:4;' + auxPosition + '">';

				var txt = buildList(this.Data,false,vetDefaultIcon,0);

				if (enableSearch)
				{

					txt = '!@<ul><li class="txtSearch">'
						+ '<input type="text" id="smSearch" placeholder="Search..." title="">'
						+ '</li>'
						+ txt.replace("!@<ul>",'');
				}

				txt = txt.replace("!@<ul>",txtOrg);

				$(ucContainerName).css("display", "block");

				if (saveSpace == "horizontalSmart")
				{
					window.btLeft	= 0;
					var txtDst  	= '<ul id="' + controlName.replace("#","") +'-h" class="sm sm-' + theme + ' sm-' + theme + '-h">';
					var hTxt		= txt.replace(txtOrg,txtDst);
					hTxt 			= hTxt.replace(/id="li/g, 'id="h-li');

					var auxTxt 	= '<table class="suportmenus">'
								+	'<tr>'
								+		'<td class="top-h">'
								+		hTxt
								+		'</td>'
								+		'<td>'
								+			'<div id="guideVM" style="width: 100%; display: block;">'
								+				'<table height="100%" cellspacing="0" cellpadding="0">'
								+					'<tr><td height="100%">'
								+						'<div class="floatMenu" style="text-align: left;">'
								+							'<input id="main-menu-state" type="checkbox"/>'
								+							'<label class="main-menu-btn" for="main-menu-state">'
								+								'<span class="main-menu-btn-icon"></span>'
								+							'</label>'
								+							txt
								+						'</div>'
								+					'<tr><td>'
								+				'</table>'
								+			'</div>'
								+			'<div>'
								+			'</div>'
								+		'</td>'
								+	'</tr>'
								+ '</table>'
				}
				else if (saveSpace == "vertical")
				{
					var auxTxt 	= '<div class="topVertical" style="position:relative">'
								+	txt
								+ '</div>';
					//respLimit 	= 10000;
				}
				else
				{
					if (saveSpace == "horizontalFloat")
						auxClass = "floatMenu";
					else
						auxClass = "pushMenu";

					var auxTxt 	= '<table class="suportmenu"><tr><td>'
								+	'<div class= "' + auxClass + '" style="' + auxPosition + '">'
								+	'<input id="main-menu-state" type="checkbox" />'
								+		'<label class="main-menu-btn"  for="main-menu-state">'
								+			'<span class="main-menu-btn-icon"></span>'
								+		'</label>'
								+		txt
								+ '</div></td></tr></table>';
				}

				$(ucContainerName).append(auxTxt);

				if (enableSearch)
				{
					$('#smSearch').keydown(function(e)
					{
						var auxThis = " " + thisMe;
						searchFunction(auxThis);
					});
				}

				applyDefaultAndStart();
			};
		};
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	var id 		= 0;

	function createSensorResize(divId,ucSelector) {

		var element = document.getElementById(divId);

		if (element != null)
		{
			//new ResizeSensor(element, function() {
				setTimeout(function(){
					containerWidth = element.clientWidth;

					if (containerType == "area")
					{
						WidthChange();

						if ($(ucSelector).hasClass("sm-smart"))
						{
							btLeft = 0;
							calcPosVM(200);
						};
					}
				}, 350);
		//	});
		}
	}

	function eventFire(el, etype){
	  if (el.fireEvent) {
	    el.fireEvent('on' + etype);
	  } else {
	    var evObj = document.createEvent('Events');
	    evObj.initEvent(etype, true, false);
	    el.dispatchEvent(evObj);
	  }
	}
	var searchContainerAddExpand= function()
	{
		var auxUcContainerName	= ucContainerName.replace("#","");

		var parentSM			= $(ucContainerName).parents()[0];
		var parentSMClassName 	= "parentSM-" + auxUcContainerName;

		$(parentSM).addClass(parentSMClassName);
		parentSM	=	$("." + parentSMClassName);

		if (logInConsole)
			console.log("-->> searchContainerAddExpand. ucContainerName = " + ucContainerName
					+	" auxUcContainerName = " + auxUcContainerName
					+	" father center = " + parentSM.outerWidth()
					+	" parentSM.length = " + parentSM.length

			);

		if (parentSM.length != 0)
		{
			var parentId = parentSM.attr('id');

			if (parentId == undefined)
			{
				parentId 	= parentSMClassName;
				$(parentSM).attr("id",parentId);
			}

			createSensorResize(parentId,controlName);
			containerWidth	= parentSM.outerWidth();

			containerType 	= "area";
		}
		else
			containerType 	= "screen";
	}

	var calcPosVM = function(auxDelay)
	{
		if (containerType != "area" && containerType != "screen")
		{
			searchContainerAddExpand();
		}

		if (window.btLeft < 1)
			setTimeout(function(){

				if (window.btLeft < 1)
				{
					var btHeight		= $(controlName + '-h').outerHeight();
					var btTop			= $(controlName + '-h').position().top;

					window.btLeft		= $('.main-menu-btn').position().left;


					if (window.btLeft > 0)
					{
						var btWidth 	= $('.main-menu-btn').outerWidth() + parseInt($('.main-menu-btn').css("margin-left").replace("px",""));

						if (containerType == "area")
							var auxRight 	= containerWidth - btLeft - btWidth;
						else
							var auxRight 	= $(window).width() - btLeft - btWidth;

						$(controlName).css("top",btHeight + btTop);
						$(controlName).css("right",auxRight);
						$(controlName).css("left","");
					}
				}
			}, auxDelay);
	}

	function buildIconTag(imageType,imageUrl,iconClass,iconValue,vetDefaultIcon,currentLevel)
	{
		if (logInConsole)
			console.log('buildIconTag. ' + ' imageType = ' + imageType
								+ ' imageUrl = ' + imageUrl
								+	' iconClass = ' + iconClass
								+ ' iconValue = ' + iconValue
								+	' vetDefaultIcon = ' + vetDefaultIcon
								+	' currentLevel = ' + currentLevel
							);

		/*if (imageUrl.trim().length < 1
		&& (imageType == 'Image' || imageType == undefined || imageType.trim().length)
		&& vetDefaultIcon[currentLevel].length > 0)*/
		if (imageType != 'Image' && imageType != 'Icon' && vetDefaultIcon[currentLevel].length > 0)
		{
			icon = vetDefaultIcon[currentLevel];

			if (icon.indexOf('.gif') > -1 || icon.indexOf('.bmp') > -1 || icon.indexOf('.png') > -1 || icon.indexOf('.jpeg') > -1 || icon.indexOf('.jpg') > -1 || icon.indexOf('.ico') > -1 || icon.indexOf('.icon') > -1 || icon.indexOf('.svg') > -1)
			{
				imageUrl	= icon;
				imageType = 'Image';
				iconClass = 'iconDefaultLvl' + currentLevel;
			}
			else
			{
				imageType = 'Icon';
				iconClass = icon;
			}

			if (logInConsole)
				console.log("Set Default Icon. imageType = "  + imageType
									+ " currentLevel = " + currentLevel
									+	" vetDefaultIcon[currentLevel] = " + vetDefaultIcon[currentLevel]
			);
		}
		else
			if (logInConsole)
				console.log("No Default Icon for level " + currentLevel);

		var tagIcon = "";

		if ((imageUrl == undefined || imageUrl.trim().length < 1) //&& (imageType == 'Image' || imageType == undefined || imageType.trim().length))
		&& (iconClass == undefined || iconClass.trim().length < 1)) //&& (imageType == 'Icon' || imageType == undefined || imageType.trim().length)))
		{
			if (logInConsole)
				console.log("Icon not defined");
			return "";
		}

		if (imageType == "Image")
		{
			if (logInConsole)
				console.log("ImageType: Image!");

			tagIcon = '<img src="' + imageUrl.trim() + '"'
				+ (iconClass.trim().length > 0 ? (' class="' + iconClass.trim()) + '"' : '')
				+ '>';
		}
		else {
			if (logInConsole)
				console.log("ImageType: Icon!");
			tagIcon	= '<i class="' + iconClass.trim()
				+ '">' + iconValue.trim() + '</i>';
		}

		return tagIcon;
	}

	function buildList(data, isSub, vetDefaultIcon, lvlCurrent)
	{
		var html = (isSub)?'':'!@';
		html += '<ul>';

		for (var indData = 0; indData < data.length; indData++)
		{
			if (data[indData].Name != undefined)
			{
				id	 +=	1;
				html += '<li id="li' + id +'">';

				if (!isSub && window.saveSpace == "horizontalSmart")
				{
					window.vetId[window.vetId.length] = "li" + id;
					if (logInConsole)
						console.log("add id = " + id
											+	" saveSpace = " + saveSpace
											+	" controlName = " + controlName
						);
				}

				var target;
				if (data[indData].Target.length > 3)
					target = data[indData].Target;
				else
					target = "_self";



				//var tagIcon = buildIconTag(data[indData].Icon.trim(),data[indData].IconClass.trim(),vetDefaultIcon,lvlCurrent);

				/*var tagIcon = buildIconTag((data[indData].Icon != undefined ? data[indData].Icon.trim() : ""),
											(data[indData].IconClass != undefined ? data[indData].IconClass.trim() : ""),
											vetDefaultIcon,lvlCurrent);*/

				var tagIcon = "";
				/*
					imageType,imageUrl,iconClass,iconValue,vetDefaultIcon,currentLevel
				*/
				tagIcon = buildIconTag(data[indData].ImageType,data[indData].ImageUrl,data[indData].IconClass,data[indData].IconValue,vetDefaultIcon,lvlCurrent);

				var classLink		= 'smLinkNotIcon';
				var endTagIcon	= '';
				if (tagIcon.length > 0)
				{
					tagIcon 		= '<div class="supportIconMenu">' + tagIcon + '</div><div class="supportTitleMenu">';
					endTagIcon 	= '</div>';
					classLink		= 'smLinkWithIcon';
				}

				var msg = 'msg_click';
				//triggerEvent = ' onclick="' + thisMe + '.SmartMenuOnClick(event,\'' + data[indData].Id + '\',\'' + '<span class="sm-label">' + data[indData].Name + '</span>' + endTagIcon + '\',\'' + data[indData].Link + '\',\'' + data[indData].Target + '\');"';

				var triggerEvent = '';
				//if (data[indData].TriggerEvent)
				triggerEvent = ' onclick="console.log(this.toString());SmartMenuOnClick(this);"';

				if (data[indData].Link.length > 3)
					html += '<a class="' + classLink + '" target="' + target + '" href="' + data[indData].Link + '"' + triggerEvent + '>' + tagIcon + '<span class="sm-label">' + data[indData].Name + '</span>' + endTagIcon + '</a>';
				else
					html += '<a class="' + classLink + '" target="' + target + '" href="#"' + triggerEvent +'>' + tagIcon + '<span class="sm-label">' + data[indData].Name + '</span>' + endTagIcon + '</a>';

				if (typeof(data[indData].Childs) === 'object' && data[indData].Childs.length)
				{
					lvlCurrent += 1;
					var auxLvlCurrent = lvlCurrent;
					html += buildList(data[indData].Childs, true, vetDefaultIcon, auxLvlCurrent);
					lvlCurrent -= 1;
				}
				html += '</li>';
			}
		}
		html += '</ul>';
		return html;
	}

	searchFunction = function(auxThis) {
		if (event.which == 13)
		{
			if (logInConsole)
				console.log('Enter...');

			var objSM = eval(auxThis);
			if (typeof(objSM.Search) == 'function')
			{
				objSM.SearchField = document.getElementById("smSearch").value;
				objSM.Search();
			}

			event.stopPropagation();
			event.preventDefault();
		}
		else
		{
			var parmSearchKeepSub = true;

			setTimeout(function() {
				var filter = document.getElementById("smSearch").value.toUpperCase();
				var count = 0;
				var vetVisiblesId = [];

				document.querySelectorAll(".sm li").forEach(function(li) {
					if (count > 0)
					{
						if (filter == "") {
							li.style["display"] = "list-item";
						} else
						{
							var test = vetVisiblesId.includes(li.parentElement.parentElement.id) > 0;

							if (logInConsole)
								console.log("filtrando con filter = " + filter);

							if (li.textContent.toUpperCase().match(filter)
							|| vetVisiblesId.includes(li.parentElement.parentElement.id) > 0) {
								li.style["display"] = "list-item";
								if (parmSearchKeepSub && li.firstElementChild.text.toUpperCase().match(filter))
									vetVisiblesId.push(li.id);
							} else {
								li.style["display"] = "none";
							}
						}
					}
					count ++;
				});
			}, 50);
		}
	}

	/*this.SmartMenuOnClick = function()
	{
		if(!e) e = window.event;

		if (typeof(this.OnClick) == 'function' && e.target.classList[0] != "sub-arrow")
		{
			this.SelectedItem.Id 		= evtId;
			this.SelectedItem.Name 		= evtName;
			this.SelectedItem.Link		= evtLink;
			this.SelectedItem.Target 	= evtTarget;
			this.OnClick();
		}
	}*/

	$(function() {
		var mainMenuState = $('#main-menu-state');
		if (mainMenuState.length)
		{
		    // animate mobile menu
		    mainMenuState.change(function(e) {
		    	var menu = $(controlName);
		    	if (this.checked) {
		        	menu.hide().slideDown(250, function() {menu.css('display','');});
		      	} else {
		      		menu.show().slideUp(250, function() {menu.css('display','');});
		      	}
		    });
		    // hide mobile menu beforeunload
		    $(window).bind('beforeunload unload', function() {
		    	if (mainMenuState[0].checked) {
		        	mainMenuState[0].click();
		    	}
		    });
	  	}
	});

	var applyDefaultAndStart = function()
	{
		$.fn.smartmenus.defaults = {
			isPopup:		false,
			mainMenuSubOffsetX:	0,
			mainMenuSubOffsetY:	0,
			subMenusSubOffsetX:	0,
			subMenusSubOffsetY:	0,
			subMenusMinWidth:	'auto',
			subMenusMaxWidth:	'auto',
			subIndicators: 		true,
			subIndicatorsPos: 	'prepend',
			subIndicatorsText:	'+',
			scrollStep: 		30,
			scrollAccelerate:	true,
			showTimeout:		propShowOnClick,
			hideTimeout:		propHideTimeout,
			showDuration:		propShowDuration,
			showFunction:		null,
			hideDuration:		propHideDuration,
			hideFunction:		function($ul, complete) { $ul.fadeOut(200, complete); },
			collapsibleShowDuration:propCollapsibleShowDuration,
			collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },
			collapsibleHideDuration:propCollapsibleHideDuration,
			collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },
			showOnClick:		propShowOnClick,
			hideOnClick:		false,
			noMouseOver:		propNoMouseOver,
			keepInViewport:		true,
			keepHighlighted:	true,
			markCurrentItem:	propMarkCurrentItem,
			markCurrentTree:	propMarkCurrentTree,
			rightToLeftSubMenus:	false,
			bottomToTopSubMenus:	false,
			overlapControlsInIE:	true
		};

		$(controlName).smartmenus();

		if (window.saveSpace == "horizontalSmart")
  		{
  			$(controlName + '-h').smartmenus();

  			setTimeout(function(){
					for (var i = 0; i < window.vetId.length; i++) {
					var elem = "#h-" + window.vetId[i];

					var size = $(elem).width();

					if (window.vetSize.length > 0)
						window.vetSize[window.vetSize.length] = window.vetSize[window.vetSize.length -1] + size;
					else
						window.vetSize[window.vetSize.length] = size;
					}

					calcPosVM(100);
					WidthChange();

				}, 300);

  		} else {

  			setTimeout(function(){
  				if (window.saveSpace == "horizontalFloat" || window.saveSpace == "horizontalPush")
					searchContainerAddExpand();

				WidthChange();
			}, 300);


		}
	};

	$(window).resize(function(){
		if (containerType != "area")
		{
			WidthChange();

			if ($(controlName).hasClass("sm-smart"))
				calcPosVM(200);
		}
	});

	var lastWidth;

	function mountRespClass(screenSize,areaSize)
	{
		if (ucContainerName == undefined)
			console.log("-->> ATENTION. ucContainerName == undefined. function mountRespClass. ucContainerName = " + ucContainerName);
		else
		{
			if (logInConsole)
				console.log("-->> mountRespClass. ucContainerName = " + ucContainerName
						+	" respLimit = " + respLimit
						+	" screenSize = " + screenSize
						+	" areaSize = " + areaSize
						+	" ruleNumber = " + (parseInt(respLimit) + (screenSize - areaSize)));

			$(ucContainerName + "_cssrule").remove();

			var auxCssRule 	= "@media (min-width: " + (parseInt(respLimit) + (screenSize - areaSize))
							+ "px) {.main-menu-btn {position:absolute;top:-99999px;}#main-menu-state:not(:checked) ~ " + controlName + " {display: block;}}";


			$("<style type='text/css' id='" + ucContainerName.replace("#","") + "_cssrule'>" + auxCssRule + "</style>").appendTo("head");

			if (logInConsole)
				console.log("add rule = " + ucContainerName + "_cssrule");
		}

	};
	function WidthChange() {
		if (containerType == "area")
		{
			if (containerWidth == null || containerWidth == 0)
			{
				searchContainerAddExpand();

				if (containerWidth == null || containerWidth == 0)
					width = containerWidth;
				else
					width = $(window).width();
			}
			else
				width = containerWidth;
		}
		else
			width = $(window).width();

		if (logInConsole)
			console.log("controlName = " + controlName
					+	" WidthChange " + $(this).width()
					+	" containerType = " + containerType
					+	" width = " + width
					+	" " + window.vetSize.length + " " + window.vetId.length);

		var flagShow = 0;
		var flagHide = 0;
		var lastHideId = "";
		var fristHideId = "";

		var menuType =  "";

		if ($(controlName).parent('.topVertical').length > 0)
			menuType =  "vertical";
		else
			if ($(controlName).hasClass('sm-smart'))
				menuType =  "horizontalSmart";
			else
				menuType =  "horizontal";

		if (logInConsole)
			console.log("controlName = " + controlName
					+	" menuType = " + menuType);

		if (menuType == "horizontalSmart")
		{
			for (var i = window.vetSize.length - 1; i >= 0; i--)
			{
				var test  = "#h-" + window.vetId[i];
				var test2 = "#" + window.vetId[i];

				if (window.vetSize[i] < width -52 || (window.vetSize[i] < width - 52 && i == vetSize.length -1) || flagShow == 1)
				{
					$(test).fadeIn(10);
					$(test2).fadeOut(10);

					if (lastHideId == "")
						lastHideId = test;

					flagShow = 1;
				} else
				{
					$(test).fadeOut(10);
					$(test2).fadeIn(10);

					flagHide 	= 1;
					fristHideId = test2;
				}
			}

			$(".tempLastChild").removeClass("tempLastChild");
			$(lastHideId).addClass("tempLastChild");

			$(".tempFristChild").removeClass("tempFristChild");
			$(fristHideId).addClass("tempFristChild");

			lastWidth = $(this).width();
			if (flagHide == 0)
				$(".floatMenu").css("display","none");
			else
				$(".floatMenu").css("display","block");
				lastWidth = $(this).width();
		} else {
			if (menuType != "vertical")
			{
				if (width >= parseInt(window.respLimit))
				{
					$(controlName).addClass("sm-" + theme + "-h");
					$(".suportmenu").css("width","100%");
				}
				else
				{
					$(controlName).removeClass("sm-" + theme + "-h");
					$(".suportmenu").css("width","");
				}
	  			mountRespClass($(window).width(),width);
			}
		}
	}

	function mountAdvancedSearchResults(data) {
		var vetGroups = [];
		var elem = $('.smRTab');
		if (data.length == 0 && elem != null)
		{
			elem.css("display","none");
		}
		else {
			if (elem != null)
			{
				var txtListTr = '';
				var txtGroup	= '';
				var target		= "_self";
				var vetGroups = [];
				var tagIcon		= '';

				for (var i = 0; i < data.length; i++) {
					txtListTr	+=	'<tr><td>'
										+		 '<a target="' + target + '" href="' + data[i].MgsLink +'">' + tagIcon
										+ 		'<span>' + data[i].MgsGroup + ' - ' + data[i].MgsLable + '</span>'
										+		 '</a></td>'
										+  '</tr>';
					if ((vetGroups).indexOf(data[i].MgsGroup) < 0)
						vetGroups.push(data[i].MgsGroup);
				}

				for (var i = 0; i < vetGroups.length; i++) {
					txtGroup 	+= '<input class="smGroup" type="checkbox"/>'
										+	  '<label for="main-menu-state">'
										+  	 '<span>' + vetGroups[i] + '</span>'
										+	  '</label>';
				}

				var auxTxt 	= '<div class="smR">'
										+  '<div class="smRBar">'
										+   '<table class="smROptionsTab"><tr>'
										+		 '<td></td>'
										+ 	 '<td></td>'
										+		 '<td></td></tr>'
										+	  '</table>'
										+	 '</div>'
										+	 '<div id="smRGroups">'
										+ 	 txtGroup
										+	  '<div id="smMoreGroup"><span>+</span></div>'
										+  '</div>'
										+  '<div id="smListSup">'
										+   '<table id="smRListTab">'
										+ 	txtListTr
										+	  '</table>'
										+  '</div>'
										+ '</div>';

				$('.txtSearch').append(auxTxt);
			}
		}
	}
	///UserCodeRegionEnd: (do not remove this comment.):
}

console.log("sadasasd");
