(function() {
  var SiteSelector;

  SiteSelector = (function() {
    function SiteSelector() {
      this.initialize_event_handler();
    }

    SiteSelector.prototype.initialize_event_handler = function() {
      return this.site_selector();
    };

    SiteSelector.prototype.site_selector = function() {
      return ($('#js_site_selector')).on('change', (function(_this) {
        return function(event) {
          var locale, page_id;
          page_id = ($(event.target)).val();
          locale = location.search;
          return location.href = "/cms-admin/sites/" + page_id + "/pages" + locale;
        };
      })(this));
    };

    return SiteSelector;

  })();

  $(function() {
    var site_selector;
    return site_selector = new SiteSelector;
  });

}).call(this);


$(document).ready( function() {
  $('.dropdown-toggle').dropdown();
});


