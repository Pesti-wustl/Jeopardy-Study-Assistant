import ClueCard from "./ClueCard";
import Clues from "./Clues";

async function fetchRandomClues() {
    const response = await fetch('http://free-jep-api.fly.dev/random') // { cache : 'no-store'}
    const data = await response.json();
    return [data];
}

export default async function RandomClues() {
    const clues = await fetchRandomClues();
    return (
        <div>
            <div className="flex justify-center items-center">
                <Clues clues={clues} />
            </div>
        </div>
    )
}