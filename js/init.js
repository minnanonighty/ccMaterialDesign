(function($){
    $(function(){
        $('.button-collapse').sideNav();
    }); // end of document ready

    $(document).ready(function () {
        $('.scrollspy').scrollSpy();
    });

    //Set All dropdownlists to be Material Select Style
    //$(document).ready(function () {
    //    $('select').material_select();
    //});

    //Set All dropdownlists to be Searchable Select Style
    //$(document).ready(function () {
    //    var country = $('select').context
    //    $('select').select2({
    //        data: country
    //    });
    //});

    $(document).ready(function () {
        $('.modal-trigger').leanModal();
    });

    $(document).ready(function () {
        $('.mdn-material-select').material_select();
    });

    $(document).ready(function () {
        var country = $('.mdn-select2').context
        $('.mdn-select2').select2({
            data: country
        });
    });

    $(document).ready(function () {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 10 // Creates a dropdown of 15 years to control year
        });
    });

})(jQuery); // end of jQuery name space