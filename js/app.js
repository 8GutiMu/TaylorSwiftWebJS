var keyValue = "taylor+swift&entity=song&limit=200"



var getJSON = function (url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        ajax.open("GET", url) 
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                var response = JSON.parse(ajax.responseText)
                resolve(response)
            }
        }
    })
}


getJSON("https://itunes.apple.com/search?term="+keyValue)
    .then(function (resultado) {
        return resultado;
    }).then(function(resultado){
  
       var tracks = (resultado.results.map(function(track){

           renderSong(track)           
    }));
 		return Promise.all(tracks) 
    }).then(function(){
    getJSON("https://itunes.apple.com/search?term=charts")
    .then(function(res){
    var chart = (res.results.map(function(chart){
    
         return(chart) 
            
    })
    
)}).then(function(chart){
         for(var i=0 ; i <6 ; i++){
             renderCharts(chart)
    }
    })})
    
    
var contador =0;
var trackIdSingle = [];
    
var crearUnElemento = function (elementoACrear, propiedades) {
    var elemento = document.createElement(elementoACrear);
    elemento.className = propiedades.className;
    elemento.innerText = propiedades.innerText;
    elemento.src = propiedades.src;

    return elemento
}

var filter = function(track){
    trackIdSingle.push(track.trackName)
    
    for (i=0 ; i<trackIdSingle.length; i++){
        console.log(trackIdSingle)
        console.log(track.trackName)
       if(track.trackName == trackIdSingle[i]){
           console.log("se repite")
       }
        else{
            renderSong(track)
        }
        
    }
}


var renderSong = function (track) {
 
    contador ++;
    
    
    
    var row = crearUnElemento("div", {
        className: "row ",
        innerText: "",
        src: ""
    })
    var col1 = crearUnElemento("div", {
        className: "col col-lg-1 col-md-1",
        innerText: "",
        src: ""
    })
    var col1Img = crearUnElemento("div", {
        className: "col col-lg-1 col-md-1",
        innerText: "",
        src: ""
    })
    var spanContador = crearUnElemento("div", {
        className: "",
        innerText:"#"+contador,
        src: ""
    })
    

    var img = crearUnElemento("img", {
        className: "",
        innerText: "",
        src: track.artworkUrl60
    })
    
    var col10 = crearUnElemento("div",{
        className: "col col-lg-7 col-md-7",
        innerText:"",
        src: ""
    })
    
    var name = crearUnElemento("h5",{
        className: "",
        innerText:track.trackName,
        src: ""
    })
    var collection = crearUnElemento("h6",{
        className: "",
        innerText:track.collectionName,
        src: ""
    })
    

    var col1End = crearUnElemento("div", {
        className: "col col-lg-3 col-md-3",
        innerText: "",
        src: ""
    })
    var reproductions = crearUnElemento("p",{
        className: "",
        innerText:track.trackId,
        src: ""
    })
    
    var hr = crearUnElemento("hr",{
        className: "",
        innerText:"",
        src: ""
    })
    
    var container = document.getElementById("music");
    
    container.appendChild(hr)
    container.append(row)
    
    row.appendChild(col1)
    row.appendChild(col1Img)
    row.appendChild(col10)
    row.appendChild(col1End)
    
    col1.appendChild(spanContador)
    col1Img.appendChild(img)
    
    col10.appendChild(name)
    col10.appendChild(collection)
 
    
    col1End.appendChild(reproductions)
  
}


var renderCharts = function(chart){
      var col6 = crearUnElemento("div", {
        className: "col col-lg-6 col-md-6",
        innerText: "",
        src: ""
    })
      
            var img = crearUnElemento("img", {
        className: "col col-lg-6 col-md-6",
        innerText: "",
        src: chart.artworkUrl100
    })
      
            var name = crearUnElemento("p", {
        className: "",
        innerText: chart.trackName,
        src: ""
    })
      
    var container = document.getElementById("charts");
    
    container.appendChild(col6)
    col6.appendChild(img)
    col6.appendChild(name)
}
