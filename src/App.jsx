

import { useMemo, useRef, useState } from "react";
import { scanProductImage } from "./aiScanner";

import "./App.css";

import AiRecommendations from "./AiRecommendations";

import ShopLocationPicker from "./ShopLocationPicker";

const initialProducts = [

  {

    id: 1,

    name: "Classic Sneakers",

    category: "Footwear",

    price: 1299,

    shop: "Style Point",

    location: "Puttur",

    description: "Comfortable everyday sneakers.",

    image:

      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",

  },

  {

    id: 2,

    name: "Wireless Headphones",

    category: "Electronics",

    price: 1899,

    shop: "Smart Tech",

    location: "Mangaluru",

    description: "Wireless headphones for music and calls.",

    image:

      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",

  },

  {

    id: 3,

    name: "Everyday Backpack",

    category: "Bags",

    price: 899,

    shop: "Bag House",

    location: "Puttur",

    description: "A practical backpack for college and travel.",

    image:

      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",

  },

  {

    id: 4,

    name: "Classic Wrist Watch",

    category: "Accessories",

    price: 1499,

    shop: "Time Zone",

    location: "Mangaluru",

    description: "A stylish watch for everyday use.",

    image:

      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700",

  },

  {

    id: 5,

    name: "Cotton T-Shirt",

    category: "Clothing",

    price: 499,

    shop: "Fashion Hub",

    location: "Puttur",

    description: "Soft cotton T-shirt for everyday wear.",

    image:

      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700",

  },

  {

    id: 6,

    name: "Fresh Grocery Basket",

    category: "Groceries",

    price: 299,

    shop: "Fresh Mart",

    location: "Puttur",

    description: "Everyday grocery essentials.",

    image:

      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700",

  },

  {

    id: 7,

    name: "Running Shoes",

    category: "Footwear",

    price: 1599,

    shop: "Shoe Corner",

    location: "Bantwal",

    description: "Lightweight shoes for walking and running.",

    image:

      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700",

  },

  {

    id: 8,

    name: "Smart Watch",

    category: "Electronics",

    price: 2299,

    shop: "Smart Tech",

    location: "Mangaluru",

    description: "A modern smartwatch for everyday activities.",

    image:

      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",

  },

  {

    id: 9,

    name: "Travel Handbag",

    category: "Bags",

    price: 999,

    shop: "Bag House",

    location: "Puttur",

    description: "A versatile handbag for travel and shopping.",

    image:

      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700",

  },

  {

    id: 10,

    name: "Casual Shirt",

    category: "Clothing",

    price: 799,

    shop: "Fashion Hub",

    location: "Bantwal",

    description: "A versatile shirt for casual occasions.",

    image:

      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=700",

  },

  {

    id: 11,

    name: "Sunglasses",

    category: "Accessories",

    price: 599,

    shop: "Style Point",

    location: "Puttur",

    description: "Stylish sunglasses for sunny days.",

    image:

      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700",

  },

  {

    id: 12,

    name: "Fresh Fruit Box",

    category: "Groceries",

    price: 399,

    shop: "Fresh Mart",

    location: "Mangaluru",

    description: "A selection of fresh seasonal fruits.",

    image:

      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700",

  },

];

const categories = [

  "All",

  "Footwear",

  "Electronics",

  "Bags",

  "Accessories",

  "Clothing",

  "Groceries",

];

function Logo() {

  return (

    <a className="brand" href="#home" aria-label="NearShop AI home">

      <span className="brand-icon">

        <svg

          viewBox="0 0 64 64"

          fill="none"

          xmlns="http://www.w3.org/2000/svg"

          aria-hidden="true"

        >

          <rect width="64" height="64" rx="20" fill="#176B45" />

          <path

            d="M17 27H47L44 49H20L17 27Z"

            stroke="white"

            strokeWidth="3.5"

            strokeLinejoin="round"

          />

          <path

            d="M24 28V22C24 17.6 27.6 14 32 14C36.4 14 40 17.6 40 22V28"

            stroke="white"

            strokeWidth="3.5"

            strokeLinecap="round"

          />

          <path

            d="M25 38L30 43L40 33"

            stroke="#B8F2CC"

            strokeWidth="3.5"

            strokeLinecap="round"

            strokeLinejoin="round"

          />

          <circle cx="47" cy="17" r="9" fill="#B8F2CC" />

          <path

            d="M47 12V22M42 17H52"

            stroke="#176B45"

            strokeWidth="2.5"

            strokeLinecap="round"

          />

        </svg>

      </span>

      <span className="brand-text">

        <span className="brand-name">

          NearShop <span>AI</span>

        </span>

        <span className="brand-tagline">Grow Your Local Market</span>

        <span className="brand-owner">PUNEETH GOWDA</span>

      </span>

    </a>

  );

}

