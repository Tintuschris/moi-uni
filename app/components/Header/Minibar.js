'use client';
import { useEffect } from 'react';
import '../../styles/marquee.css';

export default function Minibar() {
  useEffect(() => {
    if (window.jQuery) {
      window.jQuery('.marquee-with-options-672').marquee({
        speed: 35000,
        gap: 1000,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        pauseOnCycle: false,
      });
    }
  }, []);

  return (
    <div className="tm-minibar">
      <div className="marquee-with-options-672">
        <a
          href="https://www.mu.ac.ke/index.php/en/mediaa/announcements/1249-notice-to-all-students-deadline-for-the-20-registration-rule.html"
          target="_blank"
        >
          * * * NOTICE TO ALL STUDENTS: Deadline for the 20% Registration Rule * * *
        </a>
      </div>
    </div>
  );
}