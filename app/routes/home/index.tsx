import type { Route } from "./+types/index";
// import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {

    // const now = new Date().toISOString();
    // console.log("Are you going to show?");

    // if(typeof window === 'undefined') {
    //     console.log("Server Render At:", now);   
    // } else {
    //     console.log("Client Hydration At:", now);
    // }

    return <>
      Homepage
      {/* <Hero name='Brat' /> */}
    </>;
}
