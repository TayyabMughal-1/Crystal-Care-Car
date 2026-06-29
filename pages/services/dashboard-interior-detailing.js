import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('dashboard-interior-detailing')

export default function DashboardInteriorDetailingPage() {
  return <ServicePage service={service} />
}
