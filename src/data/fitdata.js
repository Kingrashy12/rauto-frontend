import { BuildImage, FindFitImg, KeyHand, Shop } from "../asset";

export const fitdata = [
  {
    img: FindFitImg,
    title: "Find your teste",
    subtext: "Not sure what you like? Explore all listing to find one",
    linkText: "Explore",
    link: "/all-listing",
  },
  {
    img: BuildImage,
    title: "Build and price",
    subtext: "Choose the make, mode, condition and option you want",
    linkText: "Build you car",
    link: "/not-found",
  },
  {
    img: Shop,
    title: "Buy by budget",
    subtext:
      "Save time and narrow down cars that fit your payment and price point",
    linkText: "Explore buying power",
    link: "/not-found",
  },
  {
    img: KeyHand,
    title: "Sell and Trade",
    subtext: "place an offer in minutes, then cast out or trade in",
    linkText: "Sell your car",
    link: "/sell-your-car",
  },
];
