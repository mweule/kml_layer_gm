var wms_layers = [];
var format_Cadastral2017_WCS_Diss_8Class_0 = new ol.format.GeoJSON();
var features_Cadastral2017_WCS_Diss_8Class_0 = format_Cadastral2017_WCS_Diss_8Class_0.readFeatures(json_Cadastral2017_WCS_Diss_8Class_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadastral2017_WCS_Diss_8Class_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Cadastral2017_WCS_Diss_8Class_0.addFeatures(features_Cadastral2017_WCS_Diss_8Class_0);var lyr_Cadastral2017_WCS_Diss_8Class_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cadastral2017_WCS_Diss_8Class_0, 
                style: style_Cadastral2017_WCS_Diss_8Class_0,
    title: 'Cadastral2017_WCS_Diss_8Class<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_0.png" /> Federal - BLM<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_1.png" /> Federal - NPS<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_2.png" /> Federal - Other<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_3.png" /> Federal - USFS<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_4.png" /> Other<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_5.png" /> Private<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_6.png" /> State<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_7.png" /> Tribal<br />\
    <img src="styles/legend/Cadastral2017_WCS_Diss_8Class_0_8.png" /> <br />'
        });var format_StateofMontana_1 = new ol.format.GeoJSON();
var features_StateofMontana_1 = format_StateofMontana_1.readFeatures(json_StateofMontana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateofMontana_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_StateofMontana_1.addFeatures(features_StateofMontana_1);var lyr_StateofMontana_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StateofMontana_1, 
                style: style_StateofMontana_1,
                title: '<img src="styles/legend/StateofMontana_1.png" /> StateofMontana'
            });var format_County_2 = new ol.format.GeoJSON();
var features_County_2 = format_County_2.readFeatures(json_County_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_County_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_County_2.addFeatures(features_County_2);var lyr_County_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_County_2, 
                style: style_County_2,
                title: '<img src="styles/legend/County_2.png" /> County'
            });var format_six_largest_cities_3 = new ol.format.GeoJSON();
var features_six_largest_cities_3 = format_six_largest_cities_3.readFeatures(json_six_largest_cities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_six_largest_cities_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_six_largest_cities_3.addFeatures(features_six_largest_cities_3);var lyr_six_largest_cities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_six_largest_cities_3, 
                style: style_six_largest_cities_3,
                title: '<img src="styles/legend/six_largest_cities_3.png" /> six_largest_cities'
            });

lyr_Cadastral2017_WCS_Diss_8Class_0.setVisible(true);lyr_StateofMontana_1.setVisible(true);lyr_County_2.setVisible(true);lyr_six_largest_cities_3.setVisible(true);
var layersList = [lyr_Cadastral2017_WCS_Diss_8Class_0,lyr_StateofMontana_1,lyr_County_2,lyr_six_largest_cities_3];
lyr_Cadastral2017_WCS_Diss_8Class_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WCS_Reclass': 'WCS_Reclass', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'WCS_ClassName': 'WCS_ClassName', });
lyr_StateofMontana_1.set('fieldAliases', {'PKEY': 'PKEY', 'ALLFIPS': 'ALLFIPS', 'NAME': 'NAME', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_County_2.set('fieldAliases', {'NAME': 'NAME', 'NAMEABBR': 'NAMEABBR', 'COUNTYNUMB': 'COUNTYNUMB', 'PKEY': 'PKEY', 'SQMILES': 'SQMILES', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'ALLFIPS': 'ALLFIPS', 'FIPS': 'FIPS', 'LAST_UPDAT': 'LAST_UPDAT', 'GLOBALID': 'GLOBALID', 'NAMELABEL': 'NAMELABEL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_six_largest_cities_3.set('fieldAliases', {'CT4_': 'CT4_', 'CT4_ID': 'CT4_ID', 'NAME': 'NAME', 'LONG': 'LONG', 'LAT': 'LAT', });
lyr_Cadastral2017_WCS_Diss_8Class_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WCS_Reclass': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'WCS_ClassName': 'TextEdit', });
lyr_StateofMontana_1.set('fieldImages', {'PKEY': 'TextEdit', 'ALLFIPS': 'TextEdit', 'NAME': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_County_2.set('fieldImages', {'NAME': 'TextEdit', 'NAMEABBR': 'TextEdit', 'COUNTYNUMB': 'Range', 'PKEY': 'TextEdit', 'SQMILES': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'ALLFIPS': 'TextEdit', 'FIPS': 'TextEdit', 'LAST_UPDAT': 'DateTime', 'GLOBALID': 'TextEdit', 'NAMELABEL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_six_largest_cities_3.set('fieldImages', {'CT4_': '', 'CT4_ID': '', 'NAME': '', 'LONG': '', 'LAT': '', });
lyr_Cadastral2017_WCS_Diss_8Class_0.set('fieldLabels', {'OBJECTID': 'no label', 'WCS_Reclass': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'WCS_ClassName': 'no label', });
lyr_StateofMontana_1.set('fieldLabels', {'PKEY': 'no label', 'ALLFIPS': 'no label', 'NAME': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_County_2.set('fieldLabels', {'NAME': 'no label', 'NAMEABBR': 'no label', 'COUNTYNUMB': 'no label', 'PKEY': 'no label', 'SQMILES': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'ALLFIPS': 'no label', 'FIPS': 'no label', 'LAST_UPDAT': 'no label', 'GLOBALID': 'no label', 'NAMELABEL': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_six_largest_cities_3.set('fieldLabels', {'CT4_': 'no label', 'CT4_ID': 'no label', 'NAME': 'no label', 'LONG': 'no label', 'LAT': 'no label', });
lyr_six_largest_cities_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});