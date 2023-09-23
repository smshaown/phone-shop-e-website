import { useLoaderData } from "react-router-dom"
import { Banner } from "../../components/Header/Banner/Banner"
import { Phones } from "../Phones/Phones"


export const Home = () => {

    const phones = useLoaderData();
    // console.log(phones)

  return (
    <div>
        <Banner />
        <Phones phones={phones} />
    </div>
  )
}
