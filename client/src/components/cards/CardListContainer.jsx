import CardList from "./CardList"

function CardListContainer(games) {
    return (
        <div>
            {games && <CardList games={games} />}
        </div>
    )
}

export default CardListContainer
