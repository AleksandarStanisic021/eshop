"use client";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { addItemToCart } from "@/lib/actions/cart.actions";
import Link from "next/link";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }
    toast({
      description: `${item.name} added to cart`,
      action: (
        <ToastAction className="bg-primary text-blue-500" altText="Got To Cart">
          <Link href="/cart">Go To Cart</Link>
        </ToastAction>
      ),
    });
    router.refresh();
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus className="w-4 h-4 mr-2" /> Add To Cart
    </Button>
  );
};

export default AddToCart;
