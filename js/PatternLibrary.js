//Dropdown in Documentation Sidenav
$(document).ready(function()
{
    $(".dropdown-btn").click(function()
    {
        $(".dropdown-container").toggle();
        $(this).toggleClass("active");
    });
});

//jQuery to Open and Close Sidenav
$(document).ready(function()
{
    $(".open-mobilenav").click(function()
    {
        $(".mobilenav-container").show();
    });
    
    $(".close-mobilenav").click(function()
    {
        $(".mobilenav-container").hide();
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