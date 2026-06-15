import { logos } from '../data/logos'

const repeatedLogos = [...logos, ...logos]

export function LogoMarquee() {
  return (
    <div className='section-images'>
      <ul className='sr-only' aria-label='Customer logos'>
        {logos.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>

      <div className='section-images__track' aria-hidden='true'>
        {repeatedLogos.map((logo, index) => (
          <img alt='' key={`${logo.name}-${index}`} src={logo.src} />
        ))}
      </div>
    </div>
  )
}
