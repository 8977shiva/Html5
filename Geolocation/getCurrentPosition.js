//navigator.geolocation.getCurrentPosition(success[, error[, [options]])
 const result=document.querySelector('#result')
function geoFindMe(){
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
          console.log(pos)
        var crd = pos.coords;
      
        result.textContent=`Your current position is:Latitude : ${crd.latitude} Longitude: ${crd.longitude}`;
        
      }
      
      function error(err) {
        alert(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
}


document.querySelector('#cposition').addEventListener('click', geoFindMe);