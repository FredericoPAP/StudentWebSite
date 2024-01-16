document.addEventListener('DOMContentLoaded', function() {
    var descBody = document.getElementById("descBody");
    //CV download
    $("[data-toggle=popover]").popover({html:true})

    var teachingExperienceDiv = document.getElementById('teachingExp');
    var dynamicContentContainer = document.createElement('div');
    var workContent = document.getElementById('workContent');
    var publicationsContent = document.getElementById('publicationsContent');
    var wipContent = document.getElementById('wipContent');
    var contentContainer = document.getElementById('contentContainer');
    var newDiv = document.createElement('div');
    var squareText = document.getElementById('squareText');
    
    function clearDynamicContentContainer() {
        while (dynamicContentContainer.firstChild) {
            dynamicContentContainer.removeChild(dynamicContentContainer.firstChild);
        }
    }

    function appendContent(content) {
        clearDynamicContentContainer();
        const contentDiv = document.createElement('div');
        const hr = document.createElement('hr');
        dynamicContentContainer.appendChild(hr);
        contentDiv.innerHTML = content.innerHTML;
        dynamicContentContainer.appendChild(contentDiv);
        squareText.appendChild(dynamicContentContainer);
        squareText.style.display = 'block';
    }

    document.getElementById('teaching').addEventListener('click', () => {
        contentContainer.innerHTML = '';
        dynamicContentContainer.innerHTML = '';
        appendContent(teachingExperienceDiv);
        descBody.style.display = 'none';
    });

    document.getElementById('research').addEventListener('click', () => {
        contentContainer.innerHTML = '';
        dynamicContentContainer.innerHTML = '';
        newDiv.innerHTML='';
        squareText.style.display='none';
        const links = [
            { id: 'workContent', href: '#work', text: 'Working Papers', content: workContent },
            { id: 'publicationsContent', href: '#publications', text: 'Publications', content: publicationsContent },
            { id: 'wipContent', href: '#wip', text: 'Work in Progress', content: wipContent }
        ];

        links.forEach(link => {
            
            const linkElement = document.createElement('a');
            linkElement.id = link.id;
            linkElement.href = link.href;
            linkElement.textContent = link.text;

            linkElement.addEventListener('click', () => appendContent(link.content));
            newDiv.appendChild(linkElement);
            console.log(linkElement);
        });

        contentContainer.appendChild(newDiv);
        document.getElementById('research').disabled = true;
        descBody.style.display = 'none';
    });
});