import { createFileRoute } from '@tanstack/react-router'
import Sidebar from '../components/common/sidebar/Sidebar'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Sidebar />
}
