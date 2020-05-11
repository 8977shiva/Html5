var webStorage=localStorage;

$(document).ready(()=>{
    $('#sessionStorage').click(function (e) { 
        //   console.log("clicked")
           if(this.checked){
            webStorage=sessionStorage;
           }
          return webStorage;
      });

    $('input:submit[value=save]').click((e)=>{
        e.preventDefault();
        webStorage.setItem('flag', 'set')
     
        var data=$("#signUp").serializeArray();
       $.each(data,(i,obj)=>{
           webStorage.setItem(obj.name, obj.value)
       })
        
    })
    if(webStorage.getItem("flag")=='set'){
        $('section').before("<h3>the form has been save</h3>")
            var data=$('#signUp').serializeArray();
            $.each(data, (i,obj)=>{
                $("[name='"+obj.name+"']").val(webStorage.getItem(obj.name));
            })
    }
})



 