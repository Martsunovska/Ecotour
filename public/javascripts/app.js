/* $(document).ready(function() {
    $.getJSON("/api/v1/countries", function(data) {
        var str = '';
        $.each(data, function(key, val) {
            str += `<div class="media"><div class="media-left"><img src="${val.Image}" alt="${val.Name}" class="media-object"\
            style="width:80px; height:80px"></div><div class="media-body"><h4 class="media-heading">${val.Name}</h4>\
            <p>${val.Desc}</p></div></div>`;
        });
        $("div.container").first().html(str);
    }).fail(function(err) {
        $("<h1/>", {
            "class": "text-center",
            html: err
        }).appendTo("div.container")
    });
}); */