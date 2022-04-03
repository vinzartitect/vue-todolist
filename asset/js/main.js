// Descrizione:
// Rifare l'esercizio della to do list.
// Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
// il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando 
// sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere 
// il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done 
// del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// BONUS extra:
// non permettere l'inserimento di todo doppie nell'array di oggetti

var app = new Vue (
    {
        el: '#root',

        data: {
            newTodo: '',
            todos: [
                {
                    text:'Fare i compiti',
                    done: false
                },
                {
                    text:'Fare la spesa',
                    done: false
                },
                {
                    text:'Fare il bucato',
                    done: false
                },
            ],
            
        },

        methods: {

            // funzione per rimuovere todo cliccando la x
            removeTodo: function(todoIndex){
                this.todos.splice(todoIndex,1);
            },

            // funzione per aggiungere nuovo todo
            addTodo: function(){ 
                
                // se input non è vuoto
                if ( this.newTodo != '' ){

                    // creiamo una variabile check da verificare
                    let check = false;

                    // ciclo foreach in cui verifico se esiste gia un todo
                    this.todos.forEach(element => {
                        // se il nuovo todo esiste gia, il check è true
                        if ( this.newTodo.toLowerCase() === element.text.toLowerCase() ){
                            check = true;                       
                        }                        
                    });

                    console.log(check);

                    // se il check verifica è falso, cioè il nuovo todo non esiste nell array todos
                    if ( check == false ){

                        // creiamo una variabile contenente l'oggetto col nuovo todo
                        let objTodo = {
                            text: this.newTodo,
                            done: false,
                        }

                        //pusho l'oggetto del nuovo todo dentro all array todos
                        this.todos.push(objTodo);
                        this.newTodo = '';

                    } else {
                        // se il check verifica è true, esce un alert
                        alert('elemento gia esistente!');
                    }
                   
                }
            },

            // funzione per barrare il todo presente nella lista
            done: function(element){
                if(element.done == true){
                    element.done = false
                } else {
                    element.done = true
                }
            }

        }

    }

);