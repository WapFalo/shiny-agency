import PropTypes from 'prop-types'
import defaultPicture from '../../assets/profile.png'
import styled from 'styled-components'

function Card({ label, title, picture }) {
  const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
  `
  const CardImage = styled.span`
    height: 80px;
    width: 80px;
    border-radius: 50%;
  `
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: defaultPicture,
}

export default Card
