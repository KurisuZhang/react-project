import { IconButton, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';

export function ComponentNav({ title, navComponent: NavComponent }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a href="#" className="hover:text-blue-600">
        Quick Links
      </a>
      <button className="material-icons text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405C17.79 14.79 17 13.42 17 12V8.5A5.5 5.5 0 0012 3v0a5.5 5.5 0 00-5 5.5V12c0 1.42-.79 2.79-2.595 3.595L3 17h5m7 0a3 3 0 01-6 0m6 0H9"
          />
        </svg>
      </button>
      <button className="material-icons text-gray-600">
        <svg
          className="h-5 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M259.491,250.509c-5.389,0-8.982-3.593-8.982-8.982V16.965c0-5.389,3.593-8.982,8.982-8.982s8.982,3.593,8.982,8.982v224.561C268.474,246.916,264.881,250.509,259.491,250.509z" />
            <path d="M259.491,511C131.042,511,25.947,405.905,25.947,277.456c0-103.298,69.165-195.818,167.972-224.561c4.491-1.796,9.881,1.796,10.779,6.288c1.797,4.491-1.796,9.881-6.288,10.779C107.688,96.909,43.912,182.242,43.912,277.456c0,118.568,97.011,215.579,215.579,215.579S475.07,396.025,475.07,277.456c0-95.214-63.775-180.547-155.396-206.596c-4.491-1.796-7.186-6.288-6.288-10.779c1.797-4.491,6.288-7.186,10.779-6.288c99.705,28.744,168.87,120.365,168.87,223.663C493.035,405.905,387.94,511,259.491,511z" />
          </g>
          <g>
            <path d="M250.509,502.018c-128.449,0-233.544-105.095-233.544-233.544c0-103.298,69.165-195.818,167.972-224.561c4.491-1.796,9.881,0.898,10.779,6.288c1.796,4.491-1.796,9.881-6.288,10.779C98.705,87.926,34.93,173.26,34.93,268.474c0,118.568,97.011,215.579,215.579,215.579s215.579-97.011,215.579-215.579c0-95.214-63.775-180.547-155.396-206.596c-4.491-1.796-7.186-6.288-6.288-10.779c1.797-4.491,6.288-7.186,10.779-6.288c99.705,28.744,168.87,120.365,168.87,223.663C484.053,396.923,378.958,502.018,250.509,502.018z" />
            <path d="M250.509,241.526c-5.389,0-8.982-3.593-8.982-8.982V7.982c0-5.389,3.593-8.982,8.982-8.982s8.982,3.593,8.982,8.982v224.561C259.491,237.933,255.898,241.526,250.509,241.526z" />
          </g>
        </svg>
      </button>
    </ul>
  );

  return (
    <div className="-m-6 h-screen w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex gap-4">
            <img src="/square.png" alt="square Logo" height={32} width={32} />
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-bold"
            >
              {title}
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>
      <div className="mx-auto">
        {NavComponent && <NavComponent />} {/* Updated rendering here */}
      </div>
    </div>
  );
}

export default ComponentNav;
