import { type FC } from "react"
import { Pagination, Table } from "react-bootstrap"

interface CustomPaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

const CustomPagination: FC<CustomPaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const renderPaginationItems = (): JSX.Element[] => {
    const maxVisiblePages = 5

    const paginationItems = [
      <Pagination.Prev
        key="prev"
        onClick={() => {
          onPageChange(currentPage - 1)
        }}
        disabled={currentPage === 1}
      />,
    ]

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - maxVisiblePages &&
          i <= currentPage + maxVisiblePages)
      ) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => {
              onPageChange(i)
            }}
          >
            {i}
          </Pagination.Item>,
        )
      } else if (
        i === currentPage - maxVisiblePages - 1 ||
        i === currentPage + maxVisiblePages + 1
      ) {
        paginationItems.push(<Pagination.Ellipsis key={`ellipsis-${i}`} />)
      }
    }

    paginationItems.push(
      <Pagination.Next
        key="next"
        onClick={() => {
          onPageChange(currentPage + 1)
        }}
        disabled={currentPage === totalPages}
      />,
    )

    return paginationItems
  }

  return (
    <section className="d-flex justify-content-center">
      <Pagination>{renderPaginationItems()}</Pagination>
    </section>
  )
}

interface CustomTableProps {
  headers: string[]
  items: unknown[]
  renderItems: (item: unknown, index?: number) => JSX.Element
  paginated?: boolean
  currentPage?: number
  totalItems?: number
  itemsPerPage?: number
  onPageChange?: (page: number) => void
}

const CustomTable: FC<CustomTableProps> = ({
  headers,
  items,
  renderItems,
  paginated = true,
  currentPage = 1,
  totalItems = 10,
  itemsPerPage = 10,
  onPageChange = (page) => {
    console.log(page)
  },
}) => {
  return (
    <section>
      <Table striped bordered responsive hover className="text-center">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="bg-secondary text-light">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {items.length > 0 && <tbody>{items.map(renderItems)}</tbody>}
        {items.length === 0 && (
          <tfoot>
            <tr>
              <td colSpan={headers.length} className="text-center text-muted">
                No hay datos
              </td>
            </tr>
          </tfoot>
        )}
      </Table>
      {paginated && (
        <CustomPagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      )}
    </section>
  )
}

export default CustomTable
