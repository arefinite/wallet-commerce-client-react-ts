const Footer = () => {
  return (
    <footer className="bg-darker text-gray-300 py-4 text-sm">
      <section className="wrapper flex justify-between">
        <div>&copy; {new Date().getFullYear()} by Arefinite</div>
        <div className="tracking-wide">Design and Developed by Adnan Arefin</div>
      </section>
    </footer>
  )
}
export default Footer