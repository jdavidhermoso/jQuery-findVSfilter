$(document).ready(function() {
    $("#buttons").on('click','#findBtn',function() {
        //Repeated code!

        var jQueryObj = $('li');
        //Selector
        //$('ul.models').find('.car-model').css('backgroundColor','red');
        //Element
        //$('ul.models').find('li').css('backgroundColor','red');

        //jQuery Obj
        $('ul.models').find(jQueryObj).css('backgroundColor','red');
    });

    $("#buttons").on('click','#filterBtn', function() {
        //I don't thik We need to check the selector, Element, or selection (jQueryObj) mode working.
        //Let's write the function arg mode only
/*
        Get the brand ul with the id specified on the input
        var brandN = $("#brand-input").val();
        $( ".brand" ).filter(function( index ) {
                var carBrandId = $(this).data('brandId');
                return carBrandId == brandN;
            }).css('backgroundColor','red');*/


        //So... What about if I whant to get the .model li for colouring, but comparing with brand elements? Repeated code!
       /* var brandN = $("#brand-input").val();
        $( ".brand" ).filter(function( index ) {
            var carBrandId = $(this).data('brandId');
            return carBrandId == brandN;
        }).find('.car-model').css('backgroundColor','red');*/

        //Even car models elements!
        $( ".brand .car-model" ).filter(function( index ) {
            return (index+1) % 2 === 0
        }).css('backgroundColor','red');

    });
});