import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('interior-deep-cleaning')

export default function InteriorDeepCleaningPage() {
  return <ServicePage service={service} />
}
