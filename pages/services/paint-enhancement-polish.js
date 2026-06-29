import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('paint-enhancement-polish')

export default function PaintEnhancementPolishPage() {
  return <ServicePage service={service} />
}
