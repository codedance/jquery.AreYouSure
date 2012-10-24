/*!
 * jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 * https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012, Chris Dance - PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 24th Oct 2012
 */
(function($) {
  $.fn.areYouSure = function(options) {

    var settings = $.extend(
          {
            'message' : 'You have unsaved changes!',
            'dirtyClass' : 'dirty',
            'fieldSelector' : "select,textarea,input[type='text'],input[type='password'],input[type='checkbox'],input[type='radio']"
          }, options);

    var getValue = function($field) {
      if ($field.hasClass('aysIgnore') || $field.attr('data-ays-ignore')) {
        return null;
      }

      var val;
      var type = $field.attr('type');
      if ($field.is('select'))
        type = 'select';

      switch (type) {
        case 'checkbox':
        case 'radio':
          val = $field.is(':checked');
          break;
        case 'select':
          val = '';
          $field.children('option').each(function(o) {
            var $option = $(this);
            if ($option.is(':selected')) {
              val += $option.val();
            }
          });
          break;
        default:
          val = $field.val();
      }
      return val;
    };

    var storeOrigValue = function() {
      var $field = $(this);
      $field.data('ays-orig', getValue($field));
    };

    var checkForm = function(evt) {
      var isFieldDirty = function($field) {
        return (getValue($field) != $field.data('ays-orig'));
      };

      var isDirty = false;
      var $form = $(this).parents('form');

      // Test on the target first as it's the most likely to be dirty.
      if (isFieldDirty($(evt.target))) {
        isDirty = true;
      }

      if (!isDirty) {
        $form.find(settings.fieldSelector).each(function() {
          $field = $(this);
          if (isFieldDirty($field)) {
            isDirty = true;
            return false; // break
          }
        });
      }

      $form.toggleClass(settings.dirtyClass, isDirty);
    };

    $(window).bind('beforeunload', function() {
      var n = $("form[class='" + settings.dirtyClass + "']").length;
      if (n > 0) {
        return settings.message;
      }
    });

    return this.each(function(elem) {
      if (!$(this).is('form'))
        return;

      $(this).submit(function() {
        $form.removeClass(settings.dirtyClass);
      });

      $(this).find(settings.fieldSelector).each(storeOrigValue);

      //$(this).on('change keyup', settings.fieldSelector, checkForm);
      $(this).find(settings.fieldSelector).bind('change keyup', checkForm);
    });
  };
})(jQuery);
