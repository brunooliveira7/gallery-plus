import * as DialogPrimitive from "@radix-ui/react-dialog";
import type React from "react";
import Card from "./card";
import cn from "classnames";

export const Dialog = DialogPrimitive.Root; //wrapper geral

export const DialogTrigger = DialogPrimitive.Trigger; //usa para abrir o dialog

export const DialogClose = DialogPrimitive.Close; //usa para fechar o dialog

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          `
        fixed left-[50%] top-[50%] w-full max-w-[32rem] z-[60] 
        translate-x-[-50%] translate-y-[-50%] 
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=open]:fade-in-0
        data-[state=closed]:fade-out-0 
        data-[state=open]:slide-in-from-bottom-[48%]
        data-[state=closed]:slide-out-to-bottom-[48%]
        `,
          className
        )}
        {...props}
      >
        <Card variant="primary" size="lg">
          {children}
        </Card>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
