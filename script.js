let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

var i = 0;
var elements = document.getElementsByClassName("introduction");

function typing() {
  if (i < elements.length) {
    var targetElement = elements[i];
    var text = targetElement.innerText;
    targetElement.style.opacity = 1;

    function typeNextCharacter(index, displayText) {
      if (index < text.length) {
        displayText += text.charAt(index);
        targetElement.innerHTML = displayText;
        setTimeout(function () {
          typeNextCharacter(index + 1, displayText);
        }, 50); 
      } else {
        i++;
        setTimeout(typing, 1);
      }
    }

    if (targetElement.classList.contains("introduction--3")) {
     
      targetElement.innerHTML = ""; 
      setTimeout(function () {
        typeNextCharacter(0, "");
      }, 1000); 
    } else {
      targetElement.innerHTML = text; 
      i++;
      setTimeout(typing, 1);
    }
  }
}

typing();

/*

const titles = document.querySelectorAll('.container-section h3');

titles.forEach((title) => {
 
  const button = document.createElement('span');
  button.textContent = title.textContent;

  const item = title.nextElementSibling;

  item.style.display = 'none';

  button.addEventListener('click', () => {
    if (item.style.display === 'none') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  title.parentNode.replaceChild(button, title);
});

*/
