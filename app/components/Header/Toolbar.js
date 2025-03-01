'use client';
export default function Toolbar() {
  return (
    <div id="tm-toolbar" className="tm-toolbar">
      <div className="uk-container uk-container-center uk-clearfix">
        <div className="uk-float-left">
          <div className="uk-panel">
            <a href="/" className="uk-icon-button uk-icon-twitter" target="_blank"></a>
            <a href="/" className="uk-icon-button uk-icon-facebook" target="_blank"></a>
            <a href="/" className="uk-icon-button uk-icon-youtube" target="_blank"></a>
          </div>
        </div>
        <div className="uk-float-right uk-hidden-small">
          <form
            id="search-227"
            className="uk-search"
            action="/"
            method="post"
            data-uk-search="{'source': '/', 'param': 'searchword', 'msgResultsHeader': 'Search Results', 'msgMoreResults': 'More Results', 'msgNoResults': 'No results found', flipDropdown: 1}"
          >
            <input className="uk-search-field" type="text" name="searchword" placeholder="search..." />
            <input type="hidden" name="task" value="search" />
            <input type="hidden" name="option" value="com_search" />
            <input type="hidden" name="Itemid" value="502" />
          </form>
        </div>
        <div className="uk-float-right">
          <div className="uk-panel">
            <div className="uk-button-dropdown" data-uk-dropdown="">
              <a className="uk-button-link uk-button" href="/" target="_self">
                <span style={{ fontSize: '10pt' }}>Campuses & Constituent Colleges</span>
                <i className="uk-icon-angle-down"></i>
              </a>
              <div className="uk-dropdown uk-dropdown-small uk-color">
                <ul className="uk-nav uk-nav-dropdown">
                  <li>Main Campus</li>
                  <li>Eldoret Town Campus</li>
                  <li><a title="Nairobi Campus" href="/" target="_blank" rel="noopener noreferrer">Nairobi Campus</a></li>
                  <li><a>Coast Campus</a></li>
                  <li>College of Health Sciences</li>
                  <li><a title="Bomet University College" href="/">Bomet University College</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-panel">
            <div className="uk-button-dropdown" data-uk-dropdown="">
              <a className="uk-button-link uk-button" href="/" target="_self">
                <span style={{ fontSize: '9pt' }}>Staff</span>
                <i className="uk-icon-angle-down"></i>
              </a>
              <div className="uk-dropdown uk-dropdown-small uk-color">
                <ul className="uk-nav uk-nav-dropdown">
                  <li><a title="Staff Mail" href="/" target="_blank" rel="noopener">Staff Mail</a></li>
                  <li><a title="Staff Portal" href="/" target="_blank" rel="noopener">Staff Portal</a></li>
                  <li><a title="Staff Portal" href="/" target="_blank" rel="noopener">E-Learning Portal</a></li>
                  <li><a title="Staff Downloads" href="/" target="_blank" rel="noopener">Downloads</a></li>
                  <li><a href="/" target="_blank" rel="noopener">KENET Web Conference</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-panel">
            <ul className="uk-subnav uk-subnav-line">
              <li><a href="/" target="_blank" rel="noopener noreferrer">First-Years 2024</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Alumni</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">E-Learning Portal</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Apply Now!</a></li>
              <li><a href="/">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}