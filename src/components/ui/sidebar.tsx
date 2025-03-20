import type { ComponentProps } from "react";

interface SidebarRootProps extends ComponentProps<"div"> {
  openMo: boolean;
  setModalOpen: (open: boolean) => void;
}

export function SidebarRoot({
  openMo,
  setModalOpen,
  ...props
}: SidebarRootProps) {
  if (!openMo) return null;
  return (
    <div
      {...props}
      aria-hidden={!openMo}
      onClick={() => setModalOpen(false)}
      className="fixed inset-0 flex items-center justify-end bg-[rgba(0,0,0,0.5)] z-50"
    />
  );
}

interface SidebarContentProps extends ComponentProps<"div"> {}

export function SidebarContent(props: SidebarContentProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="bg-navbg w-90 md:w-120 h-full rounded-l-xl border-l border-gray-700 shadow-lg"
    />
  );
}

interface SidebarHeaderProps extends ComponentProps<"div"> {}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="pb-5 border-b border-gray-700 text-2xl font-semibold flex flex-row items-center justify-between p-5"
    />
  );
}

interface SidebarBodyProps extends ComponentProps<"div"> {}

export function SidebarBody(props: SidebarBodyProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="flex flex-col pt-1"
    />
  );
}

interface SidebarFooterProps extends ComponentProps<"div"> {}

export function SidebarFooter(props: SidebarFooterProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="border-t pt-3 flex justify-end gap-2 p-5"
    />
  );
}
