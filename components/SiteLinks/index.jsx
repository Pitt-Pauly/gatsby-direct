import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteLinkedInUrl && (
            <li>
              <a href={config.siteLinkedInUrl}><i className="fa fa-linkedin-square" /></a>
            </li>
          )}
          {config.siteTwitterUrl && (
            <li>
              <a href={config.siteTwitterUrl}>
                <i className="fa fa-twitter" />
              </a>
            </li>
          )}         
          {config.siteEmail && (
            <li>
              <a href={`mailto:${config.siteEmailUrl}`}>
                <i className="fa fa-envelope-o" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteGithubUrl && (
            <li>
              <a href={config.siteGithubUrl}>
                <i className="fa fa-github-alt" />
              </a>
            </li>
          )}
          {config.siteStackOverflow && (
            <li>
              <a href={config.siteStackOverflow}>
                <i className="fa fa-stack-overflow" />
              </a>
            </li>
          )}
        </ul>
        <ul>
        {config.siteUKC && (
            <li>
              <a href={config.siteUKC}>
                <i className="fa fa-picture-o" />
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
