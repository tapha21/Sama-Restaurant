export const menuData = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
      description: "Tomate, mozzarella, basilic frais",
      image: "/images/pizza/Margherita.jpg",
      sizes: [
        { name: "Petite", price: 3000 },
        { name: "Moyenne", price: 3500 },
        { name: "Grande", price: 4000 }
      ],
      extras: [
        { name: "Extra fromage", price: 500 },
        { name: "Olives", price: 300 },
        { name: "Champignons", price: 400 }
      ]
    },
    {
      id: 2,
      name: "Reine",
      description: "Tomate, mozzarella, jambon, champignons",
      image: "/images/pizza/reine.jpg",
      sizes: [
        { name: "Petite", price: 4000 },
        { name: "Moyenne", price: 4500 },
        { name: "Grande", price: 5000 }
      ],
      extras: [
        { name: "Extra fromage", price: 500 },
        { name: "Olives", price: 300 },
        { name: "Ananas", price: 400 }
      ]
    },
    {
      id: 3,
      name: "4 Fromages",
      description: "Mozzarella, gorgonzola, chèvre, emmental",
      image: "/images/pizza/4 Fromages.avif",
      sizes: [
        { name: "Petite", price: 4500 },
        { name: "Moyenne", price: 5000 },
        { name: "Grande", price: 5500 }
      ],
      extras: [
        { name: "Extra fromage", price: 500 },
        { name: "Champignons", price: 400 },
        { name: "Tomates séchées", price: 300 }
      ]
    },
    {
      id: 4,
      name: "Pepperoni",
      description: "Tomate, mozzarella, pepperoni épicé",
      image: "/images/pizza/Pepperoni.jpg",
      sizes: [
        { name: "Petite", price: 4000 },
        { name: "Moyenne", price: 4500 },
        { name: "Grande", price: 5000 }
      ],
      extras: [
        { name: "Extra pepperoni", price: 700 },
        { name: "Olives", price: 300 },
        { name: "Piments", price: 200 }
      ]
    },
    {
      id: 5,
      name: "Végétarienne",
      description: "Tomate, mozzarella, poivrons, olives, champignons, oignons",
      image: "/images/pizza/Végétarienne.jpg",
      sizes: [
        { name: "Petite", price: 3500 },
        { name: "Moyenne", price: 4000 },
        { name: "Grande", price: 4500 }
      ],
      extras: [
        { name: "Extra fromage", price: 500 },
        { name: "Olives", price: 300 },
        { name: "Champignons", price: 400 }
      ]
    }
  ],

  burgers: [
    {
      id: 6,
      name: "Burger Classique",
      description: "Steak de bœuf, salade, tomate, oignon, sauce burger",
      image: "/images/burger/Burger Classique.avif",
      sizes: [
        { name: "Standard", price: 3000 },
        { name: "Double", price: 4500 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Bacon", price: 700 },
        { name: "Œuf", price: 600 }
      ]
    },
    {
      id: 7,
      name: "Cheeseburger",
      description: "Steak de bœuf, cheddar, salade, tomate, cornichons",
      image: "/images/burger/Cheeseburger.jpg",
      sizes: [
        { name: "Standard", price: 3500 },
        { name: "Double", price: 5000 }
      ],
      extras: [
        { name: "Extra cheddar", price: 500 },
        { name: "Bacon", price: 700 },
        { name: "Œuf", price: 600 }
      ]
    },
    {
      id: 8,
      name: "Burger Poulet",
      description: "Filet de poulet pané, salade, tomate, mayonnaise",
      image: "/images/burger/Burger Poulet.webp",
      sizes: [
        { name: "Standard", price: 3200 },
        { name: "Double", price: 4700 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Bacon", price: 700 },
        { name: "Œuf", price: 600 }
      ]
    },
    {
      id: 9,
      name: "Burger XXL",
      description: "Double steak, double cheddar, bacon, œuf, frites",
      image: "/images/burger/Burger Classique.avif",
      sizes: [
        { name: "Standard", price: 5500 },
        { name: "Mega", price: 7000 }
      ],
      extras: [
        { name: "Extra fromage", price: 500 },
        { name: "Bacon", price: 700 },
        { name: "Œuf", price: 600 },
        { name: "Frites", price: 400 }
      ]
    }
  ],

  tacos: [
    {
      id: 10,
      name: "Tacos Poulet",
      description: "Poulet grillé, fromage, salade, tomate, sauce blanche",
      image: "/images/tacos/Tacos Poulet.jpeg",
      sizes: [
        { name: "Petit", price: 2500 },
        { name: "Moyen", price: 3000 },
        { name: "Grand", price: 3500 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Sauce piquante", price: 300 },
        { name: "Cornichons", price: 200 }
      ]
    },
    {
      id: 11,
      name: "Tacos Viande Hachée",
      description: "Viande hachée épicée, fromage, salade, sauce algérienne",
      image: "/images/tacos/Tacos Viande Hachée.jpg",
      sizes: [
        { name: "Petit", price: 2800 },
        { name: "Moyen", price: 3300 },
        { name: "Grand", price: 3800 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Sauce piquante", price: 300 },
        { name: "Olives", price: 200 }
      ]
    },
    {
      id: 12,
      name: "Tacos Mixte",
      description: "Poulet + viande hachée, fromage, crudités, sauce au choix",
      image: "/images/tacos/Tacos Mixte.jpeg",
      sizes: [
        { name: "Petit", price: 3500 },
        { name: "Moyen", price: 4000 },
        { name: "Grand", price: 4500 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Sauce piquante", price: 300 },
        { name: "Œuf", price: 600 }
      ]
    },
    {
      id: 13,
      name: "Tacos XXL",
      description: "Triple viande, fromage, frites, sauces multiples",
      image: "/images/tacos/Tacos XXL.jpg",
      sizes: [
        { name: "Moyen", price: 4500 },
        { name: "Grand", price: 5000 }
      ],
      extras: [
        { name: "Fromage", price: 500 },
        { name: "Frites", price: 400 },
        { name: "Sauce piquante", price: 300 }
      ]
    }
  ],

  platsSenegalais: [
    {
      id: 14,
      name: "Thiéboudienne (Riz au Poisson)",
      description: "Riz wolof, poisson frais, légumes variés, sauce tomate",
      image: "/images/plat/Thiéboudienne.jpg",
      sizes: [
        { name: "Petit", price: 2000 },
        { name: "Normal", price: 2500 },
        { name: "Grand", price: 3000 }
      ],
      extras: [
        { name: "Sauce piquante", price: 300 },
        { name: "Légumes supplémentaires", price: 500 }
      ]
    },
    {
      id: 15,
      name: "Yassa Poulet",
      description: "Poulet mariné aux oignons, citron et moutarde, riz blanc",
      image: "/images/plat/Yassa Poulet.jpg",
      sizes: [
        { name: "Petit", price: 2300 },
        { name: "Normal", price: 2800 },
        { name: "Grand", price: 3300 }
      ],
      extras: [
        { name: "Sauce piquante", price: 300 },
        { name: "Oignons supplémentaires", price: 200 }
      ]
    },
    {
      id: 16,
      name: "Mafé",
      description: "Ragoût à la pâte d'arachide, viande de bœuf, légumes, riz",
      image: "/images/plat/mafe.webp",
      sizes: [
        { name: "Petit", price: 2500 },
        { name: "Normal", price: 3000 },
        { name: "Grand", price: 3500 }
      ],
      extras: [
        { name: "Sauce pimentée", price: 300 },
        { name: "Riz supplémentaire", price: 400 }
      ]
    },
    {
      id: 17,
      name: "Thiou",
      description: "Viande ou poisson en sauce tomate, légumes, riz",
      image: "/images/plat/Thiou.jpg",
      sizes: [
        { name: "Petit", price: 2000 },
        { name: "Normal", price: 2500 },
        { name: "Grand", price: 3000 }
      ],
      extras: [
        { name: "Sauce piquante", price: 300 },
        { name: "Légumes supplémentaires", price: 400 }
      ]
    },
    {
      id: 18,
      name: "Domoda",
      description: "Ragoût à la tomate et beurre de cacahuète, bœuf, riz",
      image: "/images/plat/Domoda.jpg",
      sizes: [
        { name: "Petit", price: 2300 },
        { name: "Normal", price: 2800 },
        { name: "Grand", price: 3300 }
      ],
      extras: [
        { name: "Sauce piquante", price: 300 },
        { name: "Beurre de cacahuète supplémentaire", price: 400 }
      ]
    },
    {
      id: 19,
      name: "Ceebu Jën (Thiéboudienne Rouge)",
      description: "Le plat national - Riz, poisson, légumes, sauce tomate épicée",
      image: "/images/plat/thieb.jpg",
      sizes: [
        { name: "Petit", price: 2500 },
        { name: "Normal", price: 3000 },
        { name: "Grand", price: 3500 }
      ],
      extras: [
        { name: "Sauce piquante", price: 300 },
        { name: "Légumes supplémentaires", price: 400 }
      ]
    },
    {
      id: 20,
      name: "Poulet DG",
      description: "Poulet braisé, plantain frit, légumes sautés",
      image: "/images/plat/Poulet braisé.jpeg",
      sizes: [
        { name: "Normal", price: 3500 },
        { name: "Grand", price: 4000 }
      ],
      extras: [
        { name: "Plantain supplémentaire", price: 400 },
        { name: "Sauce piquante", price: 300 }
      ]
    },
    {
      id: 21,
      name: "Accras de Poisson",
      description: "Beignets de poisson épicés (entrée)",
      image: "/images/plat/Accras de Poisson.webp",
      sizes: [
        { name: "Petit", price: 1200 },
        { name: "Normal", price: 1500 }
      ],
      extras: [
        { name: "Sauce piquante", price: 200 }
      ]
    }
  ],

  boissons: [
    {
      id: 22,
      name: "Bissap (Jus d'Hibiscus)",
      description: "Boisson traditionnelle sénégalaise sucrée",
      image: "/images/boisson/bissap.jpeg",
      sizes: [
        { name: "Petite", price: 400 },
        { name: "Moyenne", price: 500 }
      ],
      extras: []
    },
    {
      id: 23,
      name: "Bouye (Jus de Baobab)",
      description: "Jus crémeux du fruit du baobab",
      image: "/images/boisson/Bouye.webp",
      sizes: [
        { name: "Petite", price: 500 },
        { name: "Moyenne", price: 600 }
      ],
      extras: []
    },
    {
      id: 24,
      name: "Gingembre",
      description: "Jus de gingembre frais épicé",
      image: "/images/boisson/Gingembre.webp",
      sizes: [
        { name: "Petite", price: 400 },
        { name: "Moyenne", price: 500 }
      ],
      extras: []
    },
    {
      id: 25,
      name: "Coca-Cola",
      description: "33cl",
      image: "/images/boisson/Coca-Cola.png",
      sizes: [
        { name: "33cl", price: 500 },
        { name: "50cl", price: 700 }
      ],
      extras: []
    },
    {
      id: 26,
      name: "Eau Minérale",
      description: "50cl",
      image: "/images/boisson/Eau Minérale.webp",
      sizes: [
        { name: "50cl", price: 300 },
        { name: "1L", price: 500 }
      ],
      extras: []
    }
  ]
};

export const categories = [
  { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'tacos', name: 'Tacos', icon: '🌮' },
  { id: 'platsSenegalais', name: 'Plats Sénégalais', icon: '🍛' },
  { id: 'boissons', name: 'Boissons', icon: '🥤' }
];
