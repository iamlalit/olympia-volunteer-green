$('#areaofFocusVolunteer').tagsinput({
  typeahead: {
    source: ["Immigration", "Education", "Job and Workplace", "Conflict resolution", "Consumer protection", "Crime & Safety", "Civic engagement", "Risk Management"],
    sorter: function (items) {
        return items.sort();
    }
  }
});

function updateValueAOFCheck(){
  var listOfLan = [];
  for( i=1 ; i <= 52 ; i++){
    if($("#areaOfFocus" + i +"").is(":checked")){
     listOfLan.push($("#areaOfFocus" + i +"").val());
    }
  }
  $('#areaofFocusVolunteer').tagsinput('removeAll');
  $("#areaofFocusVolunteer").tagsinput("refresh");
  for(i = 0 ; i < listOfLan.length ; i++){
    $("#areaofFocusVolunteer").tagsinput('add', listOfLan[i]);
  }
}
function updateValueAOFText(){
  
  $("#areaofFocusVolunteer").tagsinput("refresh");
  var tagsValue = $("#areaofFocusVolunteer").val();
  var tagsList = tagsValue.split(",");
  console.log(tagsList);
  for( i=1 ; i <= 52 ; i++){
        $("#areaOfFocus" + i + "").prop("checked", false);
  }
  for( i=1 ; i <= 52 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#areaOfFocus" + i + "").val() === tagsList[j]){
        $("#areaOfFocus" + i + "").prop("checked", true);
      }
    }
  }
}
var address_element = "<div class='border-address col-sm-7 margin-left-80' id='address-block'>"+
                        "<button type='button' class='close pull-right' aria-hidden='true' onclick='closeAddress()'>&times;</button>" +
                        "<label>Time Zone</label>"+
                        "<br>"+
                        "<select>"+
                            "<option value='Ipsum'>UTC (Coordinated Universal Time)</option>"+
                            "<option value='Consectetur'>GMT (Greenwich Mean Time)</option>"+
                        "</select>"+
                        "<br>"+
                        "<label >Address</label>"+
                        "<br>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='address' id='form-text-control'>"+
                        "<br>"+
                        "<label >City</label>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='city' id='form-text-control'>"+
                        "<br>"+
                        "<label >Country</label>"+
                        "<br>"+
                        "<select>"+
                            "<option value='Ipsum'>Afghanistan</option>"+
                            "<option value='Consectetur'>Akrotiri</option>"+
                            "<option value='Ipsum'>Albania</option>"+
                            "<option value='Consectetur'>Algeria</option>"+
                            "<option value='Ipsum'>Angola</option>"+
                            "<option value='Consectetur'>Antarctica</option>"+
                            "<option value='Ipsum'>Antigua and Barbuda</option>"+
                            "<option value='Consectetur'>Argentina</option>"+
                            "<option value='Ipsum'>Australia</option>"+
                            "<option value='Consectetur'>Austria</option>"+
                            "<option value='Ipsum'>Bahamas, The</option>"+
                            "<option value='Consectetur'>Bangladesh</option>"+
                            "<option value='Ipsum'>Bassas da India</option>"+
                            "<option value='Consectetur'>Belarus</option>"+
                            "<option value='Ipsum'>Belgium</option>"+
                            "<option value='Consectetur'>Bermuda</option>"+
                            "<option value='Ipsum'>Bhutan</option>"+
                            "<option value='Consectetur'>Brazil</option>"+
                            "<option value='Ipsum'>British Indian Ocean Territory</option>"+
                            "<option value='Consectetur'>British Virgin Islands</option>"+
                            "<option value='Ipsum'>Bulgaria</option>"+
                            "<option value='Consectetur'>Burma</option>"+
                            "<option value='Ipsum'>Burundi</option>"+
                            "<option value='Consectetur'>Cambodia</option>"+
                            "<option value='Ipsum'>Cameroon</option>"+
                            "<option value='Consectetur'>Canada</option>"+
                            "<option value='Ipsum'>China</option>"+
                            "<option value='Consectetur'>Cocos (Keeling) Islands</option>"+
                            "<option value='Ipsum'>Colombia</option>"+
                            "<option value='Consectetur'>Comoros</option>"+
                            "<option value='Ipsum'>Congo, Democratic Republic of the</option>"+
                            "<option value='Consectetur'>Congo, Republic of the</option>"+
                            "<option value='Ipsum'>Cook Islands</option>"+
                            "<option value='Consectetur'>Cuba</option>"+
                            "<option value='Ipsum'>Cyprus</option>"+
                            "<option value='Consectetur'>Denmark</option>"+
                            "<option value='Ipsum'>Dominican Republic</option>"+
                            "<option value='Consectetur'>Ecuador</option>"+
                            "<option value='Ipsum'>Egypt</option>"+
                            "<option value='Consectetur'>Ethiopia</option>"+
                            "<option value='Ipsum'>Finland</option>"+
                            "<option value='Consectetur'>France</option>"+
                            "<option value='Ipsum'>Georgia</option>"+
                            "<option value='Consectetur'>Germany</option>"+
                            "<option value='Ipsum'>Greece</option>"+
                            "<option value='Consectetur'>Greenland</option>"+
                            "<option value='Ipsum'>Guinea</option>"+
                            "<option value='Consectetur'>Holy See (Vatican City)</option>"+
                            "<option value='Ipsum'>Hong Kong</option>"+
                            "<option value='Consectetur'>Iceland</option>"+
                            "<option value='Ipsum'>India</option>"+
                            "<option value='Consectetur'>Indonesia</option>"+
                            "<option value='Ipsum'>Iran</option>"+
                            "<option value='Consectetur'>Iraq</option>"+
                            "<option value='Ipsum'>Ireland</option>"+
                            "<option value='Consectetur'>Israel</option>"+
                            "<option value='Ipsum'>Italy</option>"+
                            "<option value='Consectetur'>Jamaica</option>"+
                            "<option value='Ipsum'>Japan</option>"+
                            "<option value='Consectetur'>Jersey</option>"+
                            "<option value='Ipsum'>Kazakhstan</option>"+
                            "<option value='Consectetur'>Kenya</option>"+
                            "<option value='Ipsum'>Korea</option>"+
                            "<option value='Consectetur'>Kuwait</option>"+
                            "<option value='Ipsum'>Laos</option>"+
                            "<option value='Consectetur'>Lebanon</option>"+
                            "<option value='Ipsum'>Liberia</option>"+
                            "<option value='Consectetur'>Macau</option>"+
                            "<option value='Ipsum'>Malaysia</option>"+
                            "<option value='Consectetur'>Maldives</option>"+
                            "<option value='Ipsum'>Mauritius</option>"+
                            "<option value='Consectetur'>Mexico</option>"+
                            "<option value='Ipsum'>Mozambique</option>"+
                            "<option value='Consectetur'>Namibia</option>"+
                            "<option value='Ipsum'>Nepal</option>"+
                            "<option value='Consectetur' selected='selected'>Netherlands</option>"+
                            "<option value='Ipsum'>New Zealand</option>"+
                            "<option value='Consectetur'>Norway</option>"+
                            "<option value='Ipsum'>Oman</option>"+
                            "<option value='Consectetur'>Pakistan</option>"+
                            "<option value='Ipsum'>Peru</option>"+
                            "<option value='Consectetur'>Philippines</option>"+
                            "<option value='Ipsum'>Poland</option>"+
                            "<option value='Consectetur'>Portugal</option>"+
                            "<option value='Ipsum'>Qatar</option>"+
                            "<option value='Consectetur'>Romania</option>"+
                            "<option value='Ipsum'>Russia</option>"+
                            "<option value='Consectetur'>Saudi Arabia</option>"+
                            "<option value='Ipsum'>Sierra Leone</option>"+
                            "<option value='Consectetur'>Singapore</option>"+
                            "<option value='Ipsum'>Solomon Islands</option>"+
                            "<option value='Consectetur'>Somalia</option>"+
                            "<option value='Ipsum'>South Africa</option>"+
                            "<option value='Consectetur'>Spain</option>"+
                            "<option value='Ipsum'>Sri Lanka</option>"+
                            "<option value='Consectetur'>Sweden</option>"+
                            "<option value='Ipsum'>Switzerland</option>"+
                            "<option value='Consectetur'>Syria</option>"+
                            "<option value='Ipsum'>Taiwan</option>"+
                            "<option value='Consectetur'>Thailand</option>"+
                            "<option value='Ipsum'>Turkey</option>"+
                            "<option value='Consectetur'>Uganda</option>"+
                            "<option value='Ipsum'>Ukraine</option>"+
                            "<option value='Consectetur'>United Arab Emirates</option>"+
                            "<option value='Ipsum'>United Kingdom</option>"+
                            "<option value='Consectetur'>United States</option>"+
                            "<option value='Ipsum'>Venezuela</option>"+
                            "<option value='Consectetur'>Vietnam</option>"+
                            "<option value='Ipsum'>Yemen</option>"+
                            "<option value='Consectetur'>Zambia</option>"+
                            "<option value='Ipsum'>Zimbabwe</option>"+
                        "</select>"+
                        "<br>"+
                        "<label >Zipcode</label>"+
                        "<br>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='inserting address' id='form-text-control' placeholder='Zipcode'>"+
                    "</div>";
