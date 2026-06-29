import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('wax-polish')

export default function WaxPolishPage() {
  return <ServicePage service={service} />
}
