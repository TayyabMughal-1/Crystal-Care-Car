import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('paint-sealant-application')

export default function PaintSealantApplicationPage() {
  return <ServicePage service={service} />
}
