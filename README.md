# ng-autoHeader.js

---

Straightforward angular directive that when added to a nav bar element, which is fixed to the top of the screen, to scroll in and out.

The nav will appear when the document is at the top. When the user scrolls down it will scroll up and off the screen. When the user scrolls down it will come back into view. Additionally if the user hits the bottom of the document it will also scroll into view.

No dependencies (other than Angular naturally :) )

## Installation

Install with bower with

```bash
bower install --save ng-autoheader
```

Include as a dependency to your angular app

```js

angular.module('yourApp', [ng-autoheader]);
```

## Usage 

Add as directive to you nav element.

**NB**: This element must have an ID.

```html
<div id="myId" auto-hide>

  <!-- Your nav elements -->

</div>
```
