 $(function(){
  $.ajax({
        method:"Get",
        url:"/api/articles",
        success:function(data){
          console.log("get data:");
          console.log(data);
          return data;
        },
        error:function(error){
          alert(error);
        }
      })
 });
