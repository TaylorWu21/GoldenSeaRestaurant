$(document).ready(function(){
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: { scrollwheel: false, draggable:false }, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([
      {
        "lat": 40.6118450,
        "lng": -111.9380070,
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
    handler.getMap().setZoom(15);
  });
});