class Slider{
    /* 
        se va a realizar la logica 
        para que el slider tenga movimiento
    */
    /*
        Construir un objeto, se le pasa un selector
        para encontrar el slider.
    */
    constructor(selector){
        /*
        Con esta linea de codigo se asegura
        que this no va a cambiar, y que this
        siempre va ser el objeto en el cual
        en ese momento se esta manipulando (*)
        */
        this.move = this.move.bind(this);
        // Se busca y se obtiene el elemento
        this.slider = document.querySelector(selector);
        /*
        Se crea un atributo interval, que inicialmente
        va ser null, en el cual se guardara el objeto
        que tendra el intervalo de tiempo en el cual
        se van estar moviendo los elementos
        */
        this.interval = null;
        // Se inicialeza el contador
        this.contador = 0;
        /* 
        Se llama el metodo start 
        para que inicie el intervalo de ejecicion 
        */
        this.start();

    }
    // Metodo que iniciara el movimiento de las imagenes
    start(){
        // Para que ejecute la funcion move cada 5seg
        this.interval = window.setInterval(this.move, 5000);
    }

    move(){
        /*
        this va ser referencial al objeto
        de la calse con la cual se esta trabajando,
        sin embargo en js el suele modificarse.
        Para evitar que se este modificando
        se reescribe la firma del metodo
        y decirle que this siempre valga lo mismo (*)
        */

        /*
        para saber la cantidad de elementos para 
        reiniciar el contador,
        Se crea una vadiable, se seleccionan todos los
        hijos directos y luego se cuentan.

        Cuando se aplica querySelector sobre un elemento
        la busqueda se hace unicamente en los hijos
        de ese elemento.
        
        Como solo se esta haciendo en el slider, el unico
        hijo es el container, por lo tanto, se pasa a buscar los
        hijos directos de container (.container > *)
        y que con lengt se cuente el tamano del arreglo
        y asi obtener la cantidad de elemtos que se tiene
        */
        let itemsCount = this.slider.querySelectorAll(' .container > *').length;
        // console.log(itemsCount)

        /*
        se aumenta el contador
        */

        this.contador ++;
        /*
        Si contador es mavor a la cantidad de ekementos
        regrese al principio*/
        if (this.contador > itemsCount -1) this.contador = 0;

        // y despues movernos a esa posicion
        this.moveTo(this.contador);
    }

    /*
    Metodo para que el slider se 
    mueva a la posicion indicada
    */
    moveTo(index){
        /*
        para mover las imagenes, basta con manipular 
        la propiedad left del container de forma negativa
        para posicionar las  imagenes.

        Se crea una varaible left
        la cual sera el index (a que img se va a mover)
        multiplicado por 100%
        */
        let left = index * 100;

        /*
        Se alica el slider, se busca el elemento container 
        dentro del slider y se manitula la propiedad left
        */
        this.slider.querySelector(".container").style.left = '-'+left+'%';

    }
}

(function(){
    /*
    Para crear un nuevo slider 
    se crea un slider y se le pasa el selector,
    en este caso el elemento con la clase slider
    */
    new Slider('.slider');
})();

/*
Se va a colocar dentro deun closure,
Es decir los closures o clausuras
son funciones que manejan variables independientes.
No habra conflicto entre las variables ya que no seran globales.
*/