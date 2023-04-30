let name = prompt("lutfen isminizi giriniz:");
document.getElementById("myName").innerHTML = name ; 

let days = {
    0: "pazar",
    1:"pazartesi",
    2:"sali",
    3:"carsamba",
    4:"persembe",
    5:"cuma",
    6:"cumartesi"  
}



let tarih = new Date();
let gun = days[tarih.getDay()];



let saat = tarih.getHours();
let dakika= tarih.getMinutes();
let saniye= tarih.getSeconds();





document.getElementById("myClock").innerHTML=`${saat}:${dakika}:${saniye}  ${gun}


`


