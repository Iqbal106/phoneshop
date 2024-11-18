//jquery code
$('#product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
$('#Best_seller').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-next span').text('Next');
$('.owl-prev span').text('previous');

// js code

//slider counting

var dots = document.querySelectorAll('.owl-dots button span');
for(let i=0; i<dots.length; i++){
	let val = i+1;
	if(i<10){
		dots[i].innerText = "0"+val;
	}
}






var target_date = new Date().getTime() + (1000*3600*48); 
var days, hours, minutes, seconds; 

var countdown = document.getElementById("tiles");

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}







