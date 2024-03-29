document.addEventListener('DOMContentLoaded', () => {
    // Setting the --inter variable to "InterVariable"
    document.body.style.setProperty('--inter', 'InterVariable');

    ["--heading-font-font-family", "--body-font-font-family", "--meta-font-font-family"].forEach((c, i) => {
        let e = document.getElementsByClassName(["sqs-heading-font", "sqs-body-font", "sqs-meta-font"][i])[0],
            v = getComputedStyle(document.documentElement).getPropertyValue(c) || getComputedStyle(e).getPropertyValue('font-family');
        document.body.style.setProperty(`--${['heading', 'body', 'meta'][i]}`, v.trim())
    })
});
