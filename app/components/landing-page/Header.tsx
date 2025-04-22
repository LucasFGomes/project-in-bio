import { manageAuth } from "@/app/actions/manage-auth";
import { auth } from "@/app/lib/auth";
import Link from "next/link";
import Button from "../ui/Button";

export default async function Header() {
  const session = await auth()

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <Link href="/">
        <div className="flex items-center gap-4">
          <img
            src="/logo.svg"
            alt="Logotipo da aplicação"
          />
          <h3 className="text-white text-2xl font-bold">
            Project In Bio
          </h3>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {session && <Button>Minha página</Button>}
        <form action={manageAuth}>
          <Button>{session ? "Sair" : "Login"}</Button>
        </form>
      </div>
    </div>
  )
}