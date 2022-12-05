import React from 'react'
import { useRouter } from 'next/router'
import { Project } from '../../models/project.model'
import { useGetSingleProject } from '../../hooks/useGetSingleProject'
import { ProjectDetail } from '../../components/ProjectDetail/'
import { Layout } from '../../components/Layout'

const Project = () => {
  const router = useRouter()
  const id = router.query.id as string
  const project: Project | any = useGetSingleProject(id)

  if (project.techs) {

    return (
      <Layout>
        <main className='p-4 lg:p-8'>
          <ProjectDetail {...project} />
        </main>

      </Layout>
    )
  }

}

export default Project