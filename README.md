Are You Sure?  - A light "dirty forms" JQuery Plugin!
======

*Are-you-sure* (```jquery.are-you-sure.js```) is simple light-weight "dirty 
form" JQuery Plugin for modern browsers.  It helps prevent users from losing 
unsaved HTML Form changes.

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

###Basic Usage

```javascript

$(function() {

    // Enable on all forms
    $('form').areYouSure();

    // Enable on selected forms
    $('form.dirty-check').areYouSure();

    // With a custom message
    $('form').areYouSure( {'message':'Your profile details are not saved!'} );

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

###Advanced Usage

```javascript

$(function() {

    /*
    *  Disable the Warning Message (tracking/monitoring only)
    *  This option is useful when you wish to use the dirty/save events and/or
    *  use the dirtyness tracking in your own beforeunload handler.
    */
    $('form').areYouSure( {'disableMessage':true} );

    /*
    *  Dirtyness Change Events
    *  Are-You-Sure fires off "dirty" and "clean" events when the form's state
    *  changes. You can bind() or on(), these events to implement your own form
    *  state logic.  A good example is enabeling/disablening a Save button.
    *
    *  "this" refers to the form that fired the event.
    */
    $('form').bind('dirty.ays', function() {
      // Enable save button only as the form is dirty.
      $(this).find('input[type="submit"]').removeAttr('disabled');
    });
    $('form').bind('clean.ays', function() {
      // For is clean so nothing to save - disable the save button.
      $(this).find('input[type="submit"]').attr('disabled', 'disabled');
    });

    /*
    *  It's easy to test if a form is dirty in your own code - just check
    *  to see if it has a "dirty" CSS class.
    */
    if ($('#my-form').hasClass('dirty')) {
        // Do something
    }

    /*
    *  If you're dynamically adding new fields, and would like to track 
    *  their state, trigger Are-You-Sure to rescan the form like this.
    */
    $('#my-form').trigger('rescan.ays');
    
    /*
    *  As an alternative to using events, you can pass in a custom change 
    *  function.
    */
    $('#my-adv-form').areYouSure({
        change: function() {
                  // Enable save button only if the form is dirty. i.e. something to save.
                  if ($(this).hasClass('dirty')) {
                    $(this).find('input[type="submit"]').removeAttr('disabled');
                  } else {
                    $(this).find('input[type="submit"]').attr('disabled', 'disabled');
                  }
                }
    });
    
}
```


###Install
Are-You-Sure is a light-weight jQuery plugin. It's a single JavaScript 
file. You can download the 
[jquery.are-you-sure.js](https://raw.github.com/codedance/jquery.AreYouSure/master/jquery.are-you-sure.js)
file and include it in your page, however it seems a shame to add an extra 
browser round trip for such a simple feature.  You should consider 
concatenating  it with other common JS lib files, and/or even cut-n-pasting 
the code (and license header) into one of your existing JavaScript files.


###Demo
This [demo page](http://www.papercut.com/products/free_software/are-you-sure/demo/are-you-sure-demo.html)
hosts a number of example forms.


###Known Issues & Limitations
 * The custom message option may not work on Firefox ([Firefox bug 588292](https://bugzilla.mozilla.org/show_bug.cgi?id=588292)).
 * The ```windows.beforeunload``` event is not supported on current Opera (Feb 2013).  This will change with their move to WebKit.


###Future
The aim is to keep *Are-you-sure* simple and light. If you think you have 
a good idea which is aligned with this objective, please voice your thoughts 
in the issues list.


###Release History

**2013-09-30** 
* Added dirty and clean "events" 
* Added an option to disable the message (dirty tracking only)
* Added an option to rescan a form to look/detect any new fields

**2013-07-24** - Minor fix - don't fail if form elements have no "name" attribute.

**2013-05-14** - Added support for form reset buttons (contributed by codev).

**2013-05-01** - Added support for hidden and disabled form fields.

**2013-02-03** - Add demo page.

**2013-01-28** - Add ```change``` event support and a demo page.

**2012-10-26** - Use dashes in class names rather than camel case.

**2012-10-24** - Initial public release.


###Prerequisites
jQuery version 1.4.2 or higher. 1.10+ recommended.


###License
The same as JQuery...

    jQuery Plugin: Are-You-Sure (Dirty Form Detection)
    https://github.com/codedance/jquery.AreYouSure/
 
    Copyright (c) 2012-2013, Chris Dance - PaperCut Software http://www.papercut.com/
    Dual licensed under the MIT or GPL Version 2 licenses.
    http://jquery.org/license

