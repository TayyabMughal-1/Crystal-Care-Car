import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('doorstep-car-wash')

export default function DoorstepCarWashPage() {
  return <ServicePage service={service} />
}
