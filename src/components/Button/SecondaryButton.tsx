// Secondary: 보조

import { Button } from "@/components/ui/button";

export function SecondaryButton() {
    return (
        <Button
            className="
            bg-gray-100 text-gray-600
            hover:bg-gray-100 hover:text-gray-600
            active:bg-gray-100 active:text-gray-600
            disabled:bg-gray-200 disabled:text-gray-400
            "
        >
            SecondaryButton
        </Button>
    )
}