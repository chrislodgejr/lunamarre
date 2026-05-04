export type MenuItem = { name: string; price: string; description: string; tags?: string[] };
export type MenuSection = { id: string; label: string; title: string; intro: string; items: MenuItem[] };

export const menuSections: MenuSection[] = [
  {
    id: 'agave-corn',
    label: 'The Agave & Corn Lab',
    title: 'Hand-pressed beginnings',
    intro: 'Hand-pressed tortillas & house-made heirloom chips.',
    items: [
      { name: 'Luna Marre Guacamole', price: '$16', description: 'Traditional Hass avocado, lime, serrano, sea salt. Styles: Classic / Chili Macha / Pineapple Habanero.', tags: ['signature', 'share'] },
      { name: 'The Salsa Flight', price: '$16', description: 'A quartet of house-made salsas: Verde (tomatillo), Quemada (burnt tomato), Arbol (spicy), and Macha (nutty oil).', tags: ['share', 'heat'] },
      { name: 'Guacamole & Chicharron', price: '$19', description: 'Pomegranate, queso fresco, crispy hand-cut pork belly cubes.', tags: ['crunch', 'share'] }
    ]
  },
  {
    id: 'small-plates',
    label: 'Small Plates (Botanas)',
    title: 'Designed to share',
    intro: 'Designed for sharing and high-speed flavor.',
    items: [
      { name: 'Octopus Tostada', price: '$18', description: 'Charred octopus, avocado mousse, pickled red onion, salsa negra, on a crisp blue corn tostada.', tags: ['seafood', 'smoke'] },
      { name: 'Ahi Tuna Ceviche', price: '$19', description: 'Sashimi-grade tuna, yuzu-orange leche de tigre, toasted pepitas, pumpkin seed oil.', tags: ['seafood', 'raw', 'citrus'] },
      { name: 'Wagyu Beef Empanadas', price: '$16', description: 'Slow-seared Wagyu beef, black beans, Chihuahua cheese, served with salsa verde.', tags: ['beef', 'rich'] },
      { name: 'Wild Mushroom Quesadilla', price: '$15', description: 'Blue corn masa, goat cheese crema, truffle-scented oyster mushrooms.', tags: ['vegetarian'] },
      { name: 'Crispy Belly Tostada', price: '$16', description: 'Achiote-braised pork belly, black bean refrito, Xni-Pec (habanero-pickled onion), cilantro crema.', tags: ['pork', 'crunch'] },
      { name: 'Shrimp Verde Tostada', price: '$17', description: 'Chilled lime-marinated shrimp, avocado-tomatillo crema, shaved cucumber, watermelon radish, Tajin pepitas.', tags: ['seafood', 'citrus'] },
      { name: 'Tijuana 1924 Caesar', price: '$15', description: 'Whole-leaf Baby Gem lettuce, serrano-lime Caesar dressing, cumin chickpeas, aged Cotija.', tags: ['salad', 'classic'] }
    ]
  },
  {
    id: 'taco-bar',
    label: 'The Taco Bar',
    title: 'Order of three',
    intro: 'Served on house-made heirloom corn tortillas. Order of three.',
    items: [
      { name: 'Short Rib Birria', price: '$22', description: '12-hour braised beef, Oaxaca cheese, onion, cilantro, served with a rich 3-chile consomme.', tags: ['signature', 'beef', 'slow'] },
      { name: 'Duck Carnitas', price: '$21', description: 'Confit duck leg, spiced plum-habanero glaze, pickled onion, micro-cilantro.', tags: ['sweet heat'] },
      { name: 'Mushroom & Hibiscus (VG)', price: '$19', description: 'Braised hibiscus flowers, roasted wild mushrooms, avocado crema, crispy shallots.', tags: ['vegan', 'vegetarian'] },
      { name: 'Baja Crispy Fish', price: '$20', description: 'Beer-battered mahi-mahi, poblano-lime slaw, chipotle aioli.', tags: ['seafood', 'crunch'] },
      { name: 'Lamb Barbacoa', price: '$21', description: 'Adobo-marinated lamb shoulder, salsa borracha (Mezcal-based), fresh serrano chilies.', tags: ['smoke', 'lamb'] },
      { name: 'Chicken Ropa', price: '$18', description: 'Tinga-style shredded chicken, lime crema, shredded romaine, queso fresco.', tags: ['chicken', 'classic'] }
    ]
  },
  {
    id: 'platos-fuertes',
    label: 'Platos Fuertes',
    title: 'Signature plates',
    intro: 'Signature entrees for a refined dinner experience.',
    items: [
      { name: 'Octopus "Zarandeado"', price: '$36', description: 'Wood-fired octopus, chorizo-parsnip puree, crispy kale, charred lemon.', tags: ['signature', 'seafood', 'fire'] },
      { name: 'Carne Arrachera', price: '$38', description: 'Grilled 10oz skirt steak, heirloom carrot escabeche, romesco, yuca fries.', tags: ['steak', 'beef'] },
      { name: 'Pollo Adobado', price: '$32', description: 'Pan-roasted half chicken, mild guajillo adobo, cilantro-lime rice, black bean puree.', tags: ['chicken', 'adobo'] },
      { name: 'Rib-Eye Fajitas', price: '$44', description: '10oz prime rib-eye, shishito peppers, caramelized onions, hand-pressed flour tortillas.', tags: ['prime', 'steak'] },
      { name: 'Salmon Mole Verde', price: '$34', description: 'Pan-seared salmon, pumpkin seed mole, chipotle-sweet potato puree, charred asparagus.', tags: ['seafood', 'mole'] }
    ]
  }
];

export const allTags = Array.from(new Set(menuSections.flatMap((s) => s.items.flatMap((i) => i.tags ?? [])))).sort();
