$(document).ready(function(){
    $('.add-btn').on('click', function(){
        const data = $('.input-data').val();

        if( data === '' ) {
            return;
        }

    $('#show-lists').append(`<li>${data } <span class="delete-btn">delete</span></li>`);
      $('.input-data').val('');

      // delet data
      $('.delete-btn').on('click', function(){
        $(this).closest('li').remove();
      })
    })
})