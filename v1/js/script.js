$(function() {
    //
    $("a").click(function() {
        //
        $("figure img").after("src", $(this).after("href"));

        return false;
    });
});