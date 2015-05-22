var assert = require('assert');
var dms2dec = require('../lib/dms2dec');

describe('dms2dec', function() {
  var lat = '60/1, 21/1, 4045/100'
    , latRef = 'N'
    , latDec = 60.36123611111111

    , lon = '5/1, 22/1, 1555/100'
    , lonRef = 'E'
    , lonDec = 5.370986111111111;

  it('should parse input string', function() {
    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('should parse input string without spaces', function() {
    lat = '60/1,21/1,4045/100';
    lon = '5/1,22/1,1555/100';

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('should parse input array of strings', function() {
    lat = ['60/1', '21/1', '4045/100'];
    lon = ['5/1' , '22/1', '1555/100'];

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('should parse input array of numbers', function() {
    lat = [60, 21, 40.45];
    lon = [5 , 22, 15.55];

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('should parse western coorinates', function() {
    lonRef = 'W';
    lonDec = -5.370986111111111;

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });

  it('should parse southern coorinates', function() {
    latRef = 'S';
    latDec = -60.36123611111111;

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec]);
  });
});

