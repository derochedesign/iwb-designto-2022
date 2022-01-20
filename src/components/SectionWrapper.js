import LineDivider from "components/LineDivider";

const SectionWrapper = ({children, split, title, className, refC}) => {
  return(
    <section className={`section-wrapper ${className}`} data-split={split} ref={refC}>
      <div className="section-wrapper-header">
        <h3 className="section-title">{title}</h3>
        <LineDivider />
      </div>
      {children}
    </section>
  )
}
export default SectionWrapper;