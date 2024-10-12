///<reference types="../@types/jquery"/>


$('#singer h3').on('click',function(){
    $('#singer div').slideToggle(1000)
})

// for open
$(".open").click(function(){
    $("#menu").animate({ width:'250px'},50)
   $("#content").animate({marginLeft :'250px'},50)
})
// for close 
$(".closebtn").click(function(){
    $("#menu").animate({ width:'0px'},50)
   $("#content").animate({marginLeft :'0px'},50)
})


