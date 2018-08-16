$.ajax({
    url: "//raw.githubusercontent.com/Keyamoon/IcoMoon-Free/master/Font/selection.json",
    dataType: "json",
    success: function (data) {
        var icons = data.icons;
        //console.log(icons);
        $.each(icons, function (key, icon) {
          //console.log(icon)
          $('#icoMoon').append("<i class='icon-" + icon.properties.name + "'></i>");
      	})
    },
    error: function (jqXHR, textStatus, errorThrown) {
      	console.log('ERROR', textStatus, errorThrown);
    }
});
