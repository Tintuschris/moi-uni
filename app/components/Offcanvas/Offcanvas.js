'use client';
export default function Offcanvas() {
  return (
    <div id="offcanvas" className="uk-offcanvas">
      <div className="uk-offcanvas-bar uk-offcanvas-bar-flip">
        <div className="uk-panel">
          <form id="search-284" className="uk-search" action="/" method="post">
            <input className="uk-search-field" type="text" name="searchword" placeholder="search..." />
            <input type="hidden" name="task" value="search" />
            <input type="hidden" name="option" value="com_search" />
            <input type="hidden" name="Itemid" value="781" />
          </form>
        </div>
        <div className="uk-panel">
          <h4 className="uk-margin-remove">Talk to us</h4>
          <a href="tel:+254 790940508">0790 940508</a>
        </div>
        <ul className="uk-nav uk-nav-parent-icon uk-nav-offcanvas" data-uk-nav="{}">
          <li className="uk-active"><a href="/">Home</a></li>
          <li className="uk-parent">
            <a href="#">About MU</a>
            <ul className="uk-nav-sub">
              <li className="uk-parent">
                <a href="https://www.mu.ac.ke/index.php/en/about-moi-university/about-moi.html">
                  <i className="uk-test"></i> About Us
                </a>
                <ul>
                  <li><a href="https://www.mu.ac.ke/index.php/en/about-moi-university/about-moi/vision-and-mission.html">Vision and Mission</a></li>
                  <li><a href="https://www.mu.ac.ke/index.php/en/about-moi-university/about-moi/philosophy-and-core-values.html">Philosophy and Core Values</a></li>
                  <li><a href="https://www.mu.ac.ke/index.php/en/about-moi-university/about-moi/mu-in-brief.html">MU in Brief</a></li>
                  <li><a href="https://www.mu.ac.ke/index.php/en/about-moi-university/about-moi/university-policies-documents.html">University Policies & Documents</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}