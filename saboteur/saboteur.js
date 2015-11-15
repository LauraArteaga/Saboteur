Jugadores = new Meteor.Collection("Jugadores");

var NumeroJugadores= 3

var TiposCartas = {
    Camino1: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    Camino2: { Izquierda: "No", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    Camino3: { Izquierda: "Si", Derecha: "No", Arriba: "Si", Abajo: "Si"},
    Camino4: { Izquierda: "No", Derecha: "No", Arriba: "Si", Abajo: "Si"},
    ComienzoEscalera: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    DestinoPiedra1: { Izquierda: "Si", Derecha: "No", Arriba: "No", Abajo: "Si"},
    DestinoPiedra2: { Izquierda: "Si", Derecha: "No", Arriba: "Si", Abajo: "No"}, 
    DestinoPepita: { Izquierda: "Si", Derecha: "Si", Arriba: "Si", Abajo: "Si"},
    saboteador: {Funcion: "sabotear"},
    buscador: {Funcion: "construir"},
    Pepitas1: {numero: "1"},
    Pepitas2: {numero: "2"},
    Pepitas3: {numero: "3"},
    MinaRota: {Funcion: "RomperMina"},
    AlumbradoRoto: {Funcion: "RomperAlumbrado"},
    HerramientaRota: {Funcion: "RomperHerr"},
    ArreglarMina: {Funcion: "ArreglarMina"},
    ArreglarAlumbrado: {Funcion: "ArreglarAlumbrado"},
    ArreglarHerr: {Funcion: "ArreglarHerr"},
    ArreglaAlum_Herr: {Funcion1: "Alumbrado", Funcion2: "Herramienta"},
    ArreglaAlum_Mina: {Funcion1: "Alumbrado", Funcion2: "Mina"},
    ArreglaMina_Herr: {Funcion1: "Mina", Funcion2: "Herramienta"},
    Mapa: {Funcion: "DestapaCartaDestino"},
    QuitaCamino: {Funcion: "QuitarCamino"}
};


var CartasTunel = ['Camino1','Camino1','Camino1','Camino1','Camino1','Camino1','Camino1','Camino1','Camino1','Camino1',
                   'Camino2','Camino2','Camino2','Camino2','Camino2','Camino2','Camino2','Camino2','Camino2','Camino2',
                   'Camino3','Camino3','Camino3','Camino3','Camino3','Camino3','Camino3','Camino3','Camino3','Camino3',
                   'Camino4','Camino4','Camino4','Camino4','Camino4','Camino4','Camino4','Camino4','Camino4','Camino4',
];

var CartasDestino = [
    'ComienzoEscalera',
    'DestinoPiedra1', 
    'DestinoPiedra2', 
    'DestinoPepita',
];

var CartasPepitas = ['Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1','Pepitas1',
                     'Pepitas1','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2','Pepitas2',
                     'Pepitas2','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3','Pepitas3',
                     'Pepitas3',
];

var CartasAccion = ['Mapa','Mapa','Mapa','Mapa','Mapa','Mapa','ArreglarMina','ArreglarMina','ArreglarHerr','ArreglarHerr',
                    'ArreglarAlumbrado','ArreglarAlumbrado','MinaRota','MinaRota','MinaRota','AlumbradoRoto','AlumbradoRoto',
                    'AlumbradoRoto','HerramientaRota','HerramientaRota','HerramientaRota', 'ArreglaAlum_Herr','ArreglaAlum_Mina',
                    'ArreglaMina_Herr','QuitaCamino','QuitaCamino','QuitaCamino',
];

GuardarEnanos = function(){
    if (NumeroJugadores === 3){
        var CartasEnano = ['saboteador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 4){
        var CartasEnano = ['saboteador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 5){
        var CartasEnano = ['saboteador','saboteador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 6){
        var CartasEnano = ['saboteador','saboteador','buscador','buscador','buscador',
                           'buscador'];   
    }
    else if (NumeroJugadores === 7){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador'];   
    }
    else if (NumeroJugadores === 8){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 9){
        var CartasEnano = ['saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador','buscador'];   
    }
    else if (NumeroJugadores === 10){
        var CartasEnano = ['saboteador','saboteador','saboteador','saboteador','buscador','buscador',
                           'buscador','buscador','buscador','buscador','buscador'];   
    }

    return CartasEnano;
};

BarajaCartasAccion = function(CartasAccion){
    //CartasAccion = CartasAccion.sort(function() {return Math.random() - 0.5});
    var BarajadasAccion = []
    var Total = CartasAccion.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasAccion[aleatorio]
        BarajadasAccion[i] = nuevo
        CartasAccion.splice(aleatorio, 1);
    }
};

BarajaCartasEnano = function(){
    CartasEnano = GuardarEnanos();
    var BarajadasEnanos = []
    var Total = CartasEnano.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasEnano[aleatorio]
        BarajadasEnanos[i] = nuevo
        CartasEnano.splice(aleatorio, 1);
    }
};

BarajaCartasTunel = function(CartasTunel){
    var BarajadasTunel = []
    var Total = CartasTunel.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasTunel[aleatorio]
        BarajadasTunel[i] = nuevo
        CartasTunel.splice(aleatorio, 1);
    }
};

BarajaCartasDestino = function(CartasDestino){
    var BarajadasDestino = []
    var Total = CartasDestino.length; 
    for (i=0; i<Total; i++) { 
        aleatorio = Math.floor(Math.random()*(Total));
        nuevo= CartasDestino[aleatorio]
        BarajadasDestino[i] = nuevo
        CartasDestino.splice(aleatorio, 1);
    }
};








if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
