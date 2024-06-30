document.addEventListener('DOMContentLoaded', function() {

    function alert1() {
        alert('By checking the box you agree for reoccuring emails, texts, as well as weekly newsletters that will include any information about sales, events, or anything related to planning your vacation. We will never give out your personal data and only ask for this information to help better assist the user.');
      
    }
    var termsSpan= document.querySelector('.terms1');
    termsSpan.addEventListener('click', alert1)

})