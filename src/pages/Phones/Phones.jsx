import { PhonesCard } from "./PhonesCard"

export const Phones = ({phones}) => {


    console.log(phones)

  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl pt-4">All Categories Phones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16">
            {
                phones?.map(phone => <PhonesCard phone={phone} key={phone.id} />)
            }
        </div>
    </div>
  )
}
