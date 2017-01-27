$(document).ready(function(){
	$('.modal').modal();

	$('#btn-10-pagueseguro').click(function () {
		$('#form-10-pagueseguro').submit();
	});

	$('#btn-20-pagueseguro').click(function () {
		$('#form-20-pagueseguro').submit();
	});

	$('#btn-35-pagueseguro').click(function () {
		$('#form-35-pagueseguro').submit();
	});

	$('.pagueseguro').click(function (){
		$('#modal2').append('<iframe src="tag-GA.html" frameborder="0"></iframe>');
		ga('send', 'pageview', 'click-pagueseguro');
	});

	$('.paypal').click(function (){
		ga('send', 'pageview', 'click-paypal');
	});

	restaura();
});

function shareFacebook(link, title, pict, desc){
	if(link == undefined){
		var linkEl = document.querySelector('meta[property="og:url"]');
		link = linkEl && linkEl.getAttribute("content");
	}
	if(title == undefined){
		var titleEl = document.querySelector('meta[property="og:title"]');
		title = titleEl && titleEl.getAttribute("content");
	}
	if(pict == undefined){
		var pictEl = document.querySelector('meta[property="og:image"]');
		pict = pictEl && pictEl.getAttribute("content");
	}
	if(desc == undefined){
		var descEl = document.querySelector('meta[property="og:description"]');
		desc = descEl && descEl.getAttribute("content");
	}

	var ufaceb = 'https://www.facebook.com/dialog/feed?';
	ufaceb += 'app_id=248896232208083';
	ufaceb += '&display=popup';
	ufaceb += '&caption=' + title;
	ufaceb += '&link=' + link;
	ufaceb += '&picture=' + pict;
	ufaceb += '&description=' + desc;
	ufaceb += '&redirect_uri=http://www.bancodealimentos.org.br/doacoes';
	makeWindow(ufaceb, 'FACEBOOK', 600, 500);
	return false;
}

var redirect = "";
var pageHeight = 0;
var pageWidth = 0;
var pageScrollTop = 0;
var version = "";
var mobile = "";
function restaura() {
	pageHeight = $(window).height();
	pageWidth = $(window).width();
	var searchTabsRed = 200;
	var psTabScrollRed = 145;
	var panelScrollRed = 80;
	//var hTopPanel = $("#myPanel").find(".intro").height() + 108;
	//var hTopPanel = $("#myPanel").find(".desk-header").height() + 28;
	if (pageWidth < 600) {
		version = "mobile";
		searchTabsRed = 200;
		psTabScrollRed = 245;
		panelScrollRed = 80;
		var hTopPanel = 74;
		var hTopPanelInst = 74 + 80;
		var hTopCreate = 108;
	} else {
		var hTopPanel = 94;
		var hTopPanelInst = 74 + 144;
		var hTopCreate = 130;
		version = "screen";
		$(".panel-scroll").css({"height": (pageHeight - hTopPanel)});
		$(".panel-scroll-full").css({"height": (pageHeight - 210)});
		//$(".panel-scroll-criar").css({"height": (pageHeight - 170)});
		$("main").css({"min-height": (pageHeight - 87)});
	}
	$(".ui-page").css({"height": pageHeight});
	$(".ui-panel").css({"min-height": pageHeight});
	$(".desktop-wrapper").css({"height": pageHeight - hTopPanel });
	$(".create-wrapper").css({"height": pageHeight - hTopCreate });
	$(".inst-wrapper").css({"height": pageHeight - hTopPanelInst });
	$(".panel-content-criar").css({"min-height": (pageHeight - hTopCreate - 34)});
}

function makeWindow(vURL,nameW,w,h){
	if(w == 0 && h == 0){
		var vScreenWidth = pageWidth;
		var vScreenHeight = pageHeight;
		var lf = 0;
		var tp = 0;
		var vFeatures = "location=0, fullscreen=no, toolbar=no, status=no, menubar=no, scrollbars=yes, resizable=yes, directories=no, left="+lf+", top="+tp+", width="+vScreenWidth+", height="+ vScreenHeight;
	} else {
		var vScreenWidth = w;
		var vScreenHeight = h;
		var lf = (pageWidth - w)/2;
		var tp = (pageHeight - h)/2;
		lf = 500;
		tp = 300;
		var vFeatures = "toolbar=no, status=yes, menubar=no, scrollbars=yes, resizable=yes, directories=no, location=no, left="+lf+", top="+tp+", width="+vScreenWidth+", height="+ vScreenHeight;
	}
	return window.open(vURL+"?screen=window",nameW,vFeatures);
}