const products = [
  ['🎧','Беспроводные наушники Velora Pro X1','4 990 ₽','Электроника'],
  ['⌚','Смарт-часы Velora Watch 5','6 990 ₽','Электроника'],
  ['💡','Умная лампа Velora Light','1 490 ₽','Дом'],
  ['🎒','Рюкзак Velora Urban','2 890 ₽','Аксессуары'],
]
const reviews = [
  ['Иван Петров','Очень стильный магазин, заказ пришёл быстро.'],
  ['Мария Смирнова','Удобный сайт и приятный дизайн.'],
  ['Алексей Кузнецов','Хорошая поддержка и понятное оформление заказа.'],
]
function Header(){return <header className="top"><div className="wrap bar"><a className="logo" href="/"><span className="v">V</span><span>VELORA<br/><small>Online Store</small></span></a><nav className="nav"><a href="/#catalog">Каталог</a><a href="/#reviews">Отзывы</a><a href="/cart">Корзина</a><a href="/login">Войти</a><a className="ghost" href="/admin">Админ</a></nav></div></header>}
function Footer(){return <footer className="footer"><div className="wrap bar"><div className="logo"><span className="v">V</span><span>VELORA</span></div><div>Стиль. Качество. Выбор.</div><div>vi1344060@gmail.com · @omiuxqqq</div></div></footer>}
export default function Home(){return <><Header/><main className="wrap"><section className="hero"><div><span className="badge">Доставка по всей России</span><h1 className="h1">Стиль.<br/><span className="green">Качество.</span><br/>Выбор.</h1><p className="lead">VELORA — современный онлайн-магазин товаров для дома, стиля и технологий.</p><p><a className="btn" href="#catalog">Перейти в каталог</a> <a className="ghost" href="/register">Создать аккаунт</a></p></div><div className="panel crystal"><div className="bigv">V</div></div></section><section className="section"><div className="grid"><div className="card">🛡️ Безопасная оплата</div><div className="card">🚚 Доставка по РФ</div><div className="card">⭐ Реальные отзывы</div><div className="card">💬 Поддержка 24/7</div></div></section><section id="catalog" className="section"><h2 className="title">Хиты продаж</h2><div className="grid">{products.map((p,i)=><div className="card" key={p[1]}><div className="product-img">{p[0]}</div><p className="muted">{p[3]}</p><h3>{p[1]}</h3><div className="price">{p[2]}</div><p><a className="btn" href="/cart">В корзину</a></p></div>)}</div></section><section id="reviews" className="section"><h2 className="title">Отзывы</h2><div className="reviews">{reviews.map(r=><div className="card" key={r[0]}><h3>★★★★★</h3><b>{r[0]}</b><p className="muted">{r[1]}</p></div>)}</div></section></main><Footer/></>}
