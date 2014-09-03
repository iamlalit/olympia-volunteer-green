$(document).ready(function () {

    //$('#phoneToggler').hide();
    //$('#phoneToggle').click(function () {
    //    $(this).hide();
    //    $('#phoneToggler').show();
    //});
    //
    //$('#cvUpload').click(function (event) {
    //    event.stopPropagation();
    //    $('#input-cvUpload').click();
    //    if ($('input[name=cv]').val == "") {
    //        $('#cvVal-div').hide();
    //    }
    //});
    //
    //$('#mailToggler').hide();
    //$('#mailToggle').click(function () {
    //    $(this).hide();
    //    $('#mailToggler').show();
    //});
    //
    //$('#cvWrite').hide();
    //$('input[name=cvChoice]').click(function () {
    //    var thisval = $(this).val();
    //
    //    if (thisval == 'cvUpload') {
    //        $('#cvUpload').show();
    //        $('#cvWrite').hide();
    //    }
    //    else if (thisval == 'cvWrite') {
    //        $('#cvUpload').hide();
    //        $('#cvWrite').show();
    //    }
    //});
    //
    //$('input[name=cv]').change(function () {
    //    console.log($(this).val());
    //    var FileName = $(this).val();
    //    var cvFile = FileName.match(/\\([^\\]+)$/)[1];
    //    $('#cvVal-div').show();
    //    $('#cvVal').html('<a href="javascript:void(0)">' + cvFile + '</a>');
    //});
    //
    //$('#removeCv').click(function () {
    //    $('input[name=cv]').val() === '';
    //    $('#cvVal').empty();
    //    $('#cvVal-div').hide();
    //});
})

$(document).ready(function () {

    //$('.job-vacancy')
    //.mouseover(function () {
    //    if ($(this).children().find('a').hasClass('focused')) {
    //        $(this).children().find('a').removeClass('focused');
    //    }
    //})
    //.mouseout(function () {
    //    if ($(this).children().find('a').hasClass('focused') == false) {
    //        $(this).children().find('a').eq(2).addClass('focused');
    //    }
    //});
    //
    //$('#password-container').hide();
    //$('#password-container-hide').show();
    //
    //$('input:radio[name=ques1]').click(function () {
    //    var checkval = $(this).val();
    //    $('#ques1-opt1-ans').prop('disabled', !(checkval == '1'));
    //});
    //
    //$('#radio-email1').click(function () {
    //    $('#password-container').hide();
    //    $('#password-container-hide').show();
    //});
    //$('#radio-email2').click(function () {
    //    $('#password-container').show();
    //    $('#password-container-hide').hide();
    //});
    //
    $('#errorMsg').hide();

    var
	errorDiv = $('#errorMsg'),
	errorList = $('#errorList'),
	jobType = $('#job-type'),
	logOpt = $('input[name="radioEmail"]'),
	jobTitle = $('#form-control-weight'),
    describeWork = $('#text-content')
	firstname = $('input[name="firstname"]'),
	lastname = $('input[name="lastname"]'),
    city = $('input[name="city"]'),
    username = $('input[name="username"]'),
	//gender = $('input[name="Gaslachet"]'),
	//phone = $('input[name="Telefoonnummer"]'),
	//street = $('input[name="Straat"]'),
	houseNo = $('input[name="Huisnummer"]'),
	postalCode = $('input[name="Postcode"]'),
	residense = $('input[name="Woonplaats"]'),
	cv = $('input[name="cv"]'),
	ques1 = $('input[name="ques1"]'),
	moreHelp = $('input[name="optionsRadios"]'),
	terms = $('#terms');

    var
	emailStr,
	emailRadioStr,
	firstnameStr,
	lastnameStr,
	genderStr,
	dobmonthStr,
	dobdayStr,
	dobyearStr,
	phoneStr,
	streetStr,
	houseNoStr,
	postalCodeStr,
	residenseStr,
	cvStr,
	ques2Str,
	moreHelpStr,
	termsStr,
	ques1Str;

    //$('#jobForm-section2 :input').prop("disabled", true);
    //$('#jobForm-section2').addClass('grey-link');
    //$('#jobForm-section2').find('select').addClass('grey-link');
    //$('#jobForm-section2').find('button[type=submit]').addClass('btn-default').removeClass('btn-primary');
    //$('#jobForm-section2').find('a').prop("disabled", true)
	//.addClass('grey-link')
	//.click(function (e) {
	//    if ($(this).attr("disabled") == "disabled") {
	//        e.preventDefault();
	//    }
	//});

    //Form 1
    //$('#jobForm-section1').submit(function (e) {
    //    e.preventDefault();
    //    //Email
    //    if (email.val() == '' || email.val() == null) {
    //        if (errorList.find('.errormessage-form1mail').length == 0) {
    //            var li = $('<li />', { class: 'col-sm-6 errormessage-form1mail' });
    //            $('<label />', { html: 'Email required !', for: 'email' }).appendTo(li);
    //            li.appendTo(errorList);
    //            $('#errorMsg').show();
    //            email.parent().addClass('has-error');
    //        }
    //    } else {
    //        var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    //        if (!re.test(email.val())) {
    //            if (errorList.find('.col-sm-6 errormessage-form1mail').length == 0) {
    //                var li = $('<li />', { class: '.col-sm-6 errormessage-form1mail' })
    //                $('<label />', { html: 'Vul e-mail adres in.', for: 'email' }).appendTo(li);
    //                li.appendTo(errorList)
    //                $('#errorMsg').show();
    //            }
    //        } else {
    //            if (email.parent().hasClass('has-error')) {
    //                email.parent().removeClass('has-error')
    //            };
    //            if (errorList.find('.errormessage-form1mail').length > 0) {
    //                errorList.find('.errormessage-form1mail').remove();
    //                $('#errorMsg').hide();
    //            }
    //        }
    //    }
    //
    //    // radio
    //    $.each(logOpt, function () {
    //        if (this.checked)
    //            emailRadioStr = this.value;
    //        if (emailRadioStr == '' || emailRadioStr == undefined) {
    //            if (errorList.find('.logOpt-form1radio').length == 0) {
    //                $('<li />', { html: 'Selecteer een optie !', class: 'col-sm-6 logOpt-form1radio' }).appendTo(errorList);
    //                $('#errorMsg').show();
    //                logOpt.parent().parent().parent().addClass('has-error');
    //            }
    //        }
    //        else {
    //            if (logOpt.parent().parent().parent().hasClass('has-error')) {
    //                logOpt.parent().parent().parent().removeClass('has-error')
    //            };
    //            if (errorList.find('.logOpt-form1radio').length > 0) {
    //                errorList.find('.logOpt-form1radio').remove();
    //                $('#errorMsg').hide();
    //            }
    //        }
    //
    //        if (emailRadioStr == 'option2') {
    //            if (password.val() == '' || password.val() == null) {
    //                if (errorList.find('.errormessage-password').length == 0) {
    //                    $('<li />', { html: 'Vul wachtwoord in', class: 'col-sm-6 errormessage-password' })
    //					.appendTo(errorList)
    //					.click(function () {
    //					    $('html, body').animate({
    //					        scrollTop: firstname.offset().top - 100
    //					    }, 500);
    //					    password.focus();
    //					})
    //                    $('#errorMsg').show();
    //                    password.parent().addClass('has-error');
    //                }
    //            } else {
    //                if (password.parent().hasClass('has-error')) {
    //                    password.parent().removeClass('has-error')
    //                };
    //                if (errorList.find('.errormessage-password').length > 0) {
    //                    errorList.find('.errormessage-password').remove();
    //                    $('#errorMsg').hide();
    //                }
    //            }
    //        }
    //    });
    //    if (errorList.find('.errormessage-form1mail').length == 0 &&
    //		errorList.find('.logOpt-form1radio').length == 0 &&
    //		errorList.find('.errormessage-password').length == 0) {
    //        $('#jobForm-section2 :input').prop("disabled", false);
    //        $('#jobForm-section2').find('a').removeAttr("disabled").removeClass('grey-link');
    //        $('#jobForm-section2').removeClass('grey-link');
    //        $('#jobForm-section2').find('select').removeClass('grey-link');
    //        $('#jobForm-section2').find('button[type=submit]').addClass('btn-primary').removeClass('btn-default');
    //        $('#firstname').focus();
    //        $('html, body').animate({
    //            scrollTop: $("#firstname").offset().top - 100
    //        }, 500);
    //    }
    //    else {
    //        $('html, body').animate({
    //            scrollTop: $("#errorMsg").offset().top - 100
    //        }, 500);
    //    }
    //
    //});
    //on change of writing in any of input fields
    jobTitle.change(function() {
        if (jobTitle.val() == '' || jobTitle.val() == null) {
            if (errorList.find('.errormessage-jobTitle').length == 0) {
                $('<li />', { html: 'Job title required !', class: 'col-sm-6 errormessage-jobTitle' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: jobTitle.offset().top - 100
                    }, 500);
                    jobTitle.focus();
                })
                $('#errorMsg').show();
                jobTitle.parent().addClass('has-error');
            }
        }
        else {
            if (jobTitle.parent().hasClass('has-error')) {
                jobTitle.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobTitle').length > 0) {
                errorList.find('.errormessage-jobTitle').remove();
                $('#errorMsg').hide();
            }
        }
    });
    describeWork.change(function() {
        if (describeWork.val() == '' || describeWork.val() == null) {
            if (errorList.find('.errormessage-describeWork').length == 0) {
                $('<li />', { html: 'Describe the work done is required !', class: 'col-sm-6 errormessage-describeWork' })
                .appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: describeWork.offset().top - 100
                    }, 500);
                    describeWork.focus();
                })
                $('#errorMsg').show();
                describeWork.parent().addClass('has-error');
            }
        }
        else {
            if (describeWork.parent().hasClass('has-error')) {
                describeWork.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-describeWork').length > 0) {
                errorList.find('.errormessage-describeWork').remove();
                $('#errorMsg').hide();
            }
        }
    });


    //on submit
    $('#postJobForm').submit(function (e) {
        e.preventDefault();
        //Job title is required
        if (jobTitle.val() == '' || jobTitle.val() == null) {
            if (errorList.find('.errormessage-jobTitle').length == 0) {
                $('<li />', { html: 'Job title required !', class: 'col-sm-6 errormessage-jobTitle' })
				.appendTo(errorList)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: jobTitle.offset().top - 100
				    }, 500);
				    jobTitle.focus();
				})
                $('#errorMsg').show();
                jobTitle.parent().addClass('has-error');
            }
        }
        else {
            if (jobTitle.parent().hasClass('has-error')) {
                jobTitle.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobTitle').length > 0) {
                errorList.find('.errormessage-jobTitle').remove();
                $('#errorMsg').hide();
            }
        }

        //job Type is requried
        if (jobType.val() == '' || jobType.val() == null) {
            if (jobType.find('.errormessage-jobType').length == 0) {
                $('<li />', { html: 'Job type is required !', class: 'col-sm-6 errormessage-jobType' })
				.appendTo(errorList)
				.click(function () {
				    $('html, body').animate({
				        scrollTop: jobType.offset().top - 100
				    }, 500);
				    jobType.focus();
				})
                $('#errorMsg').show();
                jobType.parent().addClass('has-error');
            }
        } else {
            if (jobType.parent().hasClass('has-error')) {
                jobType.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-jobType').length > 0) {
                errorList.find('.errormessage-jobType').remove();
                $('#errorMsg').hide();
            }
        }

        //Describe the work to be done
        if (describeWork.val() == '' || describeWork.val() == null) {
            if (errorList.find('.errormessage-describeWork').length == 0) {
                var li = $('<li />', {html: 'Describe the work done is required !', class: 'col-sm-6 errormessage-describeWork' });
                li.appendTo(errorList)
                .click(function () {
                    $('html, body').animate({
                        scrollTop: describeWork.offset().top - 100
                    }, 500);
                    describeWork.focus();
                });
                $('#errorMsg').show();
                describeWork.parent().addClass('has-error');
            }
        } else {
           
            if (describeWork.parent().hasClass('has-error')) {
                describeWork.parent().removeClass('has-error')
            };
            if (errorList.find('.errormessage-describeWork').length > 0) {
                errorList.find('.errormessage-describeWork').remove();
                $('#errorMsg').hide();
            }
        }

        // Country
    //     if ($('#country option:selected').val() == '0') {
    //         if (errorList.find('.errormessage-country').length == 0) {
    //             $('<li />', { html: 'Country required !', class: 'col-sm-6 errormessage-country' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: $("#country").offset().top - 100
				//     }, 500);
				//     $("#country").focus();
				// });
    //             //$('#errorMsg').show();
    //             $('#country').parent().addClass('has-error');
    //         }
    //     } else {
    //         if ($('#country').parent().hasClass('has-error')) {
    //             $('#country').parent().removeClass('has-error')
    //         };

    //         if (errorList.find('.errormessage-country').length > 0) {
    //             errorList.find('.errormessage-country').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     // City
    //     if (city.val() == '' || city.val() == null) {
    //         if (errorList.find('.errormessage-city').length == 0) {
    //             $('<li />', { html: 'City required !', class: 'col-sm-6 errormessage-city' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             city.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (city.parent().hasClass('has-error')) {
    //             city.parent().removeClass('has-error')
    //         };
    //         if (city.find('.errormessage-street').length > 0) {
    //             city.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     // Username
    //     if (username.val() == '' || username.val() == null) {
    //         if (errorList.find('.errormessage-username').length == 0) {
    //             $('<li />', { html: 'Username required !', class: 'col-sm-6 errormessage-street' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             username.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (username.parent().hasClass('has-error')) {
    //             username.parent().removeClass('has-error')
    //         };
    //         if (username.find('.errormessage-street').length > 0) {
    //             username.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

    //     //Password
    //     if (password.val() == '' || password.val() == null) {
    //         if (errorList.find('.errormessage-password').length == 0) {
    //             $('<li />', { html: 'Password required !', class: 'col-sm-6 errormessage-password' })
				// .appendTo(errorList)
				// .click(function () {
				//     $('html, body').animate({
				//         scrollTop: street.offset().top - 100
				//     }, 500);
				//     city.focus();
				// });
    //             //$('#errorMsg').show();
    //             password.parent().addClass('has-error');
    //         }
    //     } else {
    //         if (password.parent().hasClass('has-error')) {
    //             password.parent().removeClass('has-error')
    //         };
    //         if (password.find('.errormessage-street').length > 0) {
    //             password.find('.errormessage-street').remove();
    //             //$('#errorMsg').hide();
    //         }
    //     }

        // Question 1
        //$.each(ques1, function () {
        //    if (this.checked)
        //        ques1Str = this.value;
        //
        //    if (ques1Str == '' || ques1Str == undefined) {
        //        if (errorList.find('.errormessage-ques1').length == 0) {
        //            $('<li />', { html: 'Ben je in het bezit van een Heftruckcertificaat?', class: 'col-sm-6 errormessage-ques1' })
		//			.appendTo(errorList)
		//			.click(function () {
		//			    $('html, body').animate({
		//			        scrollTop: $("#ques1container").offset().top - 100
		//			    }, 500);
		//			});
        //            //$('#errorMsg').show();
        //            ques1.parent().parent().parent().addClass('has-error');
        //        }
        //    } else {
        //        if (ques1.parent().parent().parent().hasClass('has-error')) {
        //            ques1.parent().parent().parent().removeClass('has-error')
        //        };
        //        if (errorList.find('.errormessage-ques1').length > 0) {
        //            errorList.find('.errormessage-ques1').remove();
        //            //$('#errorMsg').hide();
        //        }
        //        //localStorage.setItem('logQues1', ques1Str);
        //    }
        //});

        // Experiance
        //if (parseInt($('#xp option:selected').val()) == 0) {
        //    if (errorList.find('.errormessage-xp').length == 0) {
        //        $('<li />', { html: 'Hoeveel jaar heb je ervaring als heftruckchauffeur?', class: 'col-sm-6 errormessage-xp' })
		//		.appendTo(errorList)
		//		.click(function () {
		//		    $('html, body').animate({
		//		        scrollTop: $("#xp").offset().top - 100
		//		    }, 500);
		//		    $('#xp').focus();
		//		});
        //        //$('#errorMsg').show();
        //        $('#xp').parent().parent().addClass('has-error');
        //    }
        //} else {
        //    if ($('#xp').parent().parent().hasClass('has-error')) {
        //        $('#xp').parent().parent().removeClass('has-error')
        //    };
        //
        //    if (errorList.find('.errormessage-xp').length > 0) {
        //        errorList.find('.errormessage-xp').remove();
        //        //$('#errorMsg').hide();
        //    }
        //
        //    //localStorage.setItem('logQues2', $('#xp option:selected').val());
        //}

        //$.each(moreHelp, function () {
        //    if (this.checked)
        //        moreHelpStr = this.value;
        //
        //    if (moreHelpStr == '' || moreHelpStr == null || moreHelpStr == undefined) {
        //        if (errorList.find('.errormessage-moreHelp').length == 0) {
        //            $('<li />', { html: 'Waarvan moet Olympia jou op de hoogte houden:', class: 'col-sm-6 errormessage-moreHelp' }).
		//			appendTo(errorList)
		//			.click(function () {
		//			    $('html, body').animate({
		//			        scrollTop: $("#botChk").offset().top - 100
		//			    }, 500);
		//			    $('#botChk').focus();
		//			});
        //            //$('#errorMsg').show();
        //            moreHelp.parent().parent().parent().parent().parent().addClass('has-error');
        //        }
        //    } else {
        //        if (moreHelp.parent().parent().parent().parent().parent().hasClass('has-error')) {
        //            moreHelp.parent().parent().parent().parent().parent().removeClass('has-error')
        //        };
        //        if (errorList.find('.errormessage-moreHelp').length > 0) {
        //            errorList.find('.errormessage-moreHelp').remove();
        //            //$('#errorMsg').hide();
        //        }
        //        //localStorage.setItem('logMoreHelp', moreHelpStr);
        //    }
        //});

        //if (terms.is(':checked') == true) {
        //    if (terms.parent().parent().parent().parent().parent().hasClass('has-error')) {
        //        terms.parent().parent().parent().parent().parent().removeClass('has-error')
        //    };
        //    if (errorList.find('.errormessage-terms').length > 0) {
        //        errorList.find('.errormessage-terms').remove();
        //        //$('#errorMsg').hide();
        //    }
        //} else {
        //    if (errorList.find('.errormessage-terms').length == 0) {
        //        $('<li />', { html: 'Ga je akkoord met de privacy verklaring?', class: 'col-sm-6 errormessage-terms' })
		//		.appendTo(errorList)
		//		.click(function () {
		//		    $('html, body').animate({
		//		        scrollTop: terms.offset().top - 100
		//		    }, 500);
		//		    terms.focus();
		//		});
        //        //$('#errorMsg').show();
        //        terms.parent().parent().parent().parent().parent().addClass('has-error');
        //    }
        //}

        if (errorList.children('li').length > 0) {
            $('#errorMsg').show();
            $('html, body').animate({
                scrollTop: 100
            }, 500);
        } else {
            $('#errorMsg').hide();
            window.location.href = '../confirmation/submitConformation.html?'+ 'jobTitle='+jobTitle.val()+'&jobType=' + jobType.val() + '&describeWork='+describeWork.val();
            
        }

    });
    //-------------------

    //$('#tooltip1').popover({
    //    container: 'body',
    //    html: true
    //})
	//.css({ 'cursor': 'pointer' });

    //$(document).click(function (e) {
    //    $('#tooltip1').each(function () {
    //        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
    //            //$(this).popover('hide');
    //            if ($(this).data('bs.popover').tip().hasClass('in')) {
    //                $(this).popover('toggle');
    //            }
    //
    //            return;
    //        }
    //    });
    //});
});

//$(document).ready(function () {
//    $('#text-content').on('blur', function () {
//        $('#zoomTextarea').removeClass('foucs-color-text')
//    }).on('focus', function () {
//        $('#zoomTextarea').addClass('foucs-color-text')
//    });
//});

//$(document).ready(function () {
//    $('#pastwork-info-container').hide();
//
//    var id = 0;
//
//    $('#manual-xp-add').click(function () {
//
//        id += 1;
//
//        var // cache variables
//		functie1 = $('#pop-functie'),
//		bedrijf = $('#pop-bedrijf'),
//		vestigingsplaats = $('#pop-Vestigingsplaats'),
//		startMonth1 = $('#pop-startdatum-maand-1'),
//		startYear1 = $('#pop-startdatum-jaar-1'),
//		endMonth1 = $('#pop-einddatum-maand-1'),
//		endYear1 = $('#pop-einddatum-jaar-1'),
//		funtieBeschrijving = $('#FuntieBeschrijving');
//
//        var // localstorage
//		functie1Str,
//		bedrijfStr,
//		vestigingsplaatsStr,
//		startMonth1Str,
//		startYear1Str,
//		endMonth1Str,
//		endYear1Str,
//		funtieBeschrijvingStr;
//
//
//        if (functie1.val() == '' || functie1.val() == null) {
//            functie1.parent().parent().addClass('has-error');
//        } else {
//            if (functie1.parent().parent().hasClass('has-error')) {
//                functie1.parent().parent().removeClass('has-error')
//            };
//            functie1Str = functie1.val();
//        }
//
//        if (bedrijf.val() == '' || bedrijf.val() == null) {
//            bedrijf.parent().parent().addClass('has-error');
//        } else {
//            if (bedrijf.parent().parent().hasClass('has-error')) {
//                bedrijf.parent().parent().removeClass('has-error')
//            };
//            bedrijfStr = bedrijf.val();
//        }
//
//        if (vestigingsplaats.val() == '' || vestigingsplaats.val() == null) {
//            vestigingsplaats.parent().parent().addClass('has-error');
//        } else {
//            if (vestigingsplaats.parent().parent().hasClass('has-error')) {
//                vestigingsplaats.parent().parent().removeClass('has-error')
//            };
//            vestigingsplaatsStr = vestigingsplaats.val();
//        }
//
//        if (funtieBeschrijving.val() == '' || funtieBeschrijving.val() == null) {
//            funtieBeschrijving.parent().parent().addClass('has-error');
//        } else {
//            if (funtieBeschrijving.parent().parent().hasClass('has-error')) {
//                funtieBeschrijving.parent().parent().removeClass('has-error')
//            };
//            funtieBeschrijvingStr = funtieBeschrijving.val();
//        }
//
//        if ($('#pop-startdatum-maand-1 option:selected').val() == 0) {
//            $('#pop-startdatum-maand-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-startdatum-maand-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-startdatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startMonth1Str = $('#pop-startdatum-maand-1 option:selected').val()
//        }
//
//        if ($('#pop-startdatum-jaar-1 option:selected').val() == 0) {
//            $('#pop-startdatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-startdatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-startdatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startYear1Str = $('#pop-startdatum-jaar-1 option:selected').val();
//        }
//
//        if ($('#pop-einddatum-maand-1 option:selected').val() == 0) {
//            $('#pop-einddatum-maand-1').parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-einddatum-maand-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-einddatum-maand-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endMonth1Str = $('#pop-einddatum-maand-1 option:selected').val();
//        }
//
//        if ($('#pop-einddatum-jaar-1 option:selected').val() == 0) {
//            $('#pop-einddatum-jaar-1').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-einddatum-jaar-1').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-einddatum-jaar-1').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endYear1Str = $('#pop-einddatum-jaar-1 option:selected').val();
//        }
//
//        if (
//			$('#pop-einddatum-jaar-1 option:selected').val() == 0 ||
//			$('#pop-einddatum-maand-1 option:selected').val() == 0 ||
//			$('#pop-startdatum-jaar-1 option:selected').val() == 0 ||
//			$('#pop-startdatum-maand-1 option:selected').val() == 0 ||
//			functie1.val() == '' ||
//			funtieBeschrijving.val() == '' ||
//			vestigingsplaats.val() == '' || bedrijf.val() == '') {
//            return false;
//        } else {
//
//            $('#pastwork-info-container').show();
//            $('#pastwork-info-container').append(
//				'<div class="panel panel-default">' +
//					'<div class="panel-heading" data-toggle="collapse" data-parent="#accordion" href="#collapse' + id + '">' +
//						'<h4 class="panel-title">' +
//							'<div class="col-sm-6" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' +
//							startMonth1Str + '-' + startYear1Str + ' - ' + endMonth1Str + '-' + endYear1Str + ', ' + functie1Str + ', ' + bedrijfStr + ', ' + vestigingsplaatsStr +
//							'</div>' +
//							'<div class="col-sm-3 text-right" style="position: relative"><button class="btn btn-default btn-sm btn-linkedin" style="position: absolute; right: -1px; top: -7px; padding: 3px 10px;"><img src="../img/import.png" height="16" style="position: relative; top: -4px;"> <strong>Linked</strong> <i class="olympia-linkedin2"></i></button></div>' +
//							'<div class="col-sm-3 text-right"><a href="javascript:void(0)">Verwijderen</a></div>' +
//							'<div class="clearfix"></div>' +
//						'</h4>' +
//					'</div>' +
//					'<div id="collapse' + id + '" class="panel-collapse collapse in">' +
//						'<div class="panel-body">' +
//							'<ul class="row" id="pastwork-info" style="list-style:none; padding: 0">' +
//								'<li class="col-sm-6">Startdatum :</li><li class="col-sm-6">' + startMonth1Str + '-' + startYear1Str + '</li>' +
//								'<li class="col-sm-6">Einddatum :</li><li class="col-sm-6">' + endMonth1Str + '-' + endYear1Str + '</li>' +
//								'<li class="col-sm-6">Funtie :</li><li class="col-sm-6">' + functie1Str + '</li>' +
//								'<li class="col-sm-6">bedrijf :</li><li class="col-sm-6">' + bedrijfStr + '</li>' +
//								'<li class="col-sm-6">Plaats :</li><li class="col-sm-6">' + vestigingsplaatsStr + '</li>' +
//								'<li class="col-sm-6">FuntieBeschrijving :</li><li class="col-sm-6">' + funtieBeschrijvingStr + '</li>' +
//							'</ul>' +
//						'</div>' +
//					'</div>' +
//				'</div>'
//			);
//
//            $('#pastWork').modal('hide');
//
//
//            $('#past-job input, #past-job select, #past-job textarea').each(function () {
//                var input = $(this);
//                if (input !== '') {
//                    input.val("");
//                }
//            });
//        }
//    });
//});

