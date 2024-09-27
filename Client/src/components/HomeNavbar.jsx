function HomeNavbar() {
  return (
    <div
      className={
        "h-[8rem] w-screen pt-8 px-[5%] flex items-center justify-between"
      }
    >
      <img
        src="/public/Logo-White.svg"
        alt="YamYam logo"
        className={"h-full"}
      />
      <div className={"flex items-center gap-10"}>
        <button className={"text-white text-2xl"}>Login</button>
        <button
          className={
            "text-white text-2xl py-4 px-6 bg-project-orange rounded-full hover:bg-opacity-90 active:bg-opacity-80"
          }
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default HomeNavbar;
