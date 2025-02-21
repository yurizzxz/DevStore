import type { ComponentProps } from "react";

interface ModalRootProps extends ComponentProps<"div"> {
  openMo: boolean;
  setModalOpen: (open: boolean) => void;
}

export function ModalRoot({ openMo, setModalOpen, ...props }: ModalRootProps) {
  if (!openMo) return null;
  return (
    <div
      {...props}
      aria-hidden={!openMo}
      onClick={() => setModalOpen(false)}
      className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-2 z-50"
    />
  );
}

interface ModalContentProps extends ComponentProps<"div"> {}

export function ModalContent(props: ModalContentProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="bg-navbg rounded-xl shadow-lg w-full max-w-[600px] "
    />
  );
}

interface ModalHeaderProps extends ComponentProps<"div"> {}

export function ModalHeader(props: ModalHeaderProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="pb-5 border-b border-gray-700 text-xl font-semibold flex flex-row items-center justify-between p-5"
    />
  );
}

interface ModalBodyProps extends ComponentProps<"div"> {}

export function ModalBody(props: ModalBodyProps) {
  return (
    <div onClick={(e) => e.stopPropagation()} {...props} className="pb-3" />
  );
}

interface ModalFooterProps extends ComponentProps<"div"> {}

export function ModalFooter(props: ModalFooterProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      {...props}
      className="border-t pt-3 flex justify-end gap-2"
    />
  );
}
