import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        <h3>{title}</h3>
    </header>
  )
}

Header.defaultProps = {
    title: 'Header',
    list: {}
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header