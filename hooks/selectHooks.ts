import { startTransition, useState } from "react";

export function useSelectNext(name: string) {
  const [selectNext, setSelectNext] = useState<string>(name);

  const handleSelect = (name: string) => {
    startTransition(() => setSelectNext(name));
  };

  return { selectNext, handleSelect };
}
