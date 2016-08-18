
/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 * code from https://gomakethings.com/how-to-get-the-value-of-a-querystring-with-native-javascript/
 */
var getQueryString = function ( field, url ) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
var condition = getQueryString('regsource'); 
var ID = getQueryString('varID');
document.getElementById("custom_link").innerHTML = "<a class='ogz_donor_button' target='_blank' href='https://register.organize.org/?reg_source=" + condition + "&variant_id=" + ID + "'>Register</a>"
; 
