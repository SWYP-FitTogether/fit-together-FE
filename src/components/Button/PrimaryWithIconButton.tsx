// Primary with Icon: 기본 + 아이콘

import { Button } from "@/components/ui/button";

export function PrimaryWithIconButton() {
    return (
        <Button
            className="
            bg-main-primary text-gray-600
            hover:bg-main-secondary hover:text-gray-600
            active:bg-main-secondary active:text-gray-600
            disabled:bg-gray-200 disabled:text-gray-400
            "
        >
            PrimaryWithIconButton
        </Button>
    )
}