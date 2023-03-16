import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    min-height: 100vh;
    position: relative;
    margin: 0;
    font-size: 16px;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
    color: #595959;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F7F8FD;
    overflow-y: scroll;
  }
  
  .backdrop {
    overflow: visible;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  h1, h2, h3, h4, h5, h6, h7 {
    font-weight: normal;
    font-size: unset;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a, input, button, textarea {
    &:active, &:hover, &:focus {
      outline: none;
    }
  }

  a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #000000;
    }
  }

  input:-webkit-autofill {
    color: #000000 !important;
    background-color: unset;
    box-shadow: 0 0 0px 1000px #ffffff inset;
  }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;

    /* stylelint-disable */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    /* stylelint-enable */
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
    /* stylelint-disable */
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    /* stylelint-enable */
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: 500;
  }

  dfn {
    font-style: italic;
  }

  mark {
    color: #000;
    background: #ff0;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-size: 1em;
    font-family: monospace;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    color: inherit;
    font: inherit;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    appearance: button;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  input {
    line-height: normal;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  input[type="search"] {
    box-sizing: content-box;
    appearance: textfield;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  fieldset {
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
    border: none;
  }

  legend {
    padding: 0;
    border: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: 500;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  .Toastify__toast-body {
    white-space: pre-line;
  }
  
  .Toastify__toast--success {
    background-color: #00cc44;
    color: #fff;
    opacity: .93;

    svg {
      fill: white;
    }
  }
  
  .Toastify__toast--error {
    background-color: #d14925;
    color: #fff;
    opacity: .93;
    
    svg {
      fill: white;
    }
  }
  
  .MuiAutocomplete-popper {
    width: unset !important;
  }
  
  .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover {
    background-color: #33becc !important;
    color: #fff !important;
    position: relative;
    
    &::after {
      position: absolute;
      right: 20px;
      top: 8px;
      content: '✓';
      color: #fff;
      width: 10px;
      height: 10px;
    }
  }
  
  .hide-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`
