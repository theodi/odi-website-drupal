
// Global Killswitch
if (Drupal.jsEnabled) {
$(document).ready(function() {
    $("body").append($("#memcache-devel"));
  });
}
;
/**
 * jQuery.fn.sortElements
 * --------------
 * @param Function comparator:
 *   Exactly the same behaviour as [1,2,3].sort(comparator)
 *
 * @param Function getSortable
 *   A function that should return the element that is
 *   to be sorted. The comparator will run on the
 *   current collection, but you may want the actual
 *   resulting sort to occur on a parent or another
 *   associated element.
 *
 *   E.g. $('td').sortElements(comparator, function(){
 *      return this.parentNode;
 *   })
 *
 *   The <td>'s parent (<tr>) will be sorted instead
 *   of the <td> itself.
 *
 * Credit: http://james.padolsey.com/javascript/sorting-elements-with-jquery/
 *
 */
jQuery.fn.sortElements = (function(){

    var sort = [].sort;

    return function(comparator, getSortable) {

        getSortable = getSortable || function(){return this;};

        var placements = this.map(function(){

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

                // Since the element itself will change position, we have
                // to have some way of storing its original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function() {

                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });

    };

})();

(function ($) {
  Drupal.behaviors.features = {
    attach: function(context, settings) {
      // Features management form
      $('table.features:not(.processed)', context).each(function() {
        $(this).addClass('processed');

        // Check the overridden status of each feature
        Drupal.features.checkStatus();

        // Add some nicer row hilighting when checkboxes change values
        $('input', this).bind('change', function() {
          if (!$(this).attr('checked')) {
            $(this).parents('tr').removeClass('enabled').addClass('disabled');
          }
          else {
            $(this).parents('tr').addClass('enabled').removeClass('disabled');
          }
        });
      });

      // Export form component selector
      $('form.features-export-form select.features-select-components:not(.processed)', context).each(function() {
        $(this)
          .addClass('processed')
          .change(function() {
            var target = $(this).val();
            $('div.features-select').hide();
            $('div.features-select-' + target).show();
            return false;
        }).trigger('change');
      });

      // Export form machine-readable JS
      $('.feature-name:not(.processed)', context).each(function() {
        $('.feature-name')
          .addClass('processed')
          .after(' <small class="feature-module-name-suffix">&nbsp;</small>');
        if ($('.feature-module-name').val() === $('.feature-name').val().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+/g, '_') || $('.feature-module-name').val() === '') {
          $('.feature-module-name').parents('.form-item').hide();
          $('.feature-name').bind('keyup change', function() {
            var machine = $(this).val().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+/g, '_');
            if (machine !== '_' && machine !== '') {
              $('.feature-module-name').val(machine);
              $('.feature-module-name-suffix').empty().append(' Machine name: ' + machine + ' [').append($('<a href="#">'+ Drupal.t('Edit') +'</a>').click(function() {
                $('.feature-module-name').parents('.form-item').show();
                $('.feature-module-name-suffix').hide();
                $('.feature-name').unbind('keyup');
                return false;
              })).append(']');
            }
            else {
              $('.feature-module-name').val(machine);
              $('.feature-module-name-suffix').text('');
            }
          });
          $('.feature-name').keyup();
        }
      });

      //View info dialog
      $('#features-info-file').dialog({
        autoOpen: false,
        modal: true,
        draggable: false,
        resizable: false,
        width: 600,
        height: 480
      });

      if ((Drupal.settings.features != undefined) && (Drupal.settings.features.info != undefined)) {
        $('#features-info-file textarea').val(Drupal.settings.features.info);
        $('#features-info-file').dialog('open');
        //To be reset by the button click ajax
        Drupal.settings.features.info = undefined;
      }

      // mark any conflicts with a class
      for (var moduleName in Drupal.settings.features.conflicts) {
        moduleConflicts = Drupal.settings.features.conflicts[moduleName];
        $('#features-export-wrapper input[type=checkbox]', context).each(function() {
          if (!$(this).hasClass('features-checkall')) {
            var key = $(this).attr('name');
            var matches = key.match(/^([^\[]+)(\[.+\])?\[(.+)\]\[(.+)\]$/);
            var component = matches[1];
            var item = matches[4];
            if ((component in moduleConflicts) && (moduleConflicts[component].indexOf(item) != -1)) {
              $(this).parent().addClass('features-conflict');
            }
          }
        });
      }

      function _checkAll(value) {
        if (value) {
          $('#features-export-wrapper .component-select input[type=checkbox]:visible', context).each(function() {
            var move_id = $(this).attr('id');
            $(this).click();
            $('#'+ move_id).attr('checked', 'checked');
        });
        }
        else {
          $('#features-export-wrapper .component-added input[type=checkbox]:visible', context).each(function() {
            var move_id = $(this).attr('id');
            $('#'+ move_id).removeAttr('checked');
            $(this).click();
            $('#'+ move_id).removeAttr('checked');
          });
        }
      }

      function moveCheckbox(item, section, value) {
        var curParent = item;
        if ($(item).hasClass('form-type-checkbox')) {
          item = $(item).children('input[type=checkbox]');
        }
        else {
          curParent = $(item).parents('.form-type-checkbox');
        }
        var newParent = $(curParent).parents('.features-export-parent').find('.form-checkboxes.component-'+section);
        $(curParent).detach();
        $(curParent).appendTo(newParent);
        var list = ['select', 'added', 'detected', 'included'];
        for (i in list) {
          $(curParent).removeClass('component-' + list[i]);
          $(item).removeClass('component-' + list[i]);
        }
        $(curParent).addClass('component-'+section);
        $(item).addClass('component-'+section);
        if (value) {
          $(item).attr('checked', 'checked');
        }
        else {
          $(item).removeAttr('checked')
        }
        $(newParent).parent().removeClass('features-export-empty');

        // re-sort new list of checkboxes based on labels
        $(newParent).find('label').sortElements(
          function(a, b){
            return $(a).text() > $(b).text() ? 1 : -1;
          },
          function(){
            return this.parentNode;
          }
        );
      }

      // provide timer for auto-refresh trigger
      var timeoutID = 0;
      var inTimeout = 0;
      function _triggerTimeout() {
        timeoutID = 0;
        _updateDetected();
      }
      function _resetTimeout() {
        inTimeout++;
        // if timeout is already active, reset it
        if (timeoutID != 0) {
          window.clearTimeout(timeoutID);
          if (inTimeout > 0) inTimeout--;
        }
        timeoutID = window.setTimeout(_triggerTimeout, 500);
      }

      function _updateDetected() {
        var autodetect = $('#features-autodetect input[type=checkbox]');
        if ((autodetect.length > 0) && (!autodetect.is(':checked'))) return;
        // query the server for a list of components/items in the feature and update
        // the auto-detected items
        var items = [];  // will contain a list of selected items exported to feature
        var components = {};  // contains object of component names that have checked items
        $('#features-export-wrapper input[type=checkbox]:checked', context).each(function() {
          if (!$(this).hasClass('features-checkall')) {
            var key = $(this).attr('name');
            var matches = key.match(/^([^\[]+)(\[.+\])?\[(.+)\]\[(.+)\]$/);
            components[matches[1]] = matches[1];
            if (!$(this).hasClass('component-detected')) {
              items.push(key);
            }
          }
        });
        var featureName = $('#edit-module-name').val();
        if (featureName == '') {
          featureName = '*';
        }
        var url = Drupal.settings.basePath + 'features/ajaxcallback/' + featureName;
        var excluded = Drupal.settings.features.excluded;
        var postData = {'items': items, 'excluded': excluded};
        jQuery.post(url, postData, function(data) {
          if (inTimeout > 0) inTimeout--;
          // if we have triggered another timeout then don't update with old results
          if (inTimeout == 0) {
            // data is an object keyed by component listing the exports of the feature
            for (var component in data) {
              var itemList = data[component];
              $('#features-export-wrapper .component-' + component + ' input[type=checkbox]', context).each(function() {
                var key = $(this).attr('value');
                // first remove any auto-detected items that are no longer in component
                if ($(this).hasClass('component-detected')) {
                  if (!(key in itemList)) {
                    moveCheckbox(this, 'select', false)
                  }
                }
                // next, add any new auto-detected items
                else if ($(this).hasClass('component-select')) {
                  if (key in itemList) {
                    moveCheckbox(this, 'detected', itemList[key]);
                    $(this).parent().show(); // make sure it's not hidden from filter
                  }
                }
              });
            }
            // loop over all selected components and check for any that have been completely removed
            for (var component in components) {
              if ((data == null) || !(component in data)) {
                $('#features-export-wrapper .component-' + component + ' input[type=checkbox].component-detected', context).each(function() {
                  moveCheckbox(this, 'select', false);
                });
              }
            }
          }
        }, "json");
      }

      // Handle component selection UI
      $('#features-export-wrapper input[type=checkbox]', context).click(function() {
        _resetTimeout();
        if ($(this).hasClass('component-select')) {
          moveCheckbox(this, 'added', true);
        }
        else if ($(this).hasClass('component-included')) {
          moveCheckbox(this, 'added', false);
        }
        else if ($(this).hasClass('component-added')) {
          if ($(this).is(':checked')) {
            moveCheckbox(this, 'included', true);
          }
          else {
            moveCheckbox(this, 'select', false);
          }
        }
      });

      // Handle select/unselect all
      $('#features-filter .features-checkall', context).click(function() {
        if ($(this).attr('checked')) {
          _checkAll(true);
          $(this).next().html(Drupal.t('Deselect all'));
        }
        else {
          _checkAll(false);
          $(this).next().html(Drupal.t('Select all'));
        }
        _resetTimeout();
      });

      // Handle filtering

      // provide timer for auto-refresh trigger
      var filterTimeoutID = 0;
      var inFilterTimeout = 0;
      function _triggerFilterTimeout() {
        filterTimeoutID = 0;
        _updateFilter();
      }
      function _resetFilterTimeout() {
        inFilterTimeout++;
        // if timeout is already active, reset it
        if (filterTimeoutID != 0) {
          window.clearTimeout(filterTimeoutID);
          if (inFilterTimeout > 0) inFilterTimeout--;
        }
        filterTimeoutID = window.setTimeout(_triggerFilterTimeout, 200);
      }
      function _updateFilter() {
        var filter = $('#features-filter input').val();
        var regex = new RegExp(filter, 'i');
        // collapse fieldsets
        var newState = {};
        var currentState = {};
        $('#features-export-wrapper .component-select label', context).each(function() {
          // expand parent fieldset
          var section = '';
          $(this).parents('fieldset.features-export-component').each(function() {
            section = $(this).attr('id');
            currentState[section] = !($(this).hasClass('collapsed'));
            if (!(section in newState)) {
              newState[section] = false;
            }
          });
          if (filter == '') {
            if (currentState[section]) {
              Drupal.toggleFieldset($('#'+section));
              currentState[section] = false;
            }
            $(this).parent().show();
          }
          else if ($(this).text().match(regex)) {
            $(this).parent().show();
            newState[section] = true;
          }
          else {
            $(this).parent().hide();
          }
        });
        for (section in newState) {
          if (currentState[section] != newState[section]) {
            Drupal.toggleFieldset($('#'+section));
          }
        }
      }
      $('#features-filter input', context).bind("input", function() {
        _resetFilterTimeout();
      });
      $('#features-filter .features-filter-clear', context).click(function() {
        $('#features-filter input').val('');
        _updateFilter();
      });

      // show the filter bar
      $('#features-filter', context).removeClass('element-invisible');
    }
  }


  Drupal.features = {
    'checkStatus': function() {
      $('table.features tbody tr').not('.processed').filter(':first').each(function() {
        var elem = $(this);
        $(elem).addClass('processed');
        var uri = $(this).find('a.admin-check').attr('href');
        if (uri) {
          $.get(uri, [], function(data) {
            $(elem).find('.admin-loading').hide();
            switch (data.storage) {
              case 3:
                $(elem).find('.admin-rebuilding').show();
                break;
              case 2:
                $(elem).find('.admin-needs-review').show();
                break;
              case 1:
                $(elem).find('.admin-overridden').show();
                break;
              default:
                $(elem).find('.admin-default').show();
                break;
            }
            Drupal.features.checkStatus();
          }, 'json');
        }
        else {
            Drupal.features.checkStatus();
          }
      });
    }
  };


})(jQuery);


