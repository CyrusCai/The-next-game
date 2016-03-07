window.onload = function(){
    $.ajax({
      method:"Get",
      url:"/api/articles",
      success:function(data){
        console.log(data);
        var articleIndex = 1;
        for(;articleIndex<=3;articleIndex++){
          var pList = $('.article'+articleIndex);
          pList.before($('<h3>').html(data[articleIndex-1].title));
          pList.before($('<a>',{href:"articles/"+articleIndex,id:"arti_img_"+articleIndex}));
          $("<img src="+data[articleIndex-1].image+">").prependTo("#arti_img_"+articleIndex);
          pList.html(data[articleIndex-1].summary);
        }
      },
      error:function(error){
        alert(error);
      }
})
};

