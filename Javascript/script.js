$(document).ready(function(){ // jQuery Function to "ready" the page for manipulation"
    $(".navbutton a").click(function(){ // Calls the .navbutton, when clicked
        $(".overlay").fadeToggle(200); // After clicking, .overlay will appear, and fades
       $(this).toggleClass('navbtn-open').toggleClass('navbtn-close'); // Switches out the Hamburger Icon for an X icon 
    });
});
$('.overlay').on('click', function(){ // Interacting outside of the overlay closes the NavBarMenu 
    $(".overlay").fadeToggle(200);   
    $(".navbutton a").toggleClass('navbtn-open').toggleClass('navbtn-close');
    open = false;
});