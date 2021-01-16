function log(string) {
  if (string && string.length > 0) {
    console.log("Former(Chrome Extension) -", string);
  }
}

function searchForms() {
  const forms = Array.from(document.querySelectorAll("form"));
  const numForms = forms ? forms.length : 0;
  const pluralSuffix =
    forms && (forms.length > 1 || forms.length == 0) ? "s" : "";

  log(`${numForms} form${pluralSuffix} found on this page.`);

  const inputs = forms
    .map((f) => Array.from(f.querySelectorAll("input:not([type=submit])")))
    .flat();
  log(inputs);
}

document.body.onchange = () => {
  log("Changed Detected in Tab");
  searchForms();
};

document.body.onload = () => {
  setTimeout(() => {
    log("Loaded New Tab");
    searchForms();
  }, 1000);
};
