import { AssetsListFilter } from "./AssetsListFilter"
import { AssetsListSearchComponent } from "./AssetsListSearchComponent"


const AssetsListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <AssetsListSearchComponent />
    </div>
  )
}

export {AssetsListHeader}
