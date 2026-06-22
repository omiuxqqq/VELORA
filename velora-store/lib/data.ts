export type Product = {
  id: number
  name: string
  price: number
  oldPrice?: number
  category: string
  rating: number
  reviews: number
  badge?: string
  image: string
  description: string
}

export const owner = {
  name: 'Андрей Новиков',
  email: 'vi1344060@gmail.com',
  telegram: '@omiuxqqq',
  role: 'OWNER'
}

export const products: Product[] = [
  { id: 1, name: 'Беспроводные наушники Velora Pro X1', price: 4990, oldPrice: 6990, category: 'Электроника', rating: 4.8, reviews: 128, badge: 'NEW', image: '🎧', description: 'Шумоподавление, Bluetooth 5.3, до 30 часов работы и премиальный звук.' },
  { id: 2, name: 'Смарт-часы Velora Watch 5', price: 6990, oldPrice: 8990, category: 'Электроника', rating: 4.9, reviews: 90, badge: 'ХИТ', image: '⌚', description: 'Стильные часы с мониторингом здоровья, уведомлениями и влагозащитой.' },
  { id: 3, name: 'Умная лампа Velora Light', price: 1490, oldPrice: 1990, category: 'Дом', rating: 4.7, reviews: 57, badge: 'SALE', image: '💡', description: 'Мягкий свет, несколько режимов и управление со смартфона.' },
  { id: 4, name: 'Рюкзак Velora Urban', price: 2890, oldPrice: 3590, category: 'Аксессуары', rating: 4.9, reviews: 154, badge: 'NEW', image: '🎒', description: 'Городской рюкзак с отделением для ноутбука и влагозащитой.' },
  { id: 5, name: 'Органайзер премиум-класса', price: 1590, category: 'Дом', rating: 4.6, reviews: 46, image: '📦', description: 'Организация пространства дома и на рабочем месте.' },
  { id: 6, name: 'Портативная колонка Velora SoundBox', price: 3490, oldPrice: 4490, category: 'Электроника', rating: 4.8, reviews: 88, badge: 'ХИТ', image: '🔊', description: 'Мощный звук, глубокий бас и автономная работа до 12 часов.' }
]

export const categories = ['Все', 'Электроника', 'Дом', 'Аксессуары', 'Красота', 'Спорт']

export const reviews = [
  { id: 1, name: 'Иван Петров', text: '...', rating: 5, product: 'Velora Pro X1' },
  { id: 2, name: 'Мария Смирнова', text: '...', rating: 5, product: 'Velora Watch 5' },
  { id: 3, name: 'Алексей Кузнецов', text: '...', rating: 4, product: 'Velora Light' }
]

export const orders = [
  { id: 1048, customer: 'Иван Петров', total: 4990, status: 'Оплачен' },
  { id: 1049, customer: 'Мария Смирнова', total: 6990, status: 'В сборке' },
  { id: 1050, customer: 'Алексей Кузнецов', total: 1490, status: 'Доставлен' }
]

export function money(value: number) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽'
}