//$(document).ready(function () {
//    $('#pastedu-info-container').hide();
//    $('#manual-edu-add').click(function () {
//        var // cache variables
//		diploma = $('input[name="pop-diploma"]'),
//		opleding = $('#pop-edu-opleiding'),
//		startMonth2 = $('#pop-start-month'),
//		startYear2 = $('#pop-start-year'),
//		endMonth2 = $('#pop-end-month'),
//		endYear2 = $('#pop-end-year');
//
//        var // localstorage
//		diplomaStr,
//		opledingStr,
//		startMonth2Str,
//		startYear2Str,
//		endMonth2Str,
//		endYear2Str;
//
//
//        if (opleding.val() == '' || opleding.val() == null) {
//            opleding.parent().parent().addClass('has-error');
//        } else {
//            if (opleding.parent().parent().hasClass('has-error')) {
//                opleding.parent().parent().removeClass('has-error')
//            };
//            opledingStr = opleding.val();
//        }
//
//        if ($('input[name="pop-diploma"]:checked').val() == '' || $('input[name="pop-diploma"]:checked').val() == null) {
//            diploma.parent().parent().parent().addClass('has-error');
//        } else {
//            if (diploma.parent().parent().hasClass('has-error')) {
//                diploma.parent().parent().removeClass('has-error')
//            };
//            diplomaStr = $('input[name="pop-diploma"]:checked').val();
//        }
//
//        if ($('#pop-start-month option:selected').val() == 0) {
//            $('#pop-start-month').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-start-month').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-start-month').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startMonth2Str = $('#pop-start-month option:selected').val();
//        }
//
//        if ($('#pop-start-year option:selected').val() == 0) {
//            $('#pop-start-year').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-start-year').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-start-year').parent().parent().parent().parent().removeClass('has-error')
//            };
//            startYear2Str = $('#pop-start-year option:selected').val();
//        }
//
//        if ($('#pop-end-month option:selected').val() == 0) {
//            $('#pop-end-month').parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-end-month').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-end-month').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endMonth2Str = $('#pop-end-month option:selected').val();
//        }
//
//        if ($('#pop-end-year option:selected').val() == 0) {
//            $('#pop-end-year').parent().parent().parent().parent().addClass('has-error');
//        } else {
//            if ($('#pop-end-year').parent().parent().parent().parent().hasClass('has-error')) {
//                $('#pop-end-year').parent().parent().parent().parent().removeClass('has-error')
//            };
//            endYear2Str = $('#pop-end-year option:selected').val();
//        }
//
//        if (
//			$('#pop-end-year option:selected').val() == 0 ||
//			$('#pop-end-month option:selected').val() == 0 ||
//			$('#pop-start-month option:selected').val() == 0 ||
//			$('#pop-start-year option:selected').val() == 0 ||
//			opleding.val() == '' ||
//			diploma.val() == '') {
//            return false;
//        } else {
//            $('#pastedu-info-container').show();
//            $('#pastedu-info-container').html(
//				'<ul class="row" id="pastwork-info" style="list-style:none">' +
//					'<li class="col-sm-6">Opleiding :</li><li class="col-sm-6">' + opledingStr + '</li>' +
//					'<li class="col-sm-6">Diploma behaald :</li><li class="col-sm-6">' + diplomaStr + '</li>' +
//					'<li class="col-sm-6">Startdatum :</li><li class="col-sm-6">' + startMonth2Str + '-' + startYear2Str + '</li>' +
//					'<li class="col-sm-6">Einddatum :</li><li class="col-sm-6">' + endMonth2Str + '-' + endYear2Str + '</li>' +
//				'</ul>'
//			);
//            $('#educationPop').modal('hide');
//        }
//    });
//});