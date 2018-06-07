$(document).ready(function() {
    $("#button").click(function() {
        location.href = "./main.html";
    });

    $("#formMove").on("mousedown", function() {
        $("#form").draggable();
        $("#form").draggable('enable');
        $("#form").css('opacity', '0.6');
    })
    .on("mouseup", function() {
        $("#form").draggable('disable');
        $("#form").css('opacity', '1');
    });

    var botones = $("button");
    var foo= $("div[name=shaderEffect]");
    botones.click(function() {

        $(this).find("div").css({
            "animation-name": "sombreado",
            "animation-duration": "0.5s"
        })
        // ((HTMLDivElement)($(this).html())).style.animationName = "sombreado";
        // ((HTMLDivElement)($(this).html())).style.animationDuration = "0.5s";
        // foo[0].style.animationName = "sombreado";
        // foo[0].style.animationDuration = "0.5s";

        setTimeout(function() {
            // $("div[name=shaderEffect]").css({
            //     "animation-name": "",
            //     "animation-duration": ""
            // });


            $(this).find("div").css({
                "animation-name": "",
                "animation-duration": ""
            })
            
        }, 510);
        
    });

});