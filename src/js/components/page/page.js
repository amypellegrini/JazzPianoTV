import './page.css';
import { polyfill as promisePolyfill } from 'es6-promise';
import 'isomorphic-fetch';
import Markdown from 'react-markdown';

promisePolyfill();

export default React => {
  class Page extends React.Component {
    constructor(props) {
      super(props);
      const self = this;

      fetch('/pages/' + props.match.params.pageId + '.md')
        .then(response => {
          return response.text();
        })
        .then((body) => {
          self.setState((prevState, props) => {
            return {
              loading: false,
              pageContent: body
            };
          });
        });

      this.state = {
        loading: true,
        pageContent: null
      };
    }

    render() {
      const pageId = this.props.match.params.pageId;
      const classNames = [ 
        "jptv-page-container",
        pageId
      ];

      if (this.state.pageContent) {
        return (
          <div className={ classNames.join(' ') }>
            <Markdown source={this.state.pageContent} />
          </div>
        );
      }

      return <div className={ classNames.join(' ') }></div>;
    }
  }

  return Page;
}
