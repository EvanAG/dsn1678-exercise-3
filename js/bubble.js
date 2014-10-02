var button1 = $('.sales-1');
var button2 = $('.sales-2');
var sales__details-1 = $('.sales__details-1');
var sales__details-2 = $('.sales__details-2');

var buttonClickHandler-1 = function () {
    var currentState = sales__details-1.attr('data-state');
    
    if (currentState == 'active') {
        sales__details-1.attr('data-state','inactive');
    }else{
        sales__details-1.attr('data-state','active');
    }   
    
};

var buttonClickHandler-2 = function () {
    var currentState = sales__details-2.attr('data-state');
    
    if (currentState == 'active') {
        sales__details-2.attr('data-state','inactive');
    }else{
        sales__details-2.attr('data-state','active');
    }   
    
};

button1.on('click', buttonClickHandler);
button2.on('click', buttonClickHandler);