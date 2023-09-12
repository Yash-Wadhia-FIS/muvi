import {KTCard} from '../../../../../_metronic/helpers'
import AssetsTable from './SnacksItems'
import { AssetsListHeader } from './components/header/SnacksListHeader'

const SnacksList = () => {
  return (
    <>
      <KTCard>
        <AssetsTable />
      </KTCard>
    </>
  )
}

const SnacksListWrapper = () => (
  <SnacksList />
)

export {SnacksListWrapper}
