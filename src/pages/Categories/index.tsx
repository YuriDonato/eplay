import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        title="Esportes"
        background="gray"
        games={sportsGames}
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="black"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        title="Simulacao"
        background="gray"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        title="Luta"
        background="black"
        games={fightGames}
        isLoading={isLoadingFight}
      />
    </>
  )
}

export default Categories
