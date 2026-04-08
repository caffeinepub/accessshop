import { AnimatedPage } from "@/components/AnimatedPage";
import { showCartToast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CATEGORIES,
  PRODUCTS,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { useSpeakWithNarration } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import {
  Filter,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Volume2,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";

type SortOption = "price-asc" | "price-desc" | "name-asc";

const SORT_LABELS: Record<SortOption, string> = {
  "price-asc": "Price: Low → High",
  "price-desc": "Price: High → Low",
  "name-asc": "Name: A → Z",
};

// Reusable audio speak button
function AudioBtn({
  text,
  label,
  ocid,
}: {
  text: string;
  label: string;
  ocid: string;
}) {
  const { speak } = useSpeakWithNarration();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    speak(text);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      data-ocid={ocid}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 flex-shrink-0"
    >
      <Volume2 className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak } = useSpeakWithNarration();
  const priceFormatted = `₹${product.price.toLocaleString("en-IN")}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showCartToast(product.name);
  };

  const handleCartSpeak = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    speak(`Add ${product.name} to cart for ${priceFormatted}`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      className="card-accessible group flex flex-col hover:-translate-y-0.5 hover:shadow-md transition-smooth rounded-xl overflow-hidden border border-border bg-card"
      data-ocid={`product-card-${product.id}`}
      aria-label={`${product.name}, ${priceFormatted}`}
    >
      {/* Product Image — compact h-36 */}
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`View details for ${product.name}`}
        tabIndex={0}
      >
        <div className="relative overflow-hidden bg-muted h-36 w-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
            loading="lazy"
          />
          {product.featured && (
            <div className="absolute top-2 left-2">
              <Badge className="gradient-primary text-white border-0 text-xs font-semibold">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="text-xs font-medium">
              {product.category}
            </Badge>
          </div>
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Product Name Row */}
        <div className="flex items-start gap-2">
          <Link
            to="/products/$id"
            params={{ id: product.id }}
            className="flex-1 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <h3 className="font-display font-bold text-base text-foreground leading-snug line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
          <AudioBtn
            text={`Product name: ${product.name}`}
            label={`Read product name: ${product.name}`}
            ocid={`btn-speak-name-${product.id}`}
          />
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold text-primary leading-none">
            {priceFormatted}
          </span>
          <AudioBtn
            text={`Price: ${priceFormatted}`}
            label={`Read price for ${product.name}`}
            ocid={`btn-speak-price-${product.id}`}
          />
        </div>

        {/* Description Row */}
        <div className="flex items-start gap-2 flex-1">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1 min-w-0">
            {product.description}
          </p>
          <AudioBtn
            text={product.description}
            label={`Read description for ${product.name}`}
            ocid={`btn-speak-desc-${product.id}`}
          />
        </div>

        {/* Add to Cart Row */}
        <div className="flex gap-2 pt-1">
          <Button
            className="flex-1 gap-1.5 py-2 px-3 text-sm font-semibold min-h-[44px] btn-primary"
            onClick={handleAddToCart}
            data-ocid={`btn-add-cart-${product.id}`}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Add to Cart
          </Button>
          <button
            type="button"
            onClick={handleCartSpeak}
            aria-label={`Read add to cart for ${product.name}`}
            data-ocid={`btn-speak-cart-${product.id}`}
            className="inline-flex items-center justify-center w-[44px] min-h-[44px] rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground text-accent-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 flex-shrink-0 border border-border"
          >
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as {
    q?: string;
    category?: string;
    sort?: SortOption;
  };

  const query = search.q ?? "";
  const activeCategory = (search.category as ProductCategory | "All") ?? "All";
  const sortOption = search.sort ?? "price-asc";

  function updateSearch(updates: {
    q?: string;
    category?: string;
    sort?: SortOption;
  }) {
    const current = {
      ...(query ? { q: query } : {}),
      ...(activeCategory !== "All" ? { category: activeCategory } : {}),
      ...(sortOption !== "price-asc" ? { sort: sortOption } : {}),
    };
    const merged = { ...current, ...updates };
    const next: Record<string, string> = Object.fromEntries(
      Object.entries(merged).filter(
        ([k, v]) =>
          v &&
          !(k === "category" && v === "All") &&
          !(k === "sort" && v === "price-asc"),
      ) as [string, string][],
    );
    navigate({ to: "/products", search: next });
  }

  const filtered = useMemo(() => {
    let result = PRODUCTS.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.accessibilityTags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });

    if (sortOption === "price-asc")
      result = [...result].sort((a, b) => a.price - b.price);
    else if (sortOption === "price-desc")
      result = [...result].sort((a, b) => b.price - a.price);
    else if (sortOption === "name-asc")
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [query, activeCategory, sortOption]);

  const isFiltered = query || activeCategory !== "All";
  const productCountLabel = isFiltered
    ? `Showing ${filtered.length} of ${PRODUCTS.length} products`
    : `${PRODUCTS.length} products`;

  return (
    <AnimatedPage className="flex-1 py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-section mb-1 font-display">All Products</h1>
          <p
            className="text-muted-foreground text-readable"
            aria-live="polite"
            aria-atomic="true"
            data-ocid="product-count"
          >
            {productCountLabel}
          </p>
        </motion.div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => updateSearch({ q: e.target.value || undefined })}
              placeholder="Search by name, feature, or tag…"
              className="h-11 pl-12 pr-10 text-base rounded-xl border-input"
              aria-label="Search products"
              data-ocid="input-search"
            />
            {query && (
              <button
                type="button"
                onClick={() => updateSearch({ q: undefined })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <SlidersHorizontal
              className="h-5 w-5 text-muted-foreground hidden sm:block"
              aria-hidden="true"
            />
            <Select
              value={sortOption}
              onValueChange={(val) => updateSearch({ sort: val as SortOption })}
            >
              <SelectTrigger
                className="h-11 w-[200px] rounded-xl text-sm"
                aria-label="Sort products"
                data-ocid="select-sort"
              >
                <SelectValue placeholder="Sort by…" />
              </SelectTrigger>
              <SelectContent>
                {(Object.entries(SORT_LABELS) as [SortOption, string][]).map(
                  ([value, label]) => (
                    <SelectItem key={value} value={value} className="text-sm">
                      {label}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category filter */}
        <fieldset className="border-0 p-0 m-0 mb-6">
          <legend className="sr-only">Filter by category</legend>
          <div className="flex flex-wrap gap-2" data-ocid="category-filter">
            <Filter
              className="h-5 w-5 text-muted-foreground self-center mr-1 hidden sm:block"
              aria-hidden="true"
            />
            {(["All", ...CATEGORIES] as const).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() =>
                    updateSearch({
                      category: cat === "All" ? undefined : cat,
                    })
                  }
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-smooth min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                    isActive
                      ? "gradient-primary text-white shadow-subtle"
                      : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                  aria-pressed={isActive}
                  data-ocid={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              );
            })}
            {isFiltered && (
              <button
                type="button"
                onClick={() => navigate({ to: "/products", search: {} })}
                className="px-3 py-1.5 rounded-full text-sm font-semibold transition-smooth min-h-[40px] text-destructive border border-destructive/30 hover:bg-destructive/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-1 flex items-center gap-1.5"
                aria-label="Clear all filters"
                data-ocid="btn-clear-all-filters"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Clear all
              </button>
            )}
          </div>
        </fieldset>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            data-ocid="products-grid"
          >
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-24 flex flex-col items-center gap-4"
            data-ocid="empty-products"
          >
            <div
              className="text-7xl mb-2 select-none"
              role="img"
              aria-label="Magnifying glass"
            >
              🔍
            </div>
            <h2 className="text-2xl font-bold font-display text-foreground">
              No products found
            </h2>
            <p className="text-muted-foreground text-readable max-w-md">
              We couldn't find anything matching{" "}
              {query ? <strong>"{query}"</strong> : "your filters"}. Try
              adjusting your search or browse a different category.
            </p>
            <Button
              onClick={() => navigate({ to: "/products", search: {} })}
              className="btn-primary mt-2"
              data-ocid="btn-clear-filters"
            >
              Clear all filters
            </Button>
          </motion.div>
        )}
      </div>
    </AnimatedPage>
  );
}
