// Write your code here
import './index.css'

const PlanetItem = props => {
  const {listPlanet} = props
  const {name, imageUrl, description} = listPlanet
  return (
    <li className="container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="para-heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}
export default PlanetItem
