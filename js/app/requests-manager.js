$(document).ready(function()
{
    $('#dt-requests-received').dataTable(
    {
        initComplete: function() {

            var sentByHTML = `<span class="text-blue mr-3 text-nowrap ml-auto">Sent by</span> <div class="custom-select-outer" style="margin-right: 16px; font-size: 15px; width: 155px !important;">
                                <select class="custom-select form-control">
                                    <option>User</option>
                                </select>
                            </div>`;
            
            $('#dt-requests-received_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append(sentByHTML);
            $('#dt-requests-received_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');
        },
        responsive: true,
        "ordering": false,
        lengthChange : false,
        buttons: []
    });

    

});