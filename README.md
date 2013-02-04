Are You Sure?  - A light "dirty forms" JQuery Plugin!
======

*Are-you-sure* (```jquery.are-you-sure.js```) is simple light-weight "dirty 
forms" JQuery Plugin for modern browsers.  It helps prevent users from losing 
unsaved form changes.

It's simple to use.  Just add the following line to your page's ready 
function:

```javascript
$('form').areYouSure();
```

*Are-you-sure* is a minimal plugin for modern browsers.  There are plenty of 
"dirty forms" implementations out there, however they all seemed very 
heavyweight and over-engineered...! Most were written some time back and 
contain many 'hacks' to support legacy browsers, and/or rely on other fat 
dependencies such as FaceBox or jQueryUI.  *Are-you-sure* solves this by
doing this simple task in the simplest possible way.

*Are-you-sure* is as simple as it gets:

 * 100% JS with zero dependencies and no external CSS.
 * Leverages `onBeforeUnload` to detect all page/browser exit events.
 * Works on forms of any size.
 * Correct state management - if a user edits then restores a value, the form 
   is not considered dirty.
 * Easy to understand - less than a "terminal screen" of code!
 * Graceful degradation on legacy browsers (i.e. if you're running an old 
   browser... remember to save :-)

###Usage

```javascript

$(function() {

    // Enable on all forms
    $('form').areYouSure();

    // Enable on selected forms
    $('form.dirty-check').areYouSure();

    // With a custom message
    $('form').areYouSure( {'message':'Your profile details are not saved!'} );

    // Test if a form is dirty in your own code
    if ($('#my-form').hasClass('dirty')) {
        // Do something
    }

    // Advanced: Hook a dirty change event to enable the "save" button.
    $('#my-adv-form').areYouSure( {
        change: function() {
                  // Enable save button only if the form is dirty. i.e. something to save.
                  if ($(this).hasClass('dirty')) {
                    $(this).find('input[type="submit"]').removeAttr('disabled');
                  } else {
                    $(this).find('input[type="submit"]').attr('disabled', 'disabled');
                  }
                }
      } );
    
}
```
To ignore selected fields from the dirtyness check: 

```html
  <form id="myForm" name="myform" action="/post" method="post">

    Field 1: (checked)                  <input type="text" name="field1"> <br />
    Field 2: (ignored with attribute):  <input type="text" name="field2" data-ays-ignore="true"> <br />
    Field 3: (ignored with class):      <input type="text" name="field3" class="ays-ignore"> <br />

    <input type="submit" value="Submit">

  </form>
```


###Install
This plugin is very light weight. You could download the 
[jquery.are-you-sure.js](https://raw.github.com/codedance/jquery.AreYouSure/master/jquery.are-you-sure.js)
file however my recommendation is to simply 
cut-n-paste the code (and license header) into one of your existing 
JavaScript files... it seems a shame to add an extra browser round 
trip for such a simple feature :-)


###Demo
This [demo page](http://www.papercut.com/products/free_software/are-you-sure/demo/are-you-sure-demo.html)
hosts a number of example forms.


###Future
The aim is to keep *Are-you-sure* simple and light. If you think you have a good idea which is aligned
with this objective, please voice your thoughts in the issues list.


###Release History

**2012-10-24** - Initial public release.

**2012-10-26** - Use dashes in class names rather than camel case.

**2013-01-28** - Add ```change``` event support and a demo page.

**2013-02-03** - Add demo page.


###Prerequisites
jQuery version 1.4.2 or higher. 


###License
The same as JQuery...

    jQuery Plugin: Are-You-Sure (Dirty Form Detection)
    https://github.com/codedance/jquery.AreYouSure/
 
    Copyright (c) 2012-2013, Chris Dance - PaperCut Software http://www.papercut.com/
    Dual licensed under the MIT or GPL Version 2 licenses.
    http://jquery.org/license

