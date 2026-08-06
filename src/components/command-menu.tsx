"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Mail,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const destinations = [
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = useCallback((href: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }, 80);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="secondary"
          className="hidden h-10 min-w-36 justify-between px-3 text-muted lg:inline-flex"
          aria-label="Open command menu"
        >
          <span className="flex items-center gap-2">
            <Search aria-hidden="true" size={15} />
            Navigate
          </span>
          <kbd className="font-mono text-[11px] text-muted">⌘K</kbd>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
        <Dialog.Content
          className="fixed left-1/2 top-[18vh] z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
          aria-describedby="command-description"
        >
          <Dialog.Title className="sr-only">Navigate this portfolio</Dialog.Title>
          <Dialog.Description id="command-description" className="sr-only">
            Choose a section to navigate to.
          </Dialog.Description>
          <Command label="Portfolio navigation">
            <div className="flex h-14 items-center gap-3 border-b border-border px-4">
              <Search aria-hidden="true" className="text-muted" size={18} />
              <Command.Input
                autoFocus
                placeholder="Go to a section..."
                className="h-full flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
              <Dialog.Close asChild>
                <Button variant="ghost" className="size-8 p-0" aria-label="Close command menu">
                  <X aria-hidden="true" size={16} />
                </Button>
              </Dialog.Close>
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
                No section found.
              </Command.Empty>
              <Command.Group heading="Sections" className="command-group">
                {destinations.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={item.label}
                    onSelect={() => goTo(item.href)}
                    className="flex h-11 cursor-pointer items-center gap-3 rounded-md px-3 text-sm text-muted outline-none data-[selected=true]:bg-surface-raised data-[selected=true]:text-foreground"
                  >
                    <item.icon aria-hidden="true" size={17} />
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight aria-hidden="true" className="opacity-45" size={14} />
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
