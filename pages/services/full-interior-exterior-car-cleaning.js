import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('full-interior-exterior-car-cleaning')

export default function FullInteriorExteriorCarCleaningPage() {
  return <ServicePage service={service} />
}
