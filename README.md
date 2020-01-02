
# Sample use case of StickyHeaderNavi

This is a sample use case of [craft-widget-stickyheadernavi](https://github.com/craftkit/craft-widget-stickyheadernavi).

``` 
npm install
npm run serve

go: http://127.0.0.1:8099/
``` 

To rebuild:

``` 
npm run build
``` 

## Feature

* Support both browser and home added web app (standalone mode).
* Two page with sticky navigation bar
* Using [Craft.Core.PathRouter](https://github.com/craftkit/craft-uikit/blob/master/src/Craft/Core/PathRouter.js)
* Simple page object cache service living with Craft.Core.Context
* safe-area-inste-* supported
* Partial slide effect (header text will slide out when appearing back button in standalone mode, but navi bar stay on)

## Dependency

* [local-web-server](https://github.com/lwsjs/local-web-server)
* [craft-uikit](https://github.com/craftkit/craft-uikit)
* [craft-widget-stickyheadernavi](https://github.com/craftkit/craft-widget-stickyheadernavi)

