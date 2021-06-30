import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
  padding: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Custom global styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: sans-serif;
}

html {
  font-size: 100%;
} /*16px*/
:root {
  /* colors */
  --primary-50: #dbfbff;
  --primary-100: #b5ebf7;
  --primary-200: #8cdeef;
  --primary-300: #62cfe7;
  --primary-400: #39c1df;
  --primary-500: #20a8c6;
  --primary-600: #10829b;
  --primary-700: #015d70;
  --primary-800: #003945;
  --primary-900: #00151b;
  /* grey */
  --grey-50: #e9f5fa;
  --grey-100: #cfdee3;
  --grey-200: #b2c7ce;
  --grey-300: #93b0ba;
  --grey-400: #769aa6;
  --grey-500: #5d818d;
  --grey-600: #48646e;
  --grey-700: #33484e;
  --grey-800: #1c2b30;
  --grey-900: #020f14;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #fbbaba;
  --red-dark: #9e131e;
  --green-light: #b8f7bc;
  --green-dark: #0b7012;
  /* fonts  */
  --headingFont: "Pangolin", cursive;
  --bodyFont: "Roboto", sans-serif;
  /* Headings font size */
  --heading-1-fs: 2.5rem;
  --heading-2-fs: 2rem;
  --heading-3-fs: 1.75rem;
  --heading-4-fs: 1.25rem;
  --heading-5-fs: 1rem;
  /* Headings line height */
  --heading-1-lh: 2.5rem;
  --heading-2-lh: 2.25rem;
  --heading-3-lh: 2rem;
  --heading-4-lh: 1.5rem;
  --heading-5-lh: 1.25rem;
  /* Headings font weight */
  --heading-fw: 400;
  /* Body font size */
  --body-lg-fs: 1.25rem;
  --body-reg-fs: 1rem;
  --body-sm-fs: 0.75rem;
  /* Body line height */
  --body-lg-lh: 1.5rem;
  --body-reg-lh: 1.25rem;
  --body-sm-lh: 1rem;
  /* Body font weight */
  --body-all-fw: 400;
  /* label */
  --label-fs: 0.75rem;
  --label-lh: 0.75rem;
  --label-fw: 700;
  /* alert/hint */
  --hint-fs: 0.75rem;
  --hint-lh: 1rem;
  --hint-fw: 500;
  /* rest of the vars */
  --backgroundColor: var(--primary-50);
  --textColor: var(--primary-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;
  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
body {
  background: var(--backgroundColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
  color: var(--textColor);
}
p {
  margin-bottom: 1.5rem;
  max-width: 40em;
}
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1rem;
  font-family: var(--headingFont);
  font-weight: var(--heading-fw);
}
h1 {
  margin-top: 0;
  font-size: var(--heading-1-fs);
  line-height: var(--heading-1-lh);
}
h2 {
  font-size: var(--heading-2-fs);
  line-height: var(--heading-2-lh);
}
h3 {
  font-size: var(--heading-3-fs);
  line-height: var(--heading-3-lh);
}
h4 {
  font-size: var(--heading-4-fs);
  line-height: var(--heading-4-lh);
}
h5 {
  font-size: var(--heading-5-fs);
  line-height: var(--heading-5-lh);
}
small,
.text-small {
  font-size: var(--smallText);
}
a {
  text-decoration: none;
}

.body-lg {
  font-size: var(--body-lg-fs);
  line-height: var(--body-lg-lh);
}
.body-reg {
  font-size: var(--body-reg-fs);
  line-height: var(--body-reg-lh);
}
.body-sm {
  font-size: var(--body-sm-fs);
  line-height: var(--body-sm-lh);
}
label {
  font-size: var(--label-fs);
  line-height: var(--label-lh);
  font-weight: var(--label-fw);
}
.hint {
  font-size: var(--hint-fs);
  line-height: var(--hint-lh);
  font-weight: var(--hint-fw);
  color: var(--red-dark)
}
/* display none for mobile screen */
@media screen and (max-width:768px){

.mobile{
  display: none;
}
}

`;
export default GlobalStyles;
