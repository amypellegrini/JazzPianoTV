import './page.css';
import { polyfill as promisePolyfill } from 'es6-promise';
import 'isomorphic-fetch';
import Markdown from 'react-markdown';

promisePolyfill();

export default React => {
  class Page extends React.Component {
    constructor(props) {
      super(props);

      if (props.pageContent) {
        this.state = {
          loading: false,
          pageId: props.match.params.pageId,
          pageContent: props.pageContent
        };
      } else {
        this.state = {
          loading: true,
          pageId: props.match.params.pageId,
          pageContent: null
        };
      }
    }

    componentDidMount() {
      if (this.state.pageContent === null) {
        this.fetchPage(this.state.pageId);
      }
    }

    setPageContent(pageContent) {
      this.setState(() => {
        return {
          loading: false,
          pageContent: pageContent
        };
      });
    }

    fetchPage(pageId) {
      const self = this;

      return fetch('/pages/' + pageId + '.md')
        .then(response => {
          return response.text();
        })
        .then((body) => {
          self.setPageContent(body);
        })
        .catch(error => {
          return error;
        });
    }

    render() {
      const pageId = this.state.pageId;
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

      classNames.push('loading');

      return <div className={ classNames.join(' ') }></div>;
    }
  }

  return Page;
}
