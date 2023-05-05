window.onload=function(){
const startbtn= document.getElementById("cenbtn");
if(startbtn){
startbtn.addEventListener('click', function(){
        window.open("buildpage.html");
})
}
const btn= document.getElementById("btn");

        
 if(btn) {    
btn.addEventListener('click', function(){
  var budget = document.getElementById("budget").value;
  sessionStorage.setItem("budget", budget);
  var graph = document.getElementsByName('gcard');
  var aGraph = document.getElementsByName('cardg');
  var cool = document.getElementsByName('cool');
  var wifi = document.getElementsByName('wifi');
  var ram = document.getElementsByName("ram")
          
        for(i = 0; i < graph.length; i++) {
            if(graph[i].checked){
            var graphholder = graph[i].value;
            sessionStorage.setItem("graphHolder", graphholder);
           //document.getElementById("result").innerHTML
            //    = "Graphics Card: "+graph[i].value;
                   
                }
            
            
  
     }
     for(i = 0; i < aGraph.length; i++) {
        if(aGraph[i].checked){
        var aGraphholder = aGraph[i].value;
        sessionStorage.setItem("aGraphHolder", aGraphholder);
       //document.getElementById("result").innerHTML
        //    = "Graphics Card: "+graph[i].value;
               
            }
        
        

 }
     for(i = 0; i < cool.length; i++) {
            if(cool[i].checked){
            var coolholder = cool[i].value;
            sessionStorage.setItem("coolHolder", coolholder);
          //  document.getElementById("result1").innerHTML
          //          = "Cooling: "+cool[i].value;
        }
  
     }
     for(i = 0; i < wifi.length; i++) {
            if(wifi[i].checked){
            var wifiholder = wifi[i].value;
            sessionStorage.setItem("wifiHolder", wifi[i].value);
          //  document.getElementById("result2").innerHTML
          //          = "Wi-Fi: "+wifi[i].value;
        }
  
     }
     for(i = 0; i < cool.length; i++) {
        if(ram[i].checked){
        var ramholder = ram[i].value;
        sessionStorage.setItem("ramHolder", ramholder);
     //   document.getElementById("result3").innerHTML
        //        = "Cooling: "+ram[i].value;
}

 }
  window.open("CombinedParts.html");
  
//alert("Budget: "+ graphholder);
});}
const console= document.getElementById("console");
if(console){
        const btn1= document.getElementById("btn1");
        const btn2= document.getElementById("btn2");
        const btn3= document.getElementById("btn3");
        const btn4= document.getElementById("btn4");
        const btn5= document.getElementById("btn5");
        const btn6= document.getElementById("btn6");
        const btn7= document.getElementById("btn7");
        var budget = sessionStorage.getItem("budget");
        var initbudget = budget;
            var graphholder = sessionStorage.getItem("graphHolder");
            var aGraphholder = sessionStorage.getItem("aGraphHolder");
            var coolholder = sessionStorage.getItem("coolHolder");
            var wifiholder = sessionStorage.getItem("wifiHolder");
            var ramholder = sessionStorage.getItem("ramHolder");
        var budgetCounter = budget/100;
        var watt = 650;
        var gpu = 0;
  //  console.addEventListener('click', function(){
            
            //alert(graphholder)
         //   document.getElementById("result").innerHTML
          //      = graphholder;
//}
//)
switch(aGraphholder){
        case "3060":
                gpu = 9.1;
        case "3070":
                gpu = 10;
        case "3080":
                gpu = 13.5;
        case "3090":
                gpu = 16.5;
}
if(graphholder ==="Intel"){
        if(budgetCounter >= (gpu + 5.7)){
        document.getElementById("result").innerHTML
                = "Intel I9-13900k - $567.99";
                budget = budget - 567.99;
                watt = 750;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Intel-i9-13900K-Desktop-Processor-P-cores/dp/B0BCF54SR1/ref=sr_1_1_sspa?crid=25U5431K7BSGB&keywords=intel%2Bi9%2B13900k&qid=1682594481&sprefix=intel%2Bi9%2B13%2Caps%2C71&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMjA4N0QzMllHSDJIJmVuY3J5cHRlZElkPUEwNzU1MzY4M1VTT09OWERVRE9WWCZlbmNyeXB0ZWRBZElkPUEwNTAwMDU5MUNRTklOUlhFSTNSUCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1");
                })
        } else if (budgetCounter < (gpu + 5.7) && budgetCounter >= (gpu + 2.9)){
                document.getElementById("result").innerHTML
                = "Intel I7-12700kf - $288.98";
                budget = budget - 288.98;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Intel-i7-12700KF-Desktop-Processor-Unlocked/dp/B09FXKHN7M/ref=sr_1_3?crid=3CLD25V8BXZPE&keywords=i-7&qid=1683300822&sprefix=i-7%2Caps%2C67&sr=8-3&th=1");
                })
        } else {
                document.getElementById("result").innerHTML
                = "Intel I5-12400 - $174.99";
                budget = budget - 174.99;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Intel-i5-12400-Desktop-Processor-Cache/dp/B09NMPD8V2/ref=sr_1_5?crid=2WNWE4QQPNQI3&keywords=i-5+intel+core+processor&qid=1683301028&sprefix=i-5%2Caps%2C78&sr=8-5");
                })
        }
                //alert(budget);
                if(wifiholder ==="WiFi"){
                        document.getElementById("result1").innerHTML
                                = "MSI MAG B660 TOMAHAWK WiFi - $189.99";
                                budget = budget - 189.99;
                                btn2.addEventListener('click', function(){
                                        window.open("https://www.amazon.com/MSI-MAG-B660-DDR4-Motherboard/dp/B09PXL3ZZB/ref=sr_1_1?crid=150OS5LO5341D&keywords=msi%2Bmag%2Bb660%2Btomahawk%2Bwifi%2Bddr4%2Batx%2Blga1700%2Bmotherboard&qid=1682594542&sprefix=MSI%2BMAG%2Bb660%2Caps%2C70&sr=8-1&th=1");
                                    })
                                //alert(budget);
                        
                        } else if(wifiholder==="nWiFi"){
                                document.getElementById("result1").innerHTML
                                = "MSI MPG Z590 Gaming Plus - $119.99";
                                budget = budget - 119.99;
                                btn2.addEventListener('click', function(){
                                        window.open("https://www.amazon.com/MPG-Z590-Gaming-Motherboard-Socket/dp/B08WC8QDTC/ref=sr_1_2?crid=22IHRXN3MLMYM&keywords=msi%2Bmpg%2Bz590&qid=1682594580&sprefix=MSI%2BMPG%2Caps%2C69&sr=8-2&th=1");
                                    })
                                //alert(budget);
                        }

} else if(graphholder==="AMD"){
        if(budgetCounter >= (gpu + 4.2)){
        document.getElementById("result").innerHTML
                = "AMD Ryzen 9 7900X - $419.00";
                budget = budget - 419;
                watt =750;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/AMD-7900X-24-Thread-Unlocked-Processor/dp/B0BBJ59WJ4/ref=sr_1_4?crid=1NI630SVTW8MF&keywords=amd%2Bryzen%2B9&qid=1682594661&sprefix=AMD%2BRY%2Caps%2C75&sr=8-4&th=1");
                    })
                
                //alert(budget);
        } else if (budgetCounter < (gpu + 4.2) && budgetCounter >= (gpu + 2.4)){
                document.getElementById("result").innerHTML
                = "AMD Ryzen 7 5800X - $239.99";
                budget = budget - 240;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/AMD-Ryzen-5800X-16-Thread-Processor/dp/B0815XFSGK/ref=sr_1_3?crid=2DZRI5P1ARHE5&keywords=AMD%2Bryzen%2B7&qid=1683301810&sprefix=amd%2Bryzen%2B7%2Caps%2C85&sr=8-3&th=1");
                    })
                //alert(budget);
        } else {
                document.getElementById("result").innerHTML
                = "AMD Ryzen 5 5600X - $152.91";
                budget = budget - 153;
                btn1.addEventListener('click', function(){
                        window.open("https://www.amazon.com/AMD-Ryzen-5600X-12-Thread-Processor/dp/B08166SLDF/ref=sr_1_2?crid=2JO9JI9J9QSY7&keywords=AMD%2Bryzen%2B5&qid=1683301927&sprefix=amd%2Bryzen%2B5%2Caps%2C75&sr=8-2&th=1");
                    })
                //alert(budget);
        }
                if(wifiholder ==="WiFi"){
                        document.getElementById("result1").innerHTML
                                = "MSI B650M WiFi Pro Series - $199.99";
                                budget = budget - 199.99;
                                btn2.addEventListener('click', function(){
                                        window.open("https://www.amazon.com/MSI-B650-P-ProSeries-Motherboard-Processors/dp/B0BHBT5BD3/ref=sr_1_8?crid=P6L34WCC52OJ&keywords=msi%2Bb550m%2Bwifi%2Bpro&qid=1682594719&sprefix=msi%2Bb550m%2Bwifi%2Bpro%2Caps%2C61&sr=8-8&th=1");
                                    })
                                //alert(budget);
                        
                        } else if (wifiholder==="nWiFi"){
                                document.getElementById("result1").innerHTML
                                = "MSI MAG B550 TOMAHAWK - $169.99";
                                budget = budget - 167.67;
                                btn2.addEventListener('click', function(){
                                        window.open("https://www.amazon.com/MSI-MAG-B550-TOMAHAWK-Motherboard/dp/B089CWDHFZ/ref=sr_1_1?crid=HP09OQIFP6O3&keywords=msi+mag+b550+tomahawk&qid=1682594790&sprefix=msi+mag+b550%2Caps%2C78&sr=8-1");
                                    })
                                //alert(budget);
                        }
}
if(ramholder===("vid")){
        document.getElementById("result2").innerHTML
                = "Corsair Vengeance 32GB Ram - $64.99";
        budget = budget - 64.99
        btn3.addEventListener('click', function(){
                window.open("https://www.amazon.com/Corsair-Vengeance-PC4-25600-Desktop-Memory/dp/B07RW6Z692/ref=sr_1_3?crid=1YL6XYIB9IBHT&keywords=32gb%2Bram&qid=1682594879&sprefix=32gb%2Bram%2Caps%2C72&sr=8-3&th=1");
            })
        } else if (ramholder===("game")){
                document.getElementById("result2").innerHTML
                = "Corsair Vengeance 16GB Ram - $39.99";
        budget = budget - 39.99
        btn3.addEventListener('click', function(){
                window.open("https://www.amazon.com/Corsair-Vengeance-PC4-25600-Desktop-Memory/dp/B07RS1G6XW/ref=sr_1_9?crid=1V38Z3WYT9Z70&keywords=16gb+ram&qid=1682594904&sprefix=16gb+ram%2Caps%2C68&sr=8-9");
            })

            } else {
                document.getElementById("result2").innerHTML
                = "Patriot Viper Steel 8GB Ram - $20.99";
        budget = budget - 20.99
        btn3.addEventListener('click', function(){
                window.open("https://www.amazon.com/Patriot-3000MHz-Performance-Memory-Module/dp/B07MTVW1R1/ref=sr_1_5?crid=13X4YFCP4AZ06&keywords=8gb%2Bram&qid=1682594941&sprefix=8gb%2Bram%2Caps%2C65&sr=8-5&th=1");
            })

            }
        
        if(aGraphholder === ("3060")){
        document.getElementById("result3").innerHTML
        = "MSI Gaming Geforce RTX 3060 - $359.99";
        budget = budget - 359.99
        btn4.addEventListener('click', function(){
                window.open("https://www.amazon.com/MSI-GeForce-RTX-3060-12G/dp/B08WPRMVWB/ref=sr_1_4?crid=2RNVAHRQVJENA&keywords=3060&qid=1682595061&sprefix=3060%2Caps%2C71&sr=8-4");
            })
        } else if(aGraphholder === ("3070")){
                document.getElementById("result3").innerHTML
        = "GIGABYTE Geforce RTX 3070 - $499.99";
        budget = budget - 499.99
        btn4.addEventListener('click', function(){
                window.open("https://www.amazon.com/GIGABYTE-REV2-0-WINDFORCE-GV-N3070GAMING-OC-8GD/dp/B098Q4M4WH/ref=sr_1_2?crid=3UKKL26G1PYAL&keywords=3070&qid=1683304836&sprefix=3070%2Caps%2C85&sr=8-2");
            })

        } else if(aGraphHolder === ("3080")){
                document.getElementById("result3").innerHTML
        = "EVGA Geforce RTX 3080 - $799.99";
        budget = budget - 799.99
        btn4.addEventListener('click', function(){
                window.open("https://www.amazon.com/EVGA-10G-P5-3885-KR-GeForce-Cooling-Backplate/dp/B093QJSNHK/ref=sr_1_3?crid=7TR623RLUF50&keywords=3080&qid=1683304891&sprefix=3080%2Caps%2C100&sr=8-3");
            })

        } else {
                document.getElementById("result3").innerHTML
        = "ASUS Geforce RTX 3090 - $1040.99";
        budget = budget - 1040.99
        btn4.addEventListener('click', function(){
                window.open("https://www.amazon.com/ASUS-GeForce-Graphics-DisplayPort-Bearings/dp/B092T1CLK2/ref=sr_1_4?crid=38AS7W31BY84W&keywords=3090&qid=1683304946&sprefix=3090%2Caps%2C82&sr=8-4");
            })

        }
if (coolholder === "Water"){
        document.getElementById("result4").innerHTML
                = "MSI MAG CoreLiquid - $129.99";
                budget = budget - 109.99;
                btn5.addEventListener('click', function(){
                        window.open("https://www.amazon.comhttps://www.amazon.com/MSI-MAG-Core-Liquid-360R/dp/B09HRNPNTD/ref=sr_1_7?crid=5XDGCTNNBLOH&keywords=liquid%2Bcooling&qid=1682595091&sprefix=liquid%2Bcooling%2Caps%2C81&sr=8-7&th=1");
                    })

} else if (coolholder === "Fan"){
        document.getElementById("result4").innerHTML
                = "Vetroo V5 CPU Air Cooler - $34.99";
                budget = budget - 34.99;
                btn5.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Vetroo-Cooler-Processor-Universal-Addressable/dp/B08F21X2VP/ref=sr_1_13?crid=2ZCFPFCO9SN7V&keywords=cpu%2Bcooler&qid=1682595135&sprefix=cpu%2Bcooler%2Caps%2C80&sr=8-13&th=1");
                    })

}
document.getElementById("result5").innerHTML
                = "GIGABYTE C200 Glass - $64.99";
                budget = budget - 64.99;
                btn6.addEventListener('click', function(){
                        window.open("https://www.amazon.com/GIGABYTE-Tempered-Integrated-Detachable-Watercooling/dp/B07R89QZXM/ref=sr_1_11?crid=F3Y7LR79H2IA&keywords=cpu%2Bcase&qid=1682595181&sprefix=cpu%2Bcase%2Caps%2C78&sr=8-11&th=1");
                    })
           if(watt === 750){  
                document.getElementById("result6").innerHTML
                = "Corsair RM750e Fully Modular - $99.99";
                budget = budget - 99.99;
                btn7.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Corsair-RM750e-Modular-Low-Noise-Supply/dp/B0BN234QRZ/ref=sr_1_1?crid=22YHVXSDXFI8X&keywords=corsair%2Brm750e&qid=1682594443&sprefix=corsair%2Brm750e%2Caps%2C68&sr=8-1&th=1");
                    })
                } else if (watt === 650){
                document.getElementById("result6").innerHTML
                = "Apevia ATX-GX650W - $54.99";
                budget = budget - 54.99;
                btn7.addEventListener('click', function(){
                        window.open("https://www.amazon.com/Apevia-ATX-GX650W-Galaxy-Certified-Semi-Modular/dp/B094278HKG/ref=sr_1_4?crid=3SSY3G37ZBR41&keywords=650%2Bwatt%2Bpower%2Bsupply&qid=1683302483&sprefix=650%2Bwatt%2Caps%2C127&sr=8-4&th=1");
                    })
                } else {
                document.getElementById("result6").innerHTML
                = "EVGA 550 BP - $54.99";
                budget = budget - 54.99;
                btn7.addEventListener('click', function(){
                        window.open("https://www.amazon.com/EVGA-Bronze-Warranty-Compact-100-BP-0550-K1/dp/B0B1S1PN6H/ref=sr_1_3?crid=1NSXRNAR7OUAN&keywords=550%2Bwatt%2Bpower%2Bsupply&qid=1683302544&sprefix=550%2Bwatt%2Bpower%2Bsupply%2Caps%2C78&sr=8-3&th=1");
                    })
                }
        var endBudget = initbudget - budget;
        endBudget = Math.round(endBudget * 100) / 100;
document.getElementById("result7").innerHTML
                = "Total Build Cost =  $" +endBudget;
//alert(budget)

};


}
