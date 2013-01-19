# Piwik Analytics CloudFlare App

CloudFlare's Apps platform enables developers to create and publish web applications for use by website owners on CloudFlare's network. See the [full list](https://www.cloudflare.com/apps).

Miniature Hipster is the 'random' name provided by Github. I may change it. But it's kind of interesting.
  [Piwik Analytics App for Cloudflare](https://github.com/px/cfapp-piwik-analytics.git/) git repository.

  [Piwik Analytics](https://www.cloudflare.com/apps/TBD) CloudFlare App.


This CloudFlare App aims to improve upon the available Analytics &amp; Tracking options available to users.
  * Initially this App aims to:
    * work with Piwik;
    * Support a single Piwik Site ID
    * Support a single Piwik tracker/receiver
    * provide &lt;noscript&gt; tag for recording visitors without Javascript using a gif pixel.



# Remnants from Sample App are still below for now.

#Elements of a CloudFlare App repo

This sample app, and the examples cited above, include most of the elements listed below.

 * cloudflare.json (required)
 * cloudflare.md (required)
 * App logo files (required)
 * App JavaScript file (optional)
 * App detail image file(s) (optional)
 * App image file(s) (optional)
 * App CSS file(s) (coming soon; optional)

Descriptions of these elements follow.

##cloudflare.json

The cloudflare.json file contains the packaging information for your application.
It includes a path to your main JavaScript file, the definition for your configuration
interface, and the location and nature of your non-JS assets.
It also contains information on accounts and billing.

##cloudflare.md

Your app detail page is generated by your cloudflare.md file (see [A Better Browser app detail page](https://www.cloudflare.com/apps/abetterbrowser))
and [the A Better Browser cloudflare.md](https://github.com/xPaw/CF-ABetterBrowser/blob/master/cloudflare.md).

Recommend that you include images, such as screenshots. The max width on the app detail page is 708 pixels. More about images for app detail pages is detailed in the [sample cloudflare.md](https://github.com/cloudflare/cfapp_sample/blob/master/cloudflare.md).

##App logo files

Suggested directory for your logo files:
/APP-KEY/public/images/

Required image file names
 * logo-132.png (132 pixels wide; height not constrained)
 * logo-200.png (200 pixels wide; height not constrained)

You'll define the logo locations in the cloudflare.json file.

##App JavaScript file

Your App JavaScript file get deployed on customers' sites when they turn on the App, via cloudflare.js, if your App includes such a script.

[example script](https://github.com/cloudflare/cfapp_sample/blob/master/public/javascripts/sample_app.js)

##App image file(s)

You can add images to your cloudflare.json and have them avaliable on the CloudFlare CDN
so you can use them in image tags, etc.

    "images" : [
        "./public/images/counter.png"
    ]

You can then get access to the image at

    ajax.cloudflare.com/cdn-cgi/nexp/apps/app_key/images/counter.png

App image files are versioned on the CDN, so you can request, for example

    ajax.cloudflare.com/cdn-cgi/nexp/apps/app_key/images/counter@0.0.1.png

This will be more useful as versioning features are built that allow certain beta
to use versions of the app other than the current version.

#More info

##CSS

cloudflare.js does not currently load CSS files for you. You have two options for
reliable CSS in your app.

- Insert a link tag into the page, and do everything else in a callback when it loads
- Do all your styling using Javascript.

So far most partners have chosen the second option, and done their styling with
JQuery. We are planning to add CSS loading to cloudflare.js so that this can be
dealt with for you.

##Testing

CloudFlare does not require you to provide any tests. This repository contains a sample suite in case you are interested in one way to build tests for cloudflare.js modules.

To run the sample suite, boot up a webserver with the root of this repository as the document root, and open test/suite.html.

##Modules of interest

CloudFlare has a set of modules that you can use when writing apps

###cloudflare/dom

A dom manipulation library similar to browser methods, but more generic.

###cloudflare/path

Tools for parsing where the page is.

###cloudflare/loader

An AJAX wrapper that behaves similarly to jquery.ajax

###cloudflare/config

General information about the site your module is running on.

##Interface

The website owner sets up an App in their [CloudFlare Apps dashboard](https://www.cloudflare.com/cloudflare-apps) -- this link only works if signed in to a CloudFlare account, and it will ask you to select which zone (domain) you'd like to configure.

The simplest configuration requires nothing: the App may be turned On or Off, nothing more. Example (from an earlier version): A Better Browser

![On-Off only](./cfapp_sample/raw/master/doc/on-off-no-configuration.png "A Better Browser example - just On and Off")

More configuration is possible. Example: Trumpet.

![String example](./cfapp_sample/raw/master/doc/string-configuration-example.png "Trumpet example - string config")


You can specify an interface in your cloudflare.json for site owners to use to configure your application. The results of that configuration are available in
"your_app/config"
