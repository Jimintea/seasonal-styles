//$("document").ready(function(){
   // $('.seasons a').click(function(e){//find all a tags inside class of seasons
        //e.preventDefault();//stop default submission
        //var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);
    //});
//});

$('document').ready(function(){
    //$("li.seasons a").css("color","orange");

/*
Change pic with an id of logo to season
Change pic with an id of wear to clothing
*/
    $("li.seasons a").click(function(e){
        e.preventDefault();

       let season = $(this).attr("href");

       season = season.toLowerCase();

       switch (season) {
        case "spring":
            $("#logo").attr("src", "images/spring.gif");
            $("#wear").attr("src", "images/spring-wear.jpg");
            $("html").css("background-color", "#2B7129");
            $("header > h3").css('color', '#2B7129');
            $("main header h3").html("Spring Time! So Pretty!");
            alert(season);
            break;
        case "summer":
            $("#logo").attr("src", "images/summer.gif");
            $("#wear").attr("src", "images/summer-wear.jpg");
            $("html").css("background-color", "#EBA52B");
            $("header > h3").css('color', '#EBA52B');
            $("main header h3").html("Summer Time! Get Your Tan On!");
            alert(season);
            break;
        case "winter":
            $("#logo").attr("src", "images/winter.gif");
            $("#wear").attr("src", "images/winter-wear.jpg");
            $("html").css("background-color", "#005393");
            $("header > h3").css('color', '#005393');
            $("main header h3").html("Winter Time! Get Cozy And Warm!");
            alert(season);
            break;
        case "fall":
            $("#logo").attr("src", "images/fall.gif");
            $("#wear").attr("src", "images/fall-wear.jpg");
            $("html").css("background-color", "#A81124");
            $("header > h3").css('color', '#A81124');
            $("main header h3").html("Fall Time! Autumn Fits!");
            alert(season);
            break;
        default:
            $("#logo").attr('src', 'images/four-seasons.gif');
            $("#wear").attr('src', 'images/300x400.png');
            $("html").css("background-color", "#D3D3D3");
            $("main header h3").html("All Year Long Wear!");
            alert(season);
            break;
        }
    });
});
