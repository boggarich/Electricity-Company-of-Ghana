
$(document).ready(function()
{
    $(function() {
        $('.reported-outage').easyPieChart({
            size : 50,
            lineWidth : 5,
            barColor : '#51aef6',
            lineCap : 'butt',
            scaleLength : 0,
        });
    });
      
    $(function() {
        $('.schedule-outage').easyPieChart({
            size : 50,
            lineWidth : 5,
            barColor : '#bb1bf4',
            lineCap : 'butt',
            scaleLength : 0,
        });
    });

    $('.datepicker-power-schedule, #datepicker-modal-3').daterangepicker(
    {
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale:
        {
            format: 'M/DD hh:mm A'
        }
    });

    $(function initMap() {
        //console.log(external)
        
        let map;
    
        map = new google.maps.Map(document.getElementById("power-distribution-schedule-google-maps-container"), {
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
                status : 'started'
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
                status : 'delivered'
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
    var contentString = `<div id="content" style="width:163px;height:auto;">
    <h3 id="firstHeading" class="firstHeading" style="color: #000; font-weight: 600; font-size: 16px; margin-bottom: 0.0625rem;">Power Station 054261</h3>
    <div id="bodyContent" style="color: #000;">
        <div style="margin-bottom: 0.225rem;">Tranformer No. TR521420</div>
        <div style="margin-bottom: 0.225rem;">Substation: <strong>CA10008</strong></div>
        <div style="margin-bottom: 0.225rem;">Asylumn Down</div>
        <div style="margin-bottom: 0.225rem;">G. Accra</div>
        <hr class="solid">
        <div class="d-flex justify-content-between mb-3">
            <div>
                <div class="firstHeading" style="margin-bottom: 0.0625rem;">Status:<span style="font-weight: 400; font-size: 16px; color: #fc426d !important; font-size: 16px;"> Off</span></div>
                
                <div style="margin-bottom: 0.225rem;">Notify users: <strong>20,000</strong></div>
                <div style="margin-bottom: 0.225rem;">Affected meters: <strong>5,120</strong></div>
            </div>
            
    
        </div>
        <button class="btn btn-primary w-100 f-15">Schedule Outage</button>
    </div>
    </div>`;
    return contentString;
    }

    
    $('#dt-power-schedule').dataTable(
    {
        initComplete: function() {

            var regionHTML = `<div class="custom-select-outer" style="font-size: 15px; width: 190px !important; margin-right: 1rem;">
                                    <select class="custom-select form-control">
                                        <option>Disticts</option>
                                    </select>
                                </div>`;

            var districtHTML = ` <div class="custom-select-outer" style="margin-left: 6px; font-size: 15px; width: 190px !important; margin-right: 1rem;">
                <select class="custom-select form-control">
                    <option>All Regions</option>
                </select>
            </div>`;

            var geolocateHTML = `<div class="custom-control custom-switch ml-3">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                                    <label class="custom-control-label" for="customSwitch1">Geolocate</label>
                                </div>`;

            
            $('#dt-power-schedule_wrapper > .row:first-child > div:first-child').removeClass('col-md-6').addClass('flex-wrap').prepend(regionHTML).prepend(districtHTML).append(geolocateHTML);
            $('#dt-power-schedule_wrapper > .row:first-child').removeClass('mb-3').addClass('mb-4');
        },
        responsive: true,
        "ordering": false,
        lengthChange : false,
        buttons: []
    });

    

});