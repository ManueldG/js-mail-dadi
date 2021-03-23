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
var msgUscita = "mi dispiace non sei registrato";
var email='';
var users = ["gianni@gmail.com","andrea@gmail.com","luca@gmail.com","fede@gmail.com","sasa@gmail.com"];

for (0; !((email!='user@dominio.com') &&(email!='') && (email.indexOf('@')!=(-1)));0)
{
    email = prompt("inserisci email per l'accesso","user@dominio.com");
    console.log(email);
    console.log(email.indexOf('@'));
}

for (var i=0 ; i<users.length ; i++)
{
    if (users[i]===email)
    {
    
        var user = users[i].slice(0,users[i].indexOf('@'));
        console.log("Benvenuto",user);
        console.log(user);
        console.log(" vuoi giocare a dadi? ");
        document.getElementById("titolo").innerHTML=("Benvenuto "+user+" vuoi giocare a dadi? ");
        for (0; risposta=="si";0)
        {
                risposta=prompt("vuoi giocare","si");
                p1=(Math.random()*5+1).toFixed(0);
                p2=(Math.random()*5+1).toFixed(0);
                
                console.log(users[i]+" lancia un "+p1);
                document.getElementById("dado").src="img/"+p1+".jpg";
                document.getElementById("user").innerHTML=user+" lancia un "+p1;
                document.getElementById("dadocpu").src="img/"+p2+".jpg"
                document.getElementById("cpu").innerHTML="il computer lancia un "+p2;

                console.log("il computer lancia un "+p2);
                if(p1 > p2)
                {
                    console.log("vince "+user);
                    document.getElementById("testo").innerHTML="vince "+user;
                }                    
                else 
                    if(p1==p2)
                    {
                        console.log("pareggio");
                        document.getElementById("testo").innerHTML=" Pareggio";
                    }
                        
                    else
                    {
                        console.log("vince il computer");
                        document.getElementById("testo").innerHTML="vince il computer";
                    }
                    

        }
        console.log("Grazie di aver giocato con noi buona giornata");
        msgUscita = "Grazie di aver giocato con noi buona giornata";
        document.getElementById("testo").innerHTML=msgUscita;
        break;
    }

    else
    {
        
    }
    
}
console.log(msgUscita);
document.getElementById("testo").innerHTML=msgUscita;   