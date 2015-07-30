var assert = require('assert');
var dms2dec = require('./index');

describe('dms2dec', function() {
    var lat = '60/1, 21/1, 4045/100';
    var latRef = 'N';
    var latDec = 60.36123611111111;

    var lon = '5/1, 22/1, 1555/100';
    var lonRef = 'E';
    var lonDec = 5.370986111111111;

  it('parses dms strings', function() {
    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses dms strings without commas', function() {
    var lat = '60/1 21/1 4045/100';
    var lon = '5/1 22/1 1555/100';

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses dms strings without spaces', function() {
    var lat = '60/1,21/1,4045/100';
    var lon = '5/1,22/1,1555/100';

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses dms arrays of strings', function() {
    var lat = ['60/1', '21/1', '4045/100'];
    var lon = ['5/1' , '22/1', '1555/100'];

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses dms arrays of numbers', function() {
    var lat = [60, 21, 40.45];
    var lon = [5 , 22, 15.55];

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses western coorinates', function() {
    var lonRef = 'W';
    var lonDec = -5.370986111111111;

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('parses southern coorinates', function() {
    var latRef = 'S';
    var latDec = -60.36123611111111;

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });
});
