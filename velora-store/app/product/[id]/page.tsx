import Link from 'next/link'
import { PageShell } from '@/lib/components'
import { money, products, reviews } from '@/lib/data'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id)) || products[0]
  return <PageShell><main className="container section"><div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}><div className="card product-img" style={{height:430,fontSize:150}}>{product.badge && <span className="badge">{product.badge}</span>}{product.image}</div><div className="card"><div className="eyebrow">{product.category}</div><h1>{product.name}</h1><p><span className="stars">★★★★★</span> {product.rating} ({product.reviews} отзывов)</p><div><span className="price">{money(product.price)}</span>{product.oldPrice && <span className="old">{money(product.oldPrice)}</span>}</div><p className="muted">{product.description}</p><div style={{display:'flex',gap:12,marginTop:20}}><Link className="btn" href="/cart">В корзину</Link><Link className="btn ghost" href="/checkout">Купить сейчас</Link></div><hr style={{borderColor:'var(--line)',margin:'24px 0'}}/><p>🚚 Быстрая доставка по всей России</p><p>🛡️ Гарантия качества</p><p>↩️ Возврат 14 дней</p></div></div><section className="section"><h2>Отзывы</h2><div className="grid cols3">{reviews.map(r=><div className="card" key={r.name}><div className="stars">★★★★★</div><b>{r.name}</b><p className="muted">{r.text}</p></div>)}</div></section></main></PageShell>
}
