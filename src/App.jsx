import "./App.css";

function App() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm px-6">
        {/* logo start */}
        <div className="flex justify-center">
          <div className="font-poppins tracking-wide text-primary text-4xl font-bold">
            FINEbank.IO
          </div>
        </div>
        {/* logo end */}

        {/* form start */}
        <div className="mt-16">
          <form action="">
            {/* email start */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm text-gray-01 mb-2"
              >
                Email address
              </label>

              <input
                type="email"
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0 py-3 pl-4"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
            </div>
            {/* email end */}

            {/* password start */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm text-gray-01 mb-2"
              >
                Password
              </label>

              <input
                type="password"
                className="text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0 py-3 pl-4"
                placeholder="************"
                name="password"
                id="password"
              />
            </div>
            {/* password end */}

            {/* checkbox start */}
            <div className="mb-3">
              <input
                type="checkbox"
                className="text-sm accent-primary"
                name="status"
                id="status"
              />

              <label
                htmlFor="status"
                className="text-sm text-gray-01 ml-6"
              >
                Keep me signed in
              </label>
            </div>
            {/* checkbox end */}

            {/* button login start */}
            <button
              className="rounded-md text-sm bg-primary w-full text-white h-12"
              type="submit"
            >
              Login
            </button>
            {/* button login end */}
          </form>
        </div>
        {/* form end */}

        {/* teks start */}
        <div className="relative flex justify-center items-center my-9 text-xs text-gray-03">
          <div className="border-t border-gray-05 w-full"></div>

          <div className="absolute bg-special-mainBg px-7">
            or sign in with
          </div>
        </div>
        {/* teks end */}

        {/* sign in with google start */}
        <div>
          <button
            className="flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01 h-12"
            type="button"
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.8 23.8 0 0 0 .214 24c0 3.737.867 7.261 2.406 10.388l7.905-6.05A14 14 0 0 1 9.827 24"
                fill="#FBBC05"
              />
              <path
                d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.268 5.311-21.09 13.071l7.908 6.04c1.823-5.532 7.017-9.511 13.182-9.511"
                fill="#EB4335"
              />
              <path
                d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.039c3.822 7.761 11.804 13.072 21.091 13.072 5.732 0 11.204-2.035 15.311-5.849l-7.507-5.804c-2.118 1.334-4.785 2.053-7.804 2.053"
                fill="#34A853"
              />
              <path
                d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804C43.339 37.614 46.145 31.649 46.145 24"
                fill="#4285F4"
              />
            </svg>

            <span>Continue with Google</span>
          </button>
        </div>
        {/* sign in with google end */}

        {/* link start */}
        <div className="flex justify-center mt-6">
          <a
            href="#signup"
            className="text-primary text-sm font-bold"
          >
            Create an account
          </a>
        </div>
        {/* link end */}
      </div>
      {/* container end */}
    </main>
  );
}

export default App;