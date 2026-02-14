"use client";

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface TldrContextType {
  tldr: boolean;
  toggleTldr: () => void;
}

const TldrContext = createContext<TldrContextType | undefined>(undefined);

export function TldrProvider({ children }: { children: ReactNode }) {
  const [tldr, setTldr] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const toggleTldr = () => {
    const newValue = !tldr;
    setTldr(newValue);
    
    if (typeof window !== 'undefined') {
        const currentParams = new URLSearchParams(window.location.search);
        if (newValue) {
            currentParams.set("tldr", "true");
        } else {
            currentParams.delete("tldr");
        }
        router.replace(`${pathname}?${currentParams.toString()}`, { scroll: false });
    }
  };

  return (
    <TldrContext.Provider value={{ tldr, toggleTldr }}>
      <Suspense fallback={null}>
        <UrlSyncWrapper setTldr={setTldr} />
      </Suspense>
      {children}
    </TldrContext.Provider>
  );
}

function UrlSyncWrapper({ setTldr }: { setTldr: (val: boolean) => void }) {
    const searchParams = useSearchParams();
    useEffect(() => {
        setTldr(searchParams.get("tldr") === "true");
    }, [searchParams, setTldr]);
    return null;
}

export function useTldr() {
  const context = useContext(TldrContext);
  // Return default context instead of throwing to prevent build crashes in pages without provider (like 404)
  if (context === undefined) {
    return { tldr: false, toggleTldr: () => {} };
  }
  return context;
}
