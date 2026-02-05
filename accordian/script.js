$(document).ready(function(){
    $('.accordian-heading').on('click', function(){
       const hasClass = $(this).hasClass('accordian-active');
       if( hasClass ) {
        return;
       }
        //? To close existing block
       let activeAttr = $('.accordian-active').attr('accordian-name');
       $('.accordian-active').removeClass('accordian-active');
       $(`[accordian-content="${activeAttr}"]`).slideUp();

        //? To open new block
        let headingAttr = $(this).attr('accordian-name');
        // console.log( headingAttr );
        $(this).addClass('accordian-active');
        $(`[accordian-content="${headingAttr}"]`).slideDown();
    })
})