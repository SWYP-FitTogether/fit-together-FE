import { Button } from "@/components/ui/button";

export function UnderlineButton() {
    return (
        <Button
            variant="link"
            className="
            text-gray-500 underline
            hover:text-gray-600 hover:underline
            active:text-gray-600 active:underline
            disabled:text-gray-400 disabled:underline
            "
        >
            UnderlineButton
        </Button>
    )
}