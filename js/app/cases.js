$('#dt-case-manager').dataTable(
    {
        initComplete: function() {

            var districtHTML = `<div class="custom-select-outer" style="font-size: 15px; width: 190px !important; margin-right: 1rem;">
                                    <select class="custom-select form-control">
                                        <option>Disticts</option>
                                    </select>
                                </div>`;

            var regionHTML = ` <div class="custom-select-outer" style="margin-left: 2rem; font-size: 15px; width: 190px !important; margin-right: 1rem;">
                <select class="custom-select form-control">
                    <option>All Regions</option>
                </select>
            </div>`;
            
            $('#dt-case-manager_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append(regionHTML).append(districtHTML).append($('#dt-case-manager_length').addClass('ml-auto'));
            $('#dt-case-manager_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');

            $('#dt-case-manager_length label').contents()
            .filter(function() {
              return this.nodeType == 3; //Node.TEXT_NODE
            }).remove();

        },
        responsive: true,
        "ordering": false,
        buttons: []
});
