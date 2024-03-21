function initCarousel() {
  let slider = document.querySelector('.carousel__inner')

  if (slider) {
    let sliderWidth = slider.offsetWidth,
        sliderInnerWidth = slider.scrollWidth,
        arrowNext = document.querySelector('.carousel__arrow_right'),
        arrowPref = document.querySelector('.carousel__arrow_left'),
        startValue = 0

    if(startValue === 0) {
      arrowPref.style.display = 'none'
    } else if (startValue === sliderInnerWidth) {
      arrowNext.style.display = 'none'
    }

    function changeSliderPos(value) {
        slider.style.transform = `translateX(${value}px)`
    }

    arrowNext.onclick = () => { 
      startValue -= sliderWidth
      if(startValue > -sliderInnerWidth + sliderWidth) {
        changeSliderPos(startValue)
        arrowPref.style.display = ''
      } else {
        changeSliderPos(startValue)
        arrowNext.style.display = 'none'
      }
    } 
    arrowPref.onclick = () => {
      startValue += sliderWidth
      if(startValue < 0) {
        changeSliderPos(startValue)
        arrowNext.style.display = ''
      } else {
        changeSliderPos(startValue)
        arrowPref.style.display = 'none'
      }
    }
  }
}

initCarousel()
