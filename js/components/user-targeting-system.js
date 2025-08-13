window.onmessage = function(evnt) {

    if(evnt.origin == location.origin && evnt.data == "sendMessageHTMLReady") {
        $('#select2-ajax').select2();
        $('#select2-ajax-school').select2();
    }

}

$('.js-summernote').summernote(
    {
        height: 200,
        tabsize: 2,
        placeholder: "Type here...",
        dialogsFade: true,
        toolbar: [


            ['font', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['fontname', ['fontname']],

            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
            ['table', ['table']],

        ],
        callbacks:
        {
            //restore from localStorage
            onInit: function(e)
            {

                $('.js-summernote').summernote("code", localStorage.getItem("summernoteData"));
            },
            onChange: function(contents, $editable)
            {
                clearInterval(interval);
                timer();
            }
        }
    });