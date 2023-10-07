import ClueCard from "./ClueCard";

export default function Clues({ clues }) {
    return (
        <div>
            <div className="flex justify-center items-center">
                {clues.map((clue) => {
                    return (
                        <ClueCard key={clue.id} clue={clue} />
                    )
                })}
            </div>
        </div>
    )
}