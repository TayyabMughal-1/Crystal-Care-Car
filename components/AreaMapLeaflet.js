import { useState, useCallback } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Link from 'next/link'

const AREAS = [
  { name: 'Islamabad',     city: 'Islamabad',  lat: 33.6844, lng: 73.0479, desc: 'Full coverage across all sectors and residential zones.', icon: '🏙️' },
  { name: 'Rawalpindi',    city: 'Rawalpindi', lat: 33.5651, lng: 73.0169, desc: 'Commercial and residential areas including Saddar and Cantt.', icon: '🌆' },
  { name: 'DHA',           city: 'Islamabad',  lat: 33.5284, lng: 73.1248, desc: 'Door-to-door service for all DHA phases in both cities.', icon: '🏘️' },
  { name: 'Bahria Town',   city: 'Islamabad',  lat: 33.5150, lng: 72.9831, desc: 'Complete Bahria Town coverage including all phases.', icon: '🏡' },
  { name: 'Blue Area',     city: 'Islamabad',  lat: 33.7128, lng: 73.0527, desc: 'Corporate clients, offices, and business premises.', icon: '🏢' },
  { name: 'Gulberg Greens',city: 'Islamabad',  lat: 33.6021, lng: 72.9566, desc: 'Residential and commercial clients in Gulberg Greens.', icon: '🌿' },
  { name: 'Saddar',        city: 'Rawalpindi', lat: 33.5965, lng: 73.0434, desc: 'Central Rawalpindi and surrounding market areas.', icon: '📍' },
  { name: 'Satellite Town',city: 'Rawalpindi', lat: 33.5858, lng: 73.0480, desc: 'Homes, offices, and shops in Satellite Town.', icon: '🏠' },
]

function createPin(name, isActive, delay) {
  return L.divIcon({
    className: 'lf-pin-host',
    html: `<div class="lf-pin${isActive ? ' lf-pin--active' : ''}" style="--d:${delay}ms">
      <span class="lf-pin-tag">${name}</span>
      <span class="lf-pin-stem"></span>
      <span class="lf-pin-dot"><span class="lf-pin-pulse"></span></span>
    </div>`,
    iconSize: [1, 1],
    iconAnchor: [0, 0],
  })
}

export default function AreaMapLeaflet({ onBook }) {
  const [selected, setSelected] = useState(null)

  const handleMarkerClick = useCallback((area) => {
    setSelected(prev => prev?.name === area.name ? null : area)
  }, [])

  return (
    <div className="lf-wrap">
      <MapContainer
        center={[33.62, 73.04]}
        zoom={11}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
        className="lf-map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={19}
        />

        {AREAS.map((area, i) => (
          <Marker
            key={`${area.name}-${selected?.name === area.name}`}
            position={[area.lat, area.lng]}
            icon={createPin(area.name, selected?.name === area.name, i * 80)}
            eventHandlers={{ click: () => handleMarkerClick(area) }}
          />
        ))}
      </MapContainer>

      {/* Edge fade vignette */}
      <div className="lf-fade" aria-hidden="true" />

      {/* Floating info card */}
      {selected && (
        <div className="lf-card" key={selected.name}>
          <div className="lf-card-header">
            <span className="lf-card-icon">{selected.icon}</span>
            <div className="lf-card-title">
              <strong>{selected.name}</strong>
              <span>{selected.city}</span>
            </div>
            <Link
              href={`/contact?area=${encodeURIComponent(selected.name)}`}
              className="lf-card-book"
            >
              Book Here
            </Link>
            <button className="lf-card-close" onClick={() => setSelected(null)} aria-label="Close">×</button>
          </div>
          <div className="lf-card-body">
            <p>{selected.desc}</p>
            <span className="lf-card-tag">Doorstep &amp; Mobile Service</span>
          </div>
        </div>
      )}

      {/* Hint shown when nothing is selected */}
      {!selected && (
        <div className="lf-hint">
          <span>📍 Click any marker to see details</span>
        </div>
      )}
    </div>
  )
}
