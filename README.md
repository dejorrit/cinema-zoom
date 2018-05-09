# Cinema Zoom

## Installation

```bash
$ yarn add cinema-zoom
```

## Usage
### HTML

```html
<img 
  id="myZoomableImage"
  src="/path/to/small/image.png" 
  data-cz-large="/path/to/large/image.png"
  title="This is my caption"/> 
```

### Javascript

```javascript
import CinemaZoom from 'cinema-zoom';
  
let image = document.getElementById('myZoomableImage');
let cinemaZoom = new CinemaZoom(image);
```

## Options

Options are passed as a second argument in the constructor, like:

```javascript
let cinemaZoom = new CinemaZoom(image, {
	animationDuration: 250,
	backgroundOpacity: .85,
	zoomOutOnScroll: true,
	padding: 20,
});
```

### `animationDuration` (Number)
_Sets the duration for the in and out animations_

default: `250`

### `backgroundOpacity` (Number)
_Sets the background opacity_

default: `.85`

### `zoomOutOnScroll` (Boolean)
_Should the image return to it's orginal state when the user scrolls the page?_

default: `true`

### `padding` (Number)
_The padding around the zoomed image in pixels_

default: `20`

## Events

You might want to hook into events fired by Cinema Zoom.

```javascript
cinemaZoom.on('zoomInStart', () => console.log('Started ZoomIn animation'));
```

Removing events:

```javascript
cinemaZoom.off('zoomInStart');
```

### Available events:

- `imageLoadStart`
- `imageLoadComplete`
- `zoomInStart`
- `zoomInComplete`
- `zoomOutStart`
- `zoomOutComplete`