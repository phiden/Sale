$(document).ready(function() {
  
  //init tabletop
  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1KLivVH9X6cazpuxBEOv13M-RJeA8plpS7xRabx7EbkA/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true,
                     prettyColumnNames: false } )
  }
 
  //build out each listing
  function showInfo(data, tabletop) {
    
    $.each(data, function(key, val){
      
      //console.log(val);
      if(val.sold != 'yes') {
        
        var listing = $('.hidden').clone().removeClass('hidden');
          listing.find(('li.itemTitle a')).html(val.item);
          listing.find(('.itemPrice')).text(val.price);
          listing.find(('.itemDescription')).text(val.description);
          listing.find(('.originalLink a')).attr('href', val.originallink);
          
          if(val.originallink != '') {
            
            listing.find('.itemImage a').attr('href', val.originallink);
            listing.find('.itemDescription').append(listing.find('.originalLink'));
          }
          
          listing.find('.itemImage a img').attr('src', val.image);
          listing.category = '#' + val.category.toLowerCase();
          
          //console.log(listing);
      
      $('#container').find(listing.category).append(listing);

      }
            
    });
    
  }  
  
  init();
 
}) //close ready