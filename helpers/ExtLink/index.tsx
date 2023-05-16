import styles from './index.module.scss'

const ExtLink: React.FC<ExtLinkProps> = ({href, className='external-link', target='self', alias}) => (
  <a
    href={href}
    className={styles[className]}
    target={`_${target}`}
  >
    {alias || href}
  </a>
)

interface ExtLinkProps {
  href: string
  className?: string
  target?: 'blank' | 'self' | 'parent' | 'top'
  alias?: string
}

export default ExtLink;

