ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [59.93863106, 30.32305450],
    zoom: 17,
    controls: ['zoomControl'],
    behaviors: ['drag'],
  });

  var placemark = new ymaps.Placemark([59.93863106, 30.32305450], {
    hintContent: '<div class="map-hint">191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</div>',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-28, -85],
    });

  map.geoObjects.add(placemark);
}
