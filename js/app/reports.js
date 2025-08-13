$(document).ready(function()
{
    $('#dt-reports-received').dataTable(
    {
        initComplete: function() {

            var tableForHTML = `<span class="text-blue mr-4 text-nowrap" style="margin-left: 12px;">Table for</span> <div class="custom-select-outer" style="font-size: 15px; width: 190px !important; margin-right: 1rem;">
                                    <select class="custom-select form-control">
                                        <option>Theft</option>
                                    </select>
                                </div>`;

            var sentByHTML = `<span class="text-blue mr-3 text-nowrap ml-auto">Sent by</span> <div class="custom-select-outer" style="margin-right: 16px; font-size: 15px; width: 155px !important;">
                                <select class="custom-select form-control">
                                    <option>User</option>
                                </select>
                            </div>`;
            
            $('#dt-reports-received_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').prepend(tableForHTML).append(sentByHTML);
            $('#dt-reports-received_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');
        },
        responsive: true,
        "ordering": false,
        lengthChange : false,
        buttons: []
    });

    

});