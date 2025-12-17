import { useCallback, useEffect, useRef, useState } from "react";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { registerAlertHandler } from "@/utils/alertService";

interface DialogState {
  type: "alert" | "confirm";
  message: string;
  title?: string;
}

export default function AlertProvider() {
  const [dialogState, setDialogState] = useState<DialogState | null>(null);
  const resolveRef = useRef<((value: boolean | void) => void) | null>(null);

  const showAlert = useCallback(({ type, message, title }: DialogState) => {
    return new Promise<boolean | void>((resolve) => {
      resolveRef.current = resolve;
      setDialogState({ type, message, title });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    const resolve = resolveRef.current;
    resolveRef.current = null;
    const currentType = dialogState?.type;
    setDialogState(null);
    if (resolve) {
      resolve(currentType === "confirm" ? true : undefined);
    }
  }, [dialogState?.type]);

  const handleCancel = useCallback(() => {
    const resolve = resolveRef.current;
    resolveRef.current = null;
    setDialogState(null);
    if (resolve) {
      resolve(false);
    }
  }, []);

  useEffect(() => {
    registerAlertHandler(showAlert);
    return () => registerAlertHandler(null);
  }, [showAlert]);

  if (!dialogState) return null;

  return (
    <AlertDialog
      open={!!dialogState}
      type={dialogState.type}
      title={dialogState.title}
      message={dialogState.message}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
}

