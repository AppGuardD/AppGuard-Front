import type React from "react" 

const linkedin = <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512" fill='#ffffff'><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>

const github = <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512" fill='#ffffff'><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" /></svg>


const About: React.FC = () => {
  return (
    <div className='container flex-column text-white relative w-11/12 m-4  overflow-hidden'>
			<h1 className='font-semibold mt-1 text-3xl pt-0.25 text-center text-white'>Nuestro Equipo</h1>
      <div className="flex w-full h-[32rem] overflow-hidden">
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img  className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/8f/0b/2e/8f0b2ec5e74f39b4f7fbc791e7420f3e.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Tomas Elias Moukarzel</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/" target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/3f/e1/6b/3fe16bf088b630d0f9b44b21d29f5aa1.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Marcos Barrientos</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/" target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/6f/be/d2/6fbed2593ead0482a521ff4c099501aa.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Humberto Bernal Mondragon</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/in/bernal-mh/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/bemh1997 " target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
						<img className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/736x/8a/6e/42/8a6e421dce43b473af8a71195ef458f1.jpg" alt="" />
						<div className='card-info'>
							<p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Braian Isaac Bascuñan</p>
							<div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 fill-white'>
								<p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
								<div className='transition-all duration-300 flex-row'>
									<a className='m-3' href="https://www.linkedin.com/">{linkedin}</a>
									<a className='m-3' href="https://github.com/">{github}</a>
								</div>
							</div>
						</div>
					</div>
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img  className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/f5/d7/26/f5d7264fb45b255aa75143ed96d1bae0.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Javier Emiro Lopez Arrieta</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/ " target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
          
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img  className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/ff/9e/4a/ff9e4a43552af9d734a08f458a6186c0.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Nestor Camilo Londoño Martinez</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/" target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative w-2/4 transition-all duration-500 ease-in-out overflow-hidden hover:w-full text-center group'>
              <img  className='w-full h-full grow object-cover opacity-50 group-hover:opacity-100 group-hover:contrast-125' src="https://i.pinimg.com/564x/5d/fa/a8/5dfaa8c541b87e24a2bc92af38f5c194.jpg" alt="" />
              <div className='card-info'>
                  <p className='absolute top-16 w-full text-1.5xl uppercase text-white tracking-wide transform rotate-90 transition-all duration-500 ease-out group-hover:rotate-0 group-hover:text-2xl group-hover:text-center group-hover:bg-slate-950 group-hover:top-0'>Juan Andres Bautista Perez</p>
                  <div className='w-full absolute bottom-16 w-full flex items-center justify-center flex-col transform translate-y-20 transition-all duration-300 '>
                      <p className='fs-5'>Full </p><p>Stack</p> <p>Developer</p>
                      <div className='card-link'>
                          <a className='me-3' href="https://www.linkedin.com/" target='_blank'>{linkedin}</a>
                          <a className='me-3' href="https://github.com/" target='_blank'>{github}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}


export default About
