import Link from 'next/link'
import { PageShell } from '@/lib/components'
export default function Login(){return <PageShell><main className="container section" style={{maxWidth:560}}><div className="card"><h1>Вход</h1><p className="muted">После подключения Supabase вход будет настоящим.</p><form className="form"><input className="input" placeholder="Email"/><input className="input" placeholder="Пароль" type="password"/><Link className="btn" href="/profile">Войти</Link><Link className="pill" href="/register">Создать аккаунт</Link></form></div></main></PageShell>}
