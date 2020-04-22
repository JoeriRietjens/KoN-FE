

    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");

    output.innerHTML = slider.Value;

    slider.oninput = function(){
      output.innerHTML = this.Value
    }
    slider.addEventListener("mousemove", function(){
      var x = slider.Value;
      var color = 'linear-gradient(90deg, rgb(117,252,117)' + x +'%, rgb(214,214,214)' + x + '%)';
      slider.style.background = color;
    })