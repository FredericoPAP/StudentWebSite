document.addEventListener('DOMContentLoaded', function() {
  
$(function () {
    $('#toggleAccordions').on('click', function(e) {
      $('.panel-collapse').collapse('toggle');
    })
  });
  
$("[data-toggle=popover]")
  .popover({html:true})

});

var teachingButton = document.getElementById('teachingButton');
var teachingExperienceDiv = document.getElementById('teachingExp');
var contentAtBottom = document.getElementById('contentAtBottom');
var contentAdded = false;

// Teaching button click event
teachingButton.addEventListener('click', function() {
    if (!contentAdded) {
    var newContent = document.createElement('div');
    newContent.innerHTML = teachingExperienceDiv.innerHTML;
    contentAtBottom.appendChild(newContent);
    contentAdded = true;
    hideDescription();
    hideWorkContent();
    hidePubContent();
    hideWipContent();
    
} else {
    // Hide Teaching content
    contentAtBottom.innerHTML = '';
    contentAdded = false;
    hideWorkContent();
    hidePubContent();
    hideWipContent();
} 
});

function showContent(contentId) {
    var contentElements = document.getElementsByClassName("content");
    // Hide all elements from Research content
    for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = "none";
    }
    // Show the selected content
    document.getElementById(contentId).style.display = "block";
    hideDescription();
    contentAtBottom.innerHTML = '';
    contentAdded = false;
    
    
}

function hideDescription() {
    var descBody = document.getElementById('descBody');
    descBody.style.display = 'none';
}


function hidePubContent() {
    var workContent = document.getElementById('publicationsContent');
    workContent.style.display = 'none';
}

function hideWorkContent() {
    var workContent = document.getElementById('workContent');
    workContent.style.display = 'none';
}

function hideWipContent() {
    var workContent = document.getElementById('wipContent');
    workContent.style.display = 'none';
}
