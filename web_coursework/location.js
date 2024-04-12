let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 52.5220 , lng: 13.4133 },
    zoom: 15,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.terrain,
  });
  new google.maps.Marker({
    position: { lat: 52.5220 , lng: 13.4133 },
    map:map,
    label: 'H',
    title: "Sevare Hutch Hotel ,The best around Berlin",
    draggable: false,
    Animation: google.maps.Animation.BOUNCE,
    icon: {
      url: "location.jpg",
      scaledSize: new google.maps.Size(50, 50),
    },

  })
}

initMap();