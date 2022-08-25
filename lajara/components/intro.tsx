import { CMS_NAME, CMS_URL } from '../lib/constants'
import Link from '../node_modules/next/link'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href={"/"}>
          <a className="hover:underline">{CMS_NAME}</a>
        </Link>
      </h1>
    </section>
  )
}
