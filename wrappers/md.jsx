import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

import SitePost from '../components/SitePost';
import SitePage from '../components/SitePage';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    switch (layout) {
      case 'page':
        template = <SitePage {...this.props} />;
        break;
      default:
        template = <SitePost {...this.props} />;
        break;
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
};

export default MarkdownWrapper;
