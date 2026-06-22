import Link from 'next/link'
export default function Login(){return <main className="container section"><h1>Вход</h1><form className="form card"><input placeholder="Email"/><input placeholder="Пароль" type="password"/><button className="btn main">Войти</button><Link href="/register">Создать аккаунт</Link></form></main>}
