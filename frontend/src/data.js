export const DUMMY_RECIPES = [
  {
    id: 1,
    name: 'Karbonara špageti',
    description: 'Klasičan italijanski recept sa jajima, sirom i pančetom',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYE0baxn14n7lJI2qzFWL3jNSmTBRXUt0yZg&s",
    difficulty: 'Srednja',
    prepTime: '20 minuta',
    ingredients: [
      { name: 'Špageti', quantity: 400, unit: 'g' },
      { name: 'Jaja', quantity: 3, unit: 'komadi' },
      { name: 'Sir', quantity: 100, unit: 'g' },
      { name: 'Pančeta', quantity: 200, unit: 'g' },
      { name: 'Crni biber', quantity: 5, unit: 'g' }
    ],
    isFavorite: false
  },
  {
    id: 2,
    name: 'Cezar salata',
    description: 'Sveža zelena salata sa domaćim Cezar prelivom',
    image: "https://www.cuisinart.ca/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-ca-cuisinart-sfra-Library/default/dw617e433c/images/recipe-Images/caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit",
    difficulty: 'Lako',
    prepTime: '10 minuta',
    ingredients: [
      { name: 'Zelena salata', quantity: 300, unit: 'g' },
      { name: 'Sir', quantity: 50, unit: 'g' },
      { name: 'Prepečeni hleb', quantity: 100, unit: 'g' }
    ],
    isFavorite: false
  },
  {
    id: 3,
    name: 'Grilovani losos',
    description: 'Savršeno grilovani losos sa sosom od limuna i maslaca',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy7e7FNp7D3XHt8SSWKZyej_gLn9u60YFFQ&s",
    difficulty: 'Srednja',
    prepTime: '25 minuta',
    ingredients: [
      { name: 'Losos', quantity: 500, unit: 'g' },
      { name: 'Limun', quantity: 2, unit: 'komadi' },
      { name: 'Maslac', quantity: 50, unit: 'g' },
      { name: 'Beli luk', quantity: 3, unit: 'češanj' },
      { name: 'Majčina dušica', quantity: 10, unit: 'g' }
    ],
    isFavorite: false
  },
  {
    id: 4,
    name: 'Tortilje sa govedinom',
    description: 'Zacinjene tortilje punjene mlevenim mesom i svežim povrćem',
    image: '🌮',
    difficulty: 'Lako',
    prepTime: '15 minuta',
    ingredients: [
      { name: 'Mleveno meso', quantity: 400, unit: 'g' },
      { name: 'Kukuruzne tortilje', quantity: 10, unit: 'komadi' },
      { name: 'Zelena salata', quantity: 150, unit: 'g' },
      { name: 'Paradajz', quantity: 200, unit: 'g' },
      { name: 'Sir', quantity: 100, unit: 'g' }
    ],
    isFavorite: false
  },
  {
    id: 5,
    name: 'Čokoladni kolač',
    description: 'Čokoladni kolač sa više slojeva i bogatim filom',
    image: '🍰',
    difficulty: 'Teško',
    prepTime: '40 minuta',
    ingredients: [
      { name: 'Brašno', quantity: 250, unit: 'g' },
      { name: 'Kakao', quantity: 50, unit: 'g' },
      { name: 'Jaja', quantity: 4, unit: 'komadi' },
      { name: 'Šećer', quantity: 200, unit: 'g' },
      { name: 'Maslac', quantity: 150, unit: 'g' }
    ],
    isFavorite: false
  },
  {
    id: 6,
    name: 'Pad Thai',
    description: 'Popularno tajlandsko jelo od prženih pirinčanih rezanaca i škampa,',
    image: '🍤',
    difficulty: 'Srednja',
    prepTime: '20 minuta',
    ingredients: [
      { name: 'Pirinčani rezanci', quantity: 300, unit: 'g' },
      { name: 'Škampi', quantity: 300, unit: 'g' },
      { name: 'Kikiriki', quantity: 100, unit: 'g' },
      { name: 'Limeta', quantity: 2, unit: 'pieces' },
      { name: 'Soja sos', quantity: 50, unit: 'ml' }
    ],
    isFavorite: false
  }
];

export const DUMMY_INGREDIENTS = [
  'Špageti',
  'Jaja',
  'Sir',
  'Maslac',
  'Losos',
  'Zelena salata',
  'Pančeta',
  'Crni biber',
  'Prepečeni hleb',
  'Limun',
  'Beli luk',
  'Majčina dušica',
  'Mleveno meso',
  'Kukuruzne tortilje',
  'Paradajz',
  'Brašno',
  'Kakao',
  'Šećer',
  'Pirinčani rezanci',
  'Škampi',
  'Kikiriki',
  'Limeta',
  'Soja sos'
];


