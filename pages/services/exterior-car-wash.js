import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('exterior-car-wash')

export default function ExteriorCarWashPage() {
  return <ServicePage service={service} />
}
