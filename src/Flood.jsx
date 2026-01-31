import React from 'react';
import './Earthquake.css';
import { useTranslation } from 'react-i18next';

function Flood() {
  const { t } = useTranslation('flood');

  return (
    <div className="e-container">
      <div className="grid-layout">

        <aside className="instructions">
          <h2>{t('flood.instructionsTitle')}</h2>
          <div className="step">
            <br />
            <strong>{t('flood.before')}</strong>
            <ul>
              {t('flood.beforeList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <br />
          </div>
          <div className="step">
            <strong>{t('flood.during')}</strong>
            <ul>
              {t('flood.duringList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <br />
          </div>
          <div className="step">
            <strong>{t('flood.after')}</strong>
            <ul>
              {t('flood.afterList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="e-content">
          <section className="video-section">
            <h3>{t('flood.videoTitle')}</h3>
            <div className="video-box">
              <video width="600" controls>
                <source src="/assets/Flood-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="safety-kit">
            <h2>{t('flood.safetyKit')}</h2>
            <div className="kit-items">
              {Object.entries(t('flood.kitItems', { returnObjects: true })).map(([key, value]) => (
                <div className="item" key={key}>
                  <img src={`/assets/${key}.png`} alt={value} />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="drill-section">
            <button className="drill-btn">{t('flood.startDrill')}</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Flood;
