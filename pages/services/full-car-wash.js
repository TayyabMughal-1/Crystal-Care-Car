import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('full-car-wash')

export default function FullCarWashPage() {
  return <ServicePage service={service} />
}
