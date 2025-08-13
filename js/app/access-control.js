$('#dt-manage-user-accounts').dataTable(
    {
        initComplete: function() {

            var roleHTML = ` <div class="custom-select-outer" style="margin-left: 1.25rem; font-size: 15px; width: 190px !important; margin-right: 1rem;">
                <select class="custom-select form-control">
                    <option>Role</option>
                </select>
            </div>`;

            var addAccountHTML = `<div class="custom-btn-group ml-auto"><button class="btn btn-primary position-relative" id="addSchoolShowWizardOneModalBtn" data-toggle="modal" data-target="#add-admin-user-account-modal" style="margin-right: 0.75rem;"><span class="icon position-absolute"><i class="fal fa-plus"></i></span>Add Account</button></div>`;

            var importHTML = `<div class="d-flex align-items-center csv-import-btn" style="font-weight: 500; color: #333; margin-right: 17px;">Import <div class="btn btn-outline-primary ml-3" data-toggle="modal" data-target="#multiple-data-import-modal">Excel, CSV</div></div>`;


            
            $('#dt-manage-user-accounts_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append(roleHTML).append(addAccountHTML).append(importHTML);
            $('#dt-manage-user-accounts_wrapper > .row:first-child').removeClass('mb-3').addClass('dt-manager-user-accounts-filter');

            
        },
        responsive: true,
        "ordering": false,
        lengthChange: false,
        buttons: []
    });