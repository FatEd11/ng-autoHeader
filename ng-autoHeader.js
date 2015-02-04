/***********************************************************************************

ng-autoHeader.js 1.0

Simple directive to add to a top fixed nav header that allows it to scroll out when 
the user scrolls down, and scroll back in when they scroll up, or reach the bottom
or top of the document.

Free to use under the MIT License.

************************************************************************************/

(function (){
  'use strict';

  var module = angular.module('ng-autoheader', []);

  module.directive('autoHide', function () {
    return {
      restrict: 'A',
      scope: {},
      link: function (scope, el, attrs) {

        var elSelector  = '#' + attrs.id,
            element   = document.querySelector( elSelector );

        var elHeight    = 0,
          elTop     = 0,
          dHeight     = 0,
          wHeight     = 0,
          wScrollCurrent  = 0,
          wScrollBefore = 0,
          wScrollDiff   = 0;

        window.addEventListener( 'scroll', function() {
          elHeight    = element.offsetHeight;
          dHeight     = document.body.offsetHeight;
          wHeight     = window.innerHeight;
          wScrollCurrent  = window.pageYOffset;
          wScrollDiff   = wScrollBefore - wScrollCurrent;
          elTop     = parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

          if( wScrollCurrent <= 0 ) {

            element.style.top = '0px';

          } else if( wScrollDiff > 0 ) {

            element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';

          } else if( wScrollDiff < 0 ) {

            if( wScrollCurrent + wHeight >= dHeight - elHeight ) {

              element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
            
            } else {
            
              element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
            
            }
          }

          wScrollBefore = wScrollCurrent;

        });

      }
    };
  });

}());