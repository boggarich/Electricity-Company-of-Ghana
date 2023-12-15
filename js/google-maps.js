
$(function initMap() {
    //console.log(external)
    let map;

    map = new google.maps.Map(document.getElementById("google-maps-container"), {
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
            status : 'delivered'
        },
        {
            position : {
                lat : 6.690251,
                lng : -1.686146
            },
            status : 'delivered'
        },
        {
            position : {
                lat : 9.4267521,
                lng : -0.8922991
            },
            status : 'delivered'
        }
    ];

    

    var infoWindowContent = [];
  
    //console.log(features, "google maps")

    // Create markers.

    for (let i = 0; i < features.length; i++) {

      //infoWindowContent[i] = getInfoWindowDetails(features[i].school_name, features[i].status, features[i].population);

      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].status].icon,
        map: map,
      });

    //   var infowindow = new google.maps.InfoWindow({
    //     content: features[i].school_name
    //   });

    //   google.maps.event.addListener(marker, 'click', (function(marker, i){
    //       return function() {
    //           infowindow.setContent(infoWindowContent[i]);
              
    //           infowindow.open(map,marker);
    //       }
        
    // })(marker, i));

    }



});

  function getInfoWindowDetails(name, status, population) {
    var contentString = `<div id="content" style="width:270px;height:auto;">
    <h3 id="firstHeading" class="firstHeading">${name}</h3>
    <div id="bodyContent">
        <div style="float:left;width:100%">GS-501-2025 - Asylumn Down</div>
        <div>Status: <text class="${status} text">${commonObj.capitalizeFirstLetter(status)}</text></div>
        <hr class="solid">
        <div class="d-flex">
          <div class="flex-grow-1">
            <div>Population</div>
            <div>SHS 1: ${population.shsOne}</div>
            <div>SHS 3: ${population.shsThree}</div>
          </div>
          <div>
          <figure class="item-row-image">
            <img src="">
          </figure>
          </div>
        </div>
    </div>
  </div>`;
    return contentString;
  }

