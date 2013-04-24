// Generated by CoffeeScript 1.6.2
/*
* This is Miniature Hipster
*  @name      Miniature Hipster
*  @version   0.0.26b
*  @author    Rob Friedman <px@ns1.net>
*  @url       <http://playerx.net>
*  @license   https://github.com/px/cfapp-piwik-analytics/raw/master/LICENSE.txt
*  @todo      TODO: look for the lines in the coffeescript source file
*
* vim: set tabstop=2:softtabstop=2:shiftwidth=2:noexpandtab
*/

/*
 CloudFlare.push( {
  paths: {
   'piwik_analytics':
   '//labs.variablesoftware.com/test/miniature-hipster/public/javascripts/'
    } } );
*/

/*
# CloudFlare.push( { verbose:1 } );
*/

/*
# piwik_analytics module definition
# stick with commas for sep
# REQUIRE:
#  piwik.js library
#  piwik_analytics/config
#   -- defaults to {} and will assign test defaults
#  cloudflare/console for output to console
*/

/* set the performance timer
*/
window.perfNow = window.performance.now();

CloudFlare.define('piwik_analytics', ['piwik_analytics/config', 'cloudflare/console'], function(__config, __console) {
  var default_debug, default_piwik_install, default_piwik_site_id, e1, e2, e3, myPiwik, t, _isPiwik, _linkTracking, _visitorId;

  if (__config == null) {
    __config = {};
  }
  window._paq = window._paq || [];
  myPiwik = {};
  _isPiwik = false;
  _visitorId = false;
  _linkTracking = true;
  default_debug = true;
  default_piwik_install = "/piwik";
  default_piwik_site_id = "1";
  try {
    if (__config._debug === void 0) {
      __config._debug = default_debug;
      __console.log("Using test default _debug=" + default_debug);
    }
  } catch (_error) {
    e1 = _error;
    __config._debug = default_debug;
    __console.error(e1);
  }
  try {
    if (__config.piwik_install === void 0) {
      __config.piwik_install = default_piwik_install;
      __console.log("Using test default installation Url=\"" + default_piwik_install + "\"");
    }
  } catch (_error) {
    e2 = _error;
    __config.piwik_install = default_piwik_install;
    __console.error(e2);
  }
  try {
    if (__config.site_id === void 0) {
      __config.site_id = default_piwik_site_id;
      __console.log("Using test default SiteId=" + default_piwik_site_id);
    }
  } catch (_error) {
    e3 = _error;
    __config.site_id = default_piwik_site_id;
    __console.error(e3);
  }
  if (__config._debug != null) {
    t = window.performance.now() - window.perfNow;
    __console.log("Module begin time in ms =" + t);
    CloudFlare.push({
      verbose: 1
    });
    __console.log("Hello from the Piwik Analytics CloudFlare App!");
    __console.log("localStorage.clear() === undefined? " + (window.localStorage.clear() != null));
  }
  /*
  # myPiwik.fetch
  #   uses CloudFlare.require to fetch files specified 
  #   by a passed array
  */

  myPiwik.fetch = function(u) {
    return CloudFlare.require(u);
  };
  /*
  # overload for more CloudFlare.require functionality
  */

  myPiwik.fetch = function(u, r) {
    return CloudFlare.require(u, r);
  };
  /*
  # myPiwik.isPiwik()
  #   pushes a request for piwik to set _isPiwik true once piwik.js executes
  #   if it does, then it will return a yes, other no
  #
  */

  myPiwik.isPiwik = function() {
    "use strict";    window._paq.push([
      function() {
        return _isPiwik = true;
      }
    ]);
    return _isPiwik;
  };
  /*
  # myPiwik.getVisitorId
  # pushes a request for the Piwik VisitorId generated once piwik.js executes
  # sets the _visitorId to be the id, and returns it's value
  # will return the visitorId or false if piwik.js is still not loaded.
  #
  */

  myPiwik.getVisitorId = function() {
    "use strict";    window._paq.push([
      function() {
        _visitorId = this.getVisitorId();
        if (__config._debug != null) {
          __console.log("_visitorId=" + _visitorId);
        }
        return _visitorId;
      }
    ]);
    return _visitorId;
  };
  /*
  # myPiwik.
  */

  myPiwik.perf = function() {
    window.perfNow_piwik_js = window.performance.now();
    return window._paq.push([
      function() {
        t = window.performance.now() - window.perfNow_piwik_js;
        __console.log("Piwik library load time in ms = " + t);
        t = window.performance.now() - window.perfNow;
        return __console.log("Total execution time in ms = " + t);
      }
    ]);
  };
  /*
  # myPiwik.setSiteId()
  #
  #   checks for a null value, not a number, and assign's SiteId to default
  */

  myPiwik.setSiteId = function(_SiteId, _defaultSiteId) {
    if (_SiteId == null) {
      _SiteId = default_piwik_site_id;
    }
    if (_defaultSiteId == null) {
      _defaultSiteId = default_piwik_site_id;
    }
    if (!isNaN(_SiteId)) {
      if (__config._debug != null) {
        __console.log("Using _SiteId=" + _SiteId);
      }
    } else {
      if (__config._debug != null) {
        __console.error("Invalid SiteId=" + _SiteId + " ; defaulting to " + _defaultSiteId);
      }
    }
    _SiteId = _defaultSideId;
    window._paq.push(['setSiteId', unescape(_SiteId)]);
    return _SiteId;
  };
  /*
  # mypiwik.setInstall
  # sets the tracker for the client to use
  */

  myPiwik.setInstall = function(_install) {
    if (_install == null) {
      _install = default_piwik_install;
    }
    if (__config._debug != null) {
      __console.log("myPiwik.setInstall = \"" + _install + "\"");
    }
    myPiwik.perf();
    window._paq.push(['setTrackerlUrl', unescape(_install + "/piwik.php")]);
    myPiwik.fetch([unescape(_install + "/piwik.js")]);
    if (__config._debug != null) {
      __console.log("end myPiwik.setInstall");
    }
    /*
    #return _install
    */

    return _install;
  };
  /*
  # myPiwik.menuOpts
  */

  myPiwik.menuOpts = function() {
    var perfNow, wildcardZone;

    if (__config._debug != null) {
      __console.log("myPiwik.menuOpts");
      perfNow = window.performance.now();
    }
    if (__config.tracking_all_subdomains === "true" || __config.tracking_all_subdomains === void 0) {
      wildcardZone = "*" + ".example.com";
      window._paq.push(["setCookieDomain", wildcardZone]);
    }
    if (__config.tracking_do_not_track === "true" || __config.tracking_do_not_track === void 0) {
      window._paq.push(['setDoNotTrack', true]);
    } else {
      window._paq.push(['setDoNotTrack', false]);
    }
    if (__config._debug != null) {
      t = window.performance.now() - perfNow;
      __console.log("end myPiwik.menuOpts " + "time in ms =" + t);
    }
    return true;
  };
  /*
  # myPiwik.paqPush()
  #     take options from a Piwik configuration
  #       We could have multiple trackers someday! TODO
  #      It's easy, just not supported in this App.
  #    push our Piwik options into the window._paq array
  #     send a trackPageView to the TrackerUrl
  */

  myPiwik.paqPush = function() {
    var perfNow;

    if (__config._debug != null) {
      __console.log("myPiwik.paqPush");
      perfNow = window.performance.now();
    }
    window._paq = window._paq || [];
    myPiwik.setSiteId(__config.site_id, __config.default_site_id);
    myPiwik.setInstall(__config.piwik_install);
    myPiwik.menuOpts();
    if ((!__config.paq_push) && (__config.paq_push !== void 0) && (__config.paq_push !== "")) {
      window._paq.push(__config.paq_push);
    }
    window._paq.push(['enableLinkTracking', true]);
    window._paq.push(['trackPageView']);
    if (__config._debug != null) {
      t = window.performance.now() - perfNow;
      __console.log("end myPiwik.paqPush " + "time in ms =" + t);
    }
    return window._paq;
  };
  /*
  window.CloudFlare.require(['https://cdnjs.cloudflare.com/ajax/libs/piwik/1.11.1/piwik.js'], function() {
  window.console.log("piwik.js Module execution time in ms =")
  window.console.log(window.performance.now() - window.perfNow)
  }
  );
  */

  if (__config._debug != null) {
    myPiwik.getVisitorId();
  }
  myPiwik.paqPush();
  if (__config._debug != null) {
    t = window.performance.now() - window.perfNow;
    __console.log("Module execution time in ms =" + t);
  }
  return myPiwik;
});

/*
#end myPiwik module
*/


window.console.log("Script load time in ms =");

window.console.log(window.performance.now() - window.perfNow);

/*
//@ sourceMappingURL=piwik_analytics.map
*/
