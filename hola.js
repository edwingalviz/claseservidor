function cargarTabla(){
   $.ajax({
      url: 'https://gd637e035448740-db202109231844.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costumes/costumes',
      type: 'GET',
      dataType: 'json',
      success: function(response){
         var resultado = "";
         response.items.forEach(function(items) {
            resultado +="<tr><td>"+items.idcostume+"</td><td>";
            resultado +=items.capacity+"</td><td>";
            resultado +=items.category_id+"</td><td>";
            resultado +=items.name+"</td></tr>";
         });
         $(".cuerpoTabla").html(resultado);

      },
      error: function(xhr,status){
         console.log(xhr,responseText);
      },
      complete: function(xhr,status){
         console.log(xhr,responseText);
      }
   });
}
$(document).ready(function(){
   cargarTabla();
});