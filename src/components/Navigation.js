const Navigation = ({ title }) => {
  return (
    <div>
      <h1 style={headingStyle}>{title}</h1>
    </div>
  )
}

// CSS in JS
const headingStyle = {
  color: 'red',
  backgroundColor: 'aqua' 
}

export default Navigation
