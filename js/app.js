$(document).ready(function() {
    const squareText = $("#squareText");
    const contentContainer = $("#contentContainer");
    const dynamicContentContainer = $("<div></div>");
    const hr = $('<p id="fakeHr">');
    const linksContainer = $("#linksContainer");

    $("#goToHome").on("click", function() {
        location.reload();
    });
    
    //CV download
    $("[data-toggle=popover]").popover({html:true})

    function clearDynamicContentContainer() {
        dynamicContentContainer.empty();
    }

    function hideDescription() {
        $("#descBody").hide();
    }

    function appendContent(content) {
        clearDynamicContentContainer();
        
        dynamicContentContainer.append(content.html());
        contentContainer.html(dynamicContentContainer.html());
        squareText.show();
    }

    function createLink(id, content, text) {
        const linkElement = $("<a>")
            .attr("href", "#" + id)
            .text(text)
            .on("click", function() {
            
                appendContent(content);
            });

        linksContainer.append(linkElement, hr);
    }

    $("#teaching").on("click", function() {
        clearDynamicContentContainer();
        contentContainer.empty();
        appendContent($("#teachingExp"));
        hideDescription();
        linksContainer.empty();
    });

    $("#research").on("click", function() {
        clearDynamicContentContainer();
        contentContainer.empty();
        linksContainer.empty();
        hideDescription()
        squareText.hide();
        const links = [
            { id: 'workContent', content: $("#workContent"), text: 'Working Papers' },
            { id: 'publicationsContent', content: $("#publicationsContent"), text: 'Publications' },
            { id: 'wipContent', content: $("#wipContent"), text: 'Work in Progress' }
        ];

        $.each(links, function(_, link) {
            createLink(link.id, link.content, link.text);
        });
    });
});