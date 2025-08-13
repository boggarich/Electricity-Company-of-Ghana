$(function() {
  $('.officers-submitted').easyPieChart({
      size : 50,
      lineWidth : 5,
      barColor : '#51aef6',
      lineCap : 'butt',
      scaleLength : 0,
  });
});

$(function() {
  $('.user-submitted').easyPieChart({
      size : 50,
      lineWidth : 5,
      barColor : '#bb1bf4',
      lineCap : 'butt',
      scaleLength : 0,
  });
});

var interactiveExample = c3.generate(
  {
      bindto: "#interactiveExample",
      data:
      {
          columns: [
              ["data1", 100, 165, 140, 170, 200, 140, 220, 210, 190, 200, 170, 250],
              ["data2", 110, 80, 100, 85, 125, 110, 100, 130, 120, 100, 130, 145],
              ["data3", 75, 60, 70, 65, 85, 80, 70, 100, 100, 70, 90, 100]
          ],
          type: "area-spline"
      },
      subchart:
      {
          show: false
      },
      legend: {
          show: false
      },
      color:
      {
          pattern: ["#3cd0c1", "#ed7db7", "#73afea", "yellow", "orange"]
      }
  });

$(function initMap() {
    //console.log(external)
    
    let map;

    map = new google.maps.Map(document.getElementById("dashboard-google-maps-container"), {
      center: new google.maps.LatLng(8.0236654, -0.9332576),
      zoom: 7,
      mapId: "e097b0f7aaafe656"
    });

    const iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {

      target: {
        // icon:  "img/map-pins/target.png",
        icon : {
            url: "/img/map-pins/target.png",
            // This marker is 50 pixels wide by 50 pixels high.
            scaledSize: new google.maps.Size(12,12),          
        }
      },
      started: {
        //icon: "img/map-pins/Started.png"
        icon : {
          url: "/img/map-pins/Started.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(12,12),          
      }
      },
      delivered: {
        //icon: "img/map-pins/Delivered.png"
        icon : {
          url: "/img/map-pins/Delivered.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(12,12),          
      }
      },
      printed: {
        //icon: "img/map-pins/Printed.png",
        icon : {
          url: "/img/map-pins/Printed.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(12,12),          
      }
      },
      submitted: {
        //icon: "img/map-pins/Submitted.png"
        icon : {
          url: "/img/map-pins/Submitted.png",
          // This marker is 50 pixels wide by 50 pixels high.
          scaledSize: new google.maps.Size(12,12),          
      }
      }
    };



    const features = [
      {
          position : {
              lat : 10.356375,
              lng : -0.642782
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'printed'
      },
      {
          position : {
              lat : 10.343834,
              lng : -1.872982
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'target'
      },
      {
          position : {
              lat : 9.571638,
              lng : -0.215718
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'target'
      },
      {
          position : {
              lat : 9.288680,
              lng : 0.364324
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'target'
      },
      {
          position : {
              lat : 10.739649,
              lng : -0.451874
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'target'
      },
      {
          position : {
              lat : 10.732299,
              lng : -1.4062907
          },
          title: 'Power theft',
          ghPostCode: 'GS-501-2021',
          location: 'Asylumn Down',
          status : 'target'
      },
      {
            position : {
                lat : 6.955777,
                lng : -2.4564567
            },
            title: 'Power theft',
            ghPostCode: 'GS-501-2021',
            location: 'Asylumn Down',
            status : 'printed'
        },
        {
            position : {
                lat : 7.803237,
                lng : -0.073748
            },
            title: 'Power theft',
            ghPostCode: 'GS-501-2021',
            location: 'Asylumn Down',
            status : 'submitted'
        },
        {
            position : {
                lat : 10.496161,
                lng : -2.4394957
            },
            title: 'Power theft',
            ghPostCode: 'GS-501-2021',
            location: 'Asylumn Down',
            status : 'target'
        },
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
var contentString = `<div id="content" style="width:150px;height:auto;">
<h3 id="firstHeading" class="firstHeading" style="color: #000; font-weight: 600; font-size: 16px; margin-bottom: 0.0625rem;">${name}</h3>
<div id="bodyContent" style="color: #000;">
    <div style="margin-bottom: 0.225rem;">GS-501-2025</div>
    <div style="margin-bottom: 0.225rem;">Asylumn Down</div>
    <div style="margin-bottom: 0.225rem;">12-11-2021   <span style="margin-left: 8px">9:00am</span></div>
    <div style="margin-bottom: 0.225rem;">Sent by: <strong>User</strong></div>
    <hr class="solid">
    <div class="d-flex justify-content-between mb-3">
        <div>
            <h3 class="firstHeading" style="color: #fc426d; font-weight: 400; font-size: 16px; margin-bottom: 0.0625rem;">Pending</h3>
            
            <div style="margin-bottom: 0.225rem;">Evid: <strong>70%</strong></div>
            <div style="margin-bottom: 0.225rem;">ID: <strong>CA10008</strong></div>
        </div>
        
        <img src="/img/backgrounds/bg-3.png" style="width: 60px; height: 60px; margin-left: 12px; border-radius: 10px;">
    </div>
    <button class="btn btn-outline-primary w-100 f-15">Open full report</button>
</div>
</div>`;
return contentString;
}