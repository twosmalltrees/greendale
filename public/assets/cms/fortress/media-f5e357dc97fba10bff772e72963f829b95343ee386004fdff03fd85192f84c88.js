(function() {
  window.media = {
    init: function() {
      this.dlg = $("#media-box-dialog");
      return this.eventListeners();
    },
    eventListeners: function() {
      return ($('button.js-blank')).on('click', (function(_this) {
        return function(e) {
          return ($(e.target)).closest('form').attr('target', '_blank');
        };
      })(this));
    },
    loading: "<p>Loading...</p>",
    othersUrl: function() {
      return this.othersPath;
    },
    showImageDialog: function(ed) {
      this.ed = ed;
      this.dlg.modal({
        show: true,
        backdrop: false
      }).find(".title").html("Image Selector");
      return $("#modal-body").html(this.loading).load(this.imagesPath, function() {
        return media.attachImageEvents();
      });
    },
    showVideoDialog: function(ed) {
      this.ed = ed;
      this.dlg.modal({
        show: true,
        backdrop: false
      }).find(".title").html("Video Selector");
      return $("#modal-body").html(this.loading).load(this.videosPath, function() {
        return media.attachVideoEvents();
      });
    },
    attachVideoEvents: function() {
      return $('.editor-video').on('click', function(e) {
        e.preventDefault();
        media.attachVideo($(this).attr("href"), $(this).data('contentType'));
        return media.dlg.modal('hide');
      });
    },
    attachImageEvents: function() {
      $('.editor-image').on('click', function() {
        var data, url;
        data = $(this).data();
        url = data.original;
        media.attachImage(url);
        return media.dlg.modal('hide');
      });
      return $('.editor-image-style').on('click', function(e) {
        media.attachImage($(this).attr("href"));
        e.preventDefault();
        return media.dlg.modal('hide');
      });
    },
    attachImage: function(url) {
      var img;
      this.ed.focus();
      img = "<img src='" + url + "'>";
      return this.ed.selection.setContent(img);
    },
    attachVideo: function(url, type) {
      var img;
      this.ed.focus();
      img = '<img class="mce-object mce-object-video" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="320" height="240" data-mce-p-controls="controls" data-mce-html="%0A%3Csource%20src%3D%22' + url + '%22%20/%3E%0A" data-mce-object="video">';
      this.ed.selection.setContent(img);
      return this.ed.nodeChanged();
    }
  };

  window.CmsFortress = window.CmsFortress || {};

  window.CmsFortress.media = media;

  $(document).ready(function() {
    return CmsFortress.media.init();
  });

}).call(this);
