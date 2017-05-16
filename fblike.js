var likeClass = "_5glz _53o _53b";
var savedHeight = 0,
	checkTimer = null;
var scrollTimer = scrollPage();

function scrollPage() {
	var timer = setInterval(window.scrollBy.bind(window,0,100000),100);
	checkTimer = setInterval(checkAndScroll,5000);
	return timer;
}

function checkAndScroll() {
	var height = document.body.scrollHeight
	if(savedHeight >= height) {
		clearInterval(checkTimer);
		clearInterval(scrollTimer);
		initLike();
	}
	else {
		savedHeight = height;	
	}
}

function initLike() {
	var likeBtns = document.getElementsByClassName("_5glz _53o _53b");

	for(var i =0 ;i < likeBtns.length ; i++ ){
		setTimeout(function(i) {
			console.log(i);
			triggerEvent(likeBtns[i],'click')
		}, i * 2000, i);
	}
}

function triggerEvent(el, etype) {
 if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}