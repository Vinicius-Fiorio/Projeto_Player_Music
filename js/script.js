 window.onload = iniciar();
 //declarando variaveis para usar na barra de duração da musica
 var elementoAudio;
 var barraProgresso;
 var duracaoTotal;
 var update;
 //criei para usar na função aleatorio
 var aleatorio;
 //atribuindo os valores
 function iniciar(){
   elementoAudio = document.querySelector("audio");
   barraProgresso = document.getElementById("fader");
 }
//pengando o valor quando o usuario clicou(slider de duracao) e fazer o calculo para
//reproduzir a musica do respectivo valor que foi clicado

function seeker(){
   vbarra = document.querySelector('#fader').value;
   elementoAudio.currentTime = (elementoAudio.duration *vbarra)/100;
}

//fazendo calculo da duração e aribuindo o resultado para a barra de duração
function atualizarbarra(){
  if(!elementoAudio.paused){
    var duracaoTotal = document.querySelector("audio").duration;
    var resultado = (100*elementoAudio.currentTime)/duracaoTotal;
    barraProgresso.value = parseInt(resultado+1);

  if(barraProgresso.value == 100)
    if(lop == true){
      var vid = document.getElementById("audio");
      vid.loop = true;
    } else{
        if(aleatorio == true){
            alt();
        }else{
          var prox = document.getElementById('next');
          prox.click();
        }
      }
  }
}
     //muda o icone play/pause
    //iniciar e pausa a musica
 	function playPause(){
 	  var audio = document.querySelector("audio");
 		if(audio.paused){
 			audio.play();
      document.getElementById('play').className = 'fas fa-pause';
      update = setInterval(atualizarbarra, 1000);
    }else{
 			audio.pause();
      document.getElementById('play').className = 'fas fa-play';
      clearInterval(update);
    }
 	}
    //array com endereço das musicas ,titulos e nomes dos Artistas
    //------------------------------------------------------------------------------------------
    // endereço da musica   sua musica 1       sua musica 2         sua musica 3             sua musica 4
    var musicas = ['musicas/aronChupa.mp3','musicas/heads.mp3','musicas/latinoRemix.mp3','musicas/shakeShake.mp3'];
    //              Nome Musica 1      Nome Musica 2         Nome Musica 3         Nome Musica 4
    var titulo = ['Im an Albatraoz','Heads Will Roll', 'Festa no Apê - Remix', 'Shake Shake'];
    //             artista Musica 1   artista Musica 2  artista Musica 3    artista Musica 4
    var artista = ['Aron Chupa',   'Yeah Yeah Yeahs',   'Ram6 Bootleg',   'Quiet City'];
    //            foto da Musia 1     foto da Musia 2  foto da Musia 3   foto da Musia 4
    var fotos = ['img/aronChupa.jpg','img/head.jpg','img/latino.jpg','img/shake.jpg'];
    //--------------------------------------------------------------------------------------------
   var i=-1;
   //soma 1 ao i para ir pra proxima musica
   document.getElementById('next').addEventListener('click',function(){
     if(document.getElementById('love').className == 'favourite'){

     }else{
       document.getElementById("love").className = 'favourite';
        document.getElementById('loveIcone').className = 'fa fa-heart';
       c++;
     }

     i++;
    if(i>3){
      i=0;
      document.getElementById("audio").src = musicas[i];
      document.getElementById("fader").value = 0;
      MudaImg(i);
      document.getElementById('play').className = 'fas fa-play';
    }else{
    document.getElementById("audio").src = musicas[i];
    document.getElementById("fader").value = 0;
    MudaImg(i+1);
    document.getElementById('play').className = 'fas fa-play';
  }
  })
  //subtrai 1 ao i para ir pra musica anterior
  document.getElementById('previus').addEventListener('click',function(){
    if(document.getElementById('love').className == 'favourite'){

    }else{
      document.getElementById("love").className = 'favourite';
      document.getElementById('loveIcone').className = 'fa fa-heart';
      c++;
    }
    i--;
    if(i<0){
      i=3;
      document.getElementById("audio").src = musicas[i];
      document.getElementById("fader").value = 0;
      MudaImg(i);
      document.getElementById('play').className = 'fas fa-play';
    }else{
    document.getElementById("audio").src = musicas[i];
    document.getElementById("fader").value = 0;
    MudaImg(i+1);
    document.getElementById('play').className = 'fas fa-play';
  }
  })
//muda a imagem titulo e subtitulo do player
  function MudaImg(){
    if(i == 0){
      document.getElementById("imagem").src = fotos[i];
      document.getElementById("titulo").innerHTML= titulo[i];
      document.getElementById("artista").innerHTML= artista[i];
    }if(i == 1){
      document.getElementById("imagem").src = fotos[i];
      document.getElementById("titulo").innerHTML= titulo[i];
      document.getElementById("artista").innerHTML= artista[i];
    }if(i==2){
      document.getElementById("imagem").src = fotos[i];
      document.getElementById("titulo").innerHTML= titulo[i];
      document.getElementById("artista").innerHTML= artista[i];
    }if(i==3){
      document.getElementById("imagem").src = fotos[i];
      document.getElementById("titulo").innerHTML= titulo[i];
      document.getElementById("artista").innerHTML= artista[i];
    }
  }
//muda o audio /sem voulme ou com volume
  var p=0;
  document.getElementById('volume').addEventListener('click',function(){
      var numero = parseInt(p) + 1;
      p = numero;
  })
  function setvolume(){
		audio.volume = 1;
		if((p%2) == 0 ){
			audio.volume = 0;
      document.getElementById('volume').className = 'fas fa-volume-mute';
		}else{
			audio.volume = 1;
      document.getElementById('volume').className = 'fas fa-volume-up';
		}
	}
//faz ter o loop na musica se ativado
  var l=0;
  var lop =  false;
  document.getElementById('replay').addEventListener('click',function(){
      var numero = parseInt(l) + 1;
      l = numero;
  })
  function loop(){
    if((l%2) == 0){
      document.getElementById("replay").className = 'replay active';
      lop = true;
    }else{
      document.getElementById("replay").className = 'replay';
      lop = false;
    }
  }
  //faz o coracao ficar vermelho quando clicado
  var c = 0;
  document.getElementById('love').addEventListener('click',function(){
    c++;
    if((c%2)==0){
     document.getElementById("love").className = 'favourite';
     document.getElementById('loveIcone').className = 'fa fa-heart';
   }else{
     document.getElementById("love").className = 'favourite love';
     document.getElementById('loveIcone').className = 'fa fa-heart animated tada';
   }
 });

  var aleatorio = false;
//mudando a cor do icone quando clicado
  var a=0;
  document.getElementById('aleatorio').addEventListener('click',function(){
      var numero = parseInt(a) + 1;
      a = numero;
  })
  function random(){
    if((a%2) == 0){
    document.getElementById("aleatorio").className = 'shuffle active';
    aleatorio = true;
  }else{
    document.getElementById("aleatorio").className = 'shuffle';
    aleatorio = false;
  }
  }
  //gera um numero aleatorio e esse numero é a quantidade de vezes que vai clicar no next
  function alt(){
    var numeroAleatorio = parseInt(Math.random()*3 + 1);
    var numero = numeroAleatorio;
    var i;

    for(i= 0; i<numero; i++){
      var prox = document.getElementById('next');
      prox.click();
    }
  }
