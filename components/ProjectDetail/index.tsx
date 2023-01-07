
import { Project } from '../../models/project.model'
import Markdown from 'markdown-to-jsx'
export const ProjectDetail = ({ title, description, images, repositoryLink, webAppLink, techs }:Project) => {

    return (
      <article className='flex flex-col gap-8 items-center md:text-start text-center md:flex-row-reverse shadow-xl p-2 md:p-8'>
        <img className="lg:w-96 lg:object-cover max-h-screen" src={images[0]} alt={title} />
        <div className='lg:mb-24'>
          <div className='dark:text-white' >
            <Markdown>{description}</Markdown>
          </div>

          <div className="techs flex mt-8 gap-4">
            {techs.map((tech) => {

              if(tech.includes('-')){
                const splited = tech.split("-").join(' ')
                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-14 h-14' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize'>{splited}</span>
                </div>
                )
              } else {

                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-14 h-14' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize'>{tech}</span>
                </div>
                )

              }


            })}
          </div>
          <div className="project-detail__buttons flex flex-col items-center mt-8 gap-3 md:flex-row">
            {repositoryLink && (<a className='btn btn--primary' href={webAppLink}>Go to App</a>)}

            <a className='btn btn--secondary' href={repositoryLink}>Go to Repo</a>
          </div>
        </div>
      </article>
    )
  
}
