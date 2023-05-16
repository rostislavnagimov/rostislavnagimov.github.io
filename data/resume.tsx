import { ResumeItemProps } from '@/components/Resume'

export const resumeData: Array<ResumeItemProps> = [
    {
      name: 'Name',
      content: 'Rostislav Nagimov'
    },
    {
      name: 'Preferable position',
      content: 'Front-end developer (ReactJS/NextJS/TypeScript)'
    },
    {
      name: 'Contacts',
      content: (
        <>
          <p>Email: <span>rostislav.nagimov@gmail.com</span></p>
          <p>Telegram: <span>@rostislavnagimov</span></p>
        </>
      )
    },
    {
      name: 'Skills',
      content: (
        <ul>
          <li>React/Next component based development(including Bootstrap and Ant Design components)</li>
          <li>HTML and layout</li>
          <li>CSS(SCSS, LESS, Tailwind, Bootstrap)</li>
          <li>JavaScript(ES6+)</li>
          <li>TypeScript</li>
        </ul>
      )
    },
    {
      name: 'Experience',
      content: (
        <ul>
          <li>10 month commercial experience as a Front-end developer;</li>
          <li>6 month commercial experience in QA;</li>
          <li>3+ years of non-commercial non-development experience in differrent web projects;</li>
          <li>Strong technical engineering background.</li>
        </ul>
      )
    }
  ]