$(document).ready(function(){
    $(".image button").click(function(){
        let id = $(this).val();
        $('.carousel').carousel(parseInt(id) - 1);
        parseInt(id) - 1
    })
});