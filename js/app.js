$(document).ready(function () {
    const squareText = $("#squareText");
    const contentContainer = $("#contentContainer");
    const dynamicContentContainer = $("<div></div>");
    const hr = $('<p id="fakeHr">');
    const linksContainer = $("#linksContainer");
    const descBody = $("#descBody");

    let siteContent = null;

    function renderSidebar(personal) {
        $("#cv").attr("href", personal.cvUrl);
        $("#profilePhoto").attr("src", personal.photo);
        $("#personName").text(personal.name);

        const bioContainer = $("#authorBio");
        bioContainer.empty();
        personal.roleLines.forEach(function (lineHtml) {
            bioContainer.append(
                $('<p class="author__bio" style="font-size:15px; margin-top: 15px;">').html(lineHtml)
            );
        });

        const linksList = $(".personalLinks");
        linksList.empty();
        linksList.append($("<li>").text(personal.email));
        personal.socialLinks.forEach(function (link) {
            const li = $("<li>");
            const a = $("<a>").attr("href", link.url).attr("target", "_blank");
            a.append($("<img>").attr("src", link.icon).css({ width: "20px", height: "20px" }));
            a.append(" " + link.label);
            li.append(a);
            linksList.append(li);
        });

        $("#novaSbe").attr("href", personal.footer.url);
        $("#novaSbe img").attr("src", personal.footer.logo);
    }

    function renderDescription(html) {
        descBody.html(html);
    }

    function renderTeaching(teachingArray) {
        const container = $("#teachingExp");
        container.empty();
        teachingArray.forEach(function (lineHtml) {
            container.append($("<p>").html(lineHtml));
        });
    }

    function renderResearch(researchArray) {
        const container = $(".researchContent");
        container.empty();
        researchArray.forEach(function (category) {
            const catDiv = $("<div>")
                .attr("id", category.id)
                .addClass("content")
                .css("display", "none");

            category.items.forEach(function (item) {
                catDiv.append($("<p>").html(item.titleHtml));
                if (item.bodyHtml) {
                    catDiv.append(item.bodyHtml);
                }
            });

            container.append(catDiv);
        });
    }

    function renderAll(content) {
        siteContent = content;
        renderSidebar(content.personal);
        renderDescription(content.descriptionHtml);
        renderTeaching(content.teaching);
        renderResearch(content.research);
    }


    $("#goToHome").on("click", function () {
        location.reload();
    });

    function clearDynamicContentContainer() {
        dynamicContentContainer.empty();
    }

    function hideDescription() {
        descBody.hide();
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
            .on("click", function () {
                appendContent(content);
            });

        linksContainer.append(linkElement, hr);
    }

    $("#teaching").on("click", function () {
        clearDynamicContentContainer();
        contentContainer.empty();
        appendContent($("#teachingExp"));
        hideDescription();
        linksContainer.empty();
    });

    $("#research").on("click", function () {
        clearDynamicContentContainer();
        contentContainer.empty();
        linksContainer.empty();
        hideDescription();
        squareText.hide();

        if (!siteContent) return;

        siteContent.research.forEach(function (category) {
            createLink(category.id, $("#" + category.id), category.label);
        });
    });

    // ---------- Boot ----------

    $.getJSON("content.json")
        .done(renderAll)
        .fail(function () {
            contentContainer.html("<p>Could not load site content.</p>");
        });
});