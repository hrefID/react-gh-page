import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.text1}</p>
    </header>
  )
}

Header.defaultProps = {
  description: 'This is a description',
  text1: 'Text1'
}

Header.propTypes = {
  text1: PropTypes.string.isRequired,
}

export default Header
