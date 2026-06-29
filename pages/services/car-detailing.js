import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('car-detailing')

export default function CarDetailingPage() {
  return <ServicePage service={service} />
}
