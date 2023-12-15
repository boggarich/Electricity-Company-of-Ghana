var ionskin = "round";

$('#dataTable-messages-sent').dataTable({

    info: false,
    lengthChange: false,
    filter: false,
    responsive: true,
    columnDefs: [

        {
            orderable: false,
            targets: [1, 2, 3, 4, 5]
        }
    ],


});


$("#settings-revenue-distribution").ionRangeSlider(
{
    skin: ionskin,
    type: "single",
    min: 0,
    max: 100,
    from: 6,
    to: 100,
    drag_interval: true,
    min_interval: 100,
    max_interval: 700,
    postfix: "%",
    onChange : function(data) {

        $('#revenue-distribution-publisher').val(100 - data.from)
        $('#revenue-distribution-ges').val(data.from);

        $("#updateEcommerceParametersBtn").css("display", "table");
    }
});

$(function() {
    $('.notification-sms-message').easyPieChart({
        size : 145,
        lineWidth : 20,
        trackColor : '#9ad2ff',
        barColor : '#025fa7',
        lineCap : 'square',
        scaleColor : '#025fa7',
        scaleLength : 8
    });
});
