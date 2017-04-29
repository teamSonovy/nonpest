function initialize() {
  var latlng = new google.maps.LatLng(35.681298, 139.766247);
  var myOptions = {
    zoom: 12,
    center: latlng,
    disableDoubleClickZoom: true,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    gestureHandling: "none",
    scrollwheel: false,
    styles: [
      {
"elementType": "geometry",
"stylers": [
{
 "color": "#f5f5f5"
}
]
},
{
"elementType": "labels.icon",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#616161"
}
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
{
 "color": "#f5f5f5"
}
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#bdbdbd"
}
]
},
{
"featureType": "administrative.neighborhood",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
{
 "color": "#eeeeee"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
{
 "color": "#e5e5e5"
}
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#9e9e9e"
}
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
{
 "color": "#ffffff"
}
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#757575"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
{
 "color": "#dadada"
}
]
},
{
"featureType": "road.highway",
"elementType": "labels",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#616161"
}
]
},
{
"featureType": "road.local",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#9e9e9e"
}
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
{
 "color": "#e5e5e5"
}
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
{
 "color": "#eeeeee"
}
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
 "color": "#c9c9c9"
}
]
},
{
"featureType": "water",
"elementType": "labels.text",
"stylers": [
{
 "visibility": "off"
}
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
{
 "color": "#9e9e9e"
}
]
}
        ]
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  var lopanType = new google.maps.StyledMapType(styleOptions);
  var styleOptions = [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#484b6a' }]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{ color: '#cdcdce' }]
      },
  ];
  map.mapTypes.set('noText', lopanType);
  map.setMapTypeId('noText');
}
