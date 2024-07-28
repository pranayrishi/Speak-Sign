$(function(){
    $('#fileForm').submit(function(e) {
        e.preventDefault(); 
        var formData = new FormData($(this)[0]); 
 
        $.ajax({
            url: "/",
            data: formData,
            type: 'POST',
            async: false,
            contentType: false,
            processData: false,
            success: function(response) {
                $('#display').text(response.rawText);
                $('#message').text(response.modText);
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});