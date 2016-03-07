window.onload = function(){
    $.ajax({
      method:"Get",
      url:"/api/articles",
      success:function(data){
        console.log(data);
        var articleIndex = 1;
        for(;articleIndex<=3;articleIndex++){
          var imgName ="img"+articleIndex;
          var pList = $('.article'+articleIndex);
          pList.before($('<h3>').html(data[articleIndex-1].title));
          pList.before($('<img>',{src:data[articleIndex-1].image}));
          pList.html(data[articleIndex-1].summary);
        }
      },
      error:function(error){
        alert(error);
      }
    })
};