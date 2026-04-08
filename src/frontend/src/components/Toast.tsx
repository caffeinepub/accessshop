import { Toaster } from "sonner";
import { toast } from "sonner";

export { toast };

export function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "bg-card text-card-foreground border border-border shadow-elevated rounded-2xl text-base font-body",
          success: "border-l-4 border-l-[oklch(0.6_0.18_150)]",
          error: "border-l-4 border-l-destructive",
        },
        duration: 4000,
      }}
      richColors
    />
  );
}

export function showCartToast(productName: string) {
  toast.success("Added to cart", {
    description: productName,
    icon: "🛒",
  });
}
