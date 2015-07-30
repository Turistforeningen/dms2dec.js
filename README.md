# dms2dec.js

[![Build status](https://img.shields.io/wercker/ci/555f9d4c49f5656573001db6.svg "Build status")](https://app.wercker.com/project/bykey/095d1525c8493a2ece0f8c12b4442898)
[![NPM downloads](https://img.shields.io/npm/dm/dms2dec.svg "NPM downloads")](https://www.npmjs.com/package/dms2dec)
[![NPM version](https://img.shields.io/npm/v/dms2dec.svg "NPM version")](https://www.npmjs.com/package/dms2dec)
[![Node version](https://img.shields.io/node/v/dms2dec.svg "Node version")](https://www.npmjs.com/package/dms2dec)
[![Dependency status](https://img.shields.io/david/turistforeningen/node-dms2dec.svg "Dependency status")](https://david-dm.org/turistforeningen/node-dms2dec)

Degrees, minutes, seconds (sexagesimal) to decimal GPS positions. Useful for
parsing PGS exif tags in geotagged images.

## Install

### Node.JS

```bash
npm install dms2dec --save
```

```javascript
var dms2dec = require('dms2dec');
```

### Web

```html
<script language="JavaScript" src="/dms2dec.js"></script>
```

## Usage

[`latDec`, `lonDec`] = dms2dec(String `lat`, String `latRef`, String `lon`, String `lonRef`);

#### Params

* `lat` – latitude in "degrees, minutes, seconds" format
* `lagRef` – latitude hemisphere reference (N or S)
* `lon` – longitude in "degrees, minutes, seconds" format
* `lonRef` – longitude hemisphere reference (E or W)

#### Return

* `latDec` – latitude converted into decimal format
* `lonDec` – longitude converted into decimal format

### Parse dms strings

```javascript
var dec = dms2dec("60/1, 21/1, 4045/100", "N", "5/1, 22/1, 1555/100", "E");
// dec[0] == 60.36123611111111, dec[1] == 5.370986111111111

// without spaces or commas in the dms strings are also supported
var dec = dms2dec("60/1,21/1,4045/100", "N", "5/1,22/1,1555/100", "E");
var dec = dms2dec("60/1 21/1 4045/100", "N", "5/1 22/1 1555/100", "E");
```

### Parse dms arrays

```javascript
var dec = dms2dec(["60/1", "21/1", "4045/100"], "N", ["5/1", "22/1", "1555/100"], "E");
// dec[0] == 60.36123611111111, dec[1] == 5.370986111111111
```

#### dms arrays as decimal

```javascript
var dec = dms2dec([60, 21, 40.45], "N", [5, 22, 15.55], "E");
// dec[0] == 60.36123611111111, dec[1] == 5.370986111111111
```

### GeoJSON

`NB!` Remember that GeoJSON stores coordinates in reversed order (`longitude`,
`latitude`) which means you have to reverse the order of the coordinates
returned from `dms2dec()`.

```
var geojson = {
  type: 'Point',
  coordinates: dms2dec(lat, latRef, lon, lonRef).reverse()
};
```