function addNewAddress(){
  $("#address").append( address_element );
}
function closeAddress(){
 $("#address div:last-child").remove(); 
}

$(document).ready(function () {
  $('#errorMsg').hide();
    var
  errorDiv = $('#errorMsg'),
  errorList = $('#errorList'),
  organizationName = $('#organizationName'),
  organizationNickName = $('#organizationNickName')  
  
    //on change of writing in any of input fields
    organizationName.change(function() {
        if (organizationName.val() == '' || organizationName.val() == null) {
            if (errorList.find('.errormessage-organizationName').length == 0) {
                $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-organizationName' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: organizationName.offset().top - 100
                    }, 500);
                    organizationName.focus();
                })
                $('#errorMsg').show();
                organizationName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationName.parent().hasClass('has-error')) {
                organizationName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationName').length > 0) {
                errorList.find('.errormessage-organizationName').remove();
                $('#errorMsg').hide();
            }
        }
    });
    organizationNickName.change(function() {
            if (organizationNickName.val() == '' || organizationNickName.val() == null) {
                if (errorList.find('.errormessage-organizationNickName').length == 0) {
                    $('<li />', { html: 'Organization Nick Name required !', class: 'col-sm-6 errormessage-organizationNickName' })
                    .appendTo(errorList)
                    .click(function () {
                        $('html, body').animate({
                            scrollTop: organizationNickName.offset().top - 100
                        }, 500);
                        organizationNickName.focus();
                    })
                    $('#errorMsg').show();
                    organizationNickName.parent().addClass('has-error');
                }
            }
            else {
                if (organizationNickName.parent().hasClass('has-error')) {
                    organizationNickName.parent().removeClass('has-error')
                };
                if (errorList.find('.errormessage-organizationNickName').length > 0) {
                    errorList.find('.errormessage-organizationNickName').remove();
                    $('#errorMsg').hide();
                }
            }
        });
    //on submit
    $('#organizationProfile').submit(function (e) {
        e.preventDefault();
        //Job title is required
        if (organizationName.val() == '' || organizationName.val() == null) {
            if (errorList.find('.errormessage-organizationName').length == 0) {
                $('<li />', { html: 'Organization Name required !', class: 'col-sm-6 errormessage-organizationName' })
        .appendTo(errorList)
        .click(function () {
            $('html, body').animate({
                scrollTop: organizationName.offset().top - 100
            }, 500);
            organizationName.focus();
        })
                $('#errorMsg').show();
                organizationName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationName.parent().hasClass('has-error')) {
                organizationName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationName').length > 0) {
                errorList.find('.errormessage-organizationName').remove();
                $('#errorMsg').hide();
            }
        }

        //nick name
        if (organizationNickName.val() == '' || organizationNickName.val() == null) {
            if (errorList.find('.errormessage-organizationNickName').length == 0) {
                $('<li />', { html: 'Organization Nick Name required !', class: 'col-sm-6 errormessage-organizationNickName' })
        .appendTo(errorList)
        .click(function () {
            $('html, body').animate({
                scrollTop: organizationNickName.offset().top - 100
            }, 500);
            organizationNickName.focus();
        })
                $('#errorMsg').show();
                organizationNickName.parent().addClass('has-error');
            }
        }
        else {
            if (organizationNickName.parent().hasClass('has-error')) {
                organizationNickName.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-organizationNickName').length > 0) {
                errorList.find('.errormessage-organizationNickName').remove();
                $('#errorMsg').hide();
            }
        }


        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
            $('html, body').animate({
                scrollTop: 100
            }, 500);
        } else {
            $('#errorMsg').hide();
            window.location.href = '../organizationpcms/organizationpcms.html?organizationName='+organizationName.val();
        }
    });
});