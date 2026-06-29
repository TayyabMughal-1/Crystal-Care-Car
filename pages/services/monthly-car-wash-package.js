import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('monthly-car-wash-package')

export default function MonthlyCarWashPackagePage() {
  return <ServicePage service={service} />
}
