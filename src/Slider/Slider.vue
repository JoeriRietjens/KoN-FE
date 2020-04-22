<template>
    
    <div class="sliderContainer">
      <input type="range" min="1" max="100" value="1" id="myRange" class="slider">
      <p>Value: <span id="Value"></span></p>
    </div>

</template>

<style lang="stylus">
p {
    margin-top: 200px;
    opacity: 75%;
  }

  .sliderContainer {
    width: 75%;
    margin-top: 200px;
  }

  .slider::after {
    content: "100";
    color: white;
    font-size: 2rem;
    position: absolute;
    left: 80%;
    top: 26%;
  }
  .slider::before {
    content: "0";
    color: white;
    font-size: 2rem;
    position: absolute;
    left: 80%;
    top: 26%;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      90deg,
      rgb(214, 214, 214) 60%,
      rgb(214, 214, 214) 60%
    );
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 12px;
    box-shadow: 0px 1px 10px 1px black;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
  }
</style>