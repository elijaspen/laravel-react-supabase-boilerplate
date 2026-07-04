import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function useFlashToast() {
    try {
        const page = usePage();
        const flash = page.props.flash as
            | { success?: string; error?: string; info?: string; warning?: string }
            | undefined;

        useEffect(() => {
            if (!flash) return;

            if (flash.success) {
                toast.success(flash.success);
            }
            if (flash.error) {
                toast.error(flash.error);
            }
            if (flash.info) {
                toast.info(flash.info);
            }
            if (flash.warning) {
                toast.warning(flash.warning);
            }
        }, [flash]);
    } catch {
        // Safe fallback if called outside Inertia Context
    }
}
