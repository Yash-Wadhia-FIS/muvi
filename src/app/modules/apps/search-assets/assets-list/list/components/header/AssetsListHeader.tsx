import { AssetsListFilter } from "./AssetsListFilter"
import { AssetsListSearchComponent } from "./AssetsListSearchComponent"


const AssetsListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <AssetsListSearchComponent />
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        <AssetsListFilter />
        {/* end::Group actions */}
      </div>
    </div>
  )
}

export {AssetsListHeader}
