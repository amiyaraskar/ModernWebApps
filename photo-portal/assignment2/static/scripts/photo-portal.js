// Requirement 5.2
function validate_data() {
  // hint: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/value
  // Get the search_select value and search_input value
  // Use document.getElementById()
  // return false if the data validation checks fail. Also raise appropriate alert.
  // return true if the data validation checks pass.
}

function show_photo_details(photo_name, date_taken, tags) {
  alert("Photo:" + photo_name + " date_taken:" + date_taken + " tags:" + tags);
}


// Requirement 4.3 - Implement the preview_photo method that displays the photo in modal
function preview_photo(src) {
  // Get the modal body element where the image will be displayed
  var modalBody = document.getElementById('image-modal-body');
  
  // Construct the image source using the passed photo_name
  // var imageSrc = PHOTO_FOLDER + '/' + photo_name;  // Assuming PHOTO_FOLDER is available globally or set manually

  // Set the modal body content to include the selected image
  modalBody.innerHTML = '<img src="' + src + '" class="img-fluid">';

  // Display the modal using Bootstrap's modal function
  $('#imageModal').modal('show');
}


function show_settings() {
  alert("Settings called.");
}

function logout() {
  document.getElementById("settings-and-logout-form").submit();
}
