// Move the OCHA services section to the header.
this.moveToHeader('cd-ocha-services', 'cd-global-header__actions');

/**
 * Hide and move OCHA Services to the top of the header after the target.
 */
function moveToHeader(id, target) {
  var section = document.getElementById(id);
  var sibling = document.getElementById(target);
  if (section && sibling) {
    // Ensure the element is hidden before moving it to avoid flickering.
    this.toggleVisibility(section, true);
    sibling.parentNode.insertBefore(section, sibling.nextSibling);
  }
}

function toggleVisibility(element, hide) {
  element.setAttribute('cd-data-hidden', hide === true);
}

