$("document").ready(function () {
    $("img").on("click", function () {
        const currentImg = $(this).attr("src");
        const altPic = $(this).data("alt-pic")
        $(this).attr("src", altPic);
    
        if (currentImg === altPic) {
            $(this).attr("src", $(this).data("original-src"))
        
        } else {
            $(this).data("original-src", currentImg);
            $(this).attr("src", altPic);
        }
    });
})