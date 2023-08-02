import {KTCard} from '../../../../../_metronic/helpers'
import AssetsTable from './list/AssetsItems'
import { AssetsListHeader } from './list/components/header/AssetsListHeader'

const AssetsList = () => {
  return (
    <>
      <KTCard>
        <AssetsListHeader />
        <AssetsTable />
      </KTCard>
    </>
  )
}

const AssetsListWrapper = () => (
  <AssetsList />
)

export {AssetsListWrapper}
