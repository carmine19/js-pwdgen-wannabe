

    

    let name = prompt('Come ti chiami?');
    console.log('ti chiami:' + name);

    let surname = prompt('Qual\'è il tuo cognome');
    console.log('il tuo cognome:' + surname);

    let preferdColours = prompt('ed il tuo colore preferito?')
    console.log('il tuo colore preferito:' + preferdColours);



    const passwordUser = document.getElementById('password').innerHTML = name + surname + preferdColours;

    let passwordWhitText = document.getElementById('password').innerHTML = 'La tua password generatà è:' + '&nbsp'+ passwordUser;




