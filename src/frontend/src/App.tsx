import { Layout } from "@/components/Layout";
import { ToastProvider } from "@/components/Toast";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy, useState } from "react";

// Auth state (simple localStorage-based for frontend-only app)
function getIsLoggedIn() {
  return localStorage.getItem("accessshop_logged_in") === "true";
}
function setLoggedIn(value: boolean) {
  if (value) {
    localStorage.setItem("accessshop_logged_in", "true");
  } else {
    localStorage.removeItem("accessshop_logged_in");
  }
}

// Lazy page imports
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignupPage = lazy(() => import("@/pages/SignupPage"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProductsPage = lazy(() => import("@/pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const AccessibilityPage = lazy(() => import("@/pages/AccessibilityPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

const PageLoader = () => (
  <div className="flex-1 p-8 space-y-4">
    <Skeleton className="h-12 w-2/3" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-4/5" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-48 rounded-2xl" />
      ))}
    </div>
  </div>
);

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Auth wrapper component
function AuthLayout({
  children,
  isProtected = false,
}: { children: React.ReactNode; isProtected?: boolean }) {
  const [loggedIn, setLoggedInState] = useState(getIsLoggedIn);

  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInState(false);
    router.navigate({ to: "/" });
  };

  if (isProtected && !loggedIn) {
    router.navigate({ to: "/" });
    return null;
  }

  return (
    <Layout isLoggedIn={loggedIn} onLogout={handleLogout}>
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </Layout>
  );
}

function AuthOnlyLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout hideNav hideFooter>
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </Layout>
  );
}

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <AuthOnlyLayout>
      <LoginPage
        onLogin={() => {
          setLoggedIn(true);
          router.navigate({ to: "/home" });
        }}
      />
    </AuthOnlyLayout>
  ),
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: () => (
    <AuthOnlyLayout>
      <SignupPage />
    </AuthOnlyLayout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: () => (
    <AuthLayout isProtected>
      <HomePage />
    </AuthLayout>
  ),
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: () => (
    <AuthLayout isProtected>
      <ProductsPage />
    </AuthLayout>
  ),
});

const productDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: () => (
    <AuthLayout isProtected>
      <ProductDetailPage />
    </AuthLayout>
  ),
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: () => (
    <AuthLayout isProtected>
      <CartPage />
    </AuthLayout>
  ),
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: () => (
    <AuthLayout isProtected>
      <CheckoutPage />
    </AuthLayout>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <AuthLayout isProtected>
      <AboutPage />
    </AuthLayout>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <AuthLayout isProtected>
      <ContactPage />
    </AuthLayout>
  ),
});

const accessibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/accessibility",
  component: () => (
    <AuthLayout isProtected>
      <AccessibilityPage />
    </AuthLayout>
  ),
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <AuthLayout isProtected>
      <ProfilePage />
    </AuthLayout>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  signupRoute,
  homeRoute,
  productsRoute,
  productDetailRoute,
  cartRoute,
  checkoutRoute,
  aboutRoute,
  contactRoute,
  accessibilityRoute,
  profileRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastProvider />
    </QueryClientProvider>
  );
}
