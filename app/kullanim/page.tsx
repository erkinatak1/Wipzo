import Link from 'next/link';

export const metadata = {
  title: 'Wipzo Kullanım Kılavuzu',
  description: 'Wipzo araç kurutma bezinin doğru kullanımı ve bakım talimatları.',
};

const steps = [
  {
    title: 'Bezi tamamen açın',
    text: 'Katlanmış haliyle değil, tamamen açarak kullanın — geniş yüzey daha hızlı kurutur.',
  },
  {
    title: 'Hafif basınçla, tek yönde çekin',
    text: 'Bastırmadan, yüzey üzerinde tek yönde kaydırın. Twisted-loop dokusu suyu kendiliğinden emer, ovalamanıza gerek yok.',
  },
  {
    title: 'Islanan kısmı çevirin',
    text: 'Bez doyduğunda, kuru kalan bir bölümüne geçin veya hafifçe sıkıp devam edin.',
  },
  {
    title: 'Kullanım sonrası açık halde kurutun',
    text: 'Kapalı/nemli bırakmayın, küflenme riskini önlemek için asarak veya sererek kurutun.',
  },
];

const careDos = [
  '30°C\'de, hassas yıkama programında yıkayın',
  'Havada kurutun, yüksek ısıda kurutmayıcı kullanmayın',
  'Diğer mikrofiber bezlerle birlikte yıkayın',
];

const careDonts = [
  'Yumuşatıcı kullanmayın — mikrofiberin emiciliğini bozar',
  'Çamaşır suyu / ağartıcı kullanmayın',
  'Havlu, kumaş, pamuklu ürünlerle birlikte yıkamayın (tüy bırakabilir)',
];

export default function KullanimPage() {
  return (
    <main className="guide-page">
      <div className="wrap guide-wrap">
        <Link href="/" className="back-link">
          ← Ana sayfa
        </Link>

        <div className="eyebrow">Kullanım Kılavuzu</div>
        <h1>Wipzo&apos;yu doğru kullanmanın yolu.</h1>
        <p className="guide-lead">
          800 GSM twisted-loop dokusundan en iyi performansı almak için bu
          kısa rehberi takip edin.
        </p>

        <div className="video-frame">
          <div className="video-placeholder">
            <span>Kullanım videosu yakında burada</span>
          </div>
        </div>

        <section className="guide-section">
          <h2>Kullanım Adımları</h2>
          <div className="steps-list">
            {steps.map((step, i) => (
              <div className="step-item" key={step.title}>
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="guide-section">
          <h2>Bakım</h2>
          <div className="care-grid">
            <div className="care-col care-do">
              <h4>Yapın</h4>
              <ul>
                {careDos.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="care-col care-dont">
              <h4>Yapmayın</h4>
              <ul>
                {careDonts.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="guide-footer-note">
          Sorun mu yaşıyorsun?{' '}
          <a href="https://wa.me/905427650661" target="_blank" rel="noopener noreferrer">
            WhatsApp&apos;tan yaz
          </a>
          , yardımcı olalım.
        </div>
      </div>
    </main>
  );
}