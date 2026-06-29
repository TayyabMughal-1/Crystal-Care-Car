import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('seat-shampooing')

export default function SeatShampooingPage() {
  return <ServicePage service={service} />
}
