var map = L.map('map').setView([52.44251260319042, 18.921683024307846], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function liczba(){
    return Math.floor(Math.random() * 16)
}

console.log(wojewodztwa.features)

var punkty=0
var zycia=3
document.getElementById('punkty').innerHTML='punkty: '+punkty
document.getElementById('zycia').innerHTML='zycia: '+zycia


function start(){
     licz=liczba()
    const dol=document.getElementById('woj')
     
    var wojewodztwo=wojewodztwa.features[licz].properties.nazwa
    
 dol.innerHTML=wojewodztwo
}

var warstwa=[]
for(let i=0;i<=wojewodztwa.features.length-1;i++){
    
    var wojewodztwo=wojewodztwa.features[i]
    var mapwoj= L.geoJSON(wojewodztwo).addTo(map)

    mapwoj.on('click',function(e){
        
const wybrane=e.layer.feature.properties.nazwa
console.log(wybrane)

        if(wybrane==wojewodztwa.features[licz].properties.nazwa){
            document.getElementById('odp').innerHTML='dobrze'
            punkty=punkty+1
            document.getElementById('punkty').innerHTML='punkty: '+punkty

         marker(e)
            
            
            kolorDobrze(e)


            start()
        }

        else{ 
            zycia=zycia-1
    kolorZle(e)
    document.getElementById('odp').innerHTML='źle'
    document.getElementById('zycia').innerHTML='zycia: '+zycia

marker(e)

if(zycia<=0){
    document.getElementById('dol').innerHTML='Koniec gry'
zycia=3
punkty=0
}
else start()

}   

})      
}


function marker(e){

  L.marker(e.target.getBounds().getCenter()).addTo(map)


}


function kolorZle(e){
    var warstwa=e.target

    warstwa.setStyle({
        color:'red',
        weight:2,
        fillOpacity:0.4
})
}


function kolorDobrze(e){
    var warstwa=e.target

    warstwa.setStyle({
        color:'green',
        weight:2,
        fillOpacity:0.7
})
}