export const DUMMY_PRODUCTS = [
  // Špageti proizvodi
  { id: 1, name: 'Barilla Špageti 500g', ingredientType: 'Špageti', packageAmount: '500g', price: 250.00, image: '📦' },
  { id: 2, name: 'De Cecco Špageti 400g', ingredientType: 'Špageti', packageAmount: '400g', price: 280.00, image: '📦' },
  
  // Jaja proizvodi
  { id: 3, name: 'Domaća jaja kutija 10 komada', ingredientType: 'Jaja', packageAmount: '10 komada', price: 200.00, image: '🥚' },
  { id: 4, name: 'Domaća jaja kutija 6 komada', ingredientType: 'Jaja', packageAmount: '6 komada', price: 120.00, image: '🥚' },
  
  // Sir proizvodi
  { id: 5, name: 'Kajmak sir 250g', ingredientType: 'Sir', packageAmount: '250g', price: 450.00, image: '🧀' },
  { id: 6, name: 'Madam sir 400g', ingredientType: 'Sir', packageAmount: '400g', price: 520.00, image: '🧀' },
  
  // Maslac proizvodi
  { id: 7, name: 'Lurija maslac 250g', ingredientType: 'Maslac', packageAmount: '250g', price: 350.00, image: '🧈' },
  { id: 8, name: 'Gavrilović maslac 250g', ingredientType: 'Maslac', packageAmount: '250g', price: 380.00, image: '🧈' },
  
  // Losos proizvodi
  { id: 9, name: 'Losos file 500g', ingredientType: 'Losos', packageAmount: '500g', price: 2400.00, image: '🐟' },
  { id: 10, name: 'Losos file 300g', ingredientType: 'Losos', packageAmount: '300g', price: 1600.00, image: '🐟' },
  
  // Zelena salata proizvodi
  { id: 11, name: 'Ledenka salata 300g', ingredientType: 'Zelena salata', packageAmount: '300g', price: 70.00, image: '🥬' },
  { id: 12, name: 'Maslna salata 300g', ingredientType: 'Zelena salata', packageAmount: '300g', price: 80.00, image: '🥬' },
  
  // Pančeta proizvodi
  { id: 13, name: 'Pančeta rezana 200g', ingredientType: 'Pančeta', packageAmount: '200g', price: 450.00, image: '🥓' },
  { id: 14, name: 'Pančeta kockice 250g', ingredientType: 'Pančeta', packageAmount: '250g', price: 500.00, image: '🥓' },
  
  // Crni biber proizvodi
  { id: 15, name: 'Paprika crni biber 100g', ingredientType: 'Crni biber', packageAmount: '100g', price: 150.00, image: '🌶️' },
  { id: 16, name: 'Biber mleven 50g', ingredientType: 'Crni biber', packageAmount: '50g', price: 100.00, image: '🌶️' },
  
  // Prepečeni hleb proizvodi
  { id: 17, name: 'Prepečeni hleb mešoviti 250g', ingredientType: 'Prepečeni hleb', packageAmount: '250g', price: 120.00, image: '🍞' },
  { id: 18, name: 'Prepečeni hleb crni 200g', ingredientType: 'Prepečeni hleb', packageAmount: '200g', price: 100.00, image: '🍞' },

  // Limun proizvodi
  { id: 19, name: 'Limun komadi 1kg', ingredientType: 'Limun', packageAmount: '1kg', price: 150.00, image: '🍋' },
  { id: 20, name: 'Limun komadi 500g', ingredientType: 'Limun', packageAmount: '500g', price: 80.00, image: '🍋' },
  
  // Beli luk proizvodi
  { id: 21, name: 'Beli luk 500g', ingredientType: 'Beli luk', packageAmount: '500g', price: 100.00, image: '🧄' },
  { id: 22, name: 'Beli luk 1kg', ingredientType: 'Beli luk', packageAmount: '1kg', price: 180.00, image: '🧄' },
  
  // Majčina dušica proizvodi
  { id: 23, name: 'Majčina dušica suvena 30g', ingredientType: 'Majčina dušica', packageAmount: '30g', price: 200.00, image: '🌿' },
  { id: 24, name: 'Majčina dušica suvena 50g', ingredientType: 'Majčina dušica', packageAmount: '50g', price: 300.00, image: '🌿' },
  
  // Mleveno meso proivodi
  { id: 25, name: 'Mleveno meso od goveđine 500g', ingredientType: 'Mleveno meso', packageAmount: '500g', price: 900.00, image: '🥩' },
  { id: 26, name: 'Mleveno meso mešovito 500g', ingredientType: 'Mleveno meso', packageAmount: '500g', price: 850.00, image: '🥩' },
  
  // Kukuruzne tortilje proizvodi
  { id: 27, name: 'Kukuruzne tortilje pakovanje 10 komada', ingredientType: 'Kukuruzne tortilje', packageAmount: '10 komada', price: 200.00, image: '🌽' },
  { id: 28, name: 'Kukuruzne tortilje pakovanje 20 komada', ingredientType: 'Kukuruzne tortilje', packageAmount: '20 komada', price: 380.00, image: '🌽' },
  
  // Paradajz proizvodi
  { id: 29, name: 'Paradajz svež 1kg', ingredientType: 'Paradajz', packageAmount: '1kg', price: 150.00, image: '🍅' },
  { id: 30, name: 'Paradajz čerupja 500g', ingredientType: 'Paradajz', packageAmount: '500g', price: 200.00, image: '🍅' },
  
  // Brašno proizvodi
  { id: 31, name: 'Brašno tip 500 1kg', ingredientType: 'Brašno', packageAmount: '1kg', price: 120.00, image: '🌾' },
  { id: 32, name: 'Brašno tip 400 1kg', ingredientType: 'Brašno', packageAmount: '1kg', price: 130.00, image: '🌾' },
  
  // Kakao proizvodi
  { id: 33, name: 'Nesquik kakao 250g', ingredientType: 'Kakao', packageAmount: '250g', price: 350.00, image: '🍫' },
  { id: 34, name: 'Kakao prah 100g', ingredientType: 'Kakao', packageAmount: '100g', price: 200.00, image: '🍫' },
  
  // Šećer proizvodi
  { id: 35, name: 'Šećer 1kg', ingredientType: 'Šećer', packageAmount: '1kg', price: 120.00, image: '🍬' },
  { id: 36, name: 'Šećer 2kg', ingredientType: 'Šećer', packageAmount: '2kg', price: 220.00, image: '🍬' },
  
  // Pirinčani rezanci proizvodi
  { id: 37, name: 'Ramen rezanci 400g', ingredientType: 'Pirinčani rezanci', packageAmount: '400g', price: 150.00, image: '🍜' },
  { id: 38, name: 'Pirinčani rezanci 500g', ingredientType: 'Pirinčani rezanci', packageAmount: '500g', price: 180.00, image: '🍜' },
  
  // Škampi proizvodi
  { id: 39, name: 'Škampi zamrznut 500g', ingredientType: 'Škampi', packageAmount: '500g', price: 1200.00, image: '🦐' },
  { id: 40, name: 'Škampi zamrznut 300g', ingredientType: 'Škampi', packageAmount: '300g', price: 800.00, image: '🦐' },
  
  // Kikiriki proizvodi
  { id: 41, name: 'Kikiriki smeđi 250g', ingredientType: 'Kikiriki', packageAmount: '250g', price: 200.00, image: '🥜' },
  { id: 42, name: 'Kikiriki belo 300g', ingredientType: 'Kikiriki', packageAmount: '300g', price: 250.00, image: '🥜' },
  
  // Limeta proizvodi
  { id: 43, name: 'Limeta komadi 500g', ingredientType: 'Limeta', packageAmount: '500g', price: 120.00, image: '🍈' },
  { id: 44, name: 'Limeta komadi 1kg', ingredientType: 'Limeta', packageAmount: '1kg', price: 220.00, image: '🍈' },
  
  // Soja sos proizvodi
  { id: 45, name: 'Kikkoman soja sos 250ml', ingredientType: 'Soja sos', packageAmount: '250ml', price: 250.00, image: '🫙' },
  { id: 46, name: 'San-J tamari soja sos 200ml', ingredientType: 'Soja sos', packageAmount: '200ml', price: 280.00, image: '🫙' }
];

