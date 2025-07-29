import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">Build a Personalize  Learning Companion</h2>
      <p>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
      <Image 
        src="/images/cta.svg"
        alt="cta image"
        width={362}
        height={232}
        className="hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <button className="group btn-primary hover:scale-110 transition-transform duration-300 ease-in-out">
        <Image 
          src="/icons/plus.svg"
          alt="plus icon"
          width={12}
          height={12}
          className="group-hover:rotate-90 transition-transform duration-300 ease-in-out"
        />
        <Link href="/companions/new">
          <p>Buid a New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA