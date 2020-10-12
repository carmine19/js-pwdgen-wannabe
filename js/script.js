

    // let bodyBackground = document.getElementById('body-box');


    /* creo la data */
    const data = new Date();
    console.log(data)

    let actualHours = data.getHours();
    console.log(actualHours)

    let actualMinutes = data.getMinutes();
    console.log(actualMinutes)

    let actualSeconds = data.getSeconds();
    console.log(actualSeconds)

    let youLocalHours = document.getElementById('data').innerHTML ='Sono le ore:'+ '&nbsp' + actualHours + ':' + actualMinutes + ':' + actualSeconds;
    /* fine data */

    
    /* creo il generatore */

    let name = prompt('Come ti chiami?');
    console.log('ti chiami:' + name);

    let surname = prompt('Qual\'è il tuo cognome');
    console.log('il tuo cognome:' + surname);

    let preferdColours = prompt('ed il tuo colore preferito?')
    console.log('il tuo colore preferito:' + preferdColours);

    let randomNumber = Math.floor(Math.random() * 1989);
    console.log(randomNumber)



    const passwordUser = document.getElementById('password').innerHTML = name + surname + preferdColours + randomNumber;

    let passwordWhitText = document.getElementById('password').innerHTML = 'La tua password generatà è:' + '&nbsp'+ passwordUser;

    /* fine generatore */