export const DUMMY_ORDERS = [
  { id: 101, customer: 'John Doe', status: 'Pending', date: '2025-01-20', total: 25.50 },
  { id: 102, customer: 'Jane Smith', status: 'Shipped', date: '2025-01-21', total: 45.00 },
  { id: 103, customer: 'Bob Johnson', status: 'Delivered', date: '2025-01-22', total: 32.75 },
  { id: 104, customer: 'Alice Brown', status: 'Pending', date: '2025-01-23', total: 18.99 },
  { id: 105, customer: 'Charlie Wilson', status: 'Cancelled', date: '2025-01-24', total: 56.25 },
];

// Fukcija koja nalazi sastojke koje korisnik nema za dati recept
export const findMissingIngredients = (recipe, userProducts) => {
  return recipe.ingredients.filter(recipeIng => {
    const userHasProduct = userProducts.find(
      product => product.ingredientType.toLowerCase() === recipeIng.name.toLowerCase()
    );
    return !userHasProduct;
  });
};

// Fukcija koja pronalazi proizvode koji zadovoljavaju dati sastojak
export const getProductsForIngredient = (ingredientName) => {
  return DUMMY_PRODUCTS.filter(
    product => product.ingredientType.toLowerCase() === ingredientName.toLowerCase()
  );
};

// Fukcija koja pronalazi najjeftiniji proizvod za dati sastojak
export const getCheapestProductForIngredient = (ingredientName) => {
  const products = getProductsForIngredient(ingredientName);
  if (products.length === 0) return null;
  return products.reduce((prev, current) => 
    prev.price < current.price ? prev : current
  );
};

// Fukcija koja broji koliko sastojaka nedostaje
export const countMissingIngredients = (recipe, userProducts) => {
  return findMissingIngredients(recipe, userProducts).length;
};

// Fukcija koja grupiše recepte po broju nedostajućih sastojaka
export const groupRecipesByMissing = (recipes, userProducts) => {
  return {
    canMakeNow: recipes.filter(
      r => countMissingIngredients(r, userProducts) === 0
    ),
    missing1to2: recipes.filter(
      r => {
        const count = countMissingIngredients(r, userProducts);
        return count >= 1 && count <= 2;
      }
    ),
    missingMore: recipes.filter(
      r => countMissingIngredients(r, userProducts) > 2
    )
  };
};
