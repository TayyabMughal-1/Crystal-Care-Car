import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('tire-rim-cleaning')

export default function TireRimCleaningPage() {
  return <ServicePage service={service} />
}
