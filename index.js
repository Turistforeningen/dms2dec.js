(function() {
  var dms2dec = function(lat, latRef, lon, lonRef) {
    var ref = {'N': 1, 'E': 1, 'S': -1, 'W': -1};
    var sep = [' ,', ' ', ','];
    var i;

    if (typeof lat === 'string') {
      for (i = 0; i < sep.length; i++) {
        if (lat.split(sep[i]).length === 3) {
          lat = lat.split(sep[i]);
          break;
        }
      }
    }

    if (typeof lon === 'string') {
      for (i = 0; i < sep.length; i++) {
        if (lon.split(sep[i]).length === 3) {
          lon = lon.split(sep[i]);
          break;
        }
      }
    }

    for (i = 0; i < lat.length; i++) {
      if (typeof lat[i] === 'string') {
        lat[i] = lat[i].split('/');
        lat[i] = parseInt(lat[i][0], 10) / parseInt(lat[i][1], 10);
      }
    }

    for (i = 0; i < lon.length; i++) {
      if (typeof lon[i] === 'string') {
        lon[i] = lon[i].split('/');
        lon[i] = parseInt(lon[i][0], 10) / parseInt(lon[i][1], 10);
      }
    }

    lat = (lat[0] + (lat[1] / 60) + (lat[2] / 3600)) * ref[latRef];
    lon = (lon[0] + (lon[1] / 60) + (lon[2] / 3600)) * ref[lonRef];

    return [lat, lon];
  };


  // Node / Browserify module
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = dms2dec;

  // AMD module
  } else if (typeof define === 'function' && define.amd) {
    define(dms2dec);

  // Global variable
  } else {
    window.dms2dec = dms2dec;
  }
})();
