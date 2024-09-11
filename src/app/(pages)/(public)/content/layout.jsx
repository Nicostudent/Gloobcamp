import Breadcrumb from "@/components/Breadcrumb";
import ChatComponent from "@/components/ChatBot";

export default function Layout({ children }) {
  return (
    <>
      <Breadcrumb
          homeElement={'Home'}
          separator={<span className="dark:text-white"> | </span>}
          capitalizeLinks
      />
      <main>{children}</main>
      <ChatComponent />
    </>
  )
}