;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Attaches the autocomplete behavior to all required fields.
 */
Drupal.behaviors.autocomplete = {
  attach: function (context, settings) {
    var acdb = [];
    $('input.autocomplete', context).once('autocomplete', function () {
      var uri = this.value;
      if (!acdb[uri]) {
        acdb[uri] = new Drupal.ACDB(uri);
      }
      var $input = $('#' + this.id.substr(0, this.id.length - 13))
        .attr('autocomplete', 'OFF')
        .attr('aria-autocomplete', 'list');
      $($input[0].form).submit(Drupal.autocompleteSubmit);
      $input.parent()
        .attr('role', 'application')
        .append($('<span class="element-invisible" aria-live="assertive"></span>')
          .attr('id', $input.attr('id') + '-autocomplete-aria-live')
        );
      new Drupal.jsAC($input, acdb[uri]);
    });
  }
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).length == 0;
};

/**
 * An AutoComplete object.
 */
Drupal.jsAC = function ($input, db) {
  var ac = this;
  this.input = $input[0];
  this.ariaLive = $('#' + this.input.id + '-autocomplete-aria-live');
  this.db = db;

  $input
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event.
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow.
      this.selectDown();
      return false;
    case 38: // up arrow.
      this.selectUp();
      return false;
    default: // All other keys.
      return true;
  }
};

/**
 * Handler for the "keyup" event.
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // Shift.
    case 17: // Ctrl.
    case 18: // Alt.
    case 20: // Caps lock.
    case 33: // Page up.
    case 34: // Page down.
    case 35: // End.
    case 36: // Home.
    case 37: // Left arrow.
    case 38: // Up arrow.
    case 39: // Right arrow.
    case 40: // Down arrow.
      return true;

    case 9:  // Tab.
    case 13: // Enter.
    case 27: // Esc.
      this.hidePopup(e.keyCode);
      return true;

    default: // All other keys.
      if (input.value.length > 0 && !input.readOnly) {
        this.populatePopup();
      }
      else {
        this.hidePopup(e.keyCode);
      }
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field.
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = $(node).data('autocompleteValue');
};

/**
 * Highlights the next suggestion.
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else if (this.popup) {
    var lis = $('li', this.popup);
    if (lis.length > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion.
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion.
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
  $(this.ariaLive).html($(this.selected).html());
};

/**
 * Unhighlights a suggestion.
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Hides the autocomplete suggestions.
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed.
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.input.value = $(this.selected).data('autocompleteValue');
  }
  // Hide popup.
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function () { $(popup).remove(); });
  }
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Positions the suggestions popup and starts a search.
 */
Drupal.jsAC.prototype.populatePopup = function () {
  var $input = $(this.input);
  var position = $input.position();
  // Show popup.
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = $('<div id="autocomplete"></div>')[0];
  this.popup.owner = this;
  $(this.popup).css({
    top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
    left: parseInt(position.left, 10) + 'px',
    width: $input.innerWidth() + 'px',
    display: 'none'
  });
  $input.before(this.popup);

  // Do search.
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received.
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches.
  var ul = $('<ul></ul>');
  var ac = this;
  for (key in matches) {
    $('<li></li>')
      .html($('<div></div>').html(matches[key]))
      .mousedown(function () { ac.select(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); })
      .data('autocompleteValue', key)
      .appendTo(ul);
  }

  // Show popup with matches, if any.
  if (this.popup) {
    if (ul.children().length) {
      $(this.popup).empty().append(ul).show();
      $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
    }
    else {
      $(this.popup).css({ visibility: 'hidden' });
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      $(this.ariaLive).html(Drupal.t('Searching for matches...'));
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object.
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search.
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this string needs to be searched for anyway.
  searchString = searchString.replace(/^\s+|\s+$/, '');
  if (searchString.length <= 0 ||
    searchString.charAt(searchString.length - 1) == ',') {
    return;
  }

  // See if this key has been searched for before.
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search.
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function () {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
    // encodeURIComponent to allow autocomplete search terms to contain slashes.
    $.ajax({
      type: 'GET',
      url: db.uri + '/' + Drupal.encodePath(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches.status == 'undefined' || matches.status != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see.
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ajaxError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request.
 */
Drupal.ACDB.prototype.cancel = function () {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
(function ($) {

Drupal.toolbar = Drupal.toolbar || {};

/**
 * Attach toggling behavior and notify the overlay of the toolbar.
 */
Drupal.behaviors.toolbar = {
  attach: function(context) {

    // Set the initial state of the toolbar.
    $('#toolbar', context).once('toolbar', Drupal.toolbar.init);

    // Toggling toolbar drawer.
    $('#toolbar a.toggle', context).once('toolbar-toggle').click(function(e) {
      Drupal.toolbar.toggle();
      // Allow resize event handlers to recalculate sizes/positions.
      $(window).triggerHandler('resize');
      return false;
    });
  }
};

/**
 * Retrieve last saved cookie settings and set up the initial toolbar state.
 */
Drupal.toolbar.init = function() {
  // Retrieve the collapsed status from a stored cookie.
  var collapsed = $.cookie('Drupal.toolbar.collapsed');

  // Expand or collapse the toolbar based on the cookie value.
  if (collapsed == 1) {
    Drupal.toolbar.collapse();
  }
  else {
    Drupal.toolbar.expand();
  }
};

/**
 * Collapse the toolbar.
 */
Drupal.toolbar.collapse = function() {
  var toggle_text = Drupal.t('Show shortcuts');
  $('#toolbar div.toolbar-drawer').addClass('collapsed');
  $('#toolbar a.toggle')
    .removeClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').removeClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    1,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Expand the toolbar.
 */
Drupal.toolbar.expand = function() {
  var toggle_text = Drupal.t('Hide shortcuts');
  $('#toolbar div.toolbar-drawer').removeClass('collapsed');
  $('#toolbar a.toggle')
    .addClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').addClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    0,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Toggle the toolbar.
 */
Drupal.toolbar.toggle = function() {
  if ($('#toolbar div.toolbar-drawer').hasClass('collapsed')) {
    Drupal.toolbar.expand();
  }
  else {
    Drupal.toolbar.collapse();
  }
};

Drupal.toolbar.height = function() {
  var $toolbar = $('#toolbar');
  var height = $toolbar.outerHeight();
  // In modern browsers (including IE9), when box-shadow is defined, use the
  // normal height.
  var cssBoxShadowValue = $toolbar.css('box-shadow');
  var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
  // In IE8 and below, we use the shadow filter to apply box-shadow styles to
  // the toolbar. It adds some extra height that we need to remove.
  if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test($toolbar.css('filter'))) {
    height -= $toolbar[0].filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

})(jQuery);
;
