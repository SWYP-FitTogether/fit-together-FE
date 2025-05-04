// Primary: 기본

import { Button } from "@/components/ui/button";

export function PrimaryButton() {
    return (
        <Button
            className="
            bg-gray-black text-main-primary
            hover:bg-gray-700  hover:text-main-primary
            active:bg-gray-700  active:text-main-primary
            disabled:bg-gray-200 disabled:text-gray-400
            "
        >
            PrimaryButton
        </Button>
    )
}