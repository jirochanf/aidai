$(function () {
    for (var i = 1; i <= 4; i++)
    {
        // 1
        (function() {
        // 2
            var nextIndex = (i != 4) ? (i + 1) : (1);
            var $nextVideo = $("#video" + nextIndex);
             
        // 3
            $("#video" + i).on("ended", function() {
                $(this).hide();
                $nextVideo.show();
                 
                $nextVideo.get(0).play();
            });
        })(i);
    }
});