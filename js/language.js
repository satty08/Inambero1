$(document).ready(function(){
  
    // By default
    $('.en_lang').addClass("active-lang");
    $('#lang-switch .en').addClass("active-flag");
    
    // Function switch
    $(function() {
      // Spanish button
      $("#lang-switch .es").click(function() {
        // Enable Spanish
        $('.es_lang').addClass("active-lang"); 
        
        // Disable English
        $('.en_lang').removeClass("active-lang") 
        
        // Active or remove the opacity on the flags.
        $('#lang-switch .es').addClass("active-flag");
        $('#lang-switch .en').removeClass("active-flag");
      });
      
      // English button
      $("#lang-switch .en").click(function() {
        
        // Enable English
        $('.en_lang').addClass("active-lang");
        
        // Disable Spanish
        $('.es_lang').removeClass("active-lang")
        
        // Active or remove the opacity on the flags.
        $('#lang-switch .en').addClass("active-flag");
        $('#lang-switch .es').removeClass("active-flag");
      });
    });
  });