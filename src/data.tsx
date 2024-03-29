export interface Record {
  id: string;
  name: string;
  categories: {
    [category: string]: {
      dish: string;
      dish_ru: string;
      glass_price: string;
      "30ml_price": string;
      "60ml_price": string;
      "180ml_price": string;
      bottle_price: string;
      ingridients: string;
      ingridients_ru: string;
      price: string;
      section: string;
      category: string;
    }[];
  };
}

export const data = {
  id: "BEVERAGES",
  name: "BEVERAGES",
  categories: {
    LIQUEUR: [
      {
        price: "",
        glass_price: "",
        ingridients_ru: "",
        "60ml_price": "",
        "30ml_price": "",
        category: "LIQUEUR",
        section: "",
        ingridients: "",
        dish_ru: "Текила Шот",
        "180ml_price": "",
        bottle_price: "",
        dish: "Tequila Shots",
      },
      {
        price: "",
        "180ml_price": "",
        dish_ru: "Бейлис",
        ingridients: "",
        category: "",
        dish: "Baileys",
        "30ml_price": "",
        section: "",
        glass_price: "",
        "60ml_price": "",
        ingridients_ru: "",
        bottle_price: "",
      },
      {
        "30ml_price": "",
        section: "",
        "60ml_price": "",
        bottle_price: "",
        category: "",
        glass_price: "",
        "180ml_price": "",
        dish_ru: "Куантро",
        price: "",
        ingridients: "",
        dish: "Cointreau",
        ingridients_ru: "",
      },
      {
        "30ml_price": "",
        ingridients: "",
        dish: "Martini (Rossi)",
        ingridients_ru: "",
        section: "",
        bottle_price: "",
        category: "",
        glass_price: "",
        price: "",
        "60ml_price": "",
        dish_ru: "Мартини (Росси)",
        "180ml_price": "",
      },
      {
        dish: "B52",
        bottle_price: "",
        "60ml_price": "",
        ingridients: "",
        section: "",
        category: "",
        ingridients_ru: "",
        "30ml_price": "",
        price: "",
        "180ml_price": "",
        dish_ru: "B52",
        glass_price: "",
      },
      {
        "30ml_price": "",
        glass_price: "",
        category: "",
        dish: "Menth, Kahlua Baileys)",
        section: "",
        bottle_price: "",
        dish_ru: "Мент, Калуа, Бейлис)",
        "180ml_price": "",
        "60ml_price": "",
        ingridients_ru: "",
        price: "",
        ingridients: "",
      },
      {
        ingridients_ru: "",
        category: "",
        bottle_price: "",
        glass_price: "",
        ingridients: "",
        section: "",
        "60ml_price": "",
        "180ml_price": "",
        dish_ru: "Ягер Бомб",
        price: "",
        "30ml_price": "",
        dish: "Jager Bomb",
      },
      {
        ingridients_ru: "",
        section: "",
        "30ml_price": "",
        glass_price: "",
        ingridients: "",
        dish: "Magic Moments",
        category: "",
        "60ml_price": "",
        bottle_price: "",
        dish_ru: "Волшебные моменты",
        "180ml_price": "",
        price: "",
      },
    ],
    "RUM WHITE AND DARK": [
      {
        ingridients_ru: "",
        glass_price: "",
        dish_ru: "Малибу",
        dish: "Malibu",
        category: "RUM WHITE AND DARK",
        "180ml_price": "",
        "30ml_price": "270",
        "60ml_price": "",
        section: "",
        ingridients: "",
        price: "",
        bottle_price: "",
      },
      {
        "30ml_price": "90",
        "60ml_price": "",
        ingridients_ru: "",
        ingridients: "",
        section: "",
        category: "",
        glass_price: "",
        dish_ru: "Бакарди Белый AND Лимон",
        bottle_price: "",
        dish: "Bacardi White AND Lemon",
        "180ml_price": "",
        price: "",
      },
      {
        "30ml_price": "120",
        ingridients: "",
        dish_ru: "Кабо",
        ingridients_ru: "",
        "180ml_price": "",
        category: "",
        section: "",
        dish: "Cabo",
        glass_price: "",
        bottle_price: "",
        "60ml_price": "",
        price: "",
      },
      {
        bottle_price: "",
        dish_ru: "Старик Монк",
        "60ml_price": "",
        "30ml_price": "50",
        price: "",
        ingridients: "",
        dish: "Old Monk",
        section: "",
        ingridients_ru: "",
        "180ml_price": "",
        category: "",
        glass_price: "",
      },
    ],
    GIN: [
      {
        dish: "Bombay Sapphire",
        ingridients: "",
        ingridients_ru: "",
        "60ml_price": "450",
        price: "",
        category: "GIN",
        bottle_price: "",
        section: "",
        dish_ru: "Бомбей Сапфир",
        "30ml_price": "260",
        glass_price: "",
        "180ml_price": "1250",
      },
      {
        "180ml_price": "300",
        section: "",
        bottle_price: "",
        "60ml_price": "120",
        category: "",
        dish_ru: "Blue Riband",
        glass_price: "",
        ingridients_ru: "",
        price: "",
        "30ml_price": "70",
        dish: "Blue Riband",
        ingridients: "",
      },
    ],
    FENNY: [
      {
        "60ml_price": "130",
        "180ml_price": "300",
        category: "FENNY",
        "30ml_price": "70",
        section: "",
        ingridients: "",
        price: "",
        bottle_price: "",
        ingridients_ru: "",
        glass_price: "",
        dish_ru: "Кешью",
        dish: "Cashew",
      },
      {
        dish: "Coconut",
        bottle_price: "",
        "30ml_price": "80",
        category: "",
        ingridients_ru: "",
        "60ml_price": "150",
        ingridients: "",
        glass_price: "",
        "180ml_price": "350",
        dish_ru: "Кокос",
        price: "",
        section: "",
      },
    ],
    "WHISKY REGULAR": [
      {
        ingridients: "",
        "60ml_price": "250",
        section: "",
        bottle_price: "",
        "30ml_price": "140",
        dish_ru: "Antiquity Blue",
        "180ml_price": "500",
        dish: "Antiquity Blue",
        price: "",
        glass_price: "",
        ingridients_ru: "",
        category: "WHISKY REGULAR",
      },
      {
        category: "",
        dish: "Signature",
        dish_ru: "Signature",
        ingridients: "",
        "30ml_price": "140",
        ingridients_ru: "",
        glass_price: "",
        bottle_price: "",
        section: "",
        "180ml_price": "490",
        "60ml_price": "250",
        price: "",
      },
      {
        ingridients: "",
        "180ml_price": "520",
        dish: "Blenders Pride",
        dish_ru: "Blenders Pride",
        price: "",
        bottle_price: "",
        "30ml_price": "140",
        category: "",
        "60ml_price": "230",
        glass_price: "",
        section: "",
        ingridients_ru: "",
      },
      {
        price: "",
        "180ml_price": "300",
        ingridients: "",
        dish_ru: "Royal Stag",
        category: "",
        glass_price: "",
        "30ml_price": "70",
        "60ml_price": "120",
        bottle_price: "",
        dish: "Royal Stag",
        ingridients_ru: "",
        section: "",
      },
      {
        "180ml_price": "260",
        dish: "Royal Challenge",
        ingridients_ru: "",
        price: "",
        glass_price: "",
        section: "",
        "30ml_price": "70",
        category: "",
        bottle_price: "",
        "60ml_price": "120",
        dish_ru: "Royal Challenge",
        ingridients: "",
      },
      {
        ingridients: "",
        "180ml_price": "280",
        category: "",
        "60ml_price": "110",
        glass_price: "",
        bottle_price: "",
        "30ml_price": "70",
        dish_ru: "Mc Dowell's Diet",
        dish: "Mc Dowell's Diet",
        section: "",
        ingridients_ru: "",
        price: "",
      },
    ],
    VODKA: [
      {
        price: "",
        ingridients: "",
        category: "VODKA",
        glass_price: "",
        dish_ru: "Absolut",
        bottle_price: "",
        "30ml_price": "230",
        "60ml_price": "410",
        section: "",
        "180ml_price": "1050",
        dish: "Absolut",
        ingridients_ru: "",
      },
      {
        "60ml_price": "150",
        bottle_price: "",
        "180ml_price": "410",
        section: "",
        price: "",
        category: "",
        ingridients: "",
        dish_ru: "Smirnoff",
        dish: "Smirnoff",
        "30ml_price": "90",
        ingridients_ru: "",
        glass_price: "",
      },
      {
        price: "",
        glass_price: "",
        "30ml_price": "80",
        ingridients: "",
        category: "",
        "180ml_price": "300",
        dish_ru: "Romanov",
        dish: "Romanov",
        bottle_price: "",
        section: "",
        "60ml_price": "120",
        ingridients_ru: "",
      },
    ],
    BRANDY: [
      {
        ingridients_ru: "",
        dish: "Morpheus",
        dish_ru: "Морфей",
        ingridients: "",
        price: "",
        glass_price: "",
        bottle_price: "",
        "180ml_price": "-",
        section: "",
        category: "BRANDY",
        "60ml_price": "-",
        "30ml_price": "80",
      },
      {
        dish_ru: "Mansion House",
        dish: "Mansion House",
        ingridients_ru: "",
        "180ml_price": "-",
        "30ml_price": "60",
        ingridients: "",
        "60ml_price": "-",
        section: "",
        glass_price: "",
        price: "",
        category: "",
        bottle_price: "",
      },
      {
        bottle_price: "",
        ingridients: "",
        dish: "Honey Bee",
        price: "",
        "180ml_price": "-",
        "60ml_price": "-",
        dish_ru: "Медовая пчела",
        glass_price: "",
        section: "",
        ingridients_ru: "",
        category: "",
        "30ml_price": "50",
      },
    ],
    CHAMPAGNE: [
      {
        "180ml_price": "",
        price: "",
        glass_price: "",
        dish: "Sula Brut",
        "60ml_price": "",
        category: "CHAMPAGNE",
        ingridients: "",
        section: "BEVERAGES",
        "30ml_price": "",
        bottle_price: "2499",
        dish_ru: "Sula Brut",
        ingridients_ru: "",
      },
    ],
    BEER: [
      {
        "60ml_price": "",
        price: "150",
        glass_price: "",
        section: "",
        bottle_price: "",
        ingridients_ru: "",
        category: "BEER",
        "30ml_price": "",
        ingridients: "",
        "180ml_price": "",
        dish_ru: "Безалкогольное пиво",
        dish: "Non-Alcoholic Beer",
      },
      {
        category: "",
        dish: "Budweiser Magnum",
        ingridients: "",
        section: "",
        ingridients_ru: "",
        glass_price: "",
        "30ml_price": "",
        dish_ru: "Бадвайзер Магнум",
        "60ml_price": "",
        price: "270",
        bottle_price: "",
        "180ml_price": "",
      },
      {
        "30ml_price": "",
        dish_ru: "Бадвайзер",
        price: "200",
        glass_price: "",
        "60ml_price": "",
        bottle_price: "",
        ingridients_ru: "",
        category: "",
        "180ml_price": "",
        ingridients: "",
        section: "",
        dish: "Budweiser",
      },
      {
        "180ml_price": "",
        "30ml_price": "",
        price: "120",
        section: "",
        dish: "Budweiser (Pint)",
        dish_ru: "Бадвайзер (пинта)",
        ingridients_ru: "",
        glass_price: "",
        ingridients: "",
        bottle_price: "",
        "60ml_price": "",
        category: "",
      },
      {
        category: "",
        glass_price: "",
        "60ml_price": "",
        dish: "Kingfisher Strong",
        price: "200",
        dish_ru: "Кингфишер Стронг",
        section: "",
        ingridients_ru: "",
        bottle_price: "",
        "30ml_price": "",
        "180ml_price": "",
        ingridients: "",
      },
      {
        "60ml_price": "",
        dish_ru: "Кингфишер Премиум",
        category: "",
        glass_price: "",
        dish: "Kingfisher Premium",
        price: "180",
        ingridients: "",
        "180ml_price": "",
        "30ml_price": "",
        section: "",
        bottle_price: "",
        ingridients_ru: "",
      },
      {
        "60ml_price": "",
        "30ml_price": "",
        dish_ru: "Кингфишер (пинта)",
        section: "",
        "180ml_price": "",
        ingridients: "",
        glass_price: "",
        bottle_price: "",
        price: "100",
        dish: "Kingfisher Pint",
        ingridients_ru: "",
        category: "",
      },
      {
        bottle_price: "",
        ingridients: "",
        dish: "Kingfisher Ultra",
        section: "",
        price: "130",
        dish_ru: "Кингфишер Ультра",
        category: "",
        ingridients_ru: "",
        glass_price: "",
        "30ml_price": "",
        "60ml_price": "",
        "180ml_price": "",
      },
      {
        ingridients: "",
        "180ml_price": "",
        dish_ru: "Туборг",
        "60ml_price": "",
        glass_price: "",
        dish: "Tuborg",
        section: "",
        price: "100",
        ingridients_ru: "",
        "30ml_price": "",
        bottle_price: "",
        category: "",
      },
      {
        "30ml_price": "",
        "180ml_price": "",
        ingridients: "",
        bottle_price: "",
        section: "",
        price: "240",
        "60ml_price": "",
        ingridients_ru: "",
        glass_price: "",
        category: "",
        dish: "Heineken",
        dish_ru: "Хайнекен",
      },
      {
        ingridients: "",
        section: "",
        bottle_price: "",
        price: "130",
        dish_ru: "Корона",
        category: "",
        "60ml_price": "",
        "180ml_price": "",
        ingridients_ru: "",
        "30ml_price": "",
        dish: "Corona",
        glass_price: "",
      },
      {
        category: "",
        ingridients: "",
        "30ml_price": "",
        bottle_price: "",
        dish_ru: "Симба",
        price: "240",
        "60ml_price": "",
        ingridients_ru: "",
        glass_price: "",
        "180ml_price": "",
        section: "",
        dish: "Simba",
      },
      {
        category: "",
        "30ml_price": "",
        "180ml_price": "",
        ingridients_ru: "",
        "60ml_price": "",
        ingridients: "",
        bottle_price: "",
        dish_ru: "Хугарден",
        dish: "Hoegaarden",
        glass_price: "",
        section: "",
        price: "150",
      },
      {
        dish: "Kings",
        ingridients_ru: "",
        bottle_price: "",
        ingridients: "",
        price: "150",
        "30ml_price": "",
        dish_ru: "Кингс",
        glass_price: "",
        category: "",
        "60ml_price": "",
        section: "",
        "180ml_price": "",
      },
      {
        price: "150",
        "60ml_price": "",
        "30ml_price": "",
        ingridients_ru: "",
        dish_ru: "Бризер Бакарди",
        bottle_price: "",
        ingridients: "",
        glass_price: "",
        "180ml_price": "",
        dish: "Breezer Bacardi",
        category: "",
        section: "",
      },
      {
        bottle_price: "",
        ingridients_ru: "",
        glass_price: "",
        ingridients: "",
        section: "",
        dish_ru: "Бира 91 Пиплс",
        dish: "Bira 91 Peoples",
        "180ml_price": "",
        category: "",
        "30ml_price": "",
        "60ml_price": "",
        price: "150",
      },
    ],
    "WHISKY PREMIUM": [
      {
        ingridients: "",
        "180ml_price": "1500",
        "30ml_price": "300",
        dish: "Jack Daniel",
        category: "WHISKY PREMIUM",
        price: "",
        bottle_price: "",
        dish_ru: "Джек Дэниел",
        section: "",
        "60ml_price": "550",
        ingridients_ru: "",
        glass_price: "",
      },
      {
        "30ml_price": "250",
        "60ml_price": "450",
        category: "",
        dish_ru: "Блэк Лейбл",
        section: "",
        dish: "Black Label",
        bottle_price: "",
        "180ml_price": "1400",
        ingridients: "",
        price: "",
        glass_price: "",
        ingridients_ru: "",
      },
      {
        dish: "Red Label",
        dish_ru: "Рэд Лейбл",
        bottle_price: "",
        "60ml_price": "300",
        ingridients: "",
        category: "",
        glass_price: "",
        price: "",
        "180ml_price": "800",
        ingridients_ru: "",
        "30ml_price": "180",
        section: "",
      },
      {
        "30ml_price": "200",
        ingridients_ru: "",
        section: "",
        glass_price: "",
        price: "",
        ingridients: "",
        dish: "Black Dog Gold",
        "180ml_price": "1000",
        "60ml_price": "350",
        dish_ru: "Black Dog Gold",
        category: "",
        bottle_price: "",
      },
      {
        "30ml_price": "140",
        glass_price: "",
        dish_ru: "Black Dog",
        dish: "Black Dog",
        "180ml_price": "700",
        bottle_price: "",
        category: "",
        ingridients_ru: "",
        ingridients: "",
        "60ml_price": "260",
        price: "",
        section: "",
      },
      {
        bottle_price: "",
        ingridients_ru: "",
        dish: "Chivas Regal XII",
        section: "",
        "30ml_price": "270",
        "60ml_price": "510",
        price: "",
        glass_price: "",
        "180ml_price": "1450",
        dish_ru: "Chivas Regal XII",
        ingridients: "",
        category: "",
      },
      {
        "30ml_price": "190",
        section: "",
        price: "",
        glass_price: "",
        ingridients_ru: "",
        dish_ru: "Джим Бим",
        category: "",
        bottle_price: "",
        dish: "Jim Beam",
        "180ml_price": "950",
        "60ml_price": "350",
        ingridients: "",
      },
      {
        "60ml_price": "350",
        dish: "100 Pipers (12 Yrs.)",
        bottle_price: "",
        "180ml_price": "950",
        price: "",
        dish_ru: "100 Пиперс (12 лет)",
        "30ml_price": "190",
        section: "",
        ingridients_ru: "",
        category: "",
        glass_price: "",
        ingridients: "",
      },
      {
        glass_price: "",
        dish_ru: "100 Пиперс",
        category: "",
        price: "",
        bottle_price: "",
        ingridients_ru: "",
        section: "",
        "60ml_price": "280",
        "30ml_price": "160",
        dish: "100 Pipers",
        ingridients: "",
        "180ml_price": "750",
      },
      {
        bottle_price: "",
        "60ml_price": "300",
        "30ml_price": "180",
        price: "",
        "180ml_price": "810",
        ingridients: "",
        category: "",
        ingridients_ru: "",
        dish: "Black AND White",
        section: "",
        glass_price: "",
        dish_ru: "Блэк энд Уайт",
      },
      {
        price: "",
        category: "",
        dish: "Jameson",
        dish_ru: "Джемисон",
        ingridients: "",
        "30ml_price": "250",
        glass_price: "",
        "180ml_price": "1200",
        ingridients_ru: "",
        section: "",
        "60ml_price": "450",
        bottle_price: "",
      },
      {
        dish: "Teacher",
        ingridients_ru: "",
        category: "",
        dish_ru: "Тичер",
        bottle_price: "",
        section: "",
        "30ml_price": "250",
        ingridients: "",
        glass_price: "",
        "60ml_price": "400",
        price: "",
        "180ml_price": "1100",
      },
      {
        dish: "Dewar's White Label",
        category: "",
        glass_price: "",
        price: "",
        dish_ru: "Дьюарс Вайт Лейбл",
        ingridients_ru: "",
        ingridients: "",
        "180ml_price": "750",
        "30ml_price": "160",
        "60ml_price": "290",
        bottle_price: "",
        section: "",
      },
      {
        "60ml_price": "320",
        glass_price: "",
        section: "",
        "30ml_price": "170",
        "180ml_price": "900",
        ingridients: "",
        ingridients_ru: "",
        dish_ru: "Баллантайнс",
        bottle_price: "",
        dish: "Ballantine's",
        category: "",
        price: "",
      },
      {
        "180ml_price": "650",
        price: "",
        section: "",
        ingridients: "",
        bottle_price: "",
        "30ml_price": "150",
        glass_price: "",
        dish: "VAT 69",
        "60ml_price": "250",
        ingridients_ru: "",
        category: "",
        dish_ru: "ВАТ 69",
      },
    ],
    WINES: [
      {
        ingridients: "",
        "30ml_price": "",
        section: "",
        bottle_price: "1999",
        dish_ru: "Sula (Шираз Каберне)",
        category: "WINES",
        dish: "Sula (Shiraz Cabernet)",
        "180ml_price": "",
        price: "",
        "60ml_price": "",
        ingridients_ru: "",
        glass_price: "650",
      },
      {
        ingridients_ru: "",
        section: "",
        "60ml_price": "",
        "180ml_price": "",
        price: "",
        dish: "Sula (Zinfandel Rose)",
        category: "",
        bottle_price: "1799",
        dish_ru: "Sula (Зинфандель Розе)",
        "30ml_price": "",
        glass_price: "550",
        ingridients: "",
      },
      {
        category: "",
        glass_price: "360",
        bottle_price: "1099",
        "60ml_price": "",
        "180ml_price": "",
        "30ml_price": "",
        price: "",
        ingridients: "",
        ingridients_ru: "",
        section: "",
        dish: "Diya Redwine",
        dish_ru: "Diya Красное вино",
      },
      {
        dish_ru: "Madera Красное вино",
        ingridients_ru: "",
        "180ml_price": "",
        glass_price: "360",
        section: "",
        price: "",
        category: "",
        bottle_price: "1099",
        ingridients: "",
        "30ml_price": "",
        dish: "Madera Redwine",
        "60ml_price": "",
      },
      {
        bottle_price: "499",
        "180ml_price": "",
        category: "",
        dish_ru: "Портвейн",
        glass_price: "210",
        "30ml_price": "",
        ingridients: "",
        price: "",
        section: "",
        dish: "Port Wine",
        ingridients_ru: "",
        "60ml_price": "",
      },
    ],
  },
};
