import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()

  if (actionGames && sportsGames && rpgGames && simulationGames && fightGames) {
    return (
      <>
        <ProductsList
          id="action"
          title="Ação"
          background="black"
          games={actionGames}
        />
        <ProductsList
          id="sports"
          title="Esportes"
          background="gray"
          games={sportsGames}
        />
        <ProductsList
          id="rpg"
          title="RPG"
          background="black"
          games={rpgGames}
        />
        <ProductsList
          id="simulation"
          title="Simulacao"
          background="gray"
          games={simulationGames}
        />
        <ProductsList
          id="fight"
          title="Luta"
          background="black"
          games={fightGames}
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
