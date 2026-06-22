import Link from 'next/link'
import { PageShell } from '@/lib/components'
export default function Register(){return <PageShell><main className="container section" style={{maxWidth:560}}><div className="card"><h1>Регистрация</h1><form className="form"><input className="input" placeholder="Имя"/><input className="input" placeholder="Email"/><input className="input" placeholder="Телефон"/><input className="input" placeholder="Пароль" type="password"/><Link className="btn" href="/profile">Зарегистрироваться</Link></form></div></main></PageShell>}
