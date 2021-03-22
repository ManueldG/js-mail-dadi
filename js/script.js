/*
Esercizio di oggi: Cercare in un array e JS Dadi
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Consigli del giorno:
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


*/
var p1=0,p2=0,risposta="si";
var email='';
var users = ["gianni@gmail.com","andrea@gmail.com","luca@gmail.com","fede@gmail.com","sasa@gmail.com"];
for (0; !((email!='user@dominio.com') &&(email!='') && (email.indexOf('@')!=(-1)));0){
    email = prompt("inserisci email per l'accesso","user@dominio.com");
    console.log(email);
    console.log(email.indexOf('@'));
}

for (var i=0 ; i<users.length-1 ; i++)
    {
    if (users[i]===email)
        {
        console.log("Benvenuto",users[i]);
        console.log("vuoi giocare a dadi?");
        for (0; risposta=="si";0)
            {
                risposta=prompt("vuoi giocare","si");
                p1=(Math.random()*6+1).toFixed(0);
                p2=(Math.random()*6+1).toFixed(0);
                
                console.log(users[i]+" lancia un "+p1);
                console.log("il computer lancia un "+p2);
                if(p1 > p2)
                    console.log("vince "+users[i]);
                else 
                if(p1==p2)
                    console.log("pareggio");
                else
                    console.log("vince il computer");

            }
        console.log("Grazie di aver giocato con noi buona giornata");
        break;

        }
        else
        {console.log("Mi dispiace non sei registrato");}
        
    }
        

/*
for (var i=0; ;0){
    email = prompt("inserisci email per l'accesso","user@dominio.com");
    console.log(email);
}*/

