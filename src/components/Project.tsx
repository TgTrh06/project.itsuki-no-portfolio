import type { Project as ProjectData } from '../data/portfolio'
import Arrow from './Arrow'

export default function Project({ project }: { project: ProjectData }) {
  const isTravel = project.id === 'itsuki-no-tabi'
  return (
    <article className={`project${isTravel ? ' project--travel' : ''}`} aria-labelledby={`${project.id}-title`}>
      <div className="project-visual" data-reveal>
        {project.image ? (
          <figure className="project-screenshot">
            <div className="browser-chrome" aria-hidden="true"><span /><span /><span /><span className="browser-address">itsu sushi / preview</span></div>
            <img src={project.image} alt={project.imageAlt} width="1240" height="550" loading="lazy" decoding="async" />
            <figcaption>{project.imageCaption}</figcaption>
          </figure>
        ) : (
          <div className="travel-composition">
            <span className="eyebrow">ITSUKI NO TABI / PROJECT NOTES</span>
            <div className="travel-title" aria-hidden="true">Mỗi chuyến đi,<br /><em>một câu chuyện.</em></div>
            <div className="journey-steps" aria-label="Các phần của dự án"><span>Khám phá</span><Arrow /><span>Lưu cảm hứng</span><Arrow /><span>Lên lịch trình</span></div>
            <span className="travel-caption">Khám phá điểm đến · Bài viết · Hành trình</span>
          </div>
        )}
      </div>
      <div className="project-info" data-reveal>
        <div className="project-heading"><span className="project-number">{project.number}</span><p className="eyebrow">{project.category}</p></div>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-japanese" lang="ja">{project.japaneseName}</p>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label="Công nghệ">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        <div className="project-links">
          {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Xem demo<span className="sr-only"> {project.name} (mở tab mới)</span><Arrow diagonal /></a>}
          <a className="text-link" href={project.repository} target="_blank" rel="noreferrer">GitHub<span className="sr-only"> {project.name} (mở tab mới)</span><Arrow diagonal /></a>
        </div>
      </div>
      <details className="project-details">
        <summary><span>Câu chuyện phía sau <span className="summary-project-name">{project.name}</span></span><span className="details-icon" aria-hidden="true" /></summary>
        <div className="project-detail-content">
          <div><p className="eyebrow">BỐI CẢNH</p><p>{project.context}</p><p className="eyebrow detail-scope">PHẠM VI</p><p>{project.scope}</p></div>
          <div><p className="eyebrow">NHỮNG ĐIỂM TẬP TRUNG</p><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
        </div>
      </details>
    </article>
  )
}
