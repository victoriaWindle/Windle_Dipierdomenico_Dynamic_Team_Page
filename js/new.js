(() => {
    console.log("fired");

    const menuButton = document.querySelector(".menuButton"); 
    const menu = document.querySelector(".menu");
    const bottomSlider = document.querySelector(".menuBottom");
    
    var woodStains = ["var(--color11)", "var(--color6)", "var(--color10)", "var(--color1)"];
    var stainIndex = 1;
    const stainButton = document.querySelector("#stainWoodButton");
    const woodStainLayer = document.querySelector(".wrapperFog");


    const swapInfo = document.querySelector("#swapInfo");

    var group1Headings = ["Design and Media:", "Design and Media"];
    var gh1Index = 1;

    var g1h1Text = ["Photoshop: <span>30%</span>", "Photoshop: <span>40%</span"];
    var g1h1Index = 1;

    var g1h2Text = ["Illustrator: <span>20%</span>", "Illustrator: <span>20%</span>"];
    var g1h2Index = 1;

    var g1h3Text = ["3D Software: <span>15%</span>", "3D Software: <span>5%</span>"];
    var g1h3Index = 1;

    var g1h4Text = ["After Effects: <span>15%</span>", "After Effects <span>20%</span>"];
    var g1h4Index = 1;

    var g1h5Text = ["CAD Software: <span>10%</span>", "Adobe Premiere: <span>50%</span>"];
    var g1h5Index = 1;

    var g1h6Text = ["Other: <span>15%</span>", "Other: <span>15%</span>"];
    var g1h6Index = 1;

    var group2Headings = ["Development:", "Development"];
    var gh2Index = 1;

    var g2h1Text = ["HTML/CSS: <span>40%</span>", "HTML/CSS: <span>10%</span>"];
    var g2h1Index = 1;

    var g2h2Text = ["Wordpress: <span>50%</span>", "Wordpress: <span>5%</span>"];
    var g2h2Index = 1;

    var g2h3Text = ["JS: <span>5%</span>", "JS: <span>3%</span>"];
    var g2h3Index = 1;

    var g2h4Text = ["Python: <span>5%</span>", "Python: <span>3%</span>"];
    var g2h4Index = 1;

    var shortDesc = ["*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis quam mi. Aliquam nec suscipit nibh. Etiam scelerisque nunc ultricies elit fermentum cursus Praesent at nunc nisi. Aenean mollis erat eget eros aliquet, ac sollicitudin nisi aliquam. Nulla dictum, nisl a volutpat luctus, enim risus efficitur enim, non iaculis metus libero at ligula.", "Victoria Windle is a first year student at Fanshawe College. She is the 2020/2021 recipient of the TBK women in tech scholarship. Victoria enjoys design work. She also enjoys painting and traditional art in her spare time. "];
    var shortIndex = 1;

    var names = ["Spencer Dipierdomenico", "Victoria Windle"];
    var nameDex = 1;

    
    var homes = ["London, Ontario", "Walkerton, Ontario"];
    var homeDex = 1;

    
    var ages = ["Age <span>25</span>", "Age <span>18</span>"];
    var ageDex = 1;

    
    var catchP = ["100% Daily Effort", "100% Positivity"];
    var catchDex = 1;


    let menuToggle = () => {
      menu.classList.toggle('menuDown');    
      bottomSlider.classList.toggle('active');  
    }

    let stainWood = () => {
      //debugger;
      woodStainLayer.style.background = woodStains[stainIndex++%woodStains.length];
    }

    function swapPartnerInfo(){
      //debugger;

      document.getElementById('namePlate').innerHTML = names[nameDex++%names.length],
      document.getElementById('home').innerHTML = homes[homeDex++%homes.length],
      document.getElementById('age').innerHTML = ages[ageDex++%ages.length],
      document.getElementById('catchP').innerHTML = catchP[catchDex++%catchP.length],


      document.getElementById('group1').innerHTML = group1Headings[gh1Index++%group1Headings.length],
      document.getElementById('g1h1').innerHTML = g1h1Text[g1h1Index++%g1h1Text.length],
      document.getElementById('g1h2').innerHTML = g1h2Text[g1h2Index++%g1h2Text.length],
      document.getElementById('g1h3').innerHTML = g1h3Text[g1h3Index++%g1h3Text.length],
      document.getElementById('g1h4').innerHTML = g1h4Text[g1h4Index++%g1h4Text.length],
      document.getElementById('g1h5').innerHTML = g1h5Text[g1h5Index++%g1h5Text.length],
      document.getElementById('g1h6').innerHTML = g1h6Text[g1h6Index++%g1h6Text.length],

      
      document.getElementById('group2').innerHTML = group2Headings[gh2Index++%group2Headings.length],
      document.getElementById('g2h1').innerHTML = g2h1Text[g2h1Index++%g2h1Text.length],
      document.getElementById('g2h2').innerHTML = g2h2Text[g2h2Index++%g2h2Text.length],
      document.getElementById('g2h3').innerHTML = g2h3Text[g2h3Index++%g2h3Text.length],
      document.getElementById('g2h4').innerHTML = g2h4Text[g2h4Index++%g2h4Text.length],


      document.getElementById('shortDesc').innerHTML = shortDesc[shortIndex++%shortDesc.length];
    }


	//event listeners
	menuButton.addEventListener("click", menuToggle);
  stainButton.addEventListener("click", stainWood);
  swapInfo.addEventListener("click", swapPartnerInfo);

  })()