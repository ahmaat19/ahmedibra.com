import axios from 'axios'
import { NextComponentType } from 'next'
// import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact: NextComponentType = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [webDesign, setWebDesign] = useState<boolean>(false)
  const [eCommerce, setECommerce] = useState<boolean>(false)
  const [dbDevelopment, setDBDevelopment] = useState<boolean>(false)
  const [seoOptimization, setSeoOptimization] = useState<boolean>(false)
  const [mobileDevelopment, setMobileDevelopment] = useState<boolean>(false)
  const [brand, setBrand] = useState<boolean>(false)
  const [success, setSuccess] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const obj = {
      name,
      email,
      phone,
      message,
      service: {
        webDesign,
        eCommerce,
        dbDevelopment,
        seoOptimization,
        mobileDevelopment,
        brand,
      },
    }
    const sendMessage = async () => {
      setLoading(true)
      const { data } = await axios.post(`/api/contact`, obj)
      setLoading(false)
      return await data
    }

    sendMessage()
      .then(({ message }) => {
        setSuccess(message)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setWebDesign(false)
        setECommerce(false)
        setDBDevelopment(false)
        setSeoOptimization(false)
        setMobileDevelopment(false)
        setBrand(false)

        setTimeout(() => {
          setSuccess('')
        }, 10000)
      })
      .catch(({ message }) => {
        setError(message)
        setTimeout(() => {
          setError('')
        }, 10000)
      })
  }

  const services = [
    {
      _id: '1',
      name: 'Web Design',
      value: 'Web Design',
      onChange: (e: any) => setWebDesign(e.target.checked),
      checked: webDesign,
    },
    {
      _id: '2',
      name: 'Database Development',
      value: 'Database Development',
      onChange: (e: any) => setDBDevelopment(e.target.checked),
      checked: dbDevelopment,
    },
    {
      _id: '3',
      name: 'E-Commerce',
      value: 'E-Commerce',
      onChange: (e: any) => setECommerce(e.target.checked),
      checked: eCommerce,
    },
    {
      _id: '4',
      name: 'SEO Optimization',
      value: 'SEO Optimization',
      onChange: (e: any) => setSeoOptimization(e.target.checked),
      checked: seoOptimization,
    },
    {
      _id: '5',
      name: 'Mobile Development',
      value: 'Mobile Development',
      onChange: (e: any) => setMobileDevelopment(e.target.checked),
      checked: mobileDevelopment,
    },
    {
      _id: '6',
      name: 'Branding',
      value: 'Branding',
      onChange: (e: any) => setBrand(e.target.checked),
      checked: brand,
    },
  ]
  return (
    <div id='contact' className='pt-5'>
      <div className='container my-5 text-center'>
        <h1 className=' display-6'>Get in touch!</h1>
        <p className=''>
          I will help to achieve your goals and grow your business
        </p>
        <div className='row pt-3'>
          <div className='col-lg-8 col-md-10 col-12 mx-auto'>
            <div className='row g-3'>
              <div className='col-lg-4 col-md-6 col-12 mx-auto'>
                <div className='card border-0 rounded-0 shadow-sm'>
                  <div className='card-body'>
                    <div className='card-img-top'>
                      <FaMapMarkedAlt className='fs-1 text-warning' />
                    </div>
                    <div className='card-text my-2'>Makka al mukarramah</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 mx-auto'>
                <div className='card border-0 rounded-0 shadow-sm'>
                  <div className='card-body'>
                    <div className='card-img-top'>
                      <FaPhoneAlt className='fs-1 text-warning' />
                    </div>
                    <div className='card-text my-2'>
                      <a
                        className='text-primary text-decoration-none'
                        href='tel:+252615301507'
                      >
                        +252 (0) 61 530 1507
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 mx-auto'>
                <div className='card border-0 rounded-0 shadow-sm'>
                  <div className='card-body'>
                    <div className='card-img-top'>
                      <FaEnvelope className='fs-1 text-warning' />
                    </div>
                    <div className='card-text my-2'>
                      <a
                        className='text-primary text-decoration-none'
                        href='mailto:info@ahmedibra.com'
                      >
                        info@ahmedibra.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-3'>
          <form onSubmit={(e) => handleSubmit(e as FormEvent)} className='p-3'>
            <div className='row'>
              <div className='col-lg-8 col-md-10 col-12 text-start mx-auto bg-white py-5'>
                <div className='row g-3'>
                  <div className='col-12 text-start mx-auto'>
                    <p className='mb-3 text-center'>
                      Please fill out the contact form below to get in touch
                      with me, and I will do my best to respond to you as soon
                      as I can.
                    </p>
                    <div className='mb-3'>
                      <label htmlFor='name' className='text-muted'>
                        Name
                      </label>
                      <input
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type='text'
                        className='form-control p-2 rounded-0 shadow-none'
                        id='name'
                        placeholder='Enter name'
                      />
                    </div>

                    <div className='mb-1'>
                      <label htmlFor='email' className='text-muted'>
                        Email
                      </label>
                      <input
                        required
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='form-control p-2 rounded-0 shadow-none'
                        id='email'
                        placeholder='Enter email address'
                        aria-describedby='emailHelp'
                      />
                    </div>
                    <div
                      id='emailHelp'
                      className='form-text mb-3'
                    >{`I'll never share your email with anyone else.`}</div>

                    <div className='mb-1'>
                      <label htmlFor='phone' className='text-muted'>
                        Phone
                      </label>
                      <input
                        required
                        type='text'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className='form-control p-2 rounded-0 shadow-none'
                        id='phone'
                        placeholder='Enter phone'
                        aria-describedby='phoneHelp'
                      />
                    </div>
                    <div
                      id='phoneHelp'
                      className='form-text mb-3'
                    >{`Your phone number will never be given to a third party.`}</div>

                    <div className='mb-3'>
                      <label htmlFor='message' className='text-muted'>
                        Message
                      </label>
                      <textarea
                        required
                        cols={30}
                        rows={9}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className='form-control p-2 rounded-0 shadow-none'
                        id='message'
                        placeholder='Enter message'
                      />
                    </div>
                    <div className='my-3'>
                      <h5 className=' text-muted'>Services</h5>
                      <ul className='list-group border-0'>
                        {services?.map((service) => (
                          <li
                            key={service?._id}
                            className='list-group-item border-0 shadow-sm rounded-0 mb-1'
                          >
                            <input
                              onChange={service?.onChange}
                              className='form-check-input me-1'
                              type='checkbox'
                              value=''
                              checked={service?.checked}
                              id={service?._id}
                            />
                            <label
                              className='form-check-label'
                              htmlFor={service?._id}
                            >
                              {service?.name}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='my-3 text-center'>
                      {success && (
                        <div className='alert alert-success' role='alert'>
                          {success}
                        </div>
                      )}
                      {error && (
                        <div className='alert alert-danger' role='alert'>
                          {error}
                        </div>
                      )}
                      <button
                        disabled={loading}
                        className='btn btn-warning text-light rounded-pill py-2 px-3'
                      >
                        {loading ? (
                          <span className='spinner-border' />
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
