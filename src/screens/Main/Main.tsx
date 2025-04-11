import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { cn } from "../../lib/utils";

export const Main = (): JSX.Element => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  // Navigation menu items
  const navItems = [
    { label: "О нас", href: "#" },
    { label: "Услуги", href: "#" },
    { label: "Контакты", href: "#" },
  ];

  return (
    <>
      <div className="bg-white flex max-w-[100vw] overflow-x-hidden flex-row justify-center w-full">
        <div className="bg-white w-full relative">
          {/* Hero section with background */}
          <section className="relative w-full h-fit pb-[6rem] bg-[url(/rectangle-1.svg)] bg-cover bg-center">
            {/* Header/Navigation */}
            <header className="grid grid-cols-3 max-[1200px]:grid-cols-2 w-full items-center min-[1200px]:px-[6rem] px-[2rem] min-[1200px]:pt-14 pt-4 justify-between mx-auto">
              {/* Logo */}
              <a
                href="/"
                className="relative cursor-pointer flex items-center h-[63px]"
              >
                <img
                  className="w-[62px] aspect-square"
                  alt="Logisto Logo"
                  src="/group-2.png"
                />
                <div className="ml-3 text-white text-[2.1rem] tracking-[1]">
                  <span className="font-medium">LOGISTO</span>
                  <span className="font-extralight">™</span>
                </div>
              </a>

              {/* Navigation */}
              <nav className="flex w-full justify-center max-[1200px]:hidden items-center gap-[2rem]">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white text-[1.2875rem] font-normal tracking-[0.54px] hover:opacity-70 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Social media */}
              <div className="flex max-[1200px]:hidden justify-end items-center w-full gap-3">
                <div className="size-[3.1rem] flex items-center justify-center">
                  <img
                    className="size-[2.8125rem] cursor-pointer hover:size-[3rem] transition-all duration-300 ease-in-out"
                    alt="Language option"
                    src="/subtract.svg"
                  />
                </div>
                <div className="size-[3.1rem] flex items-center justify-center">
                  <img
                    className="size-[2.8125rem]  cursor-pointer hover:size-[3rem] transition-all duration-300 ease-in-out"
                    alt="Language option"
                    src="/vector.svg"
                  />
                </div>
              </div>

              <div className="max-[1200px]:flex hidden w-full justify-end z-50 relative">
                <Hamburger setValue={setMenuExpanded} value={menuExpanded} />
              </div>
            </header>

            {/* Hero content */}
            <div className="min-[1200px]:w-[calc(100vw-12rem)] w-[calc(100vw-4rem)] flex flex-row max-[1200px]:flex-col mx-auto h-fit mx-auto mt-[6rem]">
              <div className="flex flex-col max-w-full">
                {/* Main headline */}
                <div className="w-full flex flex-col gap-y-[4rem] min-[1200px]:gap-y-[6rem]">
                  <div className="flex flex-col gap-y-[1rem] min-[1200px]:gap-y-[2rem]">
                    <h1 className="text-[3.86875rem] min-[1200px]:text-nowrap max-[1200px]:text-[2rem] text-wrap leading-[1.2] tracking-[0.0775rem] font-medium text-white ">
                      Компания LOGISTO — <br className="max-[1200px]:hidden" />{" "}
                      ваш помощник в любых{" "}
                      <br className="max-[1200px]:hidden" /> грузоперевозках!
                    </h1>
                    <p className="text-white text-[1.4rem] min-[1200px]:text-[1.8rem] leading-[1.2] tracking-[0.045rem] font-normal">
                      г. Смоленск
                    </p>
                  </div>

                  {/* Contact button */}
                  <Button className="relative group h-[4.75rem] w-[16.8125rem] bg-[#d9d9d9] rounded-full text-[#0e3fff] text-[1.40625rem] font-medium tracking-[0.028125rem] transition-all duration-300 ease-in-out hover:bg-[#d9d9d9]">
                    <p className="text-start w-full px-[2.875rem]">Связаться</p>
                    <div className="absolute right-0 group-hover:rotate-45 transition-all duration-300 ease-in-out w-[4.75rem] h-[4.75rem] bg-[#0e3fff] rounded-[2.359375rem] border-[0.176875rem] border-solid border-[#d9d9d9] flex items-center justify-center">
                      <svg
                        className="scale-[1.4]"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.56709 22.0713L22.5905 1.0479M22.5905 1.0479C19.2534 3.05013 11.5115 5.98673 7.24007 1.71531M22.5905 1.0479C20.5883 4.38495 17.6517 12.1269 21.9231 16.3983"
                          stroke="white"
                          stroke-width="1.88772"
                        />
                      </svg>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Vehicle image container */}
              <div className="relative w-full mt-[2rem] aspect-[244/143] flex items-center">
                {/* Background rectangle */}
                <img
                  className="absolute right-0 h-[90%]"
                  alt="Rectangle"
                  src="/rectangle-2.svg"
                />
                {/* Vehicle image */}
                <img
                  className="relative z-30 min-[1200px]:mt-[8rem] mt-[4rem] w-full min-[1200px]:scale-[1.3] min-[1200px]:-translate-x-[15%] aspect-[244/143] object-fit h-auto"
                  alt="Delivery van"
                  src="/free-commercial-vehicle-van-branding-mockup-1.png"
                />
              </div>
            </div>
          </section>

          {/* About section */}
          <section className="px-[5.9375rem] mt-[4.875rem]">
            <Card className="w-[39.1875rem] h-[16.5rem] bg-[#0e3fff] rounded-[2.6875rem] border-none">
              <CardContent className="p-[2.375rem]">
                <p className="text-[2.25625rem] leading-[2.35625rem] tracking-[0.045rem] font-medium text-white">
                  LOGISTO — это команда профессионалов в сфере грузоперевозок и
                  переездов в Смоленске.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      <div
        className={cn(
          "bg-transparent min-[1200px]:hidden transition-[opacity] duration-300 opacity-100 ease-in-out z-40 absolute top-0 right-0 flex justify-end backdrop-blur-[7px] w-full h-screen",
          !menuExpanded && "opacity-0 -z-50"
        )}
      >
        <div className="w-1/2 flex-col justify-between pb-10 h-full flex justify-end px-[2rem] bg-white min-w-[12.5rem]">
          <div className="flex flex-col gap-y-1 mt-[10rem] items-end">
            {navItems.map((item, index) => (
              <p
                key={index}
                className="text-[#0E3FFF] font-medium cursor-pointer text-[1.8rem]"
              >
                {item.label}
              </p>
            ))}
          </div>
          <div className="flex justify-end items-center gap-3">
            <img
              src="/tg-blue.svg"
              className="size-[2.8125rem] cursor-pointer"
              alt="Telegram"
            />
            <img
              src="/vk-blue.svg"
              className="size-[2.8125rem] cursor-pointer"
              alt="VK"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export function Hamburger({
  setValue,
  value,
}: {
  setValue: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}) {
  const handleClick = () => {
    setValue((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}
    >
      <div
        className={cn(
          "bg-white block w-8 h-[0.25rem] rounded transition-all origin-[1px]",
          value ? "rotate-45 bg-[#0E3FFF]" : "rotate-0"
        )}
      />
      <div
        className={cn(
          "bg-white block w-8 h-[0.25rem] rounded transition-all origin-[1px]",
          value ? "translate-x-full bg-transparent" : "translate-x-0"
        )}
      />
      <div
        className={cn(
          "bg-white block w-8 h-[0.25rem] rounded transition-all origin-[1px]",
          value ? "rotate-[-45deg] bg-[#0E3FFF]" : "rotate-0"
        )}
      />
    </button>
  );
}
