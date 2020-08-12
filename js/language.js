$(document).ready(function(){
  
    // By default
    $('.es_lang').addClass("active-lang");
    $('.es').addClass("active-flag");
    
    // Function switch
    $(function() {
      // Spanish button
      $(".es").click(function() {
        // Enable Spanish
        $('.es_lang').addClass("active-lang"); 
        
        // Disable English
        $('.en_lang').removeClass("active-lang") 
        
        // Active or remove the opacity on the flags.
        $('.es').addClass("active-flag");
        $('.en').removeClass("active-flag");
      });
      
      // English button
      $(".en").click(function() {
        
        // Enable English
        $('.en_lang').addClass("active-lang");
        
        // Disable Spanish
        $('.es_lang').removeClass("active-lang")
        
        // Active or remove the opacity on the flags.
        $('.en').addClass("active-flag");
        $('.es').removeClass("active-flag");
      });
    });
  });