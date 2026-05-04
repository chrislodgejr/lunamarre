export type MenuItem = { name: string; price: string; description: string; tags?: string[] };
export type MenuSection = { id: string; label: string; title: string; intro: string; items: MenuItem[] };

export const menuSections: MenuSection[] = [
  {
    id: 'agave-corn',
    label: 'The Agave & Corn Lab',
    title: 'Hand-pressed beginnings',
    intro: 'Hand-pressed tortillas and house-made heirloom chips.',
    items: [
      { name: 'Luna Marre Guacamole', price: '$16', description: 'Traditional Hass avocado, lime, serrano, sea salt. Styles: Classic / Chili Macha / Pineapple Habanero', tags: ['signature', 'share'] },
      { name: 'The Salsa Flight', price: '$16', description: 'A quartet of house-made salsas: verde tomatillo, burnt tomato quemada, spicy arbol, and nutty chili macha.', tags: ['share', 'heat'] },
      { name: 'Guacamole & Chicharron', price: '$19', description: 'Pomegranate, queso fresco, crispy hand-cut pork belly cubes.', tags: ['crunch'] }
    ]
  },
  {
    id: 'botanas',
    label: 'Small Plates',
    title: 'Botanas built for speed',
    intro: 'Designed for sharing and high-speed flavor.',
    items: [
      { name: 'Octopus Tostada', price: '$18', description: 'Charred octopus, avocado mousse, pickled red onion, salsa negra, crisp blue corn tostada.', tags: ['sea', 'smoke'] },
      { name: 'Ahi Tuna Ceviche', price: '$19', description: 'Sashimi-grade tuna, yuzu-orange leche de tigre, toasted pepitas, pumpkin seed oil.', tags: ['raw', 'citrus'] },
      { name: 'Wagyu Beef Empanadas', price: '$16', description: 'Slow-seared Wagyu beef, black beans, Chihuahua cheese, salsa verde.', tags: ['rich'] },
      { name: 'Wild Mushroom Quesadilla', price: '$15', description: 'Blue corn masa, goat cheese crema, truffle-scented oyster mushrooms.', tags: ['vegetarian'] },
      { name: 'Tijuana 1924 Caesar', price: '$15', description: 'Baby Gem lettuce, serrano-lime Caesar dressing, cumin chickpeas, aged Cotija.', tags: ['classic'] }
    ]
  },
  {
    id: 'taco-bar',
    label: 'The Taco Bar',
    title: 'Order of three',
    intro: 'Served on house-made heirloom corn tortillas.',
    items: [
      { name: 'Short Rib Birria', price: '$22', description: '12-hour braised beef, Oaxaca cheese, onion, cilantro, rich 3-chile consomme.', tags: ['signature', 'slow'] },
      { name: 'Duck Carnitas', price: '$21', description: 'Confit duck leg, spiced plum-habanero glaze, pickled onion, micro-cilantro.', tags: ['sweet heat'] },
      { name: 'Mushroom & Hibiscus', price: '$19', description: 'Braised hibiscus flowers, roasted wild mushrooms, avocado crema, crispy shallots.', tags: ['VG'] },
      { name: 'Baja Crispy Fish', price: '$20', description: 'Beer-battered mahi-mahi, poblano-lime slaw, chipotle aioli.', tags: ['crunch', 'sea'] },
      { name: 'Lamb Barbacoa', price: '$21', description: 'Adobo-marinated lamb shoulder, salsa borracha with mezcal, fresh serrano chilies.', tags: ['smoke'] },
      { name: 'Chicken Ropa', price: '$18', description: 'Tinga-style shredded chicken, lime crema, romaine, queso fresco.', tags: ['classic'] }
    ]
  },
  {
    id: 'platos-fuertes',
    label: 'Platos Fuertes',
    title: 'Fire-driven entrees',
    intro: 'Signature entrees for a refined dinner experience.',
    items: [
      { name: 'Octopus Zarandeado', price: '$36', description: 'Wood-fired octopus, chorizo-parsnip puree, crispy kale, charred lemon.', tags: ['signature', 'fire'] },
      { name: 'Carne Arrachera', price: '$38', description: 'Grilled 10oz skirt steak, heirloom carrot escabeche, romesco, yuca fries.', tags: ['steak'] },
      { name: 'Pollo Adobado', price: '$32', description: 'Pan-roasted half chicken, mild guajillo adobo, cilantro-lime rice, black bean puree.', tags: ['adobo'] },
      { name: 'Rib-Eye Fajitas', price: '$44', description: '10oz prime rib-eye, shishito peppers, caramelized onions, hand-pressed flour tortillas.', tags: ['prime'] },
      { name: 'Salmon Mole Verde', price: '$34', description: 'Pan-seared salmon, pumpkin seed mole, chipotle-sweet potato puree, charred asparagus.', tags: ['mole', 'sea'] }
    ]
  }
];

export const allTags = Array.from(new Set(menuSections.flatMap((s) => s.items.flatMap((i) => i.tags ?? [])))).sort();
