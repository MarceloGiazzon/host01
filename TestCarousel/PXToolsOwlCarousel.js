function PXToolsOwlCarousel()
{

	console.log("function PXToolsOwlCarousel()");

	this.LogInConsole;

	 //PXToolsOwlCarousel.$ = jQuery.noConflict();

	var ucContainerName,
	controlName,
	containerWidth,
	containerType,
	thisMe;


	this.SetDrawCode = function(drawCode)
	{
		this.SvgDraw = drawCode;
	}
	
	this.GetDrawCode = function()
	{
		return this.SvgDraw;
	}

	this.render = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)

		console.log("Heyyy! Render LALALA123");

		$(document).ready(function(){
		  $('.owl-carousel').owlCarousel();
		});

		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	var testReturn = 2;

	console.log("Antes render();");
	this.render();
	console.log("Depois render();");

	getParmUCOwlCarousel = function()
	{
		return 10 ;
	}

	window.testWinVar = 1;

	window.ucDefaults = {
			items: 1,
			loop: true,
			center: true,
			rewind: false,

			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			freeDrag: false,

			margin: 0,
			stagePadding: 0,

			merge: false,
			mergeFit: true,
			autoWidth: false,

			startPosition: 1,
			rtl: false,

			smartSpeed: 250,
			fluidSpeed: false,
			dragEndSpeed: false,

			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: window,

			fallbackEasing: 'swing',

			info: false,

			nestedItemSelector: false,
			itemElement: 'div',
			stageElement: 'div',

			nav:true,
			dots:true,

			refreshClass: 'owl-refresh',
			loadedClass: 'owl-loaded',
			loadingClass: 'owl-loading',
			rtlClass: 'owl-rtl',
			responsiveClass: 'owl-responsive',
			dragClass: 'owl-drag',
			itemClass: 'owl-item',
			stageClass: 'owl-stage',
			stageOuterClass: 'owl-stage-outer',
			grabClass: 'owl-grab'
		};

		
	///UserCodeRegionEnd: (do not remove this comment.):
}