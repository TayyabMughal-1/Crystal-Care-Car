import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('mobile-car-wash')

export default function MobileCarWashPage() {
  return <ServicePage service={service} />
}
