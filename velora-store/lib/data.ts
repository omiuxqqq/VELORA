export const owner = { name:'Андрей Новиков', email:'vi1344060@gmail.com', telegram:'@omiuxqqq', role:'OWNER' }
export const categories = ['Электроника','Для дома','Аксессуары','Красота','Спорт и отдых','Автотовары']
export const products = [
 {id:1,name:'Беспроводные наушники Velora Pro X1',price:4990,oldPrice:6990,category:'Электроника',rating:4.8,reviews:128,badge:'NEW',image:'🎧'},
 {id:2,name:'Смарт-часы Velora Watch 5',price:6990,oldPrice:8990,category:'Электроника',rating:4.9,reviews:96,badge:'ХИТ',image:'⌚'},
 {id:3,name:'LED-светильник для дома',price:2490,oldPrice:3290,category:'Для дома',rating:4.7,reviews:54,badge:'SALE',image:'💡'},
 {id:4,name:'Органайзер премиум-класса',price:1590,oldPrice:2190,category:'Для дома',rating:4.6,reviews:42,badge:'NEW',image:'🗂️'},
 {id:5,name:'Рюкзак Velora Urban',price:2890,oldPrice:3990,category:'Аксессуары',rating:4.8,reviews:73,badge:'ХИТ',image:'🎒'},
 {id:6,name:'Беспроводная зарядка 3in1',price:2490,oldPrice:3490,category:'Электроника',rating:4.7,reviews:81,badge:'SALE',image:'🔋'}
]
export const reviews = [
 {id:1,name:'Иван Петров',rating:5,text:'Отличное качество, быстрая доставка и красивый дизайн магазина.',product:'Velora Pro X1'},
 {id:2,name:'Мария Смирнова',rating:5,text:'Понравилась упаковка и поддержка. Буду заказывать ещё.',product:'Velora Watch 5'},
 {id:3,name:'Алексей Кузнецов',rating:4,text:'Хороший товар, всё соответствует описанию.',product:'LED-светильник'}
]
export const orders = [
 {id:1041,client:'Иван Петров',sum:4990,status:'Оплачен',date:'Сегодня'},
 {id:1042,client:'Мария Смирнова',sum:6990,status:'В сборке',date:'Сегодня'},
 {id:1043,client:'Алексей Кузнецов',sum:2490,status:'Доставлен',date:'Вчера'}
]
