import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('family-multiple-vehicle-package')

export default function FamilyMultipleVehiclePackagePage() {
  return <ServicePage service={service} />
}
