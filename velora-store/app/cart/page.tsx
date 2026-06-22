import Link from 'next/link'
import { PageShell } from '@/lib/components'
import { money, products } from '@/lib/data'

export default function Cart() {
  const items = products.slice(0,2)
  const total = items.reduce((s,p)=>s+p.price,0)
  return <PageShell><main className="container section"><h1>Корзина</h1><div className="layout"><section className="grid">{items.map(p=><div className="card" key={p.id} style={{display:'flex',gap:18,alignItems:'center'}}><div className="product-img" style={{width:110,height:110,fontSize:44}}>{p.image}</div><div style={{flex:1}}><b>{p.name}</b><p className="muted">1 шт.</p></div><div className="price">{money(p.price)}</div></div>)}</section><aside className="card sidebar"><h2>Итого</h2><p className="price">{money(total)}</p><Link className="btn" href="/checkout">Оформить заказ</Link></aside></div></main></PageShell>
}
