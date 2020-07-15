# WikimediaUI Base stylesheet variables

<https://gerrit.wikimedia.org/g/wikimedia-ui-base/>

WikimediaUI Base repository provides stylesheets with variables containing
[Wikimedia Foundation basic user interface style values](https://design.wikimedia.org/style-guide/).
We are providing:
 - `wikimedia-ui-base.css` file containing the variables in CSS Custom Properties syntax,
 preferably used with PostCSS
 - `wikimedia-ui-base.less` file containing the variables in LESS syntax

## Install
Install the WikimediaUI Base variables in your project with one of these options:
- Clone the repo: `git clone "https://gerrit.wikimedia.org/r/wikimedia-ui-base"`
- Install via npm: `npm install wikimedia-ui-base`
- [Download the latest release](https://gerrit.wikimedia.org/g/wikimedia-ui-base/+archive/refs/heads/master.tar.gz)


## Use
It is recommended that you include `wikimedia-ui-base.css` or
`wikimedia-ui-base.less` file as untouched library code at top of
central stylesheet file and – if necessary – add changes by overwriting
the variable later in your code.

### Example LESS import
```
@import ( reference ) 'lib/wikimedia-ui-base.less';`
```

## Contribute
Found a bug or missing a feature? Please report it in the [issue tracker](
https://phabricator.wikimedia.org/maniphest/task/create/?projects=UI-Standardization)!
