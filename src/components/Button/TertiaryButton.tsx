// Tertiary: 부가

import { Button } from "@/components/ui/button";

export function TertiaryButton() {
    return (
        <Button
            variant="link"
            className="
            text-gray-500 no-underline
            hover:text-gray-700 hover:no-underline
            active:text-gray-700 active:no-underline
            disabled:text-gray-400 disabled:no-underline
            "
        >
            TertiaryButton
        </Button>
    )
}