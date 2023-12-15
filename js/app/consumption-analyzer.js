g1 = new Dygraph(document.getElementById("noroll"), data_temp,
{
    customBars: true,
   
    showRangeSelector: true,
    rangeSelectorPlotStrokeColor: "#ffe3a6",
    rangeSelectorPlotFillColor: "#ffeec9",
});

$(function initMap() {
    //console.log(external)
    
    let map;

    map = new google.maps.Map(document.getElementById("consumption-analyzer-google-maps-container"), {
      center: new google.maps.LatLng(8.0236654, -0.9332576),
      zoom: 6,
      mapId: '814f74c1c6059940'
    });

    const iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {

      target: {
        // icon:  "img/map-pins/target.png",
        icon : {
            url: "/img/map-pins/target.png",
            // This marker is 50 pixels wide by 50 pixels high.
            scaledSize: new google.maps.Size(15,15),          
        }
      },
      started: {
        //icon: "img/map-pins/Started.png"
        icon : {
          url: "/img/map-pins/Started.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(15,15),          
      }
      },
      delivered: {
        //icon: "img/map-pins/Delivered.png"
        icon : {
          url: "/img/map-pins/Delivered.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(15,15),          
      }
      },
      printed: {
        //icon: "img/map-pins/Printed.png",
        icon : {
          url: "/img/map-pins/Printed.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(15,15),          
      }
      },
      submitted: {
        //icon: "img/map-pins/Submitted.png"
        icon : {
          url: "/img/map-pins/Submitted.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(15,15),          
      }
      }
    };



    const features = [
        {
            position : {
                lat : 5.5913754,
                lng : -0.2497694
            },
            title: 'Power theft',
            ghPostCode: 'GS-501-2021',
            location: 'Asylumn Down',
            status : 'target'
        }
    ];

    

    var infoWindowContent = [];
  
    //console.log(features, "google maps")

    // Create markers.

    for (let i = 0; i < features.length; i++) {

    //   infoWindowContent[i] = getInfoWindowDetails(features[i].title, features[i].ghPostCode, features[i].location);

      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].status].icon,
        map: map,
      });

    //   var infowindow = new google.maps.InfoWindow({
    //     content: features[i].title
    //   });

      google.maps.event.addListener(marker, 'click', (function(marker, i){
          return function() {
              infowindow.setContent(infoWindowContent[i]);
              
              infowindow.open(map,marker);
          }
        
    })(marker, i));

    }



});

function getInfoWindowDetails(name, status, population) {
var contentString = `<div id="content" style="width:220px;height:auto;">
<img src="/img/backgrounds/bg-3.png" style="width: 100%; height: 120px; margin-bottom: 1rem;">
<h3 id="firstHeading" class="firstHeading" style="color: #000; font-weight: 600; font-size: 16px; margin-bottom: 0.0625rem; padding: 0rem 1.325rem !important">Meter No. P021011212</h3>
<div id="bodyContent" style="color: #000;">
    <div style="margin-bottom: 0.225rem;">User: <strong>Efya Siribuor</strong></div>
    <div style="margin-bottom: 0.225rem;"><strong>GS-501-2025</strong></div>
    <div style="margin-bottom: 0.225rem;"><strong>Asylumn Down</strong></div>
    <div style="margin-bottom: 0.225rem;">Type: <strong>Prepaid Smart (2-way)</strong></div>
    <div style="margin-bottom: 0.225rem;">Provider: <strong>ECG</strong></div>
    <div class="firstHeading" style="margin-bottom: 0.0625rem;">State: <span style="font-weight: 400; color: #fc426d !important;">illegal</span></div>
    <div style="margin-bottom: 0.225rem;">Last physical check: <strong>26-10-21</strong></div>
    <div style="margin-bottom: 0.225rem;">Last topup: <strong>2500 - 17/10/21</strong></div>
    <button class="btn btn-secondary w-100 f-15 d-table mx-auto" style="margin-bottom: 1.725rem; margin-top: 0.925rem; width: 149px !important; background-color: #868e96; border-color: #868e96;">More info</button>
</div>
</div>`;
return contentString;
}

$('#dt-connected-meters').dataTable(
    {
        destroy: true,
        initComplete: function() {

            var changeMonthsHTML = `<div class="custom-select-outer" style="font-size: 15px; width: 190px !important; margin-right: 0.75rem;">
                                    <select class="custom-select form-control">
                                        <option>6 Months</option>
                                    </select>
                                </div> <span style="color: #1d3268;">Payment & Consumption analysis timeline</span>`;

            var addMeterHTML = `<button class="btn btn-primary" data-toggle="modal" data-target="#link-meter-to-power-station" style="margin-left: 1.725rem; margin-right: 1.725rem; border-radius: 6px; width: 145px;"><span class="icon mr-1"><i class="fa fa-link" style="font-weight: 500;"></i></span>Link Meter</button>`;


            
            $('#dt-connected-meters_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append(addMeterHTML).append(changeMonthsHTML).append($('#dt-connected-meters_length').addClass('ml-auto'));
            $('#dt-connected-meters_wrapper > .row:first-child').removeClass('mb-3').addClass('connected-meters-dt-filters');

            $('#dt-connected-meters_length label').contents()
            .filter(function() {
              return this.nodeType == 3; //Node.TEXT_NODE
            }).remove();

            
        },
        
        responsive: true,
        "ordering": false,
        buttons: []
});

$('.dygraph-axis-label-y').parent().css({'width': 'fit-content'});
