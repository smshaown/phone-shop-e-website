import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { PhoneCard } from "./PhoneCard";


export const PhonesDetails = () => {

    const [phone, setPhone] = useState();

    const {id} = useParams();

    const phones = useLoaderData();

    useEffect(() => {

        const findPhone = phones.find(phone => phone.id === id)
         setPhone(findPhone)


    },[id,phones])

  return (
    <div className="flex justify-center items-center mt-6">
       <PhoneCard phone={phone} />
    </div>
  )
}
