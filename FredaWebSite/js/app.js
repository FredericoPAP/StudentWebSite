document.addEventListener('DOMContentLoaded', function() {
//CV download
$("[data-toggle=popover]")
  .popover({html:true})

  var isPageRefreshed = sessionStorage.getItem('isPageRefreshed');
    console.log(isPageRefreshed);
    var descBody = document.getElementById("descBody");
  if (isPageRefreshed) {
      descBody.style.display = "block";
      
  } else{
     descBody.style.display = "none";
  }
  sessionStorage.setItem('isPageRefreshed', true);

    var teachingExperienceDiv = document.getElementById('teachingExp');
    var dynamicContentContainer = document.createElement('div');
    var workContent = document.getElementById('workContent');
    var publicationsContent = document.getElementById('publicationsContent');
    var wipContent = document.getElementById('wipContent');
    var contentContainer = document.getElementById('contentContainer');
    var newDiv = document.createElement('div');
    var squareText = document.getElementById('squareText');
    

document.getElementById('teaching').addEventListener('click',function() {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
      }
      dynamicContentContainer.innerHTML = '';
    var contentDiv = document.createElement('div');
    var hr = document.createElement('hr');
    dynamicContentContainer.appendChild(hr);
    contentDiv.innerHTML = teachingExperienceDiv.innerHTML;
    dynamicContentContainer.appendChild(contentDiv);
    squareText.appendChild(dynamicContentContainer);
    isPageRefreshed = false
    if(!isPageRefreshed){
        document.getElementById("descBody").style.display = "none";
    }
});

document.getElementById('research').addEventListener('click', function() {
    while (dynamicContentContainer.firstChild) {
        dynamicContentContainer.removeChild(dynamicContentContainer.firstChild);
    }
    while(contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
    }
    newDiv.innerHTML = '';
    clearDynamicContentContainer();
    clearLinkDivs()
    squareText.style.display = "none";
    var workLink = document.createElement('a');
    workLink.id = 'workContent';
    workLink.href = '#work';
    workLink.textContent = 'Work';
    workLink.addEventListener('click', function() {
        clearDynamicContentContainer();
        var contentDiv = document.createElement('div');
        var hr = document.createElement('hr');
        dynamicContentContainer.appendChild(hr);
        contentDiv.innerHTML = workContent.innerHTML;
        dynamicContentContainer.appendChild(contentDiv);
        squareText.appendChild(dynamicContentContainer);
        squareText.style.display = 'block';
        
        
    });
    newDiv.appendChild(workLink);

    var publicationsLink = document.createElement('a');
    publicationsLink.id = 'publicationsContent';
    publicationsLink.href = '#publications';
    publicationsLink.textContent = 'Publications';
    publicationsLink.addEventListener('click', function() {
        clearDynamicContentContainer()
        var contentDiv = document.createElement('div');
        var hr = document.createElement('hr');
        dynamicContentContainer.appendChild(hr);
        contentDiv.innerHTML = publicationsContent.innerHTML;
        contentDiv.style.marginBottom = '100px';
        dynamicContentContainer.appendChild(contentDiv);
        squareText.appendChild(dynamicContentContainer);
        squareText.style.display = 'block';
        console.log(dynamicContentContainer);
    });
    newDiv.appendChild(publicationsLink);

    var wipLink = document.createElement('a');
    wipLink.id = 'wipContent';
    wipLink.href = '#wip';
    wipLink.textContent = 'Work in Progress';
    wipLink.addEventListener('click', function() {
        clearDynamicContentContainer()
        var contentDiv = document.createElement('div');
        var hr = document.createElement('hr');
        dynamicContentContainer.appendChild(hr);
        contentDiv.innerHTML = wipContent.innerHTML;
        dynamicContentContainer.appendChild(contentDiv);
        squareText.appendChild(dynamicContentContainer);
        squareText.style.display = 'block';
        console.log(dynamicContentContainer);
    });
    clearDynamicContentContainer() 
    newDiv.appendChild(wipLink)
    contentContainer.appendChild(newDiv);
    divWithLinksAdded = true;
    document.getElementById('research').disabled= true;
    console.log("DYNCONTENT CONTAINER" + dynamicContentContainer);
    console.log("CONTENT CONTAINER" + contentContainer);
   
    isPageRefreshed = false;
    if(!isPageRefreshed){
        document.getElementById("descBody").style.display = "none";
    }
    console.log(isPageRefreshed);
  });

function clearLinkDivs() {
    var contentDiv = document.createElement('hr');
}
function clearDynamicContentContainer() {
    while (dynamicContentContainer.firstChild) {
        dynamicContentContainer.removeChild(dynamicContentContainer.firstChild);
    }
}
});


function hideDescription() {
    var descBody = document.getElementById('descBody');
    descBody.style.display = 'none';
};


function hidePubContent() {
    var publicationsContent = document.getElementById('publicationsContent');
    publicationsContent.style.display = 'none';
};

function hideWorkContent() {
    var workContent = document.getElementById('workContent');
    workContent.style.display = 'none';
};

function hideWipContent() {
    var wipContent = document.getElementById('wipContent');
    wipContent.style.display = 'none';
};

