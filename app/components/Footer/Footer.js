'use client';
export default function Footer() {
  return (
    <footer id="tm-footer" className="tm-footer uk-position-relative">
      <div className="uk-container uk-container-center">
        <div className="uk-flex uk-flex-middle uk-flex-space-between uk-text-center-small">
          <div className="tm-footer-left">
            <div className="uk-panel">
              <p style={{ textAlign: 'center' }}>
                Copyright © 2024 Moi University - Foundation of Knowledge. All Rights Reserved. Designed by Moi University,{' '}
                <a href="https://ict.mu.ac.ke" target="_blank" rel="noopener">
                  ICT Directorate
                </a>.
              </p>
            </div>
          </div>
          <div className="tm-footer-right">
            <div className="uk-panel">
              <div className="uk-text-right">
                <a href="https://www.facebook.com/moiuniversity" className="uk-icon-button uk-icon-facebook" target="_blank"></a>
                <a href="https://twitter.com/moiunikenya" className="uk-icon-button uk-icon-twitter" target="_blank"></a>
                <a href="https://www.youtube.com/watch?v=2vFXFsBNBvQ" className="uk-icon-button uk-icon-youtube" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}