import { useState } from 'react';
import { toast } from 'sonner';

export function useCopyToClipboard(timeout: number = 2000) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string, successMessage: string = 'Copied to clipboard!') => {
        if (!navigator?.clipboard) {
            toast.error('Clipboard API not supported');
            return false;
        }

        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            toast.success(successMessage);

            setTimeout(() => {
                setIsCopied(false);
            }, timeout);

            return true;
        } catch (error) {
            toast.error('Failed to copy');
            console.error('Failed to copy to clipboard', error);
            return false;
        }
    };

    return { isCopied, copyToClipboard };
}
