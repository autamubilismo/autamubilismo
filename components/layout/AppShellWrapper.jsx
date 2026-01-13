'use client'

import { usePathname } from 'next/navigation'
import { AppShell } from './AppShell'

const STUDIO_PREFIX = '/studio'

export const AppShellWrapper = ({ children }) => {
  const pathname = usePathname()
  const isStudioRoute = pathname === STUDIO_PREFIX || pathname?.startsWith(`${STUDIO_PREFIX}/`)

  if (isStudioRoute) {
    return children
  }

  return <AppShell>{children}</AppShell>
}