function LocationIcon() {

  return (

    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">

      <path

        d="M19 10C19 15 12 21 12 21S5 15 5 10A7 7 0 1 1 19 10Z"

        stroke="currentColor"

        strokeWidth="1.8"

        strokeLinejoin="round"

      />

      <circle

        cx="12"

        cy="10"

        r="2.3"

        stroke="currentColor"

        strokeWidth="1.8"

      />

    </svg>

  );

}

function ProductCard({ product }) {

  return (

    <article className="product-card">

      <div className="product-image-wrap">

        <img

          className="product-image"

          src={product.image}

          alt={product.name}

          loading="lazy"

        />

        <span className="product-category">{product.category}</span>

      </div>

      <div className="product-content">

        <div className="product-shop">

          <LocationIcon />

          <span>{product.shop}</span>

          <span className="shop-dot">•</span>

          <span>{product.location}</span>

        </div>

        <h3>{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-bottom">

          <div className="product-price">

            ₹{Number(product.price).toLocaleString("en-IN")}

          </div>

          <button

            className="view-button"

            type="button"

            onClick={() => {
              if (product.latitude != null && product.longitude != null) {
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${product.latitude},${product.longitude}`;
                window.open(mapUrl, "_blank", "noopener,noreferrer");
              } else {
                window.alert(
                  `${product.name}\nPrice: ₹${product.price}\nShop: ${product.shop}\nLocation: ${product.location}\n${product.description}\n\nExact map location has not been added for this product yet.`
                );
              }
            }}

          >

            View details <span>↗</span>

          </button>

        </div>

      </div>

    </article>

  );

}

function App() {

  const [products, setProducts] = useState(initialProducts);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [maxPrice, setMaxPrice] = useState("5000");

  const [message, setMessage] = useState("");

  const [imagePreview, setImagePreview] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState("");
  const aiImageRef = useRef(null);

  const [shopLocation, setShopLocation] = useState(null);

  const [form, setForm] = useState({

    name: "",

    category: "Footwear",

    price: "",

    shop: "",

    location: "Puttur",

    description: "",

    image: "",

  });

  const filteredProducts = useMemo(() => {

    const query = search.trim().toLowerCase();

    const priceLimit = maxPrice === "" ? Infinity : Number(maxPrice);

    return products.filter((product) => {

      const matchesSearch = [

        product.name,

        product.category,

        product.shop,

        product.location,

        product.description,

      ]

        .join(" ")

        .toLowerCase()

        .includes(query);

      const matchesCategory =

        category === "All" || product.category === category;

      return (

        matchesSearch &&

        matchesCategory &&

        Number(product.price) <= priceLimit

      );

    });

  }, [products, search, category, maxPrice]);

  function handleFormChange(event) {

    const { name, value } = event.target;

    setForm((previous) => ({ ...previous, [name]: value }));

  }

  function handlePhotoChange(event) {

    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {

      setMessage("Please choose a valid image file.");

      return;

    }

    if (file.size > 5 * 1024 * 1024) {

      setMessage("Please choose an image smaller than 5 MB.");

      return;

    }

    const reader = new FileReader();

    reader.onload = () => {

      const imageData = String(reader.result || "");

      setImagePreview(imageData);

      setForm((previous) => ({ ...previous, image: imageData }));

      setMessage("");

    };

    reader.readAsDataURL(file);

  }

  async function handleAIScan() {
    if (!imagePreview) {
      setScanError("Please upload a product image first.");
      return;
    }

    setIsScanning(true);
    setScanError("");
    setAiSuggestions([]);

    try {
      const image = aiImageRef.current;

      if (!image) {
        throw new Error("Image preview was not found. Please upload the photo again.");
      }

      if (!image.complete || !image.naturalWidth) {
        await new Promise((resolve, reject) => {
          const timeoutId = setTimeout(
            () => reject(new Error("The uploaded image took too long to load. Please upload it again.")),
            10000
          );

          image.onload = () => {
            clearTimeout(timeoutId);
            resolve();
          };

          image.onerror = () => {
            clearTimeout(timeoutId);
            reject(new Error("Could not load the uploaded image. Please choose another photo."));
          };
        });
      }

      console.log("AI Scanner: starting image classification...");
      const results = await scanProductImage(image);
      setAiSuggestions(results);

      if (!results.length) {
        setScanError("The AI could not identify this image. Try a clearer photo.");
      }
    } catch (error) {
      console.error("AI scan failed:", error);
      setScanError(
        error?.message || "AI scanning failed. Check your internet connection and try again."
      );
    } finally {
      setIsScanning(false);
    }
  }

  function handleAddProduct(event) {

    event.preventDefault();

    if (

      !form.name.trim() ||

      !form.price ||

      Number(form.price) <= 0 ||

      !form.shop.trim() ||

      !form.location.trim()

    ) {

      setMessage("Please fill in all required fields correctly.");

      return;

    }

    const newProduct = {

      id: Date.now(),

      name: form.name.trim(),

      category: form.category,

      price: Number(form.price),

      shop: form.shop.trim(),

      location: form.location.trim(),

      description: form.description.trim() || "Locally available product.",

      image:

        form.image ||

        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=700",
      latitude: shopLocation?.lat ?? null,
      longitude: shopLocation?.lng ?? null,

    };

    setProducts((previous) => [newProduct, ...previous]);

    setForm({

      name: "",

      category: "Footwear",

      price: "",

      shop: "",

      location: "Puttur",

      description: "",

      image: "",

    });

    setImagePreview("");
    setAiSuggestions([]);
    setScanError("");
    setIsScanning(false);

    setShopLocation(null);

    setMessage("Product added successfully!");

    setSearch("");

    setCategory("All");

    setMaxPrice("5000");

    document.getElementById("products")?.scrollIntoView({

      behavior: "smooth",

    });

  }

  function clearFilters() {

    setSearch("");

    setCategory("All");

    setMaxPrice("5000");

  }

  return (

    <div className="app-shell" id="home">

      <header className="navbar" id="site-navbar">

        <Logo />

        <nav className="nav-links" aria-label="Main navigation">

          <a className="nav-link active" href="#home">

            Home

          </a>

          <a className="nav-link" href="#products">

            Explore Products

          </a>

          <a className="nav-link" href="#add-product">

            Sell Locally

          </a>

        </nav>

        <a className="nav-location" href="#products">

          <span className="nav-location-icon">

            <LocationIcon />

          </span>

          <span>Shop Local</span>

          <span className="nav-arrow">↗</span>

        </a>

      </header>

      <main>

        <section className="hero">

          <div className="hero-background-shape shape-one" />

          <div className="hero-background-shape shape-two" />

          <div className="hero-inner">

            <div className="hero-copy">

              <div className="hero-badge">

                <span className="badge-sparkle">✦</span>

                YOUR NEIGHBOURHOOD, REIMAGINED

              </div>

              <h1>

                Discover local.

                <br />

                <span>Shop smarter.</span>

              </h1>

              <p className="hero-description">

                Find the products you love from shops around your

                neighbourhood. Support local businesses and discover more,

                right around the corner.

              </p>

              <div className="hero-actions">

                <a className="button-primary" href="#products">

                  Explore products <span>↗</span>

                </a>

                <a className="button-secondary" href="#add-product">

                  + List your product

                </a>

              </div>

              <div className="hero-trust">

                <div className="trust-icon">✓</div>

                <p>

                  <strong>Local finds. Real shops.</strong>

                  <span>Made for your community.</span>

                </p>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-image-main">

                <img

                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"

                  alt="A welcoming local retail shop"

                />

              </div>

              <div className="floating-card floating-card-top">

                <span className="floating-icon green-icon">✦</span>

                <span>

                  <strong>Shop nearby</strong>

                  <small>Discover local favourites</small>

                </span>

              </div>

              <div className="floating-card floating-card-bottom">

                <span className="floating-icon orange-icon">⌖</span>

                <span>

                  <strong>Made local, for you</strong>

                  <small>Support your neighbourhood</small>

                </span>

              </div>

              <div className="hero-image-caption">

                <span className="caption-dot" />

                Your community marketplace

              </div>

            </div>

          </div>

          <div className="hero-bottom">

            <span>DISCOVER</span>

            <span className="hero-bottom-line" />

            <span>CONNECT</span>

            <span className="hero-bottom-line" />

            <span>SUPPORT LOCAL</span>

          </div>

        </section>

         <AiRecommendations products={products} />

        <section className="benefits section-container">

          <div className="section-eyebrow">

            <span /> THE LOCAL ADVANTAGE

          </div>

          <div className="benefits-heading">

            <h2>

              Good things are

              <br />

              <span>closer than you think.</span>

            </h2>

            <p>

              A simpler way to discover local products and help neighbourhood

              businesses thrive.

            </p>

          </div>

          <div className="benefits-grid">

            <article className="benefit-card">

              <div className="benefit-icon">⌕</div>

              <h3>Discover nearby</h3>

              <p>Find products from stores in your local area.</p>

            </article>

            <article className="benefit-card">

              <div className="benefit-icon">◇</div>

              <h3>Shop with purpose</h3>

              <p>Explore local options and support small businesses.</p>

            </article>

            <article className="benefit-card">

              <div className="benefit-icon">↗</div>

              <h3>Grow together</h3>

              <p>Help local sellers reach more customers nearby.</p>

            </article>

          </div>

        </section>

        <section className="products-section" id="products">

          <div className="section-container">

            <div className="section-eyebrow">

              <span /> THE NEIGHBOURHOOD MARKETPLACE

            </div>

            <div className="products-heading">

              <div>

                <h2>

                  Find your next

                  <br />

                  <span>local favourite.</span>

                </h2>

                <p>Explore products available from neighbourhood shops.</p>

              </div>

              <div className="product-count">

                <strong>{filteredProducts.length}</strong>

                <span>products found</span>

              </div>

            </div>

            <div className="filter-panel">

              <div className="search-box">

                <span className="search-icon">⌕</span>

                <input

                  type="search"

                  value={search}

                  onChange={(event) => setSearch(event.target.value)}

                  placeholder="Search products, shops or locations..."

                  aria-label="Search products, shops or locations"

                />

              </div>

              <div className="filter-controls">

                <label className="filter-field">

                  <span>Category</span>

                  <select

                    value={category}

                    onChange={(event) => setCategory(event.target.value)}

                  >

                    {categories.map((item) => (

                      <option key={item} value={item}>

                        {item}

                      </option>

                    ))}

                  </select>

                </label>

                <label className="filter-field">

                  <span>Maximum price (₹)</span>

                  <input

                    type="number"

                    min="0"

                    value={maxPrice}

                    onChange={(event) => setMaxPrice(event.target.value)}

                    placeholder="Any price"

                  />

                </label>

                <button

                  type="button"

                  className="clear-filters"

                  onClick={clearFilters}

                >

                  Clear filters

                </button>

              </div>

            </div>

            {filteredProducts.length > 0 ? (

              <div className="products-grid">

                {filteredProducts.map((product) => (

                  <ProductCard key={product.id} product={product} />

                ))}

              </div>

            ) : (

              <div className="empty-state">

                <div className="empty-icon">⌕</div>

                <h3>No products found</h3>

                <p>Try another search term or change your filters.</p>

                <button

                  type="button"

                  className="button-primary"

                  onClick={clearFilters}

                >

                  Show all products

                </button>

              </div>

            )}

          </div>

        </section>

        <section className="add-section" id="add-product">

          <div className="section-container add-layout">

            <div className="add-copy">

              <div className="section-eyebrow">

                <span /> FOR LOCAL SELLERS

              </div>

              <h2>

                Your shop deserves

                <br />

                <span>to be discovered.</span>

              </h2>

              <p>

                Add a product to the marketplace and help nearby customers

                discover what your shop offers.

              </p>

              <div className="seller-points">

                <div>

                  <span className="seller-check">✓</span>

                  Showcase your products

                </div>

                <div>

                  <span className="seller-check">✓</span>

                  Reach nearby shoppers

                </div>

                <div>

                  <span className="seller-check">✓</span>

                  Support your local community

                </div>

              </div>

            </div>

            <form className="product-form" onSubmit={handleAddProduct}>

              <div className="form-heading">

                <div>

                  <span className="form-kicker">SELL LOCALLY</span>

                  <h3>Add a product</h3>

                </div>

                <span className="form-plus">+</span>

              </div>

              <p className="form-description">

                Enter your product details below.

              </p>

              <div className="form-grid">

                <label className="form-field full-width">

                  Product name *

                  <input

                    type="text"

                    name="name"

                    value={form.name}

                    onChange={handleFormChange}

                    placeholder="e.g. Classic Sneakers"

                    required

                  />

                </label>

                <label className="form-field">

                  Category *

                  <select

                    name="category"

                    value={form.category}

                    onChange={handleFormChange}

                    required

                  >

                    {categories

                      .filter((item) => item !== "All")

                      .map((item) => (

                        <option key={item} value={item}>

                          {item}

                        </option>

                      ))}

                  </select>

                </label>

                <label className="form-field">

                  Price (₹) *

                  <input

                    type="number"

                    name="price"

                    min="1"

                    value={form.price}

                    onChange={handleFormChange}

                    placeholder="499"

                    required

                  />

                </label>

                <label className="form-field">

                  Shop name *

                  <input

                    type="text"

                    name="shop"

                    value={form.shop}

                    onChange={handleFormChange}

                    placeholder="Your shop name"

                    required

                  />

                </label>

                <label className="form-field">

                  Location *

                  <input

                    type="text"

                    name="location"

                    value={form.location}

                    onChange={handleFormChange}

                    placeholder="e.g. Puttur"

                    required

                  />

                </label>

                <label className="form-field full-width">

                  Description

                  <textarea

                    name="description"

                    value={form.description}

                    onChange={handleFormChange}

                    placeholder="Describe your product..."

                    rows="3"

                  />

                </label>

                <div className="form-field full-width">

                  <span className="field-label">Product photo</span>

                  <label className="upload-area">

                    {imagePreview ? (

                      <img

                        ref={aiImageRef}

                        src={imagePreview}

                        alt="Product preview"

                        className="upload-preview"

                      />

                    ) : (

                      <>

                        <span className="upload-icon">↑</span>

                        <strong>Upload a product image</strong>

                        <small>Image file, maximum 5 MB</small>

                      </>

                    )}

                    <input

                      className="file-input"

                      type="file"

                      accept="image/*"

                      onChange={handlePhotoChange}

                    />

                  </label>

                </div>

              </div>

              {imagePreview && (
                <div className="form-field full-width ai-scan-panel">
                  <button
                    type="button"
                    className="submit-product"
                    onClick={handleAIScan}
                    disabled={isScanning}
                  >
                    {isScanning ? "🤖 Scanning image..." : "🤖 Identify Product with AI"}
                  </button>

                  {scanError && <p role="alert">{scanError}</p>}

                  {aiSuggestions.length > 0 && (
                    <div className="ai-suggestions">
                      <h4>AI suggestions — choose the correct item</h4>
                      {aiSuggestions.map((item, index) => (
                        <button
                          type="button"
                          key={`${item.name}-${index}`}
                          onClick={() => {
                            setForm((previous) => ({ ...previous, name: item.name }));
                            setAiSuggestions([]);
                            setScanError("");
                          }}
                        >
                          {item.name} ({item.confidence}%)
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="form-field full-width">
                <ShopLocationPicker
                  onSave={(location) => {
                    setShopLocation(location);
                    setMessage("Shop location selected successfully!");
                  }}
                />
                {shopLocation && (
                  <p>
                    📍 ಆಯ್ಕೆ ಮಾಡಿದ ಸ್ಥಳ: {shopLocation.lat.toFixed(6)}, {" "}
                    {shopLocation.lng.toFixed(6)}
                  </p>
                )}
              </div>

              {message && (

                <p

                  className={

                    message.includes("successfully")

                      ? "form-message success"

                      : "form-message"

                  }

                  role="status"

                >

                  {message}

                </p>

              )}

              <button className="submit-product" type="submit">

                Add product to marketplace <span>↗</span>

              </button>

              <p className="form-note">

                * Required fields. This demo stores products in page memory

                only.

              </p>

            </form>

          </div>

        </section>

        <section className="closing-banner">

          <div className="closing-content">

            <div className="closing-symbol">✳</div>

            <h2>

              Think local.

              <br />

              <span>Make a difference.</span>

            </h2>

            <p>

              Every local purchase helps a neighbourhood business grow.

            </p>

            <a className="closing-button" href="#products">

              Explore the marketplace <span>↗</span>

            </a>

          </div>

          <div className="closing-decoration decoration-one" />

          <div className="closing-decoration decoration-two" />

        </section>

      </main>

      <footer className="footer">

        <div className="footer-main">

          <Logo />

          <p className="footer-message">

            Discover local products. Support local businesses.

          </p>

          <a className="footer-back-top" href="#home">

            Back to top ↑

          </a>

        </div>

        <div className="footer-bottom">

          <span>© {new Date().getFullYear()} NearShop AI</span>

          <span>Built to help local businesses grow.</span>

          <span className="footer-credit">Created by PUNEETH GOWDA</span>

        </div>

      </footer>

    </div>

  );

}

export default App;
