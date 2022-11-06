$(document).ready(function(){
    
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event){
        // $('.sidebar').toggleClass("toggled");
        var right = $('.sidebar').css('right');
        if (right == '0px'){
            $('.sidebar').css({'right':'-14rem'});
            $('.layer').fadeOut();
        }else{
            $('#togg').css({'display':'inline'});
            $('#toggler').css({'display':'none'});
            $('.sidebar').css({'right':'0'});
            $('.layer').fadeIn();
        }
    });
    $("#togg").click(function(event){
        // $('.sidebar').toggleClass("toggled");
        var right = $('.sidebar').css('right');
        if (right == '0px'){
            $('#toggler').css({'display':'inline'});
            $('#togg').css({'display':'none'});
            $('.sidebar').css({'right':'-14rem'});
            $('.layer').fadeOut();
        }else{
            $('.sidebar').css({'right':'0'});
            $('.layer').fadeIn();
        }
    });
    $('.layer').click(function(){
        $('#togg').css({'display':'none'});
        $('#toggler').css({'display':'inline'});
        $('.sidebar').css({'right':'-14rem'});
        $('.layer').fadeOut();
    });
    $('.search-icon').click(function(){
        $('.search-input').slideToggle('slow');
    });
    $('#search-filters-icon').click(function(){
        $('.filter-column').slideToggle('slow');
    });
    $('input:checkbox').click(function(){
        let box = $(this);
        if (box.is(':checked')){
            let group = "input:checkbox[name=" + box.attr("name") + "]";
            $(group).prop("checked",false);
            box.prop("checked",true);
        }
    });
    $(".close-icon").click(function(){
        $(this).parents(".card").hide();
    });
    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card-inner").toggle();
    });
});
