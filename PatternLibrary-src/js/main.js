//jQuery to Open and Close Sidenav
$(document).ready(function()
{
    $(".show-sidenav").click(function()
    {
        $(".sidenav-container").show();
    });
    
    $(".hide-sidenav").click(function()
    {
        $(".sidenav-container").hide();
    });
});

//jQuery to Open and Close Modal
$(document).ready(function()
{
    $(".open-modal").click(function()
    {
        $(".modal-container").toggle();
    });
    
    $(".close-modal").click(function()
    {
        $(".modal-container").toggle();
    });
});