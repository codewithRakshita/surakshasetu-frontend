import React from 'react';
import './Earthquake.css';
import { useTranslation } from 'react-i18next';

function Forestfiring() {
  const { t } = useTranslation('forestfiring');

  return (
    <div className="e-container">
      <div className="grid-layout">

        <aside className="instructions">
          <h2>{t('forestfiring.instructionsTitle')}</h2>

          <div className="step">
            <br />
            <strong>{t('forestfiring.before')}</strong>
            <ul>
              {t('forestfiring.beforeList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <br />
          </div>

          <div className="step">
            <strong>{t('forestfiring.during')}</strong>
            <ul>
              {t('forestfiring.duringList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <br />
          </div>

          <div className="step">
            <strong>{t('forestfiring.after')}</strong>
            <ul>
              {t('forestfiring.afterList', { returnObjects: true }).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="e-content">
          <section className="video-section">
            <h3>{t('forestfiring.videoTitle')}</h3>
            <div className="video-box">
              <video width="600" controls>
                <source src="/assets/ForestFire-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="safety-kit">
            <h2>{t('forestfiring.safetyKit')}</h2>
            <div className="kit-items">
              {Object.entries(t('forestfiring.kitItems', { returnObjects: true })).map(([key, value]) => (
                <div className="item" key={key}>
                  <img src={`/assets/${key}.png`} alt={value} />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="drill-section">
            <button className="drill-btn">{t('forestfiring.startDrill')}</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Forestfiring;
