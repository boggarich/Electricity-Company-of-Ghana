$(function() {
    $('.customer-reports').easyPieChart({
        size : 50,
        lineWidth : 5,
        barColor : '#51aef6',
        lineCap : 'butt',
        scaleLength : 0,
    });
});
  
$(function() {
    $('.officer-reports').easyPieChart({
        size : 50,
        lineWidth : 5,
        barColor : '#bb1bf4',
        lineCap : 'butt',
        scaleLength : 0,
    });
});

$(function initMap() {
    //console.log(external)
    
    let map;

    map = new google.maps.Map(document.getElementById("lights-off-reports-google-maps-container"), {
      center: new google.maps.LatLng(8.0236654, -0.9332576),
      zoom: 7,
      mapId: '4fb6c0139b21ecf1'
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
        },
        {
            position : {
                lat : 6.690251,
                lng : -1.686146
            },
            title: 'Power theft',
            ghPostCode: 'GS-501-2021',
            location: 'Asylumn Down',
            status : 'target'
        },
        {
            position : {
                lat : 9.4267521,
                lng : -0.8922991
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

      infoWindowContent[i] = getInfoWindowDetails(features[i].title, features[i].ghPostCode, features[i].location);

      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].status].icon,
        map: map,
      });

      var infowindow = new google.maps.InfoWindow({
        content: features[i].title
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i){
          return function() {
              infowindow.setContent(infoWindowContent[i]);
              
              infowindow.open(map,marker);
          }
        
    })(marker, i));

    }



});

function getInfoWindowDetails(name, status, population) {
var contentString = `<div id="content" style="width:201px;height:auto; margin-bottom: 1.325rem;">
<h3 id="firstHeading" class="firstHeading" style="color: #000; font-weight: 600; font-size: 16px; margin-bottom: 0.0625rem; padding: 1.125rem 1.325rem 0.5rem 1.325rem !important">Kasena Nankana</h3>
<div id="bodyContent" style="color: #000;">
    <div style="margin-bottom: 0.225rem;">Region: <strong>Savanah</strong></div>
    <div style="margin-bottom: 0.225rem;">GPS: <strong>210-251--54-21</strong></div>
    <div style="margin-bottom: 0.225rem;">Light-Off date: <strong>10/11/2021</strong></div>
    
    <div style="margin-bottom: 0.225rem;">Light-Off time: <strong>9:00am</strong></div>
    <div style="margin-bottom: 0.225rem;">Sent by: <strong>Officer</strong></div>
    
</div>
</div>`;
return contentString;
}


$('#dt-meter-finder').dataTable(
    {
        initComplete: function() {

            var districtHTML = `<div class="custom-select-outer" style="font-size: 15px; width: 190px !important; margin-right: 1rem;">
                                    <select class="custom-select form-control">
                                        <option>Disticts</option>
                                    </select>
                                </div>`;

            var regionHTML = ` <div class="custom-select-outer" style="margin-left: 1.325rem; font-size: 15px; width: 190px !important; margin-right: 1rem;">
                <select class="custom-select form-control">
                    <option>All Regions</option>
                </select>
            </div>`;

            var geolocateHTML = `<div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                                    <label class="custom-control-label" for="customSwitch1">Geolocate</label>
                                </div>`;


            
            $('#dt-meter-finder_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').append(regionHTML).append(districtHTML).append(geolocateHTML);
            $('#dt-meter-finder_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');

            
        },
        responsive: true,
        "ordering": false,
        lengthChange: false,
        buttons: []
    });
