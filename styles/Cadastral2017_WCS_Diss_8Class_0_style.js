var size = 0;
var placement = 'point';
function categories_Cadastral2017_WCS_Diss_8Class_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Federal - BLM':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,22,179,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Federal - NPS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,84,102,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Federal - Other':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(97,214,162,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Federal - USFS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,229,22,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Other':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(32,184,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Private':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,205,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'State':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,123,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tribal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,170,118,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,31,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Cadastral2017_WCS_Diss_8Class_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("WCS_ClassName");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Cadastral2017_WCS_Diss_8Class_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
