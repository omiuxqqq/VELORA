import Link from 'next/link'
import { PageShell, ProductCard } from '@/lib/components'
import { products } from '@/lib/data'

export default function Home() {
  return <PageShell><main className="container">
    <section className="hero">
      <div className="hero-card"><div className="eyebrow">Доставка по всей России</div><h1 className="h1">Стиль.<br/><span>Качество.</span><br/>Выбор.</h1><p className="muted">VELORA — современный онлайн-магазин товаров для дома, стиля и технологий. Удобный каталог, быстрый заказ и поддержка клиентов.</p><div style={{display:'flex',gap:12,marginTop:24}}><Link className="btn" href="/catalog">Перейти в каталог →</Link><Link className="btn ghost" href="/reviews">Отзывы</Link></div></div>
      <div className="hero-card hero-art"><div className="crystal">💎</div></div>
    </section>
    <section className="section grid features"><div className="feature">🛡️<b> Безопасная оплата</b><p className="muted">Платежи защищены</p></div><div className="feature">🚚<b> Доставка по РФ</b><p className="muted">От Калининграда до Владивостока</p></div><div className="feature">↩️<b> Возврат 14 дней</b><p className="muted">Лёгкий возврат товара</p></div><div className="feature">🎧<b> Поддержка 24/7</b><p className="muted">Всегда на связи</p></div><div className="feature">⭐<b> Бонусы</b><p className="muted">Скидки за отзывы</p></div></section>
    <section className="section"><div className="section-title"><h2>Хиты продаж</h2><Link className="pill" href="/catalog">Смотреть все →</Link></div><div className="grid cols3">{products.slice(0,6).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
  </main></PageShell>
}
