$(document).ready(function() {

    $('.ui-ctrl').click(function(event) {
        event.preventDefault();
        var typeOfElement = $(this).attr('data-class');
        console.log('typeOfElement: ' + typeOfElement);

        if (typeOfElement == 'button') {
            var newElement = $('script[type="template-button"]').html();
        }

        if (typeOfElement == 'text') {
            var newElement = $('script[type="template-text"]').html();
        }

        $('.designer').append(newElement);
    });
});


// debug
/*
[].forEach.call($$("*"),function(a){
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})
*/