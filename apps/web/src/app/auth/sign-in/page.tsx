import Link from 'next/link'

import GithubIcon from '@/assets/github-icon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { signInWithEmailAndPassword } from './actions'

export default function SignInPage() {
  return (
    <form action={signInWithEmailAndPassword} className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />

        <Link
          href="/auth/forgot-password"
          className="text-sm font-medium text-foreground hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full">
        Sign in with e-mail
      </Button>

      <Separator />

      <Button type="submit" className="w-full" variant="outline">
        <GithubIcon className="mr-2 size-4 dark:invert" />
        Sign in with Github
      </Button>
    </form>
  )
}
