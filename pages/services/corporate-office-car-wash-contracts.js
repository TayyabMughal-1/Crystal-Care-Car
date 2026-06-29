import ServicePage from '../../components/ServicePage'
import { getServiceBySlug } from '../../data/services'

const service = getServiceBySlug('corporate-office-car-wash-contracts')

export default function CorporateOfficeCarWashContractsPage() {
  return <ServicePage service={service} />
}
