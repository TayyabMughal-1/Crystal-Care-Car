import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('interior-cleaning-vacuuming')

export default function InteriorCleaningVacuumingPage() {
  return <ServicePage service={service} />
}
