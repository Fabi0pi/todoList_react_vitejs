import { SummaryItems } from '../../feature/types'
import SummaryItem from './SummaryItem'

const Summary = ({ items }: { items?: SummaryItems[] }) => {
  return (
    <div className="flex justify-between">
      {items?.map((e) => {
        return (
          <SummaryItem key={e.value + e.label} itemName={e.label} itemValue={e.value} />
        )
      })}
    </div>
  )
}

export default Summary
