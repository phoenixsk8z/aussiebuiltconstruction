window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});

// PASS THE FUNCTION AN HTML ELEMENTS ID / CLASS AS A STRING
function copyToClipboard(ElementToCopy) {

  // USING THE ID / CLASS STRING PASSED TO THE FUNCTION GET THE ELEMENT
  var contactElement = document.querySelector(ElementToCopy);

  // GET TEXT FROM THE ELEMENT
  var textToCopy = contactElement.innerHTML;

  // COPY TEXT TO THE CLIPBOARD
  navigator.clipboard.writeText(textToCopy)

}