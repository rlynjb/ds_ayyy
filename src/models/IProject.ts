import { nanoid } from 'nanoid'

interface IProject {
  id: string
  timestamp: number
  title?: string
  subtitle?: string
  link?: string
  image_thumb?: string
  notes?: string
  images?: string[]
}

class ProjectBase implements IProject {
  public id: string = nanoid()
  public timestamp: number = Date.now()
  public title: string = ''
  public subtitle: string = ''
  public link: string = ''
  public image_thumb: string = ''
  public notes: string = ''
  public images: string[] = []
}

class Project extends ProjectBase {}

export {
  type IProject,
  Project,
}