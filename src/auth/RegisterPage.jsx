import Link from "next/link"
import { Plane } from "lucide-react"
import RegisterForm from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="flex h-20 w-full items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-[#ec5b24]" />
          <span className="text-xl font-bold text-[#ec5b24]">Voyager</span>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
          <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start your journey with Voyager
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Create an account to discover amazing destinations and book your next adventure with ease.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="mt-8 rounded-lg bg-white/50 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-orange-100">
                      <span className="text-sm font-medium text-[#ec5b24]">MS</span>
                    </div>
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Michael Smith</p>
                    <p className="text-sm text-gray-500">
                      "I've been using Voyager for all my business trips. The booking process is seamless and the app
                      keeps all my travel details organized."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-2xl font-bold">Create an account</h2>
              <p className="text-sm text-gray-500">
                Enter your details below to create your account and start your journey
              </p>
            </div>
            <RegisterForm />
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#ec5b24] underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
