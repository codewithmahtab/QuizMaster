"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Coins, Check, ShoppingBag, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatCoins, getAvatarUrl } from "@/lib/utils";
import { useUserStats } from "@/context/UserStatsContext";

interface ShopItem {
  id: string;
  name: string;
  description: string | null;
  type: string;
  cost: number;
  rarity: string;
  imageUrl: string;
  isPurchased: boolean;
  isEquipped: boolean;
}

interface ShopClientProps {
  initialItems: ShopItem[];
  initialCoins: number;
  username: string;
}

export default function ShopClient({ initialItems, initialCoins, username }: ShopClientProps) {
  const [items, setItems] = useState<ShopItem[]>(initialItems);
  const [coins, setCoinsLocal] = useState(initialCoins);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"shop" | "inventory">("shop");
  const { setCoins: setGlobalCoins } = useUserStats();

  // Keep global context in sync whenever local coins change
  useEffect(() => {
    setGlobalCoins(coins);
  }, [coins, setGlobalCoins]);

  // Wrapper so we always update both local + global
  function setCoins(value: number) {
    setCoinsLocal(value);
    setGlobalCoins(value);
  }

  // Modals
  const [purchasingItem, setPurchasingItem] = useState<ShopItem | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState<ShopItem | null>(null);
  const [loading, setLoading] = useState(false);

  // Get user avatar
  const avatar = getAvatarUrl(username);

  // Refetch status
  async function refreshShop() {
    try {
      const res = await fetch("/api/shop");
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
        setCoins(data.coins);
        router.refresh();
      }
    } catch (e) {
      console.error("Failed to refresh shop data", e);
    }
  }

  // Handle Purchase
  async function handleBuy(item: ShopItem) {
    if (coins < item.cost) return;
    setPurchasingItem(item);
  }

  async function confirmPurchase() {
    if (!purchasingItem) return;
    setLoading(true);

    try {
      const res = await fetch("/api/shop/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: purchasingItem.id }),
      });
      const data = await res.json();

      if (data.success) {
        setCoins(data.coins);
        setPurchaseSuccess(purchasingItem);
        setPurchasingItem(null);
        await refreshShop();
      } else {
        alert(data.error || "Purchase failed");
      }
    } catch {
      alert("Failed to purchase item.");
    } finally {
      setLoading(false);
    }
  }

  // Handle Equip / Unequip
  async function handleEquipToggle(item: ShopItem) {
    const action = item.isEquipped ? "unequip" : "equip";
    try {
      const res = await fetch("/api/shop/equip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId: item.id, action }),
      });
      const data = await res.json();

      if (data.success) {
        await refreshShop();
      }
    } catch (e) {
      console.error("Failed to toggle equip", e);
    }
  }

  const shopItems = items.filter((item) => !item.isPurchased);
  const inventoryItems = items.filter((item) => item.isPurchased);

  const rarityColors: Record<string, string> = {
    common: "bg-muted/80 text-muted-foreground border-muted-foreground/30",
    rare: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    epic: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    legendary: "bg-amber-500/10 text-amber-400 border-amber-500/30 glow-gold",
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-12rem)] md:min-h-[calc(100vh-8rem)] w-full max-w-5xl mx-auto gap-6 sm:gap-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative z-10">
        <div>
          <h1 className="text-xl sm:text-3xl font-black font-[family-name:var(--font-syne)] text-foreground tracking-wide">
            Premium Shop
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-semibold">
            Unlock exclusive avatars and glowing frames
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-[var(--brand-gold)]/20 to-[var(--brand-gold)]/5 border border-[var(--brand-gold)]/30 rounded-full text-sm sm:text-base font-bold text-[var(--brand-gold)] py-2 px-5">
          <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
          {formatCoins(coins)} coins
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex justify-center sm:justify-start">
        <div className="grid grid-cols-2 p-1.5 bg-black/40 rounded-2xl border border-white/5 w-full max-w-sm">
          <button
            onClick={() => setActiveTab("shop")}
            className={cn(
              "h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2",
              activeTab === "shop"
                ? "bg-[var(--brand-violet)] text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            Shop
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={cn(
              "h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2",
              activeTab === "inventory"
                ? "bg-[var(--brand-violet)] text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            Inventory ({inventoryItems.length})
          </button>
        </div>
      </div>

      {/* Grid displays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.18 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 pb-6"
        >
          {activeTab === "shop" ? (
            shopItems.length > 0 ? (
              shopItems.map((item) => (
                <div key={item.id} className="glass-card p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 border border-white/5 hover:border-[var(--brand-gold)]/20 h-full">
                  
                  {/* Rarity badge */}
                  <span className={cn("text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border self-start", rarityColors[item.rarity])}>
                    {item.rarity}
                  </span>

                  {/* Item preview */}
                  <div className="flex justify-center py-6 bg-muted/10 rounded-2xl relative overflow-hidden">
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain drop-shadow-md hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm font-black text-foreground">{item.name}</h3>
                    <p className="text-[11px] text-muted-foreground leading-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Buy action */}
                  <Button
                    onClick={() => handleBuy(item)}
                    disabled={coins < item.cost}
                    className={cn(
                      "w-full h-10 sm:h-12 rounded-xl font-black flex items-center justify-center gap-1.5 transition-all text-sm sm:text-base",
                      coins >= item.cost
                        ? "bg-amber-500 hover:bg-amber-600 text-black border border-amber-400"
                        : "bg-muted text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <Coins className="w-4 h-4" />
                    <span>{item.cost}</span>
                  </Button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center flex flex-col items-center gap-3">
                <span className="text-5xl">🎉</span>
                <p className="text-sm font-bold text-muted-foreground">You bought everything in the Shop!</p>
              </div>
            )
          ) : (
            inventoryItems.length > 0 ? (
              inventoryItems.map((item) => (
                <div key={item.id} className="glass-card p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 relative overflow-hidden border border-white/5 hover:border-[var(--brand-violet)]/30 transition-colors h-full">
                  
                  {/* Rarity badge */}
                  <span className={cn("text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border self-start", rarityColors[item.rarity])}>
                    {item.rarity}
                  </span>

                  {/* Item preview */}
                  <div className="flex justify-center py-6 bg-muted/10 rounded-2xl relative overflow-hidden">
                    <div className="w-20 h-20 sm:w-24 sm:h-24">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain drop-shadow-md hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm font-black text-foreground">{item.name}</h3>
                    <p className="text-[11px] text-muted-foreground leading-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Equip Toggle */}
                  <Button
                    onClick={() => handleEquipToggle(item)}
                    variant={item.isEquipped ? "default" : "outline"}
                    className={cn(
                      "w-full h-10 rounded-xl font-bold flex items-center justify-center gap-1.5 border-border/50",
                      item.isEquipped
                        ? "bg-[var(--brand-success)] text-white hover:bg-[var(--brand-success)]/90"
                        : "hover:border-[var(--brand-violet)] text-foreground"
                    )}
                  >
                    {item.isEquipped ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Equipped</span>
                      </>
                    ) : (
                      <span>Equip</span>
                    )}
                  </Button>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center flex flex-col items-center gap-3">
                <span className="text-5xl">📦</span>
                <p className="text-sm font-bold text-muted-foreground">Your inventory is empty. Spend some coins!</p>
                <Button onClick={() => setActiveTab("shop")} className="bg-[var(--brand-violet)] text-white rounded-xl">
                  Browse Shop
                </Button>
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>

      {/* CONFIRM PURCHASE MODAL */}
      <AnimatePresence>
        {purchasingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPurchasingItem(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm glass-card p-6 flex flex-col gap-5 border border-white/10"
            >
              <div className="text-center space-y-2">
                <h3 className="text-lg font-black font-[family-name:var(--font-syne)] gradient-text">
                  Confirm Purchase
                </h3>
                <p className="text-xs text-muted-foreground">
                  Are you sure you want to buy this item?
                </p>
              </div>

              {/* Item Preview */}
              <div className="flex items-center gap-4 bg-muted/10 p-4 rounded-2xl border border-white/5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={purchasingItem.imageUrl} alt={purchasingItem.name} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{purchasingItem.name}</h4>
                  <span className={cn("text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full border", rarityColors[purchasingItem.rarity])}>
                    {purchasingItem.rarity}
                  </span>
                </div>
              </div>

              {/* Cost Row */}
              <div className="flex items-center justify-between text-sm py-1 border-y border-white/5">
                <span className="text-muted-foreground">Cost:</span>
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Coins className="w-4 h-4" />
                  {purchasingItem.cost}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <Button
                  onClick={() => setPurchasingItem(null)}
                  variant="outline"
                  className="rounded-xl border-border/50 h-12 text-sm font-bold"
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmPurchase}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-black rounded-xl h-12 text-sm border border-amber-400"
                  disabled={loading}
                >
                  {loading ? "Buying..." : "Confirm"}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS PURCHASE MODAL */}
      <AnimatePresence>
        {purchaseSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPurchaseSuccess(null)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-sm glass-card p-6 text-center space-y-6 border border-white/10"
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--brand-success)]/10 flex items-center justify-center text-[var(--brand-success)] border border-[var(--brand-success)]/20">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black font-[family-name:var(--font-syne)] text-[var(--brand-success)]">
                  Purchase Successful! 🎉
                </h3>
                <p className="text-xs text-muted-foreground px-4">
                  You successfully unlocked <b>{purchaseSuccess.name}</b>! Equip it in your Inventory to show it off.
                </p>
              </div>

              <div className="flex justify-center bg-muted/10 py-6 sm:py-8 rounded-2xl">
                <div className="w-20 h-20 sm:w-24 sm:h-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={purchaseSuccess.imageUrl} alt={purchaseSuccess.name} className="w-full h-full object-contain drop-shadow-lg scale-110" />
                </div>
              </div>

              <Button
                onClick={() => {
                  setPurchaseSuccess(null);
                  setActiveTab("inventory");
                }}
                className="w-full h-11 bg-[var(--brand-violet)] text-white font-bold rounded-xl hover:bg-[var(--brand-violet)]/90"
              >
                Equip Now
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
