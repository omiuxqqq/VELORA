import { products, categories } from '@/lib/data'
import { Shell, ProductCard } from '@/lib/ui'
export default function Catalog(){return <Shell><div className="py-10"><h1 className="text-4xl font-black">Каталог</h1><div className="grid md:grid-cols-[240px_1fr] gap-6 mt-8"><aside className="card p-5 h-fit"><h3 className="font-bold mb-4">Категории</h3>{categories.map(c=><div className="py-2 text-slate-300" key={c}>{c}</div>)}</aside><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{products.map(p=><ProductCard p={p} key={p.id}/>)}</div></div></div></Shell>}
