create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  role text not null default 'USER',
  created_at timestamptz default now()
);

create table if not exists public.products (
  id bigserial primary key,
  name text not null,
  description text,
  price integer not null,
  old_price integer,
  category text,
  image_url text,
  stock integer default 0,
  rating numeric default 0,
  created_at timestamptz default now()
);

create table if not exists public.reviews (
  id bigserial primary key,
  product_id bigint references public.products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  author_name text not null,
  rating integer not null default 5,
  text text not null,
  is_published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.orders (
  id bigserial primary key,
  user_id uuid references auth.users(id) on delete set null,
  customer_name text not null,
  phone text,
  email text,
  address text,
  total integer not null default 0,
  status text not null default 'new',
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.reviews enable row level security;
alter table public.orders enable row level security;

create policy "Products are public" on public.products for select using (true);
create policy "Published reviews are public" on public.reviews for select using (is_published = true);
