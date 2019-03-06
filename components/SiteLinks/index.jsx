import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteKeyBase && (
            <li>
              <a href={config.siteKeyBase}>
                <i className="fa fa-keybase" aria-hidden="true" />
              </a>
            </li>
          )}
          {config.siteGithubUrl && (
            <li>
              <a href={config.siteGithubUrl}>
                <i className="fa fa-github-alt" aria-hidden="true" />
              </a>
            </li>
          )}
          {config.siteStackOverflow && (
            <li>
              <a href={config.siteStackOverflow}>
                <i className="fa fa-stack-overflow" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteLinkedInUrl && (
            <li>
              <a href={config.siteLinkedInUrl}>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
            </li>
          )}
          {config.siteTwitterUrl && (
            <li>
              <a href={config.siteTwitterUrl}>
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
          )}
          {config.siteEmail && (
            <li>
              <a href={`mailto:${config.siteEmail}`}>
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteBlog && (
            <li>
              <a href={config.siteBlog}>
                <i className="fa fa-medium" aria-hidden="true" />
              </a>
            </li>
          )}
          {config.siteUKC && (
            <li>
              <a href={config.siteUKC}>
                <i className="fa fa-picture-o" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
