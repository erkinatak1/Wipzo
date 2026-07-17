'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    q: 'Bu bez gerçekten tek geçişte kurutuyor mu?',
    a: '800 GSM twisted-loop dokuma sayesinde orta boy bir binek aracı tek bezle kurutabilirsiniz. Çok kirli/tozlu yüzeylerde ikinci bir silim önerilir.',
  },
  {
    q: 'Teslimat ne kadar sürer?',
    a: 'İlk üretim serisi sınırlı adettir. Sipariş sonrası üretim ve kargo dahil tahmini 3–4 hafta içinde elinize ulaşır. Süreç boyunca bilgilendirme yapılır.',
  },
  {
    q: 'İade koşulları nedir?',
    a: 'Ambalajı açılmamış ürünlerde teslimattan itibaren 14 gün içinde iade kabul edilir. Detaylar için iade politikamıza bakabilirsiniz.',
  },
  {
    q: 'Neden %70/30 malzeme oranı?',
    a: 'Poliamid oranı arttıkça kumaş daha yumuşak ve emici olur. %70/30 oranı, dayanıklılık ile emicilik arasında dengeyi koruyan, premium detailing havlularında tercih edilen bir reçetedir.',
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <nav>
        <div className="wrap">
          <div className="logo">
            <span className="dot"></span>WIPZO
          </div>
          <div className="navlinks">
            <a href="#teknoloji">Teknoloji</a>
            <a href="#speklist">Spesifikasyon</a>
            <Link href="/kullanim">Kullanım</Link>
            <a href="#sss">SSS</a>
          </div>
          <Link href="/siparis" className="btn">
            Ön Sipariş Ver
          </Link>
        </div>
      </nav>

      <main>
        <header className="hero">
          <div className="loop-texture"></div>
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">Denizli&apos;de dokunuyor</div>
              <h1>
                Tek bez.
                <br />
                <em>Sıfır iz.</em>
              </h1>
              <p className="lead">
                Wipzo, 800 GSM twisted-loop dokuma ile aracınızı tek geçişte
                kurutur, cam ve boya üzerinde su izi bırakmaz. Ne yaptığımızı
                saklamıyoruz — her rakamı etiketimizde görebilirsiniz.
              </p>
              <div className="hero-cta">
                <Link href="/siparis" className="btn">
                  Ön Sipariş Ver — 549 TL
                </Link>
                <button className="btn btn-ghost">Teknolojiyi İncele ↓</button>
              </div>
              <div className="hero-note">
                İlk üretim serisi sınırlı adet · Tahmini teslim 3–4 hafta
              </div>
            </div>
            <div className="spec-tag-wrap">
              <div className="product-image-wrap">
                <Image
                  src="/wipzo-bez.jpg"
                  alt="Wipzo 800 GSM twisted loop mikrofiber araç kurutma bezi"
                  width={480}
                  height={600}
                  priority
                  className="product-image"
                />
              </div>
              <div className="spec-tag">
                <h4>Kumaş Etiketi</h4>
                <div className="spec-row">
                  <span className="k">Gramaj</span>
                  <span className="v">800 GSM</span>
                </div>
                <div className="spec-row">
                  <span className="k">Karışım</span>
                  <span className="v">%70 PES / %30 PA</span>
                </div>
                <div className="spec-row">
                  <span className="k">Dokuma</span>
                  <span className="v">Twisted-Loop</span>
                </div>
                <div className="spec-row">
                  <span className="k">Kenar</span>
                  <span className="v">Kaplı Şerit</span>
                </div>
                <div className="spec-row">
                  <span className="k">Ölçü</span>
                  <span className="v">70 × 90 cm</span>
                </div>
                <div className="spec-row">
                  <span className="k">Üretim</span>
                  <span className="v">Denizli, TR</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="light problem">
          <div className="wrap">
            <div className="section-label">Sorun</div>
            <h2>Su izi, yanlış dokumanın bıraktığı bir imza gibidir.</h2>
            <p>
              Düz dokuma bezler nemi yüzeyde gezdirir, kurutmaz. Twisted-loop
              yapı ise her ilmeği bir emme noktasına çevirir — su bezin içine
              çekilir, boyada kalmaz.
            </p>

            <div className="compare">
              <div className="bad">
                <div className="compare-image-wrap">
                  <Image
                    src="/su-izli-yuzey.jpg"
                    alt="Standart bezle silinmiş, su izi kalan araç yüzeyi"
                    width={520}
                    height={320}
                    className="compare-image"
                  />
                </div>
                <h5>Standart Bez</h5>
                <p>
                  Düz dokuma, düşük gramaj. Su yüzeyde gezinir, kurulama
                  sonrası ince iz bırakır. Ham/dikişli kenar boyayı
                  çizebilir.
                </p>
              </div>
              <div className="good">
                <div className="compare-image-wrap">
                  <Image
                    src="/wipzo-sonrasi.jpg"
                    alt="Wipzo ile kurutulmuş, izsiz araç yüzeyi"
                    width={520}
                    height={320}
                    className="compare-image"
                  />
                </div>
                <h5>Wipzo — Twisted-Loop</h5>
                <p>
                  800 GSM yoğunluk, bükümlü ilmek yapısı suyu hızla emer.
                  Kaplı şerit kenar, ham kumaş temas etmez — çizik riski
                  yok.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="teknoloji">
          <div className="wrap">
            <div className="section-label">Teknoloji</div>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,42px)', maxWidth: 600 }}>
              Vaat değil, ölçülebilir üç fark.
            </h2>

            <div className="tech-grid">
              <div className="tech-card">
                <div className="weave-diagram">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
                <h3>Twisted-Loop Dokuma</h3>
                <p>
                  Her iplik hafifçe bükülerek örülür, yüzey alanı artar.
                  Standart düz dokumaya göre çok daha fazla su tutma
                  kapasitesi sağlar.
                </p>
              </div>
              <div className="tech-card">
                <span className="num">GSM / 800</span>
                <h3>Yüksek Gramaj</h3>
                <p>
                  Gramaj arttıkça bezin kalınlığı ve emiciliği artar. 800 GSM,
                  günlük kullanım bezleri ile profesyonel detailing havluları
                  arasındaki tatlı nokta.
                </p>
              </div>
              <div className="tech-card">
                <span className="num">0 mm</span>
                <h3>Kaplı Şerit Kenar</h3>
                <p>
                  Ham kumaş kenarı, dokunmuş bir şeritle tamamen kapatılır.
                  Boyayla temas eden yüzey her zaman yumuşak — çizik riski
                  oluşturmaz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="light" id="speklist">
          <div className="wrap">
            <div className="section-label">Şeffaflık</div>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,42px)', maxWidth: 600 }}>
              Etikette ne yazıyorsa, kutuda o var.
            </h2>
            <p className="ink-dim" style={{ marginTop: 16, maxWidth: 520 }}>
              Pazarlama isimleri yerine gerçek malzeme verisi. Karşılaştırmak
              isteyen herkes için tam liste burada.
            </p>

            <div className="spec-table">
              <div className="row">
                <div className="k">GRAMAJ</div>
                <div className="v">800 g/m²</div>
              </div>
              <div className="row">
                <div className="k">MALZEME</div>
                <div className="v">%70 Polyester / %30 Poliamid</div>
              </div>
              <div className="row">
                <div className="k">DOKUMA TİPİ</div>
                <div className="v">Twisted-Loop (bükümlü ilmek)</div>
              </div>
              <div className="row">
                <div className="k">KENAR İŞLEMİ</div>
                <div className="v">Kaplı şerit kenar (bound edge)</div>
              </div>
              <div className="row">
                <div className="k">ÖLÇÜ</div>
                <div className="v">70 × 90 cm</div>
              </div>
              <div className="row">
                <div className="k">ÜRETİM YERİ</div>
                <div className="v">Denizli, Türkiye</div>
              </div>
              <div className="row">
                <div className="k">İADE</div>
                <div className="v">Ambalajı açılmamış üründe 14 gün</div>
              </div>
            </div>
          </div>
        </section>

        <section className="light" id="sss">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <div className="section-label">SSS</div>
            <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: 8 }}>
              Merak edilenler
            </h2>

            <div style={{ marginTop: 32 }}>
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    className={`faq-item${isOpen ? ' open' : ''}`}
                    key={item.q}
                  >
                    <div className="faq-q" onClick={() => toggleFaq(index)}>
                      {item.q} <span className="plus">+</span>
                    </div>
                    <div
                      className="faq-a"
                      style={{ maxHeight: isOpen ? '300px' : '0px' }}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div className="wrap">
            <h2>İlk seriden yerinizi ayırtın.</h2>
            <p>
              Sınırlı adet üretimin ilk partisinde yer almak isteyenler için
              özel ön sipariş fiyatı.
            </p>
            <Link href="/siparis" className="btn">
              Ön Sipariş Ver — 399 TL
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="logo" style={{ fontSize: 16 }}>
            <span className="dot"></span>WIPZO
          </div>
          <div>wipzostore.com · Denizli, Türkiye</div>
        </div>
      </footer>
    </>
  );
}