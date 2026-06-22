import type React from 'react'
import Link from 'next/link'
import { products } from './data'

function money(value: number) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽'
}

export function Header() {
  return <header className="top"><div className="container bar">
    <Link href="/" className="logo"><span className="vmark">V</span><span>VELORA<small>Online Store</small></span></Link>
    <form className="search" action="/catalog"><span>⌕</span><input name="q" placeholder="Найти товар..." /></form>
    <nav className="nav">
      <Link href="/catalog">Каталог</Link><Link href="/reviews">Отзывы</Link><Link href="/cart">Корзина</Link><Link href="/login">Войти</Link>
    </nav>
  </div></header>
}

export function Footer() {
  return <footer className="footer"><div className="container grid cols4">
    <div><div className="logo"><span className="vmark">V</span><span>VELORA<small>Online Store</small></span></div><p>Стиль. Качество. Выбор.</p></div>
    <div><b>Покупателям</b><p><Link href="/catalog">Каталог</Link></p><p><Link href="/reviews">Отзывы</Link></p><p><Link href="/checkout">Доставка и оплата</Link></p></div>
    <div><b>Контакты</b><p>vi1344060@gmail.com</p><p>@omiuxqqq</p><p>Доставка по всей России</p></div>
    <div><b>Мы принимаем</b><p>VISA • MIR • СБП • SberPay • T-Pay</p></div>
  </div></footer>
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>
}

export function ProductCard({ product }: { product: typeof products[number] }) {
  return <div className="card product">
    <Link href={`/product/${product.id}`} className="product-img">{product.badge && <span className="badge">{product.badge}</span>}<span>{product.image}</span></Link>
    <div className="muted">{product.category}</div>
    <Link href={`/product/${product.id}`}><b>{product.name}</b></Link>
    <div><span className="stars">★★★★★</span> <span className="muted">{product.rating} ({product.reviews})</span></div>
    <div><span className="price">{money(product.price)}</span>{product.oldPrice && <span className="old">{money(product.oldPrice)}</span>}</div>
    <div style={{display:'flex',gap:10}}><Link className="btn" href="/cart">В корзину</Link><Link className="btn ghost" href="/profile">♡</Link></div>
  </div>
}

export function AdminNav() {
  return <aside className="panel card sidebar">
    <div className="logo" style={{marginBottom:20}}><span className="vmark">V</span><span>VELORA<small>Admin</small></span></div>
    <Link className="side-link active" href="/admin">Панель управления</Link>
    <Link className="side-link" href="/admin/products">Товары</Link>
    <Link className="side-link" href="/admin/orders">Заказы</Link>
    <Link className="side-link" href="/reviews">Отзывы</Link>
    <Link className="side-link" href="/">На сайт</Link>
  </aside>
}
