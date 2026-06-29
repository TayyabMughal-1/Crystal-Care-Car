import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('headlight-restoration')

export default function HeadlightRestorationPage() {
  return <ServicePage service={service} />
}
