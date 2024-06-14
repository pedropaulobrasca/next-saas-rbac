import { Rocket, Slash } from 'lucide-react'

import OrganizationSwitcher from './organization-switcher'
import { ProfileButton } from './profile-button'

export default async function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Rocket className="size-6" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
