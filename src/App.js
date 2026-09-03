import React, { useState, useEffect } from 'react';
const Button = ({ onClick, children, className = '', type = 'button', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md group hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
const Input = ({ id, name, type, placeholder, value, onChange, className = '', required = false, ...rest }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`relative block w-full px-3 py-2 text-black placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm ${className}`}
      {...rest}
    />
  );
};
// ## Header Component
// Application Header with dynamic navigation buttons
const Header = ({ onLoginClick, onDashboardClick, onLogoutClick, onCartClick, onHomeClick, onLikedClick, user, cartItems }) => {
  return (
    <header className="py-4 bg-black text-white shadow-md sticky top-0 z-20 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4">
        <button onClick={onHomeClick} className="text-2xl font-bold text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">E-Store</button>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <button onClick={onHomeClick} className="text-white hover:text-red-500 transition-colors duration-200 hidden sm:block">Home</button>
          {user && (
            <>
              <button onClick={onLikedClick} className="relative text-white hover:text-red-500 transition-colors duration-200">
                ❤️
              </button>
              <button onClick={onCartClick} className="relative text-white hover:text-red-500 transition-colors duration-200">
                🛒
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </>
          )}
          {user ? (
            <>
              <button onClick={onDashboardClick} className="text-white hover:text-red-500 transition-colors duration-200 hidden md:block">
                My Dashboard
              </button>
              <Button onClick={onLogoutClick} className="!w-auto px-4 !py-2 bg-red-600 hover:bg-red-700">
                Log Out
              </Button>
            </>
          ) : (
            <Button onClick={onLoginClick} className="!w-auto px-4 !py-2">
              Sign In
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};
// ## Product List Component
// Component for the main product list
const ProductList = ({ products, onProductClick, onAddToCart, onLike, likedItems }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="container mx-auto py-8 px-4">
        <div className="text-center my-12">
          <h1 className="text-5xl font-extrabold text-red-500 leading-tight">
            Winter Collection
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
            Stay warm and stylish with our latest winter essentials.
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group bg-white p-4 rounded-xl shadow-lg border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
              <div
                className="w-full h-64 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => onProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <button
                onClick={() => onLike(product)}
                className={`absolute top-6 right-6 p-2 rounded-full transition-colors duration-200 ${likedItems.some(item => item.id === product.id) ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 hover:text-red-500 hover:bg-gray-300'}`}
              >
                ❤️
              </button>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 text-xl font-bold text-red-500">{product.price}</p>
              </div>
              <div className="mt-4">
                <Button
                  onClick={() => onAddToCart(product)}
                  className="!w-full py-3 text-sm"
                  disabled={product.outOfStock}
                >
                  {product.outOfStock ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
// ## Product Detail Component
// Component for a single product's detailed view
const ProductDetail = ({ product, onBack, onAddToCart, onLike, likedItems, user }) => {
  if (!product) {
    return <div>Product not found.</div>;
  }

  const isLiked = likedItems.some(item => item.id === product.id);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 md:p-8">
      <div className="container mx-auto">
        <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start bg-white p-6 rounded-lg shadow-xl text-black">
          <div className="w-full h-auto rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-4xl font-extrabold text-black">{product.name}</h1>
                <button
                  onClick={() => onLike(product)}
                  className={`p-2 rounded-full transition-colors duration-200 ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 hover:text-red-500 hover:bg-gray-300'}`}
                  disabled={!user}
                >
                  ❤️
                </button>
              </div>
              <p className="text-xl font-bold text-red-500 mb-2">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-sm font-semibold mb-2">Category: <span className="text-gray-500">{product.category}</span></p>
              <p className="text-sm font-semibold mb-6">Availability: <span className={`font-bold ${product.outOfStock ? 'text-red-500' : 'text-green-500'}`}>{product.outOfStock ? 'Out of Stock' : 'In Stock'}</span></p>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Related Information</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li><span className="font-medium text-gray-700">Material:</span> {product.relatedInfo.material}</li>
                  <li><span className="font-medium text-gray-700">Care Instructions:</span> {product.relatedInfo.care}</li>
                  <li><span className="font-medium text-gray-700">SKU:</span> {product.relatedInfo.sku}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Button
                onClick={() => onAddToCart(product)}
                className="py-3 text-sm md:flex-1"
                disabled={product.outOfStock || !user}
              >
                Add to Cart
              </Button>
              <Button
                onClick={() => onAddToCart(product, true)}
                className="py-3 text-sm md:flex-1 bg-red-500 hover:bg-red-600"
                disabled={product.outOfStock || !user}
              >
                Buy Now
              </Button>
            </div>
            {!user && <p className="mt-4 text-center text-red-500 text-sm">You must be logged in to add items to your cart or like them.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
// ## Cart Component
// Component for the user's shopping cart
const Cart = ({ cartItems, onRemoveItem, onCheckout, user }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between text-black">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </div>
                  <Button onClick={() => onRemoveItem(item.id)} className="!w-auto px-3 py-1 text-xs bg-red-500 hover:bg-red-600">
                    Remove
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-gray-400">Your cart is empty.</p>
            )}
          </div>
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md text-black">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-bold">${totalPrice}</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2 border-gray-300">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold text-red-500">${totalPrice}</span>
              </div>
            </div>
            <Button
              onClick={onCheckout}
              className="mt-6 !w-full py-3"
              disabled={cartItems.length === 0 || !user}
            >
              Proceed to Checkout
            </Button>
            {!user && <p className="mt-2 text-center text-red-500 text-sm">Please log in to checkout.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
// ## Liked Items Component
// Component for the user's liked items
const LikedItems = ({ likedItems, onAddToCart, onRemoveItem }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Your Liked Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedItems.length > 0 ? (
            likedItems.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between text-black">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-md text-gray-600">{item.price}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <Button onClick={() => onAddToCart(item)} className="!w-full py-2 text-sm bg-black hover:bg-red-500" disabled={item.outOfStock}>
                    {item.outOfStock ? 'Out of Stock' : 'Add to Cart'}
                  </Button>
                  <Button onClick={() => onRemoveItem(item.id)} className="!w-full py-2 text-sm bg-gray-400 hover:bg-gray-500">
                    Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full">You haven't liked any items yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
// ## Checkout Component
// Component for the checkout process
const Checkout = ({ user, cartItems, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: user?.shippingAddress || '',
    paymentMethod: 'cod',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      setError('Your cart is empty.');
      return;
    }
    // Simulate payment and order placement
    onPlaceOrder(formData);
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 md:p-8 flex items-center justify-center">
      <div className="container max-w-2xl bg-white p-8 rounded-lg shadow-xl text-black">
        <h2 className="text-3xl font-extrabold text-center text-red-500 mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">Shipping Information</h3>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">Payment Method</h3>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-500 border-gray-300 focus:ring-red-500"
                />
                <span className="ml-2">Cash on Delivery</span>
              </label>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === 'online'}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-500 border-gray-300 focus:ring-red-500"
                  disabled
                />
                <span className="ml-2 opacity-50">Online Payment (Coming Soon)</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <h4 className="font-semibold mb-2">Order Summary</h4>
            <ul className="text-sm text-gray-700 mb-2">
              {cartItems.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2 border-gray-300">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {error && <div className="text-center text-sm font-medium text-red-600">{error}</div>}
          <Button type="submit" className="py-3 text-lg bg-red-500 hover:bg-red-600">
            Place Order
          </Button>
        </form>
      </div>
    </div>
  );
};
// ## Order Confirmation Component
// Component to display order success message
const OrderConfirmation = ({ orderId, onContinueShopping }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-black max-w-md w-full text-center">
        <div className="text-green-500 text-6xl mb-4">
          <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-black mb-2">Order Placed!</h2>
        <p className="text-lg text-gray-700 mb-4">Your order has been successfully placed.</p>
        <p className="text-sm text-gray-500 mb-6">Order ID: <span className="font-semibold">{orderId}</span></p>
        <Button onClick={onContinueShopping} className="py-3 text-base">
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
// ## Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState(null);

  // Sample data for products
  const PRODUCTS = [
    { id: 1, name: 'Woolen Winter Coat', category: 'Coats', price: '$220.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-tV997x86HHLHdp-19_7O8PHfz02OMqa4w&s', description: 'A classic, stylish woolen coat to keep you warm and fashionable during the coldest months. Features a double-breasted design and a soft inner lining.', relatedInfo: { material: '80% Wool, 20% Polyester', care: 'Dry clean only', sku: 'WC220' } },
    { id: 2, name: 'Stylish Padded Jacket', category: 'Jackets', price: '$180.00', image: 'https://static-01.daraz.pk/p/842d1733df9457f223356b18751bb53c.jpg', description: 'Lightweight yet incredibly warm padded jacket, perfect for urban adventures. Water-resistant outer shell and a cozy, insulated interior.', relatedInfo: { material: '100% Nylon', care: 'Machine wash cold', sku: 'PJ180' } },
    { id: 3, name: 'Comfortable Hooded Sweater', category: 'Sweaters', price: '$95.00', image: 'https://m.media-amazon.com/images/I/61WxyxqFEHL._AC_UY1000_.jpg', description: 'Made from a soft, breathable cotton blend, this sweater is your go-to for comfort. Features an adjustable drawstring hood and a kangaroo pocket.', relatedInfo: { material: '60% Cotton, 40% Polyester', care: 'Machine wash warm', sku: 'HS95' } },
    { id: 4, name: 'Warm Leather Boots', category: 'Footwear', price: '$150.00', image: 'https://images-cdn.ubuy.com.eg/64003922ab78726fee7886b4-snow-boots-for-women-waterproof-large.jpg', description: 'Durable, waterproof leather boots with a thermal lining to keep your feet dry and warm in any weather. Perfect for snowy conditions.', relatedInfo: { material: 'Genuine Leather, Rubber Sole', care: 'Wipe with damp cloth', sku: 'LB150' } },
    { id: 5, name: 'Fleece Lined Trousers', category: 'Pants', price: '$80.00', image: 'https://m.media-amazon.com/images/I/41m0Pv1mJkL._SL500_.jpg', description: 'Stay active even on cold days with these versatile fleece-lined trousers. Provides excellent insulation without sacrificing mobility.', relatedInfo: { material: '100% Polyester Fleece', care: 'Machine wash gentle cycle', sku: 'FLT80' } },
    { id: 6, name: 'Knitted Scarf and Beanie Set', category: 'Accessories', price: '$55.00', image: 'https://www.arzaan.pk/cdn/shop/products/809665221-1543983797_1_900x.jpg?v=1667679366', description: 'A soft, hand-knitted set for ultimate warmth and style. Made from a premium acrylic blend that feels great against the skin.', relatedInfo: { material: '100% Acrylic', care: 'Hand wash cold', sku: 'KB55' } },
    { id: 7, name: 'High-Neck Sweater', category: 'Sweaters', price: '$85.00', image: 'https://static-01.daraz.pk/p/728fc334ac2c719d7c0b40fea14ad2c3.jpg', description: 'A fashionable high-neck sweater that’s perfect for layering. Its ribbed texture and slim fit provide a modern silhouette.', relatedInfo: { material: '70% Viscose, 30% Nylon', care: 'Machine wash cold', sku: 'HNS85' } },
    { id: 8, name: 'Heavy-Duty Snow Boots', category: 'Footwear', price: '$190.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVhbdEMr9iq6NusjeoDycpQwQGPfCAx3bNA&s', description: 'Engineered for extreme cold, these boots offer superior traction and warmth. Features a waterproof membrane and thick insulation.', relatedInfo: { material: 'Synthetic Leather, Fleece Lining', care: 'Air dry, do not machine wash', sku: 'HD190' } },
    { id: 9, name: 'Classic Black Gloves', category: 'Accessories', price: '$30.00', image: 'https://aimeos-static-files-production.s3.eu-north-1.amazonaws.com/1.326.d/product/f/d/fd38344a_119.1101-20-e2-80-93-20rgb-20-e2-80-93-20main.webp', description: 'A timeless accessory for keeping your hands warm. Made from soft leather with a comfortable fleece lining.', relatedInfo: { material: 'Genuine Leather, Fleece', care: 'Specialist leather clean', sku: 'CBG30' } },
    { id: 10, name: 'Quilted Vest', category: 'Vests', price: '$110.00', image: 'https://retailobjects.scoutshop.org/media/catalog/product/cache/6146171d1b2720fb4258aa21dfaa2bd4/b/s/bsa-lizardhead-quilted-vest-group.jpg', description: 'A versatile layer for transitional weather. Features a stylish quilted pattern and a zippered front.', relatedInfo: { material: '100% Polyester', care: 'Machine wash warm', sku: 'QV110', outOfStock: true } },
    { id: 11, name: 'Thermal Base Layer', category: 'Apparel', price: '$60.00', image: 'https://www.nationwideschooluniforms.co.uk/media/catalog/product/cache/ba271a5d3ea08bc84c26dd54c762a5cf/d/l/dl900_black_navy_baselayer_top.png', description: 'The foundation of any cold-weather outfit. This base layer wicks moisture and traps heat to keep you dry and comfortable.', relatedInfo: { material: '85% Polyester, 15% Spandex', care: 'Machine wash cold', sku: 'TBL60' } },
    { id: 12, name: 'Long Wool Socks (Pack of 3)', category: 'Socks', price: '$25.00', image: 'https://tradehome.com/cdn/shop/files/142245.jpg?v=1734536153', description: 'Keep your feet cozy with this pack of three long wool socks. Perfect for wearing with boots and for extra warmth.', relatedInfo: { material: '50% Wool, 50% Nylon', care: 'Machine wash cold', sku: 'LWS25' } },
    { id: 13, name: 'Stylish Trench Coat', category: 'Coats', price: '$280.00', image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/n/21/682e79e6-656b-44f6-a511-09967272e4f5.jpg', description: 'A timeless piece for your wardrobe. This trench coat combines classic design with modern functionality.', relatedInfo: { material: '70% Cotton, 30% Nylon', care: 'Dry clean only', sku: 'STC280' } },
    { id: 14, name: 'Waterproof Ski Pants', category: 'Pants', price: '$140.00', image: 'https://www.ororowear.com/cdn/shop/files/Frame_36776.webp?v=1756093391&width=1946', description: 'Designed for the slopes, these pants are fully waterproof and insulated. Features adjustable waist and ankle gaiters.', relatedInfo: { material: '100% Waterproof Polyester', care: 'Wipe with damp cloth', sku: 'WSP140' } },
    { id: 15, name: 'Insulated Winter Hat', category: 'Accessories', price: '$45.00', image: 'https://img.kwcdn.com/product/open/2022-11-28/1669623752818-91493b44eb884e25840e51f45d8b6e1a-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp?odnHeight=117&odnWidth=117&odnBg=FFFFFF', description: 'Keeps your head and ears warm without the bulk. Perfect for everyday wear in cold climates.', relatedInfo: { material: 'Fleece, Polyester', care: 'Hand wash cold', sku: 'IWH45' } },
  ];

  // Load state from localStorage on component mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedCart = localStorage.getItem('cart');
      const storedLiked = localStorage.getItem('likedItems');

      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setCurrentView('home');
      }

      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }

      if (storedLiked) {
        setLikedItems(JSON.parse(storedLiked));
      }
    } catch (e) {
      console.error("Failed to load data from localStorage:", e);
      // Fallback to empty state
      setCartItems([]);
      setLikedItems([]);
      setUser(null);
    }
  }, []);

  // Save cart and liked items to localStorage 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  // Handle user authentication (Login/Signup)
  const handleAuth = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');

      if (authMode === 'signup') {
        const name = e.target.name.value;
        const gender = e.target.gender.value;
        if (users[email]) {
          setError('This email is already registered.');
          setIsLoading(false);
          return;
        }
        const newUser = { name, email, password, gender };
        users[email] = newUser;
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setCurrentView('home');
        setIsLoading(false);
      } else { // Login mode
        if (users[email] && users[email].password === password) {
          const userDetails = users[email];
          setUser(userDetails);
          localStorage.setItem('user', JSON.stringify(userDetails));
          setCurrentView('home');
          setIsLoading(false);
        } else {
          setError('Invalid email or password.');
          setIsLoading(false);
        }
      }
    }, 1000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setCurrentView('home');
  };

  const handleProductClick = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    setSelectedProduct(product);
    setCurrentView('productDetail');
  };

  const handleAddToCart = (product, isBuyNow = false) => {
    if (!user) {
      setCurrentView('auth');
      return;
    }
    setCartItems(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart;
      }
      return [...prevCart, product];
    });
    if (isBuyNow) {
      setCurrentView('cart');
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleLike = (product) => {
    if (!user) {
      setCurrentView('auth');
      return;
    }
    setLikedItems(prevLiked => {
      if (prevLiked.some(item => item.id === product.id)) {
        return prevLiked.filter(item => item.id !== product.id);
      } else {
        return [...prevLiked, product];
      }
    });
  };

  const handleRemoveLikedItem = (itemId) => {
    setLikedItems(prevLiked => prevLiked.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    if (user && cartItems.length > 0) {
      setCurrentView('checkout');
    } else if (!user) {
      setCurrentView('auth');
    }
  };

  const handlePlaceOrder = (checkoutData) => {
    // Simulate placing an order
    const newOrderId = `ORD-${Date.now()}`;
    setOrderId(newOrderId);
    // Clear the cart after "successful" checkout
    setCartItems([]);
    // Update user's purchase history (mock data)
    setUser(prevUser => {
      const updatedUser = {
        ...prevUser,
        purchaseHistory: [
          ...(prevUser.purchaseHistory || []),
          ...cartItems.map(item => ({
            id: item.id,
            item: item.name,
            price: item.price,
            date: new Date().toISOString().slice(0, 10),
          }))
        ],
        shippingAddress: checkoutData.address,
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      const allUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
      allUsers[user.email] = updatedUser;
      localStorage.setItem('registeredUsers', JSON.stringify(allUsers));
      return updatedUser;
    });

    setCurrentView('orderConfirmation');
  };

  // Main render logic based on currentView
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <ProductList products={PRODUCTS} onProductClick={handleProductClick} onAddToCart={handleAddToCart} onLike={handleLike} likedItems={likedItems} />;
      case 'productDetail':
        return <ProductDetail product={selectedProduct} onBack={() => setCurrentView('home')} onAddToCart={handleAddToCart} onLike={handleLike} likedItems={likedItems} user={user} />;
      case 'cart':
        return <Cart cartItems={cartItems} onRemoveItem={handleRemoveFromCart} onCheckout={handleCheckout} user={user} />;
      case 'liked':
        return <LikedItems likedItems={likedItems} onAddToCart={handleAddToCart} onRemoveItem={handleRemoveLikedItem} />;
      case 'checkout':
        return <Checkout user={user} cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />;
      case 'orderConfirmation':
        return <OrderConfirmation orderId={orderId} onContinueShopping={() => setCurrentView('home')} />;
      case 'auth':
        return <AuthComponent authMode={authMode} setAuthMode={setAuthMode} handleAuth={handleAuth} isLoading={isLoading} error={error} />;
      case 'dashboard':
        return <DashboardComponent user={user} handleLogout={handleLogout} handleMainView={() => setCurrentView('home')} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header
        onLoginClick={() => { setAuthMode('login'); setCurrentView('auth'); }}
        onDashboardClick={() => { if (user) setCurrentView('dashboard'); else { setAuthMode('login'); setCurrentView('auth'); } }}
        onLogoutClick={handleLogout}
        onCartClick={() => setCurrentView('cart')}
        onHomeClick={() => setCurrentView('home')}
        onLikedClick={() => setCurrentView('liked')}
        user={user}
        cartItems={cartItems}
      />
      {renderView()}
      <footer className="py-8 bg-black border-t border-gray-800 text-center text-gray-500">
        <p>&copy; 2025 E-Store. All rights reserved.</p>
      </footer>
    </div>
  );
};
// ## Authentication & Dashboard Components 
const AuthComponent = ({
  authMode,
  setAuthMode,
  handleAuth,
  isLoading,
  error,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-black">
            {authMode === 'login' ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {authMode === 'login' ? 'Sign in to your account.' : 'Sign up to get started.'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          {authMode === 'signup' && (
            <>
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <Input id="name" name="name" type="text" placeholder="Full Name" required />
              </div>
              <div>
                <label htmlFor="gender" className="sr-only">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="relative block w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <Input id="email" name="email" type="email" placeholder="Email address" required />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <Input id="password" name="password" type="password" placeholder="Password" required />
          </div>
          {error && (
            <div className="text-sm font-medium text-red-600 text-center">{error}</div>
          )}
          <div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.062 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (authMode === 'login' ? 'Sign In' : 'Sign Up')}
            </Button>
          </div>
        </form>
        <div className="text-center text-sm">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="font-medium text-red-500 hover:text-red-600 focus:outline-none"
          >
            {authMode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};
const DashboardComponent = ({ user, handleLogout, handleMainView }) => {
  const [dashboardView, setDashboardView] = useState('profile');

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-lg">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="container p-4 mx-auto md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-red-500">My Dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ul className="bg-white rounded-lg shadow-md p-4 space-y-2 text-black font-semibold">
              <li>
                <button
                  onClick={() => setDashboardView('profile')}
                  className={`w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ${dashboardView === 'profile' ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100'}`}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => setDashboardView('orders')}
                  className={`w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ${dashboardView === 'orders' ? 'bg-red-100 text-red-700' : 'hover:bg-gray-100'}`}
                >
                  My Orders
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/4">
            {dashboardView === 'profile' && (
              <div className="bg-white p-6 rounded-lg shadow-md text-black">
                <h3 className="text-xl font-semibold mb-4 text-black">Profile Information</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-yellow-400 bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl font-bold text-black">
                      {user.name ? user.name[0].toUpperCase() : 'U'}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-500 capitalize">Gender: {user.gender}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-md mt-4">
                  <h5 className="font-semibold mb-2">Shipping Address</h5>
                  <p className="text-gray-700">{user.shippingAddress}</p>
                </div>
              </div>
            )}
            {dashboardView === 'orders' && (
              <div className="p-6 bg-white rounded-lg shadow-md text-black">
                <h3 className="mb-4 text-xl font-semibold text-black">My Orders</h3>
                <ul className="space-y-4">
                  {user.purchaseHistory && user.purchaseHistory.length > 0 ? (
                    user.purchaseHistory.map((order) => (
                      <li key={order.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {order.item}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            Purchased on: {order.date}
                          </p>
                        </div>
                        <div className="ml-4 text-sm font-semibold text-right text-gray-700">
                          {order.price}
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">You have no past orders.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;