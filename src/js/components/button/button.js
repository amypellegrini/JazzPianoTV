import './button.css';

export default React => (props) => {
  return (
    <button className="jptv-button"
            onClick={ props.onClick }>{ props.label }</button>
  )
}