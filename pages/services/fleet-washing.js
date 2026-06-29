import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('fleet-washing')

export default function FleetWashingPage() {
  return <ServicePage service={service} />
}
