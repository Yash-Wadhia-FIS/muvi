import { AssetsListFilter } from './AssetsListFilter'

const UsersListToolbar = () => {

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <AssetsListFilter />
    </div>
  )
}

export {UsersListToolbar}
