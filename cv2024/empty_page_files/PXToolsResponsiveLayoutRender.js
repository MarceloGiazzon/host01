function PXToolsResponsiveLayout($)
{
	PXToolsResponsiveLayout.UC = this;

	this.Parameters;
	this.Platform;
	this.TopMode;
	this.TopVisible;
	this.TopMinimized;
	this.TopMaximized;
	this.LeftMode;
	this.LeftVisible;
	this.LeftMinimized;
	this.LeftMaximized;
	this.RightMode;
	this.RightVisible;
	this.RightMinimized;
	this.RightMaximized;
	this.BottomMode;
	this.BottomVisible;
	this.BottomMinimized;
	this.BottomMaximized;
	this.LogInConsole;
	this.SwipeSide;
	this.ContainerName = 'PXTOOLSRESPONSIVELAYOUT_MPAGEContainer';

	/*
		- Maximize and Float on mouse hoover
		- Minimize and Push on mouse out
		- Evento on mouse hoover
		- Evento on mouse out
	*/

	uc = this;

	// Databinding for property Parameters
	this.SetParametersData = function(data)
	{
		///UserCodeRegionStart:[SetParametersData] (do not remove this comment.)

		var dataStr = "[{\"DevicePlatform\":\"DSK\",\"Dimension\":\"al\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"48px\",\"MinimizeModeClass\":\"dnlMini\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"DSK\",\"Dimension\":\"lg\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"48px\",\"MinimizeModeClass\":\"dnlMini\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"DSK\",\"Dimension\":\"xs\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"float\",\"BlockOnFloat\":\"anypushed\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"0px\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"MOB\",\"Dimension\":\"al\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"smart\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"float\",\"BlockOnFloat\":\"anypushed\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"float\",\"BlockOnFloat\":\"center\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}}]";
		
		//var dataAux = JSON.parse(dataStr);

		this.Parameters = JSON.parse(dataStr);

		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Parameters
	this.GetParametersData = function()
	{
		///UserCodeRegionStart:[GetParametersData] (do not remove this comment.)

		return this.Parameters;

		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.render = function()
	{
		///UserCodeRegionStart:[render] (do not remove this comment.)

		window.logInConsole	= false;
		logInConsole = false;

		if (lastDim == undefined)
		{
			//window.logInConsole	= this.LogInConsole

			lastDim 			= "??";
			startActions		= "";

			if (logInConsole)
				console.log("Begin this.render = function(). lastDim = " + lastDim + " ** " + flagCallResize );

			controlName 			= 	this.ContainerName;

			pnlTop 						=	$("#" + controlName + "Top");
			pnlLeft 					=	$("#" + controlName + "Left");
			pnlCenter 				=	$("#" + controlName + "Center");
			pnlRight					=	$("#" + controlName + "Right");
			pnlBottom 				=	$("#" + controlName + "Bottom");
			container 				=	$("#" + controlName);

			$("#" + controlName + "Left ");

			$(pnlLeft).children().wrapAll("<div id='dnlInt'></div>");
			$(pnlCenter).children().wrapAll("<div id='dncInt'></div>");
			$(pnlRight).children().wrapAll("<div id='dnrInt'></div>");

			pnlTop.css("display",'block').addClass("dnn");
			pnlLeft.css("display",'block').addClass("dnl");
			pnlCenter.css("display",'block').addClass("center");
			pnlRight.css("display",'block').addClass("dnr");
			pnlBottom.css("display",'block').addClass("dns");

			pnlTop.removeClass("gx_usercontrol_child");
			pnlLeft.removeClass("gx_usercontrol_child");
			pnlCenter.removeClass("gx_usercontrol_child");
			pnlRight.removeClass("gx_usercontrol_child");
			pnlBottom.removeClass("gx_usercontrol_child");

			window.parmData		= this.Parameters;

			WindowChange();

			setTimeout(function(){
				createSensorResize("dnlInt");
				createSensorResize("dncInt");
				createSensorResize("dnrInt");
				//ElementQueries.listen();
			},500);

			//window[controlName] = this;
		}
		else {
			if (dnlIsVisible && dnlMode == 'float')
			{
				localStorage.setItem(dnlIsVisible, 'false');
				dnlHide(true);
			}
		};
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	var globalMaxWidth = 0;
	var flagCallResize = 0;
	var hasParmRead    = 0;

	window.parmPanelTop;
	window.parmPanelBottom,
	window.parmPanelLeft,
	window.parmPanelRight,
	window.parmCenter,
	window.parmContainer;

	var pnlTop,
		pnlLeft,
		pnlCenter,
		pnlRight,
		pnlBottom,
		lastWidth,
		lastHeight,
		auxWindowWidth,
		auxWindowHeight,
		dnsDefHeight,
		dnnDefHeight,
		dnlDefWidth,
		dnrWidth,
		dnnMinDefHeight,
		dnnMinClass,
		dnlMinDefWidth,
		dnrMinDefWidth,
		dnsHeight,
		dnnHeight,
		dnlWidth,
		dnrWidth,
		dnlMinimizedClass,
		dnrMinimizedClass,
		multiScroll,
		animationTime,
		changedDim,
		changeHeight,
		lastDim,
		blockCenterWidth,
		blockCenterHeight,
		blockCenterLeft,
		blockCenterTop,
		pushTop,
		pushLeft,
		pushRight,
		pushBottom,
		dnnMode,
		dnnIsVisible,
		dnnIsMini,
		dnlMode,
		dnlIsVisible,
		dnrMode,
		dnrIsVisible,
		dnsMode,
		dnsIsVisible,
		dnlPB,
		dnrPB,
		flagScrollEfect,
		relDnlSize,
		relDnrSize,
		relScrSize,
		centerHeight,
		indexFloat,
		nextIndexFloat,
		orderFloat,
		controlName,
		hasScroolChange,
		blockCenter,
		logInConsole
		;

	var hideFloatPanels = function(area)
	{
		var callResize 		= false;
		var keepCenterBlock = false;

		if ((dnnMode == "float" && dnnIsVisible) && parmPanelTop.BlockOnFloat != "no")
			if (area == "center" || parmPanelTop.BlockOnFloat == "anypushed")
			{
				dnnHide(false);
				callResize = true;
			}
			else
				keepCenterBlock = true;

		if ((dnlMode == "float" && dnlIsVisible) && parmPanelLeft.BlockOnFloat != "no")
			if (area == "center" || parmPanelLeft.BlockOnFloat == "anypushed")
			{
				dnlHide(false);
				callResize = true;
			}
			else
				keepCenterBlock = true;

		if ((dnrMode == "float" && dnrIsVisible) && parmPanelRight.BlockOnFloat != "no")
			if (area == "center" || parmPanelRight.BlockOnFloat == "anypushed")
			{
				dnrHide(false);
				callResize = true;
			}
			else
				keepCenterBlock = true;

		if ((dnsMode == "float" && dnsIsVisible) && parmPanelBottom.BlockOnFloat != "no")
			if (area == "center" || parmPanelBottom.BlockOnFloat == "anypushed")
			{
				dnsHide(false);
				callResize = true;
			}
			else
				keepCenterBlock = true;

		if (callResize)
		{
			//setTimeout(function(){
				calcWidthAreas(animationTime);
				calcHeightAreas(animationTime);
			//},20);
		};

		$(".blockAll").css({display:"none"});

		if (! keepCenterBlock)
		{
			$(".blockCenter").css({display:"none"});
			nextIndexFloat	=	0;
		}
	};

	var testFloatBlock = function()
	{
		var flagBlockAll = false;
		var flagBlockCenter = false;

		if (((dnnMode == "float" && dnnIsVisible && parmPanelTop.BlockOnFloat == "anypushed"))
		|| ((dnlMode == "float" && dnlIsVisible && parmPanelLeft.BlockOnFloat == "anypushed"))
		|| ((dnrMode == "float" && dnrIsVisible && parmPanelRight.BlockOnFloat == "anypushed"))
		|| ((dnsMode == "float" && dnsIsVisible && parmPanelBottom.BlockOnFloat == "anypushed")))
			flagBlockAll = true;

		if (((dnnMode == "float" && dnnIsVisible && parmPanelTop.BlockOnFloat == "center"))
		|| ((dnlMode == "float" && dnlIsVisible && parmPanelLeft.BlockOnFloat == "center"))
		|| ((dnrMode == "float" && dnrIsVisible && parmPanelRight.BlockOnFloat == "center"))
		|| ((dnsMode == "float" && dnsIsVisible && parmPanelBottom.BlockOnFloat == "center")))
			flagBlockCenter = true;


		if (flagBlockCenter || flagBlockAll)
		{
			if (flagBlockCenter)
			{
				if ($(".blockCenter").length == 0)
				{
					$("#" + controlName).parent().append('<div class="blockCenter" style></div>');

					blockCenter = $(".blockCenter");

					var auxBlockW = pnlCenter.outerWidth();
					var auxBlockH = pnlCenter.outerHeight();
					var auxBlockT = pnlCenter.position().top;
					var auxBlockL = pnlCenter.position().left;

					blockCenter.css({width:auxBlockW, height:auxBlockH,top:auxBlockT,left:auxBlockL});

					if (logInConsole)
						console.log("width: " + auxBlockW
								+	" height: " + auxBlockH
								+	" top: " + auxBlockT
								+	" left: " + auxBlockL);

					blockCenter.click(function() {
						hideFloatPanels("center");
					});
				};

				$(".blockCenter").css("display","block");
			}
			else
			{
				$(".blockCenter").css("display","none");
			}

			if (flagBlockAll)
			{
				if ($(".blockAll").length == 0)
				{
					$("#" + controlName).parent().append('<div class="blockAll" style></div>');

					$(".blockAll").click(function() {
						hideFloatPanels("all");
					});
				}
				else
					$(".blockAll").css("display","block");
			}
			else
			{
				$(".blockAll").css("display","none");
			}
		}
		else
		{
			$(".blockAll").css("display","none");
			$(".blockCenter").css("display","none");
		}
	};

	var dnnShow = function() {
		dnnIsVisible 	= true;

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectTop();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);

		testFloatBlock();
	};

	var dnnHide = function(enableCalc) {
		dnnIsVisible 	= false;

		indexFloat 		= 9999;

		applyEfectTop();

		if (enableCalc)
		{
			//setTimeout(function(){
				calcWidthAreas(animationTime);
				calcHeightAreas(animationTime);
			//},20);

			testFloatBlock();
		};
	};

	var dnsShow = function() {
		dnsIsVisible 	= true;

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectBottom();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);

		testFloatBlock();
	};

	var dnsHide = function(enableCalc) {
		dnsIsVisible 	= false;
		indexFloat 		= 9999;

		applyEfectBottom();

		if (enableCalc)
		{
			//setTimeout(function(){
				calcWidthAreas(animationTime);
				calcHeightAreas(animationTime);
			//},20);

			testFloatBlock();
		};
	};

	var dnlShow = function() {

		if (logInConsole)
			console.log('PXToolsResponsiveLayout - dnlShow');

		dnlIsVisible 	= true;

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectLeft();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},200);

		testFloatBlock();
	};


	var dnrShow = function() {
		dnrIsVisible 	= true;

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectRight();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);

		testFloatBlock();
	};

	var dnlHide = function(enableCalc) {
		if (logInConsole)
			console.log('PXToolsResponsiveLayout - dnlHide');

		dnlIsVisible 	= false;


		indexFloat 		= 9999;

		applyEfectLeft();

		if (enableCalc)
		{
			//setTimeout(function(){
				calcWidthAreas(animationTime);
				calcHeightAreas(animationTime);
			//},200);

			testFloatBlock();
		};
	};

	var dnrHide = function(enableCalc) {
		dnrIsVisible 	= false;

		indexFloat 		= 9999;

		applyEfectRight();

		if (enableCalc)
		{
			//setTimeout(function(){
				calcWidthAreas(animationTime);
				calcHeightAreas(animationTime);
			//},20);

			testFloatBlock();
		};
	};

	this.ToggleSize = function(area) {
		if (logInConsole)
			console.log('PXToolsResponsiveLayout - ToggleSize ' + area);

		if (lastDim != "??")
		{
			if ((area == 'Top' && (dnnMinClass == undefined || dnnMinClass.length < 1) && (dnnMinDefHeight == undefined || dnnMinDefHeight == 0))
			||  (area == 'Left' && (dnlMinimizedClass == undefined || dnlMinimizedClass.length < 1) && (dnlMinDefWidth == undefined || dnlMinDefWidth == 0))
			||  (area == 'Right' && (dnrMinimizedClass == undefined || dnrMinimizedClass.length < 1) && (dnrMinDefWidth == undefined || dnrMinDefWidth == 0)))
			{
				console.warn('Minimized without definitation to apply!!! Do ToggleVisible!');
				this.ToggleVisible(area);
			}
			else
			{
				if ((area == "Top" && dnnIsMini) ||
					(area == "Left" && dnlIsMini) ||
					(area == "Right" && dnrIsMini)
				)
					this.Maximize(area);
				else
					this.Minimize(area);
			}
		}
	};

	this.Maximize = function(area) {
		var partArea = (inIframe() ? 'frame' : '') + area;

		if (lastDim != "??")
		{
			localStorage.setItem(partArea + '_visible', 'true');
			localStorage.setItem(partArea + '_minimize', 'false');

			if (area == "Top")
			{
				dnnIsMini 		= false;
				uc.TopMinimized	= false;
				uc.TopMaximized	= true;
				dnnShow();
			} else if (area == "Left")
			{
				dnlIsMini 			= false;
				uc.LeftMinimized	= false;
				uc.LeftMaximized	= true;

				if (dnlMinimizedClass.length > 0)
					if (pnlLeft.hasClass(dnlMinimizedClass))
						pnlLeft.removeClass(dnlMinimizedClass);

				dnlShow();

			} else if (area == "Right")
			{
				dnrIsMini 			= false;
				uc.RightMinimized	= false;
				uc.RightMaximized	= true;

				dnrShow();
			}
		}
	};

	this.Minimize = function(area) {
		var partArea = (inIframe() ? 'frame' : '') + area;

		if ((area == 'Top' && (dnnMinClass == undefined || dnnMinClass.length < 1) && (dnnMinDefHeight == undefined || dnnMinDefHeight == 0))
		||  (area == 'Left' && (dnlMinimizedClass == undefined || dnlMinimizedClass.length < 1) && (dnlMinDefWidth == undefined || dnlMinDefWidth == 0))
		||  (area == 'Right' && (dnrMinimizedClass == undefined || dnrMinimizedClass.length < 1) && (dnrMinDefWidth == undefined || dnrMinDefWidth == 0)))
		{
			console.warn('Minimized without definitation to apply!!! Do ToggleVisible!');
			this.ToggleVisible(area);
		}
		else
		{
			localStorage.setItem(partArea + '_visible', 'true');
			localStorage.setItem(partArea + '_minimize', 'true');

			if (area == "Top")
			{
				dnnIsMini 		= true;
				dnnIsVisible	= true;

				uc.TopMinimized	= true;
				uc.TopMaximized	= false;

				if (lastDim == "??")
					startActions = startActions + "mm.,";
				else
				{
					var aux = (dnnHeight - dnnMinDefHeight) * -1;
					pnlTop.animate({top:aux}, animationTime);

					if (dnnMode == "push")
					{
						pushTop	=	dnnMinDefHeight;

						var centerHeight = auxWindowHeight - dnnMinDefHeight;

						if (dnsMode == "push" && dnsIsVisible)
							centerHeight = centerHeight - dnsHeight;

						pnlCenter.animate({top:dnnMinDefHeight}, animationTime);

						if (multiScroll)
							pnlCenter.animate({height:centerHeight}, animationTime);

						if (dnlPB != "full")
						{
							pnlLeft.animate({top:dnnMinDefHeight}, animationTime);

							if (multiScroll)
								pnlLeft.animate({height:centerHeight}, animationTime);
						}

						if (dnrPB != "full")
						{
							pnlRight.animate({top:dnnMinDefHeight}, animationTime);

							if (multiScroll)
								pnlRight.animate({height:centerHeight}, animationTime);
						}

						if (! multiScroll)
							calcHeightAreas();

						if ($(".blockCenter").length != 0)
							blockCenter.css({top:dnnMinDefHeight, height:centerHeight});
					}
				}

				testFloatBlock();
			}
			else
			{
				if (logInConsole)
					console.log('Nuevo minimize. Left y Right. Setea var y llama showArea. area = ' + area);

				if (area == "Left")
				{
					dnlIsMini 				= true;
					uc.LeftMinimized	= true;
					uc.LeftMaximized	= false;

					if (dnlMinimizedClass.length > 0)
						if (!pnlLeft.hasClass(dnlMinimizedClass))
							pnlLeft.addClass(dnlMinimizedClass);

					dnlShow();
				} else if (area == "Right")
				{
					dnrIsMini 				= true;
					uc.RightMinimized	= false;
					uc.RightMaximized	= false;
					dnrShow();
				}
			}
		}
	};

	this.ToggleMode = function(area) {
		if (logInConsole)
			console.log('PXToolsResponsiveLayout - ToggleMode ' + area);

		if (lastDim == "??")
			startActions = startActions + "tm." + area + ",";
		else
		{
			if (area == "Top")
				if (dnnMode == "push") {
					uc.dnnModeFloat();
				} else {
					uc.dnnModePush();
				};

			if (area == "Left")
				if(dnlMode == "push") {
					uc.dnlModeFloat();
				} else {
					uc.dnlModePush();
				};

			if (area == "Right")
				if(dnrMode == "push") {
					uc.dnrModeFloat();
				} else {
					uc.dnrModePush();
				};

			if (area == "Bottom")
				if(dnsMode == "push") {
					uc.dnsModeFloat();
				} else {
					uc.dnsModePush();
				};
			};
	};

	this.ToggleVisible = function(area) {
		if (logInConsole)
			console.log('PXToolsResponsiveLayout - ToggleVisible ' + area);

		var partAreaVisible = (inIframe() ? 'frame' : '') + area + '_visible';
		localStorage.setItem(partAreaVisible, dnnIsVisible ? 'false' : 'true');

		if (lastDim == "??")
			startActions = startActions + "tv." + area + ",";
		else
    {
			if (area == "Top")
				if(!dnnIsVisible) {
					dnnShow();
				} else {
					dnnHide(true);
				};

			if (area == "Left")
				if (!dnlIsVisible) {
					dnlShow();
				} else {
					dnlHide(true);
				};

			if (area == "Right")
				if (!dnrIsVisible) {
					dnrShow();
				} else {
					dnrHide(true);
				};

			if (area == "Bottom")
				if (!dnsIsVisible) {
					dnsShow();
				} else {
					dnsHide(true);
				};
		};
	};

	this.Push = function(area) {
		if (lastDim == "??")
			startActions = startActions + "push." + area + ",";
		else
		{
			if (area == "Top")
				this.dnnModePush();

			if (area == "Left")
				this.dnlModePush();

			if (area == "Right")
				this.dnrModePush();

			if (area == "Bottom")
				this.dnsModePush();
		};
	};

	this.Float = function(area) {
		if (lastDim == "??")
			startActions = startActions + "float." + area + ",";
		else
		{
			if (area == "Top")
				this.dnnModeFloat();

			if (area == "Left")
				this.dnlModeFloat();

			if (area == "Right")
				this.dnrModeFloat();

			if (area == "Bottom")
				this.dnsModeFloat();
		};
	};

	this.Show = function(area) {
		var partAreaVisible = (inIframe() ? 'frame' : '') + area + '_visible';
		localStorage.setItem(partAreaVisible, 'true');

		if (lastDim == "??")
			startActions = startActions + "show." + area + ",";
		else
		{

			if (area == "Top")
				dnnShow();

			if (area == "Left")
				dnlShow();

			if (area == "Right")
				dnrShow();

			if (area == "Bottom")
				dnsShow();
		};
	};

	this.Hide = function(area) {
		var partAreaVisible = (inIframe() ? 'frame' : '') + area + '_visible';
    localStorage.setItem(partAreaVisible, 'false');

		if (lastDim == "??")
			startActions = startActions + "hide." + area + ",";
		else
		{

			if (area == "Top")
				dnnHide(true);

			if (area == "Left")
				dnlHide(true);

			if (area == "Right")
				dnrHide(true);

			if (area == "Bottom")
				dnsHide(true);
		};
	};

	this.dnnModeFloat = function() {

		if (!dnnIsVisible)
			dnnIsVisible = true;

		dnnMode = "float";

		nextIndexFloat 	+= 1
		indexFloat 		= nextIndexFloat;

		applyEfectTop();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	};

	this.dnnModePush = function() {

		if (!dnnIsVisible)
			dnnIsVisible = true;

		dnnMode = "push";

		applyEfectTop();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	};

	this.dnlModeFloat = function() {

		if (!dnlIsVisible)
			dnlIsVisible = true;

		dnlMode = "float";

		nextIndexFloat 	+= 1
		indexFloat 		= nextIndexFloat;

		applyEfectLeft();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	};

	this.dnlModePush = function() {

		if (!dnlIsVisible)
			dnlIsVisible = true;

		dnlMode = "push";

		applyEfectLeft();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},200);
	};

	this.dnrModeFloat = function() {

		if (!dnrIsVisible)
			dnrIsVisible = true;

		dnrMode = "float";

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectRight();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	};

	this.dnrModePush = function() {

		if (!dnrIsVisible)
			dnrIsVisible = true;

		dnrMode = "push";

		applyEfectRight();

		setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		},20);
	};

	this.dnsModeFloat = function() {

		if (!dnsIsVisible)
			dnsIsVisible = true;

		dnsMode = "float";

		nextIndexFloat 	+= 1;
		indexFloat 		= nextIndexFloat;

		applyEfectBottom();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	}

	this.dnsModePush = function() {

		if (!dnsIsVisible)
			dnsIsVisible = true;

		dnsMode = "push";

		applyEfectBottom();

		//setTimeout(function(){
			calcWidthAreas(animationTime);
			calcHeightAreas(animationTime);
		//},20);
	};

	$(window).resize(function(){		//	Resize Detection
		WindowChange();
	});

	function isTouchDevice() {
		try {document.createEvent("TouchEvent"); return true;}
		catch(e){return false;}
	}

	window.mobileAndTabletcheck = function() {
		var check = false;
		var agent = navigator.userAgent.toLowerCase();

		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4)))
		{
			check	=	true;
		};

		var log = " agent = " + agent + "(mobile " +  check + ")";
		var agent = navigator.userAgent.toLowerCase();

		if(typeof window.orientation !== "undefined"){
			check	=	true;
		}

		return check;
	};

	function readParms()
	{
		//var parameters = window.parmData;


		var dataStr = "[{\"DevicePlatform\":\"DSK\",\"Dimension\":\"al\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"48px\",\"MinimizeModeClass\":\"dnlMini\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"DSK\",\"Dimension\":\"lg\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"48px\",\"MinimizeModeClass\":\"dnlMini\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"DSK\",\"Dimension\":\"xs\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"float\",\"BlockOnFloat\":\"anypushed\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"0px\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}},{\"DevicePlatform\":\"MOB\",\"Dimension\":\"al\",\"Regions\":{\"Container\":{\"IsMain\":true,\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"OverflowRule\":\"G\",\"Class\":\"\"},\"Top\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"82px\",\"MinimizeModeHeight\":\"30px\",\"MinimizeModeClass\":\"\",\"Mode\":\"smart\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Left\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"265px\",\"Mode\":\"float\",\"BlockOnFloat\":\"anypushed\",\"OverflowX\":\"hidden\",\"OverflowY\":\"auto\",\"Class\":\"LayoutRegionContainerLeft\",\"PositionBehaviour\":\"full\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Center\":{\"OverflowX\":\"visible\",\"OverflowY\":\"visible\",\"Class\":\"\"},\"Right\":{\"IsVisible\":false,\"DynamicVisible\":true,\"SizeWidth\":\"150px\",\"Mode\":\"float\",\"BlockOnFloat\":\"center\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"LayoutRegionContainer\",\"PositionBehaviour\":\"between\",\"DefaultMinimized\":false,\"MinimizeModeWidth\":\"\",\"MinimizeModeClass\":\"\",\"SwipeAction\":{\"Action\":\"\",\"TargetElement\":\"\"}},\"Bottom\":{\"IsVisible\":true,\"DynamicVisible\":true,\"SizeHeight\":\"40px\",\"Mode\":\"push\",\"BlockOnFloat\":\"no\",\"OverflowX\":\"hidden\",\"OverflowY\":\"hidden\",\"Class\":\"\"}}}]";
		
		//var dataAux = JSON.parse(dataAux);

		var parameters = JSON.parse(dataStr);

		if (parameters != undefined)
		{
			if (animationTime == undefined)
				animationTime = 0;

			lastWidth								=	auxWindowWidth;
			lastHeight								=	auxWindowHeight;
		    auxWindowWidth							=	window.innerWidth;
			auxWindowHeight							=	window.innerHeight;

			var isMobile							=	mobileAndTabletcheck();

			var size 								=	"";
			if (auxWindowWidth < 768)
				size 								=	"xs";
			else
			if (auxWindowWidth < 992)
				size 								=	"sm";
			else
			if (auxWindowWidth < 1200)
				size 								=	"md";
			else
				size 								=	"lg";

			if (lastDim == size)
			{
				changedDim = false;
			}
			else
			{
				changedDim = true;
				lastDim = size;
			};

			if (lastHeight != auxWindowHeight)
				changeHeight = true;
			else
				changeHeight = false;

			var intViewportWidth = window.innerWidth;

			if (logInConsole)
				console.log("WidthChange()" + auxWindowWidth
						+	" devicePixelRatio = " + devicePixelRatio
						+ 	" innerWidth = " + innerWidth
						+	" window.innerWidth = " + window.innerWidth
						+	" size = " + size
						+	" changedDim = " + changedDim
						+	" lastDim = " + lastDim
						+	" lastHeight = " + lastHeight
						+	" auxWindowHeight = " + auxWindowHeight
						+	" changeHeight = " + changeHeight
						+	" window.startActions = " + window.startActions
						+	" $(window).outerWidth() = " + $(window).outerWidth(true)
						+	" - " + pnlTop.outerWidth(true));

			var isTouch = isTouchDevice();

			if (isTouch)
				uc.Platform = "True";
			else
				uc.Platform = "False";

			var flagSizeOk 	= 0;
			var ind1 		= 0;
			var ind2 		= 0;
			var ind3 		= 0;
			var ind4 		= 0;
			var indFinal 	= 0;
			var parmPltf;
			var parmDim;

			for (var i = 0; i < parameters.length; i++)
			{
				parmDim 	= parameters[i].Dimension;
				parmPltf 	= parameters[i].DevicePlatform;

				if (logInConsole)
					console.log("Platform = " + parmPltf +	" Dimension = " + parmDim);

				if ((parmPltf == "MOB" && isMobile && parmDim == size)
				||  (parmPltf == "DSK" && !isMobile && parmDim == size))
				{
					flagSizeOk 	= 	5;
					indFinal	=	i;
					i 			=	parameters.length + 1;
				} else {
					if (((parmPltf == "MOB" && isMobile) || (parmPltf == "DSK" && !isMobile))
					&& parmDim == "al" && flagSizeOk < 4)
					{
						flagSizeOk 	= 	4;
						ind4		=	i;
					} else {
						if (parmPltf == "ALL" && parmDim == size && flagSizeOk < 3)
						{
							flagSizeOk 	= 	3;
							ind3		=	i;
						} else {
							if (((parmPltf == "MOB" && isMobile) || (parmPltf == "DSK" && !isMobile))
							&& parmDim == "al" && flagSizeOk < 4)
							{
								flagSizeOk 	= 	2;
								ind2		=	i;
							} else {
								if (parmPltf == "ALL" && flagSizeOk < 2)
								{
									flagSizeOk 	= 	1;
									ind1		=	i;
								};
							};
						};
					};
				};
			};

			/*	1Âº  -> Platform and Dymension OK
				2Âº  -> Platform Ok and Dymension All
				3Âº  -> Platform All and Dymension OK
				4Âº  -> Platform Ok and Dymension Not Found
				5Âº  -> Platform All and Dymension Not Found
				6Âº  -> Nothing, get frist
			*/

			if (flagSizeOk < 5)
				if (flagSizeOk == 4)
				{
					indFinal = ind4;
				} else {
					if (flagSizeOk == 3)
					{
						indFinal = ind3;
					} else {
						if (flagSizeOk == 2)
						{
							indFinal = ind2;
						} else {
							if (flagSizeOk == 1)
							{
								indFinal = ind1;
							} else {
								if (logInConsole)
									console.log("Can not find proper Platform / Dimension. Using frist definition.");
								indFinal =	0;
							}
						}
					}
				};

			if (logInConsole)
				console.log("Selected Dimension = " + parameters[indFinal].Dimension
						+	" | Platform = " + parameters[indFinal].DevicePlatform);

			var actions = window.startActions.split(",");
			for (var i = 0; i < actions.length -1; i++)
			{
				var action = actions[i].split(".")[0];
				var auxArea = actions[i].split(".")[1];

				if (logInConsole)
					console.log(action + " -> " + auxArea);

				if (auxArea == "Top")
				{
					if (action == "push" || action == "float")
					{
						parameters[indFinal].Regions.Top.Mode =	action;
					};
					if (action == "show")
					{
						parameters[indFinal].Regions.Top.IsVisible =	true;
					};
					if (action == "hide")
					{
						parameters[indFinal].Regions.Top.IsVisible =	false;
					};
					if (action == "tm")
					{
						if (parameters[indFinal].Regions.Top.Mode == "push")
							parameters[indFinal].Regions.Top.Mode = "float"
						else
							parameters[indFinal].Regions.Top.Mode = "push"
					};
					if (action == "tv")
					{
						if (parameters[indFinal].Regions.Top.IsVisible)
							parameters[indFinal].Regions.Top.IsVisible 	= false
						else
							parameters[indFinal].Regions.Top.IsVisible	= true
					};
				};

				if (auxArea == "Left")
				{
					if (action == "push" || action == "float")
					{
						parameters[indFinal].Regions.Left.Mode =	action;
					};
					if (action == "show")
					{
						parameters[indFinal].Regions.Left.IsVisible =	true;
					};
					if (action == "hide")
					{
						parameters[indFinal].Regions.Left.IsVisible =	false;
					};
					if (action == "tm")
					{
						if (parameters[indFinal].Regions.Left.Mode == "push")
							parameters[indFinal].Regions.Left.Mode = "float"
						else
							parameters[indFinal].Regions.Left.Mode = "push"
					};
					if (action == "tv")
					{
						if (parameters[indFinal].Regions.Left.IsVisible)
							parameters[indFinal].Regions.Left.IsVisible = false
						else
							parameters[indFinal].Regions.Left.IsVisible = true
					};
				};

				if (auxArea == "Right")
				{
					if (action == "push" || action == "float")
					{
						parameters[indFinal].Regions.Right.Mode 		=	action;
					};
					if (action == "show")
					{
						parameters[indFinal].Regions.Right.IsVisible =	true;
					};
					if (action == "hide")
					{
						parameters[indFinal].Regions.Right.IsVisible =	false;
					};
					if (action == "tm")
					{
						if (parameters[indFinal].Regions.Right.Mode == "push")
						{
							parameters[indFinal].Regions.Right.Mode = "float";
						}
						else
						{
							parameters[indFinal].Regions.Right.Mode = "push";
						}
					};
					if (action == "tv")
					{
						if (parameters[indFinal].Regions.Right.IsVisible)
							parameters[indFinal].Regions.Right.IsVisible = false
						else
							parameters[indFinal].Regions.Right.IsVisible = true
					};
				};

				if (auxArea == "Bottom")
				{
					if (action == "push" || action == "float")
					{
						parameters[indFinal].Regions.Bottom.Mode =	action;
					};
					if (action == "show")
					{
						parameters[indFinal].Regions.Bottom.IsVisible =	true;
					};
					if (action == "hide")
					{
						parameters[indFinal].Regions.Bottom.IsVisible =	false;
					};
					if (action == "tm")
					{
						if (parameters[indFinal].Regions.Bottom.Mode == "push")
							parameters[indFinal].Regions.Bottom.Mode = "float"
						else
							parameters[indFinal].Regions.Bottom.Mode = "push"
					};
					if (action == "tv")
					{
						if (parameters[indFinal].Regions.Bottom.IsVisible)
							parameters[indFinal].Regions.Bottom.IsVisible = false
						else
							parameters[indFinal].Regions.Bottom.IsVisible = true
					}
				}
			}

			parmPanelTop 		=	parameters[indFinal].Regions.Top;
			parmPanelBottom		=	parameters[indFinal].Regions.Bottom;
			parmPanelLeft		=	parameters[indFinal].Regions.Left;
			parmPanelRight		=	parameters[indFinal].Regions.Right;
			parmCenter			=	parameters[indFinal].Regions.Center;
			parmContainer		=	parameters[indFinal].Regions.Container;

			hasParmRead			=	1;
		} else {
			if (logInConsole)
				console.log("call me later");
			flagCallResize = 1;
		}
	}

	function addZero(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	function applyEfectTop()
	{
		if (logInConsole)
			console.log("applyEfect Top. "
					+	" dnnMode = "		+ dnnMode
					+	" dnnIsVisible = "	+ dnnIsVisible
					+	" dnlPB = "			+ dnlPB
					+	" dnrPB = "			+ dnrPB
					+	" dnnHeight = "		+ dnnHeight
					+	" multiScroll = "	+ multiScroll
					+	" indexFloat = "	+ indexFloat
					);

		if (dnnMode == "float" || dnnMode == "smart" || multiScroll)
			pnlTop.css("position", "fixed");
		else
			pnlTop.css("position", "absolute");

		if (dnnMode == "smart" && flagScrollEfect != 1)
		{
			flagScrollEfect	= 1;
			addScrollListener(document,window,0);
		};

		if (dnnMode == "float")
		{
			orderFloat = 0;

			if (indexFloat != 9999)
				orderFloat	= indexFloat;

			if (orderFloat > 0)
				orderFloat	= 4 + orderFloat;
			else
				orderFloat	= 4;

			pushTop 		= 0;
			uc.TopMode 		= "Float";
			pnlTop.css("z-index", orderFloat);
		}
		else
		{
			pushTop = dnnHeight;

			pnlTop.css("z-index", 1);

			if (dnnMode == "push")
			{
				uc.TopMode = "Push";
			}
			else
			{
				uc.TopMode = "Smart";
			}
		}

		if (dnnIsVisible)
		{
			uc.TopVisible = "True";

			pnlTop.animate({top:0}, animationTime);
			pnlTop.animate({opacity:1}, animationTime);
			pnlTop.animate({visibility:1}, animationTime);

			pnlCenter.animate({top:pushTop},animationTime);

			if ($(".blockCenter").length != 0)
				blockCenter.css({top:pushTop});

			if (dnlPB == "full")
				pnlLeft.animate({top:0},animationTime);
			else
				pnlLeft.animate({top:pushTop},animationTime);

			if (dnrPB == "full")
				pnlRight.animate({top:0},animationTime);
			else
				pnlRight.animate({top:pushTop},animationTime);
		}
		else
		{
			pushTop 	  	= 0;
			uc.TopVisible 	= "False";

			pnlTop.animate({top:(-1 * dnnHeight)}, animationTime);
			pnlTop.animate({opacity:0}, animationTime);
			pnlTop.animate({visibility:0}, animationTime);

			pnlCenter.animate({top:0}, animationTime);
			pnlLeft.animate({top:0}, animationTime);
			pnlRight.animate({top:0}, animationTime);

			if ($(".blockCenter").length != 0)
				blockCenter.css({top:0});
		};
		testFloatBlock();
	};

	function applyEfectLeft()
	{
		if (logInConsole)
			console.log("applyEfect Left. "
					+	" dnlMode = "		+ dnlMode
					+	" dnlIsVisible = "	+ dnlIsVisible
					+	" dnlPB = "			+ dnlPB
					+	" dnrPB = "			+ dnrPB
					+	" dnlWidth = "		+ dnlWidth
					+	" multiScroll = "	+ multiScroll
					+	" indexFloat = "	+ indexFloat
					);

		if (dnlIsMini && dnlMinDefWidth > 0)
			dnlWidth =	dnlMinDefWidth;
		else
			dnlWidth =	dnlDefWidth;

			if (logInConsole)
				console.log("after if Mini."
					+	" dnlWidth = " 			+ dnlWidth
					+	" dnlIsMini = "			+ dnlIsMini
					+	" dnlDefWidth = "		+ dnlDefWidth
					+	" dnlMinDefWidth = "	+ dnlMinDefWidth
					);

		if ((!multiScroll) && dnlPB == "full" && parmPanelLeft.OverflowY == "auto")
				pnlLeft.css("position","fixed");
			else
				pnlLeft.css("position","absolute");

		if (dnlMode == "float")
		{
			uc.LeftMode	= "Float";

			orderFloat = 0;

			if (indexFloat != 9999)
				orderFloat	= indexFloat;

			if (orderFloat > 0)
				orderFloat	= 4 + orderFloat;
			else
				orderFloat 	= 4;

			pnlLeft.css("z-index", orderFloat);

			pnlCenter.animate({paddingLeft:0}, animationTime);
			pnlBottom.animate({paddingLeft:0},animationTime);
			pnlTop.animate({paddingLeft:0},animationTime);

			if ($(".blockCenter").length != 0)
				blockCenter.css({paddingLeft:0});

			if (dnlIsVisible)
			{
				uc.LeftVisible = "True";

				if (dnlWidth > 0)
					pnlLeft.animate({width:dnlWidth}, animationTime);

				pnlLeft.animate({opacity:1}, animationTime);
				pnlLeft.animate({visibility:1}, animationTime);
			}
			else
			{
				uc.LeftVisible = "False";
				pnlLeft.animate({width:0}, animationTime);
				pnlLeft.animate({opacity:0}, animationTime);
				pnlLeft.animate({visibility:0}, animationTime);
			}
		}
		else
		{
			uc.LeftMode = "Push";

			pnlLeft.css("z-index", 1);

			if (dnlIsVisible)
			{
				uc.LeftVisible = "True";

				if (dnlWidth > 0)
				{
					pnlCenter.animate({paddingLeft:dnlWidth},animationTime);
					pnlLeft.animate({width:dnlWidth},animationTime);

					if ($(".blockCenter").length != 0)
						blockCenter.css({paddingLeft:dnlWidth});
				};
				pnlLeft.animate({opacity:1}, animationTime);
				pnlLeft.animate({visibility:1}, animationTime);

				if (dnlPB == "full")
				{
					pnlTop.animate({paddingLeft:dnlWidth},animationTime);
					pnlBottom.animate({paddingLeft:dnlWidth},animationTime);
				}
				else
				{
					pnlTop.animate({paddingLeft:0},animationTime);
					pnlBottom.animate({paddingLeft:0},animationTime);
				}
			}
			else
			{
				uc.LeftVisible = "False";
				pnlCenter.animate({paddingLeft:0},animationTime);
				pnlLeft.animate({width:0},animationTime);
				pnlLeft.animate({opacity:0}, animationTime);
				pnlLeft.animate({visibility:0}, animationTime);

				pnlTop.animate({paddingLeft:0},animationTime);
				pnlBottom.animate({paddingLeft:0},animationTime);

				if ($(".blockCenter").length != 0)
					blockCenter.css({paddingLeft:0});
			};
		};
		testFloatBlock();
	};

	function applyEfectRight()
	{
		if (logInConsole)
			console.log("applyEfect Right. "
					+	" dnrMode = "		+ dnrMode
					+	" dnrIsVisible = "	+ dnrIsVisible
					+	" dnlPB = "			+ dnlPB
					+	" dnrPB = "			+ dnrPB
					+	" dnrWidth = "	+ dnrWidth
					+	" multiScroll = "	+ multiScroll
					+	" indexFloat = "	+ indexFloat
					);

		if (dnrIsMini)
			dnrWidth =	dnrMinDefWidth;
		else
			dnrWidth =	dnrDefWidth;

			if (logInConsole)
				console.log("after if Mini."
						+	" dnrWidth = " 			+ dnrWidth
						+	" dnrIsMini = "			+ dnrIsMini
						+	" dnrDefWidth = "		+ dnrDefWidth
						+	" dnrMinDefWidth = "	+ dnrMinDefWidth
						);

		if ((!multiScroll) && dnrPB == "full" && parmPanelRight.OverflowY == "auto")
				pnlRight.css("position","fixed");
			else
				pnlRight.css("position","absolute");

		if (dnrMode == "float")
		{
			uc.RightMode 	= "Float";

			if (indexFloat != 9999)
				orderFloat	= indexFloat;

			if (orderFloat > 0)
				orderFloat	= 4 + orderFloat;
			else
				orderFloat 	= 4;

			pnlRight.css("z-index", orderFloat);

			if (dnrIsVisible)
			{
				uc.RightVisible = "True";

				if (dnrWidth > 0)
					pnlRight.animate({width:dnrWidth}, animationTime);

				pnlRight.animate({opacity:1}, animationTime);
				pnlRight.animate({visibility:1}, animationTime);
			}
			else
			{
				uc.RightVisible = "False";

				pnlRight.animate({width:0}, animationTime);
				pnlRight.animate({opacity:0}, animationTime);
				pnlRight.animate({visibility:0}, animationTime);
			}
		}
		else
		{
			uc.RightMode = "Push";

			pnlRight.css("z-index", 1);

			if (dnrIsVisible)
			{
				uc.RightVisible = "True";

				if (dnrWidth > 0)
					pnlRight.animate({width:dnrWidth}, animationTime);

				pnlRight.animate({opacity:1}, animationTime);
				pnlRight.animate({visibility:1}, animationTime);
			}
			else
			{
				uc.RightVisible = "False";
				pnlRight.animate({width:0}, animationTime);
				pnlRight.animate({opacity:0}, animationTime);
				pnlRight.animate({visibility:0}, animationTime);
			}
		};
		testFloatBlock();
	};

	function applyEfectBottom()
	{
		if (logInConsole)
			console.log("applyEfect Bottom. "
					+	" dnsMode = "		+ dnsMode
					+	" dnsIsVisible = "	+ dnsIsVisible
					+	" dnlPB = "			+ dnlPB
					+	" dnrPB = "			+ dnrPB
					+	" dnsHeight = "	+ dnsHeight
					+	" multiScroll = "	+ multiScroll
					+	" indexFloat = "	+ indexFloat
					);

		if (dnsMode == "float")
		{
			uc.BottomMode 		= "Float";

			if (indexFloat != 9999)
				orderFloat	= indexFloat;

			if (orderFloat > 0)
				orderFloat	= 4 + orderFloat;
			else
				orderFloat = 4;

			pnlBottom.css("z-index", orderFloat);

			if (dnsIsVisible)
			{	uc.BottomVisible = "True";

				if (dnsHeight > 0)
					pnlBottom.animate({height:dnsHeight}, animationTime);

				pnlBottom.animate({opacity:1}, animationTime);
				pnlBottom.animate({visibility:1}, animationTime);
			}
			else
			{
				uc.BottomVisible = "False";
				pnlBottom.animate({height:0}, animationTime);
				pnlBottom.animate({opacity:0}, animationTime);
				pnlBottom.animate({visibility:0}, animationTime);
			}
		}
		else
		{
			uc.BottomMode = "Push";

			pnlBottom.css("z-index", 0);

			if (dnsIsVisible)
			{
				uc.BottomVisible = "True";

				if (dnsHeight > 0)
					pnlBottom.animate({height:dnsHeight}, animationTime);

				pnlBottom.animate({opacity:1}, animationTime);
				pnlBottom.animate({visibility:1}, animationTime);
			}
			else
			{
				uc.BottomVisible = "False";
				pnlBottom.animate({height:0}, animationTime);
				pnlBottom.animate({opacity:0}, animationTime);
				pnlBottom.animate({visibility:0}, animationTime);
			}
		};
		testFloatBlock();
	};

	function createSensorResize(divId) {

		var element = document.getElementById(divId);
		if (element != null)
		{
			if (logInConsole)
				console.log("Cretaing sensor " + divId +  ' - SENSOR IS DISABLED!!!!!');

			//new ResizeSensor(element, function() {
				if (logInConsole)
				{
					console.log("--------------------------------------------------")
					console.log(divId + 'Changed to ' + element.clientHeight
							+	" relDnlSize = " + relDnlSize
							+	" relDnrSize = " + relDnrSize
							+	" relScrSize = " + relScrSize
							+	" centerHeight = " + centerHeight
						);
				}

				var auxRelScrSize 	= relScrSize;

				if (dnsMode == "push" && dnsIsVisible)
					auxRelScrSize 	-= dnsHeight;

				var changeRelSize 	= element.clientHeight;
				var flagResize 		= 0;

				if ((divId == "dnlInt" && dnlIsVisible && (dnlPB != "full" || parmPanelLeft.OverflowY != "auto"))/* || dnlMode != "float")*/
				||  (divId == "dnrInt" && dnrIsVisible && (dnrPB != "full" || parmPanelRight.OverflowY != "auto"))/* || dnrMode != "float")*/
				|| divId == "dncInt")
				{
					var testChangeRelSize 	= 0;

					if (divId == "dnlInt")
					{
						if (parmPanelLeft.OverflowX == "auto" && element.clientWidth >= dnlWidth)
							changeRelSize +=	18;

						testChangeRelSize = changeRelSize;
						if (dnlPB == "full")
							testChangeRelSize	-= pushTop;
					}

					if (divId == "dnrInt")
					{
						if (parmPanelRight.OverflowX == "auto" && element.clientWidth >= dnrWidth)
							changeRelSize +=	18;

						testChangeRelSize = changeRelSize;
						if (dnrPB == "full")
							testChangeRelSize 	-= pushTop;
					}

					if (divId == "dncInt")
					{
						if (parmContainer.OverflowX == "auto")
						{
							var auxWidth = 0;
							if (dnlIsVisible && dnlMode == "push")
								auxWidth += dnlWidth;
							if (dnrIsVisible && dnrMode == "push")
								auxWidth += dnrWidth;

							if (element.clientWidth >= (auxWindowWidth - auxWidth))
								changeRelSize +=	18;
						}

						testChangeRelSize = changeRelSize;
					}

					if ((divId == "dncInt" && testChangeRelSize < centerHeight 									//	Smaller than before
					&&	centerHeight > relDnlSize && centerHeight > relDnrSize && centerHeight > auxRelScrSize)	//	and was the ruler
					||  (divId == "dnlInt" && testChangeRelSize < relDnlSize
					&& 	relDnlSize > centerHeight && relDnlSize > relDnrSize && relDnlSize > auxRelScrSize)
					||  (divId == "dnrInt" && testChangeRelSize < relDnrSize
					&&	relDnrSize > relDnlSize && relDnrSize > centerHeight && relDnrSize > auxRelScrSize)
					||  (testChangeRelSize > centerHeight && testChangeRelSize > relDnlSize						//	Or is bigger than anyone
					&& 	 testChangeRelSize > relDnrSize && testChangeRelSize > auxRelScrSize))
					{
						if (logInConsole)
							console.log("Resizing! testChangeRelSize = " + testChangeRelSize);

						if (divId == "dncInt")
						{
							pnlCenter.animate({height:changeRelSize}, 0);

							if ($(".blockCenter").length != 0)
								blockCenter.css({height:changeRelSize});
						}

						if  (divId == "dnlInt")
						{
							pnlLeft.animate({height:changeRelSize}, 0);
						}

						if  (divId == "dnrInt")
						{
							pnlRight.animate({height:changeRelSize}, 0);
						}

						flagResize = 1;
						setTimeout(function(){
							calcWidthAreas(0);
							calcHeightAreas(0);

							setTimeout(function(){
								calcWidthAreas(0);
							},200);
						},140);
					}
				}

				if (flagResize == 1)
					if (logInConsole)
						console.log("After Changed relDnlSize = " + relDnlSize
								+	" relDnrSize = " + relDnrSize
								+	" relScrSize = " + relScrSize
								+	" auxRelScrSize = " + auxRelScrSize
								+	" centerHeight = " + centerHeight
							);
				else
					if (logInConsole)
						console.log("NO RESIZE!!");
		//	});
		}
	}

	var calcHeightAreas = function(calcHeightAnimationTime)	//	multiScroll = true just once; multiScroll = false when Change Mode (change visible??).
	{

		setTimeout(function(){

			if (logInConsole)
				console.log("ANTES $(body).prop(clientWidth) = " + $("body").prop("clientWidth")
						+	" window.innerWidth = " + window.innerWidth);

			var antClientWidth = $("body").prop("clientWidth");

			if (logInConsole)
			{
				var d = new Date();
				var h = addZero(d.getHours());
				var m = addZero(d.getMinutes());
				var s = addZero(d.getSeconds());
				console.log(h + ":" + m + ":" + s  + " - Resize Height Left / Right / Center. " + " multiScroll = " + multiScroll);
			}

			var size 			= 0;
			var dnlSize 		= 0;
			var dnrSize 		= 0;
			var dnsSize 		= 0;
			var difSize 		= 0;

			pnlRight.css("height","");
			pnlLeft.css("height","");
			pnlCenter.css("height","");

			centerHeight 		= $("#dncInt").outerHeight(true);

			if (centerHeight == null)
				centerHeight = 0;
			//Add scroll

			if (dnlMode == "push" && dnlIsVisible)
				if ($("#dnlInt").length != 0)
				{
					dnlSize		= $("#dnlInt").outerHeight(true);

					if (parmPanelLeft.OverflowX == "auto" && $("#dnlInt").outerWidth(true) >= dnlWidth)
						dnlSize +=	18;
				}
				else
					dnlSize		= dnlWidth;

			if (dnrMode == "push" && dnrIsVisible)
				if ($("#dnrInt").length != 0)
				{
					dnrSize 	= $("#dnrInt").outerHeight(true);

					if (parmPanelRight.OverflowX == "auto" && $("#dnrInt").outerWidth(true) >= dnrWidth)
						dnrSize +=	18;
				}
				else
					dnrSize		= dnrWidth;

			if (dnsMode == "push" && dnsIsVisible)
				dnsSize 	= dnsHeight;

			if (logInConsole)
				console.log("*** pushTop = " + pushTop
						+	" dnl = " + dnlSize
						+	" dnr = " + dnrSize
						+	" dns " + dnsSize
						+	" centerHeight = " + centerHeight
						+	" size = " + size
						+	" auxWindowHeight = " + auxWindowHeight
						+	" Center.OverflowY = " + parmCenter.OverflowY
						+	" pnlRight.Height() = ");

			if (multiScroll)		//	Conteudo nao expande container height. Cria overflowY
			{
				var aux = 	pushTop + dnsSize;
				size 	=	auxWindowHeight - aux;

				pnlCenter.animate({height:size},calcHeightAnimationTime);

				if ($(".blockCenter").length != 0)
					blockCenter.css({height:size});

				if (dnlPB == "full" && parmPanelLeft.DynamicVisible)
					pnlLeft.height(auxWindowHeight);
				else
					if (dnlSize != size && parmPanelLeft.DynamicVisible)	/*parmPanelLeft.OverflowY == "auto" || dnlSize == 0) &&*/
						pnlLeft.height(size);

				if (dnrPB == "full" && parmPanelRight.DynamicVisible)
					pnlRight.height(auxWindowHeight);
				else
					if (dnrSize != size && parmPanelRight.DynamicVisible)	/*parmPanelRight.OverflowY == "auto" || dnlSize == 0) &&*/
						pnlRight.height(size);

				pnlBottom.css("top","");
				pnlBottom.animate({bottom:0},0);

			} else
			{
				size 		= auxWindowHeight - pushTop;
				relScrSize	= size;
				if (dnsMode == "push" && dnsIsVisible)
					size -= dnsSize;

				if (dnlPB == "full")
					if (parmPanelLeft.OverflowY == "auto")
						relDnlSize 			= 0;
					else
						relDnlSize 			= dnlSize - pushTop;
				else
					relDnlSize 				= dnlSize;

				if (dnrPB == "full")
					if (parmPanelRight.OverflowY == "auto")
						relDnrSize 			= 0;
					else
						relDnrSize 			= dnrSize - pushTop;
				else
					relDnrSize 				= dnrSize;

				if (size >= relDnlSize && size >= centerHeight && size >= relDnrSize)	// Viewport > que as areas, expande areas
				{
					pnlCenter.animate({height:size},calcHeightAnimationTime);

					if ($(".blockCenter").length != 0)
						blockCenter.css({height:size});

					if (dnlPB == "full")
						pnlLeft.animate({height:auxWindowHeight},calcHeightAnimationTime);
					else
						pnlLeft.animate({height:size},calcHeightAnimationTime);

					if (dnrPB == "full")
						pnlRight.animate({height:auxWindowHeight},calcHeightAnimationTime);
					else
						pnlRight.animate({height:size},calcHeightAnimationTime);
				}
				else
					if (relDnlSize >= centerHeight && relDnlSize >= relDnrSize)
					{
						if (dnlPB == "full")
							difSize = relDnlSize - centerHeight;

						if (parmPanelRight.DynamicVisible && dnrPB == "full" && difSize > 0
						&& ((relDnlSize - relDnrSize) < difSize))
							difSize = relDnlSize - relDnrSize;

						if (difSize > dnsSize)
							difSize = dnsSize;

						size 		=	relDnlSize - difSize;

						pnlCenter.animate({height:size},calcHeightAnimationTime);

						if ($(".blockCenter").length != 0)
							blockCenter.css({height:size});

						if (parmPanelRight.DynamicVisible)
							if (dnrPB == "full")
								if (parmPanelRight.OverflowY == "auto")
									pnlRight.animate({height:auxWindowHeight},calcHeightAnimationTime)
								else
									pnlRight.animate({height:(size + pushTop + dnsSize)},calcHeightAnimationTime);
							else
								pnlRight.animate({height:size},calcHeightAnimationTime);

						if (logInConsole)
							console.log("size =	" + size
									+	" relDnlSize = " + relDnlSize
									+	" relDnrSize = " + relDnrSize
									+	" difSize = " + difSize
									);
					}
					else
						if (dnrSize >= centerHeight && dnrSize >= relDnlSize)
						{
							if (dnrPB == "full")
								difSize = relDnrSize - centerHeight;

							if (parmPanelLeft.DynamicVisible && dnlPB == "full" && difSize > 0
							&& ((relDnrSize - relDnlSize) < difSize))
								difSize = relDnrSize - relDnlSize;

							if (difSize > dnsSize)
								difSize = dnsSize;

							size 		=	relDnrSize - difSize;
							pnlCenter.animate({height:size},calcHeightAnimationTime);

							if ($(".blockCenter").length != 0)
								blockCenter.css({height:size});

							if (parmPanelLeft.DynamicVisible)
								if (dnlPB == "full")
									if (parmPanelLeft.OverflowY == "auto")
										pnlLeft.animate({height:auxWindowHeight},calcHeightAnimationTime);
									else
										pnlLeft.animate({height:(size + pushTop + dnsSize)},calcHeightAnimationTime);
								else
									pnlLeft.animate({height:size},calcHeightAnimationTime);
						}
						else
						{
							size 		=	centerHeight;
							pnlCenter.animate({height:size},calcHeightAnimationTime);

							if ($(".blockCenter").length != 0)
								blockCenter.css({height:size});

							if (parmPanelLeft.DynamicVisible)
								if (dnlPB == "full")
									if (parmPanelLeft.OverflowY == "auto")
										pnlLeft.animate({height:auxWindowHeight},calcHeightAnimationTime);
									else
										pnlLeft.animate({height:(size + pushTop + dnsSize)},calcHeightAnimationTime);
								else
									pnlLeft.animate({height:size},calcHeightAnimationTime);

							if (parmPanelRight.DynamicVisible)
								if (dnrPB == "full")
									if (parmPanelRight.OverflowY == "auto")
										pnlRight.animate({height:auxWindowHeight},calcHeightAnimationTime);
									else
										pnlRight.animate({height:(size + pushTop + dnsSize)},calcHeightAnimationTime);
								else
									pnlRight.animate({height:size},calcHeightAnimationTime);
						}

				if (dnsIsVisible)
				{
					pnlBottom.css("bottom","");
					if (dnsMode == "float")
						pnlBottom.animate({top:(size + pushTop - dnsHeight)},0);
					else
						pnlBottom.animate({top:(size + pushTop)},0);
				}
			}

			if (logInConsole)
				console.log("DEPOIS $(body).prop(clientWidth) = " + $("body").prop("clientWidth")
						+	" window.innerWidth = " + window.innerWidth);

			if (antClientWidth != $("body").prop("clientWidth"))
				hasScroolChange = true;
			else
				hasScroolChange = false;


			setTimeout(function(){
				if (logInConsole)
					console.log("DEPOIS SET TIME OUT... $(body).prop(clientWidth) = " + $("body").prop("clientWidth")
						+	" window.innerWidth = " + window.innerWidth);

				if (antClientWidth != $("body").prop("clientWidth"))
					hasScroolChange = true;
				else
					hasScroolChange = false;

				if (hasScroolChange)
					calcWidthAreas(animationTime);
			},180);
		},120);


	};

	function calcWidthAreas(calcWidthAnimationTime)
	{
		if (logInConsole)
		{
			var d = new Date();
			var h = addZero(d.getHours());
			var m = addZero(d.getMinutes());
			var s = addZero(d.getSeconds());

			console.log(h + ":" + m + ":" + s  + " - Resize Width Center. auxWindowWidth = " + auxWindowWidth
					+	" $(body).prop(clientWidth) = " + $("body").prop("clientWidth")
					+	" window.innerWidth = " + window.innerWidth
					+	" dnlMode = " 			+ dnlMode
					+	" dnlIsVisible = "		+ dnlIsVisible
					+	" dnlWidth = "		 	+ dnlWidth
					+	" dnrMode = " 			+ dnrMode
					+	" dnrIsVisible = " 		+ dnrIsVisible
					+	" dnrWidth = " 			+ dnrWidth
					+	" dnlPB = " 			+ dnlPB
					+	" dnrPB = " 			+ dnrPB
					+	" hasScroolChange = " 	+ hasScroolChange
					);
		};

		//auxWindowWidth	= $("body").prop("clientWidth");
		//if (hasScroolChange)
			var centerWidth = $("body").prop("clientWidth");
		//else
		//	var centerWidth = window.innerWidth;

		var auxWidth = centerWidth;

		if (dnlMode == "push" && dnlIsVisible)
		{
			centerWidth = centerWidth - dnlWidth;
			if (dnlPB == "full")
				auxWidth -= dnlWidth;
		};

		if (dnrMode == "push" && dnrIsVisible)
		{
			centerWidth = centerWidth - dnrWidth;
			if (dnrPB == "full")
				auxWidth -= dnrWidth;
		};

		pnlCenter.animate({width:centerWidth}, calcWidthAnimationTime);

		if ($(".blockCenter").length != 0)
			blockCenter.css({width:centerWidth});

		if (logInConsole)
			console.log("center centerWidth = " + centerWidth
					+	" auxWidth = " + auxWidth
					);

		if (auxWidth != 0)
		{
			pnlTop.animate({width:auxWidth}, calcWidthAnimationTime);
			pnlBottom.animate({width:auxWidth}, calcWidthAnimationTime);
		}
	};

	function WindowChange() {

		setTimeout(function(){

			if (logInConsole)
			{
				console.log("------------------------WindowChange-----------------------------");
				console.log("lastDim = " + lastDim);
			}

			if (typeof parmPanelTop !== 'undefined')
			{	var remClassTop 			= parmPanelTop.Class;
				var remClassMinimizeModeTop = parmPanelTop.MinimizeModeClass;
				var remClassLeft 			= parmPanelLeft.Class;
				var remClassCenter 			= parmCenter.Class;
				var remClassRight			= parmPanelRight.Class;
				var remClassBottom 			= parmPanelBottom.Class;
			};

			readParms();

			if (logInConsole)
			{
				var d = new Date();
				var h = addZero(d.getHours());
				var m = addZero(d.getMinutes());
				var s = addZero(d.getSeconds());

				console.log(h + ":" + m + ":" + s  + " - actualDim = " + lastDim + " changedDim = " + changedDim + " changeHeight " + changeHeight);
			}

			if (lastDim != "??" && lastDim != undefined)
			{
				multiScroll 						=	(parmContainer.OverflowRule == "P");

				if (changedDim)	//	Change Dimensions xs / sm / md / lg
				{
					if (logInConsole)
						console.log("remClassTop = " + remClassTop
								+	" remClassMinimizeModeTop = " + remClassMinimizeModeTop
								+	" remClassLeft = " + remClassLeft
								+	" remClassCenter = " + remClassCenter
								+	" remClassRight = " + remClassRight
								+	" remClassBottom = " + remClassBottom
						);

					if (remClassTop != undefined)
						pnlTop.removeClass(remClassTop);

					if (remClassMinimizeModeTop != undefined)
						pnlTop.removeClass(remClassMinimizeModeTop);

					if (remClassLeft != undefined)
						pnlLeft.removeClass(remClassLeft);

					if (remClassCenter != undefined)
						pnlCenter.removeClass(remClassCenter);

					if (remClassRight != undefined)
						pnlRight.removeClass(remClassRight);

					if (remClassBottom != undefined)
						pnlBottom.removeClass(remClassBottom);

					if (logInConsole)
						console.log("Sizes. " + pnlCenter.outerHeight(true));

					dnlWidth	=	0;
					dnrWidth	=	0;
					dnnHeight	=	0;
					dnsHeight	=	0;

					if (parmContainer.IsMain)
					{
						document.documentElement.style.overflowY = parmContainer.OverflowY;
						document.documentElement.style.overflowX = parmContainer.OverflowX;
					};

					if (parmContainer.Class.length > 0)
						container.addClass(parmContainer.Class);

					//	dnl
					if (parmPanelLeft.DynamicVisible || parmPanelLeft.IsVisible)
					{
						pnlLeft.css("display", "block");
						pnlLeft.css("overflow-y", parmPanelLeft.OverflowY);
						pnlLeft.css("overflow-x", parmPanelLeft.OverflowX);

						parmPanelLeft.DynamicVisible 		=	true;
						dnlMode 							=	parmPanelLeft.Mode;
						dnlIsVisible					=	parmPanelLeft.IsVisible;
						dnlPB 								=	parmPanelLeft.PositionBehaviour;
						dnlIsMini							=	parmPanelLeft.DefaultMinimized;
						dnlMinimizedClass			= parmPanelLeft.MinimizeModeClass;

						if (dnlMode != 'float')
						{
							var partAreaVisible = (inIframe() ? 'frame' : '') + 'Left_visible';
							var auxLs = localStorage.getItem(partAreaVisible);
							if (auxLs != null && auxLs.length > 0)
								dnlIsVisible = (auxLs == 'true');
						}
						else
						{
								dnlIsVisible	= false;
						}

						if (parseInt(parmPanelLeft.MinimizeModeWidth.replace('px','').replace('%',''))
						|| dnlMinimizedClass.length > 0)
						{
							var partAreaMinimize = (inIframe() ? 'frame' : '') + 'Left_minimize';
							var auxLs = localStorage.getItem(partAreaMinimize);
							if (auxLs != null && auxLs.length > 0)
								dnlIsMini = (auxLs == 'true');

							auxVetSizeDef			=	parmPanelLeft.MinimizeModeWidth.split("%");
							if (auxVetSizeDef.length > 1)
								dnlMinDefWidth	=	auxVetSizeDef[1] * auxWindowWidth / 100;
							else
								dnlMinDefWidth	=	parseInt(parmPanelLeft.MinimizeModeWidth.replace("px",""));

						} else {
							dnlIsMini = false;
						}

						this.LeftMinimized		=	dnlIsMini;
						this.LeftMaximized		=	!dnlIsMini;

						if (parmPanelLeft.Class.length > 0  && !pnlLeft.hasClass(parmPanelLeft.Class))
							pnlLeft.addClass(parmPanelLeft.Class);

						auxVetSizeDef			=	parmPanelLeft.SizeWidth.split("%");
						if (auxVetSizeDef.length > 1)
							dnlDefWidth			=	auxVetSizeDef[1] * auxWindowWidth / 100;
						else
							dnlDefWidth			=	parseInt(parmPanelLeft.SizeWidth.replace("px",""));

						if (dnlIsMini)
						{
							dnlWidth	=	dnlMinDefWidth;
							if (dnlMinimizedClass.length > 0)
								if (!pnlLeft.hasClass(dnlMinimizedClass))
									pnlLeft.addClass(dnlMinimizedClass);
						}
						else
						{
							dnlWidth	=	dnlDefWidth;
							if (dnlMinimizedClass.length > 0)
								if (pnlLeft.hasClass(dnlMinimizedClass))
									pnlLeft.removeClass(dnlMinimizedClass);
						}
					} else
					{
						pnlLeft.css("display", "none");
						dnlIsVisible	=	false;
					};

					//	dnr
					if (parmPanelRight.DynamicVisible || parmPanelRight.IsVisible)
					{
						pnlRight.css("display", "block");
						pnlRight.css("overflow-y", parmPanelRight.OverflowY);
						pnlRight.css("overflow-x", parmPanelRight.OverflowX);

						dnrMode 							=	parmPanelRight.Mode;
						dnrIsVisible					=	parmPanelRight.IsVisible;
						dnrPB 								=	parmPanelRight.PositionBehaviour;
						dnrIsMini							=	parmPanelRight.DefaultMinimized;
						dnrMinimizedClass			=	parmPanelRight.MinimizeModeClass;

						if (parseInt(parmPanelRight.MinimizeModeWidth.replace('px','').replace('%',''))
						|| dnrMinimizedClass.length > 0)
						{
							var partAreaMinimize = (inIframe() ? 'frame' : '') + 'Right_minimize';
							var auxLs = localStorage.getItem(partAreaMinimize);

							if (auxLs != null && auxLs.length > 0)
								dnrIsMini = (auxLs == 'true');

							auxVetSizeDef			=	parmPanelRight.MinimizeModeWidth.split("%");
							if (auxVetSizeDef.length > 1)
								dnrMinDefWidth	=	auxVetSizeDef[1] * auxWindowWidth / 100;
							else
								dnrMinDefWidth	=	parseInt(parmPanelRight.MinimizeModeWidth.replace("px",""));

						} else {
							dnrIsMini = false;
						}

						this.RightMinimized		=	dnrIsMini;
						this.RightMaximized		=	!dnrIsMini;

						if (parmPanelRight.Class.length > 0 && !pnlRight.hasClass(parmPanelRight.Class))
							pnlRight.addClass(parmPanelRight.Class);

						auxVetSizeDef						=	parmPanelRight.SizeWidth.split("%");
						if (auxVetSizeDef.length > 1)
							dnrDefWidth						=	auxVetSizeDef[1] * auxWindowWidth / 100;
						else
							dnrDefWidth						=	parseInt(parmPanelRight.SizeWidth.replace("px",""));

						if (dnrIsMini)
							dnrWidth 						=	dnrMinDefWidth;
							if (dnrMinimizedClass.length > 0)
								if (!pnlRight.hasClass(dnrMinimizedClass))
									pnlRight.addClass(dnrMinimizedClass);
						else
							dnrWidth 						=	dnrDefWidth;
							if (dnrMinimizedClass.length > 0)
								if (pnlRight.hasClass(dnrMinimizedClass))
									pnlRight.removeClass(dnrMinimizedClass);
					} else
					{
						pnlRight.css("display", "none");
						dnrIsVisible 						=	false;
					};

					//	dnn
					if (parmPanelTop.DynamicVisible || parmPanelTop.IsVisible)
					{
						pnlTop.css("display", "block");
						pnlTop.css("overflow-y", parmPanelTop.OverflowY);
						pnlTop.css("overflow-x", parmPanelTop.OverflowX);

						dnnMode 			=	parmPanelTop.Mode;
						dnnIsVisible	=	parmPanelTop.IsVisible;

						if (parmPanelTop.Class.length > 0 && !pnlTop.hasClass(parmPanelTop.Class))
							pnlTop.addClass(parmPanelTop.Class);

						auxVetSizeDef	=	parmPanelTop.SizeHeight.split("%");
						if (auxVetSizeDef.length > 1)
							dnnHeight	=	auxVetSizeDef[1] * auxWindowHeight / 100;
						else
							dnnHeight	=	parseInt(parmPanelTop.SizeHeight.replace("px",""));

						pnlTop.height(dnnHeight);

						auxVetSizeDef	=	parmPanelTop.MinimizeModeHeight.split("%");
						if (auxVetSizeDef.length > 1)
							dnnMinDefHeight	=	auxVetSizeDef[1] * auxWindowHeight / 100;
						else
							dnnMinDefHeight	=	parseInt(parmPanelTop.MinimizeModeHeight.replace("px",""));

						dnnMinClass = parmPanelTop.MinimizeModeClass;

					} else
					{
						pnlTop.css("display", "none");
						dnnIsVisible	=	false;
					};

					//	dns
					if (parmPanelBottom.DynamicVisible || parmPanelBottom.IsVisible)
					{
						pnlBottom.css("display", "block");
						pnlBottom.css("overflow-y", parmPanelBottom.OverflowY);
						pnlBottom.css("overflow-x", parmPanelBottom.OverflowX);

						parmPanelBottom.DynamicVisible 		=	true;
						dnsMode 							=	parmPanelBottom.Mode;
						dnsIsVisible						=	parmPanelBottom.IsVisible;

						if (parmPanelBottom.Class.length > 0  && !pnlBottom.hasClass(parmPanelBottom.Class))
							pnlBottom.addClass(parmPanelBottom.Class);

						auxVetSizeDef						=	parmPanelBottom.SizeHeight.split("%");
						if (auxVetSizeDef.length > 1)
							dnsHeight					=	auxVetSizeDef[1] * auxWindowHeight / 100;
						else
							dnsHeight					=	parseInt(parmPanelBottom.SizeHeight.replace("px",""));

						if (multiScroll)
							pnlBottom.css("position", "absolute");
						else
							pnlBottom.css("position", "absolute");

					} else
					{
						pnlBottom.css("display", "none");
						dnsIsVisible 						=	false;
					};

					pnlCenter.css("overflow-y", parmCenter.OverflowY);
					pnlCenter.css("overflow-x", parmCenter.OverflowX);

					if (parmCenter.Class.length > 0 && !pnlCenter.hasClass(parmCenter.Class))
						pnlCenter.addClass(parmCenter.Class);

					//	Apply effects

					indexFloat 		= 0;
					nextIndexFloat	= 0;

					if (parmPanelTop.DynamicVisible)
						applyEfectTop();

					if (parmPanelLeft.DynamicVisible)
						applyEfectLeft();

					if (parmPanelRight.DynamicVisible)
						applyEfectRight();

					if (parmPanelBottom.DynamicVisible)
						applyEfectBottom();
					//
					//	Resize Height/ Width
					//

					setTimeout(function(){
						calcHeightAreas(animationTime);
						setTimeout(function(){
							calcWidthAreas(animationTime);
							testFloatBlock();
							animationTime	=	60;
						}, 100);
					}, 100);

				} else {
					setTimeout(function(){
						calcWidthAreas(animationTime);
						calcHeightAreas(animationTime);
					},80);
				};
			};
		}, 120);
	};

	// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
	// https://codepen.io/ganmahmud/pen/RaoKZa
	function swipedetect(document, callback)
	{
		var touchsurface = el,
		swipedir,
		startX,
		startY,
		distX,
		distY,
		threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handleswipe = callback || function(swipedir){}

		touchsurface.addEventListener('touchstart', function(e)
		{

			var newPath = event.composedPath ? event.composedPath() : event.path;

			var hasScroll = showStateGridScroll('touchstart',newPath);

			var touchobj = e.changedTouches[0];
			swipedir = 'none';
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime(); // record time when finger first makes contact with surface

			if (logInConsole)
				console.log('Swipe. touchstart fim. startX = ' + startX
									+	' startY = ' + startY
									+	'startTime  = ' + startTime
								);
			//e.preventDefault();
		}, false)

		touchsurface.addEventListener('touchmove', function(e)
		{
			//e.preventDefault() // prevent scrolling when inside DIV
		}, false)

		touchsurface.addEventListener('touchend', function(e)
		{
			if (logInConsole)
				console.log('Swipe. touchend ini. startX = ' + startX
									+	' startY = ' + startY
									+	'startTime  = ' + startTime
								);
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX; 									// get horizontal dist traveled by finger while in contact with surface
			distY = touchobj.pageY - startY;									// get vertical dist traveled by finger while in contact with surface
			elapsedTime = new Date().getTime() - startTime; 	// get time elapsed

			if (logInConsole)
				console.log('Swipe. touchend afetr calc. distX = ' + distX
									+	' distY = ' + distY
									+	'elapsedTime  = ' + elapsedTime
								);

			if (elapsedTime <= allowedTime)	// first condition for awipe met
			{
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint)	// 2nd condition for horizontal swipe met
				{
					swipedir = (distX < 0)? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
				}
				else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint)
				{ // 2nd condition for vertical swipe met
					swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
				}
			}
			if (logInConsole)
				console.log('Swipe. touchend afetr calcDir. swipedir = ' + swipedir);

			var newPath = event.composedPath ? event.composedPath() : event.path;

			var hasScroll = showStateGridScroll('touchend',newPath);
			if (hasScroll)
			{
				if (logInConsole)
					console.log('Swipe.hasScroll = true');
			}
			else {
				if (logInConsole)
					console.log('Swipe.hasScroll = false');
				handleswipe(swipedir)
			}
			//e.preventDefault()
		}, false)
	}

	if (isTouchDevice() == true)
	{
		var el = document;
		swipedetect(el, function(swipedir)
		{
			// swipedir contains either "none", "left", "right", "top", or "down"
			if (logInConsole)
				console.log("swipedetect. swipedir = " + swipedir);

			if (swipedir != "right" && swipedir != "left")
				return;

			if (swipedir == "right")
			{
				if (parmPanelRight.DynamicVisible && dnrIsVisible)	// Primero siempre oculta oposite
					dnrHide(true);
				else
				{
					if (parmPanelRight.SwipeAction != null && parmPanelRight.SwipeAction != undefined && parmPanelRight.SwipeAction.Action.length > 0)
					{
						if (parmPanelRight.SwipeAction.Action == 'ClickButton')
						{
							var elem = document.getElementById(parmPanelRight.SwipeAction.TargetElement);
							if (elem != null)
								if (parmPanelRight.SwipeAction.Action == 'ClickButton')
									elem.click();
								else if (parmPanelRight.SwipeAction.Action == 'UserEvent')
									if (typeof PXToolsResponsiveLayout.UC.OnSwipe == 'function')
									{
										this.SwipeSide = 'Right';
										PXToolsResponsiveLayout.UC.OnSwipe();
									}
						}
					}
					else
						if (parmPanelLeft.DynamicVisible && !dnlIsVisible)
							dnlShow();
				}
			}
			else if (swipedir == "left")
			{
				if (logInConsole)
					console.log('swiped left start');
				if (parmPanelLeft.DynamicVisible && dnlIsVisible)	// Primero siempre oculta oposite
					dnlHide(true);
				else
				{
					if (parmPanelLeft.SwipeAction != null && parmPanelLeft.SwipeAction != undefined && parmPanelLeft.SwipeAction.Action.length > 0)
					{
						if (parmPanelLeft.SwipeAction.Action == 'ClickButton')
						{
							var elem = document.getElementById(parmPanelLeft.SwipeAction.TargetElement);
							if (elem != null)
								if (parmPanelLeft.SwipeAction.Action == 'ClickButton')
									elem.click();
								else if (parmPanelLeft.SwipeAction.Action == 'UserEvent')
									if (typeof PXToolsResponsiveLayout.UC.OnSwipe == 'function')
									{
										this.SwipeSide = 'Left';
										PXToolsResponsiveLayout.UC.OnSwipe();
									}
						}
					}
					else
						if (parmPanelRight.DynamicVisible && !dnrIsVisible)
							dnrShow();
				}
			}
		});
	}

	var auxScrollLeft = 0;
	var vetElemTouchPath = [];
	var vetValueTouchPath = [];

	function showStateGridScroll(evento,touchPath) {
		if (logInConsole)
			console.log('showStateGridScroll. start. evento = ' + evento);

		var vetElem = [];
		var elem = document.getElementById('GRIDCELLCONTROLNAME_prueba');

		if (elem != null && elem != undefined)
		{
			vetElem.push(elem);

			if (evento == 'touchstart')
			{
				auxScrollLeft = elem.scrollLeft;
			}
			else {
				var newScrollLeft = elem.scrollLeft;

				if (newScrollLeft != auxScrollLeft)
				{
					if (logInConsole)
						console.log('showStateGridScroll!! DO SCROLL');
					return true;
				}
				else {
					if (logInConsole)
						console.log('showStateGridScroll!! NOT SCROLL');
					return false;
				}
			}
		} else {
			if (evento == 'touchstart')
			{
				vetElemTouchPath = touchPath;
				vetValueTouchPath = [];
			}

			for (var i = 0; i < vetElemTouchPath.length; i++) {
				//console.log('showStateGridScroll. i = ' + i);
				if (vetElemTouchPath[i] == null && vetElemTouchPath[i] == undefined)
				{
					console.log('showStateGridScroll. elem is null');
				}
				else {
					/*console.log('showStateGridScroll. vetElemTouchPath[i].id = ' + vetElemTouchPath[i].id);
					console.log('showStateGridScroll. vetElemTouchPath[i].offsetWidth = ' + vetElemTouchPath[i].offsetWidth);
					console.log('showStateGridScroll. vetElemTouchPath[i].clientWidth = ' + vetElemTouchPath[i].clientWidth);
					console.log('showStateGridScroll. vetElemTouchPath[i].scrollWidth = ' + vetElemTouchPath[i].scrollWidth);
					console.log('showStateGridScroll. vetElemTouchPath[i].scrollLeft = ' + vetElemTouchPath[i].scrollLeft);*/

					if (evento == 'touchstart')
					{
						vetValueTouchPath.push(vetElemTouchPath[i].scrollLeft);
					}
					else {
						if (vetElemTouchPath[i] != null && vetElemTouchPath[i] != undefined && vetValueTouchPath[i] != vetElemTouchPath[i].scrollLeft)
							return true;
					}
				}
			}
		}
		return false;
	}

	var wScrollBefore = 0,
	element,
	lastScrollTime;

	function execScrollEvent(document,window,index)
	{
		var elHeight = 0,
		elTop = 0,
		dHeight = 0,
		wHeight	= 0,
		newTop = 0,
		diffMinimizeMode = 0,
		wScrollDiff = 0,
		actionMinimizeVeryBottom = "M",
		reserveTopSpace = true,
		auxRtsRL = 0;

		var wScrollCurrent		= window.pageYOffset;

		if ((wScrollCurrent > 0 || wScrollBefore > 0) && hasParmRead == 1 && dnnMode == "smart")
		{
			if (element == undefined)
				element = document.querySelector(".dnn")

			elHeight					= element.offsetHeight;
			dHeight						= document.body.offsetHeight;
			wHeight						= window.innerHeight;
			wScrollCurrent		= window.pageYOffset;
			wScrollDiff				= wScrollBefore - wScrollCurrent;
			elTop							= parseInt(window.getComputedStyle(element).getPropertyValue("top")) + wScrollDiff;
			diffMinimizeMode	= parseInt(parmPanelTop.SizeHeight.replace("px","")) - parseInt(parmPanelTop.MinimizeModeHeight.replace("px",""));

			if (logInConsole)
				console.log('PXToolsResponsiveLayout | Start');

			if(wScrollCurrent <= 1) // scrolled to the very top; element sticks to the top
			{
				if (logInConsole)
					console.log('PXToolsResponsiveLayout | scrolled to the very top. remove Top MinimizeModeClass. wScrollCurrent = ' + wScrollCurrent);

				element.style.top 	= "0px";
				pnlTop.removeClass(parmPanelTop.MinimizeModeClass);

				uc.TopMinimized	= true;
				uc.TopMaximized	= true;

				dnnIsMini 		= false;
				dnnIsVisible	= true;

				auxRtsRL = 0;
			}
			else if(wScrollDiff > 0) // scrolled up; element slides in
			{
				if (logInConsole)
					console.log('PXToolsResponsiveLayout | scrolled up. add Top MinimizeModeClass. dnnIsMini ' + dnnIsMini
										+ ' wScrollCurrent = ' + wScrollCurrent);

				if (!dnnIsMini)
				{
					if (logInConsole)
						console.log('PXToolsResponsiveLayout | scrolled up. add MinimizeModeClass');

					pnlTop.addClass(parmPanelTop.MinimizeModeClass);
					pnlTop.css("z-index", 2);

					dnnIsVisible	= true;
					dnnIsMini 		= true;
					uc.TopMinimized	= true;
					uc.TopMaximized	= false;
				}
				else
				{
					if (logInConsole)
						console.log('PXToolsResponsiveLayout | scrolled up. NOT add MinimizeModeClass');
				}

				if (wScrollCurrent < parseInt(parmPanelTop.MinimizeModeHeight.replace("px","")))
				{
					newTop	= 0;	//(elTop > 0 ? 0 : elTop);
				}
				else
				{
					newTop	= -diffMinimizeMode;	//(elTop > 0 ? 0 : elTop);
				};
				element.style.top = newTop + "px";

				if (logInConsole)
					console.log('PXToolsResponsiveLayout | scrolled up. newTop = ' + newTop + "px");

				auxRtsRL = parseInt(parmPanelTop.SizeHeight.replace("px","")) + newTop;
			}
			else if(wScrollDiff < 0) // scrolled down
			{
				if (logInConsole)
					console.log('PXToolsResponsiveLayout | scrolled down. document.documentElement.scrollHeight = ' + document.documentElement.scrollHeight
										+	' window.innerHeight = ' + window.innerHeight
										+ ' wScrollCurrent = ' + wScrollCurrent
									);
				if((document.documentElement.scrollHeight <= (wScrollCurrent + window.innerHeight + 10)))  // scrolled to the very bottom;
				{
					if (logInConsole)
						console.log('PXToolsResponsiveLayout | scrolled down. to the very bottom. actionMinimizeVeryBottom = ' + actionMinimizeVeryBottom);

					if (actionMinimizeVeryBottom == "F")	//	FullArea
					{
						newTop					= 0;
						uc.TopMaximized	= true;
						uc.TopMinimized	= false;
						dnnIsMini				= false;
						dnnIsVisible		= true;
					}
					else if (actionMinimizeVeryBottom == "M")	//	MinimizeArea
					{
						newTop					= diffMinimizeMode;

						pnlTop.addClass(parmPanelTop.MinimizeModeClass);
						pnlTop.css("z-index", 2);

						dnnIsVisible	= true;
						dnnIsMini 		= true;
						uc.TopMinimized	= true;
						uc.TopMaximized	= false;

						element.style.top = diffMinimizeMode*-1 + "px";

						if (logInConsole)
							console.log('PXToolsResponsiveLayout | scrolled up. newTop = diffMinimizeMode = ' + diffMinimizeMode + "px");

						auxRtsRL = parseInt(parmPanelTop.MinimizeModeHeight.replace("px",""));
					}
					else
					{
						if (logInConsole)
							console.log("Very Bottom. Do nothing");
					}
				}
				else // scrolled down; element slides out
				{
					newTop						= (Math.abs(elTop) > elHeight ? -elHeight : elTop);
					element.style.top	= newTop + "px";

					if (logInConsole)
						console.log('PXToolsResponsiveLayout | scrolled down. element slides out. newTop = ' + newTop);

					if ((newTop *-1 > parseInt(parmPanelTop.SizeHeight.replace("px",""))) && dnnIsMini)
					{
						if (logInConsole)
							console.log('PXToolsResponsiveLayout | scrolled down. element slides out. remove MinimizeModeClass');

						pnlTop.removeClass(parmPanelTop.MinimizeModeClass);
						pnlTop.css("z-index", 1);

						auxRtsRL = 0;
					}
					else
					{
						auxRtsRL = elHeight + newTop;
						if (logInConsole)
							console.log('PXToolsResponsiveLayout | scrolled down. element slides out. DO NOT remove MinimizeModeClass');
					}
					uc.TopMinimized	= false;
					uc.TopMaximized	= false;
					dnnIsMini				= false;
					dnnIsVisible		= false;
				}
			}
			else {
				auxRtsRL = 99999;
			}

			wScrollBefore = wScrollCurrent;
		}

		if (reserveTopSpace && auxRtsRL != 99999)
		{
			localStorage.setItem("rtsRL",auxRtsRL);
			if (logInConsole)
				console.log('PXToolsResponsiveLayout | Scroll Impact Top!! | 1Â°). auxRtsRL = ' + auxRtsRL);
		}
	}

	function addScrollListener(document,window,index)
	{
		window.addEventListener("scroll", function()
		{
			var now	= new Date().getTime();
			lastScrollTime = now;
			setTimeout(function(){
				var now	= new Date().getTime();
				var dif = now - lastScrollTime;
				if (dif >= 20)
				{
					if (logInConsole)
						console.log('PXToolsResponsiveLayout | Scroll Impact Top!! | 1Â°) execScrollEvent(...). dif = ' + dif + ' using ' + window.pageYOffset);
					execScrollEvent(document,window,index);
					lastScrollTime = now;
				}
				else {
					{
						if (logInConsole)
							console.log('PXToolsResponsiveLayout | Scroll Discarted!!!!!!!!!! dif = ' + dif + ' using ' + window.pageYOffset);
					}
				}
			},20);
		});
	}

	function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
	}

	///UserCodeRegionEnd: (do not remove this comment.):
}
