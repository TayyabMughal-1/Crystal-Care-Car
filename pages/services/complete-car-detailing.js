import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('complete-car-detailing')

export default function CompleteCarDetailingPage() {
  return <ServicePage service={service} />
}
