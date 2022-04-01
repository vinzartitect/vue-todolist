// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// creiamo la variabile app che contiene il collegamento al div
// e l'insieme degli oggetti al suo interno
var app = new Vue (
    {
        el: '#root',

        data: {
            content: 'Piloti F1 2022',
            classi: ['color_white', 'font_big'],
            photo: './asset/img/F1_2022_Line_Up.jpg',
        }

    }

);