import { AdminNav, PageShell } from '@/lib/components'
import { money, orders, products } from '@/lib/data'

export default function Admin() {
  const revenue = orders.reduce((s,o)=>s+o.total,0)
  return <PageShell><main className="container section admin"><AdminNav /><section><h1>Админ-панель VELORA</h1><p className="muted">Доступ OWNER будет включён после подключения Supabase Auth.</p><div className="kpi"><div className="card"><p className="muted">Выручка</p><h2>{money(revenue)}</h2></div><div className="card"><p className="muted">Заказы</p><h2>{orders.length}</h2></div><div className="card"><p className="muted">Товары</p><h2>{products.length}</h2></div><div className="card"><p className="muted">Клиенты</p><h2>356</h2></div></div><div className="card" style={{marginTop:20}}><h2>Последние заказы</h2><table className="table"><tbody>{orders.map(o=><tr key={o.id}><td>#{o.id}</td><td>{o.customer}</td><td>{money(o.total)}</td><td>{o.status}</td></tr>)}</tbody></table></div></section></main></PageShell>
}
