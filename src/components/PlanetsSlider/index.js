// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        {planetsList.map(eachItem => (
          <ul key={eachItem.id}>
            <PlanetItem listPlanet={eachItem} key={eachItem.id} />
          </ul>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
