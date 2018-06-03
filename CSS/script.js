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
});

