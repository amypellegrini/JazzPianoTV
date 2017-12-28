import './page.css';

export default React => {
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loading: true };
    }

    render() {
      const loadingClass = this.state.loading ? "loading" : "";
      const classNames = [ 
          "jptv-page-container",
          loadingClass
        ];

      return <div className={ classNames.join(' ') }></div>;
    }
  }

  return Page;
}
