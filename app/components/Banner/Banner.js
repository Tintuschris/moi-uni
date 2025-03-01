'use client';
import { useEffect } from 'react';

export default function Banner() {
  useEffect(() => {
    if (window.UIkit) {
      const slideshow = document.querySelector('.tm-slideshow-gravity');
      if (slideshow) {
        window.UIkit.slideshow(slideshow, {
          autoplay: true,
          animation: 'puzzle',
          pauseOnHover: true,
          duration: 750,
          autoplayInterval: 10000,
          kenburns: false,
          kenburnsanimations: 'uk-animation-top-center',
          slices: 20,
          videomute: false,
        });
      }
    }
  }, []);

  return (
    <div className="tm-banner uk-grid">
      <section id="tm-hero" className="tm-hero uk-margin-remove uk-width-1-1 tm-hero uk-grid uk-grid-match">
        <div className="uk-width-1-1">
          <div className="uk-panel">
            <div className="tm-slideshow-gravity uk-slidenav-position tm-fullscreen-slideshow">
              <ul className="uk-slideshow tm-slideshow-fullscreen uk-overlay-active">
                <li>
                  <img
                    src="/images/demo/default/fullscreen/graduation_banner_final.png"
                    width="1900"
                    height="800"
                    alt="banner"
                  />
                  <div className="uk-overlay-panel uk-flex uk-flex-middle uk-overlay-slide-left">
                    <a
                      className="uk-button-primary uk-button-large uk-button"
                      href="https://www.mu.ac.ke/index.php/en/mediaa/announcements/1238-announcement-of-the-46th-graduation-ceremony-19th-december-2024.html"
                      target="_self"
                    >
                      Read more
                    </a>
                  </div>
                </li>
                <li>
                  <img
                    src="/images/demo/default/fullscreen/tvet_banner.png"
                    width="1900"
                    height="800"
                    alt="intake"
                  />
                  <div className="uk-overlay-panel uk-flex uk-flex-middle uk-overlay-slide-left">
                    <a
                      className="uk-button-primary uk-button-large uk-button"
                      href="https://shorturl.at/wuCKr"
                      target="_self"
                    >
                      Apply Now
                    </a>
                  </div>
                </li>
              </ul>
              <div className="uk-margin">
                <ul className="uk-dotnav uk-flex-right uk-hidden-touch">
                  <li data-uk-slideshow-item="0"><a href="https://www.mu.ac.ke/"></a></li>
                  <li data-uk-slideshow-item="1"><a href="https://www.mu.ac.ke/"></a></li>
                </ul>
              </div>
              <div className="tm-slidenav uk-position-absolute">
                <div className="tm-slidenav-container uk-flex">
                  <a
                    href="https://www.mu.ac.ke/"
                    className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-touch"
                    data-uk-slideshow-item="previous"
                  ></a>
                  <a
                    href="https://www.mu.ac.ke/"
                    className="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-touch"
                    data-uk-slideshow-item="next"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}