import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('weekly-car-wash-package')

export default function WeeklyCarWashPackagePage() {
  return <ServicePage service={service} />
}
