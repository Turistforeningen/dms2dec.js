(function() {
  var dms2dec = function(lat, latRef, lon, lonRef) {
    var ref = {'N': 1, 'E': 1, 'S': -1, 'W': -1};
    var i;

    if (typeof lat === 'string') {
      lat = lat.split(',');
    }

    if (typeof lon === 'string') {
      lon = lon.split(',');
    }

    for (i = 0; i < lat.length; i++) {
      if (typeof lat[i] === 'string') {
        lat[i] = lat[i].replace(/^\s+|\s+$/g,'').split('/');
        lat[i] = parseInt(lat[i][0], 10) / parseInt(lat[i][1], 10);
      }
    }

    for (i = 0; i < lon.length; i++) {
      if (typeof lon[i] === 'string') {
        lon[i] = lon[i].replace(/^\s+|\s+$/g,'').split('/');
        lon[i] = parseInt(lon[i][0], 10) / parseInt(lon[i][1], 10);
      }
    }

    lat = (lat[0] + (lat[1] / 60) + (lat[2] / 3600)) * ref[latRef];
    lon = (lon[0] + (lon[1] / 60) + (lon[2] / 3600)) * ref[lonRef];

    return [lat, lon]
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = dms2dec;
  else
    window.dms2dec = dms2dec;
})();

