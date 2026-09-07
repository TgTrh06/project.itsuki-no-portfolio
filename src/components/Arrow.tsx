export default function Arrow({ diagonal = false, down = false }: { diagonal?: boolean; down?: boolean }) {
  return (
    <svg className={`arrow${diagonal ? ' arrow--diagonal' : ''}${down ? ' arrow--down' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
