'use client';

import { useState } from 'react';
import Link from 'next/link';

const UNIT_PRICE = 549;
const DEPOSIT_RATIO = 0.5; // %50 kapora

export default function SiparisPage() {
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({
    adSoyad: '',
    telefon: '',
    eposta: '',
    adres: '',
    ilIlce: '',
    postaKodu: '',
    not: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const total = UNIT_PRICE * quantity;
  const deposit = Math.round(total * DEPOSIT_RATIO);
  const remaining = total - deposit;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.adSoyad || !form.telefon || !form.adres || !form.ilIlce) {
      setError('Lütfen zorunlu alanları (*) doldurun.');
      return;
    }

    setSubmitting(true);

    // ─────────────────────────────────────────────────────────
    // TODO: iyzico Link entegrasyonu buraya gelecek.
    //
    // iyzico Link başvurun onaylandığında, burada:
    // 1) iyzico panelinden oluşturduğun ödeme linkini (veya
    //    iyzico API ile dinamik link oluşturma) çağıracaksın.
    // 2) Kullanıcıyı `deposit` (kapora) tutarı için o linke
    //    yönlendireceksin, örn:
    //
    //    const paymentLink = await fetch('/api/create-payment-link', {
    //      method: 'POST',
    //      body: JSON.stringify({ amount: deposit, ...form }),
    //    });
    //    window.location.href = paymentLink.url;
    //
    // Şimdilik ödeme adımı olmadan, siparişi "alındı" gösteriyoruz.
    // ─────────────────────────────────────────────────────────

    await new Promise((resolve) => setTimeout(resolve, 600)); // sahte gecikme
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="order-page">
        <div className="wrap">
          <div className="order-success">
            <div className="success-badge">✓</div>
            <h1>Siparişin alındı.</h1>
            <p>
              {form.adSoyad}, sipariş bilgilerin bize ulaştı. Kapora ödeme
              adımı (iyzico) yakında aktif olacak — şu an için seninle{' '}
              {form.telefon} numarasından iletişime geçeceğiz.
            </p>
            <div className="order-summary-box">
              <div className="row">
                <span>Adet</span>
                <span>{quantity}</span>
              </div>
              <div className="row">
                <span>Toplam tutar</span>
                <span>{total} TL</span>
              </div>
              <div className="row highlight">
                <span>Kapora (%50)</span>
                <span>{deposit} TL</span>
              </div>
              <div className="row">
                <span>Teslimatta kalan</span>
                <span>{remaining} TL</span>
              </div>
            </div>
            <Link href="/" className="btn btn-ghost">
              Ana sayfaya dön
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="order-page">
      <div className="wrap order-grid">
        <div className="order-form-col">
          <Link href="/" className="back-link">
            ← Ana sayfa
          </Link>
          <h1>Ön Sipariş</h1>
          <p className="order-lead">
            İlk üretim serisi sınırlı adettir. %50 kapora ile yerini
            ayırtırsın, kalanı teslimatta ödersin.
          </p>

          <form onSubmit={handleSubmit} className="order-form">
            <div className="field">
              <label>Ad Soyad *</label>
              <input
                type="text"
                name="adSoyad"
                value={form.adSoyad}
                onChange={handleChange}
                placeholder="Ad Soyad"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Telefon *</label>
                <input
                  type="tel"
                  name="telefon"
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="05xx xxx xx xx"
                />
              </div>
              <div className="field">
                <label>E-posta</label>
                <input
                  type="email"
                  name="eposta"
                  value={form.eposta}
                  onChange={handleChange}
                  placeholder="ornek@eposta.com"
                />
              </div>
            </div>

            <div className="field">
              <label>Adres *</label>
              <textarea
                name="adres"
                value={form.adres}
                onChange={handleChange}
                placeholder="Mahalle, cadde, sokak, no, daire"
                rows={3}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>İl / İlçe *</label>
                <input
                  type="text"
                  name="ilIlce"
                  value={form.ilIlce}
                  onChange={handleChange}
                  placeholder="Antalya / Serik"
                />
              </div>
              <div className="field">
                <label>Posta Kodu</label>
                <input
                  type="text"
                  name="postaKodu"
                  value={form.postaKodu}
                  onChange={handleChange}
                  placeholder="07xxx"
                />
              </div>
            </div>

            <div className="field">
              <label>Sipariş Notu (opsiyonel)</label>
              <textarea
                name="not"
                value={form.not}
                onChange={handleChange}
                placeholder="Eklemek istediğin bir şey var mı?"
                rows={2}
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <button type="submit" className="btn btn-submit" disabled={submitting}>
              {submitting ? 'Gönderiliyor...' : 'Siparişi Onayla'}
            </button>

            <p className="form-note">
              * Ödeme adımı (iyzico) entegrasyonu tamamlandığında, bu adımdan
              sonra kapora ödemesine yönlendirileceksin. Şu an için sipariş
              bilgin kaydedilir, seninle iletişime geçilir.
            </p>
          </form>
        </div>

        <div className="order-summary-col">
          <div className="summary-card">
            <h3>Sipariş Özeti</h3>

            <div className="summary-product">
              <div className="summary-thumb" />
              <div>
                <div className="summary-product-name">Wipzo Araç Kurutma Bezi</div>
                <div className="summary-product-spec">
                  800 GSM · Twisted-Loop · 70×90 cm
                </div>
              </div>
            </div>

            <div className="qty-control">
              <label>Adet</label>
              <div className="qty-buttons">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="summary-rows">
              <div className="row">
                <span>Birim fiyat</span>
                <span>{UNIT_PRICE} TL</span>
              </div>
              <div className="row">
                <span>Ara toplam</span>
                <span>{total} TL</span>
              </div>
              <div className="row divider" />
              <div className="row highlight">
                <span>Şimdi ödenecek (%50 kapora)</span>
                <span>{deposit} TL</span>
              </div>
              <div className="row muted">
                <span>Teslimatta ödenecek</span>
                <span>{remaining} TL</span>
              </div>
            </div>

            <div className="summary-note">
              İlk üretim serisi sınırlı adet · Tahmini teslim 3–4 hafta
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}