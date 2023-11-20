import { NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
}

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-red-500">Netflix Clone</h1>
      <button className="-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>
    </>
  )
}
