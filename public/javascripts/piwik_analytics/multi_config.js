var pkC;

pkC = {
  piwik_version: "1.10.1",
  use_cdnjs: true,
  piwik_js_default: "https://cdnjs.cloudflare.com/ajax/libs/piwik/1.10.1/piwik.js",
  cdnjs: "//cdnjs.cloudflare.com/ajax/libs",
  js_prot: "https:",
  js_schem: "//",
  js_host: "piwik-ssl.ns1.net",
  js_path: "/",
  js_file: "piwik.js",
  js_url: "",
  site_id: {
    a: "26",
    b: "27"
  },
  tracker: {
    a: "https://piwik-ssl.ns1.net/piwik.php",
    b: "https://piwik-ssl.ns1.net/piwik.php"
  },
  paq_push: {
    a: "['setLinkTrackingTimer',250],['disableCookies']",
    b: "['setLinkTrackingTimer',250],['trackGoal',1,0],['killFrame']"
  },
  set_do_not_track: {
    a: "true",
    b: "false"
  },
  link_tracking_timer: {
    a: "500",
    b: "500"
  },
  link_tracking: {
    a: "true",
    b: "true"
  },
  set_domains: {
    a: "a",
    b: "b"
  },
  set_cookie_domain: {
    a: "a",
    b: "b"
  }
};

pkC.js_url = pkC.js_prot + pkC.js_schem + pkC.js_host + pkC.js_path + pkC.js_file;

window.piwikConfig = pkC;
