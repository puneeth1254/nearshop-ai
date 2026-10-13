
import { useState } from "react";
import "./AiRecommendations.css";

const extraProducts = [
  // FASHION — MEN
  { id: "f1", name: "Men T-Shirt", category: "Fashion", price: 499, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
  { id: "f2", name: "Men Shirt", category: "Fashion", price: 799, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
  { id: "f3", name: "Men Jeans", category: "Fashion", price: 1199, shop: "Denim House", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
  { id: "f4", name: "Men Hoodie", category: "Fashion", price: 999, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
  { id: "f5", name: "Men Jacket", category: "Fashion", price: 1799, shop: "Style Hub", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500" },
  { id: "f6", name: "Men Formal Trousers", category: "Fashion", price: 899, shop: "Style Hub", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500" },
  { id: "f7", name: "Men Kurta", category: "Fashion", price: 999, shop: "Ethnic Wear Store", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500" },
  { id: "f8", name: "Men Shorts", category: "Fashion", price: 399, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500" },

  // FASHION — WOMEN
  { id: "f9", name: "Women Dress", category: "Fashion", price: 1299, shop: "Women Style", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" },
  { id: "f10", name: "Women Saree", category: "Fashion", price: 1599, shop: "Ethnic Wear Store", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
  { id: "f11", name: "Women Top", category: "Fashion", price: 599, shop: "Women Style", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500" },
  { id: "f12", name: "Women Jeans", category: "Fashion", price: 999, shop: "Denim House", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
  { id: "f13", name: "Women Kurti", category: "Fashion", price: 799, shop: "Ethnic Wear Store", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e8?w=500" },
  { id: "f14", name: "Women Jacket", category: "Fashion", price: 1499, shop: "Women Style", image: "https://images.unsplash.com/photo-1548624149-fb3c8c7a4b8e?w=500" },

  // FOOTWEAR
  { id: "f15", name: "Running Shoes", category: "Footwear", price: 1799, shop: "Shoe Corner", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
  { id: "f16", name: "Casual Sneakers", category: "Footwear", price: 1499, shop: "Shoe Corner", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500" },
  { id: "f17", name: "Formal Shoes", category: "Footwear", price: 1299, shop: "Classic Footwear", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500" },
  { id: "f18", name: "Sports Sandals", category: "Footwear", price: 699, shop: "Classic Footwear", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500" },
  { id: "f19", name: "Women Heels", category: "Footwear", price: 899, shop: "Shoe Corner", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
  { id: "f20", name: "Casual Slippers", category: "Footwear", price: 249, shop: "Classic Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },

  // ELECTRONICS
  { id: "f21", name: "Smartphone", category: "Electronics", price: 12999, shop: "Tech Store", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500" },
  { id: "f22", name: "Laptop", category: "Electronics", price: 45999, shop: "Computer World", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
  { id: "f23", name: "Wireless Headphones", category: "Electronics", price: 1999, shop: "Tech Store", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: "f24", name: "Bluetooth Earbuds", category: "Electronics", price: 1499, shop: "Gadget Zone", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500" },
  { id: "f25", name: "Bluetooth Speaker", category: "Electronics", price: 1799, shop: "Gadget Zone", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
  { id: "f26", name: "Gaming Keyboard", category: "Electronics", price: 2499, shop: "Computer World", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" },
  { id: "f27", name: "Wireless Mouse", category: "Electronics", price: 699, shop: "Computer World", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500" },
  { id: "f28", name: "Power Bank", category: "Electronics", price: 999, shop: "Tech Store", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500" },
  { id: "f29", name: "Smart TV", category: "Electronics", price: 24999, shop: "Home Electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500" },
  { id: "f30", name: "Tablet", category: "Electronics", price: 15999, shop: "Tech Store", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500" },
  { id: "f31", name: "Smart Watch", category: "Electronics", price: 2499, shop: "Gadget Zone", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: "f32", name: "Mobile Charger", category: "Electronics", price: 499, shop: "Tech Store", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500" },
  { id: "f33", name: "DSLR Camera", category: "Electronics", price: 39999, shop: "Camera World", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500" },
  { id: "f34", name: "Gaming Controller", category: "Electronics", price: 2999, shop: "Gadget Zone", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500" },

  // BAGS AND ACCESSORIES
  { id: "f35", name: "College Backpack", category: "Bags", price: 999, shop: "Bag World", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
  { id: "f36", name: "Laptop Bag", category: "Bags", price: 1299, shop: "Bag World", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
  { id: "f37", name: "Travel Suitcase", category: "Bags", price: 2999, shop: "Travel Store", image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500" },
  { id: "f38", name: "Women's Handbag", category: "Bags", price: 1499, shop: "Bag World", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
  { id: "f39", name: "Wallet", category: "Accessories", price: 399, shop: "Style Hub", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
  { id: "f40", name: "Leather Belt", category: "Accessories", price: 499, shop: "Style Hub", image: "https://images.unsplash.com/photo-1624222247344-550fb8c664b3?w=500" },
  { id: "f41", name: "Sunglasses", category: "Accessories", price: 799, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
  { id: "f42", name: "Cap", category: "Accessories", price: 299, shop: "Fashion Store", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500" },
  { id: "f43", name: "Wrist Watch", category: "Accessories", price: 1499, shop: "Watch World", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
  { id: "f44", name: "Silver Necklace", category: "Jewellery", price: 999, shop: "Jewellery Store", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500" },
  { id: "f45", name: "Bracelet", category: "Jewellery", price: 399, shop: "Jewellery Store", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500" },
  { id: "f46", name: "Earrings", category: "Jewellery", price: 299, shop: "Jewellery Store", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500" },

  // BEAUTY AND PERSONAL CARE
  { id: "f47", name: "Perfume", category: "Beauty", price: 999, shop: "Beauty Corner", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
  { id: "f48", name: "Face Wash", category: "Beauty", price: 249, shop: "Beauty Corner", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500" },
  { id: "f49", name: "Moisturizer", category: "Beauty", price: 399, shop: "Beauty Corner", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500" },
  { id: "f50", name: "Makeup Kit", category: "Beauty", price: 1299, shop: "Beauty Corner", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500" },
  { id: "f51", name: "Hair Dryer", category: "Personal Care", price: 1499, shop: "Home Electronics", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500" },
  { id: "f52", name: "Electric Trimmer", category: "Personal Care", price: 999, shop: "Home Electronics", image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },

  // HOME APPLIANCES
  { id: "f53", name: "Electric Kettle", category: "Home Appliances", price: 1199, shop: "Home Electronics", image: "https://images.unsplash.com/photo-1594213114663-d94db9b1718a?w=500" },
  { id: "f54", name: "Mixer Grinder", category: "Home Appliances", price: 2499, shop: "Home Electronics", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500" },
  { id: "f55", name: "Table Lamp", category: "Home Appliances", price: 799, shop: "Home Store", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
  { id: "f56", name: "Desk Chair", category: "Home Appliances", price: 3999, shop: "Home Store", image: "https://images.unsplash.com/photo-1505843490701-5be5d0b7c3a1?w=500" },
  { id: "f57", name: "Study Desk", category: "Home Appliances", price: 4999, shop: "Home Store", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500" },
  { id: "f58", name: "Wall Clock", category: "Home Appliances", price: 599, shop: "Home Store", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500" },
  { id: "f59", name: "Bedside Table", category: "Home Appliances", price: 2499, shop: "Home Store", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500" },
  { id: "f60", name: "Decorative Mirror", category: "Home Appliances", price: 1299, shop: "Home Store", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500" },
    { id: "p1", name: "Apple", category: "Fruits", price: 120, shop: "Green Mart", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500" },
  { id: "p2", name: "Banana", category: "Fruits", price: 60, shop: "Green Mart", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500" },
  { id: "p3", name: "Orange", category: "Fruits", price: 90, shop: "Green Mart", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500" },
  { id: "p4", name: "Mango", category: "Fruits", price: 100, shop: "Fruit Shop", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500" },
  { id: "p5", name: "Grapes", category: "Fruits", price: 80, shop: "Fruit Shop", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500" },
  { id: "p6", name: "Watermelon", category: "Fruits", price: 50, shop: "Green Mart", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500" },
  { id: "p7", name: "Pineapple", category: "Fruits", price: 70, shop: "Fruit Shop", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500" },
  { id: "p8", name: "Papaya", category: "Fruits", price: 45, shop: "Green Mart", image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=500" },
  { id: "p9", name: "Strawberry", category: "Fruits", price: 150, shop: "Fruit Shop", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500" },
  { id: "p10", name: "Guava", category: "Fruits", price: 60, shop: "Green Mart", image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500" },
   { id: "p11", name: "Tomato", category: "Vegetables", price: 40, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500" },
  { id: "p12", name: "Potato", category: "Vegetables", price: 35, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500" },
  { id: "p13", name: "Carrot", category: "Vegetables", price: 50, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500" },
  { id: "p14", name: "Onion", category: "Vegetables", price: 45, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500" },
  { id: "p15", name: "Cabbage", category: "Vegetables", price: 30, shop: "Fresh Vegetable Shop", image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500" },
  { id: "p16", name: "Cauliflower", category: "Vegetables", price: 40, shop: "Fresh Vegetable Shop", image: "https://images.unsplash.com/photo-1568584711271-6c929fb49e03?w=500" },
  { id: "p17", name: "Cucumber", category: "Vegetables", price: 30, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500" },
  { id: "p18", name: "Green Chilli", category: "Vegetables", price: 20, shop: "Fresh Vegetable Shop", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500" },
  { id: "p19", name: "Spinach", category: "Vegetables", price: 25, shop: "Local Fresh Shop", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500" },
  { id: "p20", name: "Beans", category: "Vegetables", price: 60, shop: "Fresh Vegetable Shop", image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=500" },

  // DAIRY AND EGGS
  { id: "p21", name: "Milk", category: "Dairy", price: 30, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500" },
  { id: "p22", name: "Curd", category: "Dairy", price: 35, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1571212515416-fca9f7e5f0f4?w=500" },
  { id: "p23", name: "Cheese", category: "Dairy", price: 120, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500" },
  { id: "p24", name: "Butter", category: "Dairy", price: 55, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500" },
  { id: "p25", name: "Paneer", category: "Dairy", price: 90, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" },
  { id: "p26", name: "Eggs", category: "Dairy", price: 70, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500" },

  // BAKERY
  { id: "p27", name: "Bread", category: "Bakery", price: 45, shop: "City Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500" },
  { id: "p28", name: "Cupcake", category: "Bakery", price: 100, shop: "City Bakery", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500" },
  { id: "p29", name: "Chocolate Cake", category: "Bakery", price: 350, shop: "City Bakery", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
  { id: "p30", name: "Cookies", category: "Bakery", price: 80, shop: "City Bakery", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500" },
  { id: "p31", name: "Donut", category: "Bakery", price: 60, shop: "City Bakery", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500" },
  { id: "p32", name: "Croissant", category: "Bakery", price: 90, shop: "City Bakery", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500" },

  // GROCERIES
  { id: "p33", name: "Rice", category: "Groceries", price: 80, shop: "Green Mart", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500" },
  { id: "p34", name: "Wheat Flour", category: "Groceries", price: 50, shop: "Green Mart", image: "https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=500" },
  { id: "p35", name: "Sugar", category: "Groceries", price: 45, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500" },
  { id: "p36", name: "Coffee", category: "Groceries", price: 180, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" },
  { id: "p37", name: "Tea Powder", category: "Groceries", price: 140, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500" },
  { id: "p38", name: "Cooking Oil", category: "Groceries", price: 150, shop: "Green Mart", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500" },
  { id: "p39", name: "Salt", category: "Groceries", price: 25, shop: "Green Mart", image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442f?w=500" },
  { id: "p40", name: "Toor Dal", category: "Groceries", price: 130, shop: "Green Mart", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500" },
  { id: "p41", name: "Biscuits", category: "Groceries", price: 30, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500" },
  { id: "p42", name: "Chocolate", category: "Groceries", price: 50, shop: "Daily Needs Store", image: "https://images.unsplash.com/photo-1548907040-4d42daa7b6b5?w=500" },

];

export default function AiRecommendations({ products = [] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");
  const [searched, setSearched] = useState(false);

  // Combine existing app products and fashion/electronics products.
  const allProducts = [
    ...products,
    ...extraProducts.filter(
      (extra) =>
        !products.some(
          (product) =>
            String(product.name ?? product.title ?? "").toLowerCase() ===
            extra.name.toLowerCase()
        )
    ),
  ];

  function searchProducts(event) {
    event.preventDefault();
    setSearched(true);
    setMessage("");
    setResults([]);

    const text = query.trim().toLowerCase();

    if (!text) {
      setMessage("Please enter a product name, category or budget.");
      return;
    }

    const budgetMatch = text.match(
      /(?:under|below|less than|max|within)\s*(?:₹|rs\.?\s*)?(\d+(?:\.\d+)?)/i
    );

    const budget = budgetMatch ? Number(budgetMatch[1]) : null;

    const searchText = text
      .replace(
        /(?:under|below|less than|max|within)\s*(?:₹|rs\.?\s*)?\d+(?:\.\d+)?/gi,
        " "
      )
      .replace(/₹|rs\.?/gi, " ")
      .replace(/\d+(?:\.\d+)?/g, " ")
      .trim();

    const words = searchText.split(/\s+/).filter(Boolean);

    const synonyms = {
      tshirt: "t-shirt",
      tshirts: "t-shirt",
      shirts: "shirt",
      shoes: "shoe",
      sneakers: "sneaker",
      watches: "watch",
      laptops: "laptop",
      mobiles: "smartphone",
      phones: "phone",
      headphones: "headphone",
      bags: "bag",
      earrings: "earring",
      jackets: "jacket",
      dresses: "dress",
      jeans: "jean",
      earbuds: "earbud",
      electronics: "electronics",
      fashion: "fashion",
      footwear: "footwear",
      accessories: "accessories",
      jewellery: "jewellery",
      beauty: "beauty",
    };

    const matched = allProducts.filter((product) => {
      const name = String(
        product.name ?? product.title ?? ""
      ).toLowerCase();

      const category = String(
        product.category ?? ""
      ).toLowerCase();

      const shop = String(
        product.shop ?? product.store ?? ""
      ).toLowerCase();

      const searchable = `${name} ${category} ${shop}`;

      const price = Number(
        String(product.price ?? "")
          .replace(/[₹,\s]/g, "")
          .match(/\d+(?:\.\d+)?/)?.[0]
      );

      const matchesSearch =
        words.length === 0 ||
        words.every((word) => {
          const normalWord = synonyms[word] ?? word;

          return (
            searchable.includes(word) ||
            searchable.includes(normalWord)
          );
        });

      const matchesBudget =
        budget === null ||
        (Number.isFinite(price) && price <= budget);

      return matchesSearch && matchesBudget;
    });

    const ranked = matched.sort((a, b) => {
      const nameA = String(a.name ?? a.title ?? "").toLowerCase();
      const nameB = String(b.name ?? b.title ?? "").toLowerCase();

      return (
        Number(nameB === searchText) -
        Number(nameA === searchText)
      );
    });

    // Display matching products only.
    setResults(ranked.slice(0, 12));

    if (ranked.length === 0) {
      setMessage(
        "No matching products found. Try Laptop, Watch, T-Shirt or Electronics."
      );
    }
  }

  return (
    <section className="ai-recommendations" id="ai-recommendations">
      <p className="ai-eyebrow">✦ SMART LOCAL SHOPPING</p>

      <h2>Find Your Perfect Product</h2>

      <p>Search fashion, electronics, footwear, bags and accessories.</p>

      <form className="ai-search-form" onSubmit={searchProducts}>
        <label htmlFor="ai-query">What are you shopping for?</label>

        <input
          id="ai-query"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Example: Laptop under 50000"
          required
        />

        <button type="submit">Find Products</button>

        <button
          type="button"
          className="ai-clear-button"
          onClick={() => {
            setQuery("");
            setResults([]);
            setMessage("");
            setSearched(false);
          }}
        >
          Clear Search
        </button>
      </form>

      {message && (
        <p className="ai-error" role="status">
          {message}
        </p>
      )}

      {searched && results.length > 0 && (
        <div className="ai-result" aria-live="polite">
          <h3>Matching Products</h3>
          <p>{results.length} matching product(s) found.</p>

          <div className="ai-product-grid">
            {results.map((product, index) => {
              const price = Number(
                String(product.price ?? "")
                  .replace(/[₹,\s]/g, "")
                  .match(/\d+(?:\.\d+)?/)?.[0]
              );

              return (
                <article
                  className="ai-product-card"
                  key={product.id ?? `${product.name ?? product.title}-${index}`}
                >
                  <img
                    className="ai-product-image"
                    src={
                      product.image ||
                      product.imageUrl ||
                      "https://placehold.co/500x350?text=Product"
                    }
                    alt={product.name ?? product.title ?? "Product"}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src =
                        "https://placehold.co/500x350?text=Image+Unavailable";
                    }}
                  />

                  <div className="ai-product-details">
                    <h3>{product.name ?? product.title ?? "Product"}</h3>
                    <p className="ai-product-category">
                      {product.category || "Other"}
                    </p>

                    <p className="ai-product-price">
                      {Number.isFinite(price)
                        ? `₹${price}`
                        : "Price unavailable"}
                    </p>

                    <div className="ai-shop-section">
                        <p>
                            <strong>Shop:</strong>{" "}
                            {product.shop || product.store || product.shopName || "Local Shop"}
                        </p>

                        <p>
                            <strong>Location:</strong>{" "}
                            {product.location || product.address || "Location not available"}
                        </p>

                        
                    <button
                        type="button"
                        onClick={() => {
                            const shopName =
                                product.shop ||
                                product.store ||
                                product.shopName ||
                                "Local Shop";

                            const location =
                                product.location ||
                                product.address ||
                                "";

                            const searchQuery = `${shopName} ${location}`.trim();

                            const mapsUrl =
                                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;

                            window.open(mapsUrl, "_blank", "noopener,noreferrer");
                        }}
                    >
                        📍 View Shop on Google Maps
                    </button>

                    </div>
                    {product.location && (
                      <p>Location: {product.location}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
