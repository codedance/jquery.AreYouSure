Are You Sure?  - A light "dirty forms" JQuery Plugin!
======

*Are-you-sure* (```jquery.are-you-sure.js```) is simple light-weight "dirty 
forms" JQuery Plugin for modern browsers.  It helps prevent users from loosing 
unsaved form changes.

It's simple to use.  Just add the following line to your page's ready 
function:

```javascript
$('form').areYouSure();
```

*Are-you-sure* is a minimal plugin for modern browsers.  There of plenty of 
"dirty forms" implementations out there, but their code is hairy! They often 
have many hacks to support legacy browsers, and/or rely on other fat 
dependencies such as FaceBox or jQueryUI.  

*Are-you-sure* is as simple as it gets:

 * 100% JS with zero dependencies or no external CSS.
 * Leverage `onBeforeUnload` to detect all exit page/browser events.
 * Works on forms of any size.
 * Correct state management - if a user edits then restores a value, the form 
   is not considered dirty.
 * Easy to understand - less than a "terminal screen" of code!

###Usage

```javascript

$(function() {

    // Enable on all forms
    $('form').areYouSure();

    // Enable on selected forms
    $('form.dirtyCheck').areYouSure();

    // With a custom message
    $('form').areYouSure( {'message':'Your profile details are not saved!'} );

    // Test if a form is dirty in your own code
    if ($('#myForm').hasClass('dirty')) {
        // Do something
    }
}
```
To ignore selected fields from the dirtyness check: 

```html
    <form id="myForm" name="myform" action="/post" method="post">

        Text:                           <input type="text" name="text1"> <br />
        Text (ignored with attribute):  <input type="text" name="text2" data-ays-ignore="true"> <br />
        Text (ignored with class):      <input type="text" name="text2" class="aysIgnore"> <br />

        <input type="submit" value="Submit">

	</form>
```


###Install
This plugin is very light weight. You could download the 
[jquery.are-you-sure.js](https://raw.github.com/codedance/jquery.AreYouSure/master/jquery.are-you-sure.js)
file however my recommendation is to simply 
cut-n-paste the code into one of your existing JavaScript files... it seems 
a shame to add an extra browser round trip for such a simple feature :-)


###Release History

**2012-10-24** - Initial public release.


###Prerequisites
jQuery version 1.4.2 or higher. 


###License
The same as JQuery...

    jQuery Plugin: Are-You-Sure
    https://github.com/codedance/jquery.AreYouSure/
 
    Copyright (c) 2012, Chris Dance - PaperCut Software http://www.papercut.com/
    Dual licensed under the MIT or GPL Version 2 licenses.
    http://jquery.org/license

