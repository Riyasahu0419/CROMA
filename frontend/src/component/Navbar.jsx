import React, { useState, Fragment } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CromaNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Kitchen Appliances');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Televisions & Accessories", path: "/televisions-accessories" },
    { name: "Home Appliances", path: "/home-appliances" },
    { name: "Phones & Wearables", path: "/phones-wearables" },
    { name: "Computers & Tablets", path: "/computers-tablets" },
    { name: "Kitchen Appliances", path: "/kitchen-appliances" },
    { name: "Audio & Video", path: "/audio-video" },
    { name: "Health & Fitness", path: "/health-fitness" },
    { name: "Grooming & Personal Care", path: "/grooming-personal-care" },
  ];

  const subcategories = {
    "Kitchen Appliances": [
      { name: "All Kitchen Appliances", path: "/kitchen-appliances/all" },
      { name: "Dishwashers", path: "/kitchen-appliances/dishwashers" },
      { name: "Microwave & Ovens", path: "/kitchen-appliances/microwave-ovens", hasSubmenu: true },
      { name: "Microwave Accessories", path: "/kitchen-appliances/microwave-accessories" },
      { name: "Water Purifiers & Dispensers", path: "/kitchen-appliances/water-purifiers-dispensers", hasSubmenu: true },
      { name: "Stoves & Cooktops", path: "/kitchen-appliances/stoves-cooktops", hasSubmenu: true },
      { name: "Electric Chimneys", path: "/kitchen-appliances/electric-chimneys" },
      { name: "Food Preparation Appliances", path: "/kitchen-appliances/food-preparation", hasSubmenu: true },
      { name: "Steamers & Cookers", path: "/kitchen-appliances/steamers-cookers", hasSubmenu: true },
      { name: "Beverage Makers", path: "/kitchen-appliances/beverage-makers", hasSubmenu: true },
      { name: "Toasters & Sandwich Makers", path: "/kitchen-appliances/toasters-sandwich-makers", hasSubmenu: true },
      { name: "Cooking Appliances", path: "/kitchen-appliances/cooking-appliances", hasSubmenu: true },
      { name: "Cooking Utensils", path: "/kitchen-appliances/cooking-utensils" },
      { name: "Kitchen Utilities", path: "/kitchen-appliances/kitchen-utilities", hasSubmenu: true },
      { name: "Cookware Accessories", path: "/kitchen-appliances/cookware-accessories" },
      { name: "Flour Mill Machines", path: "/kitchen-appliances/flour-mill-machines" }
    ]
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black text-white w-ful  ">
        <div className="container mx-auto px-4 md:px-20 py-6 flex items-center justify-between">
          {/* Left section - Logo and Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Croma Logo */}
            <Link to="/" className="text-xl md:text-2xl font-bold">
              <img 
                src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" 
                alt="Croma" 
                className="h-8 md:h-8"
              />
            </Link>
            
            {/* Menu Toggle */}
            <button 
              className="flex items-center text-white" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="ml-1 text-sm">Menu</span>
            </button>
          </div>
          
          {/* Middle Section - Search Bar */}
          <div className="hidden md:flex flex-1 mx-4 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="w-full py-2 px-4 rounded-md bg-white text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-r-md h-8 flex items-center px-2"
                aria-label="Search"
              >
                <Search className="text-gray-500" size={20} />
              </button>
            </div>
          </div>
          
          {/* Right Section - Location, User, Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Location */}
            <div className="flex items-center">
              <MapPin size={20} />
              <div className="ml-1 hidden md:flex flex-col">
                <div className="flex items-center">
                  <span className="text-sm mr-1">Mumbai, 400049</span>
                  <ChevronDown size={12} />
                </div>
              </div>
            </div>
            
            {/* User Account */}
            <Link to="/login" aria-label="User account">
              <User size={20} />
            </Link>
            
            {/* Shopping Cart */}
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <ShoppingCart size={20} />
              
            </Link>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden px-2 pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="w-full py-2 px-4 rounded-md bg-white text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-r-md h-8 flex items-center px-2"
              aria-label="Search"
            >
              <Search className="text-gray-500" size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-gray-800 text-white z-50 flex flex-col md:flex-row border-t border-gray-700">
          {/* Mobile Menu View */}
          {isMobileMenuOpen && window.innerWidth < 768 ? (
            <div className="w-full">
              {/* Exclusive at Croma */}
              <Link to="/exclusive" className="px-4 py-3 flex items-center border-b border-gray-700">
                <span className="font-medium">Exclusive At Croma</span>
              </Link>
              
              {/* Top Brands */}
              <Link to="/brands" className="px-4 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center">
                  <span className="font-medium">Top Brands</span>
                </div>
                <ChevronRight size={18} />
              </Link>
              
              {/* Croma Store Locator */}
              <Link to="/store-locator" className="px-4 py-3 flex items-center border-b border-gray-700">
                <span className="font-medium">Croma Store Locator</span>
              </Link>
              
              {/* Gift Card */}
              <Link to="/gift-card" className="px-4 py-3 flex items-center border-b border-gray-700">
                <span className="font-medium">Gift Card</span>
              </Link>
              
              {/* Shop by Category Heading */}
              <div className="px-4 py-3 font-bold text-lg border-b border-gray-700">
                Shop by Category
              </div>
              
              {/* Category List */}
              <div className="max-h-96 overflow-y-auto">
                {categories.map((category) => (
                  <Link 
                    to={category.path}
                    key={category.name}
                    className={`px-4 py-3 flex items-center justify-between ${selectedCategory === category.name ? 'bg-green-400 text-black' : 'hover:bg-gray-700'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategorySelect(category.name);
                    }}
                  >
                    <span>{category.name}</span>
                    <ChevronRight size={18} />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Left Menu Panel - Desktop */}
              <div className="w-full md:w-1/3 border-r border-gray-700">
                {/* Exclusive at Croma */}
                <Link to="/exclusive" className="px-4 py-3 flex items-center border-b border-gray-700">
                  <span className="font-medium">Exclusive At Croma</span>
                </Link>
                
                {/* Top Brands */}
                <Link to="/brands" className="px-4 py-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex items-center">
                    <span className="font-medium">Top Brands</span>
                  </div>
                  <ChevronRight size={18} />
                </Link>
                
                {/* Croma Store Locator */}
                <Link to="/store-locator" className="px-4 py-3 flex items-center border-b border-gray-700">
                  <span className="font-medium">Croma Store Locator</span>
                </Link>
                
                {/* Gift Card */}
                <Link to="/gift-card" className="px-4 py-3 flex items-center border-b border-gray-700">
                  <span className="font-medium">Gift Card</span>
                </Link>
                
                {/* Shop by Category Heading */}
                <div className="px-4 py-3 font-bold text-lg border-b border-gray-700">
                  Shop by Category
                </div>
                
                {/* Category List */}
                <div className="max-h-96 overflow-y-auto">
                  {categories.map((category) => (
                    <Link 
                      to={category.path}
                      key={category.name}
                      className={`px-4 py-3 flex items-center justify-between ${selectedCategory === category.name ? 'bg-green-400 text-black' : 'hover:bg-gray-700'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleCategorySelect(category.name);
                      }}
                    >
                      <span>{category.name}</span>
                      <ChevronRight size={18} />
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Right Subcategory Panel - Desktop */}
              <div className="w-full md:w-2/3 bg-gray-800 max-h-96 overflow-y-auto">
                {subcategories[selectedCategory] && (
                  <div className="p-4">
                    {subcategories[selectedCategory].map((subcat) => (
                      <Link 
                        to={subcat.path}
                        key={subcat.name}
                        className={`py-3 px-4 flex items-center justify-between ${subcat.name === 'Electric Chimneys' ? 'bg-green-400 text-black' : 'hover:bg-gray-700'}`}
                      >
                        <span>{subcat.name}</span>
                        {subcat.hasSubmenu && <ChevronRight size={18} />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}