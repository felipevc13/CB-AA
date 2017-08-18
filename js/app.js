$(document).ready(function(){
    
 $('[data-group]').each(function(){
   var $allTarget = $(this).find('[data-target]'),
       $allClick = $(this).find('[data-click]'),
       activeClass = 'active';
     
     $allTarget.first().addClass(activeClass);
     $allClick.first().addClass(activeClass);
     
     $allClick.click(function(e){
       e.preventDefault();
       var id = $(this).data('click'),
           $target = $('[data-target="' + id + '"]');
         
         $allClick.removeClass(activeClass);
         $allTarget.removeClass(activeClass);
         
         $target.addClass(activeClass);
         $(this).addClass(activeClass);
     });
});   
    
    
 $('.nav-menu a').click(function(e){
   e.preventDefault();    
   var id = $(this).attr('href'),
       menuHeight = $('.menu').height(),
       targetOffset = $(id).offset().top;
     
     $('html, body').animate({
         scrollTop: targetOffset - menuHeight
     }, 500);
     
 });   
    
    
    
    
    
}); 
    



    


