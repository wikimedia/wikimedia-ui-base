# WikimediaUI Base Variables Release History

## v0.8.0 (2017-02-24)
* Add further properties and adapt `box-shadow-dialog` var (Volker E)
* Adapt `color-destructive--hover` to brighter red (Volker E)
* build: Bump various dev dependencies to latest (Volker E)
* build: Bump stylelint and make pass (Volker E)

## v0.7.1 (2016-11-22)
* Fix CSS variable notations on WikimediaUI color labels (Volker E)

## v0.7.0 (2016-11-21)
* [BREAKING CHANGE] Turn `*highlight` variable to appropriate property (Volker E)
* [BREAKING CHANGE] Refine variable naming (Volker E)
* Introduce WikimediaUI color labels (Volker E)
* Update “destructive” colors to tweaked color palette (Volker E)
* Increase contrast of `background-color-framed--active` color (Volker E)
* Add `background-color-framed--active` color (Julien Girault)
* Replace abandoned color from early palette iteration (Volker E)
* Set placeholder text to WCAG 2.0 level AA compliant color (Volker E)

## v0.6.1 (2016-09-19)
* Remove obsolete local `string-quotes` stylelint rule

## v0.6.0 (2016-09-17)
* Update devDependencies to latest releases
* Align quotes to stylelint-config-wikimedia
* Add colors, `border*` and `box-shadow*` variables
* Replace value with corresponding `border-width-base` variable
* Add `color-base-hover` variable
* Align `opacity-base-disabled` to overhauled color palette
* Add primary and destructive `background-color-*` variables
* Align colors to overhauled, WCAG 2.0 level AA compliant color palette
* Add and refine variables
* Quote all non-generic `font-family` values
* Replace fixed text-shadow color with variable
* Remove obsolete `box-shadow-popup` variable

## v0.5.0 (2016-07-19)
* Use non-abbreviated variable names to ensure easy utilization
* Add `opacity-base` variable
* Change `transition-duration` values according to findings in T77949

## v0.4.0 (2016-07-11)
* Rename "base.*" files to "wmui-base.*" files for easier utilization in other repositories

## v0.3.1 (2016-07-08)
* Replace csslint with stylelint
* Add `maw-input-inline` for inlined inputs
* Align indentation to stylelint-config-wikimedia default
* Add History.md and .gitignore files
* Minor comment clarifications and cleanups

## v0.3.0 (2016-06-30)
* Include versioning information
* Cleanup Gruntfile.js

## v0.2.0 (2016-03-30)
* Add package.json
* Add `--c-highlighted-fallback` for IE 6/7/8