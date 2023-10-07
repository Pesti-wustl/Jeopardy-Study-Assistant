
import AccessChecker from "@/app/components/AccessChecker";
import RandomClues from "@/app/components/RandomClues";

export default function RandomPage() {
    return (
        <AccessChecker>
            <RandomClues />
        </AccessChecker>
    )
}