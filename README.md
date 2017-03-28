# WikimediaUI base stylesheet variables

WikimediaUI repository provides stylesheets with variables containing
Wikimedia Foundation wide user interface basic style values.
In the early draft we are providing
 - `wikimedia-ui-base.css` file containing variables in CSS Custom Properties syntax,
 preferably used with PostCSS
 - `wikimedia-ui-base.less` file containing variables in Less syntax (exact copy from above)

## Install
Clone the repo: `git clone https://phabricator.wikimedia.org/diffusion/WMUI/wikimedia-ui.git`.

It is recommended that you include `wikimedia-ui-base.css` or
`wikimedia-ui-base.less` file as untouched library code at top of
central stylesheet file and – if necessary – add changes by overwriting
the variable later in your code.

## Contribute
Found a bug or missing a feature? Please report it in the [issue tracker](
https://phabricator.wikimedia.org/maniphest/task/create/?projects=UI-Standardization)!