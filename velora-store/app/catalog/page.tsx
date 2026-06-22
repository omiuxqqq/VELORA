import { PageShell, ProductCard } from '@/lib/components'
import { categories, products } from '@/lib/data'

export default function Catalog({ searchParams }: { searchParams?: { q?: string } }) {
  const q = (searchParams?.q || '').toLowerCase()
  const filtered = q ? products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : products
  return <PageShell><main className="container section layout"><aside className="panel card sidebar"><h3>Категории</h3>{categories.map(c=><a key={c} className="side-link" href="#">{c}</a>)}</aside><section><div className="section-title"><div><h1>Каталог</h1><p className="muted">{q ? `Результаты поиска: ${q}` : 'Выберите товары VELORA'}</p></div><select className="input" style={{maxWidth:220}}><option>Популярные</option><option>Сначала дешёвые</option><option>Сначала дорогие</option></select></div><div className="grid cols3">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div></section></main></PageShell>
}
