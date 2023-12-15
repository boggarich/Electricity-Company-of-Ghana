$('#dt-stakeholders-users').dataTable(
    {
        initComplete: function() {

            
            $('#dt-stakeholders-users_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append($('#dt-stakeholders-users_length').addClass('ml-auto'));
            $('#dt-stakeholders-users-wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');

            $('#dt-stakeholders-users_length label').contents()
            .filter(function() {
              return this.nodeType == 3; //Node.TEXT_NODE
            }).remove();
            
        },
        responsive: true,
        "ordering": false,
        buttons: []
});