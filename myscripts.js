window.onload=function(){
const btn= document.getElementById("btn");

        
      
btn.addEventListener('click', function(){
  var budget = document.getElementById("budget").value;
  var graph = document.getElementsByName('gcard');
  var cool = document.getElementsByName('cool');
  var wifi = document.getElementsByName('wifi');
          
        for(i = 0; i < graph.length; i++) {
            if(graph[i].checked){
            var graphholder = graph[i].value;
            document.getElementById("result").innerHTML
                    = "Graphics Card: "+graph[i].value;}
  
     }
     for(i = 0; i < cool.length; i++) {
            if(cool[i].checked){
            var coolholder = cool[i].value;
            document.getElementById("result1").innerHTML
                    = "Cooling: "+cool[i].value;}
  
     }
     for(i = 0; i < wifi.length; i++) {
            if(wifi[i].checked){
            var wifiholder = wifi[i].value;
            document.getElementById("result2").innerHTML
                    = "Wi-Fi: "+wifi[i].value;}
  
     }
 // window.location.href = "CombinedParts.html"
//alert("Budget: "+ graphholder);
});
}
