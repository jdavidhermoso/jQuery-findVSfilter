$(document).ready(function() {
    $("#buttons").on('click','#findBtn',function() {
        var jQueryObj = $('li');

        //Selector
        //$('ul.models').find('.car-model').css('backgroundColor','red');
        //Element
        //$('ul.models').find('li').css('backgroundColor','red');

        //jQuery Obj
        $('ul.models').find(jQueryObj).css('backgroundColor','red');
    });

    $("#buttons").on('click','#filterBtn',function() {

    });
});