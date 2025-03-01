'use client';
export default function MainHeader() {
  return (
    <div className="tm-header-container" data-uk-sticky>
      <div className="tm-header uk-flex uk-flex-middle uk-flex-space-between">
        <a className="tm-logo uk-hidden-small" href="/">
          <img src="/images/demo/default/logo/logo.svg" alt="school and education" width="260" height="90" />
        </a>
        <a className="tm-logo-small uk-visible-small" href="/">
          <img src="/images/demo/default/logo/logo.svg" alt="school and education" width="160" height="90" />
        </a>
        <div className="uk-flex uk-flex-middle uk-flex-space-between">
          <div className="uk-hidden-small">
            <nav className="tm-navbar uk-navbar">
              <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="/">Home</a></li>
                <li className="uk-parent">
                  <a href="/">About MU</a>
                  <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-2">
                    <div className="uk-grid uk-dropdown-grid">
                      <div className="uk-width-1-2">
                        <ul className="uk-nav uk-nav-navbar">
                          <li className="uk-parent">
                            <a href="/"><i className="uk-test"></i> About Us</a>
                            <ul className="uk-nav-sub">
                              <li><a href="/">Vision and Mission</a></li>
                              <li><a href="/">Philosophy and Core Values</a></li>
                              <li><a href="/">MU in Brief</a></li>
                              <li><a href="/">University Policies & Documents</a></li>
                            </ul>
                          </li>
                          <li><a href="/">Historical Background</a></li>
                          <li className="uk-parent">
                            <a href="/">University Governance</a>
                            <ul className="uk-nav-sub">
                              <li><a href="/">Chancellor</a></li>
                              <li><a href="/">Moi University Council</a></li>
                              <li><a href="/">Moi University Management</a></li>
                              <li><a href="/">Moi University Deans</a></li>
                              <li><a href="/">Moi University Directors</a></li>
                            </ul>
                          </li>
                          <li className="uk-parent">
                            <a href="/">Administrative Offices</a>
                            <ul className="uk-nav-sub">
                              <li><a href="/">Office of the Vice-Chancellor</a></li>
                              <li><a href="/">Office of the Deputy Vice Chancellor (A, P & S)</a></li>
                              <li><a href="/">Office of the Deputy Vice Chancellor (A, R, E & SA)</a></li>
                            </ul>
                          </li>
                          <li><a href="/" target="_blank">Schools</a></li>
                        </ul>
                      </div>
                      <div className="uk-width-1-2">
                        <ul className="uk-nav uk-nav-navbar">
                          <li><a href="/">Centres, Directorates & Institutes</a></li>
                          <li><a href="/">MU Choir</a></li>
                          <li><a href="/">Job Opportunities</a></li>
                          <li><a href="/">Collaborations</a></li>
                          <li><a href="/">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <a href="/" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
        </div>
      </div>
    </div>
  );
}