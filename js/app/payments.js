$(document).ready(function()
{
    $('#dt-payments').dataTable(
        {
            initComplete: function() {

                $('#dt-payments_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');
    
                $('#dt-payments_length label').contents()
                .filter(function() {
                  return this.nodeType == 3; //Node.TEXT_NODE
                }).remove();
                
            },
            responsive: true,
            "ordering": false,
            buttons: []
    });

    

});