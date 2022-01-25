const Toggle = props => {

  return (
    <div className="toggle-container">
      <h6 className="explainer">Grain</h6>
      <div
        role="button"
        className="toggle-switch"
        data-toggled={props.state}
        onClick={() => props.setToggle(!props.state)}
      >
        <div className="toggle" />
      </div>
    </div>
  )
}

export default Toggle;