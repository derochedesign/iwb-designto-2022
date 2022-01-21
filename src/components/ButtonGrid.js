const ButtonGrid = props => {

  return (
    <div className="source-links item-list">
      <h6>Additional Information</h6>
      <div className="button-grid">
        { props.sources.map((source, i) => 
          <a href={source.url} key={i} rel="noopener" target={"_blank"}>
            <button>{source.title}</button>
          </a>
        )}
      </div>
    </div>
  )
}

export default ButtonGrid;