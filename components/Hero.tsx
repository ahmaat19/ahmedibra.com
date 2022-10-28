import { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Hero: NextComponentType = () => {
  return (
    <div className='container py-5 mb-5'>
      <div className='row'>
        <div className='col-lg-7 col-12 my-auto pb-5'>
          <h1 className='fw-bold  display-5 font-customs'>{`I'm Ahmed Ibrahim`}</h1>
          <p style={{ lineHeight: '2rem' }} className='mt-3'>
            <span>
              A Full Stack Developer with 9+ years of experience in
              <strong> designing </strong>
              and <strong> developing user interfaces</strong>,
              <strong> testing</strong>,<strong> debugging</strong>, and
              <strong> training staff </strong> within modern technologies.
            </span>
            <br />
            <span>
              Proven ability in optimizing <strong> web & mobile </strong>
              functionalities that improve data retrieval and workflow
              efficiencies.
            </span>
          </p>
          <a
            href='resume.pdf'
            target='_blank'
            className='btn btn-warning rounded-0 mt-3 px-3 py-2 text-light'
          >
            Download Resume
          </a>
          <Link href='/#contact'>
            <a className='btn btn-outline-warning rounded-0 mt-3 px-3 py-2 ms-3'>
              Contact Me
            </a>
          </Link>
        </div>
        <div className='col-lg-5 col-12 text-center '>
          <Image
            width='411.1879'
            height='369.68268'
            src='/feeling_proud.svg'
            alt='hero image'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
