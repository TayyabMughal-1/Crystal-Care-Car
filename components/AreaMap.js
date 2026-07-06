import dynamic from 'next/dynamic'

const AreaMapLeaflet = dynamic(() => import('./AreaMapLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="lf-loading">
      <span className="lf-loading-spinner" />
      <span>Loading map…</span>
    </div>
  ),
})

export default function AreaMap({ onBook }) {
  return <AreaMapLeaflet onBook={onBook} />
}
