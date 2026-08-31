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
import { navigation } from "@/data/portfolio";

const destinationIcons = {
  "#projects": FolderKanban,
  "#about": UserRound,
  "#skills": Code2,
  "#experience": BriefcaseBusiness,
  "#contact": Mail,
} as const;

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
          className="hidden min-h-11 min-w-36 justify-between px-3 text-muted lg:inline-flex"
          aria-label="Open command menu"
        >
          <span className="flex items-center gap-2">
            <Search aria-hidden="true" size={15} />
            Navigate
          </span>
          <kbd className="font-mono text-[11px] text-muted">Ctrl K</kbd>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in" />
        <Dialog.Content
          className="fixed left-1/2 top-[16vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-background/96 shadow-[0_2rem_7rem_rgba(0,0,0,0.42)] backdrop-blur-xl"
          aria-describedby="command-description"
        >
          <Dialog.Title className="sr-only">Navigate this portfolio</Dialog.Title>
          <Dialog.Description id="command-description" className="sr-only">
            Choose a section to navigate to.
          </Dialog.Description>
          <Command label="Portfolio navigation">
            <div className="flex h-16 items-center gap-3 border-b border-border px-4">
              <Search aria-hidden="true" className="text-muted" size={18} />
              <Command.Input
                autoFocus
                placeholder="Go to a section..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
              />
              <Dialog.Close asChild>
                <Button variant="ghost" className="size-9 p-0" aria-label="Close command menu">
                  <X aria-hidden="true" size={16} />
                </Button>
              </Dialog.Close>
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
                No section found.
              </Command.Empty>
              <Command.Group heading="Sections" className="command-group">
                {navigation.map((item, index) => {
                  const Icon = destinationIcons[item.href];

                  return (
                    <Command.Item
                      key={item.href}
                      value={item.label}
                      onSelect={() => goTo(item.href)}
                      className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md px-3 text-sm text-muted outline-none transition-colors data-[selected=true]:bg-surface-raised data-[selected=true]:text-foreground"
                    >
                      <span className="grid size-8 place-items-center rounded border border-border bg-surface font-mono text-[11px] text-muted">
                        {index + 1}
                      </span>
                      <Icon aria-hidden="true" size={17} />
                      <span className="flex-1">{item.label}</span>
                      <ArrowRight aria-hidden="true" className="opacity-45" size={14} />
                    </Command.Item>
                  );
                })}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
