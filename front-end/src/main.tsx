import React from "react"
import "./index.css"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import App from "./App"

import { GoogleOAuthProvider } from "@react-oauth/google"

import { Toaster } from "./components/ui/toaster"


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
    
      <Provider store={store}>
     
<GoogleOAuthProvider clientId="520470920092-eqpo37d0jvb127gdlqo4djlg8h9eclsl.apps.googleusercontent.com">

        <App />

      </GoogleOAuthProvider>

        <Toaster />

      </Provider>
      
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
