create table if not exists profiles (id uuid primary key, email text unique not null, role text default 'USER', created_at timestamptz default now());
create table if not exists products (id bigint generated always as identity primary key, name text not null, price numeric not null, category text, image text, description text, created_at timestamptz default now());
create table if not exists reviews (id bigint generated always as identity primary key, product_id bigint, user_name text, rating int, text text, created_at timestamptz default now());
create table if not exists orders (id bigint generated always as identity primary key, customer_name text, email text, phone text, address text, status text default 'new', total numeric default 0, created_at timestamptz default now());
