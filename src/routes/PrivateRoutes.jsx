import Activities from "../pages/Activities"
import Analytics from "../pages/Analytics"
import Dashboard from "../pages/Dashboard"
import GetHelp from "../pages/Get-help"
import Invoices from "../pages/Invoices"
import Messages from "../pages/Messages"
import Settings from "../pages/Settings"
import Wallet from "../pages/Wallet"
import { routes } from "./index"

export const PrivateRoutes = [
  { 'component': <Dashboard />, 'link' : routes.Dashboard },
  { 'component': <Invoices />, 'link' : routes.Invoices },
  { 'component': <Messages />, 'link' : routes.Messages },
  { 'component': <Wallet />, 'link' : routes.MyWallet },
  { 'component': <Activities />, 'link' : routes.Activities },
  { 'component': <Analytics />, 'link' : routes.Analytics },
  { 'component': <GetHelp />, 'link' : routes.GetHelp },
  { 'component': <Settings />, 'link' : routes.Settings },
]