import './button.css';

export default React => (props) => {
  return (
    <button className="jptv-button"
            type={ props.type }
            onClick={ props.onClick }>{ props.label }</button>
  )
}