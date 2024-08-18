import Breadcrumb from "@/components/Breadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <Breadcrumb
<<<<<<< HEAD
        homeElement={'Home'}
        separator={<span> | </span>}
        capitalizeLinks
=======
          homeElement={'Home'}
          separator={<span className="dark:text-white"> | </span>}
          capitalizeLinks
>>>>>>> 3b58ed6bb5dce6886572368028dd9d5da51bb9cc
      />
      <main>{children}</main>
    </>
  )
}