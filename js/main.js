(() => {
  console.log('fired up');

  let theIcon = document.querySelector('.iconContainer img'),
      theIcons = document.querySelectorAll('.iconContainer img');
      overlay = document.querySelectorAll('.overlay')
      overlays = document.querySelectorAll('.overlay')

  function logMyId() {
      console.log('clicked on an image');
      console.log("Icon Selected:", this.id);
  }

  function hideThis() {
    document.querySelector(this.id).style.display="none";
  }

  theIcon.addEventListener("click", logMyId);

  theIcons.forEach(icon => icon.addEventListener("click", logMyId));

  

})()

function lightMode() {
    document.documentElement.style.setProperty('--color1', '#5BC2E7');
    document.documentElement.style.setProperty('--color2', '#fff');
    document.documentElement.style.setProperty('--color3', '#e75bbd');
    document.documentElement.style.setProperty('--color4', '#a9e8ff');
    document.documentElement.style.setProperty('--color5', '#000000');
    document.documentElement.style.setProperty('--color6', '#c7339a');

    }

    function darkMode() {
      document.documentElement.style.setProperty('--color1', '#222');
      document.documentElement.style.setProperty('--color2', '#cecece');
      document.documentElement.style.setProperty('--color3', '#8f3535');
      document.documentElement.style.setProperty('--color4', '#555');
      document.documentElement.style.setProperty('--color5', '#999');
      document.documentElement.style.setProperty('--color6', '#c73333');

      }

      function changeSize() {
        var x = document.getElementById("grid-container");
        if (x.style.maxWidth === "100%") {
          x.style.maxWidth = "1200px";
        } else {
          x.style.maxWidth = "100%";
        }
      } 

    function pdfBigger() {
      var x = document.getElementById("infoSheet");
      if (x.style.height === "25vh") {
        x.style.height = "100vh";
      } else {
        x.style.height = "25vh";
      }
    } 

    function mobileMenu() {
      var x = document.getElementById("menu");
      if (x.style.top === "0%") {
        x.style.top = "-100%";
      } else {
        x.style.top = "0%";
      }

      var x = document.getElementById("menuBottom");
      if (x.style.bottom === "0px") {
        x.style.bottom = "-130px";
      } else {
        x.style.bottom = "0px";
      }
    } 
    
function reply_click(clicked_id) {
        console.log(clicked_id);
    }


    
    function pdfBigger() {
      var x = document.getElementById("infoSheet");
      if (x.style.height === "25vh") {
        x.style.height = "100vh";
      } else {
        x.style.height = "25vh";
      }
    } 

    function hideThis(){
      document.querySelector(this.id).toggleClass('hideMe');
    }
