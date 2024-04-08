let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -1.24857 , lng: 29.98993 },
    zoom: 15,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.terrain,
  });
  new google.maps.Marker({
    position: { lat: -1.24857 , lng: 29.98993 },
    map:map,
    label: 'H',
    title: "Sevare Hutch Hotel",
    draggable: false,
    Animation: google.maps.Animation.BOUNCE,
    icon: {
      url: "location.jpg",
      scaledSize: new google.maps.Size(50, 50),
    },

  })
}

initMap();