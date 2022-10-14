var hora = new Date().getHours()
document.body.querySelector('div.hours').innerHTML = `Horário: ${hora} horas` // Show the Hour

{var wallpaper = document.body.style // Background color
var photo = document.body.querySelector('div.photo')  /* Time */}

 
if (hora >=1 && hora <=4){    // Madrugada
    if (hora == 1){document.body.querySelector('div.hours').innerHTML = `Horário: ${hora} hora`}
    wallpaper.background = '#363636'
    photo.innerHTML = '<img src="madrugada.jpg" alt="madrugada">'
}

 else if (hora < 12 && hora >4){    // Dia
    wallpaper.background = '#f5ba82'
    photo.innerHTML = '<img src="amanhecer.jpg" alt="manhã">'
}

else if (hora >= 12 && hora <18){   //Tarde
    wallpaper.background = '#D9BB9B'
    photo.innerHTML = '<img src="tarde.jpg" alt="tarde">'
}

else if (hora >= 18){
    wallpaper.background = '#000000'   //Noite
    photo.innerHTML = '<img src="noite.jpg" alt="noite">'
    
}
