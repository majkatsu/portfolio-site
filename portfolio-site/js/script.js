// Mode switcher element
const modeSwitch = document.getElementById('mode-switcher');

//Dark mode on/off variable
let darkMode = false;

// Light/Dark mode color variables
const darkModeColor = '#323d48';
const lightModeColor = '#dae5f0';
const darkModeTxtColor = '#5393D4';
const lightModeTxtColor = '#202122';
const body = document.getElementById('body');
const about = document.getElementsByClassName('about-text')
function modeSwitcher () {
  if (darkMode) {
      darkMode = false;
  } else {
      darkMode = true;
  }

  if (darkMode) {
      body.style.backgroundColor = darkModeColor;
      for(var i=0; i<about.length; i++){
        about[i].style.color = darkModeTxtColor;
    }

  } else {
      body.style.backgroundColor = lightModeColor;
      for(var i=0; i<about.length; i++){
        about[i].style.color = lightModeTxtColor;
    }
  }
}