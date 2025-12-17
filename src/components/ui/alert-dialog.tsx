import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "./button";
import { cn } from "./utils";

export interface AlertDialogProps {
  open: boolean;
  type?: "alert" | "confirm";
  title?: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function AlertDialog({ open, type = "alert", title, message, onConfirm, onCancel }: AlertDialogProps) {
  const handleConfirm = () => {
    onConfirm?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(isOpen) => !isOpen && handleCancel()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[100] w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl border border-gray-200 bg-white p-6 shadow-xl focus:outline-none",
          )}
        >
          {title && (
            <DialogPrimitive.Title className="mb-2 text-lg font-semibold text-gray-900">{title}</DialogPrimitive.Title>
          )}
          <DialogPrimitive.Description className="text-sm text-gray-600 whitespace-pre-wrap">
            {message}
          </DialogPrimitive.Description>
          <div className="mt-6 flex gap-3 justify-end">
            {type === "confirm" && (
              <Button variant="outline" onClick={handleCancel}>
                취소
              </Button>
            )}
            <Button onClick={handleConfirm}>확인</Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

