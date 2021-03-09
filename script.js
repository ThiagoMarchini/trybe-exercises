window.onload = function() {
  // As pessoas devem ter o poder de alterar:
  // Cor de fundo da tela;
  function setBackgroundColor(color) {
    let body = document.querySelector('body');
    body.style.backgroundColor = color;
  }
  
  document.getElementById("background").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        console.log(e.target.id + " was clicked");
        setBackgroundColor(e.target.className);
    }
  });

  // Cor do texto;
  function setTextColor(color) {
    let body = document.querySelector('body');
    body.style.color = color;
  }

  document.getElementById("text-color").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        setTextColor(e.target.className);
    }
  });

  // Tamanho da fonte;
  function setFontSize(size){
    let content = document.getElementsByTagName('p');
    for (const paragraph of content) {
      paragraph.style.fontSize = size;
    }
  }

  document.getElementById("fontSize").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        setFontSize(e.target.className);
    }
  });

  // Espaçamento entre as linhas do texto;
  function setFontSpacing(space) {
    let content = document.getElementsByTagName('p');
    for (const paragraph of content) {
      paragraph.style.lineHeight = space;
    }
  }

  document.getElementById("fontSpacing").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        setFontSpacing(e.target.className);
    }
  });

  // Tipo da fonte ( Font family )
  function setFontFamily(font) {
    let content = document.getElementsByTagName('p');
    for (const paragraph of content) {
      paragraph.style.fontFamily = font;
    }
  }
  
  document.getElementById("fontName").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        setFontFamily(e.target.className);
    }
  });

  // Alinhamento
  function setAlignment(align) {
    let content = document.getElementsByTagName('p');
    for (const paragraph of content) {
      paragraph.style.textAlign = align;
    }
  }
  
  document.getElementById("align").addEventListener("click",function(e) {
    // e.target is our targeted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        setAlignment(e.target.className);
    }
  });

}
