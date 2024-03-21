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
        res = startValue + value
        slider.style.transform = `translate(${res}px)`
        startValue = res
    }

    arrowNext.onclick = () => {
      if(startValue > -sliderInnerWidth + sliderWidth) {
        changeSliderPos(-sliderWidth)
        arrowPref.style.display = ''
      } else {
        arrowNext.style.display = 'none'
      }
    } 
    arrowPref.onclick = () => {
      if(startValue < 0) {
        changeSliderPos(sliderWidth)
        arrowNext.style.display = ''
      } else {
        arrowPref.style.display = 'none'
      }
    }
  }
}

initCarousel()
