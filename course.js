$(document).ready(function(){
    $('#redesign').click(function(){
    // Main head
    $('.head_').css('color', '#fff');
    $('.head_').css('text-shadow', '1px 1px #333');
    // redesigning body
    $('body').css('background-image','linear-gradient(135deg,
    #fff,#93B5C6)');
    $('body').css('color','#000');
    $('body').css('font-family', 'Roboto')
    // re-designing header
    $('.layer').css('background','rgb(34, 87, 122)' );
    $('.layer').css('background-image',
    'url(./images/tech.jpeg)');
    $('.layer').css('z-index', '1');
    $('.layer').css('background-size', 'contain');
    $('.header_text').css('z-index', '2');
    $('header').css('border-bottom', '5px solid #22577A');
    // button re-designing
    $('#redesign').css('padding', '15px');
    $('#redesign').css('background', 'linear-gradient(45deg,
    #3d999f, #22577A)');
    $('#redesign').css('border', '2px solid #22577A');
    $('#redesign').css('color', '#fff');
    $('#redesign').css('font-family', 'Roboto');
    $('#redesign').css('border-radius', '50px');
    $('#redesign').css('margin', 'auto');
    Page | 49
    // headings re-designing
    $('.headings').css('color','#000');
    $('.headings').css('font-family', 'Poppins');
    $('.line').show();
    // navigations re-designing
    $('.nav_item a').css('color','#333');
    $('.navbar a').css('margin', '10px');
    $('li.nav_item').hover( function () {
    $(this).css('color', '#fff');
    $(this.firstChild).css('color', '#fff');
    $(this).css('background-color', '#000');
    $(this).css('opacity', '70%');
    $(this).css('border-radius', '40px');
    $(this).css('border', '#333');
    }, function(){
    $(this.firstChild).css('color', '#000');
    $(this).css('background-color', 'inherit');
    });
    //table re-designing
    $('table').css('border-color', '#11324D');
    $('table').css('border-radius','10px 10px 10px 10px');
    $('td, th').css('border','1px solid #11324D');
    $('th').css('background','#3d999f');
    $('th').css('color', '#fff');
    $('th:first-child').css('border-radius', '10px 0px 0px 0px');
    $('th:last-child').css('border-radius', '0px 10px 0px 0px');
    $('tr:last-child td:first-child').css('border-radius', '0px
    0px 0px 10px');
    $('tr:last-child td:last-child').css('border-radius', '0px 0px
    10px 0px');
    });
    });