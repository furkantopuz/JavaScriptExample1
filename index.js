window.onload = function(){
    var name = prompt('Lütfen İsminizi Giriniz : ','');

    if(name){
        document.getElementById('myName').innerHTML = name;
    }

    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours(); 

    var weekday=new Array(7);
    weekday[0]="Pazar";
    weekday[1]="Pazartesi";
    weekday[2]="Salı";
    weekday[3]="Çarşamba";
    weekday[4]="Perşembe";
    weekday[5]="Cuma";
    weekday[6]="Cumartesi";

    var day = weekday[date.getDay()];

    document.getElementById('myClock').innerHTML = hour + " : " + minutes + " : " + seconds + " " + day;
}
