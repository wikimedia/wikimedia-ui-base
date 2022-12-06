# WikimediaUI Base Variables Release History
## v0.21.0 (2022-12-06)
* Amend Yellow 600 (Yellow50) color decision token (Volker E)

## v0.20.0 (2022-11-07)
* Add `border-radius-round` variable (Volker E)
* Add `box-sizing-base` variable (Volker E)
* Use parentheses to wrap division-like expressions (lens0021)
* Remove unused `box-shadow-inset--inverted` var (Volker E)
* Fix transparent "quiet" equivalents of "base" colors (Thiemo Kreuz)
* Add new typographic design system fonts to stack (Volker E)
* Merge "Fix transparent "quiet" equivalents of "base" colors" (jenkins-bot)
* Amend `background-color-framed--active` (Volker E)
* docs: fix project tag in phabricator bug report form (DannyS712)
* build: Update '.nvmrc' to 16.16.0 (Volker E)
* build: Update 'stylelint-config-wikimedia' to latest (Volker E)
* build: Updating ansi-regex to 5.0.1 (libraryupgrader)
* build: Updating nanoid to 3.2.0 (libraryupgrader)
* build: Updating minimist to 1.2.6 (libraryupgrader)
* build: Updating stylelint-config-wikimedia to 0.13.0 (libraryupgrader)

## v0.19.0 (2020-06-28)
* Add `background-color-base--read-only` var (Volker E)
* Add `border-radius-input-radio` var (Volker E)
* Add `color-accessory` variable (Volker E)
* Add `padding-vertical-menu` var (Volker E)
* Add 'offset-input-radio-focus' var (Volker E)
* Rename offset variable to `position-offset-input-radio-focus` (Volker E)
* Add `size-full` variable (Volker E)
* build: Replace Grunt with npm scripts & remove obsolete dependencies (Volker E)
* build: Update 'stylelint-config-wikimedia' to latest (Volker E)

## v0.18.1 (2020-12-03)
* build: Update devDependencies (Volker E)
* docs: Fix CSS comments (Volker E)

## v0.18.0 (2020-11-16)
* Add `background-color-quiet*` vars (Volker E)
* Add `border-color-input--hover` variable (Volker E)
* Add `border-color-primary*` and `border-color-destructive*` state vars (Volker E)
* Add `box-shadow-destructive--focus` variable (Volker E)
* Add `font-weight-light` variable (Volker E)
* Add `opacity-icon-accessory` variable (Volker E)
* Add system message `border-color*` variables (Volker E)
* Amend `line-height-heading` slightly to mirror production values (Volker E)
* build: Update dependencies (Volker E)

## v0.17.0 (2020-08-25)
* Add `border-color-base--focus` variables (Volker E)
* Add `box-shadow-base` variable (Volker E)
* Add `outline-base--focus` variable (Volker E)
* Add `padding-base*` and input-text variables (Volker E)
* Add modifier color variable definitions (Volker E)
* Remove unused IE 8 `background-color-highlight` fallback variable (Volker E)
* docs: Clarify “Highlight colors” to be solely for text highlighting (Volker E)
* docs: Use shorter /g/ URL for Gitiles (Timo Tijhof)

## v0.16.0 (2020-07-09)
* Add WikimediaUI binary input variables (Volker E)
* Add `border-color-divider` variable (Volker E)
* Add `border-radius-circle` variable (Volker E)
* Add `font-weight*` variables (Volker E)
* Add `min-size-base` variable (Volker E)
* Remove .arcconfig (Volker E)
* Replace primary active border values with correct design template ones (Volker E)
* docs: Add Gitiles repo URL into header and README.md (Volker E)
* docs: Add download options like npm and clarify usage (Volker E)
* docs: Fix markdown syntax (Volker E)

## v0.15.0 (2020-04-13)
* Add 'z-index-overlay' variable (Volker E)
* Amend Base10 color and hover derivative (Volker E)
* Remove 'Nimbus Sans L' from `font-family-sans` value (Volker E)
* Remove obsolete IE 6 & 7 specific comments (Volker E)
* docs: Add Design Style Guide links to certain sections (Volker E)
* build: Bump devDependencies to latest (Volker E)

## v0.14.0 (2019-06-17)
* Add user system message variables (Volker E)
* Amend monospace system font stack (Volker E)
* Bump devDependencies to latest and commit package-lock.json (Volker E)
* Remove 'Helvetica Neue' from system font stack (Volker E)
* package-lock.json: Bump js-yaml for WS-2019-0063 (Volker E)

## v0.13.0 (2018-12-05)
* Add `font-family-system-sans` font stack (Volker E)
* Add monospace font stack (Volker E)
* build: Update dependencies (Volker E)

## v0.12.0 (2018-08-16)
* Add `background-color-base--hover` variable (Volker E)
* Add general `size`, `min-size` & `max-size` variables (Volker E)

## v0.11.0 (2018-08-14)
* Add `background-color-base--disabled` & `background-color-filled--disabled` variables (Volker E.)
* Add `border-style-base` variable (Volker E)
* Add `toolbar` and `tool` variables (Volker E)
* Fix typo in `breakpoint` variable name (Timo Tijhof)
* Rename non-base `transition` variable & add `transition-ease-out-medium` variable (Volker E)
* Replace repetitive comment about breakpoint values with single one (Prateek Saxena)
* build: Bump dependencies to latest (Volker E)

## v0.10.0 (2017-11-08)
* Add mobile and desktop thresholds (Volker E)
* Add `border-color-wikitable` variable (Volker E)
* Add `box-shadow-card` variable (Volker E)
* Add `font-family-monospace` variable (Volker E)
* Replace wrong `border-color-base--disabled` value (Volker E)
* Clarify referencing color palette vars & use LESS style comments (Volker E)
* README: Use clearer and more consistent description (Volker E)
* build: Bump dependencies to latest (Volker E)

## v0.9.2 (2017-05-25)
* build: Remove `private` flag from package.json (Volker E)

## v0.9.1 (2017-05-25)
* Unify color variables reference and fix `@background-color-primary` (Volker E)
* build: Add `npm test` script (Prateek Saxena)
* build: Remove composer.lock from .gitignore (Prateek Saxena)
* build: Remove npm grunt-jsonlint package & bump others (Volker E)

## v0.9.0 (2017-03-28)
* [BREAKING CHANGE] Rename "wmui-base.*" files to "wikimedia-ui-base.*"
* Add generic `font-family` fallback variables
* build: Bump grunt-exec to latest (Volker E)

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
* Add `background-color-framed--active` color (Julien Girault)
* Update “destructive” colors to tweaked color palette (Volker E)
* Increase contrast of `background-color-framed--active` color (Volker E)
* Replace abandoned color from early palette iteration (Volker E)
* Set placeholder text to WCAG 2.0 level AA compliant color (Volker E)

## v0.6.1 (2016-09-19)
* build: Remove obsolete local `string-quotes` stylelint rule

## v0.6.0 (2016-09-17)
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
* build: Align quotes to stylelint-config-wikimedia
* build: Update devDependencies to latest releases

## v0.5.0 (2016-07-19)
* Use non-abbreviated variable names to ensure easy utilization
* Add `opacity-base` variable
* Change `transition-duration` values according to findings in T77949

## v0.4.0 (2016-07-11)
* Rename "base.*" files to "wmui-base.*" files for easier utilization in other repositories

## v0.3.1 (2016-07-08)
* Add `maw-input-inline` for inlined inputs
* Align indentation to stylelint-config-wikimedia default
* Add History.md and .gitignore files
* Minor comment clarifications and cleanups
* build: Replace csslint with stylelint

## v0.3.0 (2016-06-30)
* Include versioning information
* Cleanup Gruntfile.js

## v0.2.0 (2016-03-30)
* Add package.json
* Add `--c-highlighted-fallback` for IE 6/7/8