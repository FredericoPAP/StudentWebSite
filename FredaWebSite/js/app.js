document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded
  
    // Get references to the button and the div
    var teachingButton = document.getElementById('teachingButton');
    var teachingExperienceDiv = document.getElementById('teachingExp');
    var contentAtBottom = document.getElementById('contentAtBottom');
    var contentAdded = false;
    
    // Add a click event listener to the button
    teachingButton.addEventListener('click', function() {
        if (!contentAdded) {
        var newContent = document.createElement('div');
        newContent.innerHTML = teachingExperienceDiv.innerHTML;
        contentAtBottom.appendChild(newContent);
        contentAdded = true;
    } else {
        // Hide content
        contentAtBottom.innerHTML = ''; // Clear the content
        contentAdded = false;
    } 
    });

$(function () {
    $('#toggleAccordions').on('click', function(e) {
      $('.panel-collapse').collapse('toggle');
    })
  });
  function showContent(contentId) {
    // Hide all content elements
    var contentElements = document.getElementsByClassName("content");
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = "none";
    }

    // Show the selected content
    document.getElementById(contentId).style.display = "block";
}
function hideDescription() {
    var descBody = document.getElementById('descBody');
    descBody.style.display = 'none';
}
});