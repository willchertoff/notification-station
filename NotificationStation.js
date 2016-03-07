/*       
     /\__\         ___       /\__\ /\__\             /\  \        /\__\        /\  \        /\  \     /\  \        /\  \        /\  \        /\  \    
    /:/ _/_       /\  \     /:/  //:/  /            /::\  \      /:/  /       /::\  \      /::\  \    \:\  \      /::\  \      /::\  \      /::\  \   
   /:/ /\__\      \:\  \   /:/  //:/  /            /:/\:\  \    /:/__/       /:/\:\  \    /:/\:\  \    \:\  \    /:/\:\  \    /:/\:\  \    /:/\:\  \  
  /:/ /:/ _/_     /::\__\ /:/  //:/  /            /:/  \:\  \  /::\  \ ___  /::\~\:\  \  /::\~\:\  \   /::\  \  /:/  \:\  \  /::\~\:\  \  /::\~\:\  \ 
 /:/_/:/ /\__\ __/:/\/__//:/__//:/__/            /:/__/ \:\__\/:/\:\  /\__\/:/\:\ \:\__\/:/\:\ \:\__\ /:/\:\__\/:/__/ \:\__\/:/\:\ \:\__\/:/\:\ \:\__\
 \:\/:/ /:/  //\/:/  /   \:\  \\:\  \            \:\  \  \/__/\/__\:\/:/  /\:\~\:\ \/__/\/_|::\/:/  //:/  \/__/\:\  \ /:/  /\/__\:\ \/__/\/__\:\ \/__/
  \::/_/:/  / \::/__/     \:\  \\:\  \            \:\  \           \::/  /  \:\ \:\__\     |:|::/  //:/  /      \:\  /:/  /      \:\__\       \:\__\  
   \:\/:/  /   \:\__\      \:\  \\:\  \            \:\  \          /:/  /    \:\ \/__/     |:|\/__/ \/__/        \:\/:/  /        \/__/        \/__/  
    \::/  /     \/__/       \:\__\\:\__\            \:\__\        /:/  /      \:\__\       |:|  |                 \::/  /                             
     \/__/                   \/__/ \/__/             \/__/        \/__/        \/__/        \|__|                  \/__/                              

Notification Station
  - A simple JS notification system for your app.
*/

(function (window, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([], factory(window));
  } else if (typeof exports === 'object') {
    module.exports = factory(window);
  } else {
    window.NotificationStation = factory(window);
  }

})(window, function factory(window) {

  helpers = {
    setDefault: function(variable, value) {
      return (typeof variable === 'undefined') ? value : variable;
    }
  }

  function Station(settings) {
    this.container = settings.stationElement || null
    this.el = settings.notificationElement || null
    this.duration = settings.displayTime * 1000 || null
    
    return this;
  }

  Station.prototype = {
    showAppNotification: function(notification) {
      _this = this;
      document.getElementById(this.container).style.visibility = 'visible';
      document.getElementById(this.container).classList.add(notification.showAnimation);
      document.getElementById(this.el).innerHTML = notification.message;
      setTimeout(function() {_this.clearAppNotification(notification)},this.duration);
    },
    clearAppNotification: function(notification) {
      _this = this;
      document.getElementById(this.container).classList.remove(notification.showAnimation);
      document.getElementById(this.container).classList.add(notification.hideAnimation);
      setTimeout(function() {
        document.getElementById(_this.container).style.visibility = 'hidden';
        document.getElementById(_this.container).classList.remove(notification.hideAnimation);
        document.getElementById(_this.el).innerHTML = '';
      },_this.duration);
    }
  }

  function AppNote(options) {
    options = helpers.setDefault(options, {});
    this.station = options.station || null;
    this.showAnimation = options.showAnimation || null;
    this.hideAnimation = options.hideAnimation || null;
    this.noteClass = options.noteClass || null;
    
    this.notify = function() {
      this.station.showAppNotification(this);
    }
    return this;
  }

  AppNote.prototype = {
    get message() {
      return message;
    },
    set message(new_message) {
      message = new_message;
      this.notify();
    }
  }

  NotificationStation = {
    AppNote: AppNote,
    Station: Station
  }

  return NotificationStation;

});

;(function() {window.NS = NotificationStation;})();
