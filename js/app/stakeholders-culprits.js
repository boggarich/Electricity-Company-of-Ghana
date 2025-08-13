$('#dt-stakeholders-culprits').dataTable(
    {
        initComplete: function() {

            
            $('#dt-stakeholders-culprits_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append($('#dt-stakeholders-culprits_length').addClass('ml-auto'));
            $('#dt-stakeholders-culprits-wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');

            $('#dt-stakeholders-culprits_length label').contents()
            .filter(function() {
              return this.nodeType == 3; //Node.TEXT_NODE
            }).remove();
            
        },
        responsive: true,
        "ordering": false,
        buttons: []
});