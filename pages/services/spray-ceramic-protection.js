import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('spray-ceramic-protection')

export default function SprayCeramicProtectionPage() {
  return <ServicePage service={service} />
}
