import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/#about" },
  {
    name: "PRODUCT & SEGMENT",
    href: "/#product",
    dropdown: [
      { name: "Agriculture", href: "/agriculture" },
      { name: "Transport", href: "/transport" },
      { name: "Defense", href: "/defence" },
    ],
  },
  { name: "CAREER", href: "/career" },
  { name: "CONTACT", href: "/#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const location = useLocation();

  const hideNavItems = ["/agriculture", "/defence", "/transport", "/career", "/apply"].includes(
    location.pathname
  );

  const displayedNavItems = navItems.filter((item) => {
    if (hideNavItems && (item.name === "ABOUT US" || item.name === "CONTACT")) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string | null) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <HashLink to="/#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Leotechsa"
            className="h-10 w-auto"
            width="40"
            height="40"
            fetchPriority="high"
          />
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {displayedNavItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <HashLink
                to={item.href}
                className={`nav-link flex items-center gap-1 ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </HashLink>

              {item.dropdown && activeDropdown === item.name && (
                <div
                  className="absolute top-full left-0 mt-2 bg-background shadow-lg rounded-md py-2 min-w-[180px]"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem) => (
                    <HashLink
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                    >
                      {subItem.name}
                    </HashLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-background border-t border-border mt-2">
          <div className="container py-4 flex flex-col gap-4">
            {displayedNavItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <HashLink
                    to={item.href}
                    className="nav-link py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </HashLink>

                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setExpandedMobileItem(
                          expandedMobileItem === item.name ? null : item.name
                        )
                      }
                      className="p-2"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedMobileItem === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.dropdown && expandedMobileItem === item.name && (
                  <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-primary/20 ml-2">
                    {item.dropdown.map((subItem) => (
                      <HashLink
                        key={subItem.name}
                        to={subItem.href}
                        className="text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
