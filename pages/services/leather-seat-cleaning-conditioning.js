import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('leather-seat-cleaning-conditioning')

export default function LeatherSeatCleaningConditioningPage() {
  return <ServicePage service={service} />
